// import React from 'react';
// import { TouchableOpacity, Text } from 'react-native';

// import * as DocumentPicker from 'expo-document-picker';
// import * as FileSystem from 'expo-file-system';

// const EnviarPDFButton = () => {
//   const handlePDFSelection = async () => {
//     try {
//       const file = await DocumentPicker.getDocumentAsync({
//         type: 'application/pdf',
        
//       });
//       console.log(file.canceled)

//       if (file.canceled === false) {
//         const base64Content = await getFileBase64(file.assets[0].mimeType.uri);
//         console.log('Base64 do documento:', base64Content);
//         console.log('Arquivo selecionado:', file.assets[0].uri);
//       }
//     } catch (error) {
//       console.error('Erro ao selecionar o arquivo:', error);
//     }
//   };

//   async function getFileBase64(uri) {
//     try {
//       const fileContent = await FileSystem.readAsStringAsync(uri, {
//         encoding: FileSystem.EncodingType.Base64,
//       });
//       console.log(fileContent);
//       return fileContent;
//     } catch (error) {
//       console.log('Erro ao ler arquivo:', error);
//       return null;
//     }
//   }

//   return (
//     <TouchableOpacity onPress={handlePDFSelection} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
//       <Text style={{ color: 'white', textAlign: 'center' }}>Selecionar PDF</Text>
//     </TouchableOpacity>
//   );
// };

// export default EnviarPDFButton;


import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';

import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';

const EnviarPDFButton = () => {
  const [base64Content, setBase64Content] = useState(null);

  const handlePDFSelection = async () => {
    try {
      const file = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });

      if (file.canceled === false) {
        if (file.assets[0].uri) { // Verifica se o URI do arquivo é válido
          const content = await getFileBase64(file.assets[0].uri);
          setBase64Content(content);
          console.log('Base64 do documento:', content);
          console.log('Arquivo selecionado:', file.assets[0].uri);
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
    <TouchableOpacity onPress={handlePDFSelection} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
      <Text style={{ color: 'white', textAlign: 'center' }}>Selecionar PDF</Text>
    </TouchableOpacity>
  );
};

export default EnviarPDFButton;