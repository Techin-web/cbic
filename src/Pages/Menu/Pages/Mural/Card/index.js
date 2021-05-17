import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import MuralMedia from '../MuralDetails/MuralMedia';

export default function Card(props) {
  const event = props.event;
  const date = new Date(`${event.updatedAt}`);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  
  const newDate = `${day}/${month}/${year}`;
  
  return (
   event.mimetype.includes('image/') ?
      <TouchableOpacity
        onPress={() => props.navigation.navigate('MuralDetails', {event})}>
        <View style={styles.Card}>
          <View style={styles.CardContent}>
            <View style={styles.ImageContainer}>
              { event.mimetype === 'image/http' ? 
                <Image source={{uri: event.filename}} style={styles.Image} />
              : 
                <MuralMedia file={event}/>
              }
            </View>
            <View style={styles.CardTextContainer}>
              <Text numberOfLines={3} style={styles.Title}>{event.eventname}</Text>
              <View style={styles.DateContainer}>
                <Icon name="calendar" style={styles.IconDate} />
                <Text style={styles.Date}>{newDate}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    :  
      <TouchableOpacity
        onPress={() => props.navigation.navigate('MuralDetails', {event})}>
        <View style={styles.Card}>
          <View style={styles.CardContent}>
            <View style={styles.IconContainer}>
              {event.mimetype.includes('video/') ? 
                <Icon name="play-circle" style={styles.Icon}/>
              :
                <Icon name="file-pdf-o" style={styles.Icon}/>
              }
            </View>
            <View style={styles.CardTextContainer}>
              <Text numberOfLines={3} style={styles.Title}>{event.eventname}</Text>
              <View style={styles.DateContainer}>
                <Icon name="calendar" style={styles.IconDate} />
                <Text style={styles.Date}>{newDate}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Card: {
    backgroundColor: '#fff',
    marginBottom: hp('2%'),
    height: 100,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  CardContent: {
    flexDirection: 'row',
    height: '100%',
    width: '75%'
  },
  CardTextContainer: {
    padding: 10,
    width: '100%'
  },
  Title: {
    color: '#000',
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
  },
  DateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 'auto'
  },
  IconContainer: {
    height: '100%',
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  IconDate: {
    marginRight: 5,
  },
  Icon: {
    fontSize: 60, 
    color: '#fff'
  },
  Image: {
    height: '100%',
    width: null,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  ImageContainer: {
    width: 100,
  },
});