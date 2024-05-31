import { TextInput } from "react-native";
import staleTelaLogin from "./styles.js";
export default function CampoPadro (p){
    
    return(

        <>
        <TextInput
        style={staleTelaLogin.sTelaLogincampos}
        onChangeText={p.onChangeText}
        value={p.value}
        placeholder={p.placeholder}
        inputMode={p.inputMode}
        ></TextInput>
    </>
    )
}
