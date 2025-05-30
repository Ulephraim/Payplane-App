/** @format */

import { View, Text, TouchableOpacity, Image, StatusBar } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../constants/icons';
import { useTheme } from '@/context/themeProvider';

const service = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SafeAreaView
      className={`flex-1 ${isDark ? 'bg-[#141414]' : 'bg-[#F5F5F5]'} px-4`}
    >
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={isDark ? 'bg-[#141414]' : 'bg-[#F5F5F5]'}
      />
      {/* Header */}
      <View className="flex-row justify-between items-center mt-4">
        <Text
          className={`${
            isDark ? 'text-white' : 'text-black'
          } text-xl font-bold`}
        >
          Loan
        </Text>
        <View className="flex-row gap-6">
          <Image
            source={icons.customerCare}
            resizeMode="contain"
            className="w-5 h-5"
          />
          <Image
            source={icons.options}
            resizeMode="contain"
            className="w-5 h-5"
          />
        </View>
      </View>

      {/* Loan Card */}
      <View
        className={`${
          isDark ? 'bg-[#1C1C1C]' : 'bg-white'
        } p-4 rounded-2xl mt-4`}
      >
        <View className="bg-blue-100 py-2 rounded-t-2xl">
          <Text className="text-[#007BFF] text-center font-semibold">
            Fast and convenient loans
          </Text>
        </View>

        <View className="p-4">
          <View className="flex-row items-center gap-2">
            <Image
              source={icons.payment}
              resizeMode="contain"
              className="w-5 h-5"
            />
            <Text
              className={`${
                isDark ? 'text-white' : 'text-black'
              } font-bold text-lg`}
            >
              Cash Loan
            </Text>
          </View>

          <View className="flex-row justify-between mt-3">
            <View>
              <Text className="text-gray-500 text-sm">Loanable Amount</Text>
              <Text
                className={`${
                  isDark ? 'text-white' : 'text-black'
                } text-2xl font-bold`}
              >
                ₦15,000
              </Text>
              <Text className="text-yellow-500 text-sm">
                Daily interest 1.00%
              </Text>
            </View>
            <View>
              <Text className="text-gray-500 text-sm">Loan Period</Text>
              <Text
                className={`${
                  isDark ? 'text-white' : 'text-black'
                } text-2xl font-bold`}
              >
                14 Days
              </Text>
            </View>
          </View>

          <TouchableOpacity className="bg-[#007BFF] py-3 rounded-full mt-4">
            <Text className="text-white text-center font-semibold">Borrow</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Flexi Section */}
      <View
        className={`${
          isDark ? 'bg-[#1C1C1C]' : 'bg-white'
        } p-4 rounded-2xl mt-4 flex-row justify-between items-center`}
      >
        <View className="flex-row items-center">
          <Text className="text-[#007BFF] text-lg mr-2">🛒</Text>
          <Text
            className={`${
              isDark ? 'text-gray-400' : 'text-gray-600'
            } font-semibold`}
          >
            Payuu
          </Text>
          <Text
            className={`${isDark ? 'text-gray-200' : 'text-gray-400'} ml-1`}
          >
            Buy Now, Pay Later
          </Text>
        </View>
        <Text
          className={`${
            isDark ? 'text-white' : 'text-dark'
          } text-black font-bold`}
        >
          ₦3,000
        </Text>
      </View>

      {/* Loan Features */}
      <View className="flex-row justify-between mt-4">
        {/* Amount Increase */}
        <View
          className={`${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          } p-4 rounded-2xl w-[48%]`}
        >
          <Text className={`${isDark ? 'text-white' : 'text-dark'} font-bold`}>
            Amount Increase
          </Text>
          <Text
            className={`${
              isDark ? 'text-gray-400' : 'text-gray-500'
            } text-sm mt-1`}
          >
            Complete all tasks to earn up to ₦10,000 credit increases
          </Text>
          <TouchableOpacity className="bg-[#007BFF] py-2 px-4 rounded-full mt-3 self-start">
            <Text className="text-white font-semibold">Go</Text>
          </TouchableOpacity>
        </View>

        {/* Automatic Repayment */}
        <View
          className={`${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          } p-4 rounded-2xl w-[48%]`}
        >
          <Text className={`${isDark ? 'text-white' : 'text-dark'} font-bold`}>
            Automatic repayment
          </Text>
          <Text
            className={`${
              isDark ? 'text-gray-400' : 'text-gray-500'
            }  text-sm mt-1`}
          >
            Avoid penalty fees for late repayments
          </Text>
          <TouchableOpacity className="bg-[#007BFF] py-2 px-4 rounded-full mt-3 self-start">
            <Text className="text-white font-semibold">Go</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <Text
        className={`${
          isDark ? ' text-gray-300 ' : 'text-gray-500'
        } text-center mt-6`}
      >
        Payuu services are provided by{' '}
        <Text className={`${isDark ? 'text-white' : 'text-black'} font-bold`}>
          Payplane MFB Ltd
        </Text>
      </Text>
    </SafeAreaView>
  );
};

export default service;
