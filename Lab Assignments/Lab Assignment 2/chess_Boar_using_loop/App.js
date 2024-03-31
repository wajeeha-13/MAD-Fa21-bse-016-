import React from 'react';
import { StyleSheet, View } from 'react-native';
import ChessBoard from './ChessBoard';

export default function App() {
  return (
    <View style={styles.container}>
      <ChessBoard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
});
