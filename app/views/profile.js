import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Profile'
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View>
        <Text onPress={ () => navigate('Home') }>You dumb bitch</Text>
      </View>
    );
  }
}