import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabs from "./BottomTabs";
import SplashScreen from "../screens/SplashScreen";
import OB1 from "../screens/OB1";
import OB2 from "../screens/OB2";
import OB3 from "../screens/OB3";
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";


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
          name="BottomTab"
          component={BottomTabs}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
