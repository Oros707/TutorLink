import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from './Settings/ThemeContext'; 
import Settings from './Settings/Settings';
import ProfilePage from './ProfilePage'
const Stack = createStackNavigator();

function SettingsNavigation() {
  const { darkMode } = useTheme(); 

  return (
    <Stack.Navigator initialRouteName="ProfilePage">
      <Stack.Screen
        name="ProfilePage"
        component={ProfilePage}
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
