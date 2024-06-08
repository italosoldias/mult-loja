import { Text, Pressable } from "react-native";
import sBotaoPadrao from "./styles.js";

export default function BotaoPadrao(p) {

  return (

    //         <Button onPress={p.roda}
    //         size="lg"
    //   variant="solid"
    //   action="primary"
    //   bgColor="$teal700"
    //   $hover-bgColor={"$lightBlue900"}
    //   borderRadius={"$2xl"}
    //   borderColor="$blue600"
    //   borderWidth={"$2"}
    //   margin={"1%"}


    //   w="90%"
    // >

    //   <ButtonText alignItems="center"fontSize="$2xl">{p.texto}</ButtonText>
    // </Button>  

    <Pressable style={sBotaoPadrao.sBotaoPadraoBotao}
      onPress={() => p.roda()}>
      <Text style={sBotaoPadrao.sBotaoPadraoTexto}>{p.texto}</Text>
    </Pressable>

  )
}
