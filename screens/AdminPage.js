import { db } from "../config/firebase";
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import firebase from "firebase/app";
import "firebase/database";
import { onSnapshot, doc, collection, setDoc } from "firebase/firestore";

const AdminPage = () => {
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

  return (
    <View style={styles.container}>
        <View>

      <Text style={styles.title}>Welcome to the Admin Page</Text>
      <Text style={styles.subtitle}>Users in the Database:</Text>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userItem}>
            <Text style={styles.userName}>{item.fullName}</Text>
          </View>
        )}
      />
    </View>
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
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  userItem: {
    backgroundColor: "white",
    padding: 10,
    margin: 5,
    borderRadius: 10, // Increase border radius for rounded corners
    elevation: 3, // Add elevation for a card-like effect (Android)
    shadowColor: "black", // Add shadow for iOS
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
  },
  userName: {
    fontSize: 16,
  },
});

export default AdminPage;
