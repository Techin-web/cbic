import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Button from '../Button';

import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function FormContainer(props) {
  return (
    <ImageBackground
      resizeMode="cover"
      source={require('../../../../assets/background.jpg')}
      style={styles.ImageBackground}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={{flex: 1}}>
        <View style={styles.Container}>
          <ScrollView contentContainerStyle={styles.ScrollView}>
            <View style={styles.HeadingContainer}>
              <Text style={styles.PrimaryHeading}>Cadastrar</Text>
              <View style={styles.HeadingDivider} />
            </View>
            <View style={styles.Form}>
              <View style={styles.FormHeadingContainer}>
                <Text style={styles.FormHeading}>Passo {props.step} de 3</Text>
              </View>
              <View style={styles.FormMainContent}>{props.children}</View>
              <View style={styles.ButtonHolder}>
                <Button
                  color="green"
                  title="Continuar"
                  small
                  clicked={props.continue}
                />
                <Button
                  color="white"
                  title="Voltar"
                  small
                  clicked={props.goBack}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  ImageBackground: {
    width: '100%',
    height: '100%',
  },
  Container: {
    flex: 1,
    backgroundColor: 'rgba(81, 131, 158, .5)',
  },
  ScrollView: {
    paddingTop: hp('7%'),
    paddingBottom: hp('4%'),
  },
  HeadingContainer: {
    marginBottom: hp('5%'),
    alignSelf: 'center',
  },
  PrimaryHeading: {
    color: '#fff',
    textTransform: 'uppercase',
    fontSize: hp('2.5%'),
    fontWeight: '300',
    letterSpacing: 1,
    marginBottom: 12,
  },
  HeadingDivider: {
    borderBottomColor: '#fff',
    borderBottomWidth: 3,
    marginLeft: 15,
    marginRight: 15,
  },
  Form: {
    alignSelf: 'center',
    paddingVertical: hp('3%'),
    borderRadius: 10,
    width: '85%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  FormHeadingContainer: {
    alignSelf: 'center',
    marginBottom: hp('3%'),
  },
  FormHeading: {
    fontSize: hp('2.2%'),
    textTransform: 'uppercase',
    fontWeight: 'bold',
    color: '#5285a0',
  },
  FormMainContent: {
    minHeight: hp('35%'),
    marginBottom: hp('3%'),
  },
  ButtonHolder: {
    width: '70%',
    alignSelf: 'center',
  },
});
