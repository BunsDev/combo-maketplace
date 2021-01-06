import React, { useState } from 'react'
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import {
  AppFormField,
  SubmitButton,
  AppForm
} from '../components/forms';

function LoginScreen() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const validateSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')  
  });

  return (
    <Screen style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../assets/logo-red.png')}
      />
      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={values => console.log(values)}
        validationSchema={validateSchema}
      >
        <AppFormField 
          autoCapitalize="none"
          autoCorrect={false}
          icon='email'
          keyboardType="email-address"
          name='email'
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField 
          autoCapitalize="none"
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="login"/>
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },  
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20
  }
})

export default LoginScreen
