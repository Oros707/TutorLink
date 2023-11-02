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
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { themeColors } from "../theme";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [userDisplayName, setUserDisplayName] = useState(""); 

  const errorMessages = {
    "auth/user-not-found": "User not found. Please check your email.",
    "auth/invalid-email": "Invalid email. Please check your email address.",
    "auth/invalid-login-credentials": "Incorrect password. Please try again.",
    "auth/too-many-requests":
      "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or try again later.",
  };

  const handleSubmit = async () => {
    if (email && password) {
      try {
        setLoading(true);
        setError(null);
        await signInWithEmailAndPassword(auth, email, password);

        const user = auth.currentUser;
        if (user) {
          setUserDisplayName(user.displayName || "Unknown User");

          navigation.navigate("Claims", { userDisplayName });
        }
        // Check if the email is "NomsaAdmin@gmail.com" and redirect to the AdminPage
        if (email.toLowerCase() === "nomsaadmin@gmail.com") {
          navigation.navigate("AdminNavigator");
        } else {
          navigation.replace("NAV2");
        }
      } catch (err) {
        console.log("got error: ", err.message);
        setError(errorMessages[err.code] || err.message);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    setError(null);
    setLoading(false);
  }, [email, password]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.bg }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={{ flex: 1, justifyContent: "space-between" }}>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-start",
                padding: 8,
              }}
            ></View>
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Image
                source={require("../assets/images/login.png")}
                style={{ width: 200, height: 200 }}
              />
            </View>
          </View>
          <View
            style={{
              borderTopLeftRadius: 50,
              borderTopRightRadius: 50,
              backgroundColor: "white",
              padding: 16,
            }}
          >
            <View>
              <TextInput
                style={{
                  padding: 12,
                  backgroundColor: "#F5F5F5",
                  borderRadius: 10,
                  marginBottom: 12,
                }}
                placeholder="Email"
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
              <TextInput
                style={{
                  padding: 12,
                  backgroundColor: "#F5F5F5",
                  borderRadius: 10,
                  marginBottom: 16,
                }}
                secureTextEntry
                placeholder="Password"
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
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
                style={{ color: "red", textAlign: "center", marginTop: 12 }}
              >
                {error}
              </Text>
            )}

            <TouchableOpacity
              style={{ alignItems: "flex-end", marginTop: 10, height: 20 }}
              onPress={() => navigation.navigate("ForgotPassword")}
            >
              <Text style={{ fontSize: 15, color: "gray", fontWeight: "bold" }}>
                Forgot Password?
              </Text>
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
              >
                <TouchableOpacity
                  style={{
                    padding: 12,
                    borderRadius: 10,
                  }}
                >
                  <Image
                    source={require("../assets/icons/google.png")}
                    style={{ height: 48, width: 48 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 12,
                    borderRadius: 10,
                  }}
                >
                  <AntDesign name="apple1" size={48} color="black" />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 12,
                }}
              >
                <Text style={{ color: "gray", fontWeight: "bold" }}>
                  Don't have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SignUpScreen")}
                >
                  <Text style={{ fontWeight: "bold", color: "orange" }}>
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
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    justifyContent: "center",
    alignItems: "center",
  },
});
