/** @format */

import React from 'react';
import { Modal, View, Text, TouchableOpacity } from 'react-native';

interface LogoutModalProps {
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({
  visible,
  onClose,
  onConfirm,
}) => {
  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 justify-center items-center bg-black/50">
        <View className="bg-white w-80 p-6 rounded-xl shadow-lg">
          <Text className="text-lg font-semibold text-center text-gray-900">
            Logout
          </Text>
          <Text className="text-gray-600 text-center mt-2">
            Are you sure you want to logout?
          </Text>

          {/* Buttons */}
          <View className="flex-row justify-between mt-6">
            <TouchableOpacity
              onPress={onClose}
              className="flex-1 border border-gray-300 rounded-lg py-3 mr-2"
            >
              <Text className="text-center text-gray-700 font-semibold">
                Cancel
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onConfirm}
              className="flex-1 bg-red-500 rounded-lg py-3 ml-2"
            >
              <Text className="text-center text-white font-semibold">
                Logout
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default LogoutModal;
