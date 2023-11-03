import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../config/firebase"; // Import your Firebase config

const ProfilePage = ({ navigation }) => {
  const [userData, setUserData] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setIsVisible(false);
        setUserData({});
      }
    });

    if (user) {
      const unsubscribe = onSnapshot(doc(db, "users", user.uid), (document) => {
        if (document.exists()) {
          setUserData(document.data());
          setIsVisible(true);
        }
      });

      return () => {
        unsubscribeAuth();
        unsubscribe();
      };
    }
  }, [user]);

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      // navigation.navigate("LoginScreen"); // Redirect to the login page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const handleSettings = () => {
    navigation.navigate("Settings"); // Navigate to the Settings screen
  };

  return isVisible ? (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require("../assets/images/userIcon.png")}
      />

      <Text style={styles.userName}>
        <Text>Name: </Text> {userData.fullName}
      </Text>
      <Text style={styles.userEmail}>
        <Text>Email: </Text>
        {userData.email}
      </Text>
      <Text style={styles.Phone}>
        <Text>Phone Number: </Text>
        {userData.phoneNumber}
      </Text>

      <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.settingsButton} onPress={handleSettings}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 170,
  },
  profileImage: {
    width: 230,
    height: 230,
    borderRadius: 75,
    marginBottom: 20,
    backgroundColor: "gray",
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  userEmail: {
    fontSize: 16,
    color: "gray",
  },
  Phone: {
    fontSize: 22,
  },
  logoutButton: {
    padding: 12,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "red",
  },
  settingsButton: {
    padding: 12,
    borderRadius: 10,
    margin: 10,
    backgroundColor: "blue",
  },
  buttonText: {
    fontSize: 18,
    color: "white",
  },
});

export default ProfilePage;
