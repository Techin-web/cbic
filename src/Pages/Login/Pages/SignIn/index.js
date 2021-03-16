/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
  Linking,
} from 'react-native';
import {
  INSTITUTION_ID,
  INSTITUTION_NAME,
} from '../../../../config/Institution-metadata';
import {login, logout, isAuthenticated} from '../../../../services/auth';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Icon from 'react-native-vector-icons/dist/Feather';
import API from '../../../../config/Axios';

export default function SignIn({navigation}) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    isAuthenticated()
      .then(e => {
        if (e) {
          navigation.navigate('Menu');
        }
      })
      .catch(e => {
        return;
      });
  });

  function navigateToSignUp() {
    navigation.navigate('SignUp');
  }

  function navigateToForgotPassword() {
    navigation.navigate('ForgotPassword');
  }

  function Logar() {
    API.post('/sessions', {
      email,
      password: senha,
      id_instituicao: INSTITUTION_ID,
    })
      .then(e => {
        // console.log(e.data.token);
        login(e.data.token)
          .then(e => {
            navigation.navigate('Videocbic');
            // console.log(e);
            // Alert.alert('Sucesso', 'Login realizado com sucesso!', [
            //   {
            //     text: 'Ok',
            //     onPress: () => navigation.navigate('Menu'),
            //   },
            // ]);
          })
          .catch(e => {
            logout();
          });
      })
      .catch(e => {
        // console.log(e);
        logout();
        Alert.alert('Erro ao logar', `${e.response.data.error}`, [
          {
            text: 'Ok',
          },
        ]);
      });
  }
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../../../assets/background.jpg')}
      style={styles.ImageBackground}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.KeyboardAvoidingView}>
        <View style={styles.Container}>
          <View style={styles.Content}>
            <View style={styles.LogoContainer}>
              <Image
                source={require('../../../../assets/CBIC-logo-branco.png')}
                style={styles.LogoImage}
              />
            </View>
            <View style={styles.InputHolder}>
              <Input
                placeholder="Email"
                textColor="white"
                onChangeText={e => setEmail(e)}
                value={email}
                keyboardType="email-address"
              />
              <Input
                placeholder="Senha"
                textColor="white"
                onChangeText={e => setSenha(e)}
                value={senha}
                keyboardType="default"
                secureTextEntry
              />
            </View>
            <View style={styles.ButtonHolder}>
              <Button clicked={() => Logar()} color="green" title="Entrar" />
              <Button
                clicked={() => navigateToSignUp()}
                color="white"
                title="Cadastrar"
              />
            </View>
            <TouchableOpacity
              style={styles.ForgotButton}
              onPress={() => navigateToForgotPassword()}>
              <Text style={styles.ForgotText}>Esqueci a senha</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.HelpButton}
            onPress={() =>
              Linking.openURL(
                `mailto:suporte@tech-inweb.com.br?subject=Suporte - ${INSTITUTION_NAME}`,
              )
            }>
            <Icon name="help-circle" size={18} color="#fff" />
            <Text style={styles.HelpText}>Dúvidas? Fale conosco</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ImageBackground: {
    height: '100%',
    width: '100%',
  },
  KeyboardAvoidingView: {
    flex: 1,
  },
  Container: {
    flex: 1,
    backgroundColor: 'rgba(81, 131, 158, .5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Content: {
    width: '80%',
  },
  LogoContainer: {
    alignSelf: 'center',
    marginBottom: hp('7%'),
  },
  LogoImage: {
    height: 80,
    width: 200,
  },
  LogoText: {
    fontSize: hp('10%'),
    fontWeight: 'bold',
    color: '#fff',
    transform: [{skewX: '-15deg'}],
  },
  InputHolder: {
    marginBottom: hp('4%'),
    alignSelf: 'center',
    width: '75%',
  },
  ButtonHolder: {
    alignSelf: 'center',
    width: '72%',
    alignItems: 'center',
    marginBottom: hp('1.5%'),
  },
  ForgotButton: {
    alignSelf: 'center',
  },
  ForgotText: {
    fontWeight: '700',
    fontSize: 16,
    color: '#fff',
  },
  HelpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('5%'),
  },
  HelpText: {
    color: '#fff',
    marginLeft: wp('2%'),
  },
});
