/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState, Fragment} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ActivityIndicator,
  Image,
  Platform,
} from 'react-native';

// import { Container } from './styles';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';

import Logo from './assets/logotransparente.png';

import API from '../../config/Axios';
import {logout, isAuthenticated, getToken} from '../../services/auth';

export default function Conf({navigation}) {
  const [loggedUser, setLoggedUser] = useState(null);
  const [foto, setFoto] = useState();
  const [recarregar, setRecarregar] = useState(true);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    baixarFoto();
    API.get('/users')
      .then(res => {
        setLoggedUser(res.data);
      })
      .catch(() =>
        Alert.alert('Sessão expirada!', 'Por favor, entre novamente.', [
          {
            text: 'OK',
            onPress: () =>
              logout().then(() => {
                navigation.navigate('SignIn');
              }),
          },
        ]),
      );
  }, [navigation, recarregar]);

  function deslogar() {
    logout().then(() => {
      navigation.navigate('SignIn');
    });
  }

  async function baixarFoto() {
    const avatar = await API.get('/avatar').catch(err => {
      return;
    });
    if (!avatar) {
      setFoto(null);
      return;
    }
    const token = await getToken();
    const uri = {
      uri: `${API.defaults.baseURL}/files/${avatar.data.avatarPath}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    setFoto(uri);
  }

  const optionsAvatar = {
    title: 'Selecione o avatar com',
    takePhotoButtonTitle: 'Tirando uma foto',
    chooseFromLibraryButtonTitle: 'Selecionando na galeria',
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  async function enviarFoto(response) {
    const fd = new FormData();

    fd.append('file', {
      name: new Date().toISOString() + '.' + response.type.split('image/')[1],
      type: response.type,
      uri:
        Platform.OS === 'android'
          ? response.uri
          : response.uri.replace('file://', ''),
    });

    API.post('/avatar', fd, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(res => {
        const source = {uri: 'data:image/jpeg;base64,' + response.data};
        setFoto(source);
        setCarregando(false);
      })
      .catch(error => {
        alert(
          'Ocorreu um erro',
          'Por favor tente realizar o upload da foto de perfil novamente.',
        );
        setCarregando(false);
      });
  }

  function pickAvatar() {
    setCarregando(true);

    ImagePicker.showImagePicker(optionsAvatar, response => {
      if (response.error) {
        return setCarregando(false);
      }

      if (response.didCancel) {
        return setCarregando(false);
      }
      enviarFoto(response);
    });
  }

  let contentToDisplay = <ActivityIndicator size="large" color="#61acb4" />;

  if (loggedUser) {
    contentToDisplay = (
      <Fragment>
        <View style={styles.CardPerfil}>
          <View style={{marginBottom: hp('10%')}}>
            <Image source={Logo} style={{width: 200, height: 90}} />
          </View>
          <View style={styles.Perfil}>
            <TouchableOpacity onPress={() => pickAvatar()}>
              <View style={styles.ImagemPerfil}>
                {foto ? (
                  carregando ? (
                    <ActivityIndicator size="large" color="#61acb4" />
                  ) : (
                    <Image
                      source={foto}
                      style={{
                        width: wp('20%'),
                        height: wp('20%'),
                      }}
                    />
                  )
                ) : (
                  <Icon name="user-alt" size={30} color="#5C859B" />
                )}
              </View>
            </TouchableOpacity>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignContent: 'center',
                width: wp('60%'),
                // backgroundColor: '#000',
              }}>
              <Text style={styles.UserText}>
                {loggedUser ? loggedUser.name : 'Usuário'}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.CardButtons}>
          <TouchableOpacity
            style={styles.Button}
            onPress={() => navigation.navigate('EditarPerfil')}>
            <Text style={styles.Text}>Alterar Perfil</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity style={styles.Button}>
            <Text style={styles.Text}>FAQ</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button}>
            <Text style={styles.Text}>Ajuda</Text>
          </TouchableOpacity> */}
          <View>
            <TouchableOpacity
              style={styles.ButtonSair}
              onPress={() => deslogar()}>
              <Text style={styles.TextSair}>Sair</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.VersionText}>versão 1.29</Text>
        </View>
      </Fragment>
    );
  }

  return <View style={styles.Container}>{contentToDisplay}</View>;
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  UserText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: '#5C859B',
  },
  Text: {
    fontSize: wp('4%'),
    color: '#FFF',
    fontWeight: 'bold',
  },
  Perfil: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#999',
    width: wp('70%'),
    height: hp('10%'),
  },
  CardPerfil: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('50%'),
    // backgroundColor: '#000',
    shadowColor: '#333',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
  },
  ImagemPerfil: {
    backgroundColor: '#eee',
    height: wp('20%'),
    width: wp('20%'),
    borderRadius: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('5%'),
    overflow: 'hidden',
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('100%'),
    height: hp('8%'),
    marginTop: hp('0.5%'),
    backgroundColor: '#497992',
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
  },
  ButtonSair: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('30%'),
    height: hp('5%'),
    borderRadius: wp('3%'),
    marginTop: hp('0.5%'),
    backgroundColor: '#FFF',
    shadowColor: '#333',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
  },
  TextSair: {
    color: '#5C859B',
    fontSize: wp('5%'),
  },
  CardButtons: {
    backgroundColor: '#5C859B',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('100%'),
    flex: 1,
    paddingBottom: hp('10%'),
  },
  VersionText: {
    color: '#E9E9E9',
    fontSize: wp('3%'),
    fontWeight: 'bold',
  },
});
