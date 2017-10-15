import { TabNavigator } from 'react-navigation';
import Vote from '../pages/Vote';
import Profile from '../pages/Profile';
import Statistics from '../pages/Statistics';

export default TabNavigator({
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
