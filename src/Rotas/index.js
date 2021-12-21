import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TelaLogin from '../Componente/Tela/Login/index.js';
import TelaTipoUsuario from '../Componente/Tela/TipoUsuario/index.js';

const Stack = createNativeStackNavigator()

export default function Rotas(){

    return(
        <NavigationContainer>
           <Stack.Navigator  >
            <Stack.Screen
              name="TelaLogin" component={TelaLogin}
            />
            <Stack.Screen
              name="TelaTipoUsuario" component={TelaTipoUsuario}
            />
           </Stack.Navigator>
          
          
          
        </NavigationContainer>
    
      );
}