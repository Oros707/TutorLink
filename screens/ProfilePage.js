import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { doc, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../config/firebase'; // Import your Firebase config

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
      const unsubscribe = onSnapshot(doc(db, 'users', user.uid), (document) => {
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
      navigation.replace('NAV1'); // Redirect to the login page
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return isVisible ? (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image
          style={styles.profileImage}
          source={require('../assets/images/userIcon.png')}
        />

        <Text style={styles.userName}>{userData.fullName}</Text>
        <Text style={styles.userEmail}>{userData.email}</Text>
        <Text style={styles.phoneNumber}>{userData.phoneNumber}</Text>
      </View>

      <Button title="Sign Out" onPress={handleSignOut} style={styles.signOutButton} />
    </View>
  ) : null;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7f7f7',
  },
  profileContainer: {
    alignItems: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  userEmail: {
    fontSize: 16,
    color: 'gray',
  },
  phoneNumber: {
    fontSize: 18,
    marginBottom: 10,
    color: 'darkblue',
  },
  signOutButton: {
    backgroundColor: 'red',
    color: 'white',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
