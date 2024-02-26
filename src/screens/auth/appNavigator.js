import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './welcome';
import LoginEmailScreen from './loginEmail';
import LoginPhoneScreen from './loginPhone';
// Importe suas outras telas de Login aqui

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginEmail" component={LoginEmailScreen} />
        <Stack.Screen name="LoginPhone" component={LoginPhoneScreen} />
        {/* Configure as outras telas de Login aqui, certifique-se de ter componentes para elas */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
