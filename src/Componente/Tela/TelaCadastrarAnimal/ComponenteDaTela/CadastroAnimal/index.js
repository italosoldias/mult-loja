import React, {  useState , useContext} from 'react';
import { StyleSheet, Text, View, TextInput, Button,Dimensions,Pressable, SafeAreaView } from 'react-native';
import api,{ postCadastrarAnimal } from '../../../../../services/Api';
import staleTelaCadastraAnimal from '../../styles.js'
import BotaoPadrao from "../../../../Global/BotaoPadrao/index.js";
import CampoPadrao from "../../../../Global/CampoPadrao/index.js";
import * as ImagePicker from 'expo-image-picker';
export default function CadastrarAnimal(){

 const [idTutorEscrito, setIdTutorEscrito] = useState(null)
 const [idAnimalEscrito, setIdAnimalEscrito] = useState(null)
 const [nomeAnimalEscrito, setNomeAnimalEscrito] = useState(null)
 const [pesoEscrito, setPesoEscrito] = useState(null)
 const [racaEscrita, setRacaEscrita] = useState(null)
 const [especieEscrita, setEspecieEscrita] = useState(null)
 const [imagenSalva, setImagemSalva]= useState(null)
 
 const  imagem = async () =>{
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
        base64: true
      });
      
      setImagemSalva(result)
}

async function cadastrarAnnimalApi(){
    
   
    

    if(idTutorEscrito != null && idTutorEscrito.length != 0){
        console.log('nao sou null')
        const stringImagem = `data:${imagenSalva.assets[0].mimeType};base64,${imagenSalva.assets[0].base64}`
        console.log(imagenSalva)
        console.log(idTutorEscrito)

        

    try {
        const  resp = await 
     postCadastrarAnimal(
        {"idTutor" :idTutorEscrito,
         "idAnimal" : idAnimalEscrito,
         "nomeAnimal": nomeAnimalEscrito,
         "peso": new Number (pesoEscrito),
         "especie": especieEscrita,
         "raca": racaEscrita, 
         "imagem": stringImagem

         } )
    } catch (error) {
        console.log(error)
    }
     
        

    //    // setIdTutorEscrito(null)
    } else { 
        console.log("estou vazio")
    }
}


    return (
        <>

            <CampoPadrao 
                style={staleTelaCadastraAnimal.sTelaCadastraAnimalCampos}
                onChangeText={setNomeAnimalEscrito}
                value={ nomeAnimalEscrito=== null ? '' :nomeAnimalEscrito}
                inputMode='text'
                placeholder='INFORME O NOME DO ANIMAL'
            />
            <CampoPadrao 
                style={staleTelaCadastraAnimal.sTelaCadastraAnimalCampos}
                onChangeText={setRacaEscrita}
                value={racaEscrita === null ? '' :racaEscrita}
                inputMode='text'
                placeholder='INFORME A RAÇA DO ANIMAL'
            />
            {/* ADICIONAR UM COMBO BOX PARA O ELEMENTO ABAIXO */}
            <CampoPadrao 
                style={staleTelaCadastraAnimal.sTelaCadastraAnimalCampos}
                onChangeText={setEspecieEscrita}
                value={especieEscrita === null ? '' :especieEscrita}
                inputMode='text'
                placeholder='INFORME A ESPECIE DO ANIMAL'
            />
            <CampoPadrao 
                style={staleTelaCadastraAnimal.sTelaCadastraAnimalCampos}
                onChangeText={setIdTutorEscrito}
                value={idTutorEscrito === null ? '' :idTutorEscrito}
                inputMode='numeric'
                placeholder='INFORME O CPF DO TUTOR'
            />
            <CampoPadrao 
                style={staleTelaCadastraAnimal.sTelaCadastraAnimalCampos}
                onChangeText={setIdAnimalEscrito}
                value={idAnimalEscrito === null ? '' :idAnimalEscrito}
                inputMode='numeric'
                placeholder='INFORME A IDENTIDADE DO ANIMAL'
            />
            <CampoPadrao 
                style={staleTelaCadastraAnimal.sTelaCadastraAnimalCampos}
                onChangeText={setPesoEscrito}
                value={pesoEscrito=== null ? '' :pesoEscrito}
                inputMode='decimal'
                placeholder='INFORME O PESO DO ANIMAL'
            />
            <BotaoPadrao 
                texto={"Enviar Imagem"}
                roda={imagem}
            >
                
            </BotaoPadrao>
            <BotaoPadrao 
                texto={"Cadastrar"}
                roda={cadastrarAnnimalApi}
            >
            </BotaoPadrao>
        </>
    )
}