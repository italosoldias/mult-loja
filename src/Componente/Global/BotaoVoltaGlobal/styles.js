import React from 'react';
import {StyleSheet ,Dimensions} from 'react-native';


const {height,width} = Dimensions.get('window')
 const  sBotaoGlobal = StyleSheet.create({

    sBotaoGlobalView:{
        marginTop:40,
        margin:"1%",
        position:"absolute",
        left:15,
        
      
    },
    sBotaoGlobalBotao : {
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor :'#706B6B',
        width:width* 0.18 / 1,
        
        height: height* 0.18 / 1,
    }, 
    sBotaoGlobalIcone:{
        
        color:'#C4C4C4',
        fontSize:35,
    }

 })

 
 export default sBotaoGlobal