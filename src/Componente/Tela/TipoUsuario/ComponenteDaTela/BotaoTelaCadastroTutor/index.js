import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';
import staleTelaLogin from '../../../Login/styles.js';
import staleTelaTipoUsuario from '../../styles.js'
import { NavigationContainer , useNavigation} from '@react-navigation/native';
import BotaoPadrao from '../../../../Global/BotaoPadrao/index.js'
export default function BotaoTelaCadastroAnimal() {
    const navegation = useNavigation()
    function renderTelaCadastrarTutor (){
        navegation.navigate('TelaCadastrarTutor')
    }

    return (
        <BotaoPadrao texto={"Cadastrar Tutor"} roda={renderTelaCadastrarTutor}/>
    
   
        )
}