import React, { useState } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome6 } from "@expo/vector-icons";

const LoginGoogleScreen = ({}) => {
  const navigation = useNavigation();

  // const handleValidation = () => {
  //   // aqui será a integração com a api
  //   navigation.reset({
  //     routes: [{ name: "SenhaGoogle" }],
  //   });
  // };

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

      <View style={styles.acountCards}>
        <TouchableOpacity
          style={styles.acountCard}
          onPress={() => navigation.navigate("SenhaGoogle")}
        >
          <View style={styles.acountIcon}>
            <Text style={styles.acountIconText}>A</Text>
          </View>
          <View>
            <Text style={styles.acountInfoName}>Allan Robert</Text>
            <Text style={styles.acountInfoEmail}>email@gmail.com</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.acountCard}
          onPress={() => navigation.navigate("SenhaGoogle")}
        >
          <View style={styles.acountIconBlue}>
            <Text style={styles.acountIconText}>C</Text>
          </View>
          <View>
            <Text style={styles.acountInfoName}>Carro Aí</Text>
            <Text style={styles.acountInfoEmail}>email@gmail.com</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.acountCard}
          onPress={() => navigation.navigate("OutraContaGoogle")}
        >
          <View style={styles.otherAcountIcon}>
            <View style={styles.borderIcon}>
              <FontAwesome6 name="user" style={styles.acountIconImg} />
            </View>
          </View>
          <View>
            <Text style={styles.acountInfoName}>Usar outra conta</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.description}>
        <Text style={styles.descriptionText}>
          To continue, Google Will share your name, email address, language
          preference, and profile picture with Company. Before using this app,
          you can review Company's{" "}
          <Text style={styles.descriptionHighlighted}>privacy policy</Text> and{" "}
          <Text style={styles.descriptionHighlighted}>terms of service.</Text>
        </Text>
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
    marginBottom: 20,
    fontWeight: "bold",
  },

  subTitleHeader: {
    fontSize: 14,
    marginBottom: 15,
  },

  acountCards: {
    width: "100%",
    alignItems: "center",
    marginBottom: 45,
  },

  acountCard: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "#dadce0",
    paddingVertical: 15,
  },

  acountIcon: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#7b1fa2",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  acountIconBlue: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#0068c1",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  acountIconText: {
    color: "#fff",
    fontSize: 25,
  },

  acountInfoName: {
    fontSize: 14,
    color: "#3c4043",
    fontWeight: "bold",
  },

  acountInfoEmail: {
    fontSize: 12,
    color: "#5f6368",
  },

  otherAcountIcon: {
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },

  borderIcon: {
    width: 25,
    height: 25,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: "#5f6368",
    alignItems: "center",
    justifyContent: "center",
  },

  acountIconImg: {
    fontSize: 16,
    color: "#5f6368",
  },

  description: {
    width: "80%",
  },

  descriptionText: {
    fontSize: 14,
    color: "#5f6368",
  },

  descriptionHighlighted: {
    color: "#1a73e8",
    fontWeight: "bold",
  },
});

export default LoginGoogleScreen;
