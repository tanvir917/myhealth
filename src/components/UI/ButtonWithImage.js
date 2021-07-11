import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Card from './Card';
import FA from 'react-native-vector-icons/FontAwesome';

const ButtonWithImage = props => {
    
    let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <Card style={{...styles.doctorlist, ...props.buttonSize}} >
            <View style={{...styles.touchable, ...props.containerStyle}}>
                <TouchableCmp onPress={props.onSelect} useForeground>
                    <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <FA name={props.iconName} size={15}/>
                    <View style={styles.card}>
                        <Text style={{...styles.title, ...props.textStyle}}>{props.title}</Text>
                    </View>
                    </View>
                </TouchableCmp>
            </View>
        </Card>
    )
};

const styles = StyleSheet.create({
    doctorlist: {
        margin: '5%',
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden',
        height: '100%',
        width: '100%',
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
        fontSize: 16,
    },
    card: {
        padding:8
    },
});
export default ButtonWithImage;