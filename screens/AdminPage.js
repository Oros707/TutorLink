import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { auth, db } from "../config/firebase";
import { signOut } from "@firebase/auth";

const AdminPage = () => {
  const handleLogout = async () => {
    try {
      console.log("signout");
      await signOut(auth);
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../images/Axole.png")} style={styles.image} />
        <Text style={styles.title}>Welcome to the Admin Dashboard</Text>
        <Text style={styles.title}>Mr Axole Maranjana</Text>
      </View>
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#999",
  },
  header: {
    alignItems: "center",
  },
  image: {
    width: 290,
    height: 260, 
    marginBottom: 16, 
    borderRadius: 64,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  logoutButton: {
    backgroundColor: "red",
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
});

export default AdminPage;
