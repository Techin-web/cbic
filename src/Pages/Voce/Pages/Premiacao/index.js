/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// import { Container } from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Premiacao() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.headerView}>
        <View style={styles.headerSaldo}>
          <Text style={{fontSize: wp('4%'), color: '#FFF'}}>
            Saldo disponivel
          </Text>
          <Text style={{fontSize: wp('8%'), color: '#FFF'}}>R$ 0,00</Text>
        </View>

        <TouchableOpacity>
          <View style={styles.headerBotao}>
            <Text style={{color: '#FFF'}}>Fazer Retirada</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerView: {
    backgroundColor: '#DA2F3C',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('10%'),
    paddingLeft: wp('10%'),
    paddingRight: wp('10%'),
  },
  headerSaldo: {},
  headerBotao: {
    backgroundColor: '#ff3f4c',
    padding: wp('4%'),
    borderRadius: wp('5%'),
  },
});
