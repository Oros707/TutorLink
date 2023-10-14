import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SplashScreen,
  OB1,
  OB2,
  OB3,
  SignIn,
  SignUp,
} from "../screens";

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
        {/* <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
