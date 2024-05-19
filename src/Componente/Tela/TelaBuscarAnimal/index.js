import React from "react";
import { StyleSheet, Text, View, TextInput, Button,SafeAreaView, Pressable} from 'react-native';
//import { SafeAreaView } from "react-native-web";
import BuscarProduto from "./ComponenteDaTela/BuscarAnimal/index.js";
import BotaoVoltaGlobal from '../../Global/BotaoVoltaGlobal/index'

import staleTelaBuscaAnimal from "./styles.js";

// style={staleTelaLogin.sTelaLoginBotao}
export default function TelaBuscarAnimal() {
    return (
        
        
        <View style={staleTelaBuscaAnimal.sTelaBuscaAnimalContainer}>
                
                <Text style={staleTelaBuscaAnimal.sTelaBuscaAnimalTexto}> BUSQUE O ANIMAL DESEJADO</Text> 
                <BotaoVoltaGlobal/>
              <BuscarProduto/>
        </View>

        
        )
}