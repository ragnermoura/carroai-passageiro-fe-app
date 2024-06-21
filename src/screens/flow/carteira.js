import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { Ionicons, Entypo } from "@expo/vector-icons";
import Visa from "../../../assets/icons/iconVisa.svg";
import Pix from "../../../assets/icons/iconPix.svg";
import Cach from "../../../assets/icons/iconCach.svg";
import MasterCard from "../../../assets/icons/IconMastercard.svg";
import { useNavigation } from "@react-navigation/native";

const PortfolioScreen = () => {
  const [saque, setSaque] = useState(true);
  const [checkedSaque, setCheckedSaque] = useState("visa");
  const [checkedDeposito, setCheckedDeposito] = useState("pix");

  const handleMethod = (e) => {
    setSaque(e);
  };
  const handleChecked = (name) => {
    if (saque == true) {
      setCheckedSaque(name);
    } else {
      setCheckedDeposito(name);
    }
  };

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

      <ImageBackground
        style={styles.header}
        imageStyle={styles.imgBackGround}
        source={require("../../../assets/images/fundoCarteira.png")}
      >
        <Text style={styles.title}>Carteira</Text>
        <Text style={styles.value}>R$ 12,37</Text>
        <TouchableOpacity style={styles.buttonDetails}>
          <Text style={styles.textDetails}>Ver detalhes</Text>
        </TouchableOpacity>
      </ImageBackground>

      <View style={styles.cardBack}>
        <View style={styles.card}>
          <View style={styles.boxButton}>
            <TouchableOpacity
              style={[
                styles.buttonMethod,
                saque == true ? styles.methodOn : styles.methodOff,
              ]}
              onPress={saque == false ? () => handleMethod(true) : null}
            >
              <Text
                style={[
                  styles.textMethod,
                  saque == true ? styles.textOn : styles.textOff,
                ]}
              >
                Métodos de saque
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.buttonMethod,
                saque == false ? styles.methodOn : styles.methodOff,
              ]}
              onPress={saque == true ? () => handleMethod(false) : null}
            >
              <Text
                style={[
                  styles.textMethod,
                  saque == false ? styles.textOn : styles.textOff,
                ]}
              >
                Métodos de depósito
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.boxMethod}>
            <View style={styles.boxCheck}>
              <TouchableOpacity
                style={[
                  styles.check,
                  saque == true
                    ? checkedSaque == "pix"
                      ? styles.checked
                      : null
                    : checkedDeposito == "pix"
                    ? styles.checked
                    : null,
                ]}
                onPress={() => {
                  saque == true
                    ? checkedSaque != "pix"
                      ? handleChecked("pix")
                      : null
                    : checkedDeposito != "pix"
                    ? handleChecked("pix")
                    : null;
                }}
              >
                {saque == true ? (
                  checkedSaque == "pix" ? (
                    <View style={styles.checkedSelect}></View>
                  ) : (
                    <></>
                  )
                ) : checkedDeposito == "pix" ? (
                  <View style={styles.checkedSelect}></View>
                ) : (
                  <></>
                )}
              </TouchableOpacity>
              <Text style={styles.textCheck}>Chave Pix ***********com</Text>
            </View>
            <View style={styles.boxLogo}>
              <Pix />
              <Entypo name="chevron-right" size={24} style={styles.arrow} />
            </View>
          </View>

          <View style={styles.boxMethod}>
            <View style={styles.boxCheck}>
              <TouchableOpacity
                style={[
                  styles.check,
                  saque == true
                    ? checkedSaque == "visa"
                      ? styles.checked
                      : null
                    : checkedDeposito == "visa"
                    ? styles.checked
                    : null,
                ]}
                onPress={() => {
                  saque == true
                    ? checkedSaque != "visa"
                      ? handleChecked("visa")
                      : null
                    : checkedDeposito != "visa"
                    ? handleChecked("visa")
                    : null;
                }}
              >
                {saque == true ? (
                  checkedSaque == "visa" ? (
                    <View style={styles.checkedSelect}></View>
                  ) : (
                    <></>
                  )
                ) : checkedDeposito == "visa" ? (
                  <View style={styles.checkedSelect}></View>
                ) : (
                  <></>
                )}
              </TouchableOpacity>
              <Text style={styles.textCheck}>Cartão de crédito 9655</Text>
            </View>
            <View style={styles.boxLogo}>
              <Visa />
              <Entypo name="chevron-right" size={24} style={styles.arrow} />
            </View>
          </View>

          <View style={styles.boxMethod}>
            <View style={styles.boxCheck}>
              <TouchableOpacity
                style={[
                  styles.check,
                  saque == true
                    ? checkedSaque == "mastercard"
                      ? styles.checked
                      : null
                    : checkedDeposito == "mastercard"
                    ? styles.checked
                    : null,
                ]}
                onPress={() => {
                  saque == true
                    ? checkedSaque != "mastercard"
                      ? handleChecked("mastercard")
                      : null
                    : checkedDeposito != "mastercard"
                    ? handleChecked("mastercard")
                    : null;
                }}
              >
                {saque == true ? (
                  checkedSaque == "mastercard" ? (
                    <View style={styles.checkedSelect}></View>
                  ) : (
                    <></>
                  )
                ) : checkedDeposito == "mastercard" ? (
                  <View style={styles.checkedSelect}></View>
                ) : (
                  <></>
                )}
              </TouchableOpacity>
              <Text style={styles.textCheck}>Cartão de crédito 4597</Text>
            </View>
            <View style={styles.boxLogo}>
              <MasterCard />
              <Entypo name="chevron-right" size={24} style={styles.arrow} />
            </View>
          </View>

          <View style={styles.boxMethod}>
            <View style={styles.boxCheck}>
              <TouchableOpacity
                style={[
                  styles.check,
                  saque == true
                    ? checkedSaque == "cach"
                      ? styles.checked
                      : null
                    : checkedDeposito == "cach"
                    ? styles.checked
                    : null,
                ]}
                onPress={() => {
                  saque == true
                    ? checkedSaque != "cach"
                      ? handleChecked("cach")
                      : null
                    : checkedDeposito != "cach"
                    ? handleChecked("cach")
                    : null;
                }}
              >
                {saque == true ? (
                  checkedSaque == "cach" ? (
                    <View style={styles.checkedSelect}></View>
                  ) : (
                    <></>
                  )
                ) : checkedDeposito == "cach" ? (
                  <View style={styles.checkedSelect}></View>
                ) : (
                  <></>
                )}
              </TouchableOpacity>
              <Text style={styles.textCheck}>Dinheiro</Text>
            </View>
            <View style={styles.boxLogo}>
              <Cach />
              <Entypo name="chevron-right" size={24} style={styles.arrow} />
            </View>
          </View>

          <View style={styles.div}></View>

          <TouchableOpacity style={styles.addMethod}>
            <Entypo name="plus" size={24} style={styles.addPlus} />
            <Text style={styles.textAdd}>
              Adicionar método de {saque == true ? "saque" : "depósito"}
            </Text>
            <Entypo
              name="chevron-right"
              size={24}
              style={[styles.arrow, styles.arrowAdd]}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  header: {
    alignItems: "center",
    position: "relative",
    backgroundColor: "#e5ae01",
    height: 230,
    borderBottomEndRadius: 60,
  },
  imgBackGround: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderBottomRightRadius: 60,
  },
  title: {
    fontSize: 15,
    fontWeight: "400",
    marginBottom: 15,
    paddingTop: Platform.OS === "ios" ? 80 : 85,
  },
  value: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonDetails: {
    borderWidth: 1,
    borderColor: "#2b2b2b",
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  textDetails: {
    fontSize: 15,
    fontWeight: "400",
  },
  cardBack: {
    backgroundColor: "#e5ae01",
  },
  card: {
    borderTopLeftRadius: 60,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 60,
    height: "100%",
  },
  boxButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 40,
  },
  buttonMethod: {
    borderWidth: 1,
    borderColor: "#e5ae01",
    borderRadius: 10,
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  methodOn: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 12,
    backgroundColor: "#e5ae01",
  },
  methodOff: {},
  textOn: {
    color: "#fff",
  },
  textOff: {
    color: "#e5ae01",
  },
  boxMethod: {
    width: "86%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  boxCheck: {
    flexDirection: "row",
  },
  check: {
    width: 20,
    height: 20,
    borderColor: "rgba(43, 43, 43, .5)",
    borderWidth: 2,
    borderRadius: 20,
    marginRight: 14,
    alignItems: "center",
    justifyContent: "center",
  },
  textCheck: {
    fontSize: 14,
    fontWeight: "400",
  },
  boxLogo: {
    flexDirection: "row",
  },
  arrow: {
    marginTop: -1,
    marginLeft: 20,
  },
  checked: {
    borderColor: "#2b2b2b",
  },
  checkedSelect: {
    backgroundColor: "#2b2b2b",
    width: 12,
    height: 12,
    borderRadius: 12,
  },
  div: {
    width: "70%",
    height: 2,
    backgroundColor: "rgba(131, 131, 131, .1)",
    marginBottom: 15,
  },
  addMethod: {
    width: "86%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addPlus: {
    marginRight: -30,
  },
  textAdd: {
    fontSize: 16,
    fontWeight: "400",
  },
  arrowAdd: {
    marginBottom: -3,
  },
});

export default PortfolioScreen;
