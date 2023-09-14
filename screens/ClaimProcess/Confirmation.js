// Confirmation.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
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
    <View>
      <Text>Enter OTP:</Text>
      <TextInput
        value={otp}
        onChangeText={(text) => setOTP(text)}
        placeholder="OTP"
      />

      <Text>Time Remaining: {remainingTime} seconds</Text>

      <TouchableOpacity onPress={handleConfirm}>
        <Text>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}
