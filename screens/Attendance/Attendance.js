import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../Settings/ThemeContext"; // Import the useTheme hook
import Icon from "react-native-vector-icons/FontAwesome"; // Import your icon library
import { TouchableOpacity } from "react-native-gesture-handler";
import AttendanceConfirmation from "./AttendanceConfirmation";

function Attendance() {
  const navigation = useNavigation();
  const { darkMode } = useTheme(); // Use the useTheme hook to get the theme information

  const handleScanQRCode = () => {
    // You can implement QR code scanning here and get the scanned data
    const scannedData = "SomeScannedData"; // Replace with actual scanned data
    navigation.navigate("AttendanceConfirmation", { data: scannedData });
  };

  const handleEnterLink = () => {
    // You can implement entering a link here and get the entered link
    const enteredLink = "https://example.com"; // Replace with actual entered link
    navigation.navigate("AttendanceConfirmation", { data: enteredLink });
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: darkMode ? "#333" : darkMode ? "orange" : "#D9E3F0",
        },
      ]}
    >
      <Image source={require("./3DQRC3.png")} style={styles.image} />

      <View style={styles.btnCont}>
        <TouchableOpacity onPress={handleScanQRCode} style={styles.buttons}>
          <Text style={styles.btnText}> Scan QR Code</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleEnterLink} style={styles.buttons}>
          <Text style={styles.btnText}>Enter Link</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "darkgray", // Set the background color to dark grey
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: "orange", // Set the text color to orange
    // You can add more text styles such as fontFamily, fontWeight, etc.
  },
  image: {
    top: -140,
  },
  buttons: {
    marginBottom: 40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "orange",
    borderRadius: 10,
    marginRight: 20,
    width: "95%",
  },
  btnText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  btnCont: {
    fontSize: 24,
    flexDirection: "row",
    color: "white",
    width: "100%",
    justifyContent: "center",
  },
});

export default Attendance;
