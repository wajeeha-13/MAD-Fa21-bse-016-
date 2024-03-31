import React from 'react';
import { StyleSheet, View } from 'react-native';
import StudentRecord from './StudentRecord';

export default function App() {
  return (
    <View style={styles.container}>
      <StudentRecord />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
