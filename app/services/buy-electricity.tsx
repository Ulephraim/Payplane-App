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

// Type for a biller
type billerProps = {
  label: string;
};

// Biller data
const providerBillers: billerProps[] = [
  { label: 'Ikeja electric payment - IKEDC' },
  { label: 'Eko electric payment - EKEDC' },
];

const ElectricityScreen = () => {
  const router = useRouter();
  const [isBeneficiary, setIsBeneficiary] = useState(false);
  const [isBillerModalVisible, setIsBillerModalVisible] = useState(false);
  const [selectedElectricCompany, setSelectedElectricCompany] =
    useState<billerProps | null>(null);

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
          <Text className="text-black text-lg font-bold">Electricity</Text>
        </View>
      </View>

      <KeyboardAwareScrollView>
        {/* Electricity Company */}
        <Text className="text-black text-lg mt-6">
          Select Electricity Company
        </Text>
        <TouchableOpacity
          onPress={() => setIsBillerModalVisible(true)}
          className="bg-white p-4 rounded-lg mt-2"
        >
          <Text className="text-black text-base">
            {selectedElectricCompany?.label ?? 'Tap to select a company'}
          </Text>
        </TouchableOpacity>

        {/* Modal */}
        <Modal visible={isBillerModalVisible} transparent animationType="fade">
          <TouchableWithoutFeedback
            onPress={() => setIsBillerModalVisible(false)}
          >
            <View className="flex-1 justify-end bg-black/50">
              <TouchableWithoutFeedback>
                <View className="bg-white rounded-t-2xl p-4 max-h-[70%]">
                  <View className="items-center mb-4">
                    <View className="w-10 h-1 bg-black rounded-full" />
                    <Text className="text-black font-bold text-lg mt-2">
                      Select Biller
                    </Text>
                  </View>
                  <ScrollView>
                    {providerBillers.map((item, index) => (
                      <TouchableOpacity
                        key={index}
                        className="flex-row justify-between items-center p-4 border-b border-gray-200"
                        onPress={() => {
                          setSelectedElectricCompany(item);
                          setIsBillerModalVisible(false);
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

        {/* Meter Number Input */}
        <Text className="text-black text-lg font-bold mt-6">Meter Number</Text>
        <View className="bg-white p-3 rounded-lg flex-row items-center mt-2">
          <TextInput
            className="flex-1 text-black text-lg"
            placeholder="Enter meter number"
            keyboardType="phone-pad"
          />
        </View>

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

        {/* Save as Beneficiary */}
        <View className="bg-white p-4 rounded-lg mt-6 flex-row justify-between items-center">
          <Text className="text-black text-lg font-bold">
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
export default ElectricityScreen;
