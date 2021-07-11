import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

class LogoTitle extends React.Component {
    render() {
      return (
        <View style={{height: '100%',
        width: '100%',
        color: 'grey'}}>
            <Image
                source={require('./patients/icons8-menu-24.png')}
                style={{ width: 30, height: 30, margin: 10, padding: 10 }}
            />
        </View>
      );
    }
  }

const styles = StyleSheet.create({})

export default LogoTitle;
