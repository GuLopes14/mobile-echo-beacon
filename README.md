# EchoBeacon Mobile – Gestão de Motos no Pátio Mottu

## 👤 Integrantes

- Gustavo Lopes Santos da Silva - RM: 556859  
- Renato de Freitas David Campiteli - RM: 555627  
- Gabriel Santos Jablonski - RM: 555452 

---

## 📱 Descrição da Solução

Este projeto foi desenvolvido com o objetivo de otimizar a **organização, gestão e localização das motos** no pátio da empresa **Mottu**. A solução combina hardware e software para permitir que os colaboradores encontrem rapidamente os veículos corretos mesmo em ambientes lotados.

### A solução é composta por:

- **Tag EchoBeacon (ESP32):** instalada em cada moto, equipada com LED e buzzer.
- **Aplicativo mobile:** permite visualizar, consultar e localizar motos no pátio.
- **Banco de dados integrado:** onde são armazenadas as informações das motos.
- **Cadastro de motos:** realizado via sistema externo (Java + Next.js), integrado ao app mobile.

### Principais Funcionalidades:

- Tela de login e cadastro com persistência local.
- Visualização de motos separadas por status (recepção ou pátio).
- Consulta de placa, chassi e problema da moto.
- Ativação remota da tag EchoBeacon (buzzer + LED) para localização visual e sonora.
- Cadastro simulado de novas motos (mock API).
- Interface acessível, responsiva e moderna.

---

## 🚀 Como Rodar o Projeto Localmente

### 📋 Pré-requisitos

- [Node.js](https://nodejs.org/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)
- Editor como [VS Code](https://code.visualstudio.com/)
- Aplicativo **Expo Go** no celular (Android/iOS)

### 📦 Instalação

```bash
# Clone o repositório
git clone https://github.com/FIAP-MOBILE/challenge-echobeacon.git
cd challenge-echobeacon

# Instale as dependências
npm install
```

### ▶️ Execução

```bash
# Inicie o projeto
npx expo start
```

- Escaneie o QR Code exibido com o aplicativo **Expo Go**
- A aplicação será aberta no seu celular

---

## 🧠 Tecnologias Utilizadas

- **React Native** com **TypeScript**
- **Expo**
- **AsyncStorage**
- **React Navigation**
- **MockAPI (REST fake API)**
- **Ionicons (Expo Vector Icons)**

---

## 💡 Objetivo Final

A proposta da solução é reduzir o tempo e esforço gastos pelos funcionários da Mottu para localizar motos no pátio. Com a integração entre o cadastro, o aplicativo e os dispositivos EchoBeacon, torna-se possível gerenciar e encontrar qualquer moto com mais agilidade, segurança e organização.

---
