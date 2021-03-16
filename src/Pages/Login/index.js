import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  Button,
  Animated,
  Alert,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {logout, isAuthenticated} from '../../services/auth';

// import { Container } from './styles';
import Logo from '../../assets/icon.png';

export default function Login(props) {
  const [inputHeigth] = useState(new Animated.ValueXY(0, 0));
  const [imageHeigth] = useState(new Animated.ValueXY(0, 0));
  const [fade] = useState(new Animated.Value(0));
  const [botton2Heigth] = useState(new Animated.ValueXY(0, 0));
  const [botton1Heigth] = useState(new Animated.ValueXY(0, 0));
  const [cadastro, setCadastro] = useState(true);

  useEffect(() => {
    isAuthenticated().then(e => {
      // Alert.alert('Voce esta logado', `${e}`);
      if (e) {
        props.navigation.navigate('Menu');
      }
    });
    // try {
    //   isAuthenticated();
    //   props.navigation.navigate('Menu');
    // } catch (err) {
    // Alert.alert(`${err}`);
    // }
    // .then(e => {
    //     if (e) {
    //       props.navigation.navigate('Menu');
    //     }
    // })
    // .catch(e => {
    //   logout();
    // });
  });

  useEffect(() => {
    Animated.parallel([
      Animated.timing(inputHeigth, {
        toValue: {
          x: 0,
          y: -hp('15%'),
        },
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(imageHeigth, {
        toValue: {
          x: 0,
          y: -hp('30%'),
        },
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(fade, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  });

  function cadastroAnimado() {
    Animated.parallel([
      Animated.timing(inputHeigth, {
        toValue: {
          x: 0,
          y: cadastro ? -hp('2%') : -hp('2%'),
        },
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(botton2Heigth, {
        toValue: {
          x: 0,
          y: cadastro ? -hp('10%') : hp('10%'),
        },
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(botton1Heigth, {
        toValue: {
          x: 0,
          y: cadastro ? hp('10%') : -hp('10%'),
        },
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }

  function changeCadastro() {}

  function Cadastrar() {
    props.navigation.navigate('SignUp');
  }

  function Login() {
    props.navigation.navigate('SignIn');
  }

  return (
    <View style={styles.container}>
      <Animated.View
        style={{transform: imageHeigth.getTranslateTransform(), opacity: fade}}>
        <Image source={Logo} style={styles.logo} />
      </Animated.View>
      <Animated.View
        style={{
          transform: inputHeigth.getTranslateTransform(),
          opacity: fade,
        }}>
        <View style={styles.bottonView}>
          <Animated.View
            style={{transform: botton1Heigth.getTranslateTransform()}}>
            <TouchableOpacity style={styles.bottons1} onPress={() => Login()}>
              <Text style={styles.TextInput1}>Entrar</Text>
            </TouchableOpacity>
          </Animated.View>

          <Animated.View
            style={{transform: botton2Heigth.getTranslateTransform()}}>
            <TouchableOpacity onPress={() => Cadastrar()}>
              <View style={styles.bottons2}>
                <Text style={styles.TextInput2}>Cadastrar</Text>
              </View>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  logo: {
    marginTop: hp('60%'),
    width: wp('40%'),
    height: wp('25%'),
    top: hp('10%'),
    marginBottom: hp('18%'),
    // backgroundColor: '#333'
  },
  inputViewFisrt: {
    // backgroundColor: '#000',
    marginTop: hp('90%'),
    justifyContent: 'space-between',
    alignItems: 'center',
    height: hp('12%'),
  },
  bottonView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5285a0',
    width: wp('100%'),
    height: hp('50%'),
    // top: hp('50%'),
    // marginTop: hp('80%'),
    // marginBottom: -hp('50%'),
    paddingBottom: hp('20%'),
    borderTopLeftRadius: wp('10%'),
    borderTopRightRadius: wp('10%'),
  },
  TextInput1: {
    fontSize: wp('5%'),
    color: '#FFF',
  },
  TextInput2: {
    fontSize: wp('5%'),
    color: '#FFF',
  },
  inputStyle: {
    height: wp('10%'),
    width: wp('80%'),
    fontSize: wp('5%'),
  },
  bottons1: {
    justifyContent: 'center',
    alignItems: 'center',
    height: wp('10%'),
    width: wp('60%'),
    borderRadius: wp('10%'),
    backgroundColor: '#61acb4',
  },
  bottons2: {
    marginTop: hp('2%'),
    justifyContent: 'center',
    alignItems: 'center',
    height: wp('10%'),
    width: wp('60%'),
    borderRadius: wp('10%'),
    backgroundColor: '#525972',
  },
});
