import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SplashScreen from './../screens/splashscreen/splashscreen';
import WelcomeScreen from './../screens/auth/welcome';
import LoginEmailScreen from '../screens/auth/loginEmail';
import LoginPhoneScreen from './../screens/auth/loginPhone';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Email" component={LoginEmailScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Phone" component={LoginPhoneScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);