import React from "react";
import { View, StyleSheet } from "react-native";
import NAV1 from "./screens/NAV1";
import { GestureHandlerRootView } from "react-native-gesture-handler";



export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NAV1 />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
