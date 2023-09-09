import React from "react";
import { View, StyleSheet } from "react-native";

export default function Bubbles() {
  return (
    <View style={styles.container}>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: "left",
    alignItems: "left",
    backgroundColor: "black", // Set the background color of your screen
  },
  circle1: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(255, 165, 0, 0.7)", // Color of the first circle
    position: "absolute",
    top: -150, // Adjust the position as needed
    left: -150, // Adjust the position as needed
  },
  circle2: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(255, 165, 0, 0.7)", // Color of the second circle
    position: "absolute",
    top: -250, // Adjust the position as needed
    left: -50, // Adjust the position as needed
  },
});