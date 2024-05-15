import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import TelaLogin from './src/Componente/Tela/Login/index.js';
// import TelaTipoUsuario from './src/Componente/Tela/TipoUsuario/index.js';

import Rotas from './src/Rotas/index.js';
import {AtenticacaoProvedor} from './src/Contexts/contextoAutenticacao.js';

//const Stack = createNativeStackNavigator()


export default function App() {
 
  return (
      <NavigationContainer independent={true} >
        <AtenticacaoProvedor >

            <Rotas/>
          
        </AtenticacaoProvedor>
      </NavigationContainer>
    

  );
}


