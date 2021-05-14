import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import MuralMedia from './MuralMedia/index';
import AutoLink from '../../../../../components/AutoLink';

export default function MuralDetail({navigation}) {
  const event = navigation.state.params.event;
  let content = event.eventdescription.replace('SAIBA MAIS', '');
  content = content.replace('COMPARTILHE!', '');

  return (
    <View style={styles.Container}>
      <View style={styles.Content}>
        <ScrollView contentContainerStyle={styles.ScrollView}>
          <Text style={styles.Title}>{event.eventname}</Text>
          <View style={styles.MuralContainer}>
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
    marginBottom: 30,
    textAlign: 'justify'
  },
  MuralContainer: {
    marginVertical: 30
  }
});
