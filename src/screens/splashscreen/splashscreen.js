// SplashScreen/splashscreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import Logo from '../../../assets/logo/logo.svg'

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Welcome');
    }, 3000); // 3 segundos de delay
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0068C1', // Coloque a cor de fundo da sua SplashScreen
  },
  // Adiciona aqui os estilos que você quiser
});

export default SplashScreen;
