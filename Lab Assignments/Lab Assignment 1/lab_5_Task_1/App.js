import React, { useState } from 'react';
import { 
  SafeAreaView, 
  StatusBar, 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';

const GameTitle = "Number Guessing Game";

const GameLayout = () => {
  const [inputText, setInputText] = useState("");

  const handleNumberPress = (num) => {
    setInputText(prev => prev + num);
  };

  const handleClearPress = () => {
    setInputText("");
  };

  const handleSubmitPress = () => {
    alert("Submitted: " + inputText);
    setInputText("");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View>
        <Text style={styles.title}>{GameTitle}</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.inputText}>{inputText}</Text>
        </View>
        <View style={styles.buttonContainer}>
          {[...Array(10).keys()].map(num => (
            <TouchableOpacity
              key={num}
              style={styles.numberButton}
              onPress={() => handleNumberPress(num)}>
              <Text style={styles.buttonText}>{num}</Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity
            style={[styles.clearButton, styles.button]}
            onPress={handleClearPress}>
            <Text style={styles.buttonText}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.submitButton, styles.button]}
            onPress={handleSubmitPress}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 20,
    minWidth: 200,
  },
  inputText: {
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 5,
  },
  numberButton: {
    backgroundColor: '#fff',
  },
  clearButton: {
    backgroundColor: 'lightcoral',
  },
  submitButton: {
    backgroundColor: 'lightgreen',
  },
  buttonText: {
    fontSize: 18,
  },
});

export default GameLayout;
