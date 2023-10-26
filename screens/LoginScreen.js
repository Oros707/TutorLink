import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { themeColors } from "../theme";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate("NAV2");
      } catch (err) {
        console.log("got error: ", err.message);
      }
    }
  };

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
            >
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  backgroundColor: "yellow",
                  padding: 2,
                  borderTopRightRadius: 20,
                  borderBottomLeftRadius: 20,
                  marginLeft: 4,
                }}
              >
                <ArrowLeftIcon size="20" color="black" />
              </TouchableOpacity>
            </View>
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
              padding: 16, // Increased padding for better spacing
            }}
          >
            <View>
              <TextInput
                style={{
                  padding: 12, // Increased padding for better input field size
                  backgroundColor: "#F5F5F5", // Light gray background
                  borderRadius: 10, // Rounded corners
                  marginBottom: 12, // Increased margin for spacing
                }}
                placeholder="email"
                value={email}
                onChangeText={(value) => setEmail(value)}
              />
              <TextInput
                style={{
                  padding: 12, // Increased padding for better input field size
                  backgroundColor: "#F5F5F5", // Light gray background
                  borderRadius: 10, // Rounded corners
                  marginBottom: 16, // Increased margin for spacing
                }}
                secureTextEntry
                placeholder="password"
                value={password}
                onChangeText={(value) => setPassword(value)}
              />
              <TouchableOpacity
                onPress={handleSubmit}
                style={{
                  padding: 14, // Increased padding for better button size
                  backgroundColor: "yellow",
                  borderRadius: 10, // Rounded corners
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "gray",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <View
              style={{
                marginBottom: 80,
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 20, color: "gray", fontWeight: "bold" }}>
                Or
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginVertical: 12, // Increased margin for spacing
                }}
              >
                <TouchableOpacity
                  style={{
                    padding: 12, // Increased padding for better button size
                    backgroundColor: "gray",
                    borderRadius: 10, // Rounded corners
                    marginRight: 16, // Increased margin for spacing
                  }}
                >
                  <Image
                    source={require("../assets/icons/google.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    padding: 12, // Increased padding for better button size
                    backgroundColor: "gray",
                    borderRadius: 10, // Rounded corners
                  }}
                >
                  <Image
                    source={require("../assets/icons/apple.png")}
                    style={{ width: 40, height: 40 }}
                  />
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 12, // Increased margin for spacing
                }}
              >
                <Text style={{ color: "gray", fontWeight: "bold" }}>
                  Don't have an account?
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("SignUpScreen")}
                >
                  <Text style={{ fontWeight: "bold", color: "yellow" }}>
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
