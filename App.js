import React from "react";
import { View, StyleSheet } from "react-native";
import AppNav from "./navigation/AppNav";
export default function App() {
  return (
    <View style={styles.container}>
      <AppNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
