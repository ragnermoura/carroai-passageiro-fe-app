import React from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MainALert = ({ title, text, buttonText, onPress }) => {
  const navigation = useNavigation();

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

      <View style={styles.card}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.textCard}>{text}</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.textButton}>{buttonText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(43, 43, 43, .5)",
    alignItems: "center",
    justifyContent: "center",
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
  card: {
    backgroundColor: "#fff",
    width: "90%",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 12,
    paddingHorizontal: 30,
    paddingVertical: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2b2b2b",
    marginBottom: 10,
  },
  textCard: {
    fontSize: 16,
    fontWeight: "400",
    color: "#2b2b2b",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    width: "100%",
    backgroundColor: "#0068c1",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 12,
  },
  textButton: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default MainALert;
