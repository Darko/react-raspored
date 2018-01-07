import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import CustomButton from '../components/button';

import AppStyles from '../styles/index';

import UserAvatar from '../components/userAvatar';

const fakeUser = {
  avatar: 'https://scontent-vie1-1.cdninstagram.com/t51.2885-19/s150x150/26066040_140809569917439_6069083750422020096_n.jpg',
  name: 'Darko'
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: '#333',
    paddingTop: 24
  },
  h1: {
    color: AppStyles.brandText.contrastDark,
    fontSize: 36,
    width: '100%',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold'
  },
  profileButton: {
  }
});

export default class HomeScreen extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0
    };
  }

  static navigationOptions = {
    title: 'Home',
  }

  componentWillMount() {
    const { navigate } = this.props.navigation;
    navigate('Schedule');
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={[styles.container, { backgroundColor: AppStyles.brand.backgroundColor }]}>
        <UserAvatar avatar={fakeUser.avatar} />
        <Text style={styles.h1}>Здраво, { fakeUser.name }</Text>

        <CustomButton style={styles.profileButton} primary={true} raised={true} onPressed={ () => navigate('Profile') } value={'Профил'}></CustomButton>
        <CustomButton style={styles.profileButton} primary={true} raised={true} onPressed={ () => navigate('Schedule') } value={'Распоред'}></CustomButton>
      </View>
    );
  }
}