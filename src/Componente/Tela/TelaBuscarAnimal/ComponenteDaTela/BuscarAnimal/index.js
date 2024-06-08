import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, Modal, Image, View, TextInput, Button, Dimensions, Pressable, SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker'
import staleTelaAnimalRetornado from "../../../TelaAnimalRetornado/styles.js";
import TelaAnimalRetornado from '../../../TelaAnimalRetornado'
import ModalTelaBuscarAnimal from "../ModalTelaBuscaAnimal/index.js";
import BotaoPadrao from '../../../../Global/BotaoPadrao/index.js'
import CampoPadrao from "../../../../Global/CampoPadrao/index.js";
import { temEspacosEmBrancoExcessoOuVazio } from "../../../../Global/util/validadores/validadores.js";
import { ModalContexto } from '@/src/Contexts/contextoAnimal.js';
import api, { getAnimal } from '../../../../../services/Api';
import staleTelaBuscaAnimal from '../../styles';


export default function BuscarAnimal() {
  const { modalHabilitado, mudaModal } = useContext(ModalContexto)
  const [selectedValue, setSelectedValue] = useState("idAnimal");
  const [idAnimalEscrito, setIdAnimalEscrito] = useState(null)
  const [idTutorEscrito, setITutorEscrito] = useState(null)
  const [nomeAnimalEscrito, setNomeAnimalEscrito] = useState(null)
  const [resposta, setResposta] = useState('')
  const [imagem, setImagem] = useState("")
  const [showModal, setShowModal] = useState(false);

  const nav = useNavigation()

  function exibeTelaAnimalRetornado(res) {

    nav.navigate({ screen: "TelaCadastrarAnimal", params: { data: res } })


  }



  async function buscarAnimalApi() {

    if (selectedValue == "idAnimal" && temEspacosEmBrancoExcessoOuVazio(idAnimalEscrito) == false) {

      const resp = await getAnimal({ idAnimal: idAnimalEscrito })
      console.log("====================***************")
      console.log(resp)
      const respTratada = {
        "Nome do animal:": resp.nomeAnimal,
        "Identificador do Animal:": resp.idAnimal,
        "CPF do Tutor:": resp.idTutor,
        "Raça do Aninimal:": resp.raca,
        "Peso do Animal:": resp.peso,
        "Especie do Animal:": resp.especie
      }
      setResposta(respTratada)
      setImagem(resp.imagem)
      mudaModal()


      //    // setcodigoDeBarrasEscrito(null)
    } else if (selectedValue == "idTutor" && temEspacosEmBrancoExcessoOuVazio(idTutorEscrito) == false) {
      const resp = await getAnimal({ idTutor: idTutorEscrito })
      console.log("====================***************")
      const respTratada = {
        "Nome do animal:": resp.nomeAnimal,
        "Identificador do Animal:": resp.idAnimal,
        "CPF do Tutor:": resp.idTutor,
        "Raça do Aninimal:": resp.raca,
        "Peso do Animal:": resp.peso,
        "Especie do Animal:": resp.especie
      }
      setResposta(respTratada)
      setImagem(resp.imagem)
      mudaModal()


    } else if (selectedValue == "nomeAnimal" && temEspacosEmBrancoExcessoOuVazio(nomeAnimalEscrito) == false) {
      const resp = await getAnimal({ nomeAnimal: nomeAnimalEscrito })
      console.log("====================***************")
      const respTratada = {
        "Nome do animal:": resp.nomeAnimal,
        "Identificador do Animal:": resp.idAnimal,
        "CPF do Tutor:": resp.idTutor,
        "Raça do Aninimal:": resp.raca,
        "Peso do Animal:": resp.peso,
        "Especie do Animal:": resp.especie
      }
      setResposta(respTratada)
      setImagem(resp.imagem)
      mudaModal()


    } else {
      Alert.alert("Preencha corretamente")
    }
  }


  return (
    <>

      <Picker style={staleTelaBuscaAnimal.sTelaBuscaAnimalComboBox} selectedValue={selectedValue}
        onValueChange={(value) => setSelectedValue(value)}
      >
        <Picker.Item label="Identificador do Animal" value="idAnimal" />
        <Picker.Item label="CPF do Tutor" value="idTutor" />
        <Picker.Item label="Nome do Animal" value="nomeAnimal" />
      </Picker>

      {selectedValue === "idAnimal" &&
        <CampoPadrao
          style={staleTelaBuscaAnimal.sTelaBuscaAnimalCampos}
          onChangeText={setIdAnimalEscrito}
          value={idAnimalEscrito === null ? '' : idAnimalEscrito}
          inputMode='numeric'
          placeholder='Informe o Identificador do Animal'
        />
      }
      {selectedValue === "idTutor" &&
        <CampoPadrao
          style={staleTelaBuscaAnimal.sTelaBuscaAnimalCampos}
          onChangeText={setITutorEscrito}
          value={idTutorEscrito === null ? '' : idTutorEscrito}
          inputMode='numeric'
          placeholder='Informe o CPF do Tutor'
        />
      }
      {selectedValue === "nomeAnimal" &&
        <CampoPadrao
          style={staleTelaBuscaAnimal.sTelaBuscaAnimalCampos}
          onChangeText={setNomeAnimalEscrito}
          value={idAnimalEscrito === null ? '' : idAnimalEscrito}
          inputMode='text'
          placeholder='Informe o Nome do Animal'
        />
      }



      <BotaoPadrao texto={"Buscar"} roda={buscarAnimalApi} />



      {/* <Text style={staleTelaAnimalRetornado.sTelaAnimalRetornadoTextoDadosAnimal}>Nome do animal: <Text style={staleTelaAnimalRetornado.sTelaAnimalRetornadoTextoDadosAnimal}> {resposta.nomeAnimal}</Text></Text>
            
            <Text style={staleTelaAnimalRetornado.sTelaAnimalRetornadoTextoDadosAnimal}>Identificador do Animal: {resposta.idAnimal}</Text>
            <Text style={staleTelaAnimalRetornado.sTelaAnimalRetornadoTextoDadosAnimal}>CPF do Tutor: {resposta.idTutor}</Text>
            <Text style={staleTelaAnimalRetornado.sTelaAnimalRetornadoTextoDadosAnimal}>"Raça do Aninimal:": {resposta.raca}</Text>
            <Text style={staleTelaAnimalRetornado.sTelaAnimalRetornadoTextoDadosAnimal}>"Peso do Animal:": {resposta.peso}</Text>
            <Text style={staleTelaAnimalRetornado.sTelaAnimalRetornadoTextoDadosAnimal}>"Especie do Animal:" :{resposta.especie}</Text> */}
      <ModalTelaBuscarAnimal showModal={modalHabilitado} animal={resposta} imagem={imagem}>
      </ModalTelaBuscarAnimal>

    </>
  )
}
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Dark overlay color with 70% opacity
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff', // White content background
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    display: "flex",
    flexDirection: "column",
    flex: 2,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});