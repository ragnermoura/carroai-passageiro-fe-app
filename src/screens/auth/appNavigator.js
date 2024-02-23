import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from './welcome';
import LoginScreen from './loginEmail';
// Importe suas outras telas de Login aqui

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginEmail" component={LoginScreen} />
        {/* Configure as outras telas de Login aqui, certifique-se de ter componentes para elas */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
