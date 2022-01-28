import React from "react";
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import { useNavigation} from '@react-navigation/native';

import staleTelaUsuarioVendedor from "../../styles.js";

export default function BotaoDigitarCodigo() {

    const nav = useNavigation()

    function exibeTelaDigitarCodigoDeBarras(){

        nav.navigate("TelaBuscarProduto")

    }

    return(
        <TouchableOpacity 
            onPress={()=>{exibeTelaDigitarCodigoDeBarras()}}
            style={staleTelaUsuarioVendedor.sTelaUsuarioVendedorBotao}
            >
            <Text style={staleTelaUsuarioVendedor.sTelaUsuarioVendedorTextoBotao}> DIGITAR CODIGO DE BARRAS</Text>
        </TouchableOpacity>
    )
}