import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Card from './Card';

const TextCom = props => {

    return (
        <Text style={{...styles.title, ...props.textStyle}}>{props.title}</Text>
    )
};

const styles = StyleSheet.create({
    touchable: {
        height: '100%',
        width: '100%'
    },
    title: {
        color: 'black',
        fontSize: 14,
    },
});
export default TextCom;