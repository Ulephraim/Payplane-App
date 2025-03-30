/** @format */

import { sliderImages } from '@/constants/images';
import React, { useRef, useState, useEffect } from 'react';
import { View, FlatList, Image, Dimensions } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  // Auto scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (activeIndex + 1) % sliderImages.length;
      setActiveIndex(nextIndex);

      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [activeIndex]);

  const renderItem = ({ item }: { item: (typeof sliderImages)[0] }) => {
    return (
      <View
        className="mx-2.5 rounded-xl overflow-hidden"
        style={{ width: screenWidth - 40 }}
      >
        <Image
          source={item.src}
          className="w-full h-full rounded-xl"
          resizeMode="cover"
        />
      </View>
    );
  };

  return (
    <View className="my-4">
      <FlatList
        ref={flatListRef}
        data={sliderImages}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={screenWidth - 20}
        decelerationRate="fast"
        className="h-44" // Adjust height to match your design
        contentContainerStyle={{ paddingHorizontal: 20 }}
        onMomentumScrollEnd={(event) => {
          const index = Math.round(
            event.nativeEvent.contentOffset.x / (screenWidth - 20)
          );
          setActiveIndex(index);
        }}
      />

      {/* Indicators */}
      <View className="flex-row justify-center mt-3">
        {sliderImages.map((_, index) => (
          <View
            key={index}
            className={`h-2 w-2 mx-1 rounded-full ${
              index === activeIndex ? 'bg-primary' : 'bg-gray-300'
            }`}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageSlider;
