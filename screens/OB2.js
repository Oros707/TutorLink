import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Bubbles from "../components/bubbles";

export default function OB2({ navigation }) {
  return (
    <View style={styles.container}>
      <Bubbles />

      <Text style={styles.tutor}>
        Tutor<Text style={styles.link}>Link!</Text>
      </Text>

      <Image
        style={styles.image}
        source={require("../images/Onboarding/onboard2.png")}
        alt="image"
      />

      <Text style={styles.topic}>Complete timesheets!</Text>

      <TouchableOpacity
        onPress={() => navigation.replace("OB3")}
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
  tutor: {
    color: "white",
    fontWeight: "bold",
    fontSize: 50,
    textAlign: "center",
    position: "absolute",
    width: "100%",
    top: 140,
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
});