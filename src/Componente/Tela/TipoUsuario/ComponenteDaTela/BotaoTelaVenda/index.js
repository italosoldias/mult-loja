import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';
import TelaLogin from "../../../Login";
import staleTelaTipoUsuario from '../../styles.js'

import { useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function BotaoTelaVenda( props) {
    

    const navegation = useNavigation()

    function renderTelaVenda () {
        navegation.navigate('TelaUsuarioVendedor')
            
         
             }
    

    return (
    
    
    
    <Pressable 
        style={staleTelaTipoUsuario.sTelaTipoUsuarioBotao}
        onPress={  () => {renderTelaVenda()}      }
        > 
           
        <Text style={staleTelaTipoUsuario.sTelaTipoUsuarioTextoBotao}> USUARIO VEMDEDOR </Text>
    </Pressable>
        
        )
}