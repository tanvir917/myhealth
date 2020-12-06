import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonCom from '../../components/UI/ButtonCom';
import PatientInfo from '../../components/Doctors/PatientInfo';
import Card from '../../components/UI/Card'

const AppointmentDetail = props => {
    const patientId = props.navigation.getParam('patientId');
    const patientName = props.navigation.getParam('patientName');
    const doctorId = props.navigation.getParam('doctorId');
    const doctorName = props.navigation.getParam('doctorName');
    const hospitalId = props.navigation.getParam('hospitalId');
    const appDate = props.navigation.getParam('appDate');
    const appTime = props.navigation.getParam('appTime');
    const doctorImage = props.navigation.getParam('doctorImage');
    return (
        <View style={styles.patientInfo}>
            <PatientInfo    
                patientName={doctorName}
                appointmentDate={appDate.toString().slice(0,15)}
                appointmentTime={appTime}
                patientImage={doctorImage}
                patientContact='+01714112961'
                doctorFee='500 BDT'
                patientAddress='Modhubag, Mogbazar, Dhaka'
                info='Doctor Information'
            />
            <View style={{marginTop: 20, justifyContent: 'center', width: 130}}>
                <ButtonCom 
                    title="Video Call"
                    containerStyle={{backgroundColor: 'blue'}}
                    buttonSize={{height: 44, width: '90%'}}
                    textStyle={{color: 'white'}}
                    onSelect={() => {
                    props.navigation.navigate('CheckAuth', {
                        patientEmail: patientId,
                        patientName: patientName 
                    })
                    }}
                />
            </View>
        </View> 

                    

    );
};

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        alignItems: 'center'
    },
    patientInfo: {
        height: '35%',
        width: '100%',
        alignItems: 'center'
    },
    Cardstyle: {
        width: '95%',
        alignItems: 'center',
        marginTop: '2%'
      

    },
    fullView: {
        height: '100%',
        width: '100%',
    }

})

export default AppointmentDetail;