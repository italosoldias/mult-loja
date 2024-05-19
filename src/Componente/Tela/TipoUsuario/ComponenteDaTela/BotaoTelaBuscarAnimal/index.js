import React from "react";
import { StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';
import TelaLogin from "../../../Login/index.js";
import staleTelaTipoUsuario from '../../styles.js'

import { useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function BotaoTelaVenda( props) {
    

    const navegation = useNavigation()

    function renderTelaBuscarAnimal () {
        navegation.navigate('TelaBuscarAnimal')
            
         
             }
    

    return (
    
    
    
    <Pressable 
        style={staleTelaTipoUsuario.sTelaTipoUsuarioBotao}
        onPress={  () => {renderTelaBuscarAnimal()}      }
        > 
           
        <Text style={staleTelaTipoUsuario.sTelaTipoUsuarioTextoBotao}> BUSCAR ANIMAL </Text>
    </Pressable>
        
        )
}