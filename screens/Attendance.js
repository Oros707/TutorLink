import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function Attendance() {
  const navigation = useNavigation();

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
    <View>
      <Text>Attendance Screen</Text>
      <Button title="Scan QR Code" onPress={handleScanQRCode} />
      <Button title="Enter Link" onPress={handleEnterLink} />
    </View>
  );
}

export default Attendance;
