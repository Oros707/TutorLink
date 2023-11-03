import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Bubbles from "../../components/bubbles"; // Updated Bubbles component
import ClaimDetails from "./ClaimDetails";
import { useTheme } from "../Settings/ThemeContext";

export default function Claims({ navigation }) {
  const handleNavigation = () => {
    navigation.navigate(ClaimDetails);
  };

  const { darkMode } = useTheme();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: darkMode ? "#333" : "#D9E3F0" },
      ]}
    >
      <Bubbles darkMode={darkMode} />
      <Image
        style={styles.logo}
        source={require("../../images/UJ_LOGO_BW.png")}
      />

      <Text style={styles.tutor}>
        Process and submit payment <Text style={styles.link}>claims!</Text>
      </Text>

      <TouchableOpacity style={styles.button} onPress={handleNavigation}>
        <Text style={styles.buttonText}>Begin Process</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  tutor: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
  },
  link: {
    color: "orange",
    fontWeight: "bold",
  },
  topic: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  },
  text: {
    color: "white",
    fontWeight: "normal",
    fontSize: 30,
    textAlign: "left",
    marginBottom: 60,
  },
  button: {
    backgroundColor: "orange",
    borderRadius: 50,
    alignItems: "center",
    marginTop: 60,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
