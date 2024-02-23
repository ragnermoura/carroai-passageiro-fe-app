import React, { useState } from "react";
import Mapa from '../../../assets/images/map.svg'

import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");


const WelcomeScreen = ({ navigation }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.slideButton}
      onPress={() => navigation.navigate(item.screen)}
    >
      <Text style={styles.buttonText}>{item.buttonText}</Text>
    </TouchableOpacity>
  );

  const entries = [
    { buttonText: "Entrar com número de telefone", screen: "Phone" },
    { buttonText: "Entrar com email", screen: "Email" },
    { buttonText: "Entrar com Google", screen: "loginGoogle" },
  ];

  return (
    <View style={styles.container}>
           <ImageBackground
        source={require('../../../assets/images/map.png')}
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

          {entries.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.slideButton}
              onPress={() => navigation.navigate(item.screen)}
            >
              <Text style={styles.buttonText}>{item.buttonText}</Text>
            </TouchableOpacity>
          ))}

          <Pagination
            dotsLength={entries.length}
            activeDotIndex={activeSlide}
            containerStyle={{ backgroundColor: "transparent", paddingTop: 20 }}
            dotStyle={styles.dotStyle}
            inactiveDotOpacity={0.4}
            inactiveDotScale={0.6}
          />
          <TouchableOpacity
            style={styles.signupButton}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.signupText}>Ainda não tenho conta</Text>
          </TouchableOpacity>
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
    height: 4,
    backgroundColor: "yellow",
    width: "100%",
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
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: "stretch",
  },
  buttonText: {
    color: "#2B2B2B",
    fontSize: 16,
    textAlign: "center",
  },
  signupButton: {
    marginTop: 20,
    alignSelf: "center",
  },
  signupText: {
    color: "#007bff",
  },
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: "rgba(255, 255, 255, 0.92)",
  },
});

export default WelcomeScreen;
