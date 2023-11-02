import { db } from "../config/firebase";
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import firebase from "firebase/app";
import "firebase/database";
import { onSnapshot, doc, collection, setDoc, deleteDoc } from "firebase/firestore";

const UsersPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const eventsCollection = collection(db, "users");
    const unsubscribe = onSnapshot(eventsCollection, (snapshot) => {
      const eventsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(eventsList);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const deleteUser = async (userId) => {
    try {
      // Delete the user from the database
      await deleteDoc(doc(db, "users", userId));
      // Filter out the deleted user from the local state
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Users in the Database:</Text>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => (
            <View style={styles.userItem}>
            <View style={styles.userInfo}>
                <View style={styles.userName}>
                    <Text >{item.fullName}</Text>
                </View>

              <View style={styles.userPhone}>
                    <Text >{item.phoneNumber}</Text>
              </View>

              <View style={styles.userEmail}>
                    <Text >{item.email}</Text>
              </View>
              
            </View>
            <View>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => deleteUser(item.id)}
            >
              <Text style={styles.deleteButtonText}>Delete</Text>
            </TouchableOpacity>
            </View>
            
          </View>
          
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 80
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  userItem: {
    backgroundColor: "white",
    padding: 17,
    margin: 5,
    borderRadius: 15, // Increase border radius for rounded corners
    elevation: 5, // Add elevation for a card-like effect (Android)
    shadowColor: "black", // Add shadow for iOS
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    flexDirection: "row", // Align text and button horizontally
    justifyContent: "space-between", // Add space between text and button
  },
  userName: {
    fontSize: 16,
  },
  userPhone:{
    margin:10
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    marginLeft:83
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default UsersPage;
