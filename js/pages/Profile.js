import React from 'react';
import { Text, Image, View } from 'react-native';
import getUser from '../services/getUser';
import * as modelFunctions from '../lib/modelFunctions';

export default class Profile extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Image
        source={require('../../resources/images/account.png')}
        style={{
          width: 18,
          height: 24,
          tintColor: tintColor
        }}
      />
    ),
  }

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentWillMount() {
    getUser('FABIAN').then(data => {
      this.setState({
        user: data
      })
    })
  }

  render() {
    return (
      <View style={{
          flex:1,
          alignItems:'center'
        }}>
        <Image
          style={{
            height:160,
            width: 160,
            borderRadius: 80,
            marginTop:40
          }}
          source={{uri: this.state.user.imgUrl}}source={{uri : this.state.user.imgUrl }}
        />
        <Text
          style={{
            marginTop:20,
            fontSize:22
          }}
          >{this.state.user.name}</Text>

      </View>
    )
  }
}
