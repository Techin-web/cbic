import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Card(props) {
  const event = props.event;

  return (
    <TouchableOpacity
      onPress={() => props.navigation.navigate('MuralDetails', {event})}>
      <View style={styles.Card}>
        <Text style={styles.Title}>{event.eventname}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Card: {
    backgroundColor: '#fff',
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('9%'),
    marginBottom: hp('2%'),
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  Title: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
  },
});
