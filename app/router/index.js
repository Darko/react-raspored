import React from 'react';
import { StackNavigator } from 'react-navigation';

import Styles from '../styles/index';

import HomeScreen from '../containers/home';
import ProfileScreen from '../containers/profile';
import ScheduleScreen from '../containers/schedule';

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
});

export default AppNavigation;