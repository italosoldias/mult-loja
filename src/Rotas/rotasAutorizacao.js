import React from "react";
import TelaLogin from "../Componente/Tela/Login/index.js";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AutorizacaoStack = createNativeStackNavigator()




export default function RotaAutenticacao () {
    return(
    <AutorizacaoStack.Navigator screenOptions={{
      headerShown: false
  }}>
        <AutorizacaoStack.Screen
              options={{
                contentStyle :{backgroundColor : "#264653"}
                
            }}
           
              name="TelaLogin" component={TelaLogin}
            />
    </AutorizacaoStack.Navigator>
    )};

