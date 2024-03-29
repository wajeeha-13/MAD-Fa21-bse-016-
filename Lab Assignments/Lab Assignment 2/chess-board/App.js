import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import ChessBoard from './src/chess.app'; // Corrected import statement

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <ChessBoard />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
