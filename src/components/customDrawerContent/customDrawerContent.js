import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.profileSection}>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }} // Adicione a URL da imagem do usuário
          style={styles.profileImage}
        />
        <Text style={styles.userName}>Nome do User</Text>
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.viewProfile}>Ver perfil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.menuItems}>
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="account-balance-wallet" color={color} size={size} />
          )}
          label="Carteira"
          onPress={() => {
            props.navigation.navigate("Carteira");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="local-offer" color={color} size={size} />
          )}
          label="Promoções"
          onPress={() => {
            props.navigation.navigate("Promoções");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="history" color={color} size={size} />
          )}
          label="Histórico de viagens"
          onPress={() => {
            props.navigation.navigate("Histórico de viagens");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="help" color={color} size={size} />
          )}
          label="Ajuda"
          onPress={() => {
            props.navigation.navigate("Ajuda");
          }}
        />
        <DrawerItem
          icon={({ color, size }) => (
            <Icon name="info" color={color} size={size} />
          )}
          label="Sobre nós"
          onPress={() => {
            props.navigation.navigate("Sobre nós");
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  profileSection: {
    padding: 20,
    backgroundColor: "#f4f4f4",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    alignItems: "center",
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewProfile: {
    color: "#f39c12",
  },
  menuItems: {
    marginTop: 10,
  },
});
