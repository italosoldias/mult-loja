import React from 'react';
import {StyleSheet ,Dimensions} from 'react-native';


const {height,width} = Dimensions.get('window')
 const  sFundoGlobal = StyleSheet.create({

    
    sBackColor : {
       flex:1,
       alignItems: "center",
        backgroundColor:"#D6FFDC",
        justifyContent:"center",
        position:"relative"
       
    },
    sGlobalCentralise:{
      
    }
 })

 
 export default sFundoGlobal

 //bg={"$teal500"} marginTop={"20%"} marginBottom={"10%"} alignItems='center' borderRadius={"$2xl"}