import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn.pixabay.com/photo/2023/03/19/07/34/car-7862030__340.jpg' }}
        style={styles.logo}
      />
      <Text style={styles.title}>Register Your account</Text>
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Name" placeholderTextColor="#777" />
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#777" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#777" />
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={styles.signupBtnText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.orText}>OR</Text>
        <TouchableOpacity style={styles.googleBtn}>
          <Text style={styles.btnText}>Sign Up with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.metamaskBtn}>
          <Text style={styles.btnText}>Sign Up with Metamask</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101010',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  form: {
    width: '80%',
  },
  input: {
    backgroundColor: '#211c1c',
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  signupBtn: {
    backgroundColor: '#f9004d',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  signupBtnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  googleBtn: {
    backgroundColor: '#4285F4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  metamaskBtn: {
    backgroundColor: '#E2761B',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    borderRadius: 8,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignupScreen;
