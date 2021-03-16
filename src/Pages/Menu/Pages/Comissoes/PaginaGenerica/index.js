import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';

// import { Container } from './styles';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

function PaginaGenerica(props) {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [imagem, setImagem] = useState();

  useEffect(() => {
    const novoTitulo = props.navigation.getParam('titulo');
    const novoTexto = props.navigation.getParam('texto');
    const novaImagem = props.navigation.getParam('imagem');
    setTitle(novoTitulo);
    setText(novoTexto);
    setImagem(novaImagem);
  }, [props.navigation]);

  return (
    <View style={styles.Container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.Conteudo}>
          {title ? <Text style={styles.Title}>{title}</Text> : <View />}
          {text ? <Text style={styles.Text}>{text}</Text> : <View />}
          {imagem ? (
            <Image
              source={imagem}
              style={{width: wp('90%'), height: hp('30%')}}
            />
          ) : (
            <View />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: wp('5%'),
  },
  Title: {
    fontSize: wp('6%'),
    color: '#000',
    marginBottom: hp('5%'),
  },
  Text: {
    fontSize: wp('4%'),
    color: '#000',
    textAlign: 'auto',
  },
  Conteudo: {
    paddingVertical: hp('5%'),
  },
});

PaginaGenerica.navigationOptions = props => ({
  title: props.navigation.getParam('title')
    ? props.navigation.getParam('title')
    : 'Comissoes',
});

export default PaginaGenerica;
