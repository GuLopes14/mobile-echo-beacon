import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CadastrarEchoBeaconScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CADASTRAR ECHOBEACON</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#121212', paddingTop: 60, paddingHorizontal: 20 },
  title: { fontSize: 22, color: '#fff', fontWeight: 'bold', marginBottom: 30, textAlign: 'center' },
  label: { color: '#fff', fontSize: 14, marginBottom: 6, marginLeft: 4 },
  dropdown: { backgroundColor: '#3a3735', borderRadius: 8, padding: 14, marginBottom: 10 },
  dropdownText: { color: '#fff' },
  option: { backgroundColor: '#2c2c2c', padding: 12, marginBottom: 5, borderRadius: 6 },
  optionText: { color: '#fff' },
  botao: { backgroundColor: '#00FF00', borderRadius: 25, paddingVertical: 12, alignItems: 'center', marginTop: 20 },
  botaoTexto: { fontWeight: 'bold', color: '#000' },
  resumo: { marginTop: 30 },
  resumoTexto: { color: '#fff', fontSize: 14, textAlign: 'center', marginVertical: 4 }
});
