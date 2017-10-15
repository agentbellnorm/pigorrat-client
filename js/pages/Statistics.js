import React from 'react';
import { Text, Image } from 'react-native';

export default class Statistics extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../resources/images/percent.png')}
        style={{
          width: 24,
          height: 24,
          tintColor: tintColor
        }}
      />
    ),
  }

  render() {
    return (
      <Text>Statistik</Text>
    )
  }
}
