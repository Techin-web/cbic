import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

import API from '../../../../config/Axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { TextInputMask } from 'react-native-masked-text';

export default function EditarPerfil({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    API.get('/users').then(res => {
      setName(res.data.name);
      setEmail(res.data.email);
      setCep(res.data.cep ? res.data.cep : '');
      setCpf(res.data.cpf ? res.data.cpf : '');
    });
  }, []);

  function alterarPerfil() {
    if (confirmPassword ? confirmPassword.length < 6 : true) {
      return Alert.alert('', 'Por favor informe a senha corretamente.');
    }
    API.put('/users', {
      name,
      email,
      cep,
      cpf,
      oldPassword: confirmPassword,
    })
      .then(() => {
        Alert.alert('Dados atualizados com sucesso!');
        setConfirmPassword('');
      })
      .catch(e =>
        Alert.alert(
          'Ocorreu um erro ao alterar dados',
          `${e.response.data.error}`,
        ),
      );
  }

  return (
    <View style={styles.Container}>
      <ScrollView>
        <View style={styles.Formulario}>
          <TextInput
            style={styles.Input}
            placeholder="Nome"
            placeholderTextColor="#FFF"
            autoCapitalize="none"
            value={name}
            onChangeText={e => setName(e)}
          />
          <TextInput
            style={styles.Input}
            placeholder="Email"
            placeholderTextColor="#FFF"
            autoCapitalize="none"
            value={email}
            onChangeText={e => setEmail(e)}
          />

          <TextInputMask
            style={styles.Input}
            type={'custom'}
            options={{ mask: '99.999-999' }}
            placeholder="CEP"
            placeholderTextColor="#FFF"
            autoCapitalize="none"
            value={cep}
            onChangeText={e => setCep(e)}
          />
          <TextInputMask
            type={'cpf'}
            style={styles.Input}
            placeholder="CPF"
            placeholderTextColor="#FFF"
            autoCapitalize="none"
            value={cpf}
            onChangeText={e => setCpf(e)}
          />
          <TextInput
            style={styles.Input}
            placeholder="Confirmar Senha"
            placeholderTextColor="#FFF"
            secureTextEntry
            autoCapitalize="none"
            value={confirmPassword}
            onChangeText={e => setConfirmPassword(e)}
          />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => alterarPerfil()}>
            <Text style={styles.TextButton}>Alterar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.Button, { backgroundColor: '#FFF' }]}
            onPress={() => navigation.goBack()}>
            <Text style={[styles.TextButton, { color: '#5285a0' }]}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#5285a0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  Content: {
    flex: 1,
  },
  Group: {
    marginBottom: hp('2%'),
  },
  Label: {
    fontSize: hp('2.2%'),
    marginBottom: hp('1%'),
  },
  Input: {
    fontSize: hp('2%'),
    borderBottomWidth: 1,
  },
  Button: {
    backgroundColor: '#497992',
    marginBottom: 10,
    width: wp('60%'),
    borderRadius: wp('3%'),
    paddingVertical: 8,
    alignItems: 'center',
  },
  TextButton: {
    color: '#FFF',
    fontSize: wp('5%'),
  },
  Formulario: {
    marginBottom: hp('3%'),
  },
  Input: {
    // backgroundColor: '#FFF',
    color: '#FFF',
    // borderWidth: wp('0.5%'),
    borderBottomWidth: wp('0.3%'),
    borderColor: '#FFF',
    width: wp('70%'),
    paddingHorizontal: wp('5%'),
    paddingVertical: wp('2%'),
    fontSize: wp('5%'),
    // borderRadius: wp('5%'),
    margin: wp('2.5%'),
  },
});
