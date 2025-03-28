/** @format */
import { useAuth } from '@/context/authProvider';
import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';

const Page = () => {
  const { isAuthenticated } = useAuth();

  // Wait for Firebase to restore session before deciding the redirect
  if (isAuthenticated === undefined) {
    return (
      <View className="flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <Redirect href={isAuthenticated ? '/(tabs)/home' : '/(auth)/welcome'} />
  );
};

export default Page;
