/** @format */
import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  ListRenderItem,
} from 'react-native';
import { sliderImages } from '@/constants/images';

const { width: windowWidth } = Dimensions.get('window');

const ImageSlider = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrollEnabled, setIsAutoScrollEnabled] = useState(true);

  const ITEM_WIDTH = windowWidth * 0.6;
  const ITEM_HEIGHT = (ITEM_WIDTH * 9) / 16;
  const SPACING = 10;
  const AUTO_SCROLL_INTERVAL = 3000;
  const PEEK_WIDTH = (windowWidth - ITEM_WIDTH) / 2;

  const extendedData = [...sliderImages, ...sliderImages, ...sliderImages];

  const initialOffset =
    sliderImages.length * (ITEM_WIDTH + SPACING * 2) +
    PEEK_WIDTH -
    (windowWidth - ITEM_WIDTH) / 2;

  useEffect(() => {
    if (!isAutoScrollEnabled) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        const newIndex = prev + 1;

        if (newIndex >= sliderImages.length * 2) {
          flatListRef.current?.scrollToOffset({
            offset: initialOffset,
            animated: false,
          });
          return 0;
        }

        const nextOffset =
          initialOffset + newIndex * (ITEM_WIDTH + SPACING * 2);

        flatListRef.current?.scrollToOffset({
          offset: nextOffset,
          animated: true,
        });

        return newIndex;
      });
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, [isAutoScrollEnabled]);

  const handleScrollBegin = () => {
    setIsAutoScrollEnabled(false);
  };

  const handleScrollEnd = () => {
    setTimeout(() => setIsAutoScrollEnabled(true), AUTO_SCROLL_INTERVAL);
  };

  const handleScroll = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const centerPosition = contentOffset + windowWidth / 2;

    const itemPosition = (position: number) => {
      return (
        position * (ITEM_WIDTH + SPACING * 2) + ITEM_WIDTH / 2 + PEEK_WIDTH
      );
    };

    let newIndex = Math.round(
      (centerPosition - itemPosition(0)) / (ITEM_WIDTH + SPACING * 2)
    );

    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= sliderImages.length * 3) {
      newIndex = sliderImages.length * 3 - 1;
    }

    setCurrentIndex(newIndex % sliderImages.length);
  };

  const handleMomentumScrollEnd = (event: any) => {
    const contentOffset = event.nativeEvent.contentOffset.x;
    const centerPosition = contentOffset + windowWidth / 2;

    if (centerPosition < sliderImages.length * (ITEM_WIDTH + SPACING * 2)) {
      flatListRef.current?.scrollToOffset({
        offset:
          contentOffset + sliderImages.length * (ITEM_WIDTH + SPACING * 2),
        animated: false,
      });
    } else if (
      centerPosition >=
      sliderImages.length * 2 * (ITEM_WIDTH + SPACING * 2)
    ) {
      flatListRef.current?.scrollToOffset({
        offset:
          contentOffset - sliderImages.length * (ITEM_WIDTH + SPACING * 2),
        animated: false,
      });
    }

    handleScrollEnd();
  };

  const renderItem: ListRenderItem<(typeof sliderImages)[0]> = ({ item }) => (
    <View
      style={[
        styles.itemContainer,
        {
          width: ITEM_WIDTH,
          height: ITEM_HEIGHT,
          marginHorizontal: SPACING,
        },
      ]}
    >
      <Image source={item.src} style={styles.image} resizeMode="cover" />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={extendedData}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH + SPACING * 2}
        snapToAlignment="center"
        decelerationRate="fast"
        initialScrollIndex={sliderImages.length}
        onScrollBeginDrag={handleScrollBegin}
        onScroll={handleScroll}
        onMomentumScrollEnd={handleMomentumScrollEnd}
        contentContainerStyle={{
          paddingHorizontal: PEEK_WIDTH - SPACING,
        }}
        getItemLayout={(_, index) => ({
          length: ITEM_WIDTH + SPACING * 2,
          offset: (ITEM_WIDTH + SPACING * 2) * index,
          index,
        })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
  },
  itemContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageSlider;
