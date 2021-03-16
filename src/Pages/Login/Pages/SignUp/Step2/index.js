import React, {useState, useEffect} from 'react';
import {StyleSheet, Picker, Text} from 'react-native';
import FormContainer from '../../../components/FormContainer';

const enumValue = name => Object.freeze({toString: () => name});

const TIPO_PROFISSIONAL = Object.freeze({
  CONSTRUCAO_CIVIL: enumValue('CONSTRUCAO_CIVIL'),
  CADEIA_PRODUTIVA: enumValue('CADEIA_PRODUTIVA'),
  SETOR_CONSTRUCAO: enumValue('SETOR_CONSTRUCAO'),
  PROJETISTA: enumValue('PROJETISTA'),
  ACADEMICO: enumValue('ACADEMICO'),
  IMPRENSA: enumValue('IMPRENSA'),
});

export default function SignUp({navigation}) {
  const [selectedPickerValue, setSelectedPickerValue] = useState(
    TIPO_PROFISSIONAL.CONSTRUCAO_CIVIL,
  );

  function goBack() {
    navigation.goBack();
  }

  function navigateToSignUpStep3() {
    const {user} = navigation.state.params;
    const userData = {
      ...user,
      tipoProfissional: selectedPickerValue.toString(),
    };

    navigation.navigate('SignUpStep3', {user: userData});
  }

  return (
    <FormContainer step="2" continue={navigateToSignUpStep3} goBack={goBack}>
      <Text style={styles.Heading}>Tipo de Profissional</Text>
      <Picker
        selectedValue={selectedPickerValue}
        style={styles.Picker}
        onValueChange={(itemValue, itemIndex) => {
          setSelectedPickerValue(itemValue);
        }}>
        <Picker.Item
          label="Empresário da Construção Civil"
          value={TIPO_PROFISSIONAL.CONSTRUCAO_CIVIL.toString()}
        />
        <Picker.Item
          label="Cadeia Produtiva"
          value={TIPO_PROFISSIONAL.CADEIA_PRODUTIVA.toString()}
        />
        <Picker.Item
          label="Profissional do Setor da Construção"
          value={TIPO_PROFISSIONAL.SETOR_CONSTRUCAO.toString()}
        />
        <Picker.Item
          label="Projetista"
          value={TIPO_PROFISSIONAL.PROJETISTA.toString()}
        />
        <Picker.Item
          label="Acadêmico"
          value={TIPO_PROFISSIONAL.ACADEMICO.toString()}
        />
        <Picker.Item
          label="Imprensa"
          value={TIPO_PROFISSIONAL.IMPRENSA.toString()}
        />
      </Picker>
    </FormContainer>
  );
}

const styles = StyleSheet.create({
  Picker: {
    width: '95%',
    alignSelf: 'center',
  },
  Heading: {
    alignSelf: 'center',
    color: '#5285a0',
    fontSize: 15,
  },
});
