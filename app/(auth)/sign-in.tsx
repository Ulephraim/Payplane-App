/** @format */
import { useAuth } from '@/context/authProvider';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import icons from '../../constants/icons';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ActivityIndicator,
  View,
  Image,
} from 'react-native';
import images from '@/constants/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignIn = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      return Alert.alert('Sign In', 'Please fill in all required fields');
    }

    setLoading(true);
    let response = await login(email, password);
    setLoading(false);

    if (!response.success) {
      return Alert.alert('Sign In Error', response.msg);
    }

    setEmail('');
    setPassword('');
    router.replace('/(tabs)/home');
    Alert.alert('Success', 'Login successfully!');
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-6">
      {/* Content Wrapper */}

      <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}
      >
        <View className="flex-1 justify-center p-6">
          {/* Logo */}
          <Image
            source={images.payplaneLogo}
            className="w-16 h-16 mx-auto mb-4"
          />
          <Text className="text-3xl font-bold text-center text-gray-900 mb-2">
            Welcome Back
          </Text>
          <Text className="text-center text-xl text-gray-500 mb-6">
            Sign in to continue
          </Text>

          {/* Email Input */}
          <View className="mb-4">
            <Text className="mb-2">Email</Text>
            <TextInput
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          {/* Password Input */}
          <View className="mb-4">
            <Text className="mb-2">Password</Text>
            <View className="w-full flex-row items-center border border-gray-300 rounded-lg p-3">
              <TextInput
                className="flex-1"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image
                  source={showPassword ? icons.eye : icons.eyeHide}
                  className="w-6 h-6"
                  style={{ tintColor: '#007BFF' }}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* Login Button */}
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-[#007BFF] p-4 rounded-lg mt-6"
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text className="text-white text-lg font-semibold text-center">
                Login
              </Text>
            )}
          </TouchableOpacity>

          {/* Reset Password */}
          <TouchableOpacity
            onPress={() => router.push('/(auth)/forgot-password')}
          >
            <Text className="text-[#007BFF] font-semibold text-center mt-6">
              Reset Password
            </Text>
          </TouchableOpacity>
        </View>

        {/* Push this to the bottom */}
        <View className="flex-row justify-center items-center mb-6">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/sign-up')}>
            <Text className="text-[#007BFF] font-semibold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
