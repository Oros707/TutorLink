import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform ,ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import DetailsContext from './DetailsContext';


export default function ClaimDetails() {
  const navigation = useNavigation();
  const [contactETNo] = useState(''); // Set the initial value for Contact E/T No.
  const [totalUnits, setTotalUnits] = useState('0');
  const [rate, setRate] = useState('0');
  const [currency] = useState('ZAR'); // Set the initial value for Currency
  const [costCentreNumber, setCostCentreNumber] = useState('');
  const [total, setTotal] = useState('');
  const [details, setDetails] = useContext(DetailsContext);

  // Function to calculate the amount


  const handleNext = () => {

    setDetails(prev => ({
      ...prev,
      ClaimDetails: {
        contactETNo,
        totalUnits,
        rate,
        currency,
        costCentreNumber,
        total,
        details,
      },
    }));
    // Navigate to BankingDetails
    navigation.navigate('BankingDetails');
  };
  
  return (
    <ScrollView style={styles.container}>
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <Text style={styles.label}>Appointment</Text>

      <Text style={styles.inputLabel}>Enter Full Name</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        value={contactETNo} // Set the initial value
        editable={false} // Make it uneditable
      />

<Text style={styles.inputLabel}>Enter Surname</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        value={contactETNo} // Set the initial value
        editable={false} // Make it uneditable
      />

<Text style={styles.inputLabel}>Identity/Passport No.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        value={contactETNo} // Set the initial value
        editable={false} // Make it uneditable
      />

<Text style={styles.inputLabel}>Gender</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        value={contactETNo} // Set the initial value
        editable={false} // Make it uneditable
      />

<Text style={styles.inputLabel}>Are you a South African Citizenship?</Text>
      <TextInput
        style={styles.input}
        placeholder="IF NO, SPECIFY NATIONALITY"
        value={contactETNo} // Set the initial value
        
      />

<Text style={styles.inputLabel}>Home Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        value={contactETNo} // Set the initial value
      />

<Text style={styles.inputLabel}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        value={contactETNo} // Set the initial value
        editable={false} // Make it uneditable
      />

<Text style={styles.inputLabel}>Cellphone Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        value={contactETNo} // Set the initial value
        editable={false} // Make it uneditable
      />

<Text style={styles.inputLabel}>Disability</Text>
      <TextInput
        style={styles.input}
        placeholder="IF YES, STATE NATURE"
        value={contactETNo} // Set the initial value
         // Make it uneditable
      />

<Text style={styles.inputLabel}>Race</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Full Name"
        value={contactETNo} // Set the initial value
        editable={false} // Make it uneditable
      />

      <Text style={styles.inputLabel}>Contract E/T No.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Contact E/T No."
        value={contactETNo} // Set the initial value
        editable={false} // Make it uneditable
      />

<Text style={styles.inputLabel}>Employed at UJ</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Contact E/T No."
        value={contactETNo} // Set the initial value
        editable={false} // Make it uneditable
      />

      <Text style={styles.inputLabel}>Cost Centre Number</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Cost Centre Number"
        value={costCentreNumber}
        onChangeText={(text) => setCostCentreNumber(text)}
      />

      

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
      
    </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#333',
  },
  label: {
    color: 'orange',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
  inputLabel: {
    color: 'white',
    fontSize: 18,
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
    backgroundColor: 'orange',
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
