import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";

import { useState, useEffect } from "react";
import MapView, { Marker } from "react-native-maps";

const HomeScreen = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [search, setSearch] = useState("");

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
        <TextInput
          style={styles.input}
          placeholder="Para onde vamos"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  map: {
    flex: 1,
  },
  footer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
});

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
//   button: {
//     position: "absolute",
//     top: 40,
//     left: 10,
//     backgroundColor: "#FFF",
//     padding: 10,
//     borderRadius: 20,
//     zIndex: 5,
//   },

//   menu: {
//     alignSelf: "flex-start",
//     position: "absolute",
//     top: Platform.OS === "ios" ? 40 : 20, // Ajuste para iOS e Android
//     left: 10,
//   },

//   footer: {
//     position: "absolute",
//     bottom: 20,
//     left: 20,
//     right: 20,
//     backgroundColor: "#FFF",
//     padding: 20,
//     borderRadius: 10,
//     elevation: 3,
//   },
//   input: {
//     height: 40,
//     borderWidth: 1,
//     padding: 10,
//   },
// });

export default HomeScreen;
