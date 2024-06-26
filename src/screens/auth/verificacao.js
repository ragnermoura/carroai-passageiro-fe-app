import React, { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const VerificacaoScreen = ({ }) => {
  const [codigo, setCodigo] = useState("");

  const navigation = useNavigation();

  const handleHome = () => { 
    // aqui será a integração com a api
    navigation.reset({
      routes: [{ name: "Home" }],
    });
  };

  return (
    <View style={styles.container}>
    
      <Text style={styles.title}>
        Por favor, verifique o código que enviamos para "+55******8963"
      </Text>
  
      <TextInput
        value={codigo}
        onChangeText={setCodigo}
        style={styles.input}
      />
    
      <TouchableOpacity onPress={handleHome} style={styles.button}>
        <Text style={styles.text}>Continuar</Text>
      </TouchableOpacity>
  
  
    </View>
  );
  

};



const styles = StyleSheet.create ({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 20,
    },
  
    title: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 0,
      marginBottom: 100,
    },
  
    textBody: {
      fontSize: 16,
      fontWeight: "medium",
      marginTop: 0,
      marginBottom: 70,
    },
  
    input: {
      width: "100%", // Isso faz com que o input ocupe a largura total do container
      height: 57, // Altura do input
      marginBottom: 15, // Espaço entre o input e o botão
      bottom: 50,
      borderWidth: 1,
      borderColor: "#ccc", // Cor da borda do input
      borderRadius: 10, // Bordas arredondadas
      paddingHorizontal: 10, // Padding interno do input
    },
  
    button: {
      width: "100%", // Faz o botão ter a mesma largura do input
      height: 57, // Altura do botão, pode ajustar conforme necessário
      backgroundColor: "#0068C1", // Fundo azul
      justifyContent: "center", // Isso centraliza o texto no botão verticalmente
      alignItems: "center", // E isso horizontalmente
      borderRadius: 5, // Bordas arredondadas do botão
      bottom: 20
    },
  
    text: {
      color: "#fff",
      fontWeight: "bold", // Texto branco pra ficar top no botão azul
      fontSize: 18
    },
  
  });


export default VerificacaoScreen
