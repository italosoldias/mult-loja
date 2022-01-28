import React from 'react';
import {StyleSheet ,Dimensions} from 'react-native';


const {height,width} = Dimensions.get('window')
 const  sBotaoGlobal = StyleSheet.create({

    sBotaoGlobalView:{
        paddingTop:45,
       
        position:"absolute",
        left:15,
        
      
    },
    sBotaoGlobalBotao : {
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor :'#706B6B',
        width:45,
        height:45,
    }, 
    sBotaoGlobalIcone:{
        
        color:'#C4C4C4',
        fontSize:35,
    }

 })

 
 export default sBotaoGlobal