import React, { useEffect, useState , useContext} from 'react';
import { StyleSheet,TouchableOpacity ,Text, View, TextInput,Dimensions,Pressable } from 'react-native';
import ResultadoLogin from '../Resultado/index.js';
// import BotaoConfirmaLogin from '../BotaoConfirmarLigin/index.js'
import BotaoPadrao from "../../../../Global/BotaoPadrao/index.js";
import CampoPadrao from "../../../../Global/CampoPadrao/index.js"
import AtenticacaoProvedor from '../../../../../Contexts/contextoAutenticacao.js';

import staleTelaLogin from '../../styles.js'

// import { color } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

//import ClassAutenticacaoContexDate from '../../../../../Contexts/ClassAutenticacaoContexDate.js';
//import {setAutenticacao} from '../../../../../services/Api.js';


export default function CamposLogin({onPress}){
    
   // console.log(children)
    const {logado,user , aut } = useContext(AtenticacaoProvedor)
   
 //   const [logado, setLogado] = useState(AutenticacaoContexto)
    const [email, setEmail ] = useState(null)
    const [senha, setSenha] = useState(null)
    const [mensagem, setMensagem] = useState('Informe seus dados')

  //  console.log(logado)
     
  async  function enviaReq(){
    const dadosAutenticacao = {email, senha}
    console.log(dadosAutenticacao)
    
       
       
    const aq = await aut(dadosAutenticacao)
       

    
}

 function validaDados (){
    if(email != null && senha != null){
         const dados = {email, senha}
         return  enviaReq()
    } else {
        console.log("cheguei aqui")
   //    console.log (logado)
        setMensagem('preencha algo')
    }
}
  
function ok(){
    console.log (onPress)
}

    return(
       
         

        <>
            <CampoPadrao
               
               onChangeText={setEmail}
               value={email=== null ? '' :email}
               placeholder='INFORME SEU E-MAIL'
               inputMode='email-address'
               />
            <CampoPadrao
                
                onChangeText={setSenha}
                value={senha=== null ? '' :senha}
                placeholder='DIGITE SUA SENHA'
                secureTextEntry= {true}
                />
           
            <BotaoPadrao  texto={"Confirmar"} roda={validaDados}/>
        
    
            

            
             
             <ResultadoLogin mensagemResultado={mensagem} />
                </>
           

           
    )
}

