/** @format */

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import { Href, router } from 'expo-router';

type ServiceRoute =
  | '/services/buy-airtime'
  | '/services/buy-data'
  | '/services/buy-electricity'
  | '/services/buy-tv'
  | '/services/buy-internet'
  | '/services/buy-esim'
  | '/services/buy-betting'
  | '/services/more-services';

type ServiceItem = {
  id: number;
  name: string;
  icon: ImageSourcePropType;
  route: Href;
};

type ServiceItemProps = {
  item: ServiceItem;
};

const ServiceItem: React.FC<ServiceItemProps> = ({ item }) => {
  const handlePress = () => {
    router.push(item.route);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={{ width: '25%', alignItems: 'center', marginVertical: 12 }}
      activeOpacity={0.7}
    >
      <View
        style={{
          width: 54,
          height: 54,
          backgroundColor: '#D3D3D3',
          borderRadius: 50,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={item.icon}
          style={{ width: 24, height: 24 }}
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
  );
};

export default ServiceItem;
