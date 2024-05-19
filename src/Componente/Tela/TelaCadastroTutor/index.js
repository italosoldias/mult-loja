import React from "react";
import { StyleSheet, Text, View, TextInput, Button,SafeAreaView, Pressable} from 'react-native';
//import { SafeAreaView } from "react-native-web";
import CadastrarTutor from './ComponenteDaTela/CadastroTutor/index.js'
import BotaoVoltaGlobal from '../../Global/BotaoVoltaGlobal/index'

import staleTelaCadastraTutor from "./styles.js";

// style={staleTelaLogin.sTelaLoginBotao}
export default function TelaCadastrarTutor() {
    return (
        
        
        <View style={staleTelaCadastraTutor.staleTelaCadastraTutorContainer}>
               
                <Text style={staleTelaCadastraTutor.staleTelaCadastraTutorTexto}> INFORME OS DADOS DO TUTOR</Text> 
                <BotaoVoltaGlobal/>
              <CadastrarTutor/>
        </View>

        
        )
}