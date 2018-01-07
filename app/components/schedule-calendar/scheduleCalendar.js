import React from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/index';
import { Week } from './dates';

class ScheduleCalendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDay: {
        day: null,
        date: null
      }
    }
  }

  onDay(date) {
    const { actions, classes } = this.props;
    actions.getClasses('darko');
    this.setState({ selectedDay: date });
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Week selectedDate={this.state.selectedDay.date} onDay={(date) => this.onDay(date)}></Week>
        <Text>{ this.state.selectedDay.date }</Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    classes: state.classes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScheduleCalendar);