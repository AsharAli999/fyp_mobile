import React from 'react';
import { View, StyleSheet } from 'react-native';
import Leaderboard from './Leaderboard';
import ContactUs from './Contact';
import Games from './Games';
import SignupScreen from './SignupScreen';
import LoginScreen from './LoginScreen';
import MinesweeperGame from './MinesweeperGame';


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const App = () => {
  return (
    <View style={styles.container}>
      {/* <Leaderboard /> */}
      {/* <ContactUs /> */}
      {/* <Games /> */}
      {/* <SignupScreen /> */}
      {/* <LoginScreen /> */}
      <MinesweeperGame />

    </View>
  );
};

export default App;
