import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./../screens/splashscreen/splashscreen";
import WelcomeScreen from "./../screens/auth/welcome";
import LoginEmailScreen from "../screens/auth/loginEmail";
import LoginPhoneScreen from "./../screens/auth/loginPhone";
import LoginGoogleScreen from "./../screens/auth/loginGoogle";
import RecuperacaoScreen from "../screens/auth/recuperacao";
import VerificacaoScreen from "../screens/auth/verificacao";
import Menu from "./menuStack";
import CadastroScreen from "../screens/auth/cadastro";
import RecuperacaoCodeScreen from "../screens/auth/recuperacaoCode";
import AlterarSenhaScreen from "../screens/auth/alterarSenha";
import LoginSenhaGoogleScreen from "../screens/auth/loginSenhaGoogle";
import LoginOutraContaGoogleScreen from "../screens/auth/loginOutraContaGoogle";
const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen
      name="Splash"
      component={SplashScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Email"
      component={LoginEmailScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Phone"
      component={LoginPhoneScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Google"
      component={LoginGoogleScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SenhaGoogle"
      component={LoginSenhaGoogleScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="OutraContaGoogle"
      component={LoginOutraContaGoogleScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Cadastro"
      component={CadastroScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Recuperacao"
      component={RecuperacaoScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Verificacao"
      component={VerificacaoScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RecuperacaoCode"
      component={RecuperacaoCodeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="AlterarSenha"
      component={AlterarSenhaScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Menu"
      component={Menu}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);
