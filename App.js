import React from "react";
import { View, StyleSheet } from "react-native";
import NAV1 from "./screens/NAV1";
import { ThemeProvider } from './screens/Settings/ThemeProvider';



export default function App() {
  return (
    <ThemeProvider>
    <View style={styles.container}>
      <NAV1 />
    </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
});


