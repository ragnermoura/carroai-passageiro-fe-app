import React, { useState } from "react";
import Mapa from "../../../assets/images/map.svg";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet, Dimensions } from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");



const WelcomeScreen = ({ state, navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  //Coloquei isso aqui
  const navigation = useNavigation();


  //O handleRegister precisa ter o mesmo nome do onpress do button
  const handleRegister = () => {
    navigation.reset({
      routes: [{ name: "Cadastro" }],
    });
  };


  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      key={index}
      style={styles.slideButton}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Text style={styles.buttonText}>{item.buttonText}</Text>
    </TouchableOpacity>
  );

  const entries = [
    { buttonText: "Entrar com número de telefone", screen: "Phone" },
    { buttonText: "Entrar com email", screen: "Email" },
    { buttonText: "Entrar com Google", screen: "Google" },
  ];

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/images/map.png")}
        style={styles.backgroundImage}
      >
        <LinearGradient
          colors={[
            "rgba(128, 171, 207, 0.8)",
            "rgba(0, 104, 193, 0.8)",
            "transparent",
          ]}
          style={styles.gradient}
        >
          <Text style={styles.welcomeTitle}>Bem-vindo ao Carro Aí</Text>
        </LinearGradient>

        <View style={styles.whiteBox}>
          <View style={styles.yellowDivider}></View>
          <Text style={styles.startTitle}>Vamos começar?</Text>
          <Text style={styles.infoText}>
            Preencha as informações para entrar na sua conta.
          </Text>

          {/* {entries.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.slideButton}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text style={styles.buttonText}>{item.buttonText}</Text>
            </TouchableOpacity>
          ))} */}

          <Carousel
            data={entries}
            renderItem={renderItem}
            sliderWidth={width}
            itemWidth={width - 60} // Você pode ajustar isso conforme necessário
            onSnapToItem={(index) => setActiveSlide(index)}
          />

          <Pagination
            dotsLength={entries.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: "transparent", paddingTop: 20 }}
            dotStyle={styles.dotStyle}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />

          {/* Sempre dê preferencia por colocar assim. Lembra sempre da TAG PAI, nesse caso, a TAG PAI é o <view></view> */}

          {/* Repara que eu coloquei esse goTo que significa Vá para .... Sempre que quiser redirecionar, faça isso! */}
          <View style={styles.signupButtonContainer}>
            
            {/* Senão funcionar aqui mude esse onPress={handleRegister} para a View */}

            <TouchableOpacity onPress={handleRegister}>
              <Text style={styles.signupText}>Ainda não tenho conta</Text>
            </TouchableOpacity>

          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },

  gradient: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    paddingBottom: height * 0.4, // Ajuste para que "Bem-vindo ao Carro Aí" fique acima do quadrado branco
  },

  whiteBox: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: height * 0.4,
    backgroundColor: "white",
    paddingTop: 25,
    paddingHorizontal: 20,
  },

  yellowDivider: {
    position: "absolute",
    top: 0,
    height: 20,
    backgroundColor: "#F8BD00",
    width: "120%",
  },

  welcomeTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    marginLeft: 20,
    marginBottom: 5,
  },

  startTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#2B2B2B",
    alignSelf: "flex-start",
  },

  infoText: {
    fontSize: 16,
    fontWeight: "400",
    color: "#2B2B2B",
    alignSelf: "flex-start",
    marginBottom: 20,
  },

  slideButton: {
    backgroundColor: "white",
    borderRadius: 10,
    height: "57",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: "stretch",
    marginRight: 50,
  },

  buttonText: {
    borderRadius: 5,
    color: "#2B2B2B",
    fontSize: 16,
    textAlign: "center",
  },

  signupButton: {
    marginTop: 20,
    alignSelf: "center",
  },

  signupButtonContainer: {
    marginTop: -30, // Ajuste conforme necessário para mover o botão para cima
    alignSelf: "stretch", // Isso garante que o container ocupe a largura disponível
  },

  signupText: {
    color: "#E5AE01",
    textAlign: "center",
    marginBottom: 30,
  },

  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 1,
    backgroundColor: "#2b2b2b",
    marginBottom: 30,
  },
});

export default WelcomeScreen;
