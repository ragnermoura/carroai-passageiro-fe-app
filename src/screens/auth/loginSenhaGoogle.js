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
import { Ionicons, FontAwesome, Entypo, AntDesign } from "@expo/vector-icons";

const LoginSenhaGoogleScreen = ({}) => {
  const [senha, setSenha] = useState("");
  const [checked, setChecked] = useState(false);

  const navigation = useNavigation();

  const handleValidation = () => {
    // aqui será a integração com a api
    navigation.reset({
      routes: [{ name: "Menu" }],
    });
  };

  const toggleCheckbox = () => {
    setChecked(!checked);
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

      <Text style={styles.titleHeader}>Bem-vindo</Text>

      <View style={styles.boxEmail}>
        <FontAwesome name="user-circle" style={styles.userIcon} />
        <Text style={styles.boxEmailText}>email@gmail.com</Text>
        <Entypo name="chevron-down" style={styles.userIcon} />
      </View>

      <TextInput
        placeholder="*************"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry={checked ? false : true}
        style={styles.inputPassword}
      />

      <View style={styles.boxShowPassword}>
        <TouchableOpacity style={styles.boxChecked} onPress={toggleCheckbox}>
          {checked ? (
            <AntDesign name="checksquare" style={styles.checked} size={15} />
          ) : (
            <AntDesign name="checksquareo" style={styles.checked} size={15} />
          )}
        </TouchableOpacity>
        <Text style={styles.boxShowText}>Exibir senha</Text>
      </View>

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
        {/* colocar um onpress no text de esqueceu a senha que leve para a pagina de recuperar a senha  */}
        <Text style={styles.boxButtonText}>Esqueceu a senha?</Text>
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

  boxEmail: {
    width: "45%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 5,
    paddingBottom: 4,
    paddingTop: 2,
    borderWidth: 1,
    borderColor: "#d9d9d9",
    borderRadius: 15,
    marginBottom: 22,
  },

  userIcon: {
    width: 15,
    height: 15,
    color: "#585d65",
    marginBottom: -6,
  },

  boxEmailText: {
    fontSize: 12,
    color: "#585d65",
  },

  inputPassword: {
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

  boxShowPassword: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
    marginLeft: 34,
    marginBottom: 30,
  },

  boxChecked: {
    width: 15,
    height: 15,
    marginRight: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  checked: {
    color: "#585d65",
  },

  boxShowText: {
    fontSize: 12,
    color: "#585d65",
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
    flexDirection: "row",
    alignItems: "center",
  },

  boxButtonText: {
    fontSize: 15,
    marginRight: 20,
    marginLeft: 10,
    color: "#1a73e8",
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

export default LoginSenhaGoogleScreen;
