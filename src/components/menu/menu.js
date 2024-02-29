import React from 'react';
import { View, Text } from 'react-native';

export default class Menu extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 50 }}>
        <Text>Seção 1</Text>
        <Text>Seção 2</Text>
        <Text>Seção 3</Text>
      </View>
    );
  }
}
