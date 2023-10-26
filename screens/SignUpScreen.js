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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { themeColors } from "../theme";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigation.navigate("LoginScreen");
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
                source={require("../assets/images/signup.png")}
                style={{ width: 165, height: 110 }}
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
              <Text style={{ color: "gray", marginBottom: 4 }}>Full Name</Text>
              <TextInput
                style={{
                  padding: 12,
                  backgroundColor: "#F5F5F5",
                  color: "black",
                  borderRadius: 10,
                  marginBottom: 12,
                }}
                placeholder="Enter Name"
              />
              <Text style={{ color: "gray", marginBottom: 4 }}>
                Email Address
              </Text>
              <TextInput
                style={{
                  padding: 12,
                  backgroundColor: "#F5F5F5",
                  color: "black",
                  borderRadius: 10,
                  marginBottom: 12,
                }}
                value={email}
                onChangeText={(value) => setEmail(value)}
                placeholder="Enter Email"
              />
              <Text style={{ color: "gray", marginBottom: 4 }}>Password</Text>
              <TextInput
                style={{
                  padding: 12,
                  backgroundColor: "#F5F5F5",
                  color: "black",
                  borderRadius: 10,
                  marginBottom: 16,
                }}
                secureTextEntry
                value={password}
                onChangeText={(value) => setPassword(value)}
                placeholder="Enter Password"
              />
              <TouchableOpacity
                style={{
                  padding: 14,
                  backgroundColor: "yellow",
                  borderRadius: 10,
                }}
                onPress={handleSubmit}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "gray",
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                fontSize: 20,
                color: "gray",
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 5,
              }}
            >
              Or
            </Text>
            <View
              style={{
                marginBottom: 80,
                flexDirection: "row",
                justifyContent: "center",
                marginVertical: 12,
              }}
            >
              <TouchableOpacity
                style={{
                  padding: 12,
                  backgroundColor: "gray",
                  borderRadius: 10,
                  marginRight: 16,
                }}
              >
                <Image
                  source={require("../assets/icons/google.png")}
                  style={{ width: 40, height: 40 }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 12,
                  backgroundColor: "gray",
                  borderRadius: 10,
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
                marginTop: 12,
              }}
            >
              <Text
                style={{
                  color: "gray",
                  fontWeight: "bold",
                  marginBottom: 30,
                }}
              >
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("LoginScreen")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: "yellow",
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
