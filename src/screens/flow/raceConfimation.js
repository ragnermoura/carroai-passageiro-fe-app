import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Platform,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MainALert from "../../components/alert/mainAlert";

const RaceConfirmation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [driver, setDriver] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const handleDriverOn = () => {
    setDriver(true);
  };

  const handleDriverOff = () => {
    setTimeout(() => {
      setDriver(false);
    }, 15000);
  };

  if (!location) {
    return (
      <View style={styles.loadingContainer}>
        {errorMsg ? (
          <Text>{errorMsg}</Text>
        ) : (
          <ActivityIndicator size="large" />
        )}
      </View>
    );
  }

  if (driver == false) {
    return (
      <MainALert
        title={"LAMENTAMOS MUITO!"}
        text={
          "Ainda não foi possível encontrar um motorista para a sua viagem."
        }
        buttonText={"AGUARDAR"}
        onPress={handleDriverOn}
      />
    );
  } else if (driver == true) {
    handleDriverOff();
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker coordinate={location.coords} />
        </MapView>

        <ScrollView style={styles.footer}>
          <View style={styles.cardSolicitation}>
            <View style={styles.boxBarStatus}>
              <View style={[styles.bar, styles.barActive]}></View>
              <View style={[styles.bar, styles.barActive]}></View>
              <View style={[styles.bar, styles.barActive]}></View>
            </View>
            <Text style={styles.titleSol}>Conectando com motorista</Text>
            <Text style={styles.subTitleSol}>
              Entrando em contato com o motorista
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

          <TouchableOpacity
            onPress={() => navigation.navigate("SelectionScreen")}
            style={styles.buttonCancel}
          >
            <Text style={styles.textCancel}>Cancelar corrida</Text>
          </TouchableOpacity>

          <View style={styles.cardAdd}>
            <View style={styles.addInfo}>
              <Text style={styles.addText}>
                Carro Aí em qualquer lugar, a qualquer hora!
              </Text>
              <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addButtonText}>Saiba mais</Text>
              </TouchableOpacity>
            </View>
            <Image source={require("../../../assets/images/addImg.png")} />
          </View>
        </ScrollView>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  footer: {
    width: "100%",
    height: "15%",
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
    marginBottom: 20,
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
  buttonCancel: {
    alignItems: "center",
    marginBottom: 30,
  },
  textCancel: {
    fontSize: 20,
    fontWeight: "600",
    color: "#f81111",
  },
  cardAdd: {
    backgroundColor: "#f8bd00",
    width: "100%",
    borderRadius: 10,
    marginBottom: 40,
    flexDirection: "row",
    paddingVertical: 10,
    paddingHorizontal: 30,
    justifyContent: "space-around",
  },
  addInfo: {
    justifyContent: "space-between",
  },
  addText: {
    width: "80%",
    fontSize: 15,
    fontWeight: "600",
  },
  addButton: {
    paddingVertical: 5,
    borderRadius: 10,
    width: 99,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  addButtonText: {
    fontSize: 12,
    fontWeight: "500",
  },
});

export default RaceConfirmation;
