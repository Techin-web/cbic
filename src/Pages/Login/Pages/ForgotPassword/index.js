import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {INSTITUTION_ID} from '../../../../config/Institution-metadata';
import Button from '../../components/Button';
import Input from '../../components/Input';
import MatIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import API from '../../../../config/Axios';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function ForgotPassword({navigation}) {
  const [email, setEmail] = useState('');

  function onNavigationGoBack() {
    navigation.goBack();
  }

  function confirmEmailHandler() {
    const dataToPost = {
      email,
      id_instituicao: INSTITUTION_ID,
    };

    API.post('/emailservices', dataToPost)
      .then(res => {
        Alert.alert(
          'Redefinição de senha',
          'Esse token só será válido por 15 minutos. Acesse seu e-mail para redefinição.',
          [
            {
              text: 'Fechar',
              onPress: () => {
                navigation.goBack();
              },
            },
          ],
        );
      })
      .catch(err => {
        Alert.alert('Ocorreu um erro:', `${err.response.data.error}`);
        console.log(err);
      });
  }

  return (
    <View style={styles.Container}>
      <View style={styles.Content}>
        <View style={styles.LogoContainer}>
          <Image
            style={styles.LogoImage}
            source={require('../../../../assets/CBIC-logo-branco.png')}
          />
        </View>
        <Text style={styles.PrimaryHeading}>Esqueci a senha</Text>
        <Text style={styles.Paragraph}>
          Informe o seu e-mail para que possamos enviar o token de redefinição
          de uma nova senha
        </Text>
        <View style={styles.InputHolder}>
          <Input
            textColor="white"
            value={email}
            onChangeText={e => setEmail(e)}
            keyboardType="email-address"
            placeholder="Email"
          />
        </View>
        <View style={styles.ButtonHolder}>
          <Button
            clicked={() => confirmEmailHandler()}
            color="white"
            title="Enviar"
          />
        </View>
      </View>
      <TouchableOpacity onPress={onNavigationGoBack}>
        <View style={styles.GoBack}>
          <Text style={styles.GoBackText}>Voltar ao login</Text>
          <MatIcons name="arrow-left" size={wp('5%')} color="white" />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#5285a0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: hp('1%'),
  },
  Content: {
    paddingHorizontal: 20,
    paddingVertical: 50,
    width: '80%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  LogoContainer: {
    alignSelf: 'center',
    marginBottom: hp('5%'),
  },
  LogoImage: {
    height: 80,
    width: 200,
  },
  LogoText: {
    fontSize: hp('10%'),
    fontWeight: 'bold',
    color: '#fff',
  },
  PrimaryHeading: {
    fontWeight: '300',
    textTransform: 'uppercase',
    color: '#fff',
    marginBottom: hp('5%'),
    fontSize: wp('6.5%'),
    alignSelf: 'center',
    letterSpacing: 1,
  },
  Paragraph: {
    fontSize: hp('2%'),
    marginBottom: hp('3%'),
    color: '#fff',
  },
  InputHolder: {
    marginBottom: hp('5%'),
  },
  ButtonHolder: {
    width: '90%',
    alignSelf: 'center',
  },
  GoBack: {
    marginTop: hp('2%'),
    alignItems: 'center',
  },
  GoBackText: {
    fontSize: wp('4%'),
    color: '#fff',
  },
});
