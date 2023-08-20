import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';

const Slider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.cardHeading}>Experience new dimension of gaming</Text>
        <View style={styles.imageContainer}>
          <Image source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/15/24/wrestler-149840__340.png' }} style={styles.cardImage} />
        </View>
        <Text style={styles.cardDesc}>NFTs - Play, earn, and own your game assets like never before!</Text>
        <View style={styles.btnBox}>
          <TouchableOpacity style={[styles.ctaBtn, styles.freeBtn]}>
            <Text style={styles.ctaBtnText}>Try it Free</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.ctaBtn, styles.demoBtn]}>
            <Text style={styles.ctaBtnText}>Get Demo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101010',
  },
  card: {
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: 20,
    width: '90%',
  },
  cardHeading: {
    fontSize: 24,
    color: '#ffffff',
    // fontFarmily : '',
    marginBottom: 10,
    marginTop: 50,
  },
  imageContainer: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  cardDesc: {
    color: '#c6c9d8bf',
    fontSize: 16,
    marginVertical: 20,
  },
  btnBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ctaBtn: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  freeBtn: {
    backgroundColor: '#26bb46',
  },
  demoBtn: {
    backgroundColor: 'transparent',
    borderColor: '#26bb46',
    borderWidth: 1,
  },
  ctaBtnText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});

export default Slider;
