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
import IconBrasilFlag from "../../../assets/images/brasilFlag.svg";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../../services/auth/index";

const CadastroScreen = ({}) => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [senha, setSenha] = useState("");
  const [confirma, setConfSenha] = useState("");
  const [checked, setChecked] = useState(false);
  const [registrationForm, setRegistrationForm] = useState("email");

  const navigation = useNavigation();

  const toggleFormRegister = (form) => {
    setNome("");
    setTelefone("");
    setEmail("");
    setSenha("");
    setConfSenha("");
    setChecked(false);
    if (form == "phone") {
      setRegistrationForm("phone");
    } else if (form == "email") {
      setRegistrationForm("email");
    }
  };

  const validateEmail = (email) => {
    // Regex para validação básica de email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (email) => {
    setEmail(email);
    setIsValidEmail(validateEmail(email));
  };

  const handleRegister = (form) => {
    // alterar essa lógica para se adequar ao backend
    if (
      (telefone === "" || email === "") &&
      (senha === "" || confirma === "")
    ) {
      alert("😬 Preencha todos os campos");
    } else if (senha !== confirma) {
      alert("🫣 As palavras-passe não são iguais, tente novamente");
    } else {
      if (form == "email") {
        if (validateEmail(email)) {
          const storeData = async (key, value) => {
            try {
              const jsonValue = JSON.stringify(value);
              await AsyncStorage.setItem(key, jsonValue);
            } catch (error) {
              console.error("Error storing data", error);
            }
          };

          storeData("registrar", {
            email: email,
            password: senha,
            nome: nome,
          });

          if (checked) {
            // api.emailRegister(email, senha, nome).then((res) => {
            //   // console.log(res.status)
            //   if (res.status == 202) {
            //     const id_usuario = res.data.usuarioCriado.id_user;
            //     setTimeout(() => {
            //       navigation.navigate("Verificacao", {
            //         rota: "email",
            //         id: id_usuario,
            //       });
            //     }, 3000);
            //   }
            // });
            navigation.navigate("Verificacao", {
              rota: "email",
              // id: id_usuario,
            });
          } else {
            alert("Aceite os termos de uso e as políticas de Privacidade");
          }
        } else {
          alert("Email Inválido!");
        }
      } else if (form == "phone") {
        const storeData = async (key, value) => {
          try {
            const jsonValue = JSON.stringify(value);
            await AsyncStorage.setItem(key, jsonValue);
          } catch (error) {
            console.error("Error storing data", error);
          }
        };

        storeData("registrar", {
          telefone: telefone,
          password: senha,
          nome: nome,
        });

        if (checked) {
          // api.PhoneRegister(telefone, senha, nome).then((res) => {
          //   // console.log(res.status)
          //   if (res.status == 202) {
          //     const id_usuario = res.data.usuarioCriado.id_user;
          //     setTimeout(() => {
          //       navigation.navigate("Verificacao", {
          //         rota: "phone",
          //         id: id_usuario,
          //       });
          //     }, 3000);
          //   }
          // });
          navigation.navigate("Verificacao", {
            rota: "phone",
            // id: id_usuario,
          });
        } else {
          alert("Aceite os termos de uso e as políticas de Privacidade");
        }
      }
    }
  };

  // const handleValidation = (form) => {
  //   // aqui será a integração com a api
  //   // navigation.reset({
  //   //   routes: [{ name: "Home" }],
  //   // });
  //   if (checked && form == "phone") {
  //     navigation.reset({
  //       routes: [{ name: "Verificacao", params: { rota: "phone" } }],
  //     });
  //   } else if (checked && form == "email") {
  //     navigation.reset({
  //       routes: [{ name: "Verificacao", params: { rota: "email" } }],
  //     });
  //   } else {
  //     alert("Aceite os termos de uso e as políticas de Privacidade");
  //     return;
  //   }
  // };

  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  if (registrationForm == "email") {
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
          Preencha seus dados para criar a sua conta
        </Text>

        <View style={styles.boxRegister}>
          <View style={styles.boxPhoneRegister}>
            {/* <TouchableOpacity onPress={() => setIsCriarComTelefone(false)}> // assim que estava antes */}
            <TouchableOpacity onPress={() => toggleFormRegister("phone")}>
              <Text style={[styles.phoneRegister, { color: "#979797" }]}>
                Cadastrar com número de telefone
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.boxEmailRegister}>
            {/* <TouchableOpacity onPress={() => setIsCriarComEmail(true)}> // assim que estava antes */}
            <View>
              <Text>Cadastrar com email</Text>
            </View>
          </View>
        </View>

        <View style={styles.inputCard}>
          <Text style={styles.titleInputCard}>Nome</Text>
          <TextInput
            placeholder="Nome Sobrenome"
            value={nome}
            onChangeText={(t) => setNome(t)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputCard}>
          <Text style={styles.titleInputCard}>Email</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(t) => handleEmailChange(t)}
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
            onChangeText={(t) => setSenha(t)}
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
            placeholder="Confirmar senha"
            value={confirma}
            onChangeText={(t) => setConfSenha(t)}
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
        <TouchableOpacity
          onPress={() => handleRegister("email")}
          style={styles.button}
        >
          <Text style={styles.text}>Continuar</Text>
        </TouchableOpacity>
      </View>
    );
  } else if (registrationForm == "phone") {
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
          Preencha seus dados para criar a sua conta
        </Text>

        <View style={styles.boxRegister}>
          <View style={styles.boxPhoneRegister}>
            {/* <TouchableOpacity onPress={() => setIsCriarComTelefone(false)}> // assim que estava antes */}
            <View>
              <Text style={styles.phoneRegister}>
                Cadastrar com número de telefone
              </Text>
            </View>
          </View>

          <View style={styles.boxEmailRegister}>
            {/* <TouchableOpacity onPress={() => setIsCriarComEmail(true)}> // assim que estava antes */}
            <TouchableOpacity onPress={() => toggleFormRegister("email")}>
              <Text style={{ color: "#979797" }}>Cadastrar com email</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputCard}>
          <Text style={styles.titleInputCard}>Nome</Text>
          <TextInput
            placeholder="Nome Sobrenome"
            value={nome}
            onChangeText={(t) => setNome(t)}
            style={styles.input}
          />
        </View>

        <View style={styles.inputCard}>
          <Text style={styles.titleInputCard}>Número</Text>
          <TextInput
            placeholder="+55 01 23456-7890"
            value={telefone}
            onChangeText={(t) => setTelefone(t)}
            style={styles.inputPhone}
            keyboardType="phone-pad"
          />
          <IconBrasilFlag style={styles.iconFlag} />
        </View>

        <View style={styles.inputCard}>
          <Text style={styles.titleInputCard}>Senha</Text>
          <TextInput
            placeholder="Senha"
            value={senha}
            onChangeText={(t) => setSenha(t)}
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
            placeholder="Confirmar senha"
            value={confirma}
            onChangeText={(t) => setConfSenha(t)}
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
        <TouchableOpacity
          onPress={() => handleRegister("phone")}
          style={styles.button}
        >
          <Text style={styles.text}>Continuar</Text>
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
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 25,
    alignSelf: "flex-start",
    // top: 35,
  },

  boxRegister: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginBottom: 30,
  },

  boxPhoneRegister: {
    alignItems: "center",
    width: "40%",
    marginRight: 20,
  },

  phoneRegister: {
    textAlign: "center",
  },

  boxEmailRegister: {
    width: "50%",
    alignItems: "center",
  },

  inputCard: {
    width: "90%",
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

  inputPhone: {
    width: "100%", // Isso faz com que o input ocupe a largura total do container
    height: 57, // Altura do input
    marginBottom: 10, // Espaço entre o input e o botão
    top: 15,
    borderWidth: 1,
    borderColor: "#ccc", // Cor da borda do input
    borderRadius: 10, // Bordas arredondadas
    paddingHorizontal: 10, // Padding interno do input
    paddingLeft: 55,
    backgroundColor: "#d9d9d9",
  },

  iconFlag: {
    position: "absolute",
    top: "53%",
    left: "5%",
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

  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#E5AE01",
    justifyContent: "center",
    alignItems: "center",
    top: 26,
    marginRight: 20,
  },

  termsText: {
    fontSize: 14,
    marginLeft: 30,
    fontWeight: "bold",
  },

  termsTextHighlighted: {
    color: "#e5ae01",
  },

  checked: {
    backgroundColor: "#E5AE01",
  },

  button: {
    width: "100%", // Faz o botão ter a mesma largura do input
    height: 60, // Altura do botão, pode ajustar conforme necessário
    backgroundColor: "#0068C1", // Fundo azul
    justifyContent: "center", // Isso centraliza o texto no botão verticalmente
    alignItems: "center", // E isso horizontalmente
    borderRadius: 5, // Bordas arredondadas do botão
    top: 20,
  },

  text: {
    color: "#fff",
    fontWeight: "bold", // Texto branco pra ficar top no botão azul
    fontSize: 18,
  },

  label: {
    fontSize: 14,
  },

  forgotPasswordText: {
    marginTop: 15,
    color: "#E5AE01",
    fontWeight: "bold",
  },
});

export default CadastroScreen;
