import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function AreaRestrita({navigation}) {
  return (
    <View style={styles.Container}>
      <View style={styles.Conteudo}>
        <View
          style={{
            marginBottom: hp('10%'),
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: wp('8%'),
              color: '#5285a0',
              fontWeight: 'bold',
              marginBottom: hp('2%'),
            }}>
            ASSOCIADOS
          </Text>
          <FontAwesome name="group" size={wp('30%')} color="#5285a0" />
        </View>
        <TouchableOpacity
          style={styles.Card}
          onPress={() =>
            navigation.navigate('AssociadosWebPage', {
              pagePath: 'https://cbic.org.br/administrativo/',
            })
          }>
          <Text style={styles.Title}>Administrativo</Text>
          <View
            style={{
              borderBottomWidth: wp('0.8%'),
              borderColor: '#FFF',
              width: wp('30%'),
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.Card}
          onPress={() =>
            navigation.navigate('AssociadosWebPage', {
              pagePath: 'https://cbic.org.br/assessoria-legislativa/',
            })
          }>
          <Text style={styles.Title}>Assessoria Legislativa</Text>
          <View
            style={{
              borderBottomWidth: wp('0.8%'),
              borderColor: '#FFF',
              width: wp('30%'),
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  Conteudo: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('80%'),
  },
  Text: {
    fontSize: wp('5%'),
    color: '#000',
  },
  Card: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('10%'),
    backgroundColor: '#5285a0',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
    margin: wp('5%'),
  },
  Title: {
    fontSize: wp('5%'),
    color: '#FFF',
  },
});
