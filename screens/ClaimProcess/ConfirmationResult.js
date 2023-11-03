import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

export default function ConfirmationResult({ navigation }) {
  const handleDone = () => {
    // Navigate back to the Claims screen when the "Done" button is pressed
    navigation.navigate("Claims");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../../images/UJ_LOGO_BW.png")}
        alt="UJ Logo"
      />

      <Text style={styles.thankYouText}>Thank you for your confirmation!</Text>
      <Text style={styles.emailText}>
        Your details have been submitted successfully!
      </Text>

      <TouchableOpacity style={styles.doneButton} onPress={handleDone}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    paddingHorizontal: 30,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  thankYouText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 30,
  },
  emailText: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  doneButton: {
    backgroundColor: "orange",
    borderRadius: 50,
    alignItems: "center",
    marginTop: 40,
  },
  doneButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
