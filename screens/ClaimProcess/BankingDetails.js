import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BankingDetails() {
  const navigation = useNavigation();
  const [status, setStatus] = useState("");
  const [accountName, setAccountName] = useState("");
  const [bankName, setBankName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [accountType, setAccountType] = useState("");

  const handleNext = () => {
    navigation.navigate("TemporaryAppointment");
  };

  return (
    <View style={styles.container}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#333",
    
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
});
