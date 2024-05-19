import React from "react";
import { StyleSheet, Text, View, TextInput, Button,SafeAreaView, Pressable} from 'react-native';
import BotaoVoltaGlobal from '../../Global/BotaoVoltaGlobal/index'
//import { SafeAreaView } from "react-native-web";
import CadastrarAnimal from './ComponenteDaTela/CadastroAnimal/index.js'

import staleTelaCadastraAnimal from "./styles.js";

// style={staleTelaLogin.sTelaLoginBotao}
export default function TelaCadastrarAnimal() {
    return (
        
        
        <View style={staleTelaCadastraAnimal.sTelaCadastraAnimalContainer}>
              
                <Text style={staleTelaCadastraAnimal.sTelaCadastraAnimalTexto}> INFORME OS DADOS DO ANIMAL</Text> 
                <BotaoVoltaGlobal/>
              <CadastrarAnimal/>
        </View>

        
        )
}