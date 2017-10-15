import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as modelFunctions from '../lib/modelFunctions';
import texts from '../config/texts.json';
import getNumberOfVotes from '../services/getNumberOfVotes';
import DonutChart from '../components/DonutChart';

export default class Statistics extends React.Component {
  static navigationOptions = {
    title: 'Statistik',
  }

  constructor(props) {
    super(props);
    this.state = {
      fetchingFinished: false,
      numberOfVotes: {}
    }
  }

  componentWillMount() {
    if (modelFunctions.shouldCallStateProviderService(this.state)) {
      this.setState({ isFetching: true, hasFetched: false })
      getNumberOfVotes().then(data => {
        this.setState({
          isFetching: false,
          hasFetched: true,
          numberOfVotes: data
        })
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {
          modelFunctions.isLoading(this.state)
          ? <Text>{texts.loading}</Text>
          : <DonutChart statistics={this.state.numberOfVotes} />
        }
      </View>
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
