/** @format */

import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Reward = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#F5F5F5] px-4">
      {/* Header */}
      <View className="mt-4">
        <Text className="text-black text-xl font-bold text-center">Refer</Text>
      </View>

      {/* Invite Text */}
      <Text className="text-[#007BFF] text-center text-lg font-semibold mt-4">
        Invite friends to Payplane to earn rewards
      </Text>

      {/* Bonus Badge */}
      <View className="flex items-center mt-4">
        <View className="border-2 border-[#007BFF] px-6 py-2 rounded-lg">
          <Text className="text-[#007BFF] text-lg font-bold">%6 Bonus</Text>
        </View>
      </View>

      {/* Referral Instructions */}
      <View className="bg-white p-4 rounded-xl mt-6 ">
        <Text className="text-center text-gray-700">
          Refer friends and earn rewards! Get{' '}
          <Text className="text-[#007BFF] font-bold">6% bonus</Text> on your
          first referral’s deposit.
        </Text>
      </View>

      {/* Rewards Balance */}
      <View className="bg-white p-4 rounded-xl mt-4 ">
        <View className="flex-row justify-between items-center">
          <Text className="text-black font-semibold text-lg">
            My rewards: <Text className="text-[#007BFF] font-bold">₦0</Text>
          </Text>
          <TouchableOpacity className="border border-[#007BFF] px-4 py-1 rounded-lg">
            <Text className="text-[#007BFF] font-semibold">Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Refer a Friend Button */}
      <TouchableOpacity className="bg-[#007BFF] py-3 rounded-full mt-4">
        <Text className="text-white text-center font-semibold">
          Refer a Friend
        </Text>
      </TouchableOpacity>

      {/* Share Invitation Code */}
      <View className="bg-white p-4 rounded-xl mt-6 ">
        <Text className="text-center text-gray-700">Share Invitation Code</Text>

        <View className="flex-row justify-between items-center mt-3 border border-gray-300 p-2 rounded-lg">
          <Text className="text-black font-bold">EPHRAIFDFB</Text>
          <TouchableOpacity className="bg-[#007BFF] px-4 py-2 rounded-lg">
            <Text className="text-white font-semibold">Copy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Reward;
