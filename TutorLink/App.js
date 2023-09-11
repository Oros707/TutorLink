import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Claims from './components/Claims';
import Attendance from './components/Attendance';
import Schedule from './components/Schedule';
import Chat from './components/Chat';
import { Ionicons } from '@expo/vector-icons'; // Import the icons

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Claims"
        tabBarOptions={{
          activeTintColor: 'orange',
          inactiveTintColor: 'white',
          labelStyle: { fontSize: 16, fontWeight: 'bold' },
          style: { backgroundColor: 'black' },
        }}
      >
        <Tab.Screen
          name="Claims"
          component={Claims}
          options={{
            tabBarLabel: 'Claims',
            headerShown: false, // Hide the header
         
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="file-tray-full-outline" size={size} color={color} />
            ),
            
          }}
        />
        <Tab.Screen
          name="Attendance"
          component={Attendance}
          options={{
            tabBarLabel: 'Attendance',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="calendar-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Schedule"
          component={Schedule}
          options={{
            tabBarLabel: 'Schedule',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="time-outline" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Chat"
          component={Chat}
          options={{
            tabBarLabel: 'Chat',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubbles-outline" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
