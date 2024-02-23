import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const LoginPhoneScreen = ({ navigation }) => {
  const [telefone, setTelefone] = useState('');

  const handleLogin = () => {
    // Aqui vai a lógica para lidar com o login via telefone
    console.log('Login com telefone', telefone);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Número de telefone"
        value={telefone}
        onChangeText={setTelefone}
        style={styles.input}
      />
      <Button
        onPress={handleLogin}
        title="Continuar"
        color="#1E90FF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    marginVertical: 10,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginPhoneScreen;
