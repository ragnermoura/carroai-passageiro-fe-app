import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HelpScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Ajuda Screen</Text>
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

export default HelpScreen;
