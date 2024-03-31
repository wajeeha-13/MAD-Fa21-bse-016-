import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

const StudentRecord = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState('');
  const [gpa, setGPA] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const addStudent = () => {
    if (name.trim() !== '' && gpa.trim() !== '') {
      setStudents([...students, { name, gpa }]);
      setName('');
      setGPA('');
    }
  };

  const searchStudent = () => {
    const result = students.find(student => student.name.toLowerCase() === searchTerm.toLowerCase());
    setSearchResult(result);
  };

  const clearAll = () => {
    setStudents([]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Student Record Management</Text>

      {/* Add Student */}
      <Text style={styles.subheading}>Add Student</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter GPA"
        value={gpa}
        onChangeText={text => setGPA(text)}
        keyboardType="numeric"
      />
      <Button title="Add Student" onPress={addStudent} />

      {/* Search Student */}
      <Text style={styles.subheading}>Search Student</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter name"
        value={searchTerm}
        onChangeText={text => setSearchTerm(text)}
      />
      <Button title="Search" onPress={searchStudent} />
      {searchResult && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>Name: {searchResult.name}</Text>
          <Text style={styles.resultText}>GPA: {searchResult.gpa}</Text>
        </View>
      )}

      {/* Student List */}
      <Text style={styles.subheading}>Student Records</Text>
      <FlatList
        data={students}
        renderItem={({ item }) => (
          <View style={styles.recordContainer}>
            <Text style={styles.recordText}>Name: {item.name}</Text>
            <Text style={styles.recordText}>GPA: {item.gpa}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* Delete All */}
      <Button title="Clear All Records" onPress={clearAll} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  resultContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  resultText: {
    fontSize: 16,
  },
  recordContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  recordText: {
    fontSize: 16,
  },
});

export default StudentRecord;
