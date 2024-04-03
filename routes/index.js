import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import BottomTabs from '../screens/tabs';
import MessageDetails from '../screens/MessageDetails';
import CharacterDetails from '../screens/CharacterDetails';




const Routes = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='home'
                screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={BottomTabs} />

                <Stack.Screen name='MessageDetails'
                    component={MessageDetails}
                    options={{ headerShown: true }} //affiche le header
                />
                <Stack.Screen name='CharacterDetails'
                    component={CharacterDetails}
                    options={{ headerShown: true }} //affiche le header
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes