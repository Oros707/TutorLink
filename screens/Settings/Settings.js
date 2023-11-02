import React from 'react';
import { View, Text, Switch, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from './ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Settings() {
  const { darkMode, toggleDarkMode } = useTheme();
  const navigation = useNavigation(); // Use the useNavigation hook to navigate back

  const saveDarkModeSetting = async (darkMode) => {
    try {
      await AsyncStorage.setItem('darkMode', JSON.stringify(darkMode));
    } catch (error) {
      console.error('Error saving dark mode setting:', error);
    }
  };

  const handleDarkModeToggle = (value) => {
    toggleDarkMode(value);
    saveDarkModeSetting(value);
  };

  const containerStyle = darkMode ? styles.containerDark : styles.containerLight;

  return (
    <View style={containerStyle}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity>
        <Text style={styles.textTopic}>Settings</Text>
      </View>
      <Text style={styles.text}>Dark Mode</Text>
      <Switch
        style={styles.switch}
        value={darkMode}
        onValueChange={handleDarkModeToggle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerLight: {
    backgroundColor: '#D9E3F0',
    flex: 1,
    alignItems: 'center',
  },
  containerDark: {
    backgroundColor: 'black',
    flex: 1,
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  backButton: {
    backgroundColor: 'orange',
    padding: 4,
    borderRadius: 15,
    position:'relative',
    right:100,
    top:20,
  },
  backButtonText: {
    color: 'white',
    fontSize: 18,
  },
  text: {
    position: 'relative',
    right: 120,
    color: 'white',
    marginTop: 20,
    fontSize: 25,
    fontWeight: 'bold',
    position:'relative',
    top:84,
  },
  textTopic: {
    fontSize: 30,
    color: 'orange',
    fontWeight: 'bold',
    position:'relative',
    top:50,

  },
  switch: {
    position: 'relative',
    left: 120,
    bottom: 25,
    position:'relative',
    top:50,
  },
});

export default Settings;
