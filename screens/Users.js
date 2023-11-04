import { db } from "../config/firebase";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import firebase from "firebase/app";
import "firebase/database";
import {
  onSnapshot,
  doc,
  collection,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const eventsCollection = collection(db, "users");
    const unsubscribe = onSnapshot(eventsCollection, (snapshot) => {
      const eventsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(eventsList);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const deleteUser = async (userId) => {
    try {
      await deleteDoc(doc(db, "users", userId));
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.subtitle}>Users in the Database:</Text>
      </View>
      {loading ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <FlatList
          data={users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.userItem}>
              <View style={styles.userInfo}>
                <View style={styles.userName}>
                  <Text>{item.fullName}</Text>
                </View>

                <View style={styles.userPhone}>
                  <Text>{item.phoneNumber}</Text>
                </View>

                <View style={styles.userEmail}>
                  <Text>{item.email}</Text>
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
      )}
      <View style={{ height: 100 }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    top: 80,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: 'left'
  },
  userItem: {
    backgroundColor: "#D9E3F0",
    padding: 17,
    margin: 5,
    borderRadius: 15,
    elevation: 5,
    shadowColor: "#333",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 3 },
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userName: {
    fontSize: 16,
  },
  userPhone: {
    margin: 10,
  },
  deleteButton: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
    marginLeft: 83,
  },
  deleteButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default UsersPage;
