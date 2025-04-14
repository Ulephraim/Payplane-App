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
import { useTheme } from '@/context/themeProvider';

export default function Profile() {
  const { theme, toggleTheme } = useTheme();
  const darkMode = theme === 'dark';

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

  const bgColor = darkMode ? '#141414' : '#F5F5F5';
  const cardColor = darkMode ? '#1C1C1C' : '#FFFFFF';
  const textColor = darkMode ? 'white' : 'black';
  const sectionTitleColor = darkMode ? 'white' : 'black';
  const iconTintColor = darkMode ? 'white' : 'black';
  const iconContainerColor = darkMode ? '#232323' : '#f5f5f5';

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: bgColor }}>
      <View style={{ paddingBottom: 8 }}>
        <Text
          style={{
            color: textColor,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            marginVertical: 16,
          }}
        >
          Profile
        </Text>
      </View>

      <ScrollView style={{ paddingHorizontal: 16 }}>
        {/* User Info */}
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: cardColor,
            padding: 16,
            borderRadius: 12,
            marginBottom: 16,
            alignItems: 'center',
            gap: 16,
          }}
        >
          <View
            style={{
              width: 54,
              height: 54,
              backgroundColor: darkMode ? '#232323' : '#f5f5f5',
              borderRadius: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              source={icons.profileUser}
              resizeMode="contain"
              style={{ width: 20, height: 20, tintColor: iconTintColor }}
            />
          </View>
          <View>
            <Text
              style={{ color: textColor, fontSize: 18, fontWeight: 'bold' }}
            >
              {userProfile?.firstName} {userProfile?.lastName}
            </Text>
            <Text style={{ color: darkMode ? '#9CA3AF' : '#6B7280' }}>
              {userProfile?.email}
            </Text>
          </View>
        </View>

        {/* Sections */}
        <Section
          title="Account"
          titleColor={sectionTitleColor}
          cardColor={cardColor}
        >
          <ProfileItem
            icon={icons.profileUser}
            label="My Profile"
            onPress={() => router.push('/(root)/profile')}
            tintColor={iconTintColor}
            textColor={textColor}
            iconContainerColor={iconContainerColor}
          />
          <ProfileItem
            icon={icons.report}
            label="Reports"
            onPress={() => router.push('/(root)/reports')}
            tintColor={iconTintColor}
            textColor={textColor}
            iconContainerColor={iconContainerColor}
          />
          <ProfileItem
            icon={icons.send}
            label="Referrals"
            onPress={() => router.push('/(root)/referrals')}
            tintColor={iconTintColor}
            textColor={textColor}
            iconContainerColor={iconContainerColor}
          />
          <ProfileItem
            icon={icons.customerCare}
            label="Help & Support"
            onPress={() => router.push('/(root)/help-support')}
            tintColor={iconTintColor}
            textColor={textColor}
            iconContainerColor={iconContainerColor}
          />
        </Section>

        <Section
          title="Preference"
          titleColor={sectionTitleColor}
          cardColor={cardColor}
        >
          <ToggleItem
            icon={icons.darkMode}
            label="Dark Mode"
            state={darkMode}
            setState={toggleTheme}
            tintColor={iconTintColor}
            textColor={textColor}
            iconContainerColor={iconContainerColor}
          />
          <ToggleItem
            icon={icons.biometrics}
            label="Biometrics"
            state={biometrics}
            setState={setBiometrics}
            tintColor={iconTintColor}
            textColor={textColor}
            iconContainerColor={iconContainerColor}
          />
          <ToggleItem
            icon={icons.wallet}
            label="Wallet Balance"
            state={walletBalance}
            setState={setWalletBalance}
            tintColor={iconTintColor}
            textColor={textColor}
            iconContainerColor={iconContainerColor}
          />
        </Section>

        <Section
          title="Privacy & Security"
          titleColor={sectionTitleColor}
          cardColor={cardColor}
        >
          <ProfileItem
            icon={icons.security}
            label="Reset Password"
            onPress={() => router.push('/(root)/reset-password')}
            tintColor={iconTintColor}
            textColor={textColor}
            iconContainerColor={iconContainerColor}
          />
          <ProfileItem
            icon={icons.secure}
            label="Reset Payplane PIN"
            onPress={() => router.push('/(root)/reset-payplane-pin')}
            tintColor={iconTintColor}
            textColor={textColor}
            iconContainerColor={iconContainerColor}
          />
          <ProfileItem
            icon={icons.verified}
            label="Verify NIN"
            onPress={() => router.push('/(root)/verify-nin')}
            tintColor={iconTintColor}
            textColor={textColor}
            iconContainerColor={iconContainerColor}
          />
        </Section>

        <Section
          title="More"
          titleColor={sectionTitleColor}
          cardColor={cardColor}
        >
          <ProfileItem
            icon={icons.stamp}
            label="Legal"
            onPress={() => router.push('/(root)/legal')}
            tintColor={iconTintColor}
            textColor={textColor}
            iconContainerColor={iconContainerColor}
          />
          <ProfileItem
            icon={icons.deleteBtn}
            label="Deactivate/Delete Account"
            onPress={() => router.push('/(root)/delete-account')}
            tintColor={iconTintColor}
            textColor={textColor}
            iconContainerColor={iconContainerColor}
          />
          <ProfileItem
            icon={icons.logout}
            label="Logout"
            onPress={() => setIsLogoutModalVisible(true)}
            tintColor="red"
            textColor="red"
          />
        </Section>

        <Text
          style={{
            color: sectionTitleColor,
            textAlign: 'center',
            fontSize: 16,
            marginVertical: 24,
          }}
        >
          version 1.0.0
        </Text>
      </ScrollView>

      <LogoutModal
        visible={isLogoutModalVisible}
        onClose={() => setIsLogoutModalVisible(false)}
        onConfirm={handleLogout}
      />
    </SafeAreaView>
  );
}

// Section Component
const Section = ({ title, children, titleColor, cardColor }: any) => (
  <View style={{ marginTop: 16 }}>
    <Text
      style={{
        fontSize: 18,
        fontWeight: '600',
        color: titleColor,
        marginBottom: 8,
      }}
    >
      {title}
    </Text>
    <View style={{ backgroundColor: cardColor, borderRadius: 12, padding: 12 }}>
      {children}
    </View>
  </View>
);

// Profile Item Component
const ProfileItem = ({
  onPress,
  icon,
  label,
  tintColor,
  textColor,
  iconContainerColor,
}: any) => (
  <TouchableOpacity
    style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }}
    onPress={onPress}
  >
    <View
      style={{
        width: 42,
        height: 42,
        backgroundColor: iconContainerColor,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 20, height: 20, tintColor }}
      />
    </View>
    <Text style={{ flex: 1, marginLeft: 12, fontSize: 16, color: textColor }}>
      {label}
    </Text>
    <Image
      source={icons.rightArrow}
      resizeMode="contain"
      style={{ width: 12, height: 12, tintColor }}
    />
  </TouchableOpacity>
);

// Toggle Item Component
const ToggleItem = ({
  icon,
  label,
  state,
  setState,
  tintColor,
  textColor,
  iconContainerColor,
}: any) => (
  <View
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 12,
    }}
  >
    <View
      style={{
        width: 42,
        height: 42,
        backgroundColor: iconContainerColor,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        style={{ width: 20, height: 20, tintColor }}
      />
    </View>
    <Text style={{ flex: 1, marginLeft: 12, fontSize: 16, color: textColor }}>
      {label}
    </Text>
    <Switch
      value={state}
      onValueChange={setState}
      trackColor={{ false: '#D1D5DB', true: '#007BFF' }}
      thumbColor={state ? '#ffffff' : '#9CA3AF'}
    />
  </View>
);
