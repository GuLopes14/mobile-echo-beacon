import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Ionicons } from '@expo/vector-icons';

export default function PerfilUsuarioScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    const carregarUsuario = async () => {
      const dados = await AsyncStorage.getItem('usuario');
      if (dados) {
        const usuario = JSON.parse(dados);
        setNome(usuario.nome || '');
        setEmail(usuario.email || '');
        setSenha(usuario.senha || '');
      }
    };

    carregarUsuario();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>MINHA CONTA</Text>

      <Text style={styles.rotulo}>Nome</Text>
      <View style={styles.campoVisual}>
        <Text style={styles.textoCampo}>{nome}</Text>
        <Ionicons name="pencil" size={16} color="#aaa" />
      </View>

      <Text style={styles.rotulo}>Email</Text>
      <View style={styles.campoVisual}>
        <Text style={styles.textoCampo}>{email}</Text>
        <Ionicons name="pencil" size={16} color="#aaa" />
      </View>

      <Text style={styles.rotulo}>Senha</Text>
      <View style={styles.campoVisual}>
        <Text style={styles.textoCampo}>{'*'.repeat(senha.length)}</Text>
        <Ionicons name="pencil" size={16} color="#aaa" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 60,
    paddingHorizontal: 20
  },
  titulo: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40
  },
  rotulo: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 4,
    marginTop: 10
  },
  campoVisual: {
    backgroundColor: '#3a3735',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textoCampo: {
    color: '#fff',
    fontSize: 14
  }
});
