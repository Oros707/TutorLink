import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from './Settings/ThemeContext'; // Import the useTheme hook from your context
import Settings from './Settings/Settings';
import UserPage from './UserPage';

const Stack = createStackNavigator();

function SettingsNavigation() {
  const { darkMode } = useTheme(); // Use the useTheme hook to get the theme information

  return (
    <Stack.Navigator initialRouteName="UserPage">
      <Stack.Screen
        name="UserPage"
        component={UserPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{headerShown:false}}
      />
    </Stack.Navigator>
  );
}

export default SettingsNavigation;
