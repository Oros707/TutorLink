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
  const handleConfirm = async () => {
    try {
      const { ClaimDetails, BankingDetails, TemporaryAppointment } = details;
  
      const structuredData = {
        ...ClaimDetails,
        ...BankingDetails,
        ...TemporaryAppointment,
        timestamp: serverTimestamp(),
      };
  
      await addDoc(collection(db, "Claims"), structuredData);
  
      
      navigation.navigate('ConfirmationResult'); 
    } catch (error) {
      console.error("Error adding document to Claims collection: ", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.timerContainer}>
      </View>
      
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
    backgroundColor: '#333', 
    justifyContent: 'center', 
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
