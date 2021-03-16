import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Button(props) {
  const buttonClasses = [styles.Button];
  const textClasses = [styles.TextButton];

  if (props.color === 'white') {
    buttonClasses.push(styles.WhiteButton);
    textClasses.push(styles.GreenText);
  }

  if (props.color === 'green') {
    buttonClasses.push(styles.GreenButton);
    textClasses.push(styles.WhiteText);
  }

  if (props.small) {
    buttonClasses.push(styles.SmallButton);
  }

  return (
    <TouchableOpacity style={buttonClasses} onPress={props.clicked}>
      <Text style={textClasses}>{props.title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Button: {
    width: '100%',
    marginBottom: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp('1.5%'),
    paddingVertical: hp('1.7%'),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  SmallButton: {
    paddingVertical: hp('1%'),
    marginBottom: hp('1.2%'),
  },
  WhiteButton: {
    backgroundColor: '#fff',
  },
  GreenButton: {
    backgroundColor: '#5285a0',
  },
  TextButton: {
    fontWeight: '300',
    letterSpacing: 1,
    fontSize: wp('4%'),
  },
  WhiteText: {
    color: '#fff',
  },
  GreenText: {
    color: '#5285a0',
  },
});
