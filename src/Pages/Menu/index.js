/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import AutoLink from '../../components/AutoLink';
import Card from './Components/MenuCards';

import Logocbic from './assets/logocbic.png';
import logofacebook from './assets/facebook.png';
import logoflickr from './assets/flickr.png';
import logoinstagram from './assets/instagram.png';
import logolinkedin from './assets/linkedin.png';
import logotwitter from './assets/twitter.png';
import logoyoutube from './assets/youtube.png';
// import { Container } from './styles';
import API from '../../config/Axios';

import OneSignal from 'react-native-onesignal';

import Logo from './Logokone.png';

import ImagemAgenda from './assets/agenda.png';

export default function Menu({navigation}) {
  const [mes, setMes] = useState('');
  const [mensagem, setMensagem] = useState('mensagem');

  const MesBR = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  useEffect(() => {
    const AnoCompleto = new Date();
    // console.log(AnoCompleto);
    const NumeroMes = AnoCompleto.getMonth();
    // console.log(NumeroMes);
    setMes(MesBR[NumeroMes]);
  }, [MesBR]);

  async function buscarMensagem() {
    // try {
    //   const data = await API.get('/institutions');
    // Alert.alert(`${data}`);
    // setMensagem(data.institutional_message);
    // } catch (err) {
    //   Alert.alert(`${err.response.data.error}`);
    // }
    API.get('/institutions').then(e =>
      // Alert.alert(`${JSON.stringify(e.data.institutional_message)}`),
      setMensagem(e.data.institutional_message),
    );
  }

  useEffect(() => {
    buscarMensagem();
  }, []);

  useEffect(() => {
    OneSignal.addEventListener('opened', () => buscarMensagem());
    return () => OneSignal.removeEventListener('opened', buscarMensagem());
  }, []);

  function mural() {
    // Linking.openURL('https://www.flickr.com/photos/cbicfotos');
    navigation.navigate('Mural');
  }

  function abrirLinkDeAssociados() {
    navigation.navigate('Associados');
  }

  function abrirLinkDeAgenda() {
    Linking.openURL('https://cbic.org.br/#agenda--container');
  }

  function abrirLinkPublicacoes() {
    Linking.openURL('https://cbic.org.br/publicacoes/');
  }
  function abrirLinkImprensa() {
    Linking.openURL('https://cbic.org.br/imprensa/');
  }

  const paginaImprensa = {
    titulo: 'Covid-19:Força-tarefa do Seconci-Rio leva informações às empresas',
    texto: `Fazendo valer a expressão ‘a união faz a força’ neste momento de prevenção do coronavírus (Covid-19), o Serviço Social da Indústria da Construção do Estado do Rio de Janeiro (Seconci-Rio) reuniu sua equipe para promover o serviço de orientação quanto às medidas de proteção contra o vírus.

    Trata-se de uma força-tarefa em prol da disseminação de informações sobre boas práticas nos escritórios e canteiros.
    
    Os profissionais de saúde estão entrando em contato com as empresas contribuintes, levando orientações importantes e abrindo espaço para esclarecimento de dúvidas.
    
    No entanto, o Seconci-Rio alerta que as empresas não precisam esperar o contato. Os canais de atendimento estão à disposição e os profissionais estão prontos para tira dúvidas e passar informações importantes.`,
  };

  return (
    <View style={styles.Container}>
      <View style={styles.Card1}>
        <View
          style={{
            // flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            // backgroundColor: '#000',
            marginLeft: wp('5%'),
            width: wp('25%'),
          }}>
          <Image
            source={Logocbic}
            style={{width: wp('25%'), height: hp('7%')}}
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: wp('60%'),
            padding: 12,
            // backgroundColor: '#000',
          }}>
          <Text
            style={{
              fontSize: wp('6%'),
              color: '#FFF',
              fontWeight: 'bold',
              marginBottom: hp('.2%'),
            }}>
            AVISO
          </Text>
          <Text style={styles.Text} numberOfLines={5}>
            <AutoLink>{mensagem}</AutoLink>
          </Text>
        </View>
      </View>

      <View style={styles.ContainerCards}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.CardsRow}>
            <Card
              name="Associados"
              icon="briefcase-edit"
              // onPress={() => abrirLinkDeAssociados()}
              route="MenuAssociados"
              navigation={navigation}
            />
            <Card
              name="Comissões"
              icon="chart-areaspline"
              route="Comissoes"
              navigation={navigation}
            />
          </View>
          <View style={styles.CardsRow}>
            <Card
              name="Fale Conosco"
              icon="message-reply-text"
              route="FaleConoscoIndex"
              navigation={navigation}
            />
            <Card
              name="Imprensa"
              icon="newspaper"
              navigation={navigation}
              route="ImprensaWebPage"
              pagePath="https://cbic.org.br/imprensa/"
              // onPress={() => abrirLinkImprensa()}
              // onPress={() =>
              //   navigation.navigate('PaginaGenerica', {
              //     texto: paginaImprensa.texto,
              //     titulo: paginaImprensa.titulo,
              //     title: 'Imprensa',
              //   })
              // }
            />
          </View>
          <View style={styles.CardsRow}>
            {/* <Card name="Reflexão" icon="thought-bubble" /> */}
            <Card
              name="Publicações"
              // icon="folder-multiple-image"
              icon="checkbook"
              // onPress={() => abrirLinkPublicacoes()}
              route="Mural"
              navigation={navigation}
            />
            <Card
              name="Agenda"
              icon="calendar-month"
              route="AgendaWebPage"
              navigation={navigation}
              pagePath="https://cbic.org.br/#agenda--container"
              // onPress={() => navigation.navigate('PaginaGenerica', { imagem: ImagemAgenda, title: 'Agenda' })}
            />
          </View>
          <View style={styles.Card3}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.instagram.com/cbic.brasil/')
              }>
              <Image source={logoinstagram} style={styles.LogoSocial} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.facebook.com/cbicbrasil')
              }>
              <Image source={logofacebook} style={styles.LogoSocial} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => Linking.openURL('https://twitter.com/cbicbrasil')}>
              <Image source={logotwitter} style={styles.LogoSocial} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.linkedin.com/company/cbicbrasil/')
              }>
              <Image source={logolinkedin} style={styles.LogoSocial} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.youtube.com/user/cbicvideos')
              }>
              <Image source={logoyoutube} style={styles.LogoSocial} />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.flickr.com/photos/cbicfotos')
              }>
              <Image source={logoflickr} style={styles.LogoSocial} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'flex-end',
              paddingTop: hp('2%'),
            }}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL('https://oneelevadores.com.br/');
              }}>
              <Text
                style={{
                  fontSize: wp('4%'),
                  color: '#FFF',
                }}>
                Presented by:
              </Text>
              <View>
                <Image source={Logo} style={styles.Logo} />
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5C859B',
  },
  Card1: {
    width: wp('90%'),
    height: hp('16%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: wp('5%'),
    backgroundColor: '#E73D47',
    marginTop: hp('22%'),
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
  },
  Card3: {
    width: wp('80%'),
    height: hp('6%'),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: wp('3%'),
    backgroundColor: '#FFF',
    // top: hp('-1%'),
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
    zIndex: 0,
  },
  LogoSocial: {
    width: wp('9%'),
    height: wp('9%'),
  },
  Cards: {
    margin: wp('2%'),
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
  },
  ContainerCards: {
    marginTop: hp('0.4%'),
    marginBottom: hp('6%'),
    paddingBottom: hp('11%'),
  },
  CardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Text: {
    fontSize: wp('4%'),
    color: '#FFF',
    textAlign: 'center',
  },
  TextCbic: {
    fontSize: wp('13%'),
    color: '#FFF',
    fontWeight: 'bold',
  },
  Logo: {
    width: '100%',
    height: wp('10%'),
    marginBottom: hp('3%'),
  },
});
