import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
} from "firebase/auth";
import { auth, db } from "../config/firebase";
import { themeColors } from "../theme";
import { addDoc, collection, doc, setDoc } from "@firebase/firestore";
import { updateProfile } from "firebase/auth";
import { useTheme } from "./Settings/ThemeContext";

export default function SignUpScreen() {
  const navigation = useNavigation();
  const { darkMode } = useTheme();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [loading, setLoading] = useState(false);

  const errorMessages = {
    "auth/email-already-in-use":
      "This email address is already associated with an account. Sign in if it's your account.",
    "auth/invalid-email": "Invalid email. Please check your email address.",
    "auth/too-many-requests":
      "Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or try again later.",
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    return /^\d{10}$/.test(phoneNumber);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
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
      setLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          return updateProfile(user, {
            displayName: fullName,
            photoURL:
              "https://static.vecteezy.com/system/resources/previews/008/442/086/non_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
          })
            .then(() => {
              return setDoc(doc(db, "users", user.uid), {
                email: email,
                fullName: fullName,
                phoneNumber: phoneNumber,
              });
            })
            .then(() => {
              navigation.navigate("LoginScreen");
              setEmail("");
              setFullName("");
              setPassword("");
              setPhoneNumber("");
              setLoading(false);
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorMessage);
              console.log(errorCode);
              setLoading(false);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          console.log(errorCode);
          setLoading(false);
        });
    } catch (err) {
      console.log("Error: ", err.message);
      setError(errorMessages[err.code] || err.message);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: darkMode ? "#333" : themeColors.bg }}
    >
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
                  backgroundColor: darkMode ? "orange" : "orange",
                  padding: 2,
                  borderTopRightRadius: 20,
                  borderBottomLeftRadius: 20,
                  marginLeft: 4,
                }}
              >
                <ArrowLeftIcon size="20" color={darkMode ? "#333" : "white"} />
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
              backgroundColor: darkMode ? "#333" : "white",
              padding: 16,
            }}
          >
            <View>
              <Text style={{ color: "gray", marginBottom: 4 }}>Full Name</Text>
              <TextInput
                style={{
                  padding: 12,
                  backgroundColor: darkMode ? "#181818" : "#F5F5F5",
                  color: darkMode ? "white" : "#333",
                  borderRadius: 10,
                  marginBottom: 12,
                }}
                placeholder="Enter Name"
                value={fullName}
                onChangeText={(value) => setFullName(value)}
                placeholderTextColor={darkMode ? "white" : "#333"}
              />
              <Text style={{ color: "gray", marginBottom: 4 }}>
                Email Address
              </Text>
              <TextInput
                style={{
                  padding: 12,
                  backgroundColor: darkMode ? "#181818" : "#F5F5F5",
                  color: darkMode ? "white" : "#333",
                  borderRadius: 10,
                  marginBottom: 12,
                }}
                value={email}
                onChangeText={(value) => setEmail(value)}
                placeholder="Enter Email"
                placeholderTextColor={darkMode ? "white" : "#333"}
              />
              <Text style={{ color: "gray", marginBottom: 4 }}>
                Phone Number
              </Text>
              <TextInput
                style={{
                  padding: 12,
                  backgroundColor: darkMode ? "#181818" : "#F5F5F5",
                  color: darkMode ? "white" : "#333",
                  borderRadius: 10,
                  marginBottom: 12,
                }}
                value={phoneNumber}
                onChangeText={(value) => setPhoneNumber(value)}
                placeholder="Enter Phone Number"
                keyboardType="numeric"
                placeholderTextColor={darkMode ? "white" : "#333"}
              />
              <View>
                <Text style={{ color: "gray", marginBottom: 4 }}>Password</Text>
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
              </View>

              <TouchableOpacity
                style={{
                  padding: 14,
                  backgroundColor: darkMode ? "orange" : "orange",
                  borderRadius: 10,
                }}
                onPress={handleSubmit}
                disabled={loading} // Disable button when loading
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    color: darkMode ? "#333" : "white",
                  }}
                >
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
            {error && (
              <Text
                style={{
                  color: "red",
                  textAlign: "center",
                  marginTop: 12,
                  color: "red",
                }}
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
            />
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
                  color: darkMode ? "white" : "gray",
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
                    color: darkMode ? "orange" : "orange",
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
