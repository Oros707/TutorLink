// BankingDetails.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function BankingDetails() {
  const navigation = useNavigation();
  const [status, setStatus] = useState('');
  const [accountName, setAccountName] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNo, setAccountNo] = useState('');
  const [accountType, setAccountType] = useState('');

  const handleNext = () => {
    // Navigate to the "Confirmation" page
    navigation.navigate('Confirmation');
  };

  return (
    <View>
      <Text>Status</Text>
      <TextInput
        value={status}
        onChangeText={(text) => setStatus(text)}
        placeholder="Status"
      />

      <Text>Account Name</Text>
      <TextInput
        value={accountName}
        onChangeText={(text) => setAccountName(text)}
        placeholder="Account Name"
      />

      <Text>Bank Name</Text>
      <TextInput
        value={bankName}
        onChangeText={(text) => setBankName(text)}
        placeholder="Bank Name"
      />

      <Text>Account No.</Text>
      <TextInput
        value={accountNo}
        onChangeText={(text) => setAccountNo(text)}
        placeholder="Account No."
      />

      <Text>Account Type</Text>
      <TextInput
        value={accountType}
        onChangeText={(text) => setAccountType(text)}
        placeholder="Account Type"
      />

      <TouchableOpacity onPress={handleNext}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
