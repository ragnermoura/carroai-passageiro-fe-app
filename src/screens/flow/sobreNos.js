import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Sobre Nós Screen</Text>
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

export default AboutUsScreen;
