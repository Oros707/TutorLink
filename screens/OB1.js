import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Bubbles from "../components/bubbles";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from './Settings/ThemeContext';

export default function OB1({ navigation }) {
  const { darkMode } = useTheme();

  return (
    <View style={darkMode ? styles.darkContainer : styles.container}>
      <Bubbles darkMode={darkMode} />
      <Image
        style={styles.logo}
        source={require("../images/UJ_LOGO_BW.png")}
        alt="UJ Logo"
      />

      <Text style={styles.tutor}>
            Tutor<Text style={styles.link}>Link!</Text>
      </Text>

      <Image
        style={styles.image}
        source={require("../images/Onboarding/onboard1.png")}
        alt="image"
      />

      <Text style={darkMode ? styles.darkTopic : styles.topic}>Admin!</Text>
      <TouchableOpacity
        onPress={() => navigation.navigate("LoginScreen")}
    
      >
        <Text style={styles.skip} >Skip for now </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.replace("OB2")}
        style={styles.button}
      >
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#D9E3F0",
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
  },
  darkContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    paddingHorizontal: 20,
    width: "100%",
    height: "100%",
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
    position: "absolute",
    top: 240,
  },
  logo: {
    width: 100,
    height: 100,
    position: 'relative',
    bottom: 130,
    right: 130,
  },
  tutor: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
    position: "absolute",
    width: "100%",
    top: 180,
  },
  darkTutor: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
    position: "absolute",
    width: "100%",
    top: 180,
  },
  link: {
    color: "orange",
    fontWeight: "bold",
  },
  topic: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    marginTop: 300,
    position: 'relative',
    bottom: 120,
  },
  darkTopic: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    marginTop: 300,
    position: 'relative',
    bottom: 120,
  },
  button: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    backgroundColor: "orange",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    position: "absolute",
    width: "100%",
    bottom: 60,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
  },
  skip:{
    color:'grey',
    fontWeight:'bold',
    fontSize:25,
    marginBottom:10,
  }
});
