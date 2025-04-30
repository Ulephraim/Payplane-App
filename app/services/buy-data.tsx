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

import * as Contacts from 'expo-contacts';
import { Alert } from 'react-native';
import { useTheme } from '@/context/themeProvider';

const getContacts = async () => {
  const { status } = await Contacts.requestPermissionsAsync();

  if (status === 'granted') {
    const { data } = await Contacts.getContactsAsync({
      fields: [Contacts.Fields.PhoneNumbers],
    });

    if (data.length > 0) {
      // Pick the first one for now
      const contact = data[0];

      // Extract and use the number
      const phone = contact?.phoneNumbers?.[0]?.number;
      Alert.alert('First contact’s number:', phone || 'No number');
    } else {
      Alert.alert('No contacts found');
    }
  } else {
    Alert.alert('Permission to access contacts was denied');
  }
};

type DataPackage = {
  label: string;
  price: string;
};

type ProviderKey = 'mtn' | 'airtel' | 'glo' | '9mobile';

const AirtimeScreen = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [isBeneficiary, setIsBeneficiary] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<ProviderKey | null>(
    null
  );
  const [isPackageModalVisible, setIsPackageModalVisible] = useState(false);
  const [packages, setPackages] = useState<DataPackage[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<DataPackage | null>(
    null
  );

  const providerPackages: Record<ProviderKey, DataPackage[]> = {
    mtn: [
      { label: '75MB DAILY', price: '₦93.00' },
      { label: '120MB DAILY', price: '₦128.00' },
      { label: '1GB WEEKLY', price: '₦350.00' },
      { label: '2GB WEEKLY', price: '₦500.00' },
      { label: '4GB MONTHLY', price: '₦1000.00' },
    ],
    airtel: [
      { label: '500MB DAILY', price: '₦505.00' },
      { label: '1GB + 1.5 mins', price: '₦520.00' },
      { label: '2GB WEEKLY', price: '₦700.00' },
      { label: '4.5GB MONTHLY', price: '₦1200.00' },
    ],
    glo: [
      { label: '2GB 2-DAYS', price: '₦795.00' },
      { label: '1GB DAILY', price: '₦814.00' },
      { label: '3.2GB WEEKLY', price: '₦1000.00' },
      { label: '7.5GB MONTHLY', price: '₦2000.00' },
    ],
    '9mobile': [
      { label: '2.5GB 2-DAYS', price: '₦957.00' },
      { label: '1.8GB 2-DAYS', price: '₦560.00' },
      { label: '3.5GB WEEKLY', price: '₦1100.00' },
      { label: '10GB MONTHLY', price: '₦2800.00' },
    ],
  };

  const handleProviderSelect = (provider: ProviderKey) => {
    setSelectedProvider(provider);
    setPackages(providerPackages[provider]);
  };

  const providerLogos: Record<ProviderKey, any> = {
    mtn: images.mtnLogo,
    airtel: images.airtelLogo,
    glo: images.gloLogo,
    '9mobile': images.ninemobileLogo,
  };

  return (
    <SafeAreaView
      className={`flex-1  ${isDark ? 'bg-[#141414]' : 'bg-[#F5F5F5]'} px-4`}
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
            Data Bundle
          </Text>
        </View>
      </View>

      {/* Select Provider */}
      <KeyboardAwareScrollView>
        <Text
          className={`text-lg mt-6 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Select service provider
        </Text>
        <View
          className={`${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          } flex-row justify-between p-4 rounded-lg mt-2`}
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

        {/* Select Data Package */}
        <Text
          className={`${
            isDark ? 'text-white' : 'text-black'
          }  text-lg font-bold mt-6`}
        >
          Select data package
        </Text>
        <TouchableOpacity
          onPress={() => setIsPackageModalVisible(true)}
          className={`${isDark ? 'bg-[#1C1C1C]' : 'bg-white'}
          p-4 rounded-lg mt-2`}
        >
          <Text className={`${isDark ? 'text-white' : 'text-black'} text-base`}>
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
                  }  rounded-t-2xl p-4 max-h-[70%]`}
                >
                  <View className="items-center mb-4">
                    <View
                      className={`
                      ${isDark ? 'bg-white' : 'bg-black'}
                      w-10 h-1  rounded-full`}
                    />
                    <Text
                      className={` ${
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

        {/* Phone Number Input */}
        <Text
          className={`${
            isDark ? 'text-white' : 'text-black'
          } text-lg font-bold mt-6`}
        >
          Phone Number
        </Text>
        <View
          className={`${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          } p-3 rounded-lg flex-row items-center mt-2`}
        >
          <TextInput
            className={`flex-1 text-lg ${isDark ? 'text-white' : 'text-black'}`}
            placeholder="Enter phone number"
            keyboardType="phone-pad"
          />
          <TouchableOpacity onPress={getContacts}>
            <Image
              source={icons.profile}
              style={{ width: 24, height: 24, tintColor: '#007BFF' }}
            />
          </TouchableOpacity>
        </View>

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
          <Text className={`${isDark ? 'text-white' : 'text-black'}  text-lg`}>
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
          className={`${isDark ? 'bg-[#1C1C1C]' : 'bg-white'}
        p-4 rounded-lg mt-6 flex-row justify-between items-center`}
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

export default AirtimeScreen;
