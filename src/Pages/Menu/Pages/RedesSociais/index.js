import React from 'react';
import { View, Text, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';

// import { Container } from './styles';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import IconMaterial from 'react-native-vector-icons/dist/MaterialCommunityIcons';

export default function RedesSociais() {
    return (
        <View style={styles.Container}>
            <ScrollView>
                <View style={{ marginVertical: hp('5%'), justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: wp('10%'), color: '#000' }}>Redes sociais</Text>
                </View>
                <View style={styles.Conteudo}>
                    <View>

                        <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/cbicbrasil')}>
                            <View style={[styles.Card, { backgroundColor: '#4267B2' }]}>
                                <IconMaterial name="facebook" size={wp('25%')} color="#FFF" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/cbic.brasil/')}>
                            <View style={[styles.Card, { backgroundColor: '#CC2D8A' }]}>
                                <IconMaterial name="instagram" size={wp('25%')} color="#FFF" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://twitter.com/cbicbrasil')}>
                            <View style={[styles.Card, { backgroundColor: '#1DA1F2' }]}>
                                <IconMaterial name="twitter" size={wp('25%')} color="#FFF" />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.youtube.com/user/cbicvideos')}>
                            <View style={[styles.Card, { backgroundColor: '#FF0000' }]}>
                                <IconMaterial name="youtube" size={wp('25%')} color="#FFF" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/company/cbicbrasil/')}>
                            <View style={[styles.Card, { backgroundColor: '#0077B5' }]}>
                                <IconMaterial name="linkedin" size={wp('25%')} color="#FFF" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Linking.openURL('https://www.flickr.com/photos/cbicfotos')}>
                            <View style={[styles.Card, { backgroundColor: '#000' }]}>
                                <IconMaterial name="flickr" size={wp('25%')} color="#FFF" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF'
    },
    Conteudo: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: wp('100%'),
        marginBottom: hp('5%')
    },
    Card: {
        // flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: hp('2%'),
        width: wp('25%'),
        height: wp('25%'),
        borderRadius: wp('5%'),
        // backgroundColor: '#ff3f3c',
        shadowColor: '#000',
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        elevation: 4,
    },
    Text: {
        fontSize: wp('6%'),
        color: '#FFF',
        textAlign: 'center'
    },
})