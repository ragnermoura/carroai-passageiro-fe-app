import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LastRaces = ({ title, address, distance, border }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("SelectionScreen")}
      style={{ marginBottom: 18 }}
    >
      <View style={styles.card}>
        <MaterialCommunityIcons
          name="clock-time-four-outline"
          size={20}
          color="#979797"
          style={styles.icon}
        />
        <View style={styles.info}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.address}>{address}</Text>
        </View>
        <Text style={styles.distance}>{distance}</Text>
      </View>
      {border === true ? <View style={styles.border}></View> : <></>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    marginBottom: 5,
  },
  icon: {
    marginRight: 15,
  },
  info: {
    width: "80%",
  },
  title: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "400",
    color: "#2b2b2b",
  },
  address: {
    fontSize: 14,
    fontWeight: "300",
    color: "#979797",
  },
  distance: {
    fontSize: 10,
    fontWeight: "300",
    color: "#2b2b2b",
  },
  border: {
    width: "100%",
    borderBottomWidth: 1,
    borderColor: "rgba(151, 151, 151, 0.3)",
  },
});

export default LastRaces;
