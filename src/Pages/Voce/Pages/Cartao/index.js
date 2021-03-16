import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import IconMaterial from 'react-native-vector-icons/dist/MaterialCommunityIcons';

// import { Container } from './styles';

export default function Cartao() {
  const [temCartao, setTemCartao] = useState(false);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View style={styles.buttonsView}>
        <TouchableOpacity style={styles.buttons}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <IconMaterial
              name={temCartao ? 'credit-card-plus' : 'credit-card-marker'}
              size={wp('15%')}
              color={'#DA2F3C'}
            />
          </View>
          <Text style={styles.textButtons}>
            {temCartao ? 'Recarregue seu Cartao' : 'Solicite seu cartão'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <IconMaterial
              name="account-card-details"
              size={wp('15%')}
              color={'#DA2F3C'}
            />
          </View>
          <Text style={styles.textButtons}>Clube de Vantagens</Text>
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
