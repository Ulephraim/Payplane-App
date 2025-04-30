/** @format */
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import icons from '../../constants/icons';
import { useTheme } from '@/context/themeProvider';

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
];

const giftCardTypes = ['Amazon', 'iTunes', 'Google Play'];

const giftCardPrices: Record<string, { label: string; value: number }[]> = {
  Amazon: [
    { label: '$10 - ₦18,030', value: 18030 },
    { label: '$25 - ₦45,050', value: 45050 },
    { label: '$50 - ₦90,100', value: 90100 },
  ],
  iTunes: [
    { label: '$15 - ₦27,000', value: 27000 },
    { label: '$50 - ₦89,999', value: 89999 },
  ],
  'Google Play': [
    { label: '$10 - ₦17,500', value: 17500 },
    { label: '$100 - ₦180,000', value: 180000 },
  ],
};

const GiftCard = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [isCountryModalVisible, setIsCountryModalVisible] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');

  const [selectedGiftCardType, setSelectedGiftCardType] = useState<
    string | null
  >(null);
  const [isGiftCardModalVisible, setIsGiftCardModalVisible] = useState(false);

  const [selectedAmount, setSelectedAmount] = useState<{
    label: string;
    value: number;
  } | null>(null);
  const [isAmountModalVisible, setIsAmountModalVisible] = useState(false);

  const [quantity, setQuantity] = useState<number>(1);

  const total = selectedAmount ? selectedAmount.value * quantity : 0;

  const handleCountrySelect = (country: string) => {
    setSelectedCountry(country);
    setIsCountryModalVisible(false);
  };

  const handleQuantityChange = (text: string) => {
    const num = parseInt(text);
    if (!isNaN(num)) {
      setQuantity(num);
    } else {
      setQuantity(1);
    }
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
            Gift Card
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

        {/* Select Gift Card Type */}
        <Text
          className={`text-lg mt-6 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Gift Card
        </Text>
        <TouchableOpacity
          onPress={() => setIsGiftCardModalVisible(true)}
          className={`p-4 rounded-lg mt-2 ${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          }`}
        >
          <Text className={`text-base ${isDark ? 'text-white' : 'text-black'}`}>
            {selectedGiftCardType ?? 'Tap to select gift card'}
          </Text>
        </TouchableOpacity>

        <Modal
          visible={isGiftCardModalVisible}
          transparent
          animationType="fade"
        >
          <TouchableWithoutFeedback
            onPress={() => setIsGiftCardModalVisible(false)}
          >
            <View className="flex-1 justify-end bg-black/50">
              <TouchableWithoutFeedback>
                <View
                  className={`rounded-t-2xl p-4 max-h-[50%] ${
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
                      Select Gift Card
                    </Text>
                  </View>
                  <ScrollView>
                    {giftCardTypes.map((type, index) => (
                      <TouchableOpacity
                        key={index}
                        className={`p-4 ${
                          isDark
                            ? 'border-b border-gray-700'
                            : 'border-b border-gray-200'
                        }`}
                        onPress={() => {
                          setSelectedGiftCardType(type);
                          setSelectedAmount(null);
                          setIsGiftCardModalVisible(false);
                        }}
                      >
                        <Text className={isDark ? 'text-white' : 'text-black'}>
                          {type}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </ScrollView>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        {/* Select Amount */}
        <Text
          className={`text-lg mt-6 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Amount
        </Text>
        <TouchableOpacity
          onPress={() => selectedGiftCardType && setIsAmountModalVisible(true)}
          className={`p-4 rounded-lg mt-2 ${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          }`}
        >
          <Text className={`text-base ${isDark ? 'text-white' : 'text-black'}`}>
            {selectedAmount?.label ?? 'Tap to select amount'}
          </Text>
        </TouchableOpacity>

        <Modal visible={isAmountModalVisible} transparent animationType="fade">
          <TouchableWithoutFeedback
            onPress={() => setIsAmountModalVisible(false)}
          >
            <View className="flex-1 justify-end bg-black/50">
              <TouchableWithoutFeedback>
                <View
                  className={`rounded-t-2xl p-4 max-h-[50%] ${
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
                      Select Amount
                    </Text>
                  </View>
                  <ScrollView>
                    {selectedGiftCardType &&
                      giftCardPrices[selectedGiftCardType].map(
                        (item, index) => (
                          <TouchableOpacity
                            key={index}
                            className={`p-4 ${
                              isDark
                                ? 'border-b border-gray-700'
                                : 'border-b border-gray-200'
                            }`}
                            onPress={() => {
                              setSelectedAmount(item);
                              setIsAmountModalVisible(false);
                            }}
                          >
                            <Text
                              className={isDark ? 'text-white' : 'text-black'}
                            >
                              {item.label}
                            </Text>
                          </TouchableOpacity>
                        )
                      )}
                  </ScrollView>
                </View>
              </TouchableWithoutFeedback>
            </View>
          </TouchableWithoutFeedback>
        </Modal>

        {/* Quantity */}
        <Text
          className={`text-lg mt-6 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Quantity
        </Text>
        <View
          className={`flex-row items-center px-4 py-2 rounded-lg mt-2 ${
            isDark ? 'bg-[#1C1C1C]' : 'bg-white'
          }`}
        >
          {/* Decrement button */}
          <TouchableOpacity
            onPress={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            className={`rounded-full w-8 h-8 items-center justify-center mr-4 ${
              isDark ? 'bg-[#333]' : 'bg-gray-200'
            }`}
          >
            <Text className={isDark ? 'text-white' : 'text-black'}>−</Text>
          </TouchableOpacity>

          {/* Quantity input */}
          <TextInput
            className={`flex-1 text-lg text-center ${
              isDark ? 'text-white' : 'text-black'
            }`}
            placeholder="Enter quantity"
            placeholderTextColor={isDark ? '#A0A0A0' : '#888'}
            keyboardType="numeric"
            value={quantity.toString()}
            onChangeText={handleQuantityChange}
          />

          {/* Increment button */}
          <TouchableOpacity
            onPress={() => setQuantity((prev) => prev + 1)}
            className={`rounded-full w-8 h-8 items-center justify-center ml-4 ${
              isDark ? 'bg-[#333]' : 'bg-gray-200'
            }`}
          >
            <Text className={isDark ? 'text-white' : 'text-black'}>+</Text>
          </TouchableOpacity>
        </View>

        {/* Total */}
        <Text
          className={`text-lg mt-6 ${isDark ? 'text-white' : 'text-black'}`}
        >
          Total: ₦{total.toLocaleString()}
        </Text>

        {/* Pay Button */}
        <TouchableOpacity className="bg-[#007BFF] p-4 rounded-lg mt-6">
          <Text className="text-white text-center text-lg font-bold">Pay</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default GiftCard;
