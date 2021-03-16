import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Linking,
} from 'react-native';

import API from '../../../../config/Axios';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// import { Container } from './styles';

export default function FaleConosco({navigation}) {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    API.get('/chats').then(res => {
      setChats(res.data);
    });
  }, []);

  function abrirGrupo(chat) {
    if (chat.phone) {
      Linking.openURL('https://api.whatsapp.com/send?phone=55' + chat.phone);
    } else {
      Linking.openURL(chat.group_link);
    }
  }

  const renderedCards = chats.map(chat => {
    return (
      <TouchableOpacity
        key={chat.id}
        style={styles.Card}
        onPress={() => abrirGrupo(chat)}>
        <View style={styles.Name}>
          <Text style={styles.Text}>{chat.name}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFF'}}>
      <View style={styles.Container}>
        <TouchableOpacity
          style={styles.Card}
          onPress={() => navigation.navigate('ComoChegar')}>
          <View style={styles.Name}>
            <Text style={styles.Text}>Como chegar</Text>
          </View>
        </TouchableOpacity>
        {renderedCards}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: hp('5%'),
    // backgroundColor: '#FFF',
  },
  Card: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('5%'),
    paddingHorizontal: wp('5%'),
    width: wp('80%'),
    height: hp('10%'),
    borderRadius: wp('5%'),
    backgroundColor: '#5285a0',
    shadowColor: '#000',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 4,
  },
  Avatar: {
    // backgroundColor: '#999',
    width: wp('18%'),
    height: wp('18%'),
    borderRadius: wp('10%'),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: wp('0.1%'),
  },
  Name: {
    height: hp('8%'),
    width: wp('40%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    fontSize: wp('5%'),
    color: '#FFF',
    textAlign: 'center',
  },
});
