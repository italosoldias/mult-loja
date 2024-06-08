import react, { useState, useContext } from "react";
import { ModalContexto } from "@/src/Contexts/contextoAnimal";
import { StyleSheet, Text, Modal, Image, View, TextInput, Button, Dimensions, Pressable, SafeAreaView, Alert } from 'react-native';

export default function ModalTelaBuscaAnimal({ animal, imagem }) {

    const { modalHabilitado, mudaModal } = useContext(ModalContexto)





    return (

        <Modal visible={modalHabilitado}>

            <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                {imagem != undefined ?
                            <View style={styles.imageContainer}>
                                <Image
                                    source={{ uri: imagem, base64: true }}
                                    style={styles.image}
                                /></View>
                            : <Text >SEM IMAGEM </Text>
                        }
                    <View style={styles.container}>
                        {Object.entries(animal).map(([key, value]) => (
                            <View style={styles.dataRow} key={key}>
                                <Text style={styles.dataLabel}>{key}:</Text>
                                <Text style={styles.dataValue}>{value}</Text>
                            </View>
                        ))}
                        
                    </View>

                    <Button title="Close Modal" onPress={mudaModal} />

                </View>

            </View>

        </Modal>
    )
}
const styles = StyleSheet.create({
    container: {

        flex: 1,
        padding: 2,
    },
    dataRow: {

        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    dataLabel: {

        fontWeight: 'bold',
        marginRight: 10,
        fontSize: 16
    },
    dataValue: {
        flex: 1,
        fontSize: 16
    },
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
        flex: 1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    imageContainer: {
        alignItems: 'center', // Center image horizontally
        justifyContent: 'center',
      },
      image: {
        width: 200,
        height: 200,
      },
});

