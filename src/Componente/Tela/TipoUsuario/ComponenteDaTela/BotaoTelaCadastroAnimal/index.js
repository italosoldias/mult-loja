import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';
import staleTelaTipoUsuario from '../../styles.js'
import { NavigationContainer , useNavigation} from '@react-navigation/native';
import BotaoPadrao from '../../../../Global/BotaoPadrao/index.js'
export default function BotaoTelaCadastroAnimal() {
    const navegation = useNavigation()
    function renderTelaCadastroAnimal (){
        navegation.navigate('TelaCadastrarAnimal')
    }

    return (
        <BotaoPadrao texto={"Cadastrar Animal"} roda={renderTelaCadastroAnimal}/>
    
        )
}