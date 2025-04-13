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
  Alert,
} from 'react-native';
import icons from '../../constants/icons';
import { useAuth } from '@/context/authProvider';
import { useRouter } from 'expo-router';
import LogoutModal from '@/components/LogoutModal';

export default function Profile() {
  const [darkMode, setDarkMode] = useState(false);
  const [biometrics, setBiometrics] = useState(false);
  const [walletBalance, setWalletBalance] = useState(false);
  const { userProfile, logout } = useAuth();
  const router = useRouter();

  const [isLogoutModalVisible, setIsLogoutModalVisible] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
      setIsLogoutModalVisible(false);
      router.replace('/(auth)/sign-in');
    } catch (error) {
      Alert.alert('Logout Failed', 'Something went wrong while logging out.');
    }
  };

  return (
    <SafeAreaView className="flex-1  bg-[#F5F5F5]">
      <View className="pb-2">
        <Text className="text-center text-xl font-bold my-4">Profile</Text>
      </View>
      <ScrollView className="px-4">
        {/* Header */}

        {/* User Info */}
        <View className="flex-row bg-white p-4  gap-4 rounded-lg items-center mb-4">
          <View
            style={{
              width: 54,
              height: 54,
              backgroundColor: '#f5f5f5',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={icons.profileUser}
              resizeMode="contain"
              className="w-5 h-5"
            />
          </View>

          <View>
            <Text className="text-lg font-bold">
              {userProfile?.firstName} {userProfile?.lastName}
            </Text>
            <Text className="text-gray-500">{userProfile?.email}</Text>
          </View>
        </View>

        {/* Sections */}
        <Section title="Account">
          <ProfileItem
            icon={icons.profileUser}
            label="My Profile"
            onPress={() => router.push('/(root)/profile')}
          />
          <ProfileItem
            icon={icons.report}
            label="Reports"
            onPress={() => router.push('/(root)/reports')}
          />
          <ProfileItem
            icon={icons.send}
            label="Referrals"
            onPress={() => router.push('/(root)/referrals')}
          />
          <ProfileItem
            icon={icons.customerCare}
            label="Help & Support"
            onPress={() => router.push('/(root)/help-support')}
          />
        </Section>

        <Section title="Preference">
          <ToggleItem
            icon={icons.darkMode}
            label="Dark Mode"
            state={darkMode}
            setState={setDarkMode}
          />
          <ToggleItem
            icon={icons.biometrics}
            label="Biometrics"
            state={biometrics}
            setState={setBiometrics}
          />
          <ToggleItem
            icon={icons.wallet}
            label="Wallet Balance"
            state={walletBalance}
            setState={setWalletBalance}
          />
        </Section>

        <Section title="Privacy & Security">
          <ProfileItem
            icon={icons.security}
            label="Reset Password"
            onPress={() => router.push('/(root)/reset-password')}
          />
          <ProfileItem
            icon={icons.secure}
            label="Reset Payplane PIN"
            onPress={() => router.push('/(root)/reset-payplane-pin')}
          />
          <ProfileItem
            icon={icons.verified}
            label="Verify NIN"
            onPress={() => router.push('/(root)/verify-nin')}
          />
        </Section>

        <Section title="More">
          <ProfileItem
            icon={icons.stamp}
            label="Legal"
            onPress={() => router.push('/(root)/legal')}
          />
          <ProfileItem
            icon={icons.deleteBtn}
            label="Deactivate/Delete Account"
            onPress={() => router.push('/(root)/delete-account')}
          />
          <ProfileItem
            icon={icons.logout}
            label="Logout"
            textColor="text-red-500"
            onPress={() => setIsLogoutModalVisible(true)}
          />
        </Section>

        <Text className="text-center text-xl  my-10">version 1.0.0</Text>
      </ScrollView>

      {/* Logout Modal */}
      <LogoutModal
        visible={isLogoutModalVisible}
        onClose={() => setIsLogoutModalVisible(false)}
        onConfirm={handleLogout}
      />
    </SafeAreaView>
  );
}

// Section Component
const Section = ({ title, children }: any) => (
  <View className="mt-4">
    <Text className="text-lg font-semibold text-gray-700 mb-2">{title}</Text>
    <View className="bg-white rounded-lg p-3">{children}</View>
  </View>
);

// Profile Item Component
const ProfileItem = ({
  onPress,
  icon,
  label,
  textColor = 'text-black',
}: any) => (
  <TouchableOpacity
    className="flex-row justify-between items-center py-3 px-2"
    onPress={onPress}
  >
    <View
      style={{
        width: 42,
        height: 42,
        backgroundColor: '#f5f5f5',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image source={icon} resizeMode="contain" className="w-5 h-5" />
    </View>

    <Text className={`flex-1 ml-3 text-lg ${textColor}`}>{label}</Text>
    <Image source={icons.rightArrow} resizeMode="contain" className="w-3 h-3" />
  </TouchableOpacity>
);

// Toggle Item Component
const ToggleItem = ({ icon, label, state, setState }: any) => (
  <View className="flex-row justify-between items-center py-3 px-2">
    <View
      style={{
        width: 42,
        height: 42,
        backgroundColor: '#f5f5f5',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image source={icon} resizeMode="contain" className="w-5 h-5" />
    </View>

    <Text className="flex-1 ml-3 text-lg">{label}</Text>
    <Switch
      value={state}
      onValueChange={setState}
      trackColor={{ false: '#D1D5DB', true: '#007BFF' }}
      thumbColor={state ? '#ffffff' : '#9CA3AF'}
    />
  </View>
);
