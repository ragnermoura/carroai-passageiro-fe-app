import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStack from "./src/stacks/MainStack";
import "./ignoreWarnings";
import { StatusBar } from "react-native";

export default () => {
  return (
    <NavigationContainer>
      <MainStack />
      <StatusBar
        barStyle={"dark-content"}
        translucent={true}
        backgroundColor={"transparent"}
      />
    </NavigationContainer>
  );
};
