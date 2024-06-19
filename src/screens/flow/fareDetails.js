import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Platform,
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";

const FareDetails = () => {
  const [businessDay, setBusinessDay] = useState(true);

  const handleDay = () => {
    setBusinessDay(true);
  };

  const handleWeekend = () => {
    setBusinessDay(false);
  };

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
      <Text style={styles.title}>Detalhes da tarifa</Text>

      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.tab} onPress={() => handleDay()}>
          <Text
            style={
              businessDay == true
                ? styles.tabTextActive
                : styles.tabTextInactive
            }
          >
            Dia útil
          </Text>
        </TouchableOpacity>
        <View style={styles.div}></View>
        <TouchableOpacity style={styles.tab} onPress={() => handleWeekend()}>
          <Text
            style={
              businessDay == false
                ? styles.tabTextActive
                : styles.tabTextInactive
            }
          >
            Fim de semana
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Resumo do serviço</Text>
        <View style={styles.row}>
          <Text style={styles.label}>Tarifa mínima</Text>
          <Text style={styles.value}>
            R$ {businessDay == true ? "7,96" : "9,96"}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Preço de início</Text>
          <Text style={styles.value}>
            R$ {businessDay == true ? "2,42" : "4,42"}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Taxa de quilometragem</Text>
          <Text style={styles.value}>
            R$ {businessDay == true ? "4,10/km" : "6,10/km"}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Taxa de tempo em corrida</Text>
          <Text style={styles.value}>
            R$ {businessDay == true ? "0,24/minuto" : "2,24/minuto"}
          </Text>
        </View>

        <Text style={styles.sectionSubTitle}>Preço dinâmico</Text>
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 90,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
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
    left: 20,
    zIndex: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 4,
    marginBottom: 30,
  },
  tabContainer: {
    flexDirection: "row",
    marginBottom: 60,
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    height: 60,
    alignItems: "center",
  },
  div: {
    alignSelf: "center",
    height: "50%",
    width: 1,
    backgroundColor: "#979797",
  },
  tab: {
    flex: 1,
    alignItems: "center",
  },
  tabTextActive: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2b2b2b",
  },
  tabTextInactive: {
    fontSize: 18,
    fontWeight: "400",
    color: "#979797",
  },
  content: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 },
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "400",
    marginBottom: 30,
    alignSelf: "center",
  },
  sectionSubTitle: {
    fontSize: 18,
    fontWeight: "500",
    marginTop: 30,
  },
  row: {
    alignSelf: "center",
    width: "120%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
    marginLeft: "15%",
  },
  label: {
    fontSize: 16,
    fontWeight: "400",
  },
  value: {
    width: "40%",
    fontSize: 16,
    fontWeight: "500",
  },
  description: {
    alignSelf: "center",
    width: "100%",
    fontSize: 16,
    fontWeight: "400",
    marginTop: 10,
  },
});

export default FareDetails;
