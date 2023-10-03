import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ClaimDetails() {
  const navigation = useNavigation();

  const handleNext = () => {
    // Navigate to the "BankingDetails" page
    navigation.navigate('BankingDetails');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Claim Details</Text>
      <TextInput style={styles.input} placeholder="Contact E/T No." />
      <TextInput style={styles.input} placeholder="Total Units" />
      <TextInput style={styles.input} placeholder="Rate" />
      <TextInput style={styles.input} placeholder="Currency" />
      <TextInput style={styles.input} placeholder="Amount" />
      <TextInput style={styles.input} placeholder="Cost Centre Number" />
      <TextInput style={styles.input} placeholder="Total" />

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#333', // Dark grey background color
  },
  label: {
    color: 'orange', // Orange text color
    fontSize: 16,
    marginTop: 8,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    marginTop: 4,
  },
  button: {
    backgroundColor: 'orange', // Orange button background color
    borderRadius: 4,
    padding: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
