import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';
import staleTelaLogin from '../Login/styles.js'
import ViewTelaLeitorCodigo from './ComponenteDaTela/VIewCamera/index.js'
import BotaoDigitarCodigo from './ComponenteDaTela/BotaoDigitaCodigoBarras/index.js'
import BotaoVoltaGlobal from '../../Global/BotaoVoltaGlobal/index'
import staleTelaUsuarioVendedor from "./styles.js";
// style={staleTelaLogin.sTelaLoginBotao}
export default function TelaUsuarioVendedor() {
    return (
        
        <View style={staleTelaUsuarioVendedor.sTelaUsuarioVendedorContainer}>
              
              {/* <BotaoVoltaGlobal/> */}
               <ViewTelaLeitorCodigo/> 

                <BotaoDigitarCodigo/>
        </View>
        )
}