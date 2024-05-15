import React from 'react';
import {StyleSheet ,Dimensions} from 'react-native';


const {height,width} = Dimensions.get('window')
 const  staleTelaBuscaProduto = StyleSheet.create({
    
    sTelaBuscaProdutoContainer:{
        paddingTop: 50,
        alignItems: "center",
        
        // backgroundColor:"#4E4B4B",
       // 4E4B4B",
        
    },
    sTelaBuscaProdutoCampos: {
        
        width:  width * 0.95 / 1,
        margin:5,
        padding: 2,
        paddingLeft:10,
        borderColor: "#1C1C1C",
        borderWidth: 1,
        
        backgroundColor: "#FFFFFF",
        
    },
    sTelaBuscaProdutoBotao:{
        alignItems: "center",
        
        marginBottom:10,
        height: 35,
        width: width * 0.90 / 1,
        backgroundColor:"#C4C4C4",
        borderColor: "#000000",
        borderWidth: 1,
       
    },
    sTelaBuscaProdutoTextoBotao:{
        color: "#005",
        fontSize:25,
        
    },
    sTelaBuscaProdutoTexto:{
        color:"#E9DDDD",
        fontSize:40,
        marginBottom:20,
        textAlign: "center",
        textShadow:'#000000',
        
    }
})

export default staleTelaBuscaProduto