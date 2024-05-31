import {Box,SafeAreaView,Text} from "react-native"
import sTituloDaTela from "./styles.js";
export default function TituloDaTela (p){
    return(

        <SafeAreaView style={sTituloDaTela.sTituloDaTelaCaixa}>
            <Text style={sTituloDaTela.sTituloDaTelaTexto}>{p.texto}</Text>
        </SafeAreaView>
            
        
    )
}

//size='4xl' textAlign='center' padding={"4%"} color="$indigo700"