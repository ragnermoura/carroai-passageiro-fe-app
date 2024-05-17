import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const RecuperacaoPhoneScreen = ({}) => {
  const [codigo, setCodigo] = useState("");

  const navigation = useNavigation();

  const handlePassword = () => {
    // aqui será a integração com a api
    navigation.reset({
      routes: [{ name: "RecuperacaoSenhaPhone" }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconBack}>
        <Ionicons
          name="arrow-back-sharp"
          size={24}
          color="#2B2B2B"
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        />
      </View>
      <Text style={styles.title}>
        Por favor, insira o código que enviamos agora para:{" "}
      </Text>
      <Text style={styles.numberTitle}>+55 *******7890</Text>

      <TextInput value={codigo} onChangeText={setCodigo} style={styles.input} />

      <TouchableOpacity onPress={handlePassword} style={styles.button}>
        <Text style={styles.text}>Verificar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  iconBack: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
    alignSelf: "flex-start",
    position: "absolute",
    top: Platform.OS === "ios" ? 40 : 45,
    left: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 33,
  },

  numberTitle: {
    fontSize: 20,
    fontWeight: "medium",
    marginBottom: 35,
  },

  textBody: {
    fontSize: 16,
    fontWeight: "medium",
    marginTop: 0,
    marginBottom: 70,
  },

  input: {
    width: "90%", // Isso faz com que o input ocupe a largura total do container
    height: 57, // Altura do input
    marginBottom: 40, // Espaço entre o input e o botão
    // bottom: 50,
    borderBottomWidth: 1,
    borderColor: "#ccc", // Cor da borda do input
    borderRadius: 10, // Bordas arredondadas
    paddingHorizontal: 10, // Padding interno do input
    textAlign: "center",
    textAlignVertical: "bottom",
    paddingBottom: 5,
    fontSize: 20,
  },

  button: {
    width: "90%", // Faz o botão ter a mesma largura do input
    height: 57, // Altura do botão, pode ajustar conforme necessário
    backgroundColor: "#0068C1", // Fundo azul
    justifyContent: "center", // Isso centraliza o texto no botão verticalmente
    alignItems: "center", // E isso horizontalmente
    borderRadius: 5, // Bordas arredondadas do botão
    // bottom: 20,
  },

  text: {
    color: "#fff",
    fontWeight: "bold", // Texto branco pra ficar top no botão azul
    fontSize: 18,
  },
});

export default RecuperacaoPhoneScreen;
