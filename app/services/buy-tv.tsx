/** @format */
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import icons from '../../constants/icons';
import images from '@/constants/images';
import { useTheme } from '@/context/themeProvider'; // Import the theme hook

type ProviderKey = 'dstv' | 'gotv' | 'startimes' | 'showmax';

const CableTvScreen = () => {
  const router = useRouter();
  const [isBeneficiary, setIsBeneficiary] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<ProviderKey | null>(
    null
  );
  const { theme } = useTheme(); // Get the current theme
  const isDark = theme === 'dark'; // Boolean for dark mode check

  const handleProviderSelect = (provider: ProviderKey) => {
    setSelectedProvider(provider);
  };

  const providerLogos: Record<ProviderKey, any> = {
    dstv: images.dstvLogo,
    gotv: images.gotvLogo,
    startimes: images.startimesLogo,
    showmax: images.showmaxLogo,
  };

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
            Cable TV
          </Text>
        </View>
      </View>

      <KeyboardAwareScrollView>
        {/* Provider Selection */}
        <Text
          className={`text-lg mt-6 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Select service provider
        </Text>
        <View
          className={`flex-row justify-between p-4 rounded-lg mt-2 ${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          }`}
        >
          {(['dstv', 'gotv', 'startimes', 'showmax'] as ProviderKey[]).map(
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

        {/* Smart Card Number */}
        <Text
          className={`text-lg mt-6 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Smart Card Number
        </Text>
        <View
          className={`p-3 rounded-lg flex-row items-center mt-2 ${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          }`}
        >
          <TextInput
            className={`flex-1 text-lg ${isDark ? 'text-white' : 'text-black'}`}
            placeholder="Enter smart card number"
            placeholderTextColor={isDark ? '#A0A0A0' : '#888'}
          />
          <Text style={{ color: '#007BFF' }}>Verify</Text>
        </View>

        {/* Save as Beneficiary */}
        <View
          className={`p-4 rounded-lg mt-6 flex-row justify-between items-center ${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          }`}
        >
          <Text className={`text-lg ${isDark ? 'text-white' : 'text-black'}`}>
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

export default CableTvScreen;
