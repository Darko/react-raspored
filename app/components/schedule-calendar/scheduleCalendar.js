import React from 'react';
import { View, Text } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../../actions/index';
import { DaysWrapper } from './dates';

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
    const { actions } = this.props;
    actions.getClasses('darko');
    this.setState({ selectedDay: date });
  }

  render() {
    const { classes } = this.props;

    return (
      <View>
        <DaysWrapper
          weeks={ this.props.calendar === 'overall' ? 4 : 1 }
          selectedDate={this.state.selectedDay.date}
          onDay={(date) => this.onDay(date)}/>

        <Text>{
          classes.isFetching ? 'Loading...' : classes.data.value
        }</Text>
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