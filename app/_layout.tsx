/** @format */

import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import React, { useEffect } from 'react';
import '../global.css';
import { SplashScreen, Stack } from 'expo-router';
import { AuthProvider } from '@/context/authProvider';
import { ThemeProvider } from '@/context/themeProvider';

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
    'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
    'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <ThemeProvider>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          {/* Services Screens */}
          <Stack.Screen
            name="services/buy-airtime"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="services/buy-data"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="services/buy-electricity"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="services/buy-tv"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="services/buy-internet"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="services/buy-esim"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="services/buy-betting"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="services/gift-card"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="services/more-services"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default RootLayout;

const styles = StyleSheet.create({});
