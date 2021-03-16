import React, {useEffect, useState} from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Linking,
  Platform,
  ActivityIndicator,
  Image,
} from 'react-native';

import MapView from 'react-native-maps';
import {Marker} from 'react-native-maps';
import RNLocation from 'react-native-location';
import Logo from '../../../../assets/logocbic.png';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const CBIC_LOCALE = {
  latitude: -15.7902162,
  longitude: -47.879469,
};

export default function ComoChegar() {
  const [localizacao, setLocalizacao] = useState({});
  const [initialRegion, setInitialRegion] = useState(null);

  useEffect(() => {
    RNLocation.configure({
      distanceFilter: 5.0,
    });
    RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse', // or 'fine'
        rationale: {
          title: 'Nós precisamos da sua localização',
          message:
            'Nós usamos sua localização para visualizar onde você está no mapa',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      },
    }).then(granted => {
      if (granted) {
        const unsubscribe = RNLocation.subscribeToLocationUpdates(locations => {
          setLocalizacao({
            latitude: locations[0].latitude,
            longitude: locations[0].longitude,
          });
          let minX, maxX, minY, maxY;
          minX = Math.min(locations[0].latitude, CBIC_LOCALE.latitude);
          maxX = Math.max(locations[0].latitude, CBIC_LOCALE.latitude);
          minY = Math.min(locations[0].longitude, CBIC_LOCALE.longitude);
          maxY = Math.max(locations[0].longitude, CBIC_LOCALE.longitude);

          const deltaX = maxX - minX;
          const deltaY = maxY - minY;

          setInitialRegion({
            latitude: (locations[0].latitude + CBIC_LOCALE.latitude) / 2,
            longitude: (locations[0].longitude + CBIC_LOCALE.longitude) / 2,
            longitudeDelta: deltaX * 2.5,
            latitudeDelta: deltaY * 2.5,
          });
        });
        // unsubscribe()
      }
    });
  }, []);

  function launchMaps() {
    const scheme = Platform.select({ios: 'maps:0,0?q=', android: 'geo:0,0?q='});
    const latLng = `${-15.7902162},${-47.879469}`;
    const label = 'Custom Label';
    const url = Platform.select({
      ios: `${scheme}${label}@${latLng}`,
      android: `${scheme}${latLng}(${label})`,
    });

    Linking.openURL(url);
  }

  return (
    <View style={styles.Container}>
      {initialRegion ? (
        <MapView
          initialRegion={{
            ...initialRegion,
          }}
          style={styles.MapView}>
          <Marker
            coordinate={CBIC_LOCALE}
            title="CBIC"
            style={{justifyContent: 'center', alignItems: 'center'}}>
            {/* <Image source={Logo} style={{ width: wp('20%'), height: wp('10%'), borderColor: '#FFF', borderWidth: wp('1%'), borderRadius: wp('2%') }} /> */}
            <Text
              style={{
                fontSize: wp('5%'),
                fontWeight: 'bold',
                color: '#E6333F',
                fontStyle: 'italic',
              }}>
              CBIC
            </Text>
            <MaterialIcon name="map-marker" size={wp('10%')} color="#E6333F" />
          </Marker>
          {localizacao && localizacao.latitude && localizacao.longitude ? (
            <Marker coordinate={localizacao} title="Voce" />
          ) : null}
        </MapView>
      ) : null}
      <TouchableOpacity style={styles.Button} onPress={launchMaps}>
        <Text style={styles.TextButton}>Abrir no Maps</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#5C859B',
  },
  MapView: {
    width: '100%',
    height: '50%',
    marginBottom: hp('5%'),
  },
  Button: {
    paddingHorizontal: hp('9%'),
    marginBottom: hp('2%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: hp('1.5%'),
    paddingVertical: hp('1.7%'),
    backgroundColor: '#fff',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 2,
  },
  TextButton: {
    fontWeight: '300',
    letterSpacing: 1,
    fontSize: wp('4%'),
    color: '#5285a0',
  },
});
