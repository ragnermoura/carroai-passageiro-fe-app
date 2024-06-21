import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const Expansion = () => {
  const markerCoordinate = { latitude: -2.43849, longitude: -54.6996 };
  const outerCircleRadius = 600; // Raio do círculo externo
  const middleCircleRadius = 400; // Raio do círculo do meio
  const innerCircleRadius = 200; // Raio do círculo interno

  const navigation = useNavigation();

  setTimeout(() => {
    navigation.navigate("RaceConfirmation");
  }, 10000);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -2.43849,
          longitude: -54.6996,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={markerCoordinate}
          title="Av. Mal. Rondon, 2678 - Prainha"
        />
        <Circle
          center={markerCoordinate}
          radius={outerCircleRadius}
          strokeWidth={0}
          fillColor="rgba(255, 165, 0, 0.1)"
          zIndex={8}
        />
        <Circle
          center={markerCoordinate}
          radius={middleCircleRadius}
          strokeWidth={0}
          fillColor="rgba(255, 165, 0, 0.2)"
          zIndex={9}
        />
        <Circle
          center={markerCoordinate}
          radius={innerCircleRadius}
          strokeWidth={0}
          fillColor="rgba(255, 255, 255, 1)"
          zIndex={10}
        />
        {/* colocar uma animaçao para ficar aumentando o raio e diminuindo */}
      </MapView>
      <View style={styles.footer}>
        <View style={styles.cardSolicitation}>
          <View style={styles.boxBarStatus}>
            <View style={[styles.bar, styles.barActive]}></View>
            <View style={[styles.bar, styles.barActive]}></View>
            <View style={styles.bar}></View>
          </View>
          <Text style={styles.titleSol}>Expandindo raio de busca</Text>
          <Text style={styles.subTitleSol}>
            Embarque estimado da corrida: 13:47
          </Text>
        </View>

        <View style={styles.boxPayment}>
          <Text style={styles.cardSwitch}>R$ 15,50</Text>
          <View style={styles.boxCard}>
            <Image source={require("../../../assets/images/flagCard.png")} />
            <Text style={styles.cardNumber}>8989</Text>
          </View>
        </View>

        <View style={styles.cardLocation}>
          <View style={styles.boxLocation}>
            <View style={[styles.circle, styles.circleDone]}></View>
            <Text style={styles.textHeader}>
              Av. Mal. Rondon, 2678 - Prainha, Santar...
            </Text>
          </View>
          <View style={styles.div}></View>
          <View style={styles.boxLocation}>
            <View style={[styles.circle, styles.circleClose]}></View>
            <Text style={styles.textHeader}>R. Maracanãzinho, 300</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width,
    height: height * 0.6,
  },
  footer: {
    position: "absolute",
    zIndex: 100,
    bottom: 0,
    width: "100%",
    height: "45%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 12,
  },
  cardSolicitation: {
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 12,
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  boxBarStatus: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  bar: {
    width: "30%",
    height: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    marginBottom: 20,
  },
  barActive: {
    backgroundColor: "#f8bd00",
  },
  titleSol: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  subTitleSol: {
    fontSize: 14,
    fontWeight: "400",
  },
  boxPayment: {
    alignSelf: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 21,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 12,
    backgroundColor: "#fff",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  boxCard: {
    flexDirection: "row",
    alignItems: "center",
  },
  cardNumber: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2b2b2b",
    marginLeft: 8,
  },
  cardSwitch: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2b2b2b",
  },
  cardLocation: {
    alignItems: "center",
    justifyContent: "space-between",
  },
  boxLocation: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "90%",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 7,
    alignSelf: "flex-start",
  },
  circleDone: {
    backgroundColor: "rgba(11, 164, 8, .5)",
  },
  circleClose: {
    backgroundColor: "rgba(248, 17, 17, .5)",
  },
  div: {
    alignSelf: "flex-start",
    height: 30,
    width: 2,
    backgroundColor: "rgba(151, 151, 151, .5)",
    marginLeft: 21,
    marginTop: 9,
    marginBottom: 4,
  },
  textHeader: {
    fontSize: 16,
    fontWeight: "400",
    color: "#2b2b2b",
  },
});

export default Expansion;
