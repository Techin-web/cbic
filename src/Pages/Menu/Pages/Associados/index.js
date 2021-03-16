import React from 'react';
import {
  View,
  Text,
  Linking,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from 'react-native';

// import { Container } from './styles';
import handshake from './Assets/handshake.png';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Associados({navigation}) {
  const associadosData = [
    {
      id: '1',
      name: 'Posicionamentos',
      page: 'https://cbic.org.br/posicionamento/',
      color: '#FFF',
      route: 'AssociadosWebPage',
      info: 'Informações importantes com noticias atuais',
      icon: 'newspaper-o',
    },
    {
      id: '2',
      name: 'Associe-se',
      page: 'https://cbic.org.br/associe-se/',
      color: '#FFF',
      route: 'Associese',
      info: 'Saiba como associar-se á CBIC',
      icon: 'group',
    },
    {
      id: '3',
      name: 'Lista de Associados',
      page: 'https://cbic.org.br/associados/',
      color: '#FFF',
      route: 'AssociadosWebPage',
      icon: 'list',
    },
    {
      id: '4',
      name: 'Associados',
      page: 'https://cbic.org.br/area-restrita/',
      color: '#FFF',
      route: 'AreaRestrita',
      icon: 'warning',
    },
  ];

  function NavigateTo(route, pagePath) {
    navigation.navigate(route, {pagePath});
  }

  function opencbicURL(page) {
    Linking.openURL(page);
  }

  function Item({name, route, page, color, id, info, icon}) {
    return (
      <TouchableOpacity
        style={[styles.Card, {backgroundColor: color}]}
        onPress={() => NavigateTo(route, page)}>
        <View style={{width: wp('50%')}}>
          <Text style={styles.Title}>{name}</Text>
          {info && (
            <Text style={{fontSize: wp('3.5%'), color: '#999'}}>{info}</Text>
          )}
        </View>
        <View>
          <FontAwesome name={icon} size={wp('12%')} color="#5285a0" />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.Container}>
      <View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontSize: wp('8%'),
              fontWeight: 'bold',
              color: '#FFF',
              marginTop: hp('4%'),
              marginBottom: hp('2%'),
            }}>
            ASSOCIADOS
          </Text>
          <View
            style={{
              borderBottomWidth: wp('1%'),
              borderColor: '#FFF',
              width: wp('30%'),
            }}
          />
          <Image
            source={handshake}
            style={{width: wp('30%'), height: hp('10%'), tintColor: '#FFF'}}
          />
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={associadosData}
          renderItem={({item}) => (
            <Item
              id={item.id}
              name={item.name}
              route={item.route}
              page={item.page}
              color={item.color}
              info={item.info}
              icon={item.icon}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#5285a0',
  },
  Card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: wp('80%'),
    minHeight: hp('13%'),
    padding: wp('3%'),
    borderRadius: wp('5%'),
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
    margin: wp('3%'),
  },
  Title: {
    fontSize: wp('5%'),
    color: '#5285a0',
    fontWeight: 'bold',
  },
});
