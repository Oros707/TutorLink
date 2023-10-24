import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Attendance from "./screens/Attendance/Attendance";
import Schedule from "./screens/Schedule";
import Chat from "./screens/Chat/Chat";
import { Ionicons } from "@expo/vector-icons";
import ClaimNavigator from "./screens/ClaimProcess/ClaimNavigator";
import AppNav from "./navigation/AppNav";

const Tab = createBottomTabNavigator();

export default function NAV2() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="NAV1"
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
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: "Chat",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
