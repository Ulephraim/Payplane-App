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
  ScrollView,
  Image,
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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
      <TouchableOpacity
        className="p-4"
        onPress={() => router.push('/(auth)/sign-in')}
      >
        <Image source={icons.back} className="w-6 h-6" />
      </TouchableOpacity>

      <ScrollView className="mb-3 mt-3 px-4">
        <View className="mb-8">
          <Text className="text-2xl font-bold text-gray-900 mb-2">Sign Up</Text>
          <Text>Enter your details below to create your account</Text>
        </View>

        {/* ✅ Controlled Input Fields */}
        <View className="mb-4">
          <Text className="mb-2">First Name</Text>
          <TextInput
            className="w-full p-3 border border-gray-300 rounded-lg "
            value={firstName}
            onChangeText={setFirstName}
            autoCapitalize="words"
          />
        </View>

        <View className="mb-4">
          <Text className="mb-2">Last Name</Text>
          <TextInput
            className="w-full p-3 border border-gray-300 rounded-lg mb-3"
            value={lastName}
            onChangeText={setLastName}
            autoCapitalize="words"
          />
        </View>

        <View className="mb-4">
          <Text className="mb-2">Email</Text>
          <TextInput
            className="w-full p-3 border border-gray-300 rounded-lg mb-3"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View className="mb-4">
          <Text className="mb-2">Phone Number</Text>
          <TextInput
            className="w-full p-3 border border-gray-300 rounded-lg mb-3"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType="phone-pad"
          />
        </View>

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
              {showPassword ? (
                <Image
                  source={icons.eye}
                  className="w-6 h-6 ml-2"
                  style={{ tintColor: '#007BFF' }}
                />
              ) : (
                <Image
                  source={icons.eyeHide}
                  className="w-6 h-6 ml-2"
                  style={{ tintColor: '#007BFF' }}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-4">
          <Text className="mb-2">Confirm Password</Text>
          <View className="w-full flex-row items-center border border-gray-300 rounded-lg p-3">
            <TextInput
              className="flex-1"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirmPassword}
            />
            <TouchableOpacity
              onPress={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <Image
                  source={icons.eye}
                  className="w-6 h-6 ml-2"
                  style={{ tintColor: '#007BFF' }}
                />
              ) : (
                <Image
                  source={icons.eyeHide}
                  className="w-6 h-6 ml-2"
                  style={{ tintColor: '#007BFF' }}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-4">
          <Text className="mb-2">Referral Code(Optional)</Text>
          <TextInput
            className="w-full p-3 border border-gray-300 rounded-lg mb-3"
            value={referral}
            onChangeText={setReferral}
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          onPress={handleRegister}
          className="bg-[#007BFF] p-4 rounded-lg mt-4"
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#fff" />
          ) : (
            <Text className="text-white text-lg font-semibold text-center">
              Continue
            </Text>
          )}
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
