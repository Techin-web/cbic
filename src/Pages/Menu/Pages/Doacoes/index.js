/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Picker,
  TextInput,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {TextInputMask} from 'react-native-masked-text';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

// import { Container } from './styles';

export default function Doacoes({navigation}) {
  const [tipoDoacao, setTipoDoacao] = useState('');
  const [quantidadeDoacao, setQuantidadeDoacao] = useState(0);

  function navigateBack() {
    navigation.goBack();
  }

  function closeKeyboard() {
    Keyboard.dismiss();
  }

  function handleCancel() {
    closeKeyboard();
    navigateBack();
  }

  function handleAccept() {
    closeKeyboard();
  }

  return (
    <View style={styles.Container}>
      <KeyboardAvoidingView
        behavior="position"
        keyboardVerticalOffset={Platform.OS == 'ios' ? hp('30%') : 0}>
        <View style={styles.CardContainer}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Text}>Tipo de doação</Text>
            <Picker
              selectedValue={tipoDoacao}
              style={{
                width: wp('40%'),
                height: hp('5%'),
                justifyContent: 'center',
              }}
              onValueChange={(itemValue, itemIndex) =>
                setTipoDoacao(itemValue)
              }>
              <Picker.Item label="Dizimo" value="dizimo" />
              <Picker.Item label="Oferta" value="oferta" />
            </Picker>
          </View>

          <View style={{flex: 1, alignItems: 'center', marginTop: hp('5%')}}>
            <Text style={styles.Text}>Valor da Contribuição</Text>
            <TextInputMask
              keyboardAppearance="default"
              type={'money'}
              maxLength={15}
              style={{
                height: hp('6%'),
                width: wp('35%'),
                borderBottomColor: 'gray',
                borderBottomWidth: 1,
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
              }}
              value={quantidadeDoacao}
              onChangeText={text => {
                setQuantidadeDoacao(text);
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: wp('80%'),
              height: hp('4%'),
            }}>
            <TouchableOpacity
              style={[styles.Button, styles.ButtonCancel]}
              onPress={() => handleCancel()}>
              <View>
                <Text style={styles.Text}>Cancelar</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.Button, styles.ButtonAccept]}
              onPress={() => handleAccept()}>
              <View>
                <Text style={styles.Text}>Contribuir</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  CardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: wp('5%'),
    width: wp('90%'),
    height: hp('40%'),
    backgroundColor: '#FFF',
    shadowColor: '#333',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
    padding: wp('5%'),
  },
  Text: {
    fontSize: wp('5%'),
  },
  Button: {
    borderWidth: 0.5,
    borderRadius: hp('5%'),
    width: wp('30%'),
    height: hp('4%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonCancel: {
    backgroundColor: '#fd5757',
  },
  ButtonAccept: {
    backgroundColor: '#66cbfd',
  },
});
