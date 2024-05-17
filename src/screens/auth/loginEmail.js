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
import { Ionicons, AntDesign } from "@expo/vector-icons";

const LoginEmailScreen = ({}) => {
  const [nome, setNome] = useState("");
  const [Sobrenome, setSobreNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [checked, setChecked] = useState(false);

  const navigation = useNavigation();

  const handleValidation = () => {
    // aqui será a integração com a api
    if (checked) {
      navigation.reset({
        routes: [{ name: "Menu" }],
      });
    } else {
      alert("Aceite os termos de uso e as políticas de Privacidade");
      return;
    }
  };

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  // estava no onpress de esqueci a senha
  // const handleRecuperacao = () => {
  //   navigation.reset({
  //     routes: [{ name: "Recuperacao" }],
  //   });
  // };

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

      <Text style={styles.title}>Insira os seus dados</Text>

      <View style={styles.inputCard}>
        <Text style={styles.titleInputCard}>Nome</Text>
        <View style={styles.boxInput}>
          <TextInput
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            style={styles.nameInput}
          />

          <TextInput
            placeholder="Sobrenome"
            value={Sobrenome}
            onChangeText={setSobreNome}
            style={styles.nameInput}
          />
        </View>
      </View>

      <View style={styles.inputCard}>
        <Text style={styles.titleInputCard}>Email</Text>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputCard}>
        <Text style={styles.titleInputCard}>Senha</Text>
        <TextInput
          placeholder="Senha"
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

      <View style={styles.termsContainer}>
        <TouchableOpacity
          onPress={toggleCheckbox}
          style={[styles.checkbox, checked && styles.checked]}
        >
          {checked === true ? (
            <AntDesign name="check" size={15} color={"#fff"} />
          ) : (
            <></>
          )}
        </TouchableOpacity>

        <Text style={styles.termsText}>
          Eu li e aceito os{" "}
          <Text style={styles.termsTextHighlighted}>
            Termos de Uso e as Políticas de Privacidade
          </Text>
        </Text>
      </View>

      <TouchableOpacity onPress={handleValidation} style={styles.button}>
        <Text style={styles.text}>Continuar</Text>
      </TouchableOpacity>

      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Recuperacao")}
          style={styles.buttonForgot}
        >
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

  // backButton: {
  //   // alignSelf: "flex-start",
  //   // position: "absolute",
  //   // top: Platform.OS === "ios" ? 40 : 20, // Ajuste para iOS e Android
  //   // left: 10,
  //   padding: 5,
  //   borderRadius: 10,
  // },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 0,
    marginBottom: 100,
    alignSelf: "flex-start",
  },

  inputCard: {
    width: "100%",
    marginBottom: 20,
  },

  titleInputCard: {
    position: "absolute",
    top: -72,
    left: 10,
    fontSize: 14,
  },

  boxInput: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  nameInput: {
    width: "48%", // Isso faz com que o input ocupe a largura total do container
    height: 57, // Altura do input
    marginBottom: 15, // Espaço entre o input e o botão
    bottom: 50,
    borderWidth: 1,
    borderColor: "#ccc", // Cor da borda do input
    borderRadius: 10, // Bordas arredondadas
    paddingHorizontal: 10, // Padding interno do input
    backgroundColor: "#d9d9d9",
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
    backgroundColor: "#d9d9d9",
  },

  inputPasswordIcon: {
    position: "absolute",
    top: -32,
    right: 25,
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
  },

  termsTextHighlighted: {
    color: "#e5ae01",
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
