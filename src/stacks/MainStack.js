import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from './../screens/splashscreen/splashscreen';
import WelcomeScreen from './../screens/auth/welcome';
import LoginEmailScreen from '../screens/auth/loginEmail';
import LoginPhoneScreen from './../screens/auth/loginPhone';
import CadastroScreen from '../screens/auth/cadastro';
import RecuperacaoScreen from '../screens/auth/recuperacao';
import VerificacaoScreen from '../screens/auth/verificacao';
import HomeScreen from '../screens/flow/home';
const Stack = createStackNavigator();

export default () => (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Email" component={LoginEmailScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Phone" component={LoginPhoneScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Recuperacao" component={RecuperacaoScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Verificacao" component={VerificacaoScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);