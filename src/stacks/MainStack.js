import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from "./../screens/splashscreen/splashscreen";
import WelcomeScreen from "./../screens/auth/welcome";
import LoginEmailScreen from "../screens/auth/loginEmail";
import LoginPhoneScreen from "./../screens/auth/loginPhone";
import LoginGoogleScreen from "./../screens/auth/loginGoogle";
import CadastroEmailScreen from "../screens/auth/cadastroEmail";
import RecuperacaoScreen from "../screens/auth/recuperacao";
import VerificacaoPhoneScreen from "../screens/auth/verificacaoPhone";
import Menu from "./menuStack";
import CadastroPhoneScreen from "../screens/auth/cadastroPhone";
import VerificacaoEmailScreen from "../screens/auth/verificacaoEmail";
import RecuperacaoPhoneScreen from "../screens/auth/recuperacaoPhone";
import RecuperacaoEmailScreen from "../screens/auth/recuperacaoEmail";
import RecuperacaoSenhaPhoneScreen from "../screens/auth/recuperacaoSenhaPhone";
import RecuperacaoSenhaEmailScreen from "../screens/auth/recuperacaoSenhaEmail";
import SenhaAlteardaScreen from "../screens/auth/senhaAlterada";
import VerificacaoConcluidaScreen from "../screens/auth/verificacaoConcluida";
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
      name="CadastroEmail"
      component={CadastroEmailScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="CadastroPhone"
      component={CadastroPhoneScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="Recuperacao"
      component={RecuperacaoScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="VerificacaoPhone"
      component={VerificacaoPhoneScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="VerificacaoEmail"
      component={VerificacaoEmailScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="VerificacaoConcluida"
      component={VerificacaoConcluidaScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RecuperacaoPhone"
      component={RecuperacaoPhoneScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RecuperacaoEmail"
      component={RecuperacaoEmailScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RecuperacaoSenhaPhone"
      component={RecuperacaoSenhaPhoneScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="RecuperacaoSenhaEmail"
      component={RecuperacaoSenhaEmailScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name="SenhaAlterada"
      component={SenhaAlteardaScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Menu" component={Menu} />
  </Stack.Navigator>
);
