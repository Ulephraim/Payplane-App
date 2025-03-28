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

const SignUp = () => {
  const { register } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [referral, setReferral] = useState('');

  const handleRegister = async () => {
    if (!email || !password || !firstName || !lastName || !phoneNumber) {
      return Alert.alert('Sign Up', 'Please fill in all required fields');
    }

    if (password !== confirmPassword) {
      return Alert.alert('Sign Up', 'Passwords do not match');
    }

    setLoading(true);

    let response = await register(
      email,
      password,
      firstName,
      lastName,
      phoneNumber,
      confirmPassword,
      referral
    );

    setLoading(false);
    console.log('get results :', response);

    if (!response.success) {
      return Alert.alert('Sign Up Error', response.msg);
    }

    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setReferral('');

    router.replace('/(tabs)/home');

    Alert.alert('Success', 'Account created successfully!');
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-6">
      <Text className="text-2xl font-bold text-center text-gray-900 mb-6">
        Sign Up
      </Text>

      {/* ✅ Controlled Input Fields */}
      <TextInput
        className="w-full p-3 border border-gray-300 rounded-lg mb-3"
        placeholder="First Name"
        value={firstName}
        onChangeText={setFirstName}
        autoCapitalize="words"
      />

      <TextInput
        className="w-full p-3 border border-gray-300 rounded-lg mb-3"
        placeholder="Last Name"
        value={lastName}
        onChangeText={setLastName}
        autoCapitalize="words"
      />

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
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />

      <TextInput
        className="w-full p-3 border border-gray-300 rounded-lg mb-3"
        placeholder="Referral Code (Optional)"
        value={referral}
        onChangeText={setReferral}
      />

      <TextInput
        className="w-full p-3 border border-gray-300 rounded-lg mb-3"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TextInput
        className="w-full p-3 border border-gray-300 rounded-lg mb-3"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />

      {/* Submit Button */}
      <TouchableOpacity
        onPress={handleRegister}
        className="bg-blue-600 p-4 rounded-lg mt-4"
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text className="text-white text-lg font-semibold text-center">
            Register
          </Text>
        )}
      </TouchableOpacity>

      <View className="mt-4 flex-row justify-center">
        <Text className="text-gray-600">Don't have an account? </Text>
        <TouchableOpacity onPress={() => router.push('/(auth)/sign-in')}>
          <Text className="text-blue-600 font-semibold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;
