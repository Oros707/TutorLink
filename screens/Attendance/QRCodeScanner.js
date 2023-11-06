import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { BarCodeScanner } from "expo-barcode-scanner";
import { db } from "../../config/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function QRCodeScanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(false);
  const [scanData, setScanData] = useState(null);
  const [scanningComplete, setScanningComplete] = useState(false);
  const [isScanning, setIsScanning] = useState(false); // Add isScanning state

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (!hasPermission) {
    return (
      <View style={styles.container}>
        <Text>Please grant camera permissions to the app.</Text>
      </View>
    );
  }

  const handleBarCodeScanned = async ({ type, data }) => {
    if (!isScanning) {
      // Check if not currently scanning
      setIsScanning(true); // Set scanning to true

      const timestamp = new Date().toLocaleString();
      const [date, time] = timestamp.split(", ");

      const attendanceData = {
        Date: date,
        Time: time,
        QRData: data,
      };

      try {
        const docRef = await addDoc(
          collection(db, "Attendance"),
          attendanceData
        );
        console.log("Data saved to Firebase with ID:", docRef.id);
      } catch (error) {
        console.error("Error saving data to Firebase: ", error);
      }
      setScanData(attendanceData);
      setScanningComplete(true);
      setIsScanning(false); // Reset scanning to false
    }
  };

  return (
    <View style={styles.container}>
      <BarCodeScanner
        style={StyleSheet.absoluteFillObject}
        onBarCodeScanned={scanData ? undefined : handleBarCodeScanned}
      />
      {scanData && (
        <View
          style={{
            borderRadius: 10,
            backgroundColor: "rgba(255,255,255,0.5)",
            padding: 10,
          }}
        >
          <Text style={styles.text}>Scanned Data: {scanData.QRData}</Text>
          <Text style={styles.text}>Date: {scanData.Date}</Text>
          <Text style={styles.text}>Time: {scanData.Time}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setScanData(null)}
          >
            <Text style={styles.buttonText}>Scan Again?</Text>
          </TouchableOpacity>
          {scanningComplete && (
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("AttendanceHistory")}
            >
              <Text style={styles.buttonText}>Done!</Text>
            </TouchableOpacity>
          )}
        </View>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  camera: {
    width: "100%",
    height: "100%",
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  button: {
    backgroundColor: "orange",
    marginTop: 5,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});