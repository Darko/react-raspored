import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { shortDayNames } from './constants';

import AppStyles from '../../styles/index';

const DayStyles = StyleSheet.create({
  wrapper: {
    width: '14.2%',
    paddingTop: 10,
    paddingBottom: 10
  },
  text: {
    fontSize: 11,
    fontWeight: 'normal',
    textAlign: 'center',
    color: AppStyles.brandText.contrastDark
  },
  number: {
    fontSize: 21,
    fontWeight: '700',
    textAlign: 'center',
    color: AppStyles.brandText.contrastDark
  },
  selected: {
    fontWeight: '700',
    color: AppStyles.brand.primary
  }
});

export default class Day extends React.Component {
  render() {
    const textStyle = [DayStyles.text];
    const numberStyle = [DayStyles.number];

    if (this.props.selected) {
      textStyle.push(DayStyles.selected);
      numberStyle.push(DayStyles.selected);
    }
  
    return (
      <View style={DayStyles.wrapper} onPress={() => this.props.onPressed({
        date: this.props.date,
        day: this.props.day
      })}>
        <Text style={textStyle} onPress={() => this.props.onPressed({
          date: this.props.date,
          day: this.props.day
        })}>{ shortDayNames[this.props.day].toUpperCase() }</Text>
        <Text style={numberStyle} onPress={() => this.props.onPressed({
          date: this.props.date,
          day: this.props.day
        })}>{ this.props.date < 10 ? '0' + this.props.date : this.props.date }</Text>
      </View>
    );
  }
}