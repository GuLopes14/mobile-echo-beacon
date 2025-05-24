import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function HomeScreen() {
    const navigation = useNavigation();
    return (
    
    <View style={styles.container}>
      <Text style={styles.title}>ECHOBEACON</Text>
      <Text style={styles.time}>10:31 AM</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>VINCULAR TAG</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>VISUALIZAR MOTOS</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  gear: {
    position: 'absolute',
    top: 40,
    right: 20
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 5
  },
  time: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 40
  },
  button: {
    backgroundColor: '#00FF00',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginVertical: 10
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold'
  }
});
