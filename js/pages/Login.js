import React from 'react';
import { Facebook } from 'expo';
import { FACEBOOK_APP_ID } from 'react-native-dotenv';
import createUser from '../services/createUser';
import { Text, Image, View, Button, StyleSheet, AsyncStorage } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.logIn = this.logIn.bind(this);

    this.state = {};
  }

  async logIn() {
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(FACEBOOK_APP_ID, {
        permissions: ['public_profile'],
      });
    if (type === 'success') {
      // Get the user's name using Facebook's Graph API
      const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,picture`)
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;
        }).catch((error) => {
          console.error(error);
        });

      const user = {
        userId: response.id,
        name: response.name,
        imgUrl: response.picture.data.url
      };

      await createUser(user);

      await AsyncStorage.setItem('@pigorrat:user', JSON.stringify(user));

      this.props.onUserChange(user);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logos}>
          <Image
            style={{
              height:160,
              width: 160,
              borderRadius: 80,
              marginTop:40
            }}
            source={require('../../resources/images/pig.png')}
          />
          <Image
            style={{
              height:160,
              width: 160,
              borderRadius: 80,
              marginTop:40
            }}
            source={require('../../resources/images/rat.png')}
          />
        </View>

        <Button
          onPress={this.logIn}
          title="Sign in with Facebook"
          color="#3B5998"
          accessibilityLabel="Sign in with Facebook"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  logos: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})
