import React from 'react';
import { StyleSheet, View } from 'react-native';
import WhatsAppScreen from './components/screen(1)';

export default function App() {
  return (
    <View style={styles.container}>
      <WhatsAppScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
