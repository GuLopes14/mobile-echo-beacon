import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen';
import { Ionicons } from '@expo/vector-icons';
import VisualizarMotosScreen from '../Screens/VisualizarMotosScreen';
import CadastrarEchoBeaconScreen from '../Screens/CadastrarEchoBeaconScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Início') iconName = 'home';
          else if (route.name === 'Motos') iconName = 'bicycle';
          else if (route.name === 'Adicionar') iconName = 'add-circle';
          else if (route.name === 'Perfil') iconName = 'person';

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
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
      <Tab.Screen name="Perfil" component={HomeScreen} />
    </Tab.Navigator>
  );
}
