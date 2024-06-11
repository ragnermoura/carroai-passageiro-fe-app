import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

const WelcomeScreen = ({}) => {
  const [activeSlide, setActiveSlide] = useState(0);

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
      {item.screen == "Google" ? (
        <Image
          source={require("../../../assets/logo/googleIcon.png")}
          style={styles.slideButtonIcon}
        />
      ) : (
        <FontAwesome
          name={item.icon}
          size={24}
          color="black"
          style={styles.slideButtonIcon}
        />
      )}
      <Text style={styles.buttonText}>{item.buttonText}</Text>
    </TouchableOpacity>
  );

  const entries = [
    {
      buttonText: "Insira seu número",
      screen: "Phone",
      icon: "mobile-phone",
    },
    { buttonText: "Insira seu email", screen: "Email", icon: "envelope-o" },
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
            // "rgba(128, 171, 207, 0.8)",
            // "rgba(0, 104, 193, 0.8)",
            // "transparent",
            "rgba(217, 217, 217, 0.8)",
            "rgba(128, 171, 207, 0.8)",
            "rgba(74, 142, 201, 0.8)",
            "rgba(36, 123, 197, 1)",
            "rgba(0, 104, 193, 1)",
            "transparent",
          ]}
          style={styles.gradient}
        >
          <View style={styles.gradientBox}>
            <Text style={styles.welcomeTitle}>Bem-vindo!</Text>
            <Image
              source={require("../../../assets/logo/carroAiLogo.png")}
              style={styles.carroAiLogo}
            />
          </View>
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

            {/* <TouchableOpacity onPress={handleRegister}> // esse era o caminho que estava antes */}
            <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
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

  gradientBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  carroAiLogo: {
    marginRight: 20,
    marginBottom: 15,
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
    marginBottom: 8,
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
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 50,
  },

  slideButtonIcon: {
    marginRight: 10,
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
    marginTop: -10, // Ajuste conforme necessário para mover o botão para cima
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
