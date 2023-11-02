import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { auth } from "../config/firebase";
import { sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [error, setError] = useState(null);

  const handleResetPassword = async () => {
    try {
      // Attempt to send the password reset email
      await sendPasswordResetEmail(auth, email);
      setIsEmailSent(true);
      setError(null);
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("User with this email address does not exist.");
      } else {
        setError("Failed to send the password reset email. Please check your email address.");
        console.log(error.message);
      }
      setIsEmailSent(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter your email to reset your password:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={(text) => setEmail(text)}
        placeholder="Email"
      />
      <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
      {error && <Text style={styles.errorText}>{error}</Text>}
      {isEmailSent && (
        <Text style={styles.successText}>
          Password reset email sent. Check your inbox.
        </Text>
      )}
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
  label: {
    color: "white",
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    backgroundColor: "white",
    borderRadius: 4,
    padding: 8,
    fontSize: 16,
    marginBottom: 4,
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
  errorText: {
    color: "red",
    marginTop: 8,
  },
  successText: {
    color: "green",
    marginTop: 8,
  },
});
