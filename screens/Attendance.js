import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Attendance() {
  const navigation = useNavigation();

  const handleScanQRCode = () => {
    const scannedData = "SomeScannedData";
    navigation.navigate("AttendanceConfirmation", { data: scannedData });
  };

  const handleEnterLink = () => {
    const enteredLink = "https://example.com";
    navigation.navigate("AttendanceConfirmation", { data: enteredLink });
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
