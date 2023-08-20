import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Animated, StyleSheet } from 'react-native';

import Slider from './Slider';

const Games = () => {
  const [isVisible, setIsVisible] = useState(false);

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  const opacity = scrollY.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  return (
    <ScrollView
      style={styles.container}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
      scrollEventThrottle={16}
    >
      <View style={styles.main}>
        <View style={[styles.gameSection, styles.bgBase200, styles.mb20]}>
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd9MQn8MHtrJi9fnXOPMZTLDmAFF_jciynvtYiy9gstMLbS0k3YDEiuM3A7y1EkfSJpa8&usqp=CAU' }}
            style={styles.cardImage}
          />
          <View style={styles.mt8}>
            <Text style={[styles.text3xl, styles.fontBold]}>A New Home for Game Lovers</Text>
            <View>
              <View style={styles.stepsVertical}>
                <Text style={[styles.stepSuccess, styles.stepContent]}>Ludo is a board game played with 2-4 players.</Text>
                <Text style={[styles.stepSuccess, styles.stepContent]}>Players race their four tokens from start.</Text>
                <Text style={[styles.stepSuccess, styles.stepContent]}>Tokens must make a full circuit of the board to reach the finish line.</Text>
                <Text style={[styles.stepSuccess, styles.stepContent]}>First player to get all their tokens to the finish line wins.</Text>
                <Text style={[styles.stepSuccess, styles.stepContent]}>Ludo is a simple yet entertaining game for all ages.</Text>
              </View>
              <TouchableOpacity style={[styles.ctaBtn, styles.successBtn]}>
                <Text style={styles.ctaBtnText}>Play Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={[styles.gameSection, styles.bgBase200, styles.mt8]}>

          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcboV2jlR2l6Oyp-yWi9cU1CijLp2l51ZnZz3giP5ZwyCrWJ9CqAdlMpg_c3L_0H9TD_k&usqp=CAU' }}
            style={styles.cardImage}
          />
          <View>
            <Text style={[styles.text3xl, styles.fontBold]}>Box Office News!</Text>
            <View style={styles.stepsVertical}>
              <Text style={[styles.stepSuccess, styles.stepContent]}>Ludo is a board game played with 2-4 players.</Text>
              <Text style={[styles.stepSuccess, styles.stepContent]}>Players race their four tokens from start.</Text>
              <Text style={[styles.stepSuccess, styles.stepContent]}>Tokens must make a full circuit of the board to reach the finish line.</Text>
              <Text style={[styles.stepSuccess, styles.stepContent]}>First player to get all their tokens to the finish line wins.</Text>
              <Text style={[styles.stepSuccess, styles.stepContent]}>Ludo is a simple yet entertaining game for all ages.</Text>
            </View>
            <TouchableOpacity style={[styles.ctaBtn, styles.successBtn]}>
              <Text style={styles.ctaBtnText}>Play Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={[styles.gameSection, styles.bgBase200, styles.mt20, styles.mb20]}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1-W8mev5tznMwZkfJ4IlrGOexUDwHEhjomw&usqp=CAU' }}
          style={styles.cardImage}
        />
        <View style={styles.mt8}>
          <Text style={[styles.text3xl, styles.fontBold]}>A New Home for Game Lovers</Text>
          <View style={styles.stepsVertical}>
            <Text style={[styles.stepSuccess, styles.stepContent]}>Ludo is a board game played with 2-4 players.</Text>
            <Text style={[styles.stepSuccess, styles.stepContent]}>Players race their four tokens from start.</Text>
            <Text style={[styles.stepSuccess, styles.stepContent]}>Tokens must make a full circuit of the board to reach the finish line.</Text>
            <Text style={[styles.stepSuccess, styles.stepContent]}>First player to get all their tokens to the finish line wins.</Text>
            <Text style={[styles.stepSuccess, styles.stepContent]}>Ludo is a simple yet entertaining game for all ages.</Text>
          </View>
          <TouchableOpacity style={[styles.ctaBtn, styles.successBtn]}>
            <Text style={styles.ctaBtnText}>Play Now</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#101010',
  },
  main: {
    paddingHorizontal: 20,
  },
  gameSection: {
    borderRadius: 10,
    padding: 20,
  },
  bgBase200: {
    backgroundColor: '#1a1a1a',
  },
  mb20: {
    marginBottom: 20,
  },
  mt8: {
    marginTop: 8,
  },
  mt20: {
    marginTop: 20,
  },
  flexCol: {
    flexDirection: 'column',
  },
  lgFlexRow: {
    flexDirection: 'row',
  },
  lgFlexRowReverse: {
    flexDirection: 'row-reverse',
  },
  transitionOpacity: {
    transitionProperty: 'opacity',
    duration: 1000,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  text3xl: {
    fontSize: 24,
    color: 'white', // Add text color to make it visible
  },
  fontBold: {
    fontWeight: 'bold',
  },
  stepsVertical: {
    borderColor: '#10b981',
    borderTopWidth: 1, // Add border width to make it visible
    paddingTop: 10, // Add padding to make it visible
  },
  stepSuccess: {
    color: '#10b981',
  },
  stepContent: {
    color: 'white', // Add text color to make it visible
    marginBottom: 5,
  },
  ctaBtn: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginTop: 5,
  },
  successBtn: {
    backgroundColor: '#10b981',
  },
  ctaBtnText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});

export default Games;
