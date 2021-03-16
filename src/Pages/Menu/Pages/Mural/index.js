import React, {useState, useEffect} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Card from './Card';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import API from '../../../../config/Axios';

export default function Mural({navigation}) {
  const [muralEvents, setMuralEvents] = useState([]);
  useEffect(() => {
    API.get('/murals')
      .then(res => setMuralEvents(res.data))
      .catch(err => {
        console.log(err); 
      });
  }, []);

  const muralCards = muralEvents.map(event => {
    return <Card key={event.id} event={event} navigation={navigation} />;
  });

  return (
    <View style={styles.Container}>
      <ScrollView>{muralCards}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    padding: wp('2%'),
    backgroundColor: '#5C859B',
    flex: 1,
  },
});
