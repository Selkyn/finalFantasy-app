import { View, Text } from 'react-native'
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../Home';
import Qrcode from '../Qrcode';
import Carte from '../Carte';
import Carteleaflet from '../../Carteleaflet';
import Messages from '../Messages';





const BottomTabs = () => {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
          initialRouteName="tabs_home"
          screenOptions={{
            tabBarActiveTintColor: '#e91e63',
          }}
        >
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
          <Tab.Screen
            name="Qr Code"
            component={Qrcode}
            options={{
              tabBarLabel: 'QR code',
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="qrcode-scan" color={color} size={size} />
              ),
              
            }}
          />
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
        </Tab.Navigator>
      );
}

export default BottomTabs