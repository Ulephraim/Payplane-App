/** @format */

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { Link } from 'expo-router';

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
  return (
    <Link href={item.route as any} asChild>
      <TouchableOpacity
        style={{ width: '25%', alignItems: 'center', marginVertical: 12 }}
        activeOpacity={0.7}
      >
        <View
          style={{
            width: 54,
            height: 54,
            backgroundColor: '#f5f5f5',
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
            color: 'black',
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
