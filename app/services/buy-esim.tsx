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

type EsimPackage = {
  label: string;
};

type CountryProviderKey = 'USA' | 'Nigeria' | 'Ghana' | 'Hungary';

const BuyEsim = () => {
  const router = useRouter();
  const [selectedProvider, setSelectedProvider] =
    useState<CountryProviderKey | null>(null);
  const [isPackageModalVisible, setIsPackageModalVisible] = useState(false);
  const [packages, setPackages] = useState<EsimPackage[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<EsimPackage | null>(
    null
  );

  const providerPackages: Record<CountryProviderKey, EsimPackage[]> = {
    USA: [
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
    ],
    Hungary: [
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
    ],
    Ghana: [
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
    ],
    Nigeria: [
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
      { label: 'eSim, 1GB Days, Nigeria, Unthrottled' },
    ],
  };

  const handleProviderSelect = (provider: CountryProviderKey) => {
    setSelectedProvider(provider);
    setPackages(providerPackages[provider]);
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
          <Text className="text-black text-lg font-bold">E-Sim</Text>
        </View>
      </View>

      {/* Select Provider */}
      <KeyboardAwareScrollView>
        <Text className="text-black text-lg mt-6">Search Country</Text>
        <View className="flex-row justify-between bg-white p-4 rounded-lg mt-2">
          {(['Ghana', 'Hungary', 'Nigeria', 'USA'] as CountryProviderKey[]).map(
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
                ></View>
              </TouchableOpacity>
            )
          )}
        </View>

        {/* Select Data Package */}
        <Text className="text-black text-lg font-bold mt-6">
          Choose Package
        </Text>
        <TouchableOpacity
          onPress={() => setIsPackageModalVisible(true)}
          className="bg-white p-4 rounded-lg mt-2"
        >
          <Text className="text-black text-base">
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
                <View className="bg-white rounded-t-2xl p-4 max-h-[70%]">
                  <View className="items-center mb-4">
                    <View className="w-10 h-1 bg-black rounded-full" />
                    <Text className="text-black font-bold text-lg mt-2">
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
                        <Text className="text-black">{item.label}</Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        {/* Amount Input */}
        <Text className="text-black text-lg font-bold mt-6">Amount</Text>
        <View className="bg-white p-3 rounded-lg flex-row items-center mt-2">
          <Text className="text-black text-lg">₦</Text>
          <TextInput
            className="flex-1 text-black text-lg ml-2"
            placeholder="0.00"
            keyboardType="numeric"
          />
        </View>

        {/* Continue Button */}
        <TouchableOpacity className="bg-[#007BFF] p-4 rounded-lg mt-6">
          <Text className="text-white text-center text-lg font-bold">Pay</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default BuyEsim;
