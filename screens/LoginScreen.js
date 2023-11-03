import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useTheme } from "./Settings/ThemeContext"; // Import the useTheme hook
import { themeColors } from "../theme";

export default function LoginScreen() {
  const navigation = useNavigation();
  const { darkMode } = useTheme(); // Use the useTheme hook to get the theme information
  const [userDisplayName, setUserDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const errorMessages = {
    "auth/user-not-found": "User not found. Please check your email.",
    "auth/invalid-email": "Invalid email. Please check your email address.",
    "auth/invalid-login-credentials": "Incorrect password. Please try again.",
    "auth/too-many-requests":
      "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or try again later.",
  };

  const handleSubmit = async () => {
    if (!email || !password) {
      setError("Please fill in both email and password fields.");
      return;
    }

    try {
      setLoading(true);
      setError(null);
      await signInWithEmailAndPassword(auth, email, password);

      const user = auth.currentUser;
      if (user) {
        setUserDisplayName(user.displayName || "Unknown User");

        navigation.navigate("Claims", { userDisplayName });
      }

      if (email.toLowerCase() === "nomsaadmin@gmail.com") {
        navigation.navigate("AdminNavigator");
      }
    } catch (err) {
      console.log("got error: ", err.message);
      setError(errorMessages[err.code] || err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    setError(null);
    setLoading(false);
  }, [email, password]);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: darkMode ? "#333" : "#D9E3F0",
        }}
      >
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                padding: 8,
              }}
            ></View>
            <View>
              <Image
                source={require("../images/Onboarding/loginvidunscreen.gif")}
                style={styles.image}
              />
            </View>
          </View>
          <View
            style={{
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              backgroundColor: darkMode ? "#333" : "#D9E3F0",
              padding: 36,
              position: "relative",
              bottom: 50,
            }}
          >
            <View>
              <TextInput
                style={{
                  padding: 12,
                  backgroundColor: darkMode ? "#181818" : "#F5F5F5",
                  borderRadius: 10,
                  marginBottom: 12,
                }}
                placeholder="Email"
                value={email}
                onChangeText={(value) => setEmail(value)}
                placeholderTextColor={darkMode ? "white" : "gray"}
                color={darkMode ? "white" : "#333"}
              />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingHorizontal: 10,
                  backgroundColor: "#F5F5F5",
                  color: "#333",
                  borderRadius: 10,
                  marginBottom: 16,
                }}
              >
                <TextInput
                  style={{
                    flex: 1,
                  }}
                  secureTextEntry={passwordVisible}
                  value={password}
                  onChangeText={(value) => setPassword(value)}
                  placeholder="Enter Password"
                />
                <TouchableOpacity onPress={togglePasswordVisibility}>
                  <Feather
                    name={passwordVisible ? "eye" : "eye-off"}
                    size={20}
                    color="gray"
                    style={{ padding: 10 }}
                  />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  padding: 14,
                  backgroundColor: "orange",
                  borderRadius: 10,
                }}
                disabled={loading}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
              {loading && (
                <View style={styles.overlay}>
                  <ActivityIndicator size="large" color="orange" />
                </View>
              )}
            </View>
            {error && (
              <Text
                style={{
                  color: "red",
                  textAlign: "center",
                  marginTop: 12,
                  color: darkMode ? "white" : "red",
                }}
              >
                {error}
              </Text>
            )}

            <TouchableOpacity
              style={{ alignItems: "flex-end", marginTop: 10, height: 20 }}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={styles.password}>Forgot Password?</Text>
            </TouchableOpacity>
            <View
              style={{
                marginBottom: 80,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  color: "gray",
                  fontWeight: "bold",
                  marginVertical: 12,
                }}
              >
                Or
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              ></View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 12,
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    color: "gray",
                    fontWeight: "bold",
                    marginRight: 2,
                    color: darkMode ? "white" : "gray",
                  }}
                >
                  Don't have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SignUpScreen")}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      color: "orange",
                    }}
                  >
                    Sign Up
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 300,
    borderRadius: 30,
    resizeMode: "cover",
    position: "relative",
    bottom: 20,
  },
  password: {
    fontSize: 15,
    color: "gray",
    fontWeight: "bold",
    marginRight: 90,
  },
});
