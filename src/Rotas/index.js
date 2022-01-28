import React, {useContext} from "react";
import{View,ActivityIndicator} from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AutenticacaoContexto from '../Contexts/contextoAutenticacao';

import RotaApp from "./rotasApp.js";
import RotaAutenticacao from "./rotasAutorizacao.js";

const Stack = createNativeStackNavigator()

export default function Rotas(){

    const {logado, carregando} = useContext(AutenticacaoContexto)
    // if(carregando){
    //     return(
    //         <View style={{ flex:3, justifyContent:'center', alignItems:'center' }}>
    //             <ActivityIndicator size='large' color='#999'/>
    //         </View>
    //     )
    // }

    if(logado == true){
        return(<RotaApp/>)
    }else {
        return(<RotaAutenticacao/>)
    } ;
}