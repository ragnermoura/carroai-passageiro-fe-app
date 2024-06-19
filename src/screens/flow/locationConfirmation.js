import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  Platform,
  Text,
  TouchableOpacity,
} from "react-native";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import MainButton from "../../components/buttons/mainButton";

const LocationConfirmation = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

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

      <View style={styles.footer}>
        <Text style={styles.title}>Confirmar local de embarque</Text>
        <View style={styles.headerLocal}>
          <View style={[styles.circle, styles.circleDone]}></View>
          <Text style={styles.textHeader}>Avenida Marechal Rondon 2678</Text>
          <TouchableOpacity style={styles.buttonSwitch}>
            <Text style={styles.buttonSwitchText}>Alterar</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Solicitation")}
        >
          <Text style={styles.buttonText}>Solicitar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
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
  footer: {
    position: "absolute",
    zIndex: 100,
    bottom: 0,
    width: "100%",
    height: "30%",
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
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 15,
  },
  headerLocal: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
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
  textHeader: {
    fontSize: 16,
    fontWeight: "400",
    color: "#2b2b2b",
    marginRight: 15,
    width: "60%",
  },
  buttonSwitch: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 12,
  },
  buttonSwitchText: {},
  button: {
    alignSelf: "center",
    width: "80%",
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

export default LocationConfirmation;
