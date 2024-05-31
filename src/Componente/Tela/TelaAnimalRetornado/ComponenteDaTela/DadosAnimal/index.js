import React, {  useState , useContext, useEffect} from 'react';
import {  Text, Image ,View, TextInput, Button,Dimensions,Pressable, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/native'
import staleTelaAnimalRetornado from '../../styles'
export default function DadosAnimal(params) {
    const route = useRoute()
    
    const { data } = route.params;
    
    
    return(
        <SafeAreaView style={staleTelaAnimalRetornado.sTelaAnimalRetornadoView}>
            <Text style={staleTelaAnimalRetornado.sTelaAnimalRetornadoTextoDadosAnimal}>Nome do animal: {data.nomeAnimal}</Text>
            <Text style={staleTelaAnimalRetornado.sTelaAnimalRetornadoTextoDadosAnimal}>Identificador do Animal: {data.idAnimal}</Text>
            <Text style={staleTelaAnimalRetornado.sTelaAnimalRetornadoTextoDadosAnimal}>CPF do Tutor: {data.idTutor}</Text>
            <Text style={staleTelaAnimalRetornado.sTelaAnimalRetornadoTextoDadosAnimal}>Raça do Aninimal: {data.raca}</Text>
            <Text style={staleTelaAnimalRetornado.sTelaAnimalRetornadoTextoDadosAnimal}>Peso do Animal: {data.peso}</Text>
            <Text style={staleTelaAnimalRetornado.sTelaAnimalRetornadoTextoDadosAnimal}>Especie do Animal: {data.especie}</Text>
            {data.imagem != undefined ? <Image 
            source={{ uri: data.imagem, base64: true }}
            style={{ width: 200, height: 200 }}
            /> 
            : <Text style={staleTelaAnimalRetornado.sTelaAnimalRetornadoTextoDadosAnimal}>SEM IMAGEM </Text> }
        </SafeAreaView>
    )
}