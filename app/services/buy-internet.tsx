/** @format */

import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import icons from '../../constants/icons';
import images from '@/constants/images';
import { useTheme } from '@/context/themeProvider';

type InternetPackage = {
  label: string;
  price: string;
};

type ProviderKey = 'spectranet';

const InternetScreen = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [isBeneficiary, setIsBeneficiary] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<ProviderKey | null>(
    null
  );
  const [isPackageModalVisible, setIsPackageModalVisible] = useState(false);
  const [packages, setPackages] = useState<InternetPackage[]>([]);
  const [selectedPackage, setSelectedPackage] =
    useState<InternetPackage | null>(null);

  const providerPackages: Record<ProviderKey, InternetPackage[]> = {
    spectranet: [
      { label: 'Buy Airtime', price: '₦903.00' },
      { label: '1GB FlexiDaily for 1days', price: '₦1298.00' },
      { label: '2.5GB FlexiDaily for 2days', price: '₦9350.00' },
      { label: '1.5GB Bigga for 30days', price: '₦5800.00' },
      { label: '2GB FlexiWeekly for 7days', price: '₦18000.00' },
    ],
  };

  const handleProviderSelect = (provider: ProviderKey) => {
    setSelectedProvider(provider);
    setPackages(providerPackages[provider]);
  };

  const providerLogos: Record<ProviderKey, any> = {
    spectranet: images.spectranetLogo,
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
            Internet
          </Text>
        </View>
      </View>

      {/* Select Provider */}
      <KeyboardAwareScrollView>
        <View
          className={`${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          } flex-row gap-2 p-4 rounded-lg mt-2`}
        >
          {(['spectranet'] as ProviderKey[]).map((provider) => (
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
          ))}
        </View>

        <Text
          className={`${isDark ? 'text-white' : 'text-black'} text-sm  mt-6`}
        >
          ACCOUNT ID / User ID
        </Text>
        <View
          className={`${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          }  p-3 rounded-lg flex-row items-center mt-2`}
        >
          <TextInput
            className={`${
              isDark ? 'text-white' : 'text-black'
            } flex-1 text-lg ml-2`}
            keyboardType="numeric"
          />
        </View>

        {/* Select Data Package */}
        <Text
          className={`${isDark ? 'text-white' : 'text-black'} text-lg  mt-6`}
        >
          Select Package
        </Text>
        <TouchableOpacity
          onPress={() => setIsPackageModalVisible(true)}
          className={`${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          } p-4 rounded-lg mt-2`}
        >
          <Text
            className={`${isDark ? 'text-white' : 'text-black'}  text-base`}
          >
            {selectedPackage
              ? selectedPackage.label
              : 'Tap to select a package'}
          </Text>
        </TouchableOpacity>

        {/* Modal */}
        <Modal visible={isPackageModalVisible} transparent animationType="fade">
          <TouchableWithoutFeedback
            onPress={() => setIsPackageModalVisible(false)}
          >
            <View className="flex-1 justify-end bg-black/50">
              <TouchableWithoutFeedback>
                <View
                  className={`${
                    isDark ? 'bg-[#1C1C1C]' : 'bg-white'
                  } rounded-t-2xl p-4 max-h-[70%]`}
                >
                  <View className="items-center mb-4">
                    <View
                      className={`w-10 h-1 ${
                        isDark ? 'bg-white' : 'bg-black'
                      } rounded-full`}
                    />
                    <Text
                      className={`${
                        isDark ? 'text-white' : 'text-black'
                      } font-bold text-lg mt-2`}
                    >
                      Select Package
                    </Text>
                  </View>
                  <ScrollView>
                    {packages.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        className="flex-row justify-between items-center p-4 border-b border-gray-200"
                        onPress={() => {
                          setSelectedPackage(item);
                          setIsPackageModalVisible(false);
                        }}
                      >
                        <Text
                          className={`${isDark ? 'text-white' : 'text-black'}`}
                        >
                          {item.label}
                        </Text>
                        <Text
                          className={`${isDark ? 'text-white' : 'text-black'}`}
                        >
                          {item.price}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        {/* Amount Input */}
        <Text
          className={`${
            isDark ? 'text-white' : 'text-black'
          } text-lg font-bold mt-6`}
        >
          Amount
        </Text>
        <View
          className={`${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          } p-3 rounded-lg flex-row items-center mt-2`}
        >
          <Text className={`${isDark ? 'text-white' : 'text-black'} text-lg`}>
            ₦
          </Text>
          <TextInput
            className={`${
              isDark ? 'text-white' : 'text-black'
            } flex-1 text-lg ml-2`}
            placeholder="0.00"
            keyboardType="numeric"
          />
        </View>

        {/* Save Beneficiary */}
        <View
          className={`${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          } p-4 rounded-lg mt-6 flex-row justify-between items-center`}
        >
          <Text
            className={`${
              isDark ? 'text-white' : 'text-black'
            } text-lg font-bold`}
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

export default InternetScreen;
