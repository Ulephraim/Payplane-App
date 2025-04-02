/** @format */

import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../constants/icons';
import { useRouter } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import images from '@/constants/images';

const AirtimeScreen = () => {
  const router = useRouter();
  const [isBeneficiary, setIsBeneficiary] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#F5F5F5] px-4">
      {/* Header */}
      <View className="flex-row items-center mt-4 pb-4">
        <TouchableOpacity onPress={() => router.push('/(tabs)/home')}>
          <Image source={icons.back} className="w-6 h-6" />
        </TouchableOpacity>
        <Text className="flex-row items-center text-black text-lg font-bold ">
          Airtime
        </Text>
      </View>

      {/* Select Provider */}
      <KeyboardAwareScrollView>
        <Text className="text-black text-lg mt-6">Select Service Provider</Text>
        <View className="flex-row justify-between bg-white p-4 rounded-lg mt-2">
          <Image source={images.mtnnewLogo} className="w-14 h-14" />
          <Image source={images.airtelLogo} className="w-14 h-14" />
          <Image source={images.gloLogo} className="w-14 h-14" />
          <Image source={images.ninemobileLogo} className="w-14 h-14" />
        </View>

        {/* Phone Number Input */}
        <Text className="text-black text-lg font-bold mt-6">Phone Number</Text>
        <View className="bg-white p-3 rounded-lg flex-row items-center mt-2">
          <TextInput
            className="flex-1 text-black text-lg"
            placeholder="Enter phone number"
          />
          <Image
            source={icons.profile}
            style={{ width: 24, height: 24, tintColor: '#007BFF' }}
          />
        </View>

        {/* Amount Input */}
        <Text className="text-black text-lg font-bold mt-6">Amount</Text>
        <View className="bg-white p-3 rounded-lg flex-row items-center mt-2">
          <Text className="text-black text-lg">₦</Text>
          <TextInput
            className="flex-1 text-black text-lg ml-2"
            placeholder="0.00"
            keyboardType="numeric"
          />
        </View>

        {/* Save as Beneficiary */}
        <View className="bg-white p-4 rounded-lg mt-6 flex-row justify-between items-center">
          <Text className="text-black text-lg font-bold">
            Save as Beneficiary
          </Text>
          <Switch
            value={isBeneficiary}
            onValueChange={setIsBeneficiary}
            trackColor={{ true: '#007BFF', false: '#ccc' }}
          />
        </View>

        {/* Continue Button */}
        <TouchableOpacity className="bg-[#007BFF] p-4 rounded-lg mt-6">
          <Text className="text-white text-center text-lg font-bold">
            Continue
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AirtimeScreen;
