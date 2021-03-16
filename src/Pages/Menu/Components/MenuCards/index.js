import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Alert} from 'react-native';
import MenuIcon from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// O nome dos icones apenas pode ser do MaterialCommunityIcons
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import { Container } from './styles';

// ,
export default function MenuCards({
  icon,
  children,
  name,
  route,
  navigation,
  onPress,
  style,
  pagePath,
}) {
  function navigate() {
    if (onPress) {
      return onPress();
    }
    if (route) {
      console.log(`navegando para rota ${route}`);
      navigation.navigate(`${route}`, {pagePath});
    } else {
      console.log('Nao navegar');
      Alert.alert(
        'Atenção',
        'Página em desenvolvimento',
        [
          {
            text: 'OK',
          },
        ],
        {cancelable: false},
      );
    }
  }
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={() => navigate()}>
      <MenuIcon name={icon} size={wp('15%')} color="#5C859B" />
      {children}
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: wp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: wp('0.2%'),
    borderRadius: wp('5%'),
    width: wp('30%'),
    height: wp('30%'),
    backgroundColor: '#FFF',
    shadowColor: '#333',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
  },
  text: {
    textAlign: 'center',
    fontSize: wp('4%'),
    color: '#5C859B',
    fontWeight: 'bold',
  },
});
