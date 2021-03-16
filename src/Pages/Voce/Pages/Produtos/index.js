import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IconMaterial from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import IconFontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5';

// import { Container } from './styles';

export default function Produtos() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.buttons}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <IconMaterial
              name="heart-pulse"
              size={wp('15%')}
              color={'#DA2F3C'}
            />
          </View>
          <Text style={styles.textButtons}>Plano de Saúde</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttons}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <IconFontAwesome5
              name="hands-helping"
              size={wp('15%')}
              color={'#DA2F3C'}
            />
          </View>
          <Text style={styles.textButtons}>Consórcio</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsView}>
        {/* <TouchableOpacity style={styles.buttons}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <IconMaterial
              name="heart-pulse"
              size={wp('15%')}
              color={'#246bb3'}
            />
          </View>
          <Text style={styles.textButtons}>Plano de Saúde</Text>
        </TouchableOpacity> */}
        <TouchableOpacity style={styles.buttons}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <IconFontAwesome5
              name="money-check-alt"
              size={wp('15%')}
              color={'#DA2F3C'}
            />
          </View>
          <Text style={styles.textButtons}>Capitalização</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <IconFontAwesome5 name="tooth" size={wp('15%')} color={'#DA2F3C'} />
          </View>
          <Text style={styles.textButtons}>Plano Odontológico</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('83%'),
    paddingVertical: wp('2%'),
  },
  buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('5%'),
    width: wp('39%'),
    height: wp('39%'),
    backgroundColor: '#FFF',
    shadowColor: '#333',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
    // backgroundColor: '#000',
  },
  textButtons: {
    fontSize: wp('5%'),
    textAlign: 'center',
  },
});
