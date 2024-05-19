import React from 'react';
import {StyleSheet ,Dimensions} from 'react-native';


const {height,width} = Dimensions.get('window')
 const  staleTelaBuscaAnimal = StyleSheet.create({
    
    sTelaBuscaAnimalContainer:{
        paddingTop: 50,
        
        alignItems: "center",
        
        // backgroundColor:"#4E4B4B",
       // 4E4B4B",
        
    },
    sTelaBuscaAnimalCampos: {
        
        width:  width * 0.95 / 1,
        margin:5,
        padding: 2,
        paddingLeft:10,
        borderColor: "#1C1C1C",
        borderWidth: 1,
        
        backgroundColor: "#FFFFFF",
        
    },
    sTelaBuscaAnimalBotao:{
        alignItems: "center",
        
        marginBottom:10,
        height: 35,
        width: width * 0.90 / 1,
        backgroundColor:"#C4C4C4",
        borderColor: "#000000",
        borderWidth: 1,
       
    },
    sTelaBuscaAnimalTextoBotao:{
        color: "#005",
        fontSize:25,
        
    },
    sTelaBuscaAnimalTexto:{
        color:"#E9DDDD",
        fontSize:40,
        paddingTop:50 ,
        textAlign: "center",
        textShadow:'#000000',
        
    },
    sTelaBuscaAnimalComboBox:{
        height:height* 0.041 / 1 ,
        width: width * 0.90 / 1,
        backgroundColor:"#DCDCDC"
    }
})

export default staleTelaBuscaAnimal