import React, { memo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { API_URI } from 'react-native-dotenv';
import { Snackbar } from 'react-native-paper';

import Background from '../components/Background';
import Button from '../components/Button';
import Header from '../components/Header';
import Logo from '../components/Logo';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import {
  emailValidator,
  emptyValidator,
  passwordValidator
} from '../core/utils';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const RegisterScreen = ({ navigation }: Props) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const [mobile, setMobile] = useState({ value: '', error: '' });
  const [errors, setErrors] = useState([]);

  const _onSignUpPressed = () => {
    const nameError = emptyValidator(name.value, 'Name');
    const mobileError = emptyValidator(mobile.value, 'Mobile');
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError || mobileError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setMobile({ ...mobile, error: mobileError });
      return;
    }

    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        password: password.value
      })
    };

    fetch(`${API_URI}users/register`, options)
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res);
        }
        return res.json();
      })
      .catch(async res => {
        const error = await res.json().then(text => text);
        return Promise.reject(error);
      })
      .then(() => {
        navigation.navigate('LoginScreen');
      })
      .catch(err => {
        if (typeof err.errors !== 'undefined') {
          setErrors(err.errors);
        } else {
          setErrors([{ message: 'API server not accessible' }]);
        }
      });
  };

  const styles = StyleSheet.create({
    label: {
      color: theme.colors.secondary
    },
    button: {
      marginTop: 24
    },
    row: {
      flexDirection: 'row',
      marginTop: 4
    },
    link: {
      fontWeight: 'bold',
      color: theme.colors.primary
    }
  });

  return (
    <ScrollView>
    <Background>
      <Logo />

      <Header>Create Seller Account</Header>

      <TextInput
        label="Seller Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={text => setName({ value: text, error: '' })}
        error={!!name.error}
        errorText={name.error}
      />

      <TextInput
        label="Description"
        returnKeyType="next"
        multiline={true}
        numberOfLines={4}
      />

      <TextInput
        label="Place"
        returnKeyType="next"
      />

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={text => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Mobile"
        returnKeyType="next"
        value={mobile.value}
        onChangeText={text => setMobile({ value: text, error: '' })}
        error={!!mobile.error}
        errorText={mobile.error}
        autoCapitalize="none"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={text => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Sign Up
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>

      {errors.length > 0 ? (
        <Snackbar
          visible={errors.length > 0}
          onDismiss={() => {
            setErrors([]);
          }}
        >
          {errors[0].message ? errors[0].message : errors[0].msg}
        </Snackbar>
      ) : (
        <Text />
      )}
    </Background>
    </ScrollView>
  );
};

export default memo(RegisterScreen);
