import React from "react";
import { StyleSheet, Text, View, TextInput, Button,SafeAreaView, Pressable} from 'react-native';
//import { SafeAreaView } from "react-native-web";
import CadastrarTutor from './ComponenteDaTela/CadastroTutor/index.js'

import staleTelaCadastraAnimal from "./styles.js";

// style={staleTelaLogin.sTelaLoginBotao}
export default function TelaCadastrarTutor() {
    return (
        
        
        <View style={staleTelaCadastraAnimal.sTelaCadastraAnimalContainer}>
                <Text style={staleTelaCadastraAnimal.sTelaCadastraAnimalTexto}> INFORME OS DADOS DO TUTOR</Text> 
              <CadastrarTutor/>
        </View>

        
        )
}