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

const BuyTv = () => {
  const [isBeneficiary, setIsBeneficiary] = useState(false);

  return (
    <SafeAreaView className="flex-1 bg-[#F5F5F5] px-4">
      {/* Header */}
      <View className="flex-row items-center mt-4 pb-4">
        <TouchableOpacity>
          <Image source={icons.back} className="w-6 h-6" />
        </TouchableOpacity>
        <Text className="text-black text-lg font-bold ml-4">Airtime</Text>
      </View>

      {/* Tab Selector */}
      <View className="flex-row bg-gray-200 p-2 rounded-lg">
        <TouchableOpacity className="flex-1 bg-white p-3 rounded-lg">
          <Text className="text-black text-center">Local</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 p-3 rounded-lg">
          <Text className="text-gray-500 text-center">International</Text>
        </TouchableOpacity>
      </View>

      {/* Select Provider */}
      <Text className="text-black text-lg font-bold mt-6">
        Select Service Provider
      </Text>
      <View className="flex-row justify-between bg-white p-4 rounded-lg mt-2">
        <Image source={icons.profile} className="w-14 h-14" />
        <Image source={icons.profile} className="w-14 h-14" />
        <Image source={icons.profile} className="w-14 h-14" />
        <Image source={icons.profile} className="w-14 h-14" />
      </View>

      {/* Phone Number Input */}
      <Text className="text-black text-lg font-bold mt-6">Phone Number</Text>
      <View className="bg-white p-3 rounded-lg flex-row items-center mt-2">
        <TextInput
          className="flex-1 text-black text-lg"
          placeholder="Enter phone number"
        />
        <Image source={icons.profile} className="w-6 h-6 text-gray-400" />
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
    </SafeAreaView>
  );
};

export default BuyTv;
