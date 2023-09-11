import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import SplashScreen from './screens/splashscreen';

export default function App() {
  return (
    <View style={styles.splash}>
      <SplashScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  splash: {
    width: "100%",
    height: "100%",
  },
});
