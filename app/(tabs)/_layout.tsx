/** @format */

import { View, Text, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import icons from '../../constants/icons';

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
    <View className="items-center justify-center gap-2">
      <Image
        source={focused ? icon : outlineIcon}
        resizeMode="contain"
        className="w-8 h-8"
        style={{ tintColor: color }}
      />
      <Text
        className={` ${focused ? 'font-psemibold' : 'font-pregular'} text-xs`}
        style={{
          color: color,
          textAlign: 'center',
        }}
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#FFA001',
        tabBarInactiveTintColor: '#CDCDE0',
        tabBarStyle: {
          backgroundColor: '#161622',
          height: 80,
          justifyContent: 'center',
          alignItems: 'center',
          borderTopWidth: 0,
          shadowColor: 'transparent',
          elevation: 0,
          paddingBottom: 10,
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
