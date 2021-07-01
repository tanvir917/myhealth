import React from 'react';
import { View, Text, Image, StyleSheet, Button, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import Card from '../UI/Card';
import Icon from 'react-native-vector-icons/FontAwesome';
import MAT from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../constants/Colors';

const PatientItem = props => {
    
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
                                    <View>
                                        <View style={styles.appointment}>
                                            <Text style={styles.appointmentText}>Approved</Text>
                                        </View> 
                                    </View>
                                    : null
                                    }
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'space-between'
                                    }}
                                >
                                    <Text style={styles.desc}>Time: {props.address}</Text>
                                    {props.appStatus === 0 ?  
                                    <View >
                                        <View 
                                            style={{...styles.appointment, backgroundColor: Colors.backgroundColor, 
                                                borderColor: 'red', borderWidth: 2, paddingLeft: 15, paddingRight: 15,
                                                marginTop: 8
                                            }}>
                                            <Text style={{...styles.appointmentText, color: 'red', fontWeight: 'bold'}}>
                                                Cancel
                                            </Text>
                                        </View> 
                                    </View>
                                    : null
                                    }
                                </View>
                                <View style={{marginTop: -18, flexDirection: 'row'}}>
                                    <Card 
                                        style={{ height: 30, width: 30, borderRadius: 8, marginRight: 8,
                                        borderWidth: 2, borderColor: '#def0ff', justifyContent: 'center', alignItems:'center',
                                    }}>
                                        <TouchableCmp onPress={props.onSelectCall} useForeground>
                                            <MAT name="call" size={15} />
                                        </TouchableCmp>
                                    </Card>
                                    <Card 
                                        style={{ height: 30, width: 30, borderRadius: 8, 
                                        borderWidth: 2, borderColor: '#def0ff', justifyContent: 'center', alignItems:'center',
                                    }}>
                                        <MAT name="video-call" size={15} />
                                    </Card>
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
        margin: '2%',
        backgroundColor: Colors.backgroundColor
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
        fontSize: 13,
    },
    appointment: {
        backgroundColor: '#34c85a',
        borderRadius: 15,
        padding: 1,
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 30
    },
    appointmentText: {
        textAlign: 'center',
        color: 'white',
        margin: 5
    },
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    role: {
        fontWeight: 'bold',
        color: 'grey'
    }
});
export default PatientItem;