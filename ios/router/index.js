import React from 'react';
import { StackNavigator } from 'react-navigation';

import Styles from '../styles/index';

import HomeScreen from '../views/home';
import ProfileScreen from '../views/profile';
import ScheduleScreen from '../views/schedule';

const AppNavigation = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
  Schedule: { screen: ScheduleScreen },
}, {
  navigationOptions: {
    headerStyle: {
      backgroundColor: Styles.brand.primary
    },
    headerTintColor: Styles.brandText.contrastLight
  }
})

export default AppNavigation;