import React, {  useState , useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Button,Dimensions,Pressable, SafeAreaView } from 'react-native';
import api,{ getProduto } from '../../../../../services/Api';
import staleTelaBuscaProduto from '../../styles';

export default function BuscarProduto(){

 const [codigoDeBarrasEscrito, setcodigoDeBarrasEscrito] = useState(null)

async function buscarProdutoApi(){
    
    if(codigoDeBarrasEscrito != null && codigoDeBarrasEscrito.length != 0){
        console.log('nao sou null')
        console.log(codigoDeBarrasEscrito)

   
     const  resp = await getProduto( {headers : {"codigoDeBarras" :codigoDeBarrasEscrito}} )
        console.log(resp)

    //    // setcodigoDeBarrasEscrito(null)
    } else { 
        console.log("estou vazio")
    }
}


    return (
        <SafeAreaView style={staleTelaBuscaProduto.sTelaBuscaProdutoContainer}>

            <TextInput 
                style={staleTelaBuscaProduto.sTelaBuscaProdutoCampos}
                onChangeText={setcodigoDeBarrasEscrito}
                value={codigoDeBarrasEscrito}
                inputMode='numeric'
            />
            <Pressable 
                style={staleTelaBuscaProduto.sTelaBuscaProdutoBotao} 
                onPress={()=>{buscarProdutoApi()}}
            >
                <Text 
                    style={staleTelaBuscaProduto.sTelaBuscaProdutoTextoBotao}>BUSCAR
                </Text>
            </Pressable>
        </SafeAreaView>
    )
}