import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import QRCodeScanner from "./QRCodeScanner";
import Attendance from "./Attendance";
import AttendanceHistory from "./AttendanceHistory";

const Stack = createStackNavigator();

const AttNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="AttNavigator"
      screenOptions={{ backgroundColor: "#333" }}
    >
      <Stack.Screen
        name="Attendance"
        component={Attendance}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="QRCodeScanner"
        component={QRCodeScanner}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="AttendanceHistory"
        component={AttendanceHistory}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};
export default AttNavigator;
