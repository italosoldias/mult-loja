import { createNativeStackNavigator , } from '@react-navigation/native-stack';
import TelaAnimalRetornado from '../Componente/Tela/TelaAnimalRetornado/index.js'
const Tab = createNativeStackNavigator()

function RotasAdi(params) {
    <Tab.Navigator>
        <Tab.Screen name="TelaAnimalRetornado" component={TelaAnimalRetornado}/>
    </Tab.Navigator>

}

export default RotasAdi