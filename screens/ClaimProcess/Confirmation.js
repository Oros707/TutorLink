import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CountdownTimer from './CountdownTimer'; // Import the CountdownTimer component
import {useContext } from 'react'
import DetailsContext from './DetailsContext';
import { db } from "../../config/firebase";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";

export default function Confirmation() {
  const navigation = useNavigation();
  const [otp, setOTP] = useState('');
  const [remainingTime, setRemainingTime] = useState(60);
  const [details] = useContext(DetailsContext);
  // Handle OTP confirmation logic
  const handleConfirm = async () => {
    try {
      // De-structure details object for clarity
      const { ClaimDetails, BankingDetails, TemporaryAppointment } = details;
  
      // Flatten/structure data (if necessary)
      const structuredData = {
        ...ClaimDetails,
        ...BankingDetails,
        ...TemporaryAppointment,
        timestamp: serverTimestamp(),
        claimedBy: item.fullName,  // optional: to record when the data was added
      };
  
      // Add the structured data to the Claims collection
      await addDoc(collection(db, "Claims"), structuredData);
  
      // Navigate after successful addition
      navigation.navigate('ConfirmationResult'); // Replace with your success or failure screen
    } catch (error) {
      console.error("Error adding document to Claims collection: ", error);
      // Handle the error as per your app's UX
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
        {/* Display the CountdownTimer component */}
        <CountdownTimer duration={remainingTime} onComplete={handleConfirm} />
      </View>

      <Text style={styles.label}>Enter OTP:</Text>
      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={(text) => setOTP(text)}
        placeholder="OTP"
      />
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
    justifyContent: 'center', // Center content vertically
  },
  timerContainer: {
    alignItems: 'center', // Center content horizontally
    marginBottom: 16, // Add some margin at the bottom of the timer
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
