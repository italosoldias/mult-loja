import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button , Dimensions, SafeAreaViewComponent} from 'react-native';
import ResultadoLogin from './ComponenteDaTela/Resultado/index';

import CamposLogin from './ComponenteDaTela/Campos';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function TelaLogin(){

  


    return(
        

            <SafeAreaView style={stal.container}>
                
               <CamposLogin/>
               <ResultadoLogin/>

            </SafeAreaView>
                
    
         
            
        
        
    )
}
const {height,width} = Dimensions.get('window')
const stal = StyleSheet.create({
    
    container:{
        height:  height * 100 / 1,
        
        //backgroundColor:"#4E4B4B",
    },
})