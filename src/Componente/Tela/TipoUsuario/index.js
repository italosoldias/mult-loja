import * as React from 'react';
import { StyleSheet, Text, View, TextInput, Button,Pressable } from 'react-native';
import BotaoTelaVenda from './ComponenteDaTela/BotaoTelaVenda/index.js'
import BotaoTelaEstoque from './ComponenteDaTela/BotaoTelaEstoque/index.js'
import BotaoTelaCadastroAnimal from './ComponenteDaTela/BotaoTelaCadastroAnimal'
import TelaUsuarioVendedor from '../TelaUsuarioVendedor/index.js'
import BotaorTelaCadastraTutor from './ComponenteDaTela/BotaoTelaCadastroTutor'
// import staleTelaLogin from '../Login/styles.js'
import staleTelaTipoUsuario from './styles.js'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function TelaTipoUsuario({ navigation }) {
    
    const navega = navigation

    return (
        <View style = {staleTelaTipoUsuario.sTelaTipoUsuarioContainer}>
          
            <Text style={staleTelaTipoUsuario.sTelaTipoUsuarioTexto}>SELECIONE O TIPO   DO USUARIO</Text>
            {/* <Text style={{marginBottom:20} , staleTelaTipoUsuario.sTelaTipoUsuarioTexto } > DO USUARIO </Text> */}
            <BotaoTelaVenda   > </BotaoTelaVenda>

             <BotaoTelaEstoque  ></BotaoTelaEstoque>

             <BotaoTelaCadastroAnimal></BotaoTelaCadastroAnimal>
             <BotaorTelaCadastraTutor></BotaorTelaCadastraTutor>
        </View>
    )
}