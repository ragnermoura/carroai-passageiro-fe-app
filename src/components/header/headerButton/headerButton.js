import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialIcons";

export const HeaderButton = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        style={styles.menuButton}
      >
        <Icon name="menu" size={30} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: 43,
    marginTop: 50,
    marginHorizontal: 20,
    backgroundColor: "#f7f7f7",
    // paddingHorizontal: 20,
    // paddingVertical: 20,
    borderRadius: 15,
    elevation: 20,
  },
  menuButton: {
    padding: 6,
  },
});
