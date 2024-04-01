import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

const CALL_LOG_DATA = [
  { id: '1', contact: 'John Doe', type: 'received', timestamp: '10:00 AM', duration: '5m 30s' },
  { id: '2', contact: 'Jane Smith', type: 'missed', timestamp: '9:45 AM', duration: '' },
  { id: '3', contact: 'Alex Johnson', type: 'outgoing', timestamp: '9:30 AM', duration: '2m 15s' },
  // Add more call log entries as needed
];

const CallLogItem = ({ contact, type, timestamp, duration }) => {
  let callTypeText = '';
  let callTypeColor = '';
  if (type === 'received') {
    callTypeText = 'Received';
    callTypeColor = '#4FCE5D';
  } else if (type === 'missed') {
    callTypeText = 'Missed';
    callTypeColor = '#FF5A5F';
  } else if (type === 'outgoing') {
    callTypeText = 'Outgoing';
    callTypeColor = '#007AFF';
  }

  return (
    <View style={[styles.callLogItem, { borderLeftColor: callTypeColor }]}>
      <Text style={styles.contact}>{contact}</Text>
      <Text style={styles.callType}>{callTypeText}</Text>
      <Text style={styles.timestamp}>{timestamp}</Text>
      <Text style={styles.duration}>{duration}</Text>
    </View>
  );
};

const CallLogScreen = () => {
  const renderCallLogItem = ({ item }) => (
    <CallLogItem
      contact={item.contact}
      type={item.type}
      timestamp={item.timestamp}
      duration={item.duration}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CALL_LOG_DATA}
        renderItem={renderCallLogItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  callLogItem: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderLeftWidth: 5,
  },
  contact: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  callType: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
  duration: {
    fontSize: 12,
    color: '#999',
    marginTop: 2,
  },
});

export default CallLogScreen;
