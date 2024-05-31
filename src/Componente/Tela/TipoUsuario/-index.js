import * as React from 'react';
import BotaoTelaVenda from './ComponenteDaTela/BotaoTelaVenda/index.js'
import BotaoTelaEstoque from './ComponenteDaTela/BotaoTelaEstoque/index.js'
import BotaoTelaCadastroAnimal from './ComponenteDaTela/BotaoTelaCadastroAnimal'
import TelaUsuarioVendedor from '../TelaUsuarioVendedor/index.js'
import BotaorTelaCadastraTutor from './ComponenteDaTela/BotaoTelaCadastroTutor'
import BotaoTelaBuscarAnimal from './ComponenteDaTela/BotaoTelaBuscarAnimal'

import staleTelaTipoUsuario from './styles.js'
import {View,ScrollView,Text}from "react-native"
import TituloDaTela from "../../Global/TituloDaTela/index.js";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function TelaTipoUsuario({ navigation }) {
    
    const navega = navigation

    return (
        <View style={staleTelaTipoUsuario.sTelaTipoUsuarioContainer}>

        

        

          

            <TituloDaTela texto={"SELECIONE O TIPO DO USUARIO"}></TituloDaTela>
            {/* <Text style={{marginBottom:20} , staleTelaTipoUsuario.sTelaTipoUsuarioTexto } > DO USUARIO </Text> */}
            
            <BotaoTelaBuscarAnimal></BotaoTelaBuscarAnimal>
             <BotaoTelaCadastroAnimal></BotaoTelaCadastroAnimal>
             <BotaorTelaCadastraTutor></BotaorTelaCadastraTutor>
        
          
        
        
        </View>
    )
}