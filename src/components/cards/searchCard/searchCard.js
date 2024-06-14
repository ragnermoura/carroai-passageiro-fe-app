import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons"; // Você pode usar react-native-vector-icons se não estiver usando expo
import { useNavigation } from "@react-navigation/native";

const SearchCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={styles.inputContainer}>
        <TouchableOpacity
          style={styles.buttonInput}
          onPress={() => {
            navigation.navigate("SearchScreen");
          }}
        >
          {/* <TextInput placeholder="Para onde vamos?" style={styles.input} /> */}
          <Text style={styles.input}>Para onde vamos?</Text>
        </TouchableOpacity>
        <Ionicons name="search-outline" size={18} color="#2b2b2b" />
      </View>
      <TouchableOpacity style={styles.listItem}>
        <Ionicons name="time-outline" size={24} color="#979797" />
        <Text style={styles.listItemText}>Trabalho</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.listItem}>
        <Ionicons name="time-outline" size={24} color="#979797" />
        <Text style={styles.listItemText}>Rua Maracanãzinho, 300</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: "rgba(151, 151, 151, 0.1)",
    padding: 15,
  },
  buttonInput: {
    justifyContent: "space-between",
    width: "90%",
  },
  input: {
    marginLeft: 10,
    flex: 1,
    fontSize: 23,
    fontWeight: "600",
    color: "#2b2b2b",
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  listItemText: {
    marginLeft: 10,
    fontSize: 15,
    color: "#2b2b2b",
  },
});

export default SearchCard;
