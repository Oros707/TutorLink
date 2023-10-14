import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import Bubbles from "../components/bubbles";
import { Feather } from "@expo/vector-icons";

export default function SignUp({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Bubbles />

      <Text style={styles.tutor}>
        Tutor<Text style={styles.link}>Link!</Text>
      </Text>

      <Image
        style={styles.image}
        source={require("../images/Onboarding/login.png")}
        alt="image"
      />

      <SafeAreaView style={styles.inputContainer}>
        {/* Full Name */}
        <TextInput style={styles.input} placeholder="Full Name" />
        {/* Student Number */}
        <TextInput style={styles.input} placeholder="Student Number" />
        {/* Student Email */}
        <TextInput style={styles.input} placeholder="Student Email" />
        {/* Create Password */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Create Password"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity
            style={styles.togglePasswordVisibility}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Feather
              name={showPassword ? "eye" : "eye-off"}
              size={24}
              color="grey"
            />
          </TouchableOpacity>
        </View>
        {/* Confirm Password */}
        <TextInput style={styles.input} placeholder="Confirm Password" />
      </SafeAreaView>

      <TouchableOpacity
        onPress={() => navigation.navigate("BottomTab")}
        style={styles.button}
      >
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Already have an account?? */}
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignIn")}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.signupText}>Already have an account? </Text>
          <Text style={styles.blueText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
  tutor: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
    marginTop: 20,
  },
  link: {
    color: "orange",
    fontWeight: "bold",
  },
  button: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    backgroundColor: "orange",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    width: "100%",
    marginTop: 20,
    marginBottom: 20,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    marginTop: 20,
  },
  input: {
    width: "100%",
    color: "black",
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 20,
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
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  passwordInput: {
    flex: 1,
    color: "black",
    fontSize: 23,
  },
  togglePasswordVisibility: {
    paddingHorizontal: 10,
  },
  signupText: {
    color: "white",
    fontSize: 18,
  },
  blueText: {
    color: "lightblue",
    fontSize: 18,
  },
});
