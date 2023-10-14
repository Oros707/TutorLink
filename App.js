import React from "react";
import { View, StyleSheet } from "react-native";
import NAV1 from "./navigation/NAV1";

export default function App() {
  return (
    <View style={styles.container}>
      <NAV1 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
