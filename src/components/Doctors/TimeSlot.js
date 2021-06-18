import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Card from '../UI/Card';

const TimeSlot = props => {
    
    let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={styles.actions}>
            <Card 
                style={styles.product} >
                <View style={styles.touchable}>
                    <TouchableCmp onPress={props.onSelect} useForeground>
                        <View style={{...styles.card, backgroundColor: props.color}}>
                            <Text style={styles.title}>{props.title}</Text>
                        </View>
                    </TouchableCmp>
                </View>
            </Card>
        </View>
        
    )
};

const styles = StyleSheet.create({
    product: {
        height: 50,
        width: '90%',
        marginLeft: '5%',
        marginBottom: '2.5%',
        marginTop: '5%'
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    card: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        margin: 2,
        fontWeight: "bold",
        color: "black",
        alignItems: "center"
    },
    actions: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});
export default TimeSlot;