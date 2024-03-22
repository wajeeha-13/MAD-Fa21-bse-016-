import React from 'react';
import { StyleSheet, View } from 'react-native';

// Define the size of each square
const SQUARE_SIZE = 50;

const ChessBoard = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />

      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />

      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />

      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />

      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />

      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />

      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />

      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
      <View style={[styles.square, { backgroundColor: 'black' }]} />
      <View style={[styles.square, { backgroundColor: 'white' }]} />
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
