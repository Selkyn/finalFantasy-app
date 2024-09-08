import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { auth } from '../../FirebaseConfig'

const MyAccount = () => {
    const handleSignOut = async () => {
        try {
          await auth.signOut(); // Appel de la fonction signOut pour se déconnecter
        console.log('succes')
        } catch (error) {
          console.error('Erreur lors de la déconnexion :', error);
        }
      };
  return (
    <View>
      <Text>Mon compte</Text>
      <Button onPress={handleSignOut}>Se déconnecter</Button>
    </View>
  )
}

export default MyAccount