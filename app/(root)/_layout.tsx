/** @format */

import { Stack } from 'expo-router';

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="delete-account" options={{ headerShown: false }} />
      <Stack.Screen name="help-support" options={{ headerShown: false }} />
      <Stack.Screen name="history" options={{ headerShown: false }} />
      <Stack.Screen name="legal" options={{ headerShown: false }} />
      <Stack.Screen name="notification" options={{ headerShown: false }} />
      <Stack.Screen
        name="personal-information"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
      <Stack.Screen name="referrals" options={{ headerShown: false }} />
      <Stack.Screen name="reports" options={{ headerShown: false }} />
      <Stack.Screen name="reset-password" options={{ headerShown: false }} />
      <Stack.Screen
        name="reset-payplane-pin"
        options={{ headerShown: false }}
      />
      <Stack.Screen name="set-payplane-tag" options={{ headerShown: false }} />
      <Stack.Screen name="verify-nin" options={{ headerShown: false }} />
    </Stack>
  );
};

export default Layout;
