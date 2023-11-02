import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useContext } from 'react'
import DetailsContext from './DetailsContext';

export default function TemporaryAppointment() {
  const navigation = useNavigation();
  const [duration, setDuration] = useState('');
  const [hour, setHour] = useState('');
  const [remuneration, setRemuneration] = useState('');
  const [cost, setCost] = useState('');
  const [totalBudget, setTotalBudget] = useState('');
  const [details, setDetails] = useContext(DetailsContext);

  const handleNext = () => {
    setDetails(prev => ({
      ...prev,
      TemporaryAppointment: {
        duration,
        cost,
        hour,
        totalBudget
       },
    }));
    // Navigate to Confirmation
    navigation.navigate('Confirmation');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Temporary Appointment</Text>

      <Text style={styles.inputLabel}>Duration</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Duration"
        value={duration}
        onChangeText={(text) => setDuration(text)}
      />

      <Text style={styles.inputLabel}>Hour</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Hour"
        value={hour}
        onChangeText={(text) => setHour(text)}
      />

      <Text style={styles.inputLabel}>Remuneration</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Remuneration"
        value={remuneration}
        onChangeText={(text) => setRemuneration(text)}
      />

      <Text style={styles.inputLabel}>Cost</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Cost"
        value={cost}
        onChangeText={(text) => setCost(text)}
      />

      <Text style={styles.inputLabel}>Total Budget</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Total Budget"
        value={totalBudget}
        onChangeText={(text) => setTotalBudget(text)}
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
    padding: 16,
    backgroundColor: '#333', // Dark grey background color
  },
  label: {
    color: 'orange', // Orange text color
    fontSize: 16,
    marginTop: 8,
  },
  inputLabel: {
    color: 'white', // White text color for input labels
    fontSize: 16,
    marginTop: 12,
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
