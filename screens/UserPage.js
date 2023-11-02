import React from "react";
import { View, Text, TouchableOpacity, Alert, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { auth, signOut, deleteUser } from "../config/firebase";
import Settings from "../screens/Settings/Settings";
import { useTheme } from '../screens/Settings/ThemeContext'; // Import the useTheme hook

export default function UserPage() {
  const navigation = useNavigation();
  const { darkMode } = useTheme(); // Use the useTheme hook to get the theme information

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the current user
      navigation.navigate("LoginScreen"); // Navigate to the login screen after logout
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const handleDeleteAccount = () => {
    // Show a confirmation dialog to confirm account deletion
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

  const handleSettings = () =>{
    navigation.navigate("Settings");
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? 'black' : '#FFFFF0' }]}>
      <Text style={[styles.title, { color: darkMode ? 'white' : 'black' }]}>User Page</Text>
      <TouchableOpacity style={[styles.button, { backgroundColor: darkMode ? 'orange' : 'blue' }]}>
        <Text style={[styles.buttonText, { color: 'white' }]}>Logout</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.deleteButton, { backgroundColor: darkMode ? 'orange' : 'red' }]}>
        <Text style={[styles.buttonText, { color: 'white' }]}>Delete Account</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSettings} style={[styles.button, { backgroundColor: darkMode ? 'orange' : 'blue' }]}>
        <Text style={[styles.topic, { color: darkMode ? 'white' : 'black' }]}>Settings</Text>
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
    marginBottom: 20,
  },
  button: {
    padding: 12,
    borderRadius: 10,
    margin: 10,
  },
  deleteButton: {
    padding: 12,
    borderRadius: 10,
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
  },
  topic: {
    fontSize: 18,
    textAlign: "center",
  },
});
