import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import {
//   SplashScreen,
//   OB1,
//   OB2,
//   OB3,
//   SignIn,
//   SignUp,
// } from "../screens";
import SplashScreen from "./splashscreen";
import OB1 from "./OB1";
import OB2 from "./OB2";
import OB3 from "./OB3";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import NAV2 from "./NAV2";

const Stack = createStackNavigator();

export default function NAV1() {
  return (
    <NavigationContainer>
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
          name="SignIn"
          component={SignIn}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NAV2"
          component={NAV2}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
