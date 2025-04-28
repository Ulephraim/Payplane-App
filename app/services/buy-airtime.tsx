/** @format */

import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
  StatusBar,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '../../constants/icons';
import { useRouter } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import images from '@/constants/images';
import { useTheme } from '@/context/themeProvider';

type ProviderKey = 'mtn' | 'airtel' | 'glo' | '9mobile';

const AirtimeScreen = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [isBeneficiary, setIsBeneficiary] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<ProviderKey | null>(
    null
  );

  const handleProviderSelect = (provider: ProviderKey) => {
    setSelectedProvider(provider);
  };

  const providerLogos: Record<ProviderKey, any> = {
    mtn: images.mtnLogo,
    airtel: images.airtelLogo,
    glo: images.gloLogo,
    '9mobile': images.ninemobileLogo,
  };

  return (
    <SafeAreaView
      className={`flex-1 ${isDark ? 'bg-[#141414]' : 'bg-[#F5F5F5]'} px-4`}
    >
      <StatusBar
        barStyle={isDark ? 'light-content' : 'dark-content'}
        backgroundColor={isDark ? '#141414' : '#F5F5F5'}
      />

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
            Airtime
          </Text>
        </View>
      </View>

      <KeyboardAwareScrollView>
        {/* Select Provider */}
        <Text
          className={`text-lg mt-6 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Select service provider
        </Text>
        <View
          className={`flex-row justify-between ${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          } p-4 rounded-lg mt-2`}
        >
          {(['mtn', 'airtel', 'glo', '9mobile'] as ProviderKey[]).map(
            (provider) => (
              <TouchableOpacity
                key={provider}
                onPress={() => handleProviderSelect(provider)}
              >
                <View
                  className={`rounded-full p-1 ${
                    selectedProvider === provider
                      ? 'border-2 border-[#007BFF]'
                      : ''
                  }`}
                >
                  <Image
                    source={providerLogos[provider]}
                    className="w-14 h-14 rounded-full"
                  />
                </View>
              </TouchableOpacity>
            )
          )}
        </View>

        {/* Phone Number Input */}
        <Text
          className={`text-lg font-bold mt-6 ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          Phone Number
        </Text>
        <View
          className={`flex-row items-center p-3 rounded-lg mt-2 ${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          }`}
        >
          <TextInput
            className={`flex-1 text-lg ${isDark ? 'text-white' : 'text-black'}`}
            placeholder="Enter phone number"
            placeholderTextColor={isDark ? '#AAAAAA' : '#666666'}
          />
          <Image
            source={icons.profile}
            style={{
              width: 24,
              height: 24,
              tintColor: '#007BFF',
            }}
          />
        </View>

        {/* Amount Input */}
        <Text
          className={`text-lg font-bold mt-6 ${
            isDark ? 'text-white' : 'text-black'
          }`}
        >
          Amount
        </Text>
        <View
          className={`flex-row items-center p-3 rounded-lg mt-2 ${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
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
            keyboardType="numeric"
            placeholderTextColor={isDark ? '#AAAAAA' : '#666666'}
          />
        </View>

        {/* Save as Beneficiary */}
        <View
          className={`flex-row justify-between items-center p-4 rounded-lg mt-6 ${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          }`}
        >
          <Text
            className={`text-lg font-bold ${
              isDark ? 'text-white' : 'text-black'
            }`}
          >
            Save as Beneficiary
          </Text>
          <Switch
            value={isBeneficiary}
            onValueChange={setIsBeneficiary}
            trackColor={{ true: '#007BFF', false: '#ccc' }}
          />
        </View>

        {/* Continue Button */}
        <TouchableOpacity className="bg-[#007BFF] p-4 rounded-lg mt-6">
          <Text className="text-white text-center text-lg font-bold">
            Continue
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AirtimeScreen;
