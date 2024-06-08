import React, {useContext} from "react";
import TelaBuscarAnimal from "../../../Tela/TelaBuscarAnimal/index.js"
import TelaCadastrarAnimal from "../../../Tela/TelaCadastrarAnimal/index.js"
import  TipoUsuario from "../../../Tela/TipoUsuario/index.js";
import  TelaCadastroTutor from "../../../Tela/TelaCadastroTutor/index.js";
import { createDrawerNavigator } from '@react-navigation/drawer';
import AutenticacaoContexto from "../../../../Contexts/contextoAutenticacao.js";
import TelaAnimalRetornado from "../../../Tela/TelaAnimalRetornado";
const Drawer = createDrawerNavigator();
// screenOptions={{headerTitle: null, headerShown: false,}}
function MyDrawer( p) {
    const {nome, carregando} = useContext(AutenticacaoContexto)
    
    
    const tipoUsu = 2
    // const {logado, carregando} = useContext(AutenticacaoContexto)

  return (
      <Drawer.Navigator screenOptions={{headerTitle: () => null , 
        headerStyle:{backgroundColor:"#43A351"}, 
        drawerStyle: {backgroundColor: '#43A351',},
        drawerActiveBackgroundColor:"#5559",
        drawerActiveTintColor:"#D6FFDC"
        }} >
      <Drawer.Screen name="Tipo Usuario" component={TipoUsuario}  />
        { tipoUsu == 2 && (
            <Drawer.Screen backgroundColor="#1C1C1C"  name="Cadastrar Animal" component={TelaCadastrarAnimal}  />
        )}
        { tipoUsu == 2 && (

          <Drawer.Screen name="Buscar Animal" component={TelaBuscarAnimal} />
        )}
        { tipoUsu == 2 && (
            <Drawer.Screen name="Cadastrar Tutor" component={TelaCadastroTutor} />
        )}
       
    
    </Drawer.Navigator> 
     
  );
}

export default MyDrawer