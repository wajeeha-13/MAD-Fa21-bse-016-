import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet, ScrollView } from 'react-native';

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [savedCalculations, setSavedCalculations] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const calculateDiscount = () => {
    if (originalPrice !== '' && discountPercentage !== '') {
      const price = parseFloat(originalPrice);
      const discount = parseFloat(discountPercentage);
      if (!isNaN(price) && !isNaN(discount) && discount >= 0 && discount <= 100) {
        const discountAmount = (price * discount) / 100;
        const finalPrice = price - discountAmount;
        const calculation = `${price} - ${discount}% = ${finalPrice.toFixed(2)}`;
        setSavedCalculations([...savedCalculations, calculation]);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discount Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Original Price"
        keyboardType="numeric"
        value={originalPrice}
        onChangeText={setOriginalPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Discount Percentage"
        keyboardType="numeric"
        value={discountPercentage}
        onChangeText={setDiscountPercentage}
      />
      <Button title="Calculate" onPress={calculateDiscount} />
      <Button title="View History" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <ScrollView>
            {savedCalculations.map((calculation, index) => (
              <Text key={index} style={styles.calculationText}>{calculation}</Text>
            ))}
          </ScrollView>
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
    paddingHorizontal: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  calculationText: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default DiscountCalculator;
