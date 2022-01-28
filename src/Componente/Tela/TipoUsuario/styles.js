import React from 'react';
import {StyleSheet ,Dimensions} from 'react-native';


const {height,width} = Dimensions.get('window')
 const  staleTelaTipoUsuario = StyleSheet.create({
    
    sTelaTipoUsuarioContainer:{
        paddingTop: 50,
        alignItems: "center",
        
        // backgroundColor:"#4E4B4B",
       // 4E4B4B",
        
    },
    sTelaTipoUsuarioCampos: {
        
        width:  width * 0.95 / 1,
        margin:5,
        padding: 2,
        paddingLeft:10,
        borderColor: "#1C1C1C",
        borderWidth: 1,
        
        backgroundColor: "#FFFFFF",
        
    },
    sTelaTipoUsuarioBotao:{
        alignItems: "center",
        
        marginBottom:10,
        height: 35,
        width: width * 0.90 / 1,
        backgroundColor:"#C4C4C4",
        borderColor: "#000000",
        borderWidth: 1,
       
    },
    sTelaTipoUsuarioTextoBotao:{
        color: "#005",
        fontSize:25,
        
    },
    sTelaTipoUsuarioTexto:{
        color:"#E9DDDD",
        fontSize:40,
        marginBottom:20,
        textAlign: "center",
        textShadowColor:'#000000',
        textShadowRadius:5
    }
})

export default staleTelaTipoUsuario