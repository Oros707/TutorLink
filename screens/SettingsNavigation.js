import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useTheme } from './Settings/ThemeContext'; // Import the useTheme hook from your context
import Settings from './Settings/Settings';
import ProfilePage from './ProfilePage'
import NAV1 from './NAV1';
const Stack = createStackNavigator();

function SettingsNavigation() {
  const { darkMode } = useTheme(); // Use the useTheme hook to get the theme information

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
      <Stack.Screen name="NAV1" component={NAV1}/>
    </Stack.Navigator>
  );
}

export default SettingsNavigation;
