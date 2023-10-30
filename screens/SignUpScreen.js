import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth,db } from "../config/firebase";
import { themeColors } from "../theme";
import { addDoc, collection, doc, setDoc } from '@firebase/firestore';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(""); // Add phoneNumber state
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const errorMessages = {
    "auth/email-already-in-use":
      "This email address is already associated with an account. Sign in if it's your account.",
    "auth/invalid-email": "Invalid email. Please check your email address.",
    "auth/too-many-requests":
      "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or try again later.",
  };

  const validateEmail = (email) => {
    // Simple email validation using a regular expression
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    // Simple phone number validation to ensure it contains exactly 10 digits
    return /^\d{10}$/.test(phoneNumber);
  };

  const handleSubmit = async () => {
    if (!fullName || !email || !password || !phoneNumber) {
      setError("Please fill in all the fields.");
      return;
    }
  
    if (!validateEmail(email)) {
      setError("Invalid email format. Please check your email address.");
      return;
    }
  
    if (!validatePhoneNumber(phoneNumber)) {
      setError("Phone number must contain 10 digits.");
      return;
    }
  
    if (email.toLowerCase() === "nomsaadmin@gmail.com") {
      setError("Sign-up with this email is restricted.");
      return;
    }
  
    try {
      createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;

                    // Saving user data in Firestore
                    setDoc(doc(db, "users", user.uid), {
                      email: email,
                      fullName: fullName,
                      phoneNumber:phoneNumber
                      // Avoid saving the password in Firestore
                    }).then(() => {
                      // Navigate after successfully adding to Firestore

                      navigation.navigate("LoginScreen");
                      setEmail("");
                      setFullName("");
                      setPassword("");
                      setPhoneNumber("")
                    });
                })

                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.log(errorMessage);
                    console.log(errorCode)

                });
    } catch (err) {
      console.log("Error: ", err.message);
      setError(errorMessages[err.code] || err.message);
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
                  backgroundColor: "orange",
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
                value={fullName}
                onChangeText={(value) => setFullName(value)}
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
              <Text style={{ color: "gray", marginBottom: 4 }}>
                Phone Number
              </Text>
              <TextInput
                style={{
                  padding: 12,
                  backgroundColor: "#F5F5F5",
                  color: "black",
                  borderRadius: 10,
                  marginBottom: 12,
                }}
                value={phoneNumber}
                onChangeText={(value) => setPhoneNumber(value)}
                placeholder="Enter Phone Number"
                keyboardType="numeric"
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
                  backgroundColor: "orange",
                  borderRadius: 10,
                }}
                onPress={handleSubmit}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: "white",
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
            {error && (
              <Text
                style={{ color: "red", textAlign: "center", marginTop: 12 }}
              >
                {error}
              </Text>
            )}
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                textAlign: "center",
                paddingTop: 5,
                color: "gray",
                marginVertical: 12,
              }}
            >
              Or
            </Text>
            <View
              style={{
                marginBottom: 60,
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
                  style={{ height: 48 }}
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
                    color: "orange",
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
