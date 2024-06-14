import React from "react";
import { View, Text, StyleSheet } from "react-native";

const TravelHistoryScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Hisotrico de Viagens Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TravelHistoryScreen;
