import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';
import staleTelaLogin from '../../../Login/styles.js';
import staleTelaTipoUsuario from '../../styles.js'
import { NavigationContainer , useNavigation} from '@react-navigation/native';

export default function BotaoTelaCadastroAnimal() {
    const navegation = useNavigation()
    function renderTelaEstoque (){
        navegation.navigate('TelaCadastrarTutor')
    }

    return (
    <Pressable style={staleTelaTipoUsuario.sTelaTipoUsuarioBotao}
    onPress={()=> {renderTelaEstoque()}}
    >
        <Text style={staleTelaTipoUsuario.sTelaTipoUsuarioTextoBotao}> CADASTRAR TUTOR </Text>
    </Pressable>
        )
}