import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../Settings/ThemeContext'; // Import the useTheme hook
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AntDesign } from "react-native-vector-icons";
import Bubbles from "../../components/bubbles";

function Attendance() {
  const navigation = useNavigation();
  const { darkMode } = useTheme();


  const handleScanQRCode = () => {
    navigation.navigate("QRCodeScanner");
  };

  const attendanceHistory = () => {
    navigation.navigate("AttendanceHistory");
  };

  return (
    <View style={[
          styles.container,
          {
            backgroundColor: darkMode
              ? "#33"
              : darkMode
              ? "orange"
              : "#D9E3F0",
          },
        ]}>
        <Bubbles />
        <AntDesign
          name="qrcode"
          size={230}
          color={"orange"}
          style={styles.image}
        />
        <View style={styles.btnCont}>
          <TouchableOpacity onPress={handleScanQRCode} style={styles.buttons}>
            <Text style={styles.btnText}> Scan QR Code</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={attendanceHistory} style={styles.buttons}>
            <Text style={styles.btnText}>History</Text>
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
    top: -40,
  },
  buttons: {
    marginBottom: 40,
    paddingHorizontal: 20,
    marginHorizontal: "100%",
    paddingVertical: 10,
    backgroundColor: "orange",
    borderRadius: 10,
    width: "100%",
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  btnCont: {
    color: "white",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    top: 150,
  },
});

export default Attendance;
