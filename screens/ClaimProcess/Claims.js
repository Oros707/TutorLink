import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Bubbles from '../../components/bubbles';

export default function Claims() {
  return (
    <View style={styles.container}>
      <Bubbles />
      <Image
        style={styles.logo}
        source={require('../../images/UJ_LOGO_BW.png')}
        alt="UJ Logo"
      />

      <Text style={styles.tutor}>
        Claim<Text style={styles.link}>Link!</Text>
      </Text>

      <Text style={styles.topic}>Manage Claims</Text>
      <Text style={styles.text}>
        Submit and track payment claims easily.
      </Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Submit a Claim</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // Changed from 'left' to 'center'
    justifyContent: 'center',
    backgroundColor: 'black',
    paddingHorizontal: 30,
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
  },
  tutor: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 50,
  },
  link: {
    color: 'orange',
    fontWeight: 'bold',
  },
  topic: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
  text: {
    color: 'white',
    fontWeight: 'normal',
    fontSize: 30,
    textAlign: 'left',
    marginBottom: 60,
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 60,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
