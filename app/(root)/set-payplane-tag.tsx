/** @format */

import { useTheme } from '@/context/themeProvider';
import React from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../constants/icons';
import { useRouter } from 'expo-router';

const SetPayplaneTag = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const router = useRouter();

  return (
    <SafeAreaView
      className={`flex-1 ${isDark ? 'bg-[#141414]' : 'bg-[#F5F5F5]'} px-4`}
    >
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={isDark ? '#141414' : '#F5F5F5'}
      />

      {/* Header */}
      <View className="flex-row items-center mt-4 pb-4">
        <TouchableOpacity
          className="w-10"
          onPress={() => router.push('/(tabs)/profile')}
        >
          <Image
            source={icons.back}
            className="w-6 h-6"
            style={{ tintColor: isDark ? '#fff' : '#000' }}
          />
        </TouchableOpacity>
        <View className="flex-1 items-center -ml-10">
          <Text
            className={`text-lg font-bold ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
           Set Payplane Tag
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SetPayplaneTag;
