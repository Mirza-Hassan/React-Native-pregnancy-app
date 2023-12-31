import React, { useState } from 'react';
import { View, ImageBackground, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as colors from './colors';
import { NavigationProp } from '@react-navigation/native';

type SignInScreenProps = {
  navigation: NavigationProp<any>;
};

const SignInScreen: React.FC<SignInScreenProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isButtonEnabled = email.length > 0 && password.length > 0;

  const handleSignIn = () => {
    if (isButtonEnabled) {
      navigation.navigate('SuccessScreen');
    } else {
      // Handle validation errors
    }
  };

  return (
    <ImageBackground
      source={require('../images/authentication-background-image.jpg')}
      style={styles.container}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome back!</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="example@gmail.com"
            onChangeText={(text) => setEmail(text)}
            placeholderTextColor={colors.LIGHT_GREY}
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter a Password"
            secureTextEntry
            onChangeText={(text) => setPassword(text)}
            placeholderTextColor={colors.LIGHT_GREY}
            underlineColorAndroid="transparent"
          />
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={styles.forgotPasswordButton}
        >
          <Text style={styles.forgotPasswordText}>Have you forgotten your password?*</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isButtonEnabled ? colors.PALE_TEAL : colors.LIGHT_GREY }]}
          onPress={handleSignIn}
          disabled={!isButtonEnabled}
        >
          <Text style={styles.buttonText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.LIGHT_GREY,
    marginBottom: 20,
  },
  inputContainer: {
    width: 300,
    marginTop: 10,
  },
  input: {
    height: 40,
    marginTop: 10,
    paddingLeft: 10,
    color: colors.LIGHT_GREY,
    borderBottomWidth: 1,
    borderBottomColor: colors.LIGHT_GREY,
  },
  forgotPasswordButton: {
    marginTop: 10,
  },
  forgotPasswordText: {
    color: colors.LIGHT_GREY,
  },
  button: {
    backgroundColor: colors.GREYISH_BROWN,
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SignInScreen;
