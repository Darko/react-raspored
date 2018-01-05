import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import AppStyles from '../../styles/index';

const daysInWeek = 7;
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const shortDayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

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

const DayStyles = StyleSheet.create({
  wrapper: {
    width: '14.2%',
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

export class Day extends React.Component {
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
        })}>{ shortDayNames[this.props.day - 1].toUpperCase() }</Text>
        <Text style={numberStyle} onPress={() => this.props.onPressed({
          date: this.props.date,
          day: this.props.day
        })}>{ this.props.date < 10 ? '0' + this.props.date : this.props.date }</Text>
      </View>
    );
  }
}