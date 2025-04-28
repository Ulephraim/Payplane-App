/** @format */

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import React from 'react';
import icons from '../../constants/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import ServiceItem from '../../components/ServiceItem';
import { useAuth } from '@/context/authProvider';
import ImageSlider from '@/components/ImageSlider';
import { useRouter } from 'expo-router';
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
    name: 'More',
    icon: icons.more,
    route: '/services/more-services',
  },
];

const Home = () => {
  const router = useRouter();

  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const { userProfile } = useAuth();
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  };

  return (
    <SafeAreaView
      edges={['top', 'left', 'right']}
      className={`flex-1 px-4 ${isDark ? 'bg-[#141414]' : 'bg-[#F5F5F5]'}`}
    >
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={isDark ? 'bg-[#141414]' : 'bg-[#F5F5F5]'}
      />
      {/* Header */}
      <View className="flex-row justify-between items-center mt-4 pb-4">
        <TouchableOpacity
          className="flex-row items-center"
          onPress={() => router.push('/(root)/profile')}
        >
          <Image
            source={icons.avatar}
            resizeMode="contain"
            alt="upload"
            className="w-12 h-12 rounded-full mr-3"
          />
          <View>
            <Text
              className={`${
                isDark ? 'text-gray-300' : 'text-gray-500'
              } text-sm`}
            >
              {getGreeting()}
            </Text>
            <Text
              className={`${
                isDark ? 'text-white' : 'text-black'
              } text-lg font-bold`}
            >
              {userProfile?.firstName} {userProfile?.lastName}
            </Text>
          </View>
        </TouchableOpacity>

        <View className="flex-row gap-4 items-center">
          <TouchableOpacity
            className={`${
              isDark ? 'bg-[#232323]' : 'bg-white'
            } rounded-full p-2`}
            onPress={toggleTheme}
          >
            <Image
              source={icons.lightMode}
              resizeMode="contain"
              className="w-5 h-5"
              style={{ tintColor: isDark ? '#fff' : '#000' }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            className={`${
              isDark ? 'bg-[#232323]' : 'bg-white'
            }  rounded-full p-2`}
            activeOpacity={0.7}
            onPress={() => router.push('/(root)/notification')}
          >
            <Image
              source={icons.bell}
              resizeMode="contain"
              className="w-5 h-5"
              style={{ tintColor: isDark ? '#fff' : '#000' }}
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
              source={icons.eyeShow}
              resizeMode="contain"
              className="w-5 h-5"
              style={{ tintColor: 'white' }}
            />
          </View>
          <View className="flex-row justify-between items-center">
            <Text className="text-white text-2xl font-bold mt-1">₦0.00</Text>
            <TouchableOpacity className="bg-white py-2 px-4 rounded-full mt-3 self-start">
              <Text className="text-black text-sm">Add Money</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Services Grid */}
        <View
          className={`${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          } p-4 rounded-2xl mt-4`}
        >
          <View className="flex-row flex-wrap justify-between">
            {services.map((item) => (
              <ServiceItem key={item.id} item={item} />
            ))}
          </View>
        </View>

        {/* Promo Banner */}
        <View>
          <ImageSlider />
        </View>

        {/* Gift Card */}
        <View
          className={`${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          }  p-4 rounded-2xl mt-4 flex-row items-center justify-between`}
        >
          <View>
            <Text
              className={`${
                isDark ? 'text-white' : 'text-black'
              } text-lg font-bold`}
            >
              Gift Card
            </Text>
            <Text className={`${isDark ? 'text-gray-300' : 'text-gray-500'} `}>
              Buy gift cards instantly
            </Text>
          </View>
          <TouchableOpacity
            className="bg-[#007BFF] py-2 px-4 rounded-full"
            onPress={() => router.push('/services/gift-card')}
          >
            <Text className="text-white text-sm">Buy now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
