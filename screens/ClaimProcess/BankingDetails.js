import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import DetailsContext from "./DetailsContext";

export default function BankingDetails() {
  const navigation = useNavigation();
  const [status, setStatus] = useState("");
  const [accountName, setAccountName] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [accountType, setAccountType] = useState("");
  const [details, setDetails] = useContext(DetailsContext);

  const handleNext = () => {
    setDetails((prev) => ({
      ...prev,
      BankingDetails: {
        status,
        bankName,
        accountName,
        accountType,
        accountNo,
      },
    }));
    navigation.navigate("Confirmation");
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.centeredView}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <Text style={styles.heading}>Banking Details</Text>
        <Text style={styles.label}>Status</Text>
        <TextInput
          style={styles.input}
          value={status}
          onChangeText={(text) => setStatus(text)}
          placeholder="Status"
        />

        <Text style={styles.label}>Account Name</Text>
        <TextInput
          style={styles.input}
          value={accountName}
          onChangeText={(text) => setAccountName(text)}
          placeholder="Account Name"
        />

        <Text style={styles.label}>Bank Name</Text>
        <TextInput
          style={styles.input}
          value={bankName}
          onChangeText={(text) => setBankName(text)}
          placeholder="Bank Name"
        />

        <Text style={styles.label}>Account No.</Text>
        <TextInput
          style={styles.input}
          value={accountNo}
          onChangeText={(text) => setAccountNo(text)}
          placeholder="Account No."
        />

        <Text style={styles.label}>Account Type</Text>
        <TextInput
          style={styles.input}
          value={accountType}
          onChangeText={(text) => setAccountType(text)}
          placeholder="Account Type"
        />

        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#333",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
  },
  label: {
    color: "orange",
    fontSize: 16,
    marginTop: 8,
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
  heading:{
    color: 'orange',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  }
});
