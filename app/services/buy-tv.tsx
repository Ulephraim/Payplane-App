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

type ProviderKey = 'dstv' | 'gotv' | 'startimes' | 'showmax';

const CableTvScreen = () => {
  const router = useRouter();
  const [isBeneficiary, setIsBeneficiary] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<ProviderKey | null>(
    null
  );

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
    <SafeAreaView className="flex-1 bg-[#F5F5F5] px-4">
      {/* Header */}
      <View className="flex-row items-center mt-4 pb-4">
        <TouchableOpacity
          className="w-10"
          onPress={() => router.push('/(tabs)/home')}
        >
          <Image source={icons.back} className="w-6 h-6" />
        </TouchableOpacity>
        <View className="flex-1 items-center -ml-10">
          <Text className="text-black text-lg font-bold">Cable TV</Text>
        </View>
      </View>

      <KeyboardAwareScrollView>
        {/* Provider Selection */}
        <Text className="text-black text-lg mt-6">Select service provider</Text>
        <View className="flex-row justify-between bg-white p-4 rounded-lg mt-2">
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
        <Text className="text-black text-lg mt-6">Smart Card Number</Text>
        <View className="bg-white p-3 rounded-lg flex-row items-center mt-2">
          <TextInput
            className="flex-1 text-black text-lg"
            placeholder="Enter smart card number"
          />
          <Text style={{ color: '#007BFF' }}>Verify</Text>
        </View>

        {/* Save as Beneficiary */}
        <View className="bg-white p-4 rounded-lg mt-6 flex-row justify-between items-center">
          <Text className="text-black text-lg">Save as Beneficiary</Text>
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
