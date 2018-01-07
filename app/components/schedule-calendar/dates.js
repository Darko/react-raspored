import React from 'react';
import { View, StyleSheet } from 'react-native';

import Day from './day';
import { daysInWeek, monthNames, shortDayNames } from './constants';

import AppStyles from '../../styles/index';

const WeekStyles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: AppStyles.brand.backgroundColor,
    borderBottomColor: AppStyles.brand.borderColor,
    borderBottomWidth: 1,
    borderTopColor: AppStyles.brand.borderColor,
    borderTopWidth: 1
  },
  multiWeek: {
    flexWrap: 'wrap'
  }
});

export class DaysWrapper extends React.Component {
  getDays(weeks = 1) {
    const totalDays = weeks * daysInWeek;
  
    const now = new Date();
      const days = [];
      let currentDay = now.getDay();
      let currentDate = now.getDate();
  
    for (let i = 0; i < totalDays; i++) {
      const newDay = this.addDays(now, i);
      const date = newDay.getDate();
      const day = newDay.getDay();
  
      days.push(
        <Day day={day} date={date} selected={this.props.selectedDate === date} onPressed={this.props.onDay} key={i}/>
      );
    } 

    return days;
  }

  addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }

  render() {
    const days = this.getDays(this.props.weeks);
    const styles = this.props.weeks > 1 ? [WeekStyles.wrapper, WeekStyles.multiWeek] : WeekStyles.wrapper

    return (
      <View style={styles}>{days}</View>
    );
  }
}