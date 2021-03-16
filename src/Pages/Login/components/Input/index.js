import React from 'react';

import {StyleSheet, TextInput} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Input(props) {
  const classes = [styles.Input];
  let placeholderColot;

  if (props.textColor === 'white') {
    classes.push(styles.WhiteInput);
    placeholderColot = '#fff';
  }

  if (props.textColor === 'green') {
    classes.push(styles.GreenInput);
    placeholderColot = '#5285a0';
  }

  if (props.smallMarginBottom) {
    classes.push(styles.SmallMarginBottom);
  }

  if (props.smallText) {
    classes.push(styles.SmallText);
  }

  return (
    <TextInput
      style={classes}
      placeholderTextColor={placeholderColot}
      autoCapitalize="none"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  Input: {
    borderBottomWidth: 1.2,
    letterSpacing: 1,
    width: '100%',
    fontWeight: '300',
    alignSelf: 'center',
    fontSize: wp('4.5%'),
    paddingVertical: wp('.6%'),
    paddingHorizontal: 2,
    marginBottom: hp('2%'),
  },
  SmallMarginBottom: {
    marginBottom: hp('1%'),
  },
  SmallText: {
    fontSize: hp('2.2%'),
  },
  WhiteInput: {
    borderBottomColor: '#fff',
    color: '#fff',
  },
  GreenInput: {
    borderBottomColor: '#5285a0',
    color: '#5285a0',
  },
});
