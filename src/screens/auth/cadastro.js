import React, { useState } from "react";
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';

const CadastroScreen = ({ navigation }) => {
    const [isCriarComEmail, setIsCriarComEmail] = useState(true);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {isCriarComEmail ? (
            <View>
              <Text>Criar com E-mail</Text>
              <TextInput placeholder="Digite seu e-mail" />
              <Button title="Continuar" onPress={() => console.log('Continuar com e-mail')} />
              <TouchableOpacity onPress={() => setIsCriarComEmail(false)}>
                <Text>Quer usar o telefone? Clique aqui.</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View>
              <Text>Criar com Telefone</Text>
              <TextInput placeholder="Digite seu telefone" />
              <Button title="Continuar" onPress={() => console.log('Continuar com telefone')} />
              <TouchableOpacity onPress={() => setIsCriarComEmail(true)}>
                <Text>Prefere e-mail? Clique aqui.</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      );
    };

    export default CadastroScreen;