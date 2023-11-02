import React, { useState, useEffect } from "react";
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "./SplashScreen";
import OB1 from "./OB1";
import OB2 from "./OB2";
import OB3 from "./OB3";
import NAV2 from "./NAV2";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPassword from "./ForgotPassword";
import AdminPage from "./AdminPage";
import ProfilePage from "./ProfilePage";
import AdminNavigator from "./AdminNavigator";
import Settings from "./Settings/Settings";
import { EventRegister } from "react-native-event-listeners";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useTheme } from "./Settings/ThemeContext";
import useAuth from "../hooks/useAuth";
const Stack = createStackNavigator();

export default function NAV1() {
  const { darkMode } = useTheme();

  useEffect(() => {
    AsyncStorage.getItem("theme").then((themePreference) => {
      if (themePreference !== null) {
        setDarkMode(themePreference === "dark");
      }
    });

    const listener = EventRegister.addEventListener("changeTheme", (data) => {
      setDarkMode(data);
    });

    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, []);

  const { user } = useAuth();

  return (
    <NavigationContainer
      theme={darkMode ? DarkTheme : DefaultTheme}
    >
      {
        user ? <NAV2/> : <StackNavigator />
      }
    </NavigationContainer>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OB1"
        component={OB1}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OB2"
        component={OB2}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="OB3"
        component={OB3}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AdminNavigator"
        component={AdminNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
