import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import Exclamation from "../../../assets/icons/exclamation.svg";
import Geometry from "../../../assets/icons/geometry.svg";

const HelpScreen = () => {
  const navigation = useNavigation();

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

      <Text style={styles.title}>Central de ajuda</Text>
      <TouchableOpacity style={styles.card}>
        <View style={styles.boxInfo}>
          <MaterialIcons name="message" size={24} style={styles.icon} />
          <View style={styles.cardText}>
            <Text style={styles.text}>Solicitar assistência</Text>
            <Text style={styles.subText}>Abrir chat de apoio</Text>
          </View>
        </View>
        <Entypo name="chevron-right" size={24} />
      </TouchableOpacity>

      <View style={styles.div}></View>

      <TouchableOpacity style={styles.card}>
        <View style={styles.boxInfo}>
          <Geometry style={styles.icon} />
          <View>
            <Text style={styles.text}>Dúvidas e reclamações</Text>
          </View>
        </View>
        <Entypo name="chevron-right" size={24} />
      </TouchableOpacity>

      <View style={styles.div}></View>

      <TouchableOpacity style={styles.card}>
        <View style={styles.boxInfo}>
          <Exclamation
            style={[styles.icon, { marginLeft: 8, marginRight: 25 }]}
          />
          <View style={styles.cardText}>
            <Text style={styles.text}>Achados e perdidos</Text>
          </View>
        </View>
        <Entypo name="chevron-right" size={24} />
      </TouchableOpacity>

      <View style={styles.div}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 90 : 95,
    paddingHorizontal: 25,
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
    zIndex: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 25,
  },
  boxInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
  text: {
    fontSize: 14,
    fontWeight: "400",
    marginBottom: 2,
  },
  subText: {
    fontSize: 12,
    fontWeight: "300",
  },
  div: {
    alignSelf: "center",
    width: "95%",
    height: 1,
    marginLeft: 10,
    backgroundColor: "#d9d9d9",
  },
});

export default HelpScreen;
