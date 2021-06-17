import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Card from '../UI/Card';
import Icon from 'react-native-vector-icons/FontAwesome';
import ENT from 'react-native-vector-icons/Entypo';

const DoctorItem = props => {
    
    let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }

    return (
        <View style={{justifyContent:'center',alignItems:'center'}}>
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
                                    {props.appStatus === 0 ?  
                                    <View style={styles.appointment}>
                                        <Text style={styles.appointmentText}>Approved</Text>
                                    </View> : null
                                    }
                                </View>
                                {props.iconType === 'Chamber' ? 
                                (
                                    <View style={{marginTop: 3, marginBottom: 6, flexDirection: 'row'}}>
                                        <View style={{marginRight: 10}}>
                                            <ENT name='phone' size={15}/>
                                        </View>
                                        <Text style={styles.role}>{props.role}</Text>
                                    </View>
                                ) : 
                                (
                                    <View style={{marginTop: 3, marginBottom: 6}}>
                                        <Text style={styles.role}>{props.role}</Text>
                                    </View>
                                )
                                }
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginBottom: 3,
                                    }}
                                >
                                    {props.iconType === 'Chamber' ?
                                    (
                                        <View style={{marginRight: 10}}>
                                            <ENT name={props.iconName} size={15} />
                                        </View>
                                        
                                    ) :
                                    (
                                        <View style={{marginRight: 5}}>
                                            <Icon name={props.iconName} size={15} />
                                        </View>
                                    )
                                    }
                                    <Text style={styles.desc}>{props.degree}</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row'
                                    }}
                                >
                                    <View style={{marginRight: 9}}>
                                        <ENT name="location-pin" size={15} />
                                    </View>
                                    <Text style={styles.desc}>{props.address}</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableCmp>
                </View>
            </Card>
        </View>
        
    )
};

const styles = StyleSheet.create({
    doctorlist: {
        height: 100,
        width: '92%',
        margin: '2%'
    },
    touchable: {
        borderRadius: 10,
        height: '100%',
        width: '100%',
        overflow: 'hidden'
    },
    imageContainer: {
        margin:4,
        width: '25%',
        height: '90%',
        borderRadius: 18,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontWeight: 'bold',
        color: 'black',
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
        flexDirection: 'row',
        height: '100%'
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
    },
    role: {
        fontWeight: 'bold',
        color: 'grey'
    }
});
export default DoctorItem;