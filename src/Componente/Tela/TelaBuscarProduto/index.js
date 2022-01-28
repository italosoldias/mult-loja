import React from "react";
import { StyleSheet, Text, View, TextInput, Button,SafeAreaView, TouchableOpacity} from 'react-native';
//import { SafeAreaView } from "react-native-web";
import BuscarProduto from "./ComponenteDaTela/BuscarProduto/index.js";

import staleTelaBuscaProduto from "./styles.js";

// style={staleTelaLogin.sTelaLoginBotao}
export default function TelaBuscarProduto() {
    return (
        
        
        <View style={staleTelaBuscaProduto.sTelaBuscaProdutoContainer}>
                <Text style={staleTelaBuscaProduto.sTelaBuscaProdutoTexto}> BUSQUE O PRODUTO DESEJADO</Text> 
              <BuscarProduto/>
        </View>

        
        )
}