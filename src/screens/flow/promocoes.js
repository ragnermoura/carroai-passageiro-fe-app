import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PromotionScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Promoções Screen</Text>
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

export default PromotionScreen;
