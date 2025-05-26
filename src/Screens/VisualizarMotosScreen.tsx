import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Moto } from '../types/types';

export default function VisualizarMotosScreen() {
  const [motos, setMotos] = useState<Moto[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisivel, setModalVisivel] = useState(false);
  const [motoSelecionada, setMotoSelecionada] = useState<Moto | null>(null);

  useEffect(() => {
    fetch('https://682e3485746f8ca4a47c3ec8.mockapi.io/motos')
      .then(res => res.json())
      .then(data => {
        setMotos(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const abrirModal = (moto: Moto) => {
    if (moto.status === 'patio') {
      setMotoSelecionada(moto);
      setModalVisivel(true);
    }
  };

  const fecharModal = () => {
    setModalVisivel(false);
    setMotoSelecionada(null);
  };

  const renderMoto = (moto: Moto, icone: 'add-circle-outline' | 'location') => (
    <View key={moto.id} style={styles.cartao}>
      <View>
        <Text style={styles.modelo}>{moto.modelo}</Text>
        <Text style={styles.info}>Placa: {moto.placa}</Text>
        <Text style={styles.info}>Chassi: {moto.chassi}</Text>
        <Text style={styles.info}>Problema: {moto.problema}</Text>
      </View>

      {icone === 'location' ? (
        <TouchableOpacity onPress={() => abrirModal(moto)}>
          <Ionicons name={icone} size={20} color="#fff" />
        </TouchableOpacity>
      ) : (
        <Ionicons name={icone} size={20} color="#fff" />
      )}
    </View>
  );

  const renderLista = (
    status: 'recepcao' | 'patio',
    titulo: string,
    icone: 'add-circle-outline' | 'location'
  ) => {
    const filtradas = motos.filter(m => m.status === status);
    return (
      <>
        <Text style={styles.subtitulo}>{titulo}</Text>
        {filtradas.map(moto => renderMoto(moto, icone))}
      </>
    );
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }

  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.titulo}>Lista de Motos</Text>
        {renderLista('recepcao', 'Na recepção', 'add-circle-outline')}
        {renderLista('patio', 'No pátio', 'location')}
      </ScrollView>

      <Modal visible={modalVisivel} transparent animationType="fade">
        <View style={styles.sobreposicaoModal}>
          <View style={styles.caixaModal}>
            <Text style={styles.textoModal}>Deseja localizar esta moto?</Text>
            <View style={styles.botoesModal}>
              <TouchableOpacity style={styles.botaoSim} onPress={fecharModal}>
                <Text style={styles.textoBotao}>Sim</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.botaoVoltar} onPress={fecharModal}>
                <Text style={styles.textoBotao}>Voltar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121212',
    paddingTop: 60,
    paddingHorizontal: 20
  },
  titulo: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20
  },
  subtitulo: {
    backgroundColor: '#3a3735',
    color: '#fff',
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    fontWeight: 'bold'
  },
  cartao: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  modelo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  info: {
    color: '#aaa',
    fontSize: 13
  },
  sobreposicaoModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  caixaModal: {
    backgroundColor: '#3a3735',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center'
  },
  textoModal: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 15
  },
  botoesModal: {
    flexDirection: 'row',
    gap: 15
  },
  botaoSim: {
    backgroundColor: '#00cc00',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 6
  },
  botaoVoltar: {
    backgroundColor: '#cc0000',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 6
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
