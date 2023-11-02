import { View, Text } from 'react-native'
import React ,{useEffect, useState} from 'react'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';

const useAuth = () => {
    const[user,setUser] = useState(null);
    const [signedIn,setSignedIn] = useState(false)

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,user=>{
            console.log('got user: ',user);
            if(user){
                setUser(user);
                setSignedIn(true)
            }else{
                setUser(null);
            }
        });
        return unsub;
    },[])
  return { user }
}

export default useAuth