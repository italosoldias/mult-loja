import React, { useEffect, useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ResultadoLogin from '../Resultado/index.js';


import api from '../../../../../services/Api.js';

export default function CamposLogin(){

    

    const [email, setEmail ] = useState(null)
    const [senha, setSenha] = useState(null)
    const [mensagem, setMensagem] = useState('Informe seus dados')


     async   function enviaReq(){
        const dadosAutenticacao = {email, senha}
        console.log(dadosAutenticacao)
        
      

        const resAutenticacao = await  api.post('/autenticacao',
            dadosAutenticacao
                
            );
            console.log(resAutenticacao.data)
       
        if(resAutenticacao.data != null){
            console.log("to pegando")
        }else{
            console.log('não peguei ')
        }
    }

    function validaDados (){
        if(email != null && senha != null){
             const dados = {email, senha}
             return  enviaReq()
        } else {
            console.log("cheguei aqui")
            setMensagem('preencha algo')
        }
    }


    return(
        <View  >
            <View>
            <TextInput
                onChangeText={setEmail}
                value={email}
                placeholder='INFORME SEU E-MAIL'
                keyboardType='email-address'
            />
            <TextInput
                onChangeText={setSenha}
                value={senha}
                placeholder='DIGITE SUA SENHA'
                secureTextEntry= {true}
            />
            <Button
                onPress={()=> {validaDados()}}
                title='confirmar'
            />  
            </View>
            <ResultadoLogin mensagemResultado={mensagem} />
            </View>
    )
}