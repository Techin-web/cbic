import React from 'react';
import {Dimensions, Animated, View, FlatList, StyleSheet} from 'react-native';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const {width} = Dimensions.get('window');

export default function Carousel(props) {
  const scrollX = new Animated.Value(0);
  let position = Animated.divide(scrollX, width);

  const {data, CarouselItem, closeCarousel} = props;

  return (
    <View style={styles.Container}>
      <FlatList
        data={data}
        keyExtractor={item => 'key' + item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        bounces={false}
        pagingEnabled={true}
        scrollEventThrottle={16}
        renderItem={({item}) => {
          return <CarouselItem item={item} closeCarousel={closeCarousel} />;
        }}
        onScroll={Animated.event([
          {nativeEvent: {contentOffset: {x: scrollX}}},
        ])}
      />
      <View style={styles.DotView}>
        {data.map((_, i) => {
          let opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          const dotStyle = {
            opacity,
            height: 15,
            width: 15,
            backgroundColor: '#fff',
            margin: 8,
            borderRadius: 5,
          };

          return <Animated.View key={i} style={dotStyle} />;
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'rgb(30, 92, 136)',
  },
  DotView: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: hp('7%'),
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
