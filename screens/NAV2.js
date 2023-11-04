import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useTheme } from "./Settings/ThemeContext"; // Import the useTheme hook
import Attendance from "./Attendance/Attendance";
import Schedule from "./Schedule";
import ClaimNavigator from "./ClaimProcess/ClaimNavigator";
import ChatNavigator from "./Chat/ChatNavigator";
import SettingsNavigation from "./SettingsNavigation";
import AttNavigator from "./Attendance/AttendanceNavigation";

const Tab = createBottomTabNavigator();

export default function NAV2() {
  const { darkMode } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="NAV2"
      independent={true}
      screenOptions={{
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: darkMode ? "white" : "#333",
        tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
        tabBarStyle: { backgroundColor: darkMode ? "#333" : "#D9E3F0" },
      }}
    >
      <Tab.Screen
        name="ClaimNavigator"
        component={ClaimNavigator}
        options={{
          tabBarLabel: "Claims",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="file-tray-full-outline" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Attendance"
        component={AttNavigator}
        options={{
          tabBarLabel: "Attendance",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
          headerShown: false,
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
          headerShown: false,
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
        name="SettingsNavigation"
        component={SettingsNavigation}
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
