import React from 'react';
import {Text, View, StyleSheet, ScrollView} from 'react-native';
import MuralMedia from './MuralMedia/index';
import Icon from 'react-native-vector-icons/AntDesign';
import AutoLink from '../../../../../components/AutoLink';

export default function MuralDetail({navigation}) {
  const event = navigation.state.params.event;

  return (
    <View style={styles.Container}>
      <View style={styles.Content}>
        <ScrollView contentContainerStyle={styles.ScrollView}>
          <Icon
            name="arrowleft"
            size={20}
            style={styles.GoBackButton}
            onPress={() => navigation.goBack()}
          />
          <Text style={styles.Title}>{event.eventname}</Text>
          <Text style={styles.Description}>
            <AutoLink dark>{event.eventdescription}</AutoLink>
          </Text>
          <MuralMedia file={event} />
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
    width: '90%',
    borderRadius: 5,
    maxHeight: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
    fontWeight: '700',
    fontSize: 22,
    maxWidth: '90%',
  },
  Description: {
    color: '#3F3F3F',
    fontSize: 18,
    marginBottom: 30,
  },
});
