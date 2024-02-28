import React, { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const RecuperacaoScreen = ({ navigation }) => {

  const [usuario, setUsuario] = useState("");
  console.log("Recuperar com",  email, numero);

  const handleRecuperacao = () => {

    return (
        <View style={styles.container}>
          <AntDesign
            name="back"
            size={24}
            color="black"
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          />
      
          <Text style={styles.title}>
            Informe seu email email ou número de telefone
          </Text>
      
          <TextInput
            placeholder="Email ou número de telefone"
            value={usuario}
            onChangeText={setUsuario}
            style={styles.input}
          />
      
          <TouchableOpacity onPress={handleRecuperacao} style={styles.button}>
            <Text style={styles.text}>Continuar</Text>
          </TouchableOpacity>
      
      
        </View>
    )
    
};


};


export default RecuperacaoScreen
