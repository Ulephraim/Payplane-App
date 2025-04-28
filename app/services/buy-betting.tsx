/** @format */

import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
  TouchableWithoutFeedback,
  Modal,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../constants/icons';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRouter } from 'expo-router';
import { useTheme } from '@/context/themeProvider'; // <-- Added

// Type for a biller
type betcompanyProps = {
  label: string;
};

// Biller data
const providerBillers: betcompanyProps[] = [
  { label: 'iLotBet' },
  { label: 'SportyBet' },
  { label: 'Bet9ja' },
  { label: 'BetKing' },
  { label: 'EasyWin' },
  { label: '1XBET' },
  { label: 'Betano' },
  { label: 'FOOTBALL.COM' },
  { label: 'BangBet' },
  { label: 'BETWINNER' },
  { label: 'Msport' },
  { label: 'Betway' },
  { label: '22Bet' },
  { label: 'Surebet247' },
  { label: 'Betgr8' },
  { label: 'HallaBet' },
  { label: 'PariPesa' },
  { label: 'NaijaBet' },
  { label: 'Betfarm' },
];

const BettingScreen = () => {
  const router = useRouter();
  const [isBeneficiary, setIsBeneficiary] = useState(false);
  const [isBetModalVisible, setIsBetModalVisible] = useState(false);
  const [selectedBetCompany, setSelectedBetCompany] =
    useState<betcompanyProps | null>(null);

  const { theme } = useTheme(); // <-- Added
  const isDark = theme === 'dark'; // <-- Added

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
            Betting
          </Text>
        </View>
      </View>

      <KeyboardAwareScrollView>
        {/* Select Betting Company */}
        <Text
          className={`text-lg mt-6 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Select Betting Company
        </Text>
        <TouchableOpacity
          onPress={() => setIsBetModalVisible(true)}
          className={`${isDark ? 'bg-[#222]' : 'bg-white'} p-4 rounded-lg mt-2`}
        >
          <Text className={`${isDark ? 'text-white' : 'text-black'} text-base`}>
            {selectedBetCompany?.label ?? 'Tap to select a company'}
          </Text>
        </TouchableOpacity>

        {/* Modal */}
        <Modal visible={isBetModalVisible} transparent animationType="fade">
          <TouchableWithoutFeedback onPress={() => setIsBetModalVisible(false)}>
            <View className="flex-1 justify-end bg-black/50">
              <TouchableWithoutFeedback>
                <View
                  className={`rounded-t-2xl p-4 max-h-[70%] ${
                    isDark ? 'bg-[#222]' : 'bg-white'
                  }`}
                >
                  <View className="items-center mb-4">
                    <View
                      className={`w-10 h-1 ${
                        isDark ? 'bg-white' : 'bg-black'
                      } rounded-full`}
                    />
                    <Text
                      className={`font-bold text-lg mt-2 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}
                    >
                      Select Biller
                    </Text>
                  </View>
                  <ScrollView>
                    {providerBillers.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        className={`flex-row justify-between items-center p-4 ${
                          isDark
                            ? 'border-b border-gray-700'
                            : 'border-b border-gray-200'
                        }`}
                        onPress={() => {
                          setSelectedBetCompany(item);
                          setIsBetModalVisible(false);
                        }}
                      >
                        <Text
                          className={`${isDark ? 'text-white' : 'text-black'}`}
                        >
                          {item.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        {/* User ID Input */}
        <Text
          className={`text-lg font-bold mt-6 ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          User ID
        </Text>
        <View
          className={`p-3 rounded-lg flex-row items-center mt-2 ${
            isDark ? 'bg-[#222]' : 'bg-white'
          }`}
        >
          <TextInput
            className={`flex-1 text-lg ${isDark ? 'text-white' : 'text-black'}`}
            placeholder="Enter User ID"
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            keyboardType="phone-pad"
          />
        </View>

        {/* Deposit Amount Input */}
        <Text
          className={`text-lg font-bold mt-6 ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          Deposit Amount
        </Text>
        <View
          className={`p-3 rounded-lg flex-row items-center mt-2 ${
            isDark ? 'bg-[#222]' : 'bg-white'
          }`}
        >
          <Text className={`text-lg ${isDark ? 'text-white' : 'text-black'}`}>
            ₦
          </Text>
          <TextInput
            className={`flex-1 text-lg ml-2 ${
              isDark ? 'text-white' : 'text-black'
            }`}
            placeholder="0.00"
            placeholderTextColor={isDark ? '#aaa' : '#888'}
            keyboardType="numeric"
          />
        </View>

        {/* Pay Button */}
        <TouchableOpacity className="bg-[#007BFF] p-4 rounded-lg mt-6">
          <Text className="text-white text-center text-lg font-bold">Pay</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default BettingScreen;
