import React from 'react';
import {StyleSheet ,Dimensions, Animated} from 'react-native';


const {height,width} = Dimensions.get('window')
 const  staleTelaLogin = StyleSheet.create({
    
    sTelaLogincontainer:{
        paddingTop: height * 0.50 / 1,
        alignItems: "center",
        
       // 4E4B4B",
        
    },
    sTelaLogincampos: {
        
        width:  width * 0.95 / 1,
        height : height * 0.05/1,
        margin:5,
        padding: 2,
        paddingLeft:10,
        borderColor: "#1C1C1C",
        borderWidth: 0,
        borderRadius: 15,
        backgroundColor: "#FFFFFF",
        
    },
   
    sTelaLoginBotao:{
        alignItems: "center",
        
        justifyContent:"center",
        height: 25,
       marginTop: 20,
       height : height * 0.06/1,
        width: width * 0.80 / 1,
        backgroundColor:"#C4C4C4",
        borderColor: "#000000",
        borderWidth: 0.5,
        borderRadius: 35,
        
    },
    sTelaLoginTextoBotao:{
        color: "#005",
        position : 'absolute',
        justifyContent:"center",
    }
})

export default staleTelaLogin