import React from 'react';
import {StyleSheet ,Dimensions, Animated} from 'react-native';


const {height,width} = Dimensions.get('window')
 const  staleTelaLogin = StyleSheet.create({
    
   
    sTelaLogincampos: {
        
        width:  width * 0.95 / 1,
        height: height* 0.06 / 1,
        margin:5,
        padding: 2,
        paddingLeft:10,
        borderColor: "#1C1C1C",
        borderWidth: 0,
        borderRadius: 15,
        backgroundColor: "#FFFFFF",
        
    },
   
    
})

export default staleTelaLogin