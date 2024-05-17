import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const LoginOutraContaGoogleScreen = ({}) => {
  const [login, setLogin] = useState("");

  const navigation = useNavigation();

  const handleValidation = () => {
    // aqui será a integração com a api
    navigation.reset({
      routes: [{ name: "Menu" }],
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconBack}>
        <Ionicons
          name="arrow-back-sharp"
          size={24}
          color="#2B2B2B"
          onPress={() => navigation.goBack()}
        />
      </View>

      <Image
        source={require("../../../assets/images/googleImg.png")}
        style={styles.img}
      />

      <Text style={styles.titleHeader}>Iniciar sessão</Text>

      <Text style={styles.subTitleHeader}>Use a Conta do Google</Text>

      <TextInput
        placeholder="Email ou telefone"
        value={login}
        onChangeText={setLogin}
        style={styles.inputLogin}
      />

      <TouchableOpacity style={styles.forgotEmail}>
        <Text style={styles.forgotEmailText}>Esqueceu do seu email?</Text>
      </TouchableOpacity>

      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          Este computador não é seu? Utilize o modo convidado para iniciar
          sessão de forma privada.{" "}
          <Text style={styles.descriptionHighlighted}>
            Saiba como usar o modo convidado
          </Text>
        </Text>
      </View>

      <View style={styles.boxButton}>
        {/* colocar um onpress no text de criar conta que leve para a pagina de criar uma conta */}
        <Text style={styles.boxButtonText}>Criar conta</Text>
        <TouchableOpacity onPress={handleValidation} style={styles.button}>
          <Text style={styles.buttonText}>Seguinte</Text>
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
    backgroundColor: "#fff",
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

  img: {
    marginBottom: 30,
  },

  titleHeader: {
    color: "#2b2b2b",
    fontSize: 20,
    marginBottom: 10,
  },

  subTitleHeader: {
    fontSize: 14,
    marginBottom: 25,
  },

  inputLogin: {
    width: "90%",
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 10,
    color: "#585d65",
  },

  forgotEmail: {
    alignSelf: "flex-start",
    marginLeft: 30,
    marginBottom: 30,
  },

  forgotEmailText: {
    fontSize: 12,
    color: "#1a73e8",
  },

  description: {
    width: "90%",
    alignItems: "center",
    marginBottom: 50,
  },

  descriptionText: {
    fontSize: 14,
    color: "#5f6368",
    paddingHorizontal: 20,
  },

  descriptionHighlighted: {
    color: "#1a73e8",
    fontWeight: "bold",
  },

  boxButton: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  boxButtonText: {
    fontSize: 15,
    color: "#1a73e8",
    marginRight: 30,
    fontWeight: "600",
  },

  button: {
    width: "45%", // Faz o botão ter a mesma largura do input
    height: 60, // Altura do botão, pode ajustar conforme necessário
    backgroundColor: "#1a73e8", // Fundo azul
    justifyContent: "center", // Isso centraliza o texto no botão verticalmente
    alignItems: "center", // E isso horizontalmente
    borderRadius: 5, // Bordas arredondadas do botão
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold", // Texto branco pra ficar top no botão azul
    fontSize: 18,
  },
});

export default LoginOutraContaGoogleScreen;
