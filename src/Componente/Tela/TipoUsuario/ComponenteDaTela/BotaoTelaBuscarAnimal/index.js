import React from "react";
import { StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import TelaLogin from "../../../Login/index.js";
import staleTelaTipoUsuario from '../../styles.js'
import BotaoPadrao from '../../../../Global/BotaoPadrao/index.js'
import {
  
  ButtonText,
  ButtonIcon,
  ButtonSpinner,
  ButtonGroup,
} from "@gluestack-ui/themed"
import { useNavigation} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function BotaoTelaVenda( props) {
    

    const navegation = useNavigation()

    function renderTelaBuscarAnimal () {
        navegation.navigate('TelaBuscarAnimal')
            
         
             }
    

    return (
    
    
        <BotaoPadrao texto={"Buscar Animal"} roda={renderTelaBuscarAnimal}
>
  
  
</BotaoPadrao>
    
        
        )
}