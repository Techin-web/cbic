import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  Linking,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const backgrounds = [
  require('../../../../../assets/carrossel-app-1.png'),
  require('../../../../../assets/carrossel-app-2.png'),
  require('../../../../../assets/carrossel-app-3.jpeg'),
];

export default function CarouselItem({item, closeCarousel}) {
  function redirectToPage(pageUrl) {
    Linking.openURL(pageUrl);
  }

  let itemInstruction;
  if (item.scrollInstruction) {
    itemInstruction = (
      <View style={styles.ItemInstruction}>
        <Text style={styles.ItemInstructionText}>
          Arraste pro lado para conferir mais &#10140;
        </Text>
      </View>
    );
  }

  let skipButton;
  if (item.skipButton) {
    skipButton = (
      <TouchableOpacity style={styles.SkipButton} onPress={closeCarousel}>
        <Text style={styles.SkipButtonText}>Pular</Text>
      </TouchableOpacity>
    );
  }

  let finalButton;
  if (item.lastIndex) {
    finalButton = (
      <TouchableOpacity style={styles.FinalButton} onPress={closeCarousel}>
        <Text style={styles.FinalButtonText}>Continuar &#10140;</Text>
      </TouchableOpacity>
    );
  }

  return (
    <ImageBackground
      source={backgrounds[item.id - 1]}
      style={styles.CarouselItem}>
      <LinearGradient
        colors={item.colors}
        useAngle={true}
        angle={60}
        angleCenter={{x: 0.5, y: 0.5}}
        style={styles.CarouselItemContainer}>
        {itemInstruction}
        {skipButton}
        <View style={styles.CarouselItemTextHolder}>
          <Text style={styles.ItemDescription}>{item.description}</Text>
          <Text style={styles.ItemTitle}>{item.title}</Text>
        </View>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => redirectToPage(item.buttonUrl)}>
          <Text style={styles.ButtonTitle}>{item.buttonTitle}</Text>
        </TouchableOpacity>
        {finalButton}
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  CarouselItem: {
    width: wp('100%'),
    height: hp('100%'),
  },
  CarouselItemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  SkipButton: {
    position: 'absolute',
    top: hp('8%'),
    right: wp('5%'),
  },
  SkipButtonText: {
    color: '#eee',
    textTransform: 'uppercase',
    fontSize: wp('4%'),
    fontWeight: '700',
  },
  ItemInstruction: {
    marginBottom: hp('5%'),
  },
  ItemInstructionText: {
    fontSize: wp('3.2%'),
    color: '#CDCDCD',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  CarouselItemTextHolder: {
    width: '80%',
    alignItems: 'center',
    marginBottom: hp('4%'),
  },
  ItemDescription: {
    textAlign: 'center',
    fontSize: wp('5%'),
    fontWeight: '600',
    color: '#fff',
    marginBottom: hp('10%'),
  },
  ItemTitle: {
    textAlign: 'center',
    fontSize: wp('5.5%'),
    textTransform: 'uppercase',
    fontWeight: '700',
    color: '#fff',
  },
  Button: {
    backgroundColor: '#fff',
    width: '70%',
    alignItems: 'center',
    paddingVertical: hp('1.8%'),
    borderRadius: wp('2%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  ButtonTitle: {
    fontWeight: '700',
    textTransform: 'uppercase',
    color: 'rgb(79, 64, 39)',
  },
  FinalButton: {
    backgroundColor: 'rgba(30, 92, 136, .85)',
    width: '70%',
    alignItems: 'center',
    paddingVertical: hp('1.8%'),
    borderRadius: wp('2%'),
    marginTop: hp('2%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,

    elevation: 1,
  },
  FinalButtonText: {
    fontWeight: '700',
    textTransform: 'uppercase',
    color: '#fff',
  },
});
