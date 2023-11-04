import React from "react";
import { View, StyleSheet, LogBox } from "react-native";
import NAV1 from "./screens/NAV1";
import { ThemeProvider } from "./screens/Settings/ThemeProvider";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  LogBox.ignoreAllLogs();

  return (
    <ThemeProvider>
      <GestureHandlerRootView style={styles.container}>
        <NAV1 />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});
