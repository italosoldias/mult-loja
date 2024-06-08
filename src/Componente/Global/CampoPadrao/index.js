import { TextInput } from "react-native";
import sCampoPadrao from "./styles.js";
export default function CampoPadrao(p) {

    return (

        <>
            <TextInput
                style={sCampoPadrao.sCampoPadraoCampo}
                onChangeText={p.onChangeText}
                value={p.value}
                placeholder={p.placeholder}
                inputMode={p.inputMode}
            ></TextInput>
        </>
    )
}
