import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { signOut } from 'firebase/auth'; // Import the signOut function from your authentication library
import { auth } from '../config/firebase';

const AdminPage = () => {
  const handleLogout = async () => {
    try {
      console.log("signout");
      await signOut(auth); // Sign out the current user
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../images/Axole.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Welcome to the Admin Dashboard</Text>
        <Text style={styles.title}>Mr Axole Maranjana</Text>
        <Button title="Logout" onPress={handleLogout} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  header: {
    alignItems: 'center',
  },
  image: {
    width: 290, // Adjust the image width as needed
    height: 260, // Adjust the image height as needed
    marginBottom: 16, // Add margin for spacing
    borderRadius: 64,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default AdminPage;
