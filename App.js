import React from 'react';
import { StyleSheet, AsyncStorage } from 'react-native';
import Navigation from './js/components/Navigation';
import Login from './js/pages/Login';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      "user": null
    };

    this.handleUserChange = this.handleUserChange.bind(this);

    AsyncStorage.getItem('@pigorrat:user').then((user) => {
      this.handleUserChange(JSON.parse(user));
    });
  }

  handleUserChange(user) {
    this.setState({
      "user": user
    });
  }

  render() {
    return this.state.user
      ? <Navigation screenProps={{ user : this.state.user }} />
      : <Login onUserChange={this.handleUserChange}/>;
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
