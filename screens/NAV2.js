import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Attendance from "./Attendance/Attendance";
import Schedule from "./Schedule";
import ClaimNavigator from "./ClaimProcess/ClaimNavigator";
import LogoutNavigator from "../navigation/LogoutNavigator";
import ChatNavigator from "./Chat/ChatNavigator";

const Tab = createBottomTabNavigator();

export default function NAV2() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        initialRouteName="NAV2"
        independent={true}
        screenOptions={{
          tabBarActiveTintColor: "orange",
          tabBarInactiveTintColor: "white",
          tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
          tabBarStyle: { backgroundColor: "black" },
        }}
      >
        <Tab.Screen
          name="ClaimNavigator"
          component={ClaimNavigator}
          options={{
            tabBarLabel: "Claims",
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="file-tray-full-outline"
                size={size}
                color={color}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Attendance"
          component={Attendance}
          options={{
            tabBarLabel: "Attendance",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={Schedule}
          options={{
            tabBarLabel: "Schedule",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="time-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="ChatNavigator"
          component={ChatNavigator}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles-outline" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="LogoutNavigator"
          component={LogoutNavigator}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="user" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
