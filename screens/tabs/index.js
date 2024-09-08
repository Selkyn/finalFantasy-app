import React, { useState, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import Qrcode from '../Qrcode';
import Carte from '../Carte';
import Messages from '../Messages';
import Login from '../Login';
import { auth } from '../../FirebaseConfig';
import { Button } from 'react-native-paper';
import MyAccount from '../MyAccount';

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    // Nettoyer l'écouteur lorsque le composant est démonté
    return () => unsubscribe();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="tabs_home"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
      }}
    >
      {user ? (
        <>
          <Tab.Screen
            name="Accueil"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              ),
            }}
          />
          {/* <Tab.Screen
            name="Qr Code"
            component={Qrcode}
            options={{
              tabBarLabel: 'QR code',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />
              ),
            }}
          /> */}
          <Tab.Screen
            name="Carte"
            component={Carte}
            options={{
              tabBarLabel: 'Carte',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="map" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Messages"
            component={Messages}
            options={{
              tabBarLabel: 'Messagerie',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="message" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
          name='MyAccount'
          component={MyAccount}
          options={{
            tabBarLabel: 'Mon compte',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
          />
        </>
      ) : (
        <Tab.Screen
          name="Login"
          component={Login}
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="login" color={color} size={size} />
            ),
          }}
        />
      )}
    </Tab.Navigator>
  );
}

export default BottomTabs;