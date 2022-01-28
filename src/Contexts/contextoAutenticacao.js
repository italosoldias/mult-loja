//import { UserInterfaceIdiom } from "expo-constants";
import React, { createContext, useState , useCallback, useEffect} from "react";
import AsyncStorege from '@react-native-async-storage/async-storage';
//import api from "../services/Api.js";
import api, {getAutenticacao} from '../services/Api.js'

//import ClassAutenticacaoContexDate from "./ClassAutenticacaoContexDate.js";
// import  api  from '../services/Api.js'
// import {getAutenticacao} from '../services/Api.js'

//const [usuario, setUsuario] = useState({})

//export 

//  async function autenticar(body) {
            
//   const res = await getAutenticacao(body)
//   //onsole.log(this.auto(res))
  

//   return res
// }



// criando o contexto
  const AutenticacaoContexto = createContext ({ })



export  const  AtenticacaoProvedor = ({ children }) => {
  const [ usuario, setUsuario] = useState( null)
  const [carregando, setCarregando ] = useState(true)

  useEffect(()=>{
    async function carregandoInformaçõesUsuario(){

    const informacaoUsuario =  await AsyncStorege.getItem('@mult-loja:usuario')
    const informacaoToken =  await AsyncStorege.getItem('@mult-loja:token')

    if (informacaoUsuario && informacaoToken){
      api.defaults.headers.token = `Bearer ${informacaoToken}`
      setUsuario(JSON.parse(informacaoUsuario))
      setCarregando(false)
      }
    }
    carregandoInformaçõesUsuario()
  })
  async function aut (boday){
    const res = await getAutenticacao(boday)
       
        
    const {autenticUsuario, token}   = res

    api.defaults.headers.token = `Bearer ${token}`
    // api.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    // api.defaults.headers.get['Content-Type'] = 'application/x-www-form-urlencoded';

    console.log(autenticUsuario)
    console.log('====================================')
    console.log(token)
        setUsuario(autenticUsuario)
    await   AsyncStorege.setItem('@mult-loja:usuario', JSON.stringify(autenticUsuario))
    await AsyncStorege.setItem('@mult-loja:token', token)
       
  }
 
  
  // nao e necessario criar todo um objeto para incorporar ao provedor de contexto nem colocar toda a tipagem
  // basta espor o nome do que deve ser repassado para o contexto
    return(
    <AutenticacaoContexto.Provider value={ { logado: !!usuario, carregando , usuario, aut } } >
    { children }
    
    </AutenticacaoContexto.Provider>
    )}

export default AutenticacaoContexto;