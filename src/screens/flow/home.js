import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

class HomeScreen extends Component {
  state = {
    location: null,
    errorMsg: null,
    search: "",
  };

  async componentDidMount() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      this.setState({ errorMsg: "Permission to access location was denied" });
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  }


  render() {
    const { location, search } = this.state;

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

        <View style={styles.footer}>
          <TextInput
            style={styles.input}
            placeholder="Para onde vamos"
            value={search}
            onChangeText={(text) => this.setState({ search: text })}
          />
        </View>


        </View>
        
    );
  }
}

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

  menu: {
    alignSelf: "flex-start",
    position: "absolute",
    top: Platform.OS === "ios" ? 40 : 20, // Ajuste para iOS e Android
    left: 10,
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

// Seus estilos permanecem os mesmos

export default HomeScreen;
