import React from "react";
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Pressable, ScrollView } from 'react-native';
import BotaoVoltaGlobal from '../../Global/BotaoVoltaGlobal/index'
//import { SafeAreaView } from "react-native-web";

import TituloDaTela from "../../Global/TituloDaTela/index.js";

import CadastrarAnimal from './ComponenteDaTela/CadastroAnimal/index.js'

import staleTelaCadastraAnimal from "./styles.js";
import sFundoGlobal from "../../Global/FundoGlobal/styles";

// style={staleTelaLogin.sTelaLoginBotao}
export default function TelaCadastrarAnimal() {
  return (
    <>
      <TituloDaTela texto={"INFORME OS DADOS DO ANIMAL"} > </TituloDaTela>

      <ScrollView style={{ backgroundColor: "#D6FFDC" }}>
        <View style={sFundoGlobal.sBackColor}>

          {/* <BotaoVoltaGlobal/> */}

          <CadastrarAnimal />
        </View>
      </ScrollView>
    </>


  )
}