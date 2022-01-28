import React from "react";
import TelaTipoUsuario from "../Componente/Tela/TipoUsuario";
import TelaUsuarioVendedor from "../Componente/Tela/TelaUsuarioVendedor"
import TelaUsuarioAdministrador from "../Componente/Tela/TelaUsuarioAdministrador"
import TelaBuscarProduto from "../Componente/Tela/TelaBuscarProduto"


import { createNativeStackNavigator } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator()

const RotaApp = () => (
    <AppStack.Navigator screenOptions={{
        headerShown: false,
        contentStyle :{backgroundColor : "#4E4B4B"}
    }} >
        <AppStack.Screen 
            // options={{
            //     contentStyle :{backgroundColor : "#4E4B4B"}
            // }}
            name="TelaTipoUsuario"  component={TelaTipoUsuario}
            />
        <AppStack.Screen
            name="TelaUsuarioVendedor" component={TelaUsuarioVendedor}
            />   
        <AppStack.Screen 
            name="TelaUsuarioAdministrador" component={TelaUsuarioAdministrador}
        />     
        <AppStack.Screen
            name="TelaBuscarProduto" component={TelaBuscarProduto}
        />
    </AppStack.Navigator>
);

export default RotaApp;