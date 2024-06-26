import React from 'react';
import { StyleSheet, View } from 'react-native';
import DiscountCalculatorApp from './DiscountCalculatorApp';

export default function App() {
  return (
    <View style={styles.container}>
      <DiscountCalculatorApp />
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
