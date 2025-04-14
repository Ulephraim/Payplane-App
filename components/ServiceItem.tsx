/** @format */

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { Link } from 'expo-router';
import { useTheme } from '@/context/themeProvider';

type ServiceItem = {
  id: number;
  name: string;
  icon: ImageSourcePropType;
  route: string;
};

type ServiceItemProps = {
  item: ServiceItem;
};

const ServiceItem: React.FC<ServiceItemProps> = ({ item }) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <Link href={item.route as any} asChild>
      <TouchableOpacity
        style={{ width: '25%', alignItems: 'center', marginVertical: 12 }}
        activeOpacity={0.7}
      >
        <View
          style={{
            backgroundColor: isDark ? '#374151' : '#f5f5f5',
            width: 54,
            height: 54,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Image
            source={item.icon}
            style={{ width: 24, height: 24, tintColor: '#007BFF' }}
            resizeMode="contain"
          />
        </View>
        <Text
          style={{
            color: isDark ? 'white' : 'black',
            fontSize: 12,
            marginTop: 4,
            textAlign: 'center',
          }}
          numberOfLines={2}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default ServiceItem;
