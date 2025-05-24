import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Moto = {
  id: string;
  modelo: string;
  placa: string;
  chassi: string;
  problema: string;
  status: 'recepcao' | 'patio';
};

export default function VisualizarMotosScreen() {
  const [motos, setMotos] = useState<Moto[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
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
      setModalVisible(true);
    }
  };

  const fecharModal = () => {
    setModalVisible(false);
    setMotoSelecionada(null);
  };

  const renderMoto = (moto: Moto, icon: 'add-circle-outline' | 'location') => (
    <View key={moto.id} style={styles.card}>
      <View>
        <Text style={styles.modelo}>{moto.modelo}</Text>
        <Text style={styles.info}>{moto.placa}</Text>
        <Text style={styles.info}>{moto.chassi}</Text>
        <Text style={styles.info}>{moto.problema}</Text>
      </View>

      {icon === 'location' ? (
        <TouchableOpacity onPress={() => abrirModal(moto)}>
          <Ionicons name={icon} size={20} color="#fff" />
        </TouchableOpacity>
      ) : (
        <Ionicons name={icon} size={20} color="#fff" />
      )}
    </View>
  );

  const renderLista = (status: 'recepcao' | 'patio', titulo: string, icon: 'add-circle-outline' | 'location') => {
    const filtradas = motos.filter(m => m.status === status);
    return (
      <>
        <Text style={styles.subheader}>{titulo}</Text>
        {filtradas.map(moto => renderMoto(moto, icon))}
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
        <Text style={styles.header}>Motos a trabalhar</Text>
        {renderLista('recepcao', 'Na recepção/pendente', 'add-circle-outline')}
        {renderLista('patio', 'No pátio', 'location')}
      </ScrollView>

      <Modal visible={modalVisible} transparent animationType="fade">
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Deseja localizar a moto?</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.btnSim} onPress={() => fecharModal()}>
                <Text style={styles.btnText}>SIM</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnVoltar} onPress={fecharModal}>
                <Text style={styles.btnText}>VOLTAR</Text>
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
    minHeight: '100%',
    backgroundColor: '#121212',
    paddingTop: 60,
    paddingHorizontal: 20
  },
  header: {
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20
  },
  subheader: {
    backgroundColor: '#3a3735',
    color: '#fff',
    padding: 10,
    marginTop: 10,
    borderRadius: 8,
    fontWeight: 'bold'
  },
  card: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start'
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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalBox: {
    backgroundColor: '#3a3735',
    padding: 25,
    borderRadius: 10,
    alignItems: 'center'
  },
  modalText: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 15
  },
  modalButtons: {
    flexDirection: 'row',
    gap: 15
  },
  btnSim: {
    backgroundColor: '#00cc00',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 6
  },
  btnVoltar: {
    backgroundColor: '#cc0000',
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 6
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
