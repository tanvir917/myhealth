import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Card from '../UI/Card';

const MenuItem = props => {
    
    let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <Card 
            style={styles.product} >
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onSelect} useForeground>
                    <View style={styles.card}>
                        <View style={styles.imageContainer} >
                            <Image style={styles.image} source={{uri: props.image}} />
                        </View>
                        <View style={styles.details}>
                            <Text style={styles.title}>{props.title}</Text>
                        </View>
                    </View>
                </TouchableCmp>
            </View>
        </Card>
        
    )
};

const styles = StyleSheet.create({
    product: {
        height: 115,
        width: '26.6%',
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContainer: {
        width: '80%',
        height: '60%',
        margin: '4%',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        overflow: 'hidden',
        alignContent: 'center',
        
    },
    image: {
        width: '100%',
        height: '100%'
    },
    details: {
        textAlign: 'center',
        alignContent: 'center'
    },
    title: {
        fontSize: 12,
        margin: 2,
        fontWeight: "bold",
        color: "black"
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '23%',
        paddingHorizontal: 20
    }
});
export default MenuItem;