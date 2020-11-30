import React from "react";
import { ScrollView, View, Text, StyleSheet, Button, Image } from 'react-native';
import Card from '../../components/UI/Card';
import TextCom from '../../components/UI/TextCom'
import LinearGradient from 'react-native-linear-gradient'

const PatientInfo = props =>  {
    return (
        <Card style={styles.Cardstyle}>
        <LinearGradient
            colors={['#15659e', '#348f18','#159e70']}
            style={styles.container}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            locations={[0.3, 0.5, 0.8]}
        >
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>{props.info}</Text>
            </View>
            <View style={styles.parentView}>
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={{uri: props.patientImage}} 
                    />
                </View>
                <View style={{ marginLeft: 20, marginRight: 25 }}>
                    <TextCom 
                        textStyle={styles.text}
                        title={props.patientName}
                    />
                    <TextCom 
                        textStyle={styles.text}
                        title={props.appointmentDate}
                    />
                    <TextCom 
                        textStyle={styles.text}
                        title={props.appointmentTime}
                    />
                    <TextCom 
                        textStyle={styles.text}
                        title={props.patientContact}
                    />
                    <TextCom 
                        textStyle={styles.text}
                        title={props.doctorFee}
                    />
                    <TextCom 
                        textStyle={styles.text}
                        title={props.patientAddress}
                    />
        
                </View>
            </View>
            </LinearGradient>
        </Card>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRadius: 10
    },
    parentView: {
        paddingTop: '8%',
        flexDirection: 'row'
    },
    imageContainer: {
        height: 70,
        width: 70,
        marginLeft: 20,
        marginBottom: 20
        
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 15,
        overflow: "hidden",
        borderWidth: 3,
        paddingTop: '1%',

    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    Cardstyle: {
        marginTop: '2%',
        backgroundColor: 'blue'

    },
    commoncard: {
        backgroundColor: '#F4F9FF',
        height: 50,
        maxHeight: 100,
        padding: '3%', 
        marginLeft: '2.5%',
    },
    text: {
        color: 'white'
    },
    commonbutton: {
        backgroundColor: '#F4F9FF',
        height: '100%',
        margin: '2%',
        borderRadius: 5
    },
    fullView: {
        height: '100%',
        width: '100%',
    }

})

export default PatientInfo;