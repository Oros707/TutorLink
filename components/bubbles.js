import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from '../screens/Settings/ThemeContext'; // Import the useTheme hook

export default function Bubbles({ darkMode }) {
  const { darkMode: themeDarkMode } = useTheme();
  const isDarkMode = darkMode ?? themeDarkMode; // Use the prop if provided, otherwise use the theme

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? 'black' : '#D9E3F0' }]}>
      <View style={styles.circle1}></View>
      <View style={styles.circle2}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    left: -100,
  },
  circle2: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "rgba(255, 165, 0, 0.7)",
    position: "absolute",
    top: -120,
    left: -30,
  },
});
