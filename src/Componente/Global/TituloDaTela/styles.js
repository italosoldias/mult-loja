import React from 'react';
import {StyleSheet ,Dimensions} from 'react-native';


const {height,width} = Dimensions.get('window')
 const  sTituloDaTela = StyleSheet.create({

    sTituloDaTelaView:{
        width:"100%",
       
       
        left:15,
        
      
    },
    sTituloDaTelaCaixa : {
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor :'#e9c46a',
        borderWidth: 1,
        borderColor:"#2563eb",
        margin:"1%",
        
        width:"80%",
        
        height: height* 0.18 / 1,
    }, 
    sTituloDaTelaTexto:{
        
        fontSize: height* 0.04 / 1,
        color:'#264653',
       
        textAlign:"center",
    }

 })

 
 export default sTituloDaTela

 //bg={"$teal500"} marginTop={"20%"} marginBottom={"10%"} alignItems='center' borderRadius={"$2xl"}