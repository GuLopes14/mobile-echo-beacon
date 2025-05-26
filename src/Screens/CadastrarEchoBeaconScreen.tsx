import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CadastrarEchoBeaconScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>VINCULAR ECHOBEACON</Text>
      <Text style={{ color: '#fff', textAlign: 'center' }}>
       Tela onde será possível vincular a moto ao EchoBeacon.
       <br />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ 
    flex: 1, 
    backgroundColor: '#121212', 
    paddingTop: 60, 
    paddingHorizontal: 20 },
  title:{ 
    fontSize: 22, 
    color: '#fff', 
    fontWeight: 'bold', 
    marginBottom: 30, 
    textAlign: 'center' },
});
