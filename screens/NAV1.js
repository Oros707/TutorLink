import React, {useState, useEffect} from "react";
import { NavigationContainer, DarkTheme, DefaultTheme  } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SplashScreen, OB1, OB2, OB3, NAV2 } from "../screens";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import ForgotPassword from "./ForgotPassword";
import AdminPage from "./AdminPage";
import ProfilePage from "./ProfilePage";
import AdminNavigator from "./AdminNavigator";
import Settings from './Settings/Settings';
import { EventRegister } from 'react-native-event-listeners';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from './Settings/ThemeContext'; // Import the useTheme hook


const Stack = createStackNavigator();

export default function NAV1() {
  const { darkMode } = useTheme(); // Use the useTheme hook to access the theme

  useEffect(() => {
    // Retrieve the theme preference from AsyncStorage on component mount
    AsyncStorage.getItem('theme').then((themePreference) => {
      if (themePreference !== null) {
        setDarkMode(themePreference === 'dark');
      }
    });

    const listener = EventRegister.addEventListener('changeTheme', (data) => {
      setDarkMode(data);
    });

    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, []);

  return (
    <NavigationContainer theme={darkMode ? DarkTheme : DefaultTheme}>
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
          name="NAV2"
          component={NAV2}
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
        <Stack.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
