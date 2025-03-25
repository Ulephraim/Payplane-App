/** @format */

import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const service = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#F5F5F5] px-4">
      {/* Header */}
      <View className="flex-row justify-between items-center mt-4">
        <Text className="text-black text-xl font-bold">Loan</Text>
        <View className="flex-row space-x-4">
          <Text className="text-gray-600 text-lg">🎧</Text>
          <Text className="text-gray-600 text-lg">⋮</Text>
        </View>
      </View>

      {/* Loan Card */}
      <View className="bg-white p-4 rounded-2xl mt-4">
        <View className="bg-blue-100 py-2 rounded-t-2xl">
          <Text className="text-[#007BFF] text-center font-semibold">
            Fast and convenient loans
          </Text>
        </View>

        <View className="p-4">
          <View className="flex-row items-center">
            <Text className="text-[#007BFF] text-lg mr-2">📄</Text>
            <Text className="text-black font-bold text-lg">Cash Loan</Text>
          </View>

          <View className="flex-row justify-between mt-3">
            <View>
              <Text className="text-gray-500 text-sm">Loanable Amount</Text>
              <Text className="text-black text-2xl font-bold">₦8,000</Text>
              <Text className="text-yellow-500 text-sm">
                Daily interest 1.00%
              </Text>
            </View>
            <View>
              <Text className="text-gray-500 text-sm">Loan Period</Text>
              <Text className="text-black text-2xl font-bold">25 Days</Text>
            </View>
          </View>

          <TouchableOpacity className="bg-[#007BFF] py-3 rounded-full mt-4">
            <Text className="text-white text-center font-semibold">Borrow</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Flexi Section */}
      <View className="bg-white p-4 rounded-2xl mt-4 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Text className="text-[#007BFF] text-lg mr-2">🛒</Text>
          <Text className="text-gray-600 font-semibold">Flexi</Text>
          <Text className="text-gray-400 ml-1">Buy Now, Pay Later</Text>
        </View>
        <Text className="text-black font-bold">₦1,900</Text>
      </View>

      {/* Loan Features */}
      <View className="flex-row justify-between mt-4">
        {/* Amount Increase */}
        <View className="bg-white p-4 rounded-2xl w-[48%]">
          <Text className="text-black font-bold">Amount Increase</Text>
          <Text className="text-gray-500 text-sm mt-1">
            Complete all tasks to earn up to ₦5000 credit increases
          </Text>
          <TouchableOpacity className="bg-[#007BFF] py-2 px-4 rounded-full mt-3 self-start">
            <Text className="text-white font-semibold">Go</Text>
          </TouchableOpacity>
        </View>

        {/* Automatic Repayment */}
        <View className="bg-white p-4 rounded-2xl w-[48%]">
          <Text className="text-black font-bold">Automatic repayment</Text>
          <Text className="text-gray-500 text-sm mt-1">
            Avoid penalty fees for late repayments
          </Text>
          <TouchableOpacity className="bg-[#007BFF] py-2 px-4 rounded-full mt-3 self-start">
            <Text className="text-white font-semibold">Go</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <Text className="text-gray-500 text-center mt-6">
        Flexi services are provided by{' '}
        <Text className="font-bold text-black">Blooms MFB Ltd</Text>
      </Text>
    </SafeAreaView>
  );
};

export default service;
