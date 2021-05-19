import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import MuralMedia from './MuralMedia/index';
import AutoLink from '../../../../../components/AutoLink';
import Icon from 'react-native-vector-icons/FontAwesome';
const allMonths = [
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
  'Dezembro'
];

export default function MuralDetail({navigation}) {
  const event = navigation.state.params.event;
  const date = new Date(`${event.updatedAt}`);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const newDate = `${day} de ${allMonths[month]} de ${year}`;

  let content = event.eventdescription.replace('SAIBA MAIS', '');
  content = content.replace('COMPARTILHE!', '');

  return (
    <View style={styles.Container}>
      <View style={styles.Content}>
        <ScrollView contentContainerStyle={styles.ScrollView}>
          <Text style={styles.Title}>{event.eventname}</Text>
          <View style={styles.DateContainer}>
            <Icon name="calendar" style={styles.IconDate} />
            <Text style={styles.Date}>{newDate}</Text>
          </View>
          <View style={ event.mimetype.includes('video/') ? styles.MuralContainerVideo : styles.MuralContainer }>
            <MuralMedia file={event} /> 
          </View>
          <Text style={styles.Description}>
            <AutoLink dark>{content}</AutoLink>
          </Text>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#5C859B',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Content: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
  },
  ScrollView: {
    padding: 20,
  },
  GoBackButton: {
    zIndex: 100,
    position: 'absolute',
    color: '#3F3F3F',
    right: 0,
    padding: 10,
  },
  Title: {
    color: '#333',
    fontWeight: '700',
    fontSize: 22,
    maxWidth: '90%',
  },
  Description: {
    color: '#3F3F3F',
    fontSize: 18,
    marginBottom: 50,
    marginTop: 30,
    textAlign: 'justify'
  },
  MuralContainer: {
    marginTop: 20,
    height: 270
  },
  MuralContainerVideo: {
    marginTop: 60,
  },
  DateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 10
  },
  IconDate: {
    marginRight: 5,
  },
});
