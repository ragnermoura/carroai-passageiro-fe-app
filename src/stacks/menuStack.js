import "react-native-gesture-handler";
import {
  Feather,
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  Entypo,
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { createDrawerNavigator } from "@react-navigation/drawer";
import User from "../../assets/images/user.png";

import Home from "../screens/flow/home";
import { View, StyleSheet } from "react-native";
import { HeaderButton } from "../components/header/headerButton/headerButton";
import CustomDrawerContent from "../components/customDrawerContent/customDrawerContent";
import PortfolioScreen from "../screens/flow/carteira";
import PromotionScreen from "../screens/flow/promocoes";
import TravelHistoryScreen from "../screens/flow/historicoDeViagens";
import HelpScreen from "../screens/flow/ajuda";
import AboutUsScreen from "../screens/flow/sobreNos";

const Drawer = createDrawerNavigator();

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      // screenOptions={{
      //   drawerStyle: {
      //     backgroundColor: "#fff",
      //     width: 250,
      //   },
      //   headerStyle: {
      //     backgroundColor: "transparent",
      //   },
      //   headerTintColor: "#000",
      //   headerTitleStyle: {
      //     fontWeight: "bold",
      //   },
      //   drawerActiveTintColor: "blue",
      //   drawerLabelStyle: {
      //     color: "#111",
      //   },
      // }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          // headerTransparent: true,
          header: () => <HeaderButton />,
          // drawerLabel: "Menu",
          // title: "",
          // drawerIcon: () => (
          //   <SimpleLineIcons name="home" size={20} color="#808080" />
          // ),
        }}
        component={Home}
      />
      <Drawer.Screen name="Carteira" component={PortfolioScreen} />
      <Drawer.Screen name="Promoções" component={PromotionScreen} />
      <Drawer.Screen
        name="Histórico de viagens"
        component={TravelHistoryScreen}
      />
      <Drawer.Screen name="Ajuda" component={HelpScreen} />
      <Drawer.Screen name="Sobre nós" component={AboutUsScreen} />
    </Drawer.Navigator>
  );
};
