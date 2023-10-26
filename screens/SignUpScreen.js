import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { themeColors } from '../theme';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        navigation.navigate('LoginScreen');
      } catch (err) {
        console.log('got error: ', err.message);
      }
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: themeColors.bg }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              backgroundColor: 'yellow',
              padding: 2,
              borderTopRightRadius: 20,
              borderBottomLeftRadius: 20,
              marginLeft: 4,
            }}
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Image
            source={require('../assets/images/signup.png')}
            style={{ width: 165, height: 110 }}
          />
        </View>
      </SafeAreaView>
      <View style={{ flex: 1, borderTopLeftRadius: 50, borderTopRightRadius: 50, backgroundColor: 'white', padding: 8, paddingTop: 8 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: 'gray', marginLeft: 4 }}>Full Name</Text>
          <TextInput
            style={{
              padding: 4,
              backgroundColor: 'white',
              color: 'black',
              borderRadius: 20,
              marginBottom: 3,
            }}
            placeholder="Enter Name"
          />
          <Text style={{ color: 'gray', marginLeft: 4 }}>Email Address</Text>
          <TextInput
            style={{
              padding: 4,
              backgroundColor: 'white',
              color: 'black',
              borderRadius: 20,
              marginBottom: 3,
            }}
            value={email}
            onChangeText={(value) => setEmail(value)}
            placeholder="Enter Email"
          />
          <Text style={{ color: 'gray', marginLeft: 4 }}>Password</Text>
          <TextInput
            style={{
              padding: 4,
              backgroundColor: 'white',
              color: 'black',
              borderRadius: 20,
              marginBottom: 7,
            }}
            secureTextEntry
            value={password}
            onChangeText={(value) => setPassword(value)}
            placeholder="Enter Password"
          />
          <TouchableOpacity
            style={{ padding: 3, backgroundColor: 'yellow', borderRadius: 30 }}
            onPress={handleSubmit}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'gray' }}>
              Sign Up
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 20, color: 'gray', fontWeight: 'bold', textAlign: 'center', paddingTop: 5 }}>Or</Text>
        <View style={{marginBottom:80 ,flexDirection: 'row', justifyContent: 'center', marginVertical: 7 }}>
          <TouchableOpacity style={{ padding: 2,  borderRadius: 20 ,marginRight: 10}}>
            <Image
              source={require('../assets/icons/google.png')}
              style={{ width: 40, height: 40 }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 6, borderRadius: 20 }}>
              <Image
                source={require('../assets/icons/apple.png')}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 7 }}>
          <Text style={{ color: 'gray', fontWeight: 'bold',marginBottom:30 }}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
            <Text style={{ fontWeight: 'bold', color: 'yellow' }}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
