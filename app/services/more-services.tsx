/** @format */

import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../constants/icons';
import { useRouter } from 'expo-router';
import ServiceItem from '@/components/ServiceItem';
import { useTheme } from '@/context/themeProvider';

const services: ServiceItem[] = [
  {
    id: 1,
    name: 'Airtime',
    icon: icons.telephone,
    route: '/services/buy-airtime',
  },
  {
    id: 2,
    name: 'Data',
    icon: icons.data,
    route: '/services/buy-data',
  },
  {
    id: 3,
    name: 'Electricity',
    icon: icons.electricity,
    route: '/services/buy-electricity',
  },
  {
    id: 4,
    name: 'TV',
    icon: icons.television,
    route: '/services/buy-tv',
  },
  {
    id: 5,
    name: 'Internet',
    icon: icons.internet,
    route: '/services/buy-internet',
  },
  {
    id: 6,
    name: 'ESims',
    icon: icons.esim,
    route: '/services/buy-esim',
  },
  {
    id: 7,
    name: 'Betting',
    icon: icons.betting,
    route: '/services/buy-betting',
  },
  {
    id: 8,
    name: 'Gift Card',
    icon: icons.giftOutline,
    route: '/services/gift-card',
  },
];

const billsServices = services.slice(0, 4); // First four
const lifestyleServices = services.slice(4); // Next four

const MoreServices = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <SafeAreaView
      className={`flex-1 ${isDark ? 'bg-[#141414]' : 'bg-[#F5F5F5]'} px-4`}
    >
      {/* Header */}
      <View className="flex-row items-center mt-4 pb-4">
        <TouchableOpacity
          className="w-10"
          onPress={() => router.push('/(tabs)/home')}
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
            All Services
          </Text>
        </View>
      </View>

      {/* Bills Payment Section */}
      <View
        className={`p-4 rounded-2xl mt-4 ${
          isDark ? 'bg-[#1C1C1C]' : 'bg-white'
        }`}
      >
        <Text
          className={`text-lg mb-2 ml-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          Bills Payment
        </Text>
        <View className="flex-row flex-wrap justify-between">
          {billsServices.map((item) => (
            <ServiceItem key={item.id} item={item} />
          ))}
        </View>
      </View>

      {/* Lifestyle Section */}
      <View
        className={`p-4 rounded-2xl mt-4 ${
          isDark ? 'bg-[#1C1C1C]' : 'bg-white'
        }`}
      >
        <Text
          className={`text-lg mb-2 ml-4 ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          Lifestyle
        </Text>
        <View className="flex-row flex-wrap justify-between">
          {lifestyleServices.map((item) => (
            <ServiceItem key={item.id} item={item} />
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MoreServices;
