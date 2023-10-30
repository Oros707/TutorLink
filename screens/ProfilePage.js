import React from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { auth } from "../config/firebase";

export default function ProfilePage({ navigation }) {

  const handleLogout = async () => {
    try {
      // await signOut(auth);
      navigation.navigate("LoginScreen");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      "Confirm Account Deletion",
      "Are you sure you want to delete your account? This action cannot be undone.",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Delete",
          onPress: async () => {
            try {
              const user = auth.currentUser;

              if (user) {
                await deleteUser(user); // Delete the user's account
                navigation.navigate("LoginScreen"); // Navigate to the login screen after deletion
              }
            } catch (error) {
              console.error("Error deleting account:", error);
            }
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Page</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={handleDeleteAccount}
      >
        <Text style={styles.buttonText}>Delete Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    color: "black",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 10,
    margin: 10,
  },
  deleteButton: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
  },
});
