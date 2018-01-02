import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppStyles from '../styles/index';

const styles = {
  buttonWrapper: {
    backgroundColor: 'transparent',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 12,
    paddingRight: 12,
    marginLeft: 6,
    marginRight: 6,
    // textTransform: 'uppercase'
  },
  buttonText: {
    color: AppStyles.brandText.contrastDark,
    fontWeight: 'bold',
    width: '100%',
    textAlign: 'center'
  },
  primary: {
    text: {
      color: AppStyles.brand.primary
    }
  },
  primaryRaised: {
    wrapper: {
      backgroundColor: AppStyles.brand.primary,
    },
    text: {
      color: AppStyles.brandText.contrastLight,
    }
  },
  primaryGhost: {
    wrapper: {
      backgroundColor: 'transparent'
    },
    text: {
      color: AppStyles.brand.primary,
    }
  },
  primaryGhostActive: {
    wrapper: {
      borderWidth: 1,
      borderColor: AppStyles.brand.primary
    }
  },
  round: {
    borderRadius: 16
  }
}

export default class CustomButton extends React.Component {
  render() {
    const { raised, primary, accent, ghost, active, round } = this.props;
    let WrapperStyles = [];
    let TextStyles = [];

    if (primary && !ghost) {
      WrapperStyles = raised ? [styles.buttonWrapper, styles.primaryRaised.wrapper, this.props.style] : [styles.buttonWrapper, this.props.style];
      TextStyles = raised ? [styles.buttonText, styles.primaryRaised.text, this.props.textStyle] : [styles.buttonText, styles.primary.text, this.props.textStyle];
    } else if (ghost && !primary) {
      WrapperStyles =  [styles.buttonWrapper, this.props.style];
      TextStyles = [styles.buttonText, this.props.textStyle];
    } else if (primary && ghost) {
      WrapperStyles = active ? [styles.buttonWrapper, styles.primaryGhostActive.wrapper, this.props.style] : [styles.buttonWrapper, styles.primaryGhost.wrapper, this.props.style];
      TextStyles = [styles.buttonText, styles.primaryGhost.text, this.props.textStyle];
    } else {
      WrapperStyles = [styles.WrapperStyles];
      TextStyles = [styles.buttonText];
    }

    if (round) {
      WrapperStyles.push(styles.round);
    }

    return (
      <View style={WrapperStyles}>
        <Text onPress={this.props.onPressed} style={TextStyles}>
          {this.props.value.toUpperCase()}
        </Text>
      </View>
    );
  }
}
