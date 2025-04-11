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

const countryList: string[] = [
  'Nigeria',
  'USA',
  'Ghana',
  'Hungary',
  'Canada',
  'Germany',
  'India',
  'Australia',
  'France',
  'Brazil',
  'Japan',
  'Mexico',
  'China',
  'South Africa',
  'Kenya',
  'Italy',
  'Netherlands',
  'Spain',
  'Norway',
  'Sweden',
  'Argentina',
  'Poland',
  'Finland',
  'Egypt',
  'Morocco',
  'Saudi Arabia',
  'Turkey',
  'Russia',
  'Portugal',
  'Denmark',
  'Austria',
  'Belgium',
  'New Zealand',
  'Thailand',
  'Malaysia',
  'Singapore',
  'Indonesia',
  'Vietnam',
  'Philippines',
  'Pakistan',
  'Bangladesh',
  'Sri Lanka',
  'UAE',
  'Qatar',
  'Kuwait',
  'Oman',
  'Israel',
  'Ukraine',
  'Switzerland',
  'Ireland',
  'Czech Republic',
  'Slovakia',
  'Greece',
  'Romania',
  'Bulgaria',
  'Estonia',
  'Latvia',
  'Lithuania',
  'Iceland',
  'Croatia',
  'Slovenia',
  'Luxembourg',
  'Monaco',
  'Malta',
  'Cyprus',
  'Lebanon',
  'Jordan',
  'Iraq',
  'Iran',
  'Syria',
  'Libya',
  'Tunisia',
  'Algeria',
  'Cameroon',
  'Ethiopia',
  'Tanzania',
  'Uganda',
  'Zimbabwe',
  'Zambia',
  'Botswana',
  'Namibia',
  'Mozambique',
  'Angola',
  'DR Congo',
  'Sudan',
  'Nepal',
  'Bhutan',
  'Afghanistan',
  'Kazakhstan',
  'Uzbekistan',
  'Georgia',
  'Armenia',
  'Azerbaijan',
  'Maldives',
  'Fiji',
  'Papua New Guinea',
  'Tonga',
  'Samoa',
];

const BuyEsim = () => {
  const router = useRouter();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [packages, setPackages] = useState<EsimPackage[]>([]);
  const [selectedPackage, setSelectedPackage] = useState<EsimPackage | null>(
    null
  );
  const [isPackageModalVisible, setIsPackageModalVisible] = useState(false);
  const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setIsCountryModalVisible(false);

    // Dynamically generate 3 packages per selected country
    const generatedPackages: EsimPackage[] = [
      { label: `eSim, 1GB, ${country}, Unthrottled` },
      { label: `eSim, 3GB, ${country}, Unthrottled` },
      { label: `eSim, 5GB, ${country}, Unthrottled` },
    ];

    setPackages(generatedPackages);
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

      <KeyboardAwareScrollView>
        {/* Select Country */}
        <Text className="text-black text-lg mt-6">Select Country</Text>
        <TouchableOpacity
          onPress={() => setIsCountryModalVisible(true)}
          className="bg-white p-4 rounded-lg mt-2"
        >
          <Text className="text-black text-base">
            {selectedCountry ?? 'Tap to select a country'}
          </Text>
        </TouchableOpacity>

        {/* Country Dropdown Modal */}
        <Modal visible={isCountryModalVisible} transparent animationType="fade">
          <TouchableWithoutFeedback
            onPress={() => setIsCountryModalVisible(false)}
          >
            <View className="flex-1 justify-end bg-black/50">
              <TouchableWithoutFeedback>
                <View className="bg-white rounded-t-2xl p-4 max-h-[70%]">
                  <View className="items-center mb-4">
                    <View className="w-10 h-1 bg-black rounded-full" />
                    <Text className="text-black font-bold text-lg mt-2">
                      Select Country
                    </Text>
                  </View>
                  <TextInput
                    className="bg-gray-100 p-3 rounded-lg mb-4 text-black"
                    placeholder="Search country"
                    value={countrySearch}
                    onChangeText={setCountrySearch}
                  />
                  <ScrollView>
                    {countryList
                      .filter((c) =>
                        c.toLowerCase().includes(countrySearch.toLowerCase())
                      )
                      .map((country, index) => (
                        <TouchableOpacity
                          key={index}
                          className="p-4 border-b border-gray-200"
                          onPress={() => handleCountrySelect(country)}
                        >
                          <Text className="text-black">{country}</Text>
                        </TouchableOpacity>
                      ))}
                  </ScrollView>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        {/* Select Data Package */}
        <Text className="text-black text-lg mt-6">Choose Package</Text>
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

        {/* Package Modal */}
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
        <Text className="text-black text-lg mt-6">Amount</Text>
        <View className="bg-white p-3 rounded-lg flex-row items-center mt-2">
          <Text className="text-black text-lg">₦</Text>
          <TextInput
            className="flex-1 text-black text-lg ml-2"
            placeholder="0.00"
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

export default BuyEsim;
