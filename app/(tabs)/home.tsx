/** @format */

import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import icons from '../../constants/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import ServiceItem from '../../components/ServiceItem';

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

const Home = () => {
  return (
    <SafeAreaView className="flex-1 bg-[#F5F5F5]-100 px-4">
      {/* Header */}
      <View className="flex-row justify-between items-center mt-4 pb-4">
        <View className="flex-row items-center">
          <Image
            source={icons.avatar}
            resizeMode="contain"
            alt="upload"
            className="w-12 h-12 rounded-full mr-3"
          />
          <View>
            <Text className="text-gray-500 text-sm">Good Afternoon</Text>
            <Text className="text-black text-lg font-bold">
              Ephraim imhagbe
            </Text>
          </View>
        </View>

        <View className="flex-row gap-4 items-center">
          <TouchableOpacity
            className="bg-white rounded-full p-2"
            activeOpacity={0.7}
          >
            <Image
              source={icons.lightMode}
              resizeMode="contain"
              className="w-5 h-5"
            />
          </TouchableOpacity>

          <TouchableOpacity
            className="bg-white rounded-full p-2"
            activeOpacity={0.7}
          >
            <Image
              source={icons.bell}
              resizeMode="contain"
              className="w-5 h-5"
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* Scrollable Content */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Balance Card */}
        <View className="bg-[#007BFF] p-4 rounded-2xl mt-4">
          <View className="flex-row gap-4">
            <Text className="text-white text-sm">Available Balance</Text>
            <Image
              source={icons.eye}
              resizeMode="contain"
              className="w-5 h-5"
              style={{ tintColor: 'white' }}
            />
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-white text-2xl font-bold mt-1">₦0.00</Text>
            <TouchableOpacity className="bg-white py-2 px-4 rounded-full mt-3 self-start">
              <Text className="text-[#007BFF] font-semibold">Add Money</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Services Grid */}
        <View className="bg-white p-4 rounded-2xl mt-4">
          <View className="flex-row flex-wrap justify-between">
            {services.map((item) => (
              <ServiceItem key={item.id} item={item} />
            ))}
          </View>
        </View>

        {/* Promo Banner */}
        <View className="bg-white p-4 rounded-2xl mt-4">
          <Image
            source={{ uri: 'https://via.placeholder.com/300x100' }}
            className="w-full h-24 rounded-xl"
          />
        </View>

        {/* Gift Card */}
        <View className="bg-white p-4 rounded-2xl mt-4 flex-row items-center justify-between">
          <View>
            <Text className="text-black text-lg font-bold">Gift Card</Text>
            <Text className="text-gray-500">Buy gift cards instantly</Text>
          </View>
          <TouchableOpacity className="bg-[#007BFF] py-2 px-4 rounded-full">
            <Text className="text-white font-semibold">Buy now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
