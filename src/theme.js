import React from 'react';
import { Image, TouchableHighlight } from 'react-native';
export const colors = {
  black: '#000000',
  darkBackground: '#323232',
  error: '#ff0000',
  gray: '#6c7a92',
  greyedBlue: '#d9e3f7',
  inputShadow: '#d8e5ff',
  label: '#333333',
  lightGray: '#eeeeee',
  lightGreen: '#00cc4c',
  mutedText: '#72819a',
  primary: 'white',
  primaryDisabled: '#99a9c6',
  redBackground: '#ef3248',
  transparent: 'transparent',
  white: '#ffffff',
  whiteBackground: '#f4f6f9',
}
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./icons8-menu-24.png')}
        style={{ width: 30, height: 30, marginRight: 5 }}
      />
    );
  }
}

export const navigationHeader = {
  // headerRight:
  //           () => 
  //           <TouchableHighlight 
  //               onPress={() => navData.navigation.toggleDrawer()}
  //               activeOpacity='0'>
  //           <LogoTitle
  //               style={[{ color: 'blue', marginRight: 12 }]}
  //               size={15}
  //           /></TouchableHighlight>,
  headerStyle: {
    backgroundColor: colors.primary,
    elevation: 6,
    shadowColor: colors.primary,
    shadowOffset: { height: 4, width: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
  },
  headerTintColor: colors.white,
  headerTitleStyle: { fontWeight: 'bold' },
}

export default {
  colors,
  navigationHeader,
}