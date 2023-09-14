// ClaimDetails.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function ClaimDetails() {
  const navigation = useNavigation();

  const handleNext = () => {
    // Navigate to the "BankingDetails" page
    navigation.navigate('BankingDetails');
  };

  return (
    <View>
      <Text>Claim Details</Text>
      {/* Add input fields for claim details */}
      <TextInput placeholder="Contact E/T No." />
      <TextInput placeholder="Total Units" />
      <TextInput placeholder="Rate" />
      <TextInput placeholder="Currency" />
      <TextInput placeholder="Amount" />
      <TextInput placeholder="Cost Centre Number" />
      <TextInput placeholder="Total" />

      <TouchableOpacity onPress={handleNext}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
