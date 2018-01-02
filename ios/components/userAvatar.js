import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden'
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 100,
    height: 100
  }
})

export default class UserAvatar extends React.Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Image style={styles.image} source={{ uri: this.props.avatar }}/>
      </View>
    );
  }
}