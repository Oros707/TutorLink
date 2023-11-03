import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AdminPage from "./AdminPage";
import Users from "./Users";
import AdminClaims from "./AdminClaims";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
const Tab = createBottomTabNavigator();

const AdminNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AdminPage"
        component={AdminPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="admin-panel-settings" size={24} color="#333" />
          ),
        }}
      ></Tab.Screen>

      <Tab.Screen
        name="Users"
        component={Users}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="users" size={24} color="#333" />
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Claims"
        component={AdminClaims}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="typewriter" size={24} color="#333" />
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

export default AdminNavigator;
