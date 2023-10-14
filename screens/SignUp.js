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

export default function SignUp({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Bubbles />

      <ScrollView style={{ width: "100%", height: "100%" }}>
        <Text style={styles.header}>
          Welcome to the <Text style={styles.link}>UJ</Text> family!
        </Text>
        <Text style={{color: "white", fontSize: 20, top: 100, textAlign: "center"}}>Let's get you signed up!</Text>

        <Image
          style={styles.image}
          source={require("../images/Onboarding/welcome3.png")}
          alt="image"
        />

        <SafeAreaView style={{ width: "100%", top: 50 }}>
          {/* Input fields */}
          <Text style={styles.require}>*</Text>
          <TextInput style={styles.input} placeholder="Enter full name" />
          <Text style={styles.require}>*</Text>
          <TextInput style={styles.input} placeholder="Enter Student no." />
          <Text style={styles.require}>*</Text>
          <TextInput style={styles.input} placeholder="Enter student email" />

          <Text style={styles.require}>*</Text>
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
                size={30}
                color={showPassword ? "red" : "green"}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.req}>*</Text>
          <TextInput
            style={styles.passwordInput}
            placeholder="Confirm Password"
            secureTextEntry={!showPassword}
          />
        </SafeAreaView>

        <ScrollView style={{ width: "100%", marginTop: 70 }}>
          <Text style={styles.forgot}>
            All fields marked with a <Text style={{ color: "red" }}>*</Text> are
            required.
          </Text>

          <TouchableOpacity
            onPress={() => navigation.navigate("NAV2")}
            style={styles.button}
          >
            <Text style={styles.btnText}>Signup</Text>
          </TouchableOpacity>

          {/* Don't have an account?? */}
          <Text style={styles.signInText}>
            Already have an account?{" "}
            <TouchableOpacity
              onPress={() => navigation.navigate("SignIn")}
              style={styles.contButton}
            >
              <Text style={styles.blueText}>Sign In</Text>
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
    width: 100,
    height: 100,
    alignSelf: "center",
    position: "relative",
    top: 130,
  },
  header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
    position: "relative",
    width: "100%",
    top: 90,
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
    position: "relative",
    width: "100%",
    marginTop: 40,
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
  signInText: {
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
    marginTop: 2,
  },
  input: {
    width: "100%",
    color: "black",
    borderRadius: 20,
    marginBottom: 0,
    paddingVertical: 10,
    paddingHorizontal: 20,
    fontSize: 23,
    backgroundColor: "white",
    top: 90,
  },
  passwordContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 90,
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
    top: 0,
  },
  togglePasswordVisibility: {
    justifyContent: "center",
    alignItems: "center",
    flex: -1,
    left: -10,
    top: 0,
    paddingHorizontal: 5,
  },
  require: {
    color: "red",
    fontSize: 25,
    top: 93,
    padding: 0,
    paddingLeft: 13,
  },
  req: {
    color: "red",
    fontSize: 25,
    top: 3,
    padding: 0,
    paddingLeft: 13,
  },
});