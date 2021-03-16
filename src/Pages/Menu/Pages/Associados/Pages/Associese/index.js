import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function Associese() {
    return (
        <View style={styles.Container}>
            <View style={{ marginTop: hp('20%'), marginBottom: hp('10%'), justifyContent: 'space-between', alignItems: 'center' }}>
                <FontAwesome name="group" size={wp('30%')} color="#5285a0" />
                <Text style={{ fontSize: wp('8%'), color: '#5285a0', fontWeight: 'bold', marginTop: hp('2%') }}>ASSOCIE-SE À CBIC</Text>
            </View>
            <View style={styles.Conteudo}>
                <View style={{ height: hp('25%'), justifyContent: 'space-between', top: -wp('15%') }}>
                    <Text style={styles.Text}>A CBIC representa institucionalmente o setor da construção e promove a integração de sua  cadeia produtiva em âmbito nacional, contribuindo para o desenvolvimento do país. A entidade produz conhecimento qualificado, com vistas a oferecer ao setor o ferramental necessário para manter-se na dianteira do mercado. </Text>
                    <Text style={styles.Text}>Seja um associado da CBIC. </Text>
                    <Text style={styles.Text}>Encaminhe sua mensagem para:</Text>
                    <Text style={[styles.Text, { fontWeight: 'bold' }]}>presidencia@cbic.org.br</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
    },
    Conteudo: {
        justifyContent: 'space-evenly',
        borderTopLeftRadius: hp('4%'),
        borderTopRightRadius: hp('4%'),
        width: wp('100%'),
        height: hp('50%'),
        paddingHorizontal: wp('10%'),
        // flex: 1,
        backgroundColor: '#5285a0',
    },
    Text: {
        fontSize: wp('4%'),
        color: '#FFF',
        textAlign: 'left',
        alignSelf: 'flex-start',
    },
})
