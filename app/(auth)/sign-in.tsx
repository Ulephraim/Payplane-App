/** @format */
import { useAuth } from '@/context/authProvider';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  ActivityIndicator,
  View,
} from 'react-native';

const SignIn = () => {
  const { login } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      return Alert.alert('Sign In', 'Please fill in all required fields');
    }

    setLoading(true);

    let response = await login(email, password);

    setLoading(false);
    console.log('get results :', response);

    if (!response.success) {
      return Alert.alert('Sign In Error', response.msg);
    }

    setEmail('');
    setPassword('');

    router.replace('/(tabs)/home');

    Alert.alert('Success', 'Login successfully!');
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold text-center text-gray-900 mb-6">
        Sign In
      </Text>

      <TextInput
        className="w-full p-3 border border-gray-300 rounded-lg mb-3"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        className="w-full p-3 border border-gray-300 rounded-lg mb-3"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleLogin}
        className="bg-blue-600 p-4 rounded-lg mt-4"
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

      <View className="mt-4 flex-row justify-center">
        <Text className="text-gray-600">Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/(auth)/sign-up')}>
          <Text className="text-blue-600 font-semibold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
