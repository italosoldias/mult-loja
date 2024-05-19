import React, { useEffect, useState , useContext} from 'react';
import { StyleSheet ,Text, View,TouchableOpacity ,TextInput,Dimensions,Pressable } from 'react-native';
import staleTelaLogin from '../../styles'
function BotaoConfirmaLogin({ onPress, title }){


    return(

       <View>

        <TouchableOpacity  style={staleTelaLogin.sTelaLoginBotao}>
        
    <Text style={staleTelaLogin.sTelaLoginTextoBotao}>CONFIRMAR</Text>
    </TouchableOpacity>
       </View>
   
        
        )

}

export default  BotaoConfirmaLogin