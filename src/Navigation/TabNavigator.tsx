import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../Screens/HomeScreen';
import VisualizarMotosScreen from '../Screens/VisualizarMotosScreen';
import CadastrarEchoBeaconScreen from '../Screens/CadastrarEchoBeaconScreen';
import PerfilUsuarioScreen from '../Screens/PerfilUsuarioScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';

          if (route.name === 'Início') iconName = 'home';
          if (route.name === 'Motos') iconName = 'bicycle';
          if (route.name === 'Adicionar') iconName = 'add-circle';
          if (route.name === 'Perfil') iconName = 'person';

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#00FF00',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#1e1e1e',
          borderTopColor: '#1e1e1e'
        }
      })}
    >
      <Tab.Screen name="Início" component={HomeScreen} />
      <Tab.Screen name="Motos" component={VisualizarMotosScreen} />
      <Tab.Screen name="Adicionar" component={CadastrarEchoBeaconScreen} />
      <Tab.Screen name="Perfil" component={PerfilUsuarioScreen} />
    </Tab.Navigator>
  );
}
