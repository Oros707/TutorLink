import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ClaimDetails() {
  const navigation = useNavigation();
  const [contactETNo, setContactETNo] = useState('');
  const [totalUnits, setTotalUnits] = useState('');
  const [rate, setRate] = useState('');
  const [currency, setCurrency] = useState('');
  const [amount, setAmount] = useState('');
  const [costCentreNumber, setCostCentreNumber] = useState('');
  const [total, setTotal] = useState('');

  const handleNext = () => {
    // Navigate to BankingDetails
    navigation.navigate('BankingDetails');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Claim Details</Text>
      
      <Text style={styles.inputLabel}>Contact E/T No.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Contact E/T No."
        value={contactETNo}
        onChangeText={(text) => setContactETNo(text)}
      />

      <Text style={styles.inputLabel}>Total Units</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Total Units"
        value={totalUnits}
        onChangeText={(text) => setTotalUnits(text)}
      />

      <Text style={styles.inputLabel}>Rate</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Rate"
        value={rate}
        onChangeText={(text) => setRate(text)}
      />

      <Text style={styles.inputLabel}>Currency</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Currency"
        value={currency}
        onChangeText={(text) => setCurrency(text)}
      />

      <Text style={styles.inputLabel}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        value={amount}
        onChangeText={(text) => setAmount(text)}
      />

      <Text style={styles.inputLabel}>Cost Centre Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Cost Centre Number"
        value={costCentreNumber}
        onChangeText={(text) => setCostCentreNumber(text)}
      />

      <Text style={styles.inputLabel}>Total</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Total"
        value={total}
        onChangeText={(text) => setTotal(text)}
      />

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#333",
    // paddingBottom: 16,
  },
  label: {
    color: "orange", // Orange text color
    fontSize: 16,
    marginTop: 80,
    marginBottom: 20,
    fontSize: 25,
    textAlign: "center",
  },
  inputLabel: {
    color: "white", // White text color for input labels
    fontSize: 18,
    marginTop: 12,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    marginTop: 4,
  },
  button: {
    backgroundColor: "orange", // Orange button background color
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
