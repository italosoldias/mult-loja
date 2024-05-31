import React from "react";
import { StyleSheet, Text, View, TextInput, Button,SafeAreaView, Pressable} from 'react-native';
//import { SafeAreaView } from "react-native-web";

import BotaoPadrao from '../../Global/BotaoPadrao/index.js'
import BuscarAnimal from "./ComponenteDaTela/BuscarAnimal/index.js";
import BotaoVoltaGlobal from '../../Global/BotaoVoltaGlobal/index'
import TituloDaTela from "../../Global/TituloDaTela/index.js";

import staleTelaBuscaAnimal from "./styles.js";
import sFundoGlobal from "../../Global/FundoGlobal/styles.js";

// style={staleTelaLogin.sTelaLoginBotao}
export default function TelaBuscarAnimal() {
    return (
        
        
        <View style={sFundoGlobal.sBackColor}>
                
                <TituloDaTela texto={"BUSQUE O ANIMAL DESEJADO"}> </TituloDaTela> 
                {/* <BotaoVoltaGlobal/> */}
              <BuscarAnimal/>
        </View>

        
        )
}