// TemporaryAppointment.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TemporaryAppointment() {
  const navigation = useNavigation();

  const handleNext = () => {
    // Navigate to the "ClaimDetails" page
    navigation.navigate('ClaimDetails');
  };

  return (
    <View>
      <Text>Temporary Appointment</Text>
      {/* Add input fields for temporary appointment details */}
      <TextInput placeholder="Duration" />
      <TextInput placeholder="Hour" />
      <TextInput placeholder="Remuneration" />
      <TextInput placeholder="Cost" />
      <TextInput placeholder="Total Budget" />

      <TouchableOpacity onPress={handleNext}>
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
