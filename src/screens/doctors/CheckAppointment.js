import React from 'react';
import { View, Text, FlatList, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as appointmentActions from '../../actionCreators/appointment';
import Card from '../../components/UI/Card'
import ButtonCom from '../../components/UI/ButtonCom'
import PatientInfo from '../../components/Doctors/PatientInfo'

const CheckAppointment = props => {
    const doctorId = props.navigation.getParam('doctorId');
    const hospitalId = props.navigation.getParam('hospitalId');
    const selectedDate = props.navigation.getParam('selectedDate');
    const selectedbtn = props.navigation.getParam('selectedbtn');
    const doctorData = useSelector(state => 
        state.doctorList.availableDoctors.find(prod => prod.id === doctorId)
    );
    //date = selectedDate.slice(0, 10);
    const hosData = Object.values(doctorData.hospital)
    const hospitalData = hosData.find(h => h.id === hospitalId)
    
    const userInfo = useSelector(state => state.authM.userInfo);
    const patientName = userInfo.name
    const patientId = useSelector(state => state.authM.userId);
    const patientEmail = userInfo.email

    console.log(userInfo);

    const dispatch = useDispatch();
    return (
        <ScrollView style={styles.fullView}>
        <View style={{ overflow: 'visible', width: '90%', margin: '7%', flex: 1}}>
                <Card style={styles.Cardstyle}>
                    <View style={styles.parentView}>
                        <View style={{ margin: '5%' }}>
                            <Image style={styles.image}
                                source={{uri: doctorData.imageUrl}} 
                            />
                        </View>
                        <View>
                            <Text 
                                style={{ fontWeight: "bold", fontSize: 25, color: "black" }}
                                >{doctorData.name}
                            </Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                                <Text 
                                    style={{ color: "blue", fontSize: 18, justifyContent: 'center' }}
                                >{doctorData.role}</Text>
                                <Text>{doctorData.degree}</Text>
                            </View>
                        </View>
                        <View style={styles.patientInfo}>
                            <PatientInfo    
                                patientImage={userInfo.avatar}
                                patientName={userInfo.name}
                                appointmentDate={selectedDate.toString().slice(0, 15)}
                                appointmentTime={selectedbtn.slot}
                                patientContact={userInfo.phone}
                                doctorFee='500 BDT'
                                patientAddress={userInfo.address}
                                info='Patient Information'
                            />
                        </View>
                    </View>
                    <View style={{marginTop: 20, flexDirection: 'row', justifyContent: 'center'}}>
                        <ButtonCom 
                            title='Confirm'
                            style={{margin: 20, borderRadius: 15,}}
                            containerStyle={{ backgroundColor: 'blue'}}
                            textStyle={{ color: 'white'}}
                            buttonSize={{height: 44, width: '30%'}}
                            onSelect={() => {
                                dispatch(appointmentActions.addAppointment(
                                    patientId, patientName, patientEmail,
                                    doctorData.name, doctorData.role, 
                                    appStatus = 0, doctorData.imageUrl, 
                                    selectedDate, selectedbtn.slot, 
                                    hospitalData.location, doctorId, hospitalId
                                ));
                                props.navigation.navigate('PaymentScreen')
                                //props.navigation.navigate('ConfirmAppointment')
                            }}
                        />
                        <ButtonCom
                            title = 'Cancel'
                            buttonSize={{height: 44, width: '30%'}}
                            onSelect={() => {}}
                        />
                    </View>
                </Card>
        </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        alignItems: 'center'
    },
    patientInfo: {
        height: '45%',
        width: '100%'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 3,
        paddingTop: '1%',

    },
    Cardstyle: {
        width: '95%',
        alignItems: 'center',
        marginTop: '2%'
      

    },
    commoncard: {
        backgroundColor: '#F4F9FF',
        height: 50,
        maxHeight: 100,
        padding: '3%', 
        marginLeft: '2.5%',
        
        
    }
    ,
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

export default CheckAppointment;