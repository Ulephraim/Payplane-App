/** @format */
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore, collection } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAamHlGlrQvSCgcmnK3-1RBVqsCoGk0MGk',
  authDomain: 'payplane-7c288.firebaseapp.com',
  projectId: 'payplane-7c288',
  storageBucket: 'payplane-7c288.firebasestorage.app',
  messagingSenderId: '590510771706',
  appId: '1:590510771706:web:916bc38dd71067cf56a843',
  measurementId: 'G-N7RRP96SRV',
};

const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const db = getFirestore(app);
export const usersRef = collection(db, 'users');
export const transactionsRef = collection(db, 'transactions');
export const walletsRef = collection(db, 'wallets');
export const cardsRef = collection(db, 'cards');
export const loansRef = collection(db, 'loans');
export const merchantsRef = collection(db, 'merchants');
