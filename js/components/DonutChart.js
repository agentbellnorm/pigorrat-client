import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Pie from 'react-native-pie';
import texts from '../config/texts';

function getLargestNumberPercentageOfWhole(numberOne, numberTwo) {
  if (numberOne > numberTwo) {
    return Math.round((numberOne / (numberOne + numberTwo)) * 100)
  } else if (numberTwo > numberOne) {
    return Math.round((numberTwo / (numberOne + numberTwo)) * 100)
  }
  return 50
}

function getAnimal(state) {
  if (state.pig >= state.rat) {
    return 'pig'
  }
  return 'rat'
}

function getColor(state) {
  if (getAnimal(state) === 'pig') {
    return 'FFAFDD'
  }
  return 'FFED27'
}

export default class DonutChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pig: props.statistics.pig,
      rat: props.statistics.rat
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Pie
            radius={120}
            innerRadius={80}
            series={[getLargestNumberPercentageOfWhole(this.state.pig, this.state.rat)]}
            colors={[getColor(this.state)]}
            backgroundColor='#ddd' />
          <Text style={styles.gaugeText}>
             {getLargestNumberPercentageOfWhole(this.state.pig, this.state.rat)}% {texts.youAre} {texts[getAnimal(this.state)]}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  gaugeText: {
    marginTop: '10%',
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: '#000',
    fontSize: 24,
  },
})
