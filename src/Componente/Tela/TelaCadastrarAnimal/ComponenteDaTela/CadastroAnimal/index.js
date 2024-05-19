import React, {  useState , useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Button,Dimensions,Pressable, SafeAreaView } from 'react-native';
import api,{ postCadastrarAnimal } from '../../../../../services/Api';
import staleTelaCadastraAnimal from '../../styles.js'

export default function CadastrarAnimal(){

 const [idTutorEscrito, setIdTutorEscrito] = useState(null)
 const [idAnimalEscrito, setIdAnimalEscrito] = useState(null)
 const [nomeAnimalEscrito, setNomeAnimalEscrito] = useState(null)
 const [pesoEscrito, setPesoEscrito] = useState(null)
 const [racaEscrita, setRacaEscrita] = useState(null)
 const [especieEscrita, setEspecieEscrita] = useState(null)
 
async function cadastrarAnnimalApi(){
    
    if(idTutorEscrito != null && idTutorEscrito.length != 0){
        console.log('nao sou null')
        console.log(idTutorEscrito)

   
     const  resp = await 
     postCadastrarAnimal(
        {"idTutor" :idTutorEscrito,
         "idAnimal" : idAnimalEscrito,
         "nomeAnimal": nomeAnimalEscrito,
         "peso": new Number (pesoEscrito),
         "especie": especieEscrita,
         "raca": racaEscrita
         } )
        console.log(resp)

    //    // setIdTutorEscrito(null)
    } else { 
        console.log("estou vazio")
    }
}


    return (
        <SafeAreaView style={staleTelaCadastraAnimal.sTelaCadastraAnimalContainer}>

            <TextInput 
                style={staleTelaCadastraAnimal.sTelaCadastraAnimalCampos}
                onChangeText={setNomeAnimalEscrito}
                value={ nomeAnimalEscrito=== null ? '' :nomeAnimalEscrito}
                inputMode='text'
                placeholder='INFORME O NOME DO ANIMAL'
            />
            <TextInput 
                style={staleTelaCadastraAnimal.sTelaCadastraAnimalCampos}
                onChangeText={setRacaEscrita}
                value={racaEscrita === null ? '' :racaEscrita}
                inputMode='text'
                placeholder='INFORME A RAÇA DO ANIMAL'
            />
            {/* ADICIONAR UM COMBO BOX PARA O ELEMENTO ABAIXO */}
            <TextInput 
                style={staleTelaCadastraAnimal.sTelaCadastraAnimalCampos}
                onChangeText={setEspecieEscrita}
                value={especieEscrita === null ? '' :especieEscrita}
                inputMode='text'
                placeholder='INFORME A ESPECIE DO ANIMAL'
            />
            <TextInput 
                style={staleTelaCadastraAnimal.sTelaCadastraAnimalCampos}
                onChangeText={setIdTutorEscrito}
                value={idTutorEscrito === null ? '' :idTutorEscrito}
                inputMode='numeric'
                placeholder='INFORME O CPF DO TUTOR'
            />
            <TextInput 
                style={staleTelaCadastraAnimal.sTelaCadastraAnimalCampos}
                onChangeText={setIdAnimalEscrito}
                value={idAnimalEscrito === null ? '' :idAnimalEscrito}
                inputMode='numeric'
                placeholder='INFORME A IDENTIDADE DO ANIMAL'
            />
            <TextInput 
                style={staleTelaCadastraAnimal.sTelaCadastraAnimalCampos}
                onChangeText={setPesoEscrito}
                value={pesoEscrito=== null ? '' :pesoEscrito}
                inputMode='decimal'
                placeholder='INFORME O PESO DO ANIMAL'
            />
            <Pressable 
                style={staleTelaCadastraAnimal.sTelaCadastraAnimalBotao} 
                onPress={()=>{cadastrarAnnimalApi()}}
            >
                <Text 
                    style={staleTelaCadastraAnimal.sTelaCadastraAnimalTextoBotao}>CADASTRAR</Text>
            </Pressable>
        </SafeAreaView>
    )
}