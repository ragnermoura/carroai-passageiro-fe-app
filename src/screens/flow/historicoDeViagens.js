import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons, MaterialIcons, Entypo } from "@expo/vector-icons";
import Pin from "../../../assets/icons/pin.svg";

const TravelHistoryScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.iconBack}>
          <Ionicons
            name="arrow-back-sharp"
            size={24}
            color="#2B2B2B"
            onPress={() => navigation.goBack()}
          />
        </View>

        <Text style={styles.title}>Minhas últimas corridas</Text>
        <Text style={styles.subTitle}>Fevereiro 2024</Text>
        <TouchableOpacity style={styles.card}>
          <View style={styles.boxInfo}>
            <Pin style={styles.icon} />
            <View style={styles.cardText}>
              <Text style={styles.text}>Av. Lorem Ipsum 56</Text>
              <Text style={styles.subText}>Av. Lorem Ipsum 56</Text>
            </View>
            <Text style={styles.date}>7 dez, 17:43</Text>
          </View>
          <Entypo name="chevron-right" size={24} />
        </TouchableOpacity>

        <View style={styles.div}></View>

        <TouchableOpacity style={styles.card}>
          <View style={styles.boxInfo}>
            <Pin style={styles.icon} />
            <View style={styles.cardText}>
              <Text style={styles.text}>Av. Lorem Ipsum 56</Text>
              <Text style={styles.subText}>Av. Lorem Ipsum 56</Text>
            </View>
            <Text style={styles.date}>7 dez, 17:43</Text>
          </View>
          <Entypo name="chevron-right" size={24} />
        </TouchableOpacity>

        <View style={styles.div}></View>

        <TouchableOpacity style={styles.card}>
          <View style={styles.boxInfo}>
            <Pin style={styles.icon} />
            <View style={styles.cardText}>
              <Text style={styles.text}>Av. Lorem Ipsum 56</Text>
              <Text style={styles.subText}>Av. Lorem Ipsum 56</Text>
            </View>
            <Text style={styles.date}>7 dez, 17:43</Text>
          </View>
          <Entypo name="chevron-right" size={24} />
        </TouchableOpacity>

        <View style={styles.div}></View>

        <TouchableOpacity style={styles.card}>
          <View style={styles.boxInfo}>
            <Pin style={styles.icon} />
            <View style={styles.cardText}>
              <Text style={styles.text}>Av. Lorem Ipsum 56</Text>
              <Text style={styles.subText}>Av. Lorem Ipsum 56</Text>
            </View>
            <Text style={styles.date}>7 dez, 17:43</Text>
          </View>
          <Entypo name="chevron-right" size={24} />
        </TouchableOpacity>

        <View style={styles.div}></View>

        <TouchableOpacity style={styles.card}>
          <View style={styles.boxInfo}>
            <Pin style={styles.icon} />
            <View style={styles.cardText}>
              <Text style={styles.text}>Av. Lorem Ipsum 56</Text>
              <Text style={styles.date}>7 fev, 17:43</Text>
            </View>
          </View>
          <Entypo name="chevron-right" size={24} />
        </TouchableOpacity>

        <View style={styles.div}></View>

        <TouchableOpacity style={styles.card}>
          <View style={styles.boxInfo}>
            <Pin style={styles.icon} />
            <View style={styles.cardText}>
              <Text style={styles.text}>Av. Lorem Ipsum 56</Text>
              <Text style={styles.date}>7 fev, 17:43</Text>
            </View>
          </View>
          <Entypo name="chevron-right" size={24} />
        </TouchableOpacity>

        <View style={styles.div}></View>

        <TouchableOpacity style={styles.card}>
          <View style={styles.boxInfo}>
            <Pin style={styles.icon} />
            <View style={styles.cardText}>
              <Text style={styles.text}>Av. Lorem Ipsum 56</Text>
              <Text style={styles.date}>7 fev, 17:43</Text>
            </View>
          </View>
          <Entypo name="chevron-right" size={24} />
        </TouchableOpacity>

        <View style={styles.div}></View>

        <TouchableOpacity style={styles.card}>
          <View style={styles.boxInfo}>
            <Pin style={styles.icon} />
            <View style={styles.cardText}>
              <Text style={styles.text}>Av. Lorem Ipsum 56</Text>
              <Text style={styles.date}>7 fev, 17:43</Text>
            </View>
          </View>
          <Entypo name="chevron-right" size={24} />
        </TouchableOpacity>

        <View style={styles.div}></View>

        <TouchableOpacity style={styles.card}>
          <View style={styles.boxInfo}>
            <Pin style={styles.icon} />
            <View style={styles.cardText}>
              <Text style={styles.text}>Av. Lorem Ipsum 56</Text>
              <Text style={styles.date}>7 fev, 17:43</Text>
            </View>
          </View>
          <Entypo name="chevron-right" size={24} />
        </TouchableOpacity>

        <View style={styles.div}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 90 : 95,
    paddingHorizontal: 25,
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
    left: 15,
    zIndex: 100,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 20,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: "500",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  boxInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 15,
  },
  text: {
    fontSize: 14,
    fontWeight: "300",
    marginBottom: 2,
    marginRight: 30,
  },
  subText: {
    fontSize: 12,
    fontWeight: "300",
  },
  div: {
    alignSelf: "center",
    width: "95%",
    height: 1,
    marginLeft: 10,
    backgroundColor: "#d9d9d9",
  },
  date: {
    fontSize: 12,
    fontWeight: "300",
  },
});

export default TravelHistoryScreen;
