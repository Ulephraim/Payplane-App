/** @format */

import { db } from '@/firebaseConfig';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { auth } from '@/firebaseConfig';

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  userId: string;
}

interface AuthContextType {
  user: User | null;
  userProfile: UserProfile | null;
  isAuthenticated: boolean | undefined;
  login: (
    email: string,
    password: string
  ) => Promise<{ success: boolean; data?: User; msg?: string }>;
  register: (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    confirmPassword: string,
    referral?: string
  ) => Promise<{ success: boolean; data?: User; msg?: string }>;
  logout: () => Promise<{ success: boolean; msg?: string; error?: unknown }>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log('Got User:', user);
      if (user) {
        setIsAuthenticated(true);
        setUser(user);
        await fetchUserProfile(user.uid);
      } else {
        setIsAuthenticated(false);
        setUser(null);
        setUserProfile(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchUserProfile = async (userId: string) => {
    try {
      const docRef = doc(db, 'users', userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserProfile(docSnap.data() as UserProfile);
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
    }
  };

  const login = async (
    email: string,
    password: string
  ): Promise<{ success: boolean; data?: User; msg?: string }> => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      await fetchUserProfile(response.user.uid);
      return { success: true, data: response.user };
    } catch (e: any) {
      console.error(e);
      let msg = e.message;

      if (msg.includes('(auth/invalid-email)')) msg = 'Invalid Email';
      if (msg.includes('(auth/invalid-credential)'))
        msg = 'Invalid Login details';
      if (msg.includes('(auth/user-not-found)')) msg = 'User not found';
      if (msg.includes('(auth/wrong-password)')) msg = 'Incorrect password';
      if (msg.includes('(auth/too-many-requests)'))
        msg = 'Too many failed attempts, please try again later.';

      return { success: false, msg };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUserProfile(null);
      return { success: true };
    } catch (e) {
      return {
        success: false,
        msg: e instanceof Error ? e.message : 'An unknown error occurred',
        error: e,
      };
    }
  };

  const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    phoneNumber: string,
    confirmPassword: string,
    referral?: string
  ): Promise<{ success: boolean; data?: User; msg?: string }> => {
    if (password !== confirmPassword) {
      return { success: false, msg: 'Passwords do not match' };
    }

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const userData: UserProfile = {
        email,
        firstName,
        lastName,
        phoneNumber,
        userId: response.user.uid,
      };
      await setDoc(doc(db, 'users', response.user.uid), userData);
      setUserProfile(userData);
      return { success: true, data: response.user };
    } catch (e: any) {
      let msg = e.message;
      if (msg.includes('(auth/invalid-email)')) msg = 'Invalid Email';
      if (msg.includes('(auth/email-already-in-use)'))
        msg = 'This email is already in use';
      return { success: false, msg };
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, userProfile, isAuthenticated, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = (): AuthContextType => {
  const value = useContext(AuthContext);
  if (!value) {
    throw new Error('useAuth must be wrapped inside AuthProvider');
  }
  return value;
};
