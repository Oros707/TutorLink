import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Bubbles from "../components/bubbles";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Bubbles />
      <Image
        style={styles.logo}
        source={require("../images/UJ_LOGO_BW.png")}
        alt="UJ Logo"
      />

      <Text style={styles.tutor}>
        Tutor<Text style={styles.link}>Link!</Text>
      </Text>

      <Text style={styles.topic}>Payments made easy!</Text>
      <Text style={styles.text}>
        Payment claims, timesheets, and tutor session schedules all in one place
      </Text>

      <TouchableOpacity
        onPress={() => navigation.replace("OB1")}
        style={styles.button}
      >
        <Text style={styles.topic}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "left",
    justifyContent: "center",
    backgroundColor: "black",
    paddingHorizontal: 30,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  tutor: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
  },
  link: {
    color: "orange",
    fontWeight: "bold",
  },
  topic: {
    color: "white",
    fontWeight: "bold",
    fontSize: 40,
  },
  text: {
    color: "white",
    fontWeight: "regular",
    fontSize: 30,
    textAlign: "left",
    marginBottom: 60,
  },
  button: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
    backgroundColor: "orange",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    alignItems: "center",
    marginTop: 60,
  },
});
