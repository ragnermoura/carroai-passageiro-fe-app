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
import AsyncStorage from "@react-native-async-storage/async-storage";

const VerificacaoScreen = ({ route }) => {
  const { rota, id } = route.params;

  const [codigo, setCodigo] = useState("");
  const [verification, setVerification] = useState(false);

  const navigation = useNavigation();

  const handleValidation = () => {
    // aqui será a integração com a api
    navigation.reset({
      routes: [{ name: "Welcome" }],
    });
  };

  const handleHome = () => {
    // alterar essa lógica para se adequar ao backend
    api.sendValidationCode(id, codigo).then((res) => {
      if (res.status === 200) {
        setVerification(true);
      } else {
        alert("Código incorreto!");
      }
    });
  };

  // const getData = async (key) => {
  //   try {
  //     const jsonValue = await AsyncStorage.getItem(key);
  //     return JSON.parse(jsonValue);
  //   } catch (error) {
  //     console.error("Error storing data", error);
  //   }
  // };
  // getData("registrar").then((value) => console.log(value));

  if (verification == true) {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Parabéns!</Text>
          <Text style={styles.cardText}>
            O seu dispositivo foi verificado e a sua conta foi criada!
          </Text>
          <TouchableOpacity
            onPress={() => handleValidation()}
            style={styles.cardButton}
          >
            <Text style={styles.cardTextButton}>Continuar</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else if (rota == "phone") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Por favor, insira o código que enviamos agora para:{" "}
        </Text>
        <Text style={styles.numberTitle}>+55******8963</Text>

        <TextInput
          value={codigo}
          onChangeText={setCodigo}
          style={styles.input}
        />

        <TouchableOpacity onPress={() => handleHome()} style={styles.button}>
          <Text style={styles.text}>Verificar</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (rota == "email") {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Por favor, insira o código que enviamos agora para:{" "}
        </Text>
        <Text style={styles.numberTitle}>******gmail.com</Text>

        <TextInput
          value={codigo}
          onChangeText={setCodigo}
          style={styles.input}
        />

        <TouchableOpacity onPress={() => handleHome()} style={styles.button}>
          <Text style={styles.text}>Verificar</Text>
        </TouchableOpacity>
      </View>
    );
  }
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

  cardContainer: {
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

  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },

  cardText: {
    width: "80%",
    fontSize: 12,
    textAlign: "center",
  },

  cardButton: {
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

  cardTextButton: {
    color: "#fff",
    fontWeight: "bold", // Texto branco pra ficar top no botão azul
    fontSize: 18,
  },
});

export default VerificacaoScreen;
