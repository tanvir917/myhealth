import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style, ...props.containerStyle, ...props.basicStyle}}>
            {props.children}
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        shadowColor: 'grey',
        shadowOpacity: 0.20,
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: '#F5F9FE',
    }
});

export default Card;