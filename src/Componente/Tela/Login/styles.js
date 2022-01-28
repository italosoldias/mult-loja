import React from 'react';
import {StyleSheet ,Dimensions} from 'react-native';


const {height,width} = Dimensions.get('window')
 const  staleTelaLogin = StyleSheet.create({
    
    sTelaLogincontainer:{
        paddingTop: height * 0.50 / 1,
        alignItems: "center",
        
       // 4E4B4B",
        
    },
    sTelaLogincampos: {
        
        width:  width * 0.95 / 1,
        margin:5,
        padding: 2,
        paddingLeft:10,
        borderColor: "#1C1C1C",
        borderWidth: 1,
        
        backgroundColor: "#FFFFFF",
        
    },
    sTelaLoginBotao:{
        alignItems: "center",
        height: 25,
        width: width * 0.80 / 1,
        backgroundColor:"#C4C4C4",
        borderColor: "#000000",
        borderWidth: 1,
        
    },
    sTelaLoginTextoBotao:{
        color: "#005"
    }
})

export default staleTelaLogin