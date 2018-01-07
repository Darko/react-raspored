import React from 'react';
import { View, StyleSheet } from 'react-native';

import Day from './day';
import { daysInWeek, monthNames, shortDayNames } from './constants';

import AppStyles from '../../styles/index';

const WeekStyles = StyleSheet.create({
  wrapper: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: AppStyles.brand.backgroundColor,
    paddingTop: 4,
    paddingBottom: 4,
    borderBottomColor: AppStyles.brand.borderColor,
    borderBottomWidth: 1,
    borderTopColor: AppStyles.brand.borderColor,
    borderTopWidth: 1
  }
})

export class Week extends React.Component {
  render() {
    const now = new Date();
    const days = [];
    let currentDay = now.getDay();
    let currentDate = now.getDate();

    for (let i = currentDate; i < (currentDate + daysInWeek); i++) {
      const currentDay = (i % daysInWeek) + 1;

      days.push(
        <Day day={currentDay} date={i + 1} selected={this.props.selectedDate === i + 1} onPressed={this.props.onDay} key={currentDay}></Day>
      );
    }

    return (
      <View style={WeekStyles.wrapper}>
        {days}
      </View>
    );
  }
}