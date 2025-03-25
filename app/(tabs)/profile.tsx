/** @format */

import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  Switch,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function Profile() {
  const [darkMode, setDarkMode] = useState(false);
  const [biometrics, setBiometrics] = useState(false);
  const [walletBalance, setWalletBalance] = useState(false);

  return (
    <SafeAreaView className="flex-1  bg-[#F5F5F5]">
      <View className="pb-2">
        <Text className="text-center text-xl font-bold my-4">Profile</Text>
      </View>
      <ScrollView className="px-4">
        {/* Header */}

        {/* User Info */}
        <View className="flex-row bg-white p-4 rounded-lg items-center mb-4">
          <Image
            source={{ uri: 'https://via.placeholder.com/100' }}
            className="w-16 h-16 rounded-full mr-4"
          />
          <View>
            <Text className="text-lg font-bold">Ephraim Imhagbe</Text>
            <Text className="text-gray-500">
              ephraimemmanuell92001@gmail.com
            </Text>
          </View>
        </View>

        {/* Sections */}
        <Section title="Account">
          <ProfileItem icon="👤" label="My Profile" />
          <ProfileItem icon="📄" label="Reports" />
          <ProfileItem icon="📩" label="Referrals" />
          <ProfileItem icon="🎧" label="Help & Support" />
        </Section>

        <Section title="Preference">
          <ToggleItem
            icon="🌙"
            label="Dark Mode"
            state={darkMode}
            setState={setDarkMode}
          />
          <ToggleItem
            icon="🔐"
            label="Biometrics"
            state={biometrics}
            setState={setBiometrics}
          />
          <ToggleItem
            icon="💰"
            label="Wallet Balance"
            state={walletBalance}
            setState={setWalletBalance}
          />
        </Section>

        <Section title="Privacy & Security">
          <ProfileItem icon="🔑" label="Reset Password" />
          <ProfileItem icon="🔢" label="Reset 9jabillpoint PIN" />
          <ProfileItem icon="🆔" label="Verify NIN" />
        </Section>

        <Section title="More">
          <ProfileItem icon="📜" label="Legal" />
          <ProfileItem icon="🗑️" label="Deactivate/Delete Account" />
          <ProfileItem icon="🚪" label="Logout" textColor="text-red-500" />
        </Section>

        <Text className="text-center text-xl  my-10">version 1.0.5 (14)</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

// Section Component
const Section = ({ title, children }) => (
  <View className="mt-4">
    <Text className="text-lg font-semibold text-gray-700 mb-2">{title}</Text>
    <View className="bg-white rounded-lg p-3">{children}</View>
  </View>
);

// Profile Item Component
const ProfileItem = ({ icon, label, textColor = 'text-black' }) => (
  <TouchableOpacity className="flex-row justify-between items-center py-3">
    <Text className="text-lg">{icon}</Text>
    <Text className={`flex-1 ml-3 text-lg ${textColor}`}>{label}</Text>
    <Text>➡️</Text>
  </TouchableOpacity>
);

// Toggle Item Component
const ToggleItem = ({ icon, label, state, setState }) => (
  <View className="flex-row justify-between items-center py-3">
    <Text className="text-lg">{icon}</Text>
    <Text className="flex-1 ml-3 text-lg">{label}</Text>
    <Switch
      value={state}
      onValueChange={setState}
      trackColor={{ false: '#D1D5DB', true: '#007BFF' }}
      thumbColor={state ? '#ffffff' : '#9CA3AF'}
    />
  </View>
);
