import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import getUsersToVote from './services/getUsersToVote';
import SwipeCards from './SwipeCards';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingFinished: false,
      users: []
    }
  }

  render() {
    if (!this.state.hasFetched && !this.state.isFetching) {
      this.setState({ isFetching: true, hasFetched: false })

      getUsersToVote().then(data => {
        this.setState({
          isFetching: false,
          hasFetched: true,
          users: [{
            uuid: '12344',
            imgUrl: "https://upload.wikimedia.org/wikipedia/commons/3/37/Sus_Barbatus%2C_the_Bornean_Bearded_Pig_%2812616351323%29.jpg",
            name: "Fabian"
          }]
        })
      })
    }

    return (
      <View style={styles.container}>
        <Text>GRIS ELLER RÅTTA?</Text>
        { !!this.state.hasFetched
          ? <SwipeCards users={this.state.users}/>
          : <Text> LADDAR </Text> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
