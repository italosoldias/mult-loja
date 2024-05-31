import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import sFundoGlobal from "../../Global/FundoGlobal/styles.js";


const TelaTipoUsuario = ({ name, photoUrl }) => {
  return (
    <View style={sFundoGlobal.sBackColor}>
      {/* Round Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: "C:/dev/mult-loja/assets/icon.png" }}
          style={styles.avatarImage}
        />
      </View>

      <View style={styles.userNameContainer}>
        <Text style={styles.userName}>nomezinho</Text>
      </View>
     
    </View>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avatarContainer: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    backgroundColor: '#ccc',
    marginTop: 50, // Adjust margin-top for desired spacing
    alignSelf: 'center', // Center avatar horizontally
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  userNameContainer: {
    marginTop: 20, // Adjust margin-top for spacing between avatar and name
    alignItems: 'center',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
});



export default TelaTipoUsuario;