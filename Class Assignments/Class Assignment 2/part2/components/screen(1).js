import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WhatsAppScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Header content */}
        <Text style={styles.headerText}>WhatsApp</Text>
      </View>
      <View style={styles.chatContainer}>
        {/* Chat content */}
        <CenteredText>Centered Text in Chat</CenteredText>
      </View>
    </View>
  );
};

const CenteredText = ({ children, style }) => {
  return (
    <Text style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: '#075e54',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    
  },
  chatContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default WhatsAppScreen;
