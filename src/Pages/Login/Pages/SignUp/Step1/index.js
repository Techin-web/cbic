import React from 'react';
import {View, StyleSheet, Alert, Platform} from 'react-native';
import Input from '../../../components/Input';
import MaskInput from '../../../components/MaskInput';
import FormContainer from '../../../components/FormContainer';
import * as yup from 'yup';
import {Formik} from 'formik';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required('É necessário preencher o seu nome.')
    .min(3, 'Preencha seu nome completo.'),
  email: yup
    .string()
    .required('É necessário preencher o seu e-mail.')
    .email('Preencha um e-mail válido.'),
  cpf: yup
    .string()
    .required('É necessário preencher o seu CPF.')
    .min(14, 'Preencha um CPF válido.'),
  phone: yup
    .string()
    .required('É necessário preencher o seu telefone.')
    .min(14, 'Preencha um número válido de telefone.'),
  cep: yup
    .string()
    .required('É necessário preencher o seu CEP.')
    .min(10, 'Preencha um CEP válido.'),
  password: yup
    .string()
    .required('É necessário preencher a senha.')
    .min(6, 'A senha deve ter no mínimo 6 caracteres.'),
});

export default function SignUp({navigation}) {
  function navigateToSignIn() {
    navigation.navigate('SignIn');
  }

  function navigateToSignUpStep2(formData) {
    if (formData.password !== formData.confirmPassword) {
      return Alert.alert('Campos Obrigatórios', 'As senhas devem ser iguais.');
    }

    navigation.navigate('SignUpStep2', {user: formData});
  }

  function showFormikErrorAlert(errors) {
    const errorsKeyArray = Object.keys(errors);
    const firstError = errors[errorsKeyArray[0]];
    Alert.alert('Campos Obrigatórios', firstError);
  }

  return (
    <Formik
      validationSchema={formSchema}
      onSubmit={values => navigateToSignUpStep2(values)}
      initialErrors={{
        initialError: 'Todos os campos obrigatórios devem ser preenchidos.',
      }}
      initialValues={{
        name: '',
        email: '',
        cpf: '',
        phone: '',
        cep: '',
        password: '',
        confirmPassword: '',
      }}>
      {formikProps => (
        <FormContainer
          continue={
            Object.keys(formikProps.errors).length
              ? () => showFormikErrorAlert(formikProps.errors)
              : () => formikProps.submitForm()
          }
          goBack={navigateToSignIn}
          step="1">
          <View style={styles.InputHolder}>
            <Input
              placeholder="Nome Completo"
              textColor="green"
              smallMarginBottom
              smallText
              value={formikProps.values.name}
              onChangeText={formikProps.handleChange('name')}
            />
            <Input
              placeholder="Email"
              textColor="green"
              smallMarginBottom
              smallText
              value={formikProps.values.email}
              onChangeText={formikProps.handleChange('email')}
            />
            <MaskInput
              type={'cpf'}
              placeholder="CPF"
              textColor="green"
              smallMarginBottom
              smallText
              value={formikProps.values.cpf}
              onChangeText={formikProps.handleChange('cpf')}
            />
            <MaskInput
              type={'cel-phone'}
              options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) ',
              }}
              placeholder="Telefone"
              textColor="green"
              smallMarginBottom
              smallText
              value={formikProps.values.phone}
              onChangeText={formikProps.handleChange('phone')}
            />
            <MaskInput
              type={'custom'}
              options={{mask: '99.999-999'}}
              placeholder="CEP"
              textColor="green"
              smallMarginBottom
              smallText
              value={formikProps.values.cep}
              onChangeText={formikProps.handleChange('cep')}
            />
            <Input
              placeholder="Senha"
              secureTextEntry
              textColor="green"
              smallMarginBottom
              smallText
              value={formikProps.values.password}
              onChangeText={formikProps.handleChange('password')}
            />
            <Input
              placeholder="Confirmar Senha"
              secureTextEntry
              textColor="green"
              smallMarginBottom
              smallText
              value={formikProps.values.confirmPassword}
              onChangeText={formikProps.handleChange('confirmPassword')}
            />
          </View>
        </FormContainer>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  InputHolder: {
    width: '80%',
    alignSelf: 'center',
  },
});
