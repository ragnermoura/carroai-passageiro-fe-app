import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const SenhaAlteardaScreen = ({}) => {
  // botao continuar tem que levar para tela de login correspondente ou para o welcome
  const navigation = useNavigation();

  const handleValidation = () => {
    // aqui será a integração com a api
    navigation.reset({
      routes: [{ name: "Welcome" }],
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Parabéns!</Text>
        <Text style={styles.text}>A sua senha foi redefinida com sucesso!</Text>
        <TouchableOpacity onPress={handleValidation} style={styles.button}>
          <Text style={styles.textButton}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "rgba(43, 43, 43, 0.5)",
  },

  card: {
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "80%",
    height: 150,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },

  text: {
    width: "80%",
    fontSize: 12,
    textAlign: "center",
  },

  button: {
    width: "80%", // Faz o botão ter a mesma largura do input
    height: 50, // Altura do botão, pode ajustar conforme necessário
    backgroundColor: "#0068C1", // Fundo azul
    justifyContent: "center", // Isso centraliza o texto no botão verticalmente
    alignItems: "center", // E isso horizontalmente
    borderRadius: 10, // Bordas arredondadas do botão
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },

  textButton: {
    color: "#fff",
    fontWeight: "bold", // Texto branco pra ficar top no botão azul
    fontSize: 18,
  },
});

export default SenhaAlteardaScreen;
