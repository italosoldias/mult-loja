import React from "react";
import { StyleSheet, Text, View, TextInput, Button,SafeAreaView, Pressable} from 'react-native';
//import { SafeAreaView } from "react-native-web";
import DadosAnimalRetornado from "./ComponenteDaTela/DadosAnimal/index.js";
import BotaoVoltaGlobal from '../../Global/BotaoVoltaGlobal/index'

import staleTelaAnimalRetornado from "./styles.js";

// style={staleTelaLogin.sTelaLoginBotao}
export default function TelaAnimalRetornado() {
    return (
        
        
        <View style={staleTelaAnimalRetornado.sTelaAnimalRetornadoContainer}>
                <BotaoVoltaGlobal/>
                <Text style={staleTelaAnimalRetornado.sTelaAnimalRetornadoTexto}> ANIMAL DESEJADO</Text> 
              <DadosAnimalRetornado/>
        </View>

        
        )
}