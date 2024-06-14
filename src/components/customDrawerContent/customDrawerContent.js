import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialIcons";
import Wallet from "../../../assets/icons/wallet.svg";
import Promotion from "../../../assets/icons/promotion.svg";
import TravelHistoric from "../../../assets/icons/travelHistoric.svg";
import Help from "../../../assets/icons/help.svg";
import AboutUs from "../../../assets/icons/aboutUs.svg";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileSection}>
        <Image
          source={require("../../../assets/images/profile.png")} // Adicione a URL da imagem do usuário
          style={styles.profileImage}
        />
        <View>
          <Text style={styles.userName}>Nome do User</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.viewProfile}>Ver perfil</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.border}></View>
      <View style={styles.menuItems}>
        {/* <DrawerItem
          icon={({ color, size }) => <Wallet color="#979797" size={size} />}
          label="Carteira"
          onPress={() => {
            props.navigation.navigate("Carteira");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => <Promotion color="#979797" size={size} />}
          label="Promoções"
          onPress={() => {
            props.navigation.navigate("Promoções");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <TravelHistoric color="#979797" size={size} />
          )}
          label="Histórico de viagens"
          onPress={() => {
            props.navigation.navigate("Histórico de viagens");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => <Help color="#979797" size={size} />}
          label="Ajuda"
          onPress={() => {
            props.navigation.navigate("Ajuda");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => <AboutUs color="#979797" size={size} />}
          label="Sobre nós"
          onPress={() => {
            props.navigation.navigate("Sobre nós");
          }}
        /> */}
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => {
            props.navigation.navigate("Carteira");
          }}
        >
          <Wallet color="#979797" size={20} />
          <Text style={styles.textButton}>Carteira</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => {
            props.navigation.navigate("Promoções");
          }}
        >
          <Promotion color="#979797" size={20} />
          <Text style={styles.textButton}>Promoções</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => {
            props.navigation.navigate("Histórico de viagens");
          }}
        >
          <TravelHistoric color="#979797" size={20} />
          <Text style={styles.textButton}>Histórico de viagens</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => {
            props.navigation.navigate("Ajuda");
          }}
        >
          <Help color="#979797" size={20} />
          <Text style={styles.textButton}>Ajuda</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonMenu}
          onPress={() => {
            props.navigation.navigate("Sobre nós");
          }}
        >
          <AboutUs color="#979797" size={20} />
          <Text style={styles.textButton}>Sobre Nós</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
        <View style={styles.border}></View>
        <TouchableOpacity>
          <Text style={styles.footerText}>Torne-se um motorista!</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  userName: {
    fontSize: 20,
    fontWeight: "600",
  },
  viewProfile: {
    color: "#e5ae01",
    fontSize: 15,
    fontWeight: "600",
  },
  border: {
    backgroundColor: "#ddd",
    height: 1,
    width: "85%",
    alignSelf: "center",
  },
  menuItems: {
    marginTop: 40,
    marginLeft: 25,
    marginBottom: "90%",
  },
  buttonMenu: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  textButton: {
    marginLeft: 20,
    fontSize: 15,
    fontWeight: "400",
  },
  footer: {
    alignItems: "center",
  },
  footerText: {
    marginTop: 40,
    color: "#e5ae01",
    fontSize: 15,
    fontWeight: "600",
  },
});
