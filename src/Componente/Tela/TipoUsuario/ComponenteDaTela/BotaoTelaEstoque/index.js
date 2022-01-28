import React from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import staleTelaLogin from '../../../Login/styles';
import staleTelaTipoUsuario from '../../styles.js'
import { NavigationContainer , useNavigation} from '@react-navigation/native';

export default function BotaoTelaEstoque() {
    const navegation = useNavigation()
    function renderTelaEstoque (){
        navegation.navigate('TelaUsuarioVendedor')
    }

    return (
    <TouchableOpacity style={staleTelaTipoUsuario.sTelaTipoUsuarioBotao}
    onPress={()=> {renderTelaEstoque()}}
    >
        <Text style={staleTelaTipoUsuario.sTelaTipoUsuarioTextoBotao}> USUARIO ADMINISTRADOR </Text>
    </TouchableOpacity>
        )
}