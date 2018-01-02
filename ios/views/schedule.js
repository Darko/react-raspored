import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/button';

import AppStyles from '../styles/index';

const styles = StyleSheet.create({
  filterWrapper: {
    width: '100%',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8
  }
});

export default class ScheduleScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      selected: 'upcoming'
    }
  }

  static navigationOptions = {
    title: 'Schedule',
  }

  fetchOverall() {
    if (this.state.selected === 'overall') return;

    this.setState({
      selected: 'overall'
    });
  }

  fetchUpcoming() {
    if (this.state.selected === 'upcoming') return;

    this.setState({
      selected: 'upcoming'
    });
  }

  render() {
    return (
      <View style={[styles.filterWrapper, { backgroundColor: AppStyles.brand.backgroundColor }]}>
        <CustomButton value="Upcoming" primary={true} ghost={true} round={true} active={this.state.selected === 'upcoming'} onPressed={ () => this.fetchUpcoming() }></CustomButton>
        <CustomButton value="Overall" primary={true} ghost={true} round={true} active={this.state.selected === 'overall'} onPressed={ () => this.fetchOverall() }></CustomButton>
      </View>
    );
  }
}