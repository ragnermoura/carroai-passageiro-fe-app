import React from "react";
import {
  StyleSheet,
  View,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  Ionicons,
  MaterialIcons,
  Foundation,
  Octicons,
} from "@expo/vector-icons";
import LastRaces from "../../components/cards/lastRaces/lastRaces";

const SearchScreen = () => {
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

      <View style={styles.card}>
        <View style={styles.inputsContainer}>
          <View style={styles.line}></View>
          <View style={styles.circle}></View>
          <View style={styles.inputWrapper}>
            <TextInput placeholder="Partida" style={styles.input} />
            <MaterialIcons name="gps-fixed" size={24} color="#979797" />
          </View>
        </View>
        <View style={styles.inputsContainer}>
          <View style={styles.line}></View>
          <View style={styles.square}></View>
          <View style={[styles.dashedLine, styles.dashedLine0]}></View>
          <View style={[styles.dashedLine, styles.dashedLine1]}></View>
          <View style={[styles.dashedLine, styles.dashedLine2]}></View>
          <View style={[styles.dashedLine, styles.dashedLine3]}></View>
          <View style={styles.inputWrapper}>
            <TextInput placeholder="Destino" style={styles.input} />
            <MaterialIcons name="gps-fixed" size={24} color="#979797" />
          </View>
          <TouchableOpacity style={styles.plusButton}>
            <MaterialIcons name="add" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.savedLocations}>
        <Text style={styles.localTitle}>Locais Salvos</Text>
        <View style={styles.cardLocal}>
          <View style={styles.localOption}>
            <Foundation
              name="home"
              color="#f8bd00"
              size={20}
              style={styles.iconLocal}
            />
            <Text style={styles.textLocal}>Casa</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              color="#2b2b2b"
              size={14}
              style={styles.iconArrow}
            />
          </View>
          <View style={styles.localOption}>
            <MaterialIcons
              name="work"
              color="#f8bd00"
              size={24}
              style={styles.iconLocal}
            />
            <Text style={styles.textLocal}>Trabalho</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              color="#2b2b2b"
              size={14}
              style={styles.iconArrow}
            />
          </View>
          <View style={styles.localOption}>
            <Octicons
              name="star-fill"
              color="#f8bd00"
              size={24}
              style={styles.iconLocal}
            />
            <Text style={styles.textLocal}>Favoritos</Text>
          </View>
        </View>
      </View>

      <View>
        <Text style={styles.titleLastRaces}>Últimas corridas</Text>
        <LastRaces
          title={"Mercado"}
          address={
            "Av. Principal, N° 25 - Maracanãzinho, Santarém - PA, 12345-678, Brasil"
          }
          distance={"4,2 Km"}
          border={true}
        />
        <LastRaces
          title={"Casa"}
          address={
            "Rua Maracanãzinho, N° 300 - Santarém - PA, 12345-678, Brasil"
          }
          distance={"3,5 Km"}
          border={true}
        />
        <LastRaces
          title={"Parque da cidade"}
          address={
            "Rua Pará, N° 458 - Bairro da paz, Santarém - PA, 12345-678, Brasil"
          }
          distance={"2 Km"}
          border={false}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "ios" ? 90 : 95,
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
  card: {
    alignItems: "center",
    width: "100%",
  },
  inputsContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    marginLeft: 50,
    position: "relative",
  },
  line: {
    height: 2,
    width: 20,
    backgroundColor: "#979797",
    position: "absolute",
    left: -20,
    top: "40%",
    zIndex: 10,
  },
  circle: {
    width: 12,
    height: 12,
    backgroundColor: "#979797",
    borderRadius: 10,
    position: "absolute",
    top: "33%",
    left: -28,
    zIndex: 12,
  },
  square: {
    width: 12,
    height: 12,
    backgroundColor: "#979797",
    position: "absolute",
    top: "33%",
    left: -28,
    zIndex: 12,
  },
  dashedLine: {
    width: 2,
    height: 12,
    backgroundColor: "#979797",
    position: "absolute",
    zIndex: 10,
  },
  dashedLine0: {
    top: 5,
    left: -23,
  },
  dashedLine1: {
    top: -15,
    left: -23,
  },
  dashedLine2: {
    top: -35,
    left: -23,
  },
  dashedLine3: {
    top: -55,
    left: -23,
  },
  inputWrapper: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
  },
  plusButton: {
    marginBottom: 10,
    marginLeft: 15,
  },
  savedLocations: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "rgba(151, 151, 151, .3)",
    marginBottom: 30,
  },
  localTitle: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2b2b2b",
  },
  cardLocal: {
    flexDirection: "row",
    padding: 25,
  },
  localOption: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 20,
  },
  iconLocal: {
    marginRight: 4,
  },
  textLocal: {
    marginRight: 4,
    fontSize: 14,
    fontWeight: "500",
  },
  iconArrow: {
    marginTop: 2,
  },
  titleLastRaces: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2b2b2b",
    marginBottom: 20,
  },
});

export default SearchScreen;
