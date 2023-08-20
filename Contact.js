import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';

const ContactUs = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contact}>
          <View style={styles.contactForm}>
            <Text style={styles.title}>Contact <Text style={styles.titleSpan}>Us</Text></Text>

            <View style={styles.form}>
              <TextInput style={styles.input} placeholder="Your Name" />
              <TextInput style={styles.input} placeholder="E-mail" />
              <TextInput style={styles.input} placeholder="Write a Subject" />
              <TextInput style={styles.textarea} placeholder="Your Message" multiline />
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contactImg}>
            <Image source={{ uri: 'https://cdn.pixabay.com/photo/2023/03/19/07/34/car-7862030__340.jpg' }} style={styles.img} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  contact: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  contactForm: {
    width: '100%',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    color: '#101010',
    marginTop: 50,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  titleSpan: {
    color: '#f9004d',
  },
  description: {
    color: '#101010',
    lineHeight: 20,
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  input: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f0f0f0',
    color: '#101010',
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 8,
  },
  textarea: {
    width: '100%',
    padding: 15,
    backgroundColor: '#f0f0f0',
    color: '#101010',
    fontSize: 16,
    marginBottom: 10,
    borderRadius: 8,
    height: 150,
    textAlignVertical: 'top',
  },
  btn: {
    backgroundColor: '#f9004d',
    fontSize: 16,
    fontWeight: '600',
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
  },
  contactImg: {
    width: '100%',
    alignItems: 'center',
  },
  img: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});

export default ContactUs;
