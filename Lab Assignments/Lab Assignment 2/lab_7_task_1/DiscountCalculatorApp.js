import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, FlatList } from 'react-native';

const DiscountCalculatorApp = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [savedCalculations, setSavedCalculations] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [calculatedPrice, setCalculatedPrice] = useState(null);

  const calculateDiscount = () => {
    const price = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);
    if (!isNaN(price) && !isNaN(discount) && discount >= 0 && discount <= 100) {
      const discountedPrice = price - (price * discount) / 100;
      const youSave = price - discountedPrice;
      const finalPrice = discountedPrice.toFixed(2);
      const calculation = `${price} - ${discount}% = ${finalPrice}`;
      setCalculatedPrice(finalPrice); // Set calculated price here
      setSavedCalculations(prevCalculations => [calculation, ...prevCalculations]);
    }
  };

  const renderHistoryItem = ({ item }) => (
    <Text style={styles.historyItem}>{item}</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discount Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Original Price"
        keyboardType="numeric"
        value={originalPrice}
        onChangeText={text => setOriginalPrice(text.replace(/[^0-9.]/g, ''))}
      />
      <TextInput
        style={styles.input}
        placeholder="Discount Percentage"
        keyboardType="numeric"
        value={discountPercentage}
        onChangeText={text => setDiscountPercentage(text.replace(/[^0-9.]/g, ''))}
      />
      <View style={styles.buttonContainer}>
        <Button title="Calculate" onPress={calculateDiscount} />
        <Button title="View History" onPress={() => setModalVisible(true)} />
      </View>
      {calculatedPrice && <Text style={styles.calculatedPrice}>Final Price: {calculatedPrice}</Text>}
      <Modal
        animationType="slide"
        transparent={false}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Calculation History</Text>
          <FlatList
            data={savedCalculations}
            renderItem={renderHistoryItem}
            keyExtractor={(item, index) => index.toString()}
          />
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historyItem: {
    fontSize: 16,
    marginBottom: 10,
  },
  calculatedPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});

export default DiscountCalculatorApp;
