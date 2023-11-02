import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Bubbles from "../components/bubbles";
import { useNavigation } from "@react-navigation/native";


export default function SplashScreen() {

  const navigation = useNavigation();
  return (
    <View  style={styles.container}>
    <Bubbles />
    <Image
      style={styles.logo}
      source={require("../images/UJ_LOGO_BW.png")}
      alt="UJ Logo"
    />

    <Text style={styles.tutor}>
      Tutor<Text style={styles.link}>Link!</Text>
    </Text>

   <Image
      style={styles.giff}
      source={require("../images/Onboarding/splashgiffyunscreen.gif")}
      alt="UJ Logo"
      oneShot={true}
    />
    
    

    
   

    <TouchableOpacity
      onPress={() => navigation.navigate("OB1")}
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
  backgroundColor: "#D9E3F0",
  
},
logo: {
  width: 100,
  height: 100,
  position:'relative',
  bottom:10,

},
giff:{
  width: 400,
  height: 300,
  position:'relative',
  top:100,
  right:12,

},
tutor: {
  color: "white",
  fontWeight: "bold",
  fontSize: 55,
  textAlign:'center',
  position:'relative',
  top:80,
},
link: {
  color: "orange",
  fontWeight: "bold",
 
},
topic: {
  color: "white",
  fontWeight: "bold",
  fontSize: 30,
  
},
text: {
  color: "white",
  fontWeight: "regular",
  fontSize: 30,
  textAlign: "left",
  marginBottom: 60,
},
button: {    
  backgroundColor: "#0D47A1",
  paddingVertical: 5,
  borderRadius: 50,
  alignItems: "center",
  marginTop:200,
  marginLeft:30,
  width: 300,

},
});

