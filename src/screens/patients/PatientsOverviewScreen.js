import React, { useEffect, useState, useCallback } from 'react';
import { View, 
    Text, Image, FlatList, Button, Platform, ActivityIndicator, 
    StyleSheet, TouchableHighlight, TouchableOpacity, 
    TouchableNativeFeedback } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import MenuItem from '../../components/Patients/MenuItem';

const PatientsOverviewScreen = props => {
    const products = useSelector(state => state.menus.availableProducts);
    const userName = useSelector(state => state.authM.userId);
    //console.log(userName);
    return (
        <FlatList
            data={products} 
            numColumns={3}
            keyExtractor={item => item.id} 
            renderItem={({item}) => <MenuItem 
                image={item.imageUrl}
                title={item.title}
                onSelect={() => {
                    props.navigation.navigate(item.screen);
                }}
            />} 
        />
    );
};

class LogoTitle extends React.Component {
    render() {
      return (
        <View style={styles.drawer}>
            <Image
                source={require('./icons8-menu-24.png')}
                style={{ width: 30, height: 30, margin: 10, padding: 10 }}
            />
        </View>
      );
    }
  }

PatientsOverviewScreen.navigationOptions = navData => {
    console.log('====================================');
    console.log(navData);
    console.log('====================================');
    return {
        headerTitle: 'My Health',
        headerRight:
            () => 
            <TouchableHighlight 
                onPress={() => navData.navigation.toggleDrawer()}
                activeOpacity='0'>
            <LogoTitle
                style={[{ color: 'blue', marginRight: 12 }]}
                size={15}
            /></TouchableHighlight>,
        headerLeft: () => {},
    }
};

const styles = StyleSheet.create({
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    drawer: {
        height: '100%',
        width: '100%',
        color: 'grey'
    }
})

export default PatientsOverviewScreen;