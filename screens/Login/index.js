import { View, Text, ActivityIndicator } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper'
import {  auth } from '../../FirebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';

const Login = ({navigation}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
            navigation.navigate ('Home');
        }catch (error) {
            console.log(error);
            alert('Authentification échouée' + error.message)
        }finally {
            setLoading(false)
        }
    }

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
        }catch (error) {
            console.log(error);
        }finally {
            setLoading(false)
        }
    }


    return (
        <View>
            <Text>Email</Text>
            <TextInput
                placeholder='Entrez votre email'
                value={email}
                onChangeText={setEmail}
            />
            <Text>Mot de passe</Text>
            <TextInput
                placeholder='Entrez votre mot de passe'
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <>
                 <Button mode="contained" onPress={signIn}>
                        Se connecter
                    </Button>
                <Button  onPress={signUp}> s'enregistrer </Button>
                </>
            )
            }
        </View>
    )
}

export default Login