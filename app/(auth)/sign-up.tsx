/** @format */
import { useAuth } from '@/context/authProvider';
import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from 'react-native';

const SignUp = () => {
  const { register } = useAuth();
  const [loading, setLoading] = useState(false);

  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');
  const firstNameRef = useRef('');
  const lastNameRef = useRef('');
  const phoneNumberRef = useRef('');
  const referralRef = useRef('');

  const handleRegister = async () => {
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !firstNameRef.current ||
      !lastNameRef.current ||
      !phoneNumberRef.current
    ) {
      return Alert.alert('Sign Up', 'Please fill in all required fields');
    }

    if (passwordRef.current !== confirmPasswordRef.current) {
      return Alert.alert('Sign Up', 'Passwords do not match');
    }

    setLoading(true);

    let response = await register(
      emailRef.current,
      passwordRef.current,
      firstNameRef.current,
      lastNameRef.current,
      phoneNumberRef.current,
      confirmPasswordRef.current,
      referralRef.current
    );

    setLoading(false);
    console.log('get results :', response);
    if (!response.success) {
      return Alert.alert('Sign Up Error', response.msg);
    }

    Alert.alert('Success', 'Account created successfully!');
  };

  return (
    <SafeAreaView className="flex-1 bg-white p-6">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1 justify-center"
      >
        <Text className="text-2xl font-bold text-center text-gray-900 mb-6">
          Sign Up
        </Text>

        <TextInput
          className="w-full p-3 border border-gray-300 rounded-lg mb-3"
          placeholder="First Name"
          value={firstNameRef.current}
          onChangeText={(text) => (firstNameRef.current = text)}
          autoCapitalize="words"
        />

        <TextInput
          className="w-full p-3 border border-gray-300 rounded-lg mb-3"
          placeholder="Last Name"
          value={lastNameRef.current}
          onChangeText={(text) => (lastNameRef.current = text)}
          autoCapitalize="words"
        />

        <TextInput
          className="w-full p-3 border border-gray-300 rounded-lg mb-3"
          placeholder="Email"
          value={emailRef.current}
          onChangeText={(text) => (emailRef.current = text)}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          className="w-full p-3 border border-gray-300 rounded-lg mb-3"
          placeholder="Phone Number"
          value={phoneNumberRef.current}
          onChangeText={(text) => (phoneNumberRef.current = text)}
          keyboardType="phone-pad"
        />

        <TextInput
          className="w-full p-3 border border-gray-300 rounded-lg mb-3"
          placeholder="Referral Code (Optional)"
          value={referralRef.current}
          onChangeText={(text) => (referralRef.current = text)}
        />

        <TextInput
          className="w-full p-3 border border-gray-300 rounded-lg mb-3"
          placeholder="Password"
          value={passwordRef.current}
          onChangeText={(text) => (passwordRef.current = text)}
          secureTextEntry
        />

        <TextInput
          className="w-full p-3 border border-gray-300 rounded-lg mb-3"
          placeholder="Confirm Password"
          value={confirmPasswordRef.current}
          onChangeText={(text) => (confirmPasswordRef.current = text)}
          secureTextEntry
        />

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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default SignUp;
