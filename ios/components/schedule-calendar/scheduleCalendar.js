import React from 'react';
import { View, Text } from 'react-native';
import { Week } from './dates';

export default class ScheduleCalendar extends React.Component {
  constructor() {
    super();

    this.state = {
      selectedDay: {
        day: null,
        date: null
      }
    }
  }

  render() {
    return (
      <View>
        <Week selectedDate={this.state.selectedDay.date} onDay={(date) => this.setState({ selectedDay: date })}></Week>
        <Text>{ this.state.selectedDay.date }</Text>
      </View>
    );
  }
}