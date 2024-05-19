import {StyleSheet ,Dimensions} from 'react-native';
const {height,width} = Dimensions.get('window')
const  staleTelaAnimalRetornado= StyleSheet.create({

    sTelaAnimalRetornadoTexto:{
        color:"#1C1C1C",
        marginLeft : 8,
        fontSize:40,
        marginBottom:20,
        textAlign: "center",
        textShadow:'#000000',
        
    },

    sTelaAnimalRetornadoTextoDadosAnimal: { 
        fontSize: 20,
        marginBottom:20,
        textAlign: "left"},

    sTelaAnimalRetornadoView:{
        backgroundColor: "#F8F8FF",
        paddingTop: 5,
        width: width * 0.80 / 1,
        alignItems: "flex-start",
    },
    sTelaAnimalRetornadoContainer:{
        paddingTop: 50,
        alignItems: "center",
        
        // backgroundColor:"#4E4B4B",
       // 4E4B4B",
        
    },
})

export default staleTelaAnimalRetornado