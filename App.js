import React from 'react';
import { View, StyleSheet } from 'react-native';
import Leaderboard from './Leaderboard';
import ContactUs from './Contact';
import Games from './Games';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Leaderboard /> */}
      <ContactUs />
      {/* <Games /> */}
    </View>
  );
};

export default App;
