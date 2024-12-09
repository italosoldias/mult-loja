import React, { useState } from 'react';
import { View, TouchableOpacity, Text, Modal, Button, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import { WebView } from 'react-native-webview'; // Usando WebView para exibir o PDF

const PDFCarousel = ({ pdfs }) => {
  const [index, setIndex] = useState(0); // Estado para o índice do slider
  const [isModalVisible, setModalVisible] = useState(false); // Estado para controle de visibilidade do modal
  const [isLoading, setIsLoading] = useState(true); // Estado de carregamento

  // Função para alternar a visibilidade do modal
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Função para mudar o índice do PDF selecionado
  const changePDFIndex = (i) => {
    setIndex(i);
    toggleModal(); // Abre o modal ao clicar em um PDF
    setIsLoading(true); // Reseta o carregamento ao mudar de PDF
  };

  // Função para renderizar o PDF corretamente
  const renderPDF = (pdfBase64) => {
    return `data:application/pdf;base64,${pdfBase64}`;
  };

  return (
    <View style={styles.container}>
      {pdfs && pdfs.length > 0 ? (
        <Swiper
          style={styles.swiper}
          showsButtons={true}
          loop={false}
          index={index}
          onIndexChanged={setIndex} // Atualiza o índice automaticamente com o Swiper
        >
          {pdfs.map((pdfBase64, i) => (
            <TouchableOpacity key={i} onPress={() => changePDFIndex(i)} style={styles.pdfItem}>
              <Text style={styles.pdfText}>{`PDF ${i + 1}`}</Text> {/* Corrigido para envolver o texto em <Text> */}
            </TouchableOpacity>
          ))}
        </Swiper>
      ) : (
        <Text>Carregando PDFs...</Text>  
      )}

      {/* Modal para exibir o PDF selecionado */}
      <Modal visible={isModalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {/* WebView para renderizar o PDF */}
            <WebView
              originWhitelist={['*']}
              source={{
                uri: renderPDF(pdfs[index]), // PDF base64 para a fonte do WebView
              }}
              style={styles.pdfViewer}
              javaScriptEnabled={true} // Habilitar JS caso necessário para interações com o PDF
              startInLoadingState={true} // Mostrar carregamento enquanto o PDF está sendo carregado
              onLoad={() => setIsLoading(false)} // Atualiza o estado de carregamento quando o PDF for carregado
              onError={() => setIsLoading(false)} // Atualiza o estado de carregamento caso haja erro
            />
            {isLoading && <Text style={styles.loadingText}>Carregando...</Text>} {/* Corrigido para envolver o texto em <Text> */}
            {/* Botão para fechar o modal */}
            <Button title="Fechar PDF" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  swiper: {
    height: 200,
    width: '100%',
  },
  pdfItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    borderColor: 'gray',
    margin: 10,
    borderRadius: 5,
  },
  pdfText: {
    fontSize: 16,
    color: 'blue',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // fundo escurecido
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '90%',
    height: '80%',
  },
  pdfViewer: {
    width: '100%',
    height: '100%',
  },
  loadingText: {
    fontSize: 18,
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default PDFCarousel;
