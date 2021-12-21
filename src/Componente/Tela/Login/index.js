import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ResultadoLogin from './ComponenteDaTela/Resultado/index';

import CamposLogin from './ComponenteDaTela/Campos';

export default function TelaLogin(){

  


    return(
        <View>
            
           <CamposLogin/>
           <ResultadoLogin/>
            

        </View>
        
    )
}