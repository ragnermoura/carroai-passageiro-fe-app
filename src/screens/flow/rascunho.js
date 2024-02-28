import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [search, setSearch] = useState("");

  const handleHome = () => {
    // Aqui vai a lógica para lidar com o login
    console.log('Login com', nome, telefone, senha);
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

  return (
    <View style={styles.container}>
      {location && (
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
      )}

      <TouchableOpacity style={styles.button}>
        <Text>Menu Principal</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquise aqui..."
          value={search}
          onChangeText={setSearch}
        />
      </View>
    </View>
  )

};

  
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  button: {
    position: "absolute",
    top: 40,
    left: 10,
    backgroundColor: "#FFF",
    padding: 10,
    borderRadius: 20,
    zIndex: 5,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 10,
    elevation: 3,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },
});

export default HomeScreen
