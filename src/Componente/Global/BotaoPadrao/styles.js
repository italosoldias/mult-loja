import React from 'react';
import {StyleSheet ,Dimensions} from 'react-native';


const {height,width} = Dimensions.get('window')
 const  sBotaoPadrao = StyleSheet.create({

    sBotaoPadraoView:{
        width:"100%",
        left:15,
        
    },
    sBotaoPadraoBotao : {
        justifyContent:"space-around",
        alignItems:"center",
        backgroundColor :'#4E1B96',
        // backgroundColor :'#0f766e',
        borderWidth: 1,
        borderColor:"#2563eb",
        borderRadius:50,
        margin:8,
        width:"95%",
        height: height* 0.08 / 1,
        
    }, 
    sBotaoPadraoTexto:{
        fontSize:  height* 0.035 / 1,
        color:'#C4C4C4',
        fontWeight: 'bold',
       
    }

 })

 
 export default sBotaoPadrao