import React, { useState, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Dimensions, Pressable, SafeAreaView, Alert } from 'react-native';
import api, { postCadastrarTutor } from '../../../../../services/Api.js';
import staleTelaCadastraTutor from '../../styles.js'
import BotaoPadrao from "../../../../Global/BotaoPadrao/index.js";
import CampoPadrao from "../../../../Global/CampoPadrao/index.js";
import { validaCPF, temEspacosEmBrancoExcessoOuVazio } from "../../../../Global/util/validadores/validadores.js";
export default function CadastrarTutor() {

    const [idTutorEscrito, setIdTutorEscrito] = useState(null)
    const [nomeTutorEscrito, setNomeTutorEscrito] = useState(null)
    const [emailEscrito, setEmailEscrito] = useState(null)


    async function cadastrarTutorApi() {
        const campoNomeTutorEscritoCorreto = temEspacosEmBrancoExcessoOuVazio(nomeTutorEscrito)
        const campoEmailEscritoCorreto = temEspacosEmBrancoExcessoOuVazio(emailEscrito)
        const campoIdTutorEscritoCorreto = temEspacosEmBrancoExcessoOuVazio(idTutorEscrito)
        
        if (idTutorEscrito != null
            && nomeTutorEscrito != null
            && emailEscrito != null
            && campoEmailEscritoCorreto == false
            && campoNomeTutorEscritoCorreto == false
            && campoIdTutorEscritoCorreto == false) {



            if (validaCPF(idTutorEscrito) == true) {

                try {

                    const resp = await
                        postCadastrarTutor(
                            {
                                "idTutor": idTutorEscrito,
                                "nomeTutor": nomeTutorEscrito,
                                "email": emailEscrito

                            })

                    setEmailEscrito(null)
                    setIdTutorEscrito(null)
                    setNomeTutorEscrito(null)
                    Alert.alert("Tutor cadastrado com sucesso")
                } catch (error) {
                    

                    if (error.response.status == 402) {
                        setEmailEscrito("")
                        setIdTutorEscrito("")
                        setNomeTutorEscrito("")
                        Alert.alert("Esse tutor ja esta cadastrado")
                    } else {
                        setEmailEscrito("")
                        setIdTutorEscrito("")
                        setNomeTutorEscrito("")
                        Alert.alert("Houve um problema no cadastro do tutor")
                    }

                   
                }
            } else {
                setEmailEscrito(null)
                setIdTutorEscrito(null)
                setNomeTutorEscrito(null)
                Alert.alert("CPF Invalido")
            }
        } else {
            Alert.alert("Preencha corretamente os campos")
        }
    }


    return (
        <>

            <CampoPadrao
                style={staleTelaCadastraTutor.staleTelaCadastraTutorCampos}
                onChangeText={setNomeTutorEscrito}
                value={nomeTutorEscrito === null ? '' : nomeTutorEscrito}
                inputMode='text'
                placeholder='INFORME O NOME DO TUTOR'
            />

            <CampoPadrao
                style={staleTelaCadastraTutor.staleTelaCadastraTutorCampos}
                onChangeText={setEmailEscrito}
                value={emailEscrito === null ? '' : emailEscrito}
                inputMode='email-address'
                placeholder='INFORME O EMAIL'
            />
            <CampoPadrao
                style={staleTelaCadastraTutor.staleTelaCadastraTutorCampos}
                onChangeText={setIdTutorEscrito}
                value={idTutorEscrito === null ? '' : idTutorEscrito}
                inputMode='numeric'
                placeholder='INFORME O CPF'
            />


            <BotaoPadrao
                texto={"CADASTRAR"}
                roda={cadastrarTutorApi}
            >

            </BotaoPadrao>
        </>

    )
}