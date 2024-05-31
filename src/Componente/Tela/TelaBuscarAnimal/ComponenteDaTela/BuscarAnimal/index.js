import React, {  useState , useEffect, useContext} from 'react';
import { StyleSheet,Text, View, TextInput, Button,Dimensions,Pressable, SafeAreaView } from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Picker} from '@react-native-picker/picker'

import BotaoPadrao from '../../../../Global/BotaoPadrao/index.js'
import CampoPadrao from "../../../../Global/CampoPadrao/index.js";
import api,{ getAnimal } from '../../../../../services/Api';
import staleTelaBuscaAnimal from '../../styles';

export default function BuscarAnimal(){
 const [selectedValue, setSelectedValue] = useState("idAnimal");
 const [idAnimalEscrito, setIdAnimalEscrito] = useState(null)
 const [idTutorEscrito, setITutorEscrito] = useState(null)
 const [nomeAnimalEscrito, setNomeAnimalEscrito] = useState(null)
 const nav = useNavigation()

 function exibeTelaAnimalRetornado(res){

     nav.navigate("TelaAnimalRetornado", {data : res})

 }

 

async function buscarAnimalApi(){
    
    if(selectedValue == "idAnimal"  && idTutorEscrito != ''){
       
     const  resp = await getAnimal( {idAnimal:idAnimalEscrito} )
       console.log("====================***************")
       console.log(resp)
       exibeTelaAnimalRetornado(resp)
    


    //    // setcodigoDeBarrasEscrito(null)
    } if (selectedValue == "idTutor"  && idTutorEscrito != ''){
        const  resp = await getAnimal( {idTutor:idTutorEscrito} )
        console.log("====================***************")
        console.log(resp)
        exibeTelaAnimalRetornado(resp)
    } if (selectedValue == "nomeAnimal" && nomeAnimalEscrito != '') {
        const  resp = await getAnimal( {nomeAnimal:nomeAnimalEscrito} )
        console.log("====================***************")
        console.log(resp)
        exibeTelaAnimalRetornado(resp)
    } else { 
        console.log("estou vazio")
    }
}


    return (
        <>
            <Picker style={staleTelaBuscaAnimal.sTelaBuscaAnimalComboBox} selectedValue={selectedValue}
      onValueChange={(value) => setSelectedValue(value)}
      >
      <Picker.Item   label="Identificador do Animal" value="idAnimal" />
      <Picker.Item  label="CPF do Tutor" value="idTutor" />
      <Picker.Item  label="Nome do Animal" value="nomeAnimal" />
            </Picker>
            
            { selectedValue === "idAnimal" &&
                <CampoPadrao 
                style={staleTelaBuscaAnimal.sTelaBuscaAnimalCampos}
                onChangeText={setIdAnimalEscrito}
                value={idAnimalEscrito=== null ? '' :idAnimalEscrito}
                inputMode='numeric'
                placeholder= 'Informe o Identificador do Animal'
                />
            }
            {selectedValue === "idTutor" &&
                <CampoPadrao 
                style={staleTelaBuscaAnimal.sTelaBuscaAnimalCampos}
                onChangeText={setITutorEscrito}
                value={idTutorEscrito=== null ? '' :idTutorEscrito}
                inputMode='numeric'
                placeholder= 'Informe o CPF do Tutor'
                />
            }
             { selectedValue === "nomeAnimal" &&
               <CampoPadrao 
               style={staleTelaBuscaAnimal.sTelaBuscaAnimalCampos}
               onChangeText={setNomeAnimalEscrito}
               value={idAnimalEscrito=== null ? '' :idAnimalEscrito}
               inputMode='text'
               placeholder= 'Informe o Nome do Animal'
               /> 
            }
            

           
            <BotaoPadrao  texto={"Buscar"} roda={buscarAnimalApi}/>
           
        
    </>
    )
}