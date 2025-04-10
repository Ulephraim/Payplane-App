/** @format */

import { View, Text, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../constants/icons';
import { useRouter } from 'expo-router';
import ServiceItem from '@/components/ServiceItem';

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
    name: 'More',
    icon: icons.more,
    route: '/services/more-services',
  },
];

const billsServices = services.slice(0, 4); // First four
const lifestyleServices = services.slice(4); // Next four

const MoreServices = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-[#F5F5F5] px-4">
      {/* Header */}
      <View className="flex-row items-center mt-4 pb-4">
        <TouchableOpacity
          className="w-10"
          onPress={() => router.push('/(tabs)/home')}
        >
          <Image source={icons.back} className="w-6 h-6" />
        </TouchableOpacity>
        <View className="flex-1 items-center -ml-10">
          <Text className="text-black text-lg font-bold">All Services</Text>
        </View>
      </View>

      {/* Bills Payment Section */}
      <View className="bg-white p-4 rounded-2xl mt-4">
        <Text className="text-black text-lg mb-2 ml-4">Bills Payment</Text>
        <View className="flex-row flex-wrap justify-between">
          {billsServices.map((item) => (
            <ServiceItem key={item.id} item={item} />
          ))}
        </View>
      </View>

      {/* Lifestyle Section */}
      <View className="bg-white p-4 rounded-2xl mt-4">
        <Text className="text-black text-lg mb-2 ml-4">Lifestyle</Text>
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
