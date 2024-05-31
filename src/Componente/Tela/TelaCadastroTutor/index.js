import React from "react";
import { StyleSheet, Text, View, TextInput, Button,SafeAreaView, Pressable} from 'react-native';
//import { SafeAreaView } from "react-native-web";
import CadastrarTutor from './ComponenteDaTela/CadastroTutor/index.js'
import BotaoVoltaGlobal from '../../Global/BotaoVoltaGlobal/index'
import TituloDaTela from '../../Global/TituloDaTela/index.js'

import staleTelaCadastraTutor from "./styles.js";
import sFundoGlobal from "../../Global/FundoGlobal/styles.js";

// style={staleTelaLogin.sTelaLoginBotao}
export default function TelaCadastrarTutor() {
    return (
        
        
        <View style={sFundoGlobal.sBackColor} >
               
                <TituloDaTela texto={"INFORME OS DADOS DO TUTOR"}></TituloDaTela> 
                {/* <BotaoVoltaGlobal/> */}
              <CadastrarTutor/>
        </View>

        
        )
}