import React from "react";
import { StyleSheet, Text, View, TextInput, Button, SafeAreaView, Pressable } from 'react-native';
//import { SafeAreaView } from "react-native-web";

import BotaoPadrao from '../../Global/BotaoPadrao/index.js'
import BuscarAnimal from "./ComponenteDaTela/BuscarAnimal/index.js";
import BotaoVoltaGlobal from '../../Global/BotaoVoltaGlobal/index'
import TituloDaTela from "../../Global/TituloDaTela/index.js";

import staleTelaBuscaAnimal from "./styles.js";
import sFundoGlobal from "../../Global/FundoGlobal/styles.js";
import { ModalProvedor} from "../../../Contexts/contextoAnimal.js"
// style={staleTelaLogin.sTelaLoginBotao}
export default function TelaBuscarAnimal() {
  return (

    <ModalProvedor>

    <>
      <TituloDaTela texto={"BUSQUE O ANIMAL DESEJADO"}> </TituloDaTela>

      <View style={sFundoGlobal.sBackColor}>
        {/* <BotaoVoltaGlobal/> */}
        <BuscarAnimal />
      </View>
    </>
    </ModalProvedor>


  )
}