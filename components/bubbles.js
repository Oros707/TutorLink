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
    flex: -1,
    justifyContent: "left",
    alignItems: "left",
    backgroundColor: "black",
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  circle1: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(255, 165, 0, 0.7)",
    position: "absolute",
    top: 10,
    left: -130,
  },
  circle2: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(255, 165, 0, 0.7)",
    position: "absolute",
    top: -100,
    left: -50,
  },
});