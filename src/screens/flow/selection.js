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
import { Ionicons } from "@expo/vector-icons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";

const SelectionScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [search, setSearch] = useState("");

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
            <Text style={styles.textHeader}>Avenida Marechal Rondon, 2...</Text>
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

      <View style={styles.footer}>
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
        {/* terminar essa tela */}
        <View></View>
      </View>
    </View>
  );
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
    height: "45%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
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
});

export default SelectionScreen;
