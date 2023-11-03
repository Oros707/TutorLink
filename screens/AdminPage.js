import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const AdminPage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../images/Axole.png')}
          style={styles.image}
        />
        <Text style={styles.title}>Welcome to the Admin Dashboard</Text>
        <Text style={styles.title}>Mr Axole Maranjana</Text>
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
