import React, {useState, useEffect, Fragment} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Switch,
  Modal,
  TouchableOpacity,
} from 'react-native';
import FormContainer from '../../../components/FormContainer';
import CheckBox from 'react-native-check-box';
import Icon from 'react-native-vector-icons/FontAwesome';
import Pdf from 'react-native-pdf';
import {INSTITUTION_ID} from '../../../../../config/Institution-metadata';

import API from '../../../../../config/Axios';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

const enumValue = name => Object.freeze({toString: () => name});

const AREAS_DE_INTERESSE = Object.freeze({
  RESPONSABILIDADE_SOCIAL: enumValue('RESPONSABILIDADE_SOCIAL'),
  INOVACAO: enumValue('INOVACAO'),
  INTERESSE_SOCIAL: enumValue('INTERESSE_SOCIAL'),
  INFRAESTRUTURA: enumValue('INFRAESTRUTURA'),
  JURIDICO: enumValue('JURIDICO'),
  INDUSTRIA_IMOBILIARIA: enumValue('INDUSTRIA_IMOBILIARIA'),
  SUSTENTABILIDADE: enumValue('SUSTENTABILIDADE'),
  RELACOES_TRABALHISTAS: enumValue('RELACOES_TRABALHISTAS'),
  OBRAS_INDUSTRIAIS: enumValue('OBRAS_INDUSTRIAIS'),
  SERVICOS_CBIC: enumValue('SERVICOS_CBIC'),
});

export default function SignUp({navigation}) {
  const [termo, setTermo] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [user, setUser] = useState();
  const [acceptTerm, setAcceptTerm] = useState(false);

  const [areasInteresse, setAreasInteresse] = useState({
    [AREAS_DE_INTERESSE.RESPONSABILIDADE_SOCIAL]: false,
    [AREAS_DE_INTERESSE.INOVACAO]: false,
    [AREAS_DE_INTERESSE.INTERESSE_SOCIAL]: false,
    [AREAS_DE_INTERESSE.INFRAESTRUTURA]: false,
    [AREAS_DE_INTERESSE.JURIDICO]: false,
    [AREAS_DE_INTERESSE.INDUSTRIA_IMOBILIARIA]: false,
    [AREAS_DE_INTERESSE.SUSTENTABILIDADE]: false,
    [AREAS_DE_INTERESSE.RELACOES_TRABALHISTAS]: false,
    [AREAS_DE_INTERESSE.OBRAS_INDUSTRIAIS]: false,
    [AREAS_DE_INTERESSE.SERVICOS_CBIC]: false,
  });

  const [desabilitado, setDesabilitado] = useState(false);

  useEffect(() => {
    const {state} = navigation;
    setUser(state.params.user);

    API.get(`/termos/${INSTITUTION_ID}/APP`).then(res => {
      setTermo(res.data);
    });
  }, [navigation]);

  function toggleAcceptTerm() {
    setAcceptTerm(!acceptTerm);
  }

  function onChangeAreaInteresseHandler(area) {
    const currentAreas = {...areasInteresse};
    currentAreas[area] = !currentAreas[area];

    setAreasInteresse(currentAreas);
  }

  function getSelectedAreasInteresse() {
    const allAreasInteresse = {...areasInteresse};
    const confirmedAreas = [];

    for (let key in allAreasInteresse) {
      if (allAreasInteresse[key]) {
        confirmedAreas.push(key);
      }
    }
    return confirmedAreas;
  }

  function cadastrar() {
    const selectedAreasInteresse = getSelectedAreasInteresse();
    if (selectedAreasInteresse.length === 0) {
      return Alert.alert('Selecione uma ou mais áreas de interesse');
    }

    if (desabilitado) {
      return;
    }

    if (!acceptTerm) {
      return Alert.alert(
        'É necessário aceitar os termos',
        'Leia e aceite os termos para finalizar seu cadastro.',
      );
    }

    setDesabilitado(true);
    API.post('/users', {
      id_instituicao: INSTITUTION_ID,
      name: user.name,
      email: user.email,
      password: user.password,
      phone: user.phone,
      cpf: user.cpf,
      cep: user.cep,
      areas_de_interesse: selectedAreasInteresse,
      tipo_profissional: user.tipoProfissional,
    })
      .then(() => {
        setDesabilitado(false);
        Alert.alert('Cadastro bem sucedido!', 'Por favor faça o login', [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login'),
          },
        ]);
      })
      .catch(e => {
        Alert.alert('Ocorreu um erro', `${e.response.data.error}`, [
          {
            text: 'OK',
            onPress: () => setDesabilitado(false),
          },
        ]);
      });
  }

  function goBack() {
    navigation.goBack();
  }

  let pdfUri;
  if (termo) {
    pdfUri = `${API.defaults.baseURL}/files/${termo.filename}`;
  }

  return (
    <Fragment>
      <Modal animationType="slide" transparent={false} visible={modalIsOpen}>
        <Pdf source={{uri: pdfUri}} style={styles.Pdf} />
        <TouchableOpacity
          style={styles.closeModalIcon}
          onPress={() => setModalIsOpen(false)}>
          <View>
            <Icon name="long-arrow-left" size={22} />
          </View>
        </TouchableOpacity>
      </Modal>
      <FormContainer step="3" continue={cadastrar} goBack={goBack}>
        <View style={styles.Container}>
          <Text style={styles.Heading}>Selecione as áreas de interesse</Text>
          <View style={styles.SwitchGroup}>
            <Switch
              trackColor={{false: '#767577', true: '#5285a0'}}
              thumbColor={true ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                onChangeAreaInteresseHandler(
                  AREAS_DE_INTERESSE.RESPONSABILIDADE_SOCIAL,
                )
              }
              value={areasInteresse.RESPONSABILIDADE_SOCIAL}
            />
            <Text style={styles.SwitchText}>Responsabilidade Social</Text>
          </View>
          <View style={styles.SwitchGroup}>
            <Switch
              trackColor={{false: '#767577', true: '#5285a0'}}
              thumbColor={true ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                onChangeAreaInteresseHandler(AREAS_DE_INTERESSE.INOVACAO)
              }
              value={areasInteresse.INOVACAO}
            />
            <Text style={styles.SwitchText}>Inovação</Text>
          </View>
          <View style={styles.SwitchGroup}>
            <Switch
              trackColor={{false: '#767577', true: '#5285a0'}}
              thumbColor={true ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                onChangeAreaInteresseHandler(
                  AREAS_DE_INTERESSE.INTERESSE_SOCIAL,
                )
              }
              value={areasInteresse.INTERESSE_SOCIAL}
            />
            <Text style={styles.SwitchText}>
              Habilitação de interesse Social
            </Text>
          </View>
          <View style={styles.SwitchGroup}>
            <Switch
              trackColor={{false: '#767577', true: '#5285a0'}}
              thumbColor={true ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                onChangeAreaInteresseHandler(AREAS_DE_INTERESSE.INFRAESTRUTURA)
              }
              value={areasInteresse.INFRAESTRUTURA}
            />
            <Text style={styles.SwitchText}>Infraestrutura</Text>
          </View>
          <View style={styles.SwitchGroup}>
            <Switch
              trackColor={{false: '#767577', true: '#5285a0'}}
              thumbColor={true ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                onChangeAreaInteresseHandler(AREAS_DE_INTERESSE.JURIDICO)
              }
              value={areasInteresse.JURIDICO}
            />
            <Text style={styles.SwitchText}>Jurídico</Text>
          </View>
          <View style={styles.SwitchGroup}>
            <Switch
              trackColor={{false: '#767577', true: '#5285a0'}}
              thumbColor={true ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                onChangeAreaInteresseHandler(
                  AREAS_DE_INTERESSE.INDUSTRIA_IMOBILIARIA,
                )
              }
              value={areasInteresse.INDUSTRIA_IMOBILIARIA}
            />
            <Text style={styles.SwitchText}>Indústria Imobliária</Text>
          </View>
          <View style={styles.SwitchGroup}>
            <Switch
              trackColor={{false: '#767577', true: '#5285a0'}}
              thumbColor={true ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                onChangeAreaInteresseHandler(
                  AREAS_DE_INTERESSE.SUSTENTABILIDADE,
                )
              }
              value={areasInteresse.SUSTENTABILIDADE}
            />
            <Text style={styles.SwitchText}>Sustentabilidade</Text>
          </View>
          <View style={styles.SwitchGroup}>
            <Switch
              trackColor={{false: '#767577', true: '#5285a0'}}
              thumbColor={true ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                onChangeAreaInteresseHandler(
                  AREAS_DE_INTERESSE.RELACOES_TRABALHISTAS,
                )
              }
              value={areasInteresse.RELACOES_TRABALHISTAS}
            />
            <Text style={styles.SwitchText}>Relações Trabalhistas</Text>
          </View>
          <View style={styles.SwitchGroup}>
            <Switch
              trackColor={{false: '#767577', true: '#5285a0'}}
              thumbColor={true ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                onChangeAreaInteresseHandler(
                  AREAS_DE_INTERESSE.OBRAS_INDUSTRIAIS,
                )
              }
              value={areasInteresse.OBRAS_INDUSTRIAIS}
            />
            <Text style={styles.SwitchText}>Obras Industriais</Text>
          </View>
          <View style={styles.SwitchGroup}>
            <Switch
              trackColor={{false: '#767577', true: '#5285a0'}}
              thumbColor={true ? '#fff' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() =>
                onChangeAreaInteresseHandler(AREAS_DE_INTERESSE.SERVICOS_CBIC)
              }
              value={areasInteresse.SERVICOS_CBIC}
            />
            <Text style={styles.SwitchText}>Serviços CBIC</Text>
          </View>
        </View>
        <View style={styles.CheckBoxHolder}>
          <CheckBox
            isChecked={acceptTerm}
            style={styles.CheckBox}
            onClick={toggleAcceptTerm}
            checkBoxColor="#246bb3"
          />
          <Text onPress={toggleAcceptTerm}>Li e concordo com os </Text>
          <Text style={styles.TermsButton} onPress={() => setModalIsOpen(true)}>
            Termos de Uso
          </Text>
        </View>
      </FormContainer>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  Pdf: {
    flex: 1,
  },
  closeModalIcon: {
    position: 'absolute',
    top: '50%',
    left: '5%',
    zIndex: 1000,
    padding: 5,
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: 3,
  },
  Container: {
    width: '90%',
    alignSelf: 'center',
  },
  SwitchGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  SwitchText: {
    marginLeft: 10,
    color: '#999',
  },
  Heading: {
    alignSelf: 'center',
    color: '#5285a0',
    marginBottom: 2,
    fontSize: 15,
  },
  CheckBoxHolder: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    marginTop: hp('1%'),
    alignSelf: 'center',
  },
  CheckBox: {
    padding: 10,
    paddingRight: 5,
  },
  TermsButton: {
    color: '#246bb3',
  },
});
