import React from "react";
import Icone from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, Text, View, TextInput, Button, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import sBotaoGlobal from './styles.js'
export default function BotaoVoltaGlobal (){

    const navega = useNavigation()

    function voltarTela (){
        navega.goBack()
    }

    return(

        <View style={sBotaoGlobal.sBotaoGlobalView}>

        <Pressable 
            onPress={()=>{voltarTela()}}
            style={sBotaoGlobal.sBotaoGlobalBotao}>
        
        </Pressable>
        </View>
    )

}