import React from 'react';
import { StyleSheet, View } from 'react-native';

// Define the size of each square
const SQUARE_SIZE = 50;

const ChessBoard = () => {
  // Create an array of alternating colors for the squares
  const colors = ['white', 'black'];
  
  // Generate the squares dynamically
  const squares = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const color = colors[(i + j) % 2];
      squares.push(<View key={`${i}${j}`} style={[styles.square, { backgroundColor: color }]} />);
    }
  }

  return (
    <View style={styles.container}>
      {squares}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 8 * SQUARE_SIZE,
  },
  square: {
    width: SQUARE_SIZE,
    height: SQUARE_SIZE,
    borderWidth: 1,
    borderColor: 'black',
  },
});

export default ChessBoard;
