import React from 'react';
import DisplayContainer from './js/DisplayContainer';
import { StyleSheet} from 'react-native';

export default class App extends React.Component {
  render () {
    return (
      <DisplayContainer />
    )
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
