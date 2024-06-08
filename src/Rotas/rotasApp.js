import React from "react";
import TelaTipoUsuario from "../Componente/Tela/TipoUsuario";
import TelaUsuarioVendedor from "../Componente/Tela/TelaUsuarioVendedor"
import TelaUsuarioAdministrador from "../Componente/Tela/TelaUsuarioAdministrador"
import TelaBuscarProduto from "../Componente/Tela/TelaBuscarProduto"
import TelaBuscarAnimal from "../Componente/Tela/TelaBuscarAnimal"
import TelaCadastrarAnimal from '../Componente/Tela/TelaCadastrarAnimal'
import TelaCadastrarTutor from '../Componente/Tela/TelaCadastroTutor'
import TelaAnimalRetornado from '../Componente/Tela/TelaAnimalRetornado/index.js'
import MenuLateral from "../Componente/Global/MenuLateral/itens/index.js";
import { createNativeStackNavigator , } from '@react-navigation/native-stack';

const AppStack = createNativeStackNavigator()

const RotaApp = () => (


    <AppStack.Navigator  >
        <AppStack.Screen 
            // options={{
            //     contentStyle :{backgroundColor : "#4E4B4B"}
            // }}
            name="MenuLateral"  component={MenuLateral}
            />
        {/* <AppStack.Screen
            name="TelaUsuarioVendedor" component={TelaUsuarioVendedor}
            />   
        <AppStack.Screen 
            name="TelaUsuarioAdministrador" component={TelaUsuarioAdministrador}
        />     
        <AppStack.Screen
            name="TelaBuscarProduto" component={TelaBuscarProduto}
        />
        <AppStack.Screen
            name="TelaBuscarAnimal" component={TelaBuscarAnimal}
        />
        <AppStack.Screen
            name="TelaCadastrarAnimal" component={TelaCadastrarAnimal}
        />
        <AppStack.Screen
            name="TelaCadastrarTutor" component={TelaCadastrarTutor}
        />
    */}
    <AppStack.Screen
        name="TelaAnimalRetornado" component={TelaAnimalRetornado}
    />
    </AppStack.Navigator>
);

export default RotaApp;