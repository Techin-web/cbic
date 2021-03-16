import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

// import { Container } from './styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Eventos() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFF'}}>
      <View style={styles.Container}>
        <TouchableOpacity style={styles.Card}>
          <View>
            <Text>Nome do Aviso</Text>
          </View>
          <View>
            <Text>02/02/2020</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Card}>
          <View>
            <Text>Nome do Aviso</Text>
          </View>
          <View>
            <Text>04/02/2020</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.Card}>
          <View>
            <Text>Nome do Aviso</Text>
          </View>
          <View>
            <Text>06/02/2020</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: hp('5%'),
  },
  Card: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: hp('5%'),
    paddingHorizontal: wp('5%'),
    width: wp('80%'),
    height: hp('10%'),
    borderRadius: wp('5%'),
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
  },
});
