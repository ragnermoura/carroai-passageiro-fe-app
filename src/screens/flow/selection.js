import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
  ActivityIndicator,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import { Ionicons, Entypo } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import User from "../../../assets/icons/userProfile.svg";
import UserMax from "../../../assets/icons/userProfileMax.svg";
import Cadeirante from "../../../assets/icons/cadeirante.svg";
import { ScrollView } from "react-native-gesture-handler";

const SelectionScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  // const [search, setSearch] = useState("");
  const [car, setCar] = useState("");
  const [nameCar, setNameCar] = useState("");
  const [selected, setSelected] = useState(false);
  const [type, setType] = useState("");
  const [value, setValue] = useState(null);

  const navigation = useNavigation();

  const handleCar = (name, typeCar, valueCar) => {
    setNameCar(name);
    setType(typeCar);
    setValue(valueCar);
    setSelected(true);
  };

  const handleSelect = () => {
    setCar(nameCar);
    setSelected(false);
  };

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

  if (selected == true) {
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

        <View style={styles.backGround}></View>

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

        <ScrollView style={styles.footerSelected}>
          <View style={styles.infoContainer}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <View style={styles.boxInfo}>
                {nameCar == "basic" ? (
                  <View style={styles.recommended}>
                    <Text style={styles.textRecommended}>Recomendado</Text>
                  </View>
                ) : (
                  <></>
                )}
                <View>
                  <View style={styles.row}>
                    <Text style={styles.basic}>{type}</Text>
                    <View style={styles.boxRow}>
                      <User style={styles.iconCapacity} />
                      <Text style={styles.textRow}>4</Text>
                    </View>
                  </View>
                  <TouchableOpacity style={styles.boxOptions}>
                    <Cadeirante style={styles.cadeirante} />
                    <Text style={styles.textOption}>Opções de corrida</Text>
                    <Entypo
                      name="chevron-small-right"
                      size={20}
                      style={{ marginBottom: -2 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View style={styles.boxHigh}>
                <Text style={styles.carRare}>carro comum</Text>
                <Image
                  source={require("../../../assets/images/maxCarImg.png")}
                />
              </View>
            </View>

            <View style={styles.boxInfoRace}>
              <View style={styles.total}>
                <Text style={styles.textTotal}>Total</Text>
                <Text style={styles.textPrice}>R$ {value}</Text>
              </View>
              <Text style={styles.lorem}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </Text>
              <TouchableOpacity
                style={styles.buttonDetails}
                onPress={() => navigation.navigate("FareDetails")}
              >
                <Text style={styles.textDetails}>Detalhes da Tarifa</Text>
                <Entypo
                  name="chevron-small-right"
                  size={20}
                  style={{ marginBottom: -2 }}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleSelect()}
            >
              <Text style={styles.buttonText}>Selecionar</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  } else {
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
        <View style={styles.header}>
          <View style={styles.headerBox}>
            <View style={styles.headerLocal}>
              <View style={[styles.circle, styles.circleDone]}></View>
              <Text style={styles.textHeader}>
                Avenida Marechal Rondon, 2...
              </Text>
            </View>
            <View style={styles.headerLocal}>
              <View style={[styles.circle, styles.circleClose]}></View>
              <Text style={styles.textHeader}>Rua Maracanãzinho, 300</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.buttonAlterar}>
            <Text style={styles.textButton}>Alterar</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={styles.footer}>
          <View style={styles.boxOptionsFooter}>
            <View style={styles.cardOption}>
              <Image source={require("../../../assets/images/carroImg.png")} />
            </View>
            <View style={styles.cardOption}>
              <Image source={require("../../../assets/images/motoImg.png")} />
            </View>
            <View style={styles.cardOption}>
              <Image source={require("../../../assets/images/boxImg.png")} />
            </View>
          </View>

          <TouchableOpacity
            style={
              car == "" || car == "basic"
                ? styles.travelCardOn
                : styles.travelCardOff
            }
            onPress={() => handleCar("basic", "Basic", "15,50")}
          >
            <View style={styles.boxRecomended}>
              <Text style={styles.textRecomended}>Recomendado</Text>
            </View>
            <Image
              source={require("../../../assets/images/carOption.png")}
              style={styles.carImg}
            />

            <View style={styles.cardType}>
              <Text style={styles.typeTitle}>Basic</Text>
              <Text style={styles.typeSubTitle}>Mais barato</Text>
            </View>

            <View style={styles.cardInfo}>
              <Text style={styles.waitingTime}>2 Min</Text>
              <View style={styles.capacity}>
                <User style={styles.iconCapacity} />
                <Text style={styles.textCapacity}>4</Text>
              </View>
            </View>

            <View style={styles.boxValue}>
              <Text style={styles.value}>R$ 15,50</Text>
              <Entypo
                name="chevron-small-right"
                size={30}
                style={{ marginBottom: -2 }}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={car == "plus" ? styles.travelCardOn : styles.travelCardOff}
            onPress={() => handleCar("plus", "Plus", "24,75")}
          >
            <Image
              source={require("../../../assets/images/carOption.png")}
              style={styles.carImg}
            />

            <View style={styles.cardType}>
              <Text style={styles.typeTitle}>Plus</Text>
              <Text style={styles.typeSubTitle}>Mais conforto</Text>
            </View>

            <View style={styles.cardInfo}>
              <Text style={styles.waitingTime}>4 Min</Text>
              <View style={styles.capacity}>
                <User style={styles.iconCapacity} />
                <Text style={styles.textCapacity}>4</Text>
              </View>
            </View>

            <View style={styles.boxValue}>
              <Text style={styles.value}>R$ 24,75</Text>
              {/* <Entypo
                    name="chevron-small-right"
                    size={30}
                    style={{ marginBottom: -2 }}
                  /> */}
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={
              car == "plusplus" ? styles.travelCardOn : styles.travelCardOff
            }
            onPress={() => handleCar("plusplus", "Plus", "24,75")}
          >
            <Image
              source={require("../../../assets/images/carOption.png")}
              style={styles.carImg}
            />

            <View style={styles.cardType}>
              <Text style={styles.typeTitle}>Plus</Text>
              <Text style={styles.typeSubTitle}>Mais conforto</Text>
            </View>

            <View style={styles.cardInfo}>
              <Text style={styles.waitingTime}>4 Min</Text>
              <View style={styles.capacity}>
                <User style={styles.iconCapacity} />
                <Text style={styles.textCapacity}>4</Text>
              </View>
            </View>

            <View style={styles.boxValue}>
              <Text style={styles.value}>R$ 24,75</Text>
              {/* <Entypo
                    name="chevron-small-right"
                    size={30}
                    style={{ marginBottom: -2 }}
                  /> */}
            </View>
          </TouchableOpacity>

          <View style={styles.div}></View>

          <TouchableOpacity style={styles.boxPayment}>
            <View style={styles.boxCard}>
              <Image source={require("../../../assets/images/flagCard.png")} />
              <Text style={styles.cardNumber}>8989</Text>
            </View>
            <Text style={styles.cardSwitch}>Toque para alterar</Text>
          </TouchableOpacity>

          <View style={styles.cardButton}>
            <TouchableOpacity style={styles.buttonAnother}>
              <UserMax style={styles.iconUser} />
              <Text style={styles.textAnother}>Outra pessoa</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonRequest}
              onPress={() => navigation.navigate("LocationConfirmation")}
            >
              <Text style={styles.textRequest}>Solicitar</Text>
            </TouchableOpacity>
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
  },
  header: {
    position: "absolute",
    zIndex: 100,
    top: Platform.OS === "ios" ? 90 : 95,
    alignSelf: "center",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 8,
    width: "90%",
    height: 75,
    alignItems: "center",
    justifyContent: "space-around",
  },
  headerBox: {
    height: "100%",
    justifyContent: "space-evenly",
  },
  headerLocal: {
    flexDirection: "row",
    alignItems: "center",
  },
  circle: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 10,
  },
  circleDone: {
    backgroundColor: "rgba(11, 164, 8, .5)",
  },
  circleClose: {
    backgroundColor: "rgba(248, 17, 17, .5)",
  },
  textHeader: {
    fontSize: 16,
    fontWeight: "400",
    color: "#2b2b2b",
  },
  buttonAlterar: {
    marginLeft: -15,
  },
  textButton: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2b2b2b",
  },
  footer: {
    position: "absolute",
    zIndex: 100,
    bottom: 0,
    width: "100%",
    height: "50%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 12,
  },
  boxOptionsFooter: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 15,
  },
  cardOption: {
    width: 95,
    height: 45,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
  },
  travelCardOn: {
    width: "99%",
    alignSelf: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    position: "relative",
  },
  travelCardOff: {
    width: "99%",
    alignSelf: "center",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 15,
    alignItems: "center",
    marginBottom: 10,
  },
  carImg: {
    marginRight: 10,
  },
  cardType: {
    marginRight: 15,
  },
  typeTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  typeSubTitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "#000",
  },
  cardInfo: {
    marginRight: 22,
  },
  waitingTime: {
    fontSize: 14,
    fontWeight: "400",
    color: "#2b2b2b",
    marginBottom: 8,
  },
  capacity: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconCapacity: {
    marginRight: 8,
  },
  textCapacity: {
    fontSize: 12,
    fontWeight: "400",
    color: "#2b2b2b",
  },
  boxValue: {
    flexDirection: "row",
    alignItems: "center",
  },
  value: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  div: {
    width: "100%",
    backgroundColor: "rgba(151, 151, 151, .3)",
    height: 1,
    marginBottom: 16,
  },
  boxPayment: {
    alignSelf: "center",
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 21,
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
    fontSize: 14,
    fontWeight: "300",
    color: "#2b2b2b",
  },
  cardButton: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 20,
  },
  buttonAnother: {
    flexDirection: "row",
    width: 95,
    height: 60,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 22,
  },
  iconUser: {
    marginRight: 6,
  },
  textAnother: {
    fontSize: 16,
    fontWeight: "600",
    color: "#2b2b2b",
    width: "60%",
  },
  buttonRequest: {
    width: 213,
    height: 60,
    backgroundColor: "#0068c1",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 10,
  },
  textRequest: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
  },
  boxRecomended: {
    position: "absolute",
    right: 15,
    top: -5,
    backgroundColor: "#f8bd00",
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  textRecomended: {
    fontSize: 12,
    fontWeight: "600",
  },
  footerSelected: {
    position: "absolute",
    alignSelf: "center",
    zIndex: 100,
    bottom: 20,
    width: "93%",
    height: "50%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 12,
    borderRadius: 10,
  },
  infoContainer: {
    padding: 20,
    backgroundColor: "white",
  },
  backGround: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    zIndex: 20,
    backgroundColor: "rgba(0, 0, 0, .5)",
  },
  boxHigh: {
    alignItems: "center",
    marginBottom: 15,
  },
  recommended: {
    backgroundColor: "#f8bd00",
    borderRadius: 15,
    paddingHorizontal: 15,
    paddingVertical: 2,
    marginBottom: 10,
    marginLeft: -10,
  },
  textRecommended: {
    fontSize: 14,
    fontWeight: "600",
  },
  carRare: {
    fontSize: 14,
    fontWeight: "300",
  },
  boxInfo: {
    alignItems: "flex-start",
  },
  boxRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 6,
  },
  basic: {
    fontSize: 20,
    fontWeight: "500",
    marginRight: 20,
  },
  textRow: {
    fontSize: 12,
    fontWeight: "300",
  },
  boxOptions: {
    flexDirection: "row",
    marginBottom: -20,
    marginTop: 10,
    alignItems: "center",
  },
  cadeirante: {
    marginRight: 5,
  },
  textOption: {
    fontSize: 12,
    fontWeight: "500",
  },
  boxInfoRace: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  total: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  textTotal: {
    fontSize: 16,
    fontWeight: "500",
  },
  textPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lorem: {
    width: "70%",
    fontSize: 12,
    fontWeight: "400",
    marginBottom: 11,
  },
  buttonDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  textDetails: {
    fontSize: 12,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#0068c1",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#f0f0f0",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default SelectionScreen;
