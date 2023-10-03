import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Confirmation() {
  const navigation = useNavigation();
  const [otp, setOTP] = useState('');
  const [remainingTime, setRemainingTime] = useState(60);

  useEffect(() => {
    let timerInterval;
    if (remainingTime > 0) {
      timerInterval = setInterval(() => {
        setRemainingTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(timerInterval);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [remainingTime]);

  const handleConfirm = () => {
    // Handle OTP validation and confirmation logic here
    // Navigate to the appropriate result page based on validation result
    navigation.navigate('ConfirmationResult'); // Replace with your success or failure screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter OTP:</Text>
      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={(text) => setOTP(text)}
        placeholder="OTP"
      />

      <Text style={styles.timer}>Time Remaining: {remainingTime} seconds</Text>

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
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
  timer: {
    color: 'orange', // Orange text color
    fontSize: 16,
    marginTop: 8,
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
