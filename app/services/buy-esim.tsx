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
import { useTheme } from '@/context/themeProvider'; // Import the theme hook

type EsimPackage = {
  label: string;
};

const countryList: string[] = [
  'Nigeria',
  'USA',
  'Ghana',
  // ... rest of your countries
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

  const { theme } = useTheme(); // Get the current theme
  const isDark = theme === 'dark'; // Boolean for dark mode check

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
            E-Sim
          </Text>
        </View>
      </View>

      <KeyboardAwareScrollView>
        {/* Select Country */}
        <Text
          className={`text-lg mt-6 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Select Country
        </Text>
        <TouchableOpacity
          onPress={() => setIsCountryModalVisible(true)}
          className={`p-4 rounded-lg mt-2 ${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          }`}
        >
          <Text className={`text-base ${isDark ? 'text-white' : 'text-black'}`}>
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
                <View
                  className={`rounded-t-2xl p-4 max-h-[70%] ${
                    isDark ? 'bg-[#1C1C1C]' : 'bg-white'
                  }`}
                >
                  <View className="items-center mb-4">
                    <View
                      className={`w-10 h-1 rounded-full ${
                        isDark ? 'bg-white' : 'bg-black'
                      }`}
                    />
                    <Text
                      className={`font-bold text-lg mt-2 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}
                    >
                      Select Country
                    </Text>
                  </View>
                  <TextInput
                    className={`p-3 rounded-lg mb-4 ${
                      isDark ? 'bg-[#333] text-white' : 'bg-gray-100 text-black'
                    }`}
                    placeholder="Search country"
                    placeholderTextColor={isDark ? '#A0A0A0' : '#888'}
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
                          className={`p-4 ${
                            isDark
                              ? 'border-b border-gray-700'
                              : 'border-b border-gray-200'
                          }`}
                          onPress={() => handleCountrySelect(country)}
                        >
                          <Text
                            className={isDark ? 'text-white' : 'text-black'}
                          >
                            {country}
                          </Text>
                        </TouchableOpacity>
                      ))}
                  </ScrollView>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        {/* Select Data Package */}
        <Text
          className={`text-lg mt-6 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Choose Package
        </Text>
        <TouchableOpacity
          onPress={() => setIsPackageModalVisible(true)}
          className={`p-4 rounded-lg mt-2 ${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          }`}
        >
          <Text className={`text-base ${isDark ? 'text-white' : 'text-black'}`}>
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
                <View
                  className={`rounded-t-2xl p-4 max-h-[70%] ${
                    isDark ? 'bg-[#1C1C1C]' : 'bg-white'
                  }`}
                >
                  <View className="items-center mb-4">
                    <View
                      className={`w-10 h-1 rounded-full ${
                        isDark ? 'bg-white' : 'bg-black'
                      }`}
                    />
                    <Text
                      className={`font-bold text-lg mt-2 ${
                        isDark ? 'text-white' : 'text-black'
                      }`}
                    >
                      Select Package
                    </Text>
                  </View>
                  <ScrollView>
                    {packages.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        className={`flex-row justify-between items-center p-4 ${
                          isDark
                            ? 'border-b border-gray-700'
                            : 'border-b border-gray-200'
                        }`}
                        onPress={() => {
                          setSelectedPackage(item);
                          setIsPackageModalVisible(false);
                        }}
                      >
                        <Text className={isDark ? 'text-white' : 'text-black'}>
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

        {/* Amount Input */}
        <Text
          className={`text-lg mt-6 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Amount
        </Text>
        <View
          className={`p-3 rounded-lg flex-row items-center mt-2 ${
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
            placeholderTextColor={isDark ? '#A0A0A0' : '#888'}
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
