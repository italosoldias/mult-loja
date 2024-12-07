import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper';
import ViewPDF from 'react-native-view-pdf';

const PDFCarousel = ({ pdfs }) => {
    const [index, setIndex] = useState(0);

    const handlePress = (index) => {
        setIndex(index);
    };

    return (
        <View style={styles.container}>
            <Swiper
                style={styles.swiper}
                showsButtons={true}
                loop={false}
                index={index}
                onIndexChanged={(i) => setIndex(i)}
            >
                {pdfs.map((pdf, i) => (
                    <TouchableOpacity key={i} onPress={() => handlePress(i)} style={styles.pdfItem}>
                        <Text style={styles.pdfText}>{`PDF ${i + 1}`}</Text>
                    </TouchableOpacity>
                ))}
            </Swiper>
            <ViewPDF
                style={styles.pdf}
                resource={ `data:application/pdf;base64,${pdfs[index] }`}
                resourceType="base64"
                onError={(error) => {
                    console.log(error);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    swiper: {
        height: 200,
    },
    pdfItem: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightgray',
        borderWidth: 1,
        borderColor: 'gray',
        margin: 10,
        borderRadius: 5,
    },
    pdfText: {
        fontSize: 16,
        color: 'blue',
    },
    pdf: {
        flex: 1,
    },
});

export default PDFCarousel;
