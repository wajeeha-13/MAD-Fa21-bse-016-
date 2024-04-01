import React from 'react';
import { StyleSheet, View } from 'react-native';
import ChatScreen from './ChatScreen';
import CallLogScreen from './CallLogScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ChatScreen />
      {/* <CallLogScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
