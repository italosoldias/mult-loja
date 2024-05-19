import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';
import staleTelaTipoUsuario from '../../styles.js'
import { NavigationContainer , useNavigation} from '@react-navigation/native';

export default function BotaoTelaCadastroAnimal() {
    const navegation = useNavigation()
    function renderTelaCadastroAnimal (){
        navegation.navigate('TelaCadastrarAnimal')
    }

    return (
    <Pressable style={staleTelaTipoUsuario.sTelaTipoUsuarioBotao}
    onPress={()=> {renderTelaCadastroAnimal()}}
    >
        <Text style={staleTelaTipoUsuario.sTelaTipoUsuarioTextoBotao}> CADASTRAR ANIMAL </Text>
    </Pressable>
        )
}