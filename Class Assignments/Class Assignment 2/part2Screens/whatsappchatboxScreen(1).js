import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

const CHAT_DATA = [
  { id: '1', sender: 'Me', message: 'Hi there!', timestamp: '10:00 AM' },
  { id: '2', sender: 'Friend', message: 'Hey!', timestamp: '10:01 AM' },
  { id: '3', sender: 'Me', message: 'How are you?', timestamp: '10:02 AM' },
  { id: '4', sender: 'Friend', message: 'I\'m good, thanks!', timestamp: '10:03 AM' },
  // Add more chat messages as needed
];

const ChatBubble = ({ message, sender, timestamp, isSelf }) => {
  return (
    <View style={[styles.chatBubble, isSelf ? styles.selfBubble : styles.otherBubble]}>
      <Text style={styles.sender}>{sender}</Text>
      <Text style={styles.message}>{message}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
};

const ChatScreen = () => {
  const renderChatBubble = ({ item }) => (
    <ChatBubble
      message={item.message}
      sender={item.sender}
      timestamp={item.timestamp}
      isSelf={item.sender === 'Me'}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CHAT_DATA}
        renderItem={renderChatBubble}
        keyExtractor={item => item.id}
        inverted // To display messages from bottom to top
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          multiline
          numberOfLines={2}
        />
        <TouchableOpacity style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  chatBubble: {
    marginVertical: 5,
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 10,
  },
  selfBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#DCF8C6',
  },
  otherBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#E5E5EA',
  },
  sender: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  message: {
    fontSize: 16,
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  input: {
    flex: 1,
    minHeight: 40,
    maxHeight: 80,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#4FCE5D',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ChatScreen;
