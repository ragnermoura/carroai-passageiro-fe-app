import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import MainStack from "./src/stacks/MainStack"
import "./ignoreWarnings";


export default () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  )
}