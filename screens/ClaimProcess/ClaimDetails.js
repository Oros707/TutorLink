import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,

} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import DetailsContext from "./DetailsContext";
import ModalDropdown from 'react-native-modal-dropdown';

export default function ClaimDetails() {
  const navigation = useNavigation();
  const [contractETNo] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [identity, setIdentity] = useState("");
  const [gender, setGender] = useState("");
  const [citizenship, setCitizenship] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [disability, setDisability] = useState("");
  const [race, setRace] = useState("");
  const [centernumber, setCenterNumber] = useState("");
  const [currency] = useState("ZAR"); // Set the initial value for Currency
  const [CentreNumber, setCostCentreNumber] = useState("");
  const [details, setDetails] = useContext(DetailsContext);

  // Function to calculate the amount
  const handleNext = () => {
    setDetails((prev) => ({
      ...prev,
      ClaimDetails: {
        contractETNo,
        name,
        surname,
        identity,
        gender,
        citizenship,
        address,
        email,
        phonenumber,
        disability,
        race,
      },
    }));
    // Navigate to BankingDetails
    navigation.navigate("BankingDetails");
  };

  return (
    <ScrollView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <Text style={styles.label}>Appointment</Text>

        <Text style={styles.inputLabel}>Enter Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Full Name"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.inputLabel}>Enter Surname</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Surname"
          value={surname}
          onChangeText={setSurname}
        />

        <Text style={styles.inputLabel}>Identity/Passport No.</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Identity/Passport No."
          value={identity}
          onChangeText={setIdentity}
        />

        <Text style={styles.inputLabel}>Gender</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Gender"
          value={gender}
          onChangeText={setGender}
        />

        <Text style={styles.inputLabel}>Are you a South African Citizen?</Text>
        <TextInput
          style={styles.input}
          placeholder="IF NO, SPECIFY NATIONALITY"
          value={citizenship}
          onChangeText={setCitizenship}
        />

        <Text style={styles.inputLabel}>Home Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Home Address"
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.inputLabel}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email Address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.inputLabel}>Cellphone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Cellphone Number"
          value={phonenumber}
          onChangeText={setPhoneNumber}
        />

        <Text style={styles.inputLabel}>Disability</Text>
        <TextInput
          style={styles.input}
          placeholder="IF YES, STATE NATURE"
          value={disability}
          onChangeText={setDisability}
        />

        <Text style={styles.inputLabel}>Race</Text>
        <View style={styles.input}>
          <ModalDropdown
            options={["African", "Colored", "Indian", "White"]}
            defaultValue="Select Race"
            onSelect={(index,value) => setRace(value)}
            initialScrollIndex
          />
        </View>

        <Text style={styles.inputLabel}>Contract E/T No.</Text>
        <TextInput
          style={styles.input}
          placeholder="6859"
          value={contractETNo}
          editable={false}
        />

        <Text style={styles.inputLabel}>Employed at UJ</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Employment Status"
          value={centernumber}
          onChangeText={(text) => setCenterNumber(text)}
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
    backgroundColor: "#333",
  },
  label: {
    color: "orange",
    fontSize: 25,
    textAlign: "center",
    marginTop: 80,
    marginBottom: 20,
  },
  inputLabel: {
    color: "white",
    fontSize: 18,
    marginTop: 12,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    marginTop: 4,
  },
  button: {
    backgroundColor: "orange",
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
