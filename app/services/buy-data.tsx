import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

export default function BuyData() {
  return (
    <View>
      <Text>BuyData</Text>
      <Link href="/">Go back home</Link>
    </View>
  )
}