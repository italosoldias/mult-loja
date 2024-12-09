import React, { createContext, useState, useContext } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const DocumentContext = createContext();

export const useDocumentContext = () => useContext(DocumentContext);

export const DocumentProvider = ({ children }) => {
    const [documentData, setDocumentData] = useState(null);
    
    const handlePDFSelection = async () => {
        try {
          const file = await DocumentPicker.getDocumentAsync({
            type: 'application/pdf',
          });
    
          if (file.canceled === false) {
            if (file.assets[0].uri) { // Verifica se o URI do arquivo é válido
              const content = await getFileBase64(file.assets[0].uri);
              setDocumentData(content);
              console.log('Base64 do documento:', content);
              // console.log('Arquivo selecionado:', file.assets[0].uri);
            } else {
              console.error('URI do arquivo é inválido.');
            }
          }
        } catch (error) {
          console.error('Erro ao selecionar o arquivo:', error);
        }
      };
    
      async function getFileBase64(uri) {
        try {
          const fileContent = await FileSystem.readAsStringAsync(uri, {
            encoding: FileSystem.EncodingType.Base64,
          });
          console.log(fileContent);
          return fileContent;
        } catch (error) {
          console.error('Erro ao ler arquivo:', error);
          return null;
        }
      }
    return (
      <DocumentContext.Provider value={{ documentData, handlePDFSelection }}>
        {children}
      </DocumentContext.Provider>
    );
  };