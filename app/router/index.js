import React from 'react';
import { StackNavigator } from 'react-navigation';

import Styles from '../styles/index';

import HomeScreen from '../pages/home';
import ProfileScreen from '../pages/profile';
import ScheduleScreen from '../pages/schedule';

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