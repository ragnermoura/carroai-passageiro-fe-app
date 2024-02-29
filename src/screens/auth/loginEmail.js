import React, { useState } from "react";
import { View, TextInput, Button, Text, TouchableOpacity, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const LoginEmailScreen = ({ }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [checked, setChecked] = useState(false);

  const navigation = useNavigation();
  
  const handleValidation = () => { 
    // aqui será a integração com a api
    navigation.reset({
      routes: [{ name: "Home" }],
    });
  };

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const handleRecuperacao = () => {
    navigation.reset({
      routes: [{ name: "Recuperacao" }],
    });
  };

  return (
    <View style={styles.container}>
      <AntDesign
        name="back"
        size={24}
        color="black"
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      />

      <Text style={styles.title}>Insira os seus dados</Text>

      <TextInput
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Senha"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <View style={styles.termsContainer}>
        <TouchableOpacity
          onPress={toggleCheckbox}
          style={[styles.checkbox, checked && styles.checked]}
        ></TouchableOpacity>

        <Text style={styles.termsText}>Eu li e aceito os Termos de Uso e as Políticas de Privacidade</Text>
      </View>

      <TouchableOpacity onPress={handleValidation} style={styles.button}>
        <Text style={styles.text}>Continuar</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity onPress={handleRecuperacao} style={styles.buttonForgot}>
          <Text style={styles.forgotText}> Esqueci a senha </Text>
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
  },

  button: {
    width: "100%", // Faz o botão ter a mesma largura do input
    height: 60, // Altura do botão, pode ajustar conforme necessário
    backgroundColor: "#0068C1", // Fundo azul
    justifyContent: "center", // Isso centraliza o texto no botão verticalmente
    alignItems: "center", // E isso horizontalmente
    borderRadius: 5, // Bordas arredondadas do botão
  },

  text: {
    color: "#fff",
    fontWeight: "bold", // Texto branco pra ficar top no botão azul
    fontSize: 18,
  },

  backButton: {
    alignSelf: "flex-start",
    position: "absolute",
    top: Platform.OS === "ios" ? 40 : 20, // Ajuste para iOS e Android
    left: 10,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 100,
    alignSelf: "flex-start",
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

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E5AE01",
    justifyContent: "center",
    alignItems: "center",
    bottom: 20,
    marginRight: 20,
  },

  checked: {
    backgroundColor: "#E5AE01",
  },

  termsText: {
    fontSize: 14,
    bottom: 40,
    marginLeft: 30,
    fontWeight: "bold",
  },

  label: {
    fontSize: 14,
  },

  forgotText: {
    marginTop: 15,
    color: "#E5AE01",
    fontWeight: "bold",
  },
});

export default LoginEmailScreen;
