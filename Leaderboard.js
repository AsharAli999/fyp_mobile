import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

import { Feather } from '@expo/vector-icons';

function Leaderboard() {
  const [players, setPlayers] = useState([
    {
      id: 1,
      game: "Fortnite",
      player: "John",
      booster: true,
      profit: "$1000",
      uid: 123
    },
    {
      id: 2,
      game: "Minecraft",
      player: "Emily",
      booster: false,
      profit: "$500",
      uid: 456
    },
    {
      id: 3,
      game: "Valorant",
      player: "Tom",
      booster: true,
      profit: "$800",
      uid: 789
    },
    {
      id: 4,
      game: "Overwatch",
      player: "Lucy",
      booster: true,
      profit: "$1200",
      uid: 101112
    },
    {
      id: 5,
      game: "Call of Duty",
      player: "Max",
      booster: false,
      profit: "$600",
      uid: 131415
    },
    {
      id: 6,
      game: "Valorant",
      player: "Tom",
      booster: true,
      profit: "$800",
      uid: 789
    },
    {
      id: 7,
      game: "Overwatch",
      player: "Lucy",
      booster: true,
      profit: "$1200",
      uid: 101112
    },
    {
      id: 8,
      game: "Call of Duty",
      player: "Max",
      booster: false,
      profit: "$600",
      uid: 131415
    },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {players.map((player) => (
          <View key={player.id} style={styles.playerRow}>
            <View style={styles.leftSection}>
              <Text style={styles.cell}>{player.id}</Text>
            </View>
            <View style={styles.middleSection}>
              <Text style={styles.cell}>{player.game}</Text>
              <Text style={styles.cell}>{player.player}</Text>
            </View>
            <View style={styles.rightSection}>
              <Feather
                name={player.booster ? 'arrow-up' : 'arrow-down'}
                size={24}
                style={[styles.boosterIcon, player.booster ? styles.boosterUp : styles.boosterDown]}
              />
              <Text style={styles.cell}>{player.profit}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  playerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
  },
  leftSection: {
    alignItems: 'flex-start',
  },
  middleSection: {
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
  },
  rightSection: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    fontSize: 14,
    color: 'white',
  },
  boosterIcon: {
    fontSize: 24,
  },
  boosterUp: {
    color: '#00ff00',
  },
  boosterDown: {
    color: '#ff0000',
  },
});

export default Leaderboard;