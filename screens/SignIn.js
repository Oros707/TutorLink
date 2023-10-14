import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TextInput,
} from "react-native";
import Bubbles from "../components/bubbles";
import { Feather } from "@expo/vector-icons";

export default function SignIn({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Bubbles />

      <ScrollView style={{ width: "100%", height: "100%" }}>
        <Text style={styles.tutor}>
          Tutor<Text style={styles.link}>Link!</Text>
        </Text>

        <Image
          style={styles.image}
          source={require("../images/Onboarding/login.png")}
          alt="image"
        />

        <SafeAreaView style={{ width: "100%", top: 230 }}>
          {/* Input fields */}
          <TextInput style={styles.input} placeholder="Enter student email" />
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter Password"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.togglePasswordVisibility}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Feather
                name={showPassword ? "eye" : "eye-off"}
                size={30}
                color={showPassword ? "red" : "green"}
              />
            </TouchableOpacity>
          </View>
        </SafeAreaView>

        <ScrollView style={{ width: "100%", marginTop: 210 }}>
          <Text style={styles.forgot}>Forgot password?</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("NAV2")}
            style={styles.button}
          >
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>

          {/* Don't have an account?? */}
          <Text style={styles.signupText}>
            Don't have an account?{" "}
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              style={styles.contButton}
            >
              <Text style={styles.blueText}>Sign Up</Text>
            </TouchableOpacity>
          </Text>
        </ScrollView>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    position: "relative",
    top: 200,
  },
  tutor: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
    position: "relative",
    width: "100%",
    top: 140,
  },
  link: {
    color: "orange",
    fontWeight: "bold",
  },
  topic: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    marginTop: 300,
  },
  button: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    backgroundColor: "orange",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    position: "relative",
    width: "100%",
    marginTop: 140,
    marginBottom: 30,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
  },
  text: {
    fontFamily: "sans-serif",
    fontSize: 27,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    textAlign: "left",
  },
  signupText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
  },
  blueText: {
    color: "lightblue",
    textAlign: "center",
    fontSize: 18,
    top: 4,
  },
  forgot: {
    textAlign: "center",
    fontSize: 18,
    color: "lavender",
    width: "100%",
    marginTop: 12,
  },
  input: {
    width: "100%",
    color: "black",
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 23,
    backgroundColor: "white",
  },
  passwordContainer: {
    flexDirection: "row",
    width: "100%",
    marginBottom: 20,
    borderRadius: 20,
    borderColor: "white",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
  },
  passwordInput: {
    flex: 1,
    color: "black",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 23,
    backgroundColor: "white",
  },
  togglePasswordVisibility: {
    justifyContent: "center",
    alignItems: "center",
    flex: -1,
    left: -10,
    top: 0,
    paddingHorizontal: 5,
  },
});