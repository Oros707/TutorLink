import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../config/firebase"; // Import your Firebase config

const ProfilePage = ({ navigation }) => {
  const [userData, setUserData] = useState({});
  const [isVisible, setIsVisible] = useState(false);
  const user = auth.currentUser;

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Handle the case when the user is signed out
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
      navigation.navigate("LoginScreen"); // Redirect to the login page
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return isVisible ? (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require("../assets/images/signup.png")}
      />

      <Text style={styles.userName}>
        <Text style={styles.label}>Name: </Text> {userData.fullName}
      </Text>
      <Text style={styles.userEmail}>
        <Text style={styles.label}>Email: </Text>
        {userData.email}
      </Text>
      <Text style={styles.Phone}>
        <Text style={styles.label}>Phone Number: </Text>
        {userData.phoneNumber}
      </Text>

      <Button title="Sign Out" onPress={handleSignOut} />
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
    borderRadius: 115, // Half the width and height to make it a circle
    marginBottom: 20,
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
  label: {
    fontWeight: "bold",
  },
});

export default ProfilePage;
