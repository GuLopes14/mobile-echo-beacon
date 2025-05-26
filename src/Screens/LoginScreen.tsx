import React, { useEffect, useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  useEffect(() => {
    const carregarDados = async () => {
      const emailSalvo = await AsyncStorage.getItem('email');
      const senhaSalva = await AsyncStorage.getItem('senha');

      if (emailSalvo && senhaSalva) {
        setEmail(emailSalvo);
        setSenha(senhaSalva);
      }
    };

    carregarDados();
  }, []);

  const fazerLogin = async () => {
    if (!email || !senha) {
      Alert.alert('Atenção', 'Preencha todos os campos');
      return;
    }

    await AsyncStorage.setItem('email', email);
    await AsyncStorage.setItem('senha', senha);

    Alert.alert('Login', 'Login feito com sucesso!');
    navigation.navigate('Início');
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.titulo}>ECHOBEACON</Text>
      <Text style={styles.subtitulo}>Entre para continuar</Text>

      <Text style={styles.rotulo}>Email</Text>
      <TextInput
        style={styles.campo}
        placeholder="email@email.com"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <Text style={styles.rotulo}>Senha</Text>
      <TextInput
        style={styles.campo}
        placeholder="Digite sua senha"
        placeholderTextColor="#aaa"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
      />

      <TouchableOpacity style={styles.botao} onPress={fazerLogin}>
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botaoSecundario} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.textoBotaoSecundario}>Não tenho conta</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  titulo: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10
  },
  subtitulo: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30
  },
  rotulo: {
    color: '#fff',
    marginBottom: 4,
    marginTop: 10
  },
  campo: {
    backgroundColor: '#3a3735',
    color: '#fff',
    padding: 10,
    borderRadius: 6
  },
  botao: {
    backgroundColor: '#00FF00',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 30
  },
  textoBotao: {
    color: '#000',
    fontWeight: 'bold'
  },
  botaoSecundario: {
    marginTop: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#00FF00',
    paddingVertical: 8,
    borderRadius: 25
  },
  textoBotaoSecundario: {
    color: '#00FF00',
    fontSize: 12
  }
});
