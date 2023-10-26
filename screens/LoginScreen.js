import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon } from 'react-native-heroicons/solid';
import { useNavigation } from '@react-navigation/native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { themeColors } from '../theme';

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    if (email && password) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate("NAV2");
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
            source={require('../assets/images/login.png')}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <View style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50, flex: 1, backgroundColor: 'white', padding: 8, paddingTop: 8 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: 'gray', marginLeft: 4 }}>Email Address</Text>
          <TextInput
            style={{
              padding: 4,
              backgroundColor: 'white',
              color: 'black',
              borderRadius: 20,
              marginBottom: 3,
            }}
            placeholder="email"
            value={email}
            onChangeText={(value) => setEmail(value)}
          />
          <Text style={{ color: 'gray', marginLeft: 4 }}>Password</Text>
          <TextInput
            style={{
              padding: 4,
              backgroundColor: 'white',
              color: 'black',
              borderRadius: 20,
            }}
            secureTextEntry
            placeholder='password'
            value={password}
            onChangeText={(value) => setPassword(value)}
          />
          <TouchableOpacity style={{ alignItems: 'flex-end' }}>
            <Text style={{ color: 'black', marginBottom: 5 }}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSubmit}
            style={{ padding: 3, backgroundColor: 'yellow', borderRadius: 30 }}
          >
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', color: 'gray' }}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginBottom: 80, flexDirection: 'column', alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: 'gray', fontWeight: 'bold' }}>Or</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginVertical: 7 }}>
            <TouchableOpacity style={{ padding: 2, backgroundColor: 'gray', borderRadius: 20,marginRight: 10 }}>
              <Image
                source={require('../assets/icons/google.png')}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ padding: 6, backgroundColor: 'gray', borderRadius: 20 }}>
              <Image
                source={require('../assets/icons/apple.png')}
                style={{ width: 40, height: 40 }}
              />
            </TouchableOpacity>
            
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 7 }}>
            <Text style={{ color: 'gray', fontWeight: 'bold' }}>Don't have an account?</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')}>
              <Text style={{ fontWeight: 'bold', color: 'yellow' }}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
