import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Card from '../UI/Card';

const DoctorItem = props => {
    
    let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <Card style={styles.doctorlist} >
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onSelect} useForeground>
                    <View style={styles.card}>
                        <View style={styles.imageContainer} >
                            <Image style={styles.image} source={{uri: props.image}} />
                        </View>
                        <View style={styles.details}>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.title}>{props.name}</Text>
                                <View style={styles.appointment}>
                                    <Text style={styles.appointmentText}>Appointment</Text>
                                </View>
                            </View>
                            <Text style={styles.role}>{props.role}</Text>
                            <Text style={styles.desc}>{props.degree}</Text>
                            <Text style={styles.desc}>{props.address}</Text>
                        </View>
                        
                    </View>
                </TouchableCmp>
            </View>
        </Card>
        
    )
};

const styles = StyleSheet.create({
    doctorlist: {
        height: 100,
        width: '95%',
        margin: '2%'
    },
    touchable: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    imageContainer: {
        margin:4,
        width: '25%',
        height: '90%',
        borderRadius: 15,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontFamily: 'Bold',
        fontSize: 15,
        marginVertical: 2
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '23%',
        paddingHorizontal: 20
    },
    details: {
        flexDirection: 'column',
        margin: 8
    },
    card: {
        flexDirection: 'row'
    },
    desc: {
        fontSize: 13
    },
    appointment: {
        marginLeft: 15,
        justifyContent: 'flex-start',
        backgroundColor: 'blue',
        borderRadius: 15
    },
    appointmentText: {
        textAlign: 'center',
        color: 'white',
        margin: 5
    },
    detailsContainer: {
        flexDirection: 'row'
    }
});
export default DoctorItem;