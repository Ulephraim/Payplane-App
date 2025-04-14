/** @format */

import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import icons from '../../constants/icons';
import { useTheme } from '@/context/themeProvider';

interface TabIconProps {
  icon: any;
  outlineIcon: any;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({
  icon,
  outlineIcon,
  color,
  name,
  focused,
}) => {
  return (
    <View className="w-[70px] flex items-center justify-center">
      <Image
        source={focused ? icon : outlineIcon}
        resizeMode="contain"
        className="w-6 h-6"
        style={{ tintColor: color }}
      />
      <Text
        numberOfLines={1}
        className={`text-xs text-center truncate ${
          focused ? 'font-semibold' : 'font-normal'
        }`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#007BFF',
        tabBarInactiveTintColor: '#6B6B6B',
        tabBarStyle: {
          backgroundColor: isDark ? 'black' : '#FFFFFF',
          borderTopColor: '#F5F5F5',
          height: 90,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopWidth: 0,
          shadowColor: 'transparent',
          elevation: 0,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.home}
              outlineIcon={icons.homeOutline}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="service"
        options={{
          title: 'Service',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.loan}
              outlineIcon={icons.loanOutline}
              color={color}
              name="Service"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="reward"
        options={{
          title: 'Reward',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.gift}
              outlineIcon={icons.giftOutline}
              color={color}
              name="Reward"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.profile}
              outlineIcon={icons.profileOutline}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
