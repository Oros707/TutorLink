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

export default function SignIn({ navigation }) {
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

      <Text style={styles.forgot}>Forgot password?</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate("NAV2")}
        style={styles.button}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      {/* Don't have an account?? */}
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("SignUp")}
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={styles.signupText}>Don't have an account? </Text>
          <Text style={styles.blueText}>Sign Up</Text>
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
  forgot: {
    fontSize: 18,
    color: "white",
    marginTop: 20,
    alignSelf: "flex-end",
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
