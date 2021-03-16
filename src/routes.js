/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, Linking, TouchableOpacity} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import VoceIcon from 'react-native-vector-icons/dist/Ionicons';

// Primeira página
import Login from './Pages/Login';
import SignUpStep1 from './Pages/Login/Pages/SignUp/Step1';
import SignUpStep2 from './Pages/Login/Pages/SignUp/Step2';
import SignUpStep3 from './Pages/Login/Pages/SignUp/Step3';
import SignIn from './Pages/Login/Pages/SignIn';
import ForgotPassword from './Pages/Login/Pages/ForgotPassword';
import Videocbic from './Pages/Login/Pages/Video';

// Páginas do menu bottom
import Menu from './Pages/Menu';
import Conf from './Pages/Conf';
import MainWebPage from './Pages/MainWebPage';

// Páginas do VOCE
import Cartao from './Pages/Voce/Pages/Cartao';
import Produtos from './Pages/Voce/Pages/Produtos';
import Premiacao from './Pages/Voce/Pages/Premiacao';

// Páginas do MenuPages
import Doacoes from './Pages/Menu/Pages/Doacoes';
import FaleConosco from './Pages/Menu/Pages/FaleConosco';
import Informativos from './Pages/Menu/Pages/Informativos';
import Comissoes from './Pages/Menu/Pages/Comissoes';
import ImprensaWebPage from './Pages/Menu/Pages/ImprensaWebPage';
import AgendaWebPage from './Pages/Menu/Pages/AgendaWebPage';

// pagina para comissoes
import PaginaGenerica from './Pages/Menu/Pages/Comissoes/PaginaGenerica';
import ComissoesWebPage from './Pages/Menu/Pages/Comissoes/ComissoesWebPage';

import Associados from './Pages/Menu/Pages/Associados';
import Mural from './Pages/Menu/Pages/Mural';
import MuralDetails from './Pages/Menu/Pages/Mural/MuralDetails';
import RedesSociais from './Pages/Menu/Pages/RedesSociais';

// Páginas do Fale Conosco
import ComoChegar from './Pages/Menu/Pages/FaleConosco/Pages/ComoChegar';

// Páginas do Config menu
import EditarPerfil from './Pages/Conf/pages/EditarPerfil';

// Páginas para Associados
import AreaRestrita from './Pages/Menu/Pages/Associados/Pages/AreaRestrita';
import Associese from './Pages/Menu/Pages/Associados/Pages/Associese';
import ListaDeAssociados from './Pages/Menu/Pages/Associados/Pages/ListaDeAssociados';
import AssociadosWebPage from './Pages/Menu/Pages/Associados/Pages/AssociadosWebPage';

// Rotas para Associados
const MenuAssociados = createStackNavigator({
  AssociadosIndex: {
    screen: Associados,
    navigationOptions: {
      title: 'Menu',
      headerShown: false,
    },
  },
  Associese: {
    screen: Associese,
    navigationOptions: {
      title: 'Associe-se',
      headerShown: false,
    },
  },
  ListaDeAssociados: {
    screen: ListaDeAssociados,
    navigationOptions: {
      title: 'Lista de Associados',
      headerShown: false,
    },
  },
  AreaRestrita: {
    screen: AreaRestrita,
    navigationOptions: {
      title: 'Área Restrita',
      headerShown: false,
    },
  },
  AssociadosWebPage: {
    screen: AssociadosWebPage,
    navigationOptions: {
      title: 'Associados',
      headerShown: false,
    },
  },
});

// Rotas para o Fale Conosco
const MenuFaleConosco = createStackNavigator({
  FaleConoscoIndex: {
    screen: FaleConosco,
    navigationOptions: {
      title: 'Menu',
      headerShown: false,
    },
  },
  ComoChegar: {
    screen: ComoChegar,
    navigationOptions: {
      title: 'Como Chegar',
      headerShown: false,
    },
  },
});

const MuralStack = createStackNavigator({
  Mural: {
    screen: Mural,
    navigationOptions: {
      title: 'Publicações',
      headerShown: false,
    },
  },
  MuralDetails: {
    screen: MuralDetails,
    navigationOptions: {
      title: 'Publicações',
      headerShown: false,
    },
  },
});

const ComissoesStack = createStackNavigator(
  {
    Comissoes: {
      screen: Comissoes,
      navigationOptions: {
        title: 'Comissões',
      },
    },
    ComissoesWebPage: {
      screen: ComissoesWebPage,
      navigationOptions: {
        title: 'Comissões',
      },
    },
  },
  {
    headerMode: 'none',
  },
);

// Rotas para o Menu
const MenuPages = createStackNavigator({
  MenuIndex: {
    screen: Menu,
    navigationOptions: {
      title: 'Menu',
      headerShown: false,
    },
  },
  FaleConoscoIndex: {
    screen: MenuFaleConosco,
    navigationOptions: {
      title: 'Fale Conosco',
    },
  },
  Informativos: {
    screen: Informativos,
    navigationOptions: {
      title: 'Informativos',
    },
  },
  Comissoes: {
    screen: ComissoesStack,
    navigationOptions: {
      title: 'Comissões',
    },
  },
  PaginaGenerica: {
    screen: PaginaGenerica,
  },
  MenuAssociados: {
    screen: MenuAssociados,
    navigationOptions: {
      title: 'Associados',
    },
  },
  Mural: {
    screen: MuralStack,
    navigationOptions: {
      title: 'Publicações',
    },
  },
  RedesSociais: {
    screen: RedesSociais,
    navigationOptions: {
      title: 'Redes Sociais',
    },
  },
  ImprensaWebPage: {
    screen: ImprensaWebPage,
    navigationOptions: {
      title: 'Imprensa',
    },
  },
  AgendaWebPage: {
    screen: AgendaWebPage,
    navigationOptions: {
      title: 'Agenda',
    },
  },
});

// objeto exibido no lugar da pagina VOCE
const VocePaginas = createMaterialTopTabNavigator(
  {
    Cartao: {
      screen: Cartao,
      navigationOptions: {
        title: 'Cartão',
      },
    },
    Produtos: {
      screen: Produtos,
      navigationOptions: {
        title: 'Produtos',
      },
    },
    Premiacao: {
      screen: Premiacao,
      navigationOptions: {
        title: 'Premiação',
      },
    },
  },
  {
    tabBarOptions: {
      pressColor: '#ff3f3c',

      labelStyle: {
        fontSize: wp('4%'),
        fontWeight: 'bold',
        // color: '#000',
      },
      tabStyle: {
        paddingTop: hp('7%'),
        backgroundColor: '#ff3f3c',
        color: '#FFF',
      },

      activeTintColor: '#DA2F3C',
    },
    navigationOptions: {},
    swipeEnabled: true,
    backBehavior: 'history',
  },
);

const ConfigPages = createStackNavigator({
  ConfigIndex: {
    screen: Conf,
    navigationOptions: {
      headerShown: false,
      title: 'Configurações',
    },
  },
  EditarPerfil: {
    screen: EditarPerfil,
    navigationOptions: {
      title: 'Editar Perfil',
    },
  },
});

// Menu bottom visivel na aplicaçao toda
const bottom = createBottomTabNavigator(
  {
    Menu: {
      screen: MenuPages,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: wp('3%'),
              }}>
              <VoceIcon
                name="ios-home"
                size={wp('8%')}
                color={focused ? '#61acb4' : '#111'}
              />
            </View>
          );
        },
      },
    },
    Voce: {
      screen: MainWebPage,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                // paddingTop: wp('3%'),
                top: -hp('2%'),
                // borderWidth: 1,
                width: hp('10%'),
                borderRadius: wp('11%'),
                backgroundColor: '#DA2F3C',
                shadowColor: '#000',
                shadowOpacity: 0.8,
                shadowRadius: 2,
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                elevation: 4,
              }}>
              <Text
                style={{
                  // color: '#FFF',
                  color: '#FFF',
                  fontSize: wp('2.4%'),
                  fontWeight: 'bold',
                  textAlign: 'center',
                  paddingHorizontal: wp('2%'),
                }}>
                CBIC SERVIÇOS
              </Text>
            </View>
          );
        },
      },
    },
    Conf: {
      screen: ConfigPages,
      navigationOptions: {
        tabBarIcon: ({focused}) => {
          return (
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: wp('3%'),
              }}>
              <VoceIcon
                name="ios-settings"
                size={wp('8%')}
                color={focused ? '#61acb4' : '#111'}
              />
            </View>
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      adaptive: true,

      style: {
        height: hp('10%'),
      },
    },
    backBehavior: 'history',
  },
);

const SignUp = createStackNavigator(
  {
    SignUpStep1: {
      screen: SignUpStep1,
    },
    SignUpStep2: {
      screen: SignUpStep2,
    },
    SignUpStep3: {
      screen: SignUpStep3,
    },
  },
  {
    headerMode: 'none',
  },
);

// transicao da pagina de Login/Cadastro para o Menu
export default initialScreen => {
  const routes = createSwitchNavigator(
    {
      SignIn: {screen: SignIn},
      Videocbic: {screen: Videocbic},
      SignUp: {screen: SignUp},
      ForgotPassword: {screen: ForgotPassword},
      Menu: {screen: bottom},
      Login: {screen: Login},
    },
    {
      navigationOptions: {
        headerStyle: {
          backgroundColor: '#5285a0',
        },
        headerTintColor: '#FFF',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 20,
          flex: 1,
          textAlign: 'center',
        },
      },
      backBehavior: 'history',
      initialRouteName: initialScreen,
    },
  );

  return createAppContainer(routes);
};
