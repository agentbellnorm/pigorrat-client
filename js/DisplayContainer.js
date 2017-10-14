import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as modelFunctions from './modelFunctions';
import getVoteSubjects from './services/getVoteSubjects';
import SwipeCards from './SwipeCards';
import texts from '../texts.json';
import * as events from '../events';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchingFinished: false,
      voteSubjects: []
    }
  }

  handleEvent(event) {
    switch (event.type) {
      case events.vote:
        // act on event, remove subject with ID from list of loaded subjects
        console.log('event', event.value)
    }
  }

  render() {
    if (modelFunctions.shouldCallGetvoteSubjects(this.state)) {
      this.setState({ isFetching: true, hasFetched: false })
      getVoteSubjects().then(data => {
        this.setState({
          isFetching: false,
          hasFetched: true,
          voteSubjects: data
        })
      })
    }

    return (
      <View style={styles.container}>
        <Text>{texts.header}</Text>
        {
          modelFunctions.isLoading(this.state)
          ? <Text> {texts.loading} </Text>
          : <SwipeCards
              voteSubjects={this.state.voteSubjects}
              handleEvent={this.handleEvent}
              events
            />
        }
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
