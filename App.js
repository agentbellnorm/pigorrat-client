import React from 'react';
import Vote from './js/pages/Vote';
import Profile from './js/pages/Profile';
import Statistics from './js/pages/Statistics';

import { StyleSheet } from 'react-native';

import {
  TabNavigator
} from 'react-navigation';

export const Navigation = TabNavigator({
  Profile: { screen: Profile },
  Vote: { screen: Vote },
  Statistics: { screen: Statistics },
}, {
  tabBarPosition: 'top',
  animationEnabled: true,
  swipeEnabled: false,
  tabBarOptions: {
    activeTintColor: '#FFAFDD',
    inactiveTintColor: '#ddd',
    style: {
      backgroundColor: '#fff',
      paddingTop: 20
    },
    showLabel: false
  },
})

export default class App extends React.Component {
  render() {
    return <Navigation />;
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
