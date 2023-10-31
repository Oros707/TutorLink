import React from "react";
import { View, StyleSheet } from "react-native";
import NAV2 from "./screens/NAV2";
import { GestureHandlerRootView } from "react-native-gesture-handler";



export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <NAV2 />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});
