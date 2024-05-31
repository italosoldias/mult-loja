import React from 'react';
import {StyleSheet ,Dimensions} from 'react-native';


const {height,width} = Dimensions.get('window')
 const  sFundoGlobal = StyleSheet.create({

    
    sBackColor : {
       flex:1,
       alignItems: "center",
        backgroundColor:"#264653",
        
    }

 })

 
 export default sFundoGlobal

 //bg={"$teal500"} marginTop={"20%"} marginBottom={"10%"} alignItems='center' borderRadius={"$2xl"}