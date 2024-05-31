import React, {  useState , useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Button,Dimensions,Pressable, SafeAreaView } from 'react-native';
import api,{ postCadastrarTutor } from '../../../../../services/Api.js';
import staleTelaCadastraTutor from '../../styles.js'
import BotaoPadrao from "../../../../Global/BotaoPadrao/index.js";
import CampoPadrao from "../../../../Global/CampoPadrao/index.js";
export default function CadastrarTutor(){

 const [idTutorEscrito, setIdTutorEscrito] = useState(null)
 const [nomeTutorEscrito, setNomeTutorEscrito] = useState(null)
 const [emailEscrito, setEmailEscrito] = useState(null)
 
async function cadastrarAnnimalApi(){
    
    if(idTutorEscrito != null && idTutorEscrito.length != 0){
        console.log('nao sou null')
        console.log(idTutorEscrito)

   
     const  resp = await 
     postCadastrarTutor(
        {"idTutor" : idTutorEscrito,
        "nomeTutor": nomeTutorEscrito,
        "email": emailEscrito
       
         } )
        console.log(resp)

    //    // setIdTutorEscrito(null)
    } else { 
        console.log("estou vazio")
    }
}


    return (
        <>

            <CampoPadrao 
                style={staleTelaCadastraTutor.staleTelaCadastraTutorCampos}
                onChangeText={setNomeTutorEscrito}
                value={ nomeTutorEscrito=== null ? '' :nomeTutorEscrito}
                inputMode='text'
                placeholder='INFORME O NOME DO TUTOR'
            />
            
            <CampoPadrao 
                style={staleTelaCadastraTutor.staleTelaCadastraTutorCampos}
                onChangeText={setEmailEscrito}
                value={emailEscrito === null ? '' :emailEscrito}
                inputMode='email'
                placeholder='INFORME O EMAIL'
            />
            <CampoPadrao 
                style={staleTelaCadastraTutor.staleTelaCadastraTutorCampos}
                onChangeText={setIdTutorEscrito}
                value={idTutorEscrito === null ? '' :idTutorEscrito}
                inputMode='numeric'
                placeholder='INFORME O CPF'
                />
          
            
            <BotaoPadrao 
               texto={"CADASTRAR"}
               roda={cadastrarAnnimalApi}
               >
                
            </BotaoPadrao>
            </>
        
    )
}