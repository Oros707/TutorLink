import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../Settings/ThemeContext'; // Import the useTheme hook
import Icon from 'react-native-vector-icons/FontAwesome'; // Import your icon library

function Attendance() {
  const navigation = useNavigation();
  const { darkMode } = useTheme(); // Use the useTheme hook to get the theme information

  const handleScanQRCode = () => {
    // You can implement QR code scanning here and get the scanned data
    const scannedData = 'SomeScannedData'; // Replace with actual scanned data
    navigation.navigate('AttendanceConfirmation', { data: scannedData });
  };

  const handleEnterLink = () => {
    // You can implement entering a link here and get the entered link
    const enteredLink = 'https://example.com'; // Replace with actual entered link
    navigation.navigate('AttendanceConfirmation', { data: enteredLink });
  };

  return (
    <View style={[styles.container, { backgroundColor: darkMode ? 'black' : (darkMode ? 'orange' : '#D9E3F0') }]}>
      <Button title="Scan QR Code" onPress={handleScanQRCode} />
      <Button title="Enter Link" onPress={handleEnterLink} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default Attendance;
