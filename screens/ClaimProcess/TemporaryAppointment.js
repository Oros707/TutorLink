import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function TemporaryAppointment() {
  const navigation = useNavigation();

  const handleNext = () => {
    // Navigate to the "ClaimDetails" page
    navigation.navigate("Confirmation");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Temporary Appointment</Text>
      <TextInput style={styles.input} placeholder="Duration" />
      <TextInput style={styles.input} placeholder="Hour" />
      <TextInput style={styles.input} placeholder="Remuneration" />
      <TextInput style={styles.input} placeholder="Cost" />
      <TextInput style={styles.input} placeholder="Total Budget" />

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
