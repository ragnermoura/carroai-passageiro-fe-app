import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const RecuperacaoSenhaPhoneScreen = ({}) => {
  const [senha, setSenha] = useState("");
  const [confirma, setConfSenha] = useState("");

  const navigation = useNavigation();

  const handleValidation = () => {
    // aqui será a integração com a api
    navigation.reset({
      routes: [{ name: "SenhaAlterada" }],
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Por favor, insira uma nova senha conforme os requisitos:
      </Text>

      <View style={styles.inputCard}>
        <Text style={styles.titleInputCard}>Nova senha</Text>
        <TextInput
          placeholder="************"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
        />
        <Ionicons
          name="eye"
          size={24}
          color={"#979797"}
          style={styles.inputPasswordIcon}
        />
      </View>
      <View style={styles.inputCard}>
        <Text style={styles.titleInputCard}>Confirmar a sua senha</Text>
        <TextInput
          placeholder="************"
          value={confirma}
          onChangeText={setConfSenha}
          secureTextEntry
          style={styles.input}
        />
        <Ionicons
          name="eye"
          size={24}
          color={"#979797"}
          style={styles.inputPasswordIcon}
        />
        <Text style={styles.warning}>
          {" "}
          Deve conter pelo menos dois dos seguintes itens: números, letras ou
          símbolos{" "}
        </Text>
      </View>
      <TouchableOpacity onPress={handleValidation} style={styles.button}>
        <Text style={styles.text}>Continuar</Text>
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

  title: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 60,
  },

  inputCard: {
    width: "80%",
    marginBottom: 25,
  },

  titleInputCard: {
    position: "absolute",
    top: -6,
    left: 10,
    fontSize: 12,
  },

  input: {
    width: "100%", // Isso faz com que o input ocupe a largura total do container
    height: 57, // Altura do input
    marginBottom: 10, // Espaço entre o input e o botão
    top: 15,
    borderWidth: 1,
    borderColor: "#ccc", // Cor da borda do input
    borderRadius: 10, // Bordas arredondadas
    paddingHorizontal: 10, // Padding interno do input
    backgroundColor: "#d9d9d9",
  },

  inputPasswordIcon: {
    position: "absolute",
    top: 32,
    right: 5,
    zIndex: 10,
    paddingRight: 20,
    paddingLeft: 6,
    backgroundColor: "#d9d9d9",
  },

  warning: {
    width: "100%",
    fontSize: 10,
    top: 13,
    marginRight: 30,
    alignItems: "center",
    color: "red",
  },

  button: {
    width: "80%", // Faz o botão ter a mesma largura do input
    height: 60, // Altura do botão, pode ajustar conforme necessário
    backgroundColor: "#0068C1", // Fundo azul
    justifyContent: "center", // Isso centraliza o texto no botão verticalmente
    alignItems: "center", // E isso horizontalmente
    borderRadius: 5, // Bordas arredondadas do botão
    marginTop: 40,
  },

  text: {
    color: "#fff",
    fontWeight: "bold", // Texto branco pra ficar top no botão azul
    fontSize: 18,
  },
});

export default RecuperacaoSenhaPhoneScreen;
