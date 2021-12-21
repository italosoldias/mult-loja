import React from "react";
import { Text, View } from "react-native";

export default function ResultadoLogin(props){
   return( 
        <View> 
            
            <Text>{props.mensagemResultado}</Text>
            
        </View>
   )
}