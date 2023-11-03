import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RNCamera } from "react-native-camera";
import firebase from "@react-native-firebase/app";
import AttendanceConfirmation from "./AttendanceConfirmation";

function QRCodeScanner() {
  const [scanned, setScanned] = useState(false);

  const handleBarCodeScanned = async ({ data }) => {
    if (!scanned) {
      setScanned(true);

      const timestamp = firebase.firestore.FieldValue.serverTimestamp();
      const scannedData = {
        data,
        timestamp,
      };

      try {
        const docRef = await firebase
          .firestore()
          .collection("scannedData")
          .add(scannedData);
        console.log("Data saved to Firestore with ID: ", docRef.id);
      } catch (error) {
        console.error("Error saving data to Firestore: ", error);
      }

      navigation.navigate("AttendanceConfirmation", { data });
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera style={styles.camera} onBarCodeRead={handleBarCodeScanned} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
});

export default QRCodeScanner;
