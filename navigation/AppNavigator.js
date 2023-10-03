import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import SplashScreen from "../screens/SplashScreen";
import Claims from "../screens/ClaimProcess/Claims";
import Attendance from "../screens/Attendance";
import Schedule from "../screens/Schedule";
import Chat from "../screens/Chat";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator
        initialRouteName="Claims"
        screenOptions={{
            tabBarActiveTintColor: "orange",
            tabBarInactiveTintColor: "white",
            tabBarLabelStyle: { fontSize: 16, fontWeight: "bold" },
            tabBarStyle: { backgroundColor: "black" },
        }}
        >
        <Tab.Screen
            name="Claims"
            component={Claims}
            options={{
            tabBarLabel: "Claims",
            tabBarIcon: ({ color, size }) => (
                <Ionicons name="file-tray-full-outline" size={size} color={color} />
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
    );
    }

    const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="SplashScreen" headerMode="none">
        <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
    );
    };

export default AppNavigator;
