import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonCom from '../../components/UI/ButtonCom'
import PatientInfo from '../../components/Doctors/PatientInfo'

const ConfirmAppointment = props => {
    const appointments = useSelector(state => state.appointment.appointments);
    console.log('====================================');
    console.log(appointments);
    console.log('====================================');
    return (
        <View style={{}}>
            <View style={{margin: 15, marginLeft: 25, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: 'green'}}>Appointment Confirmed</Text>
                <View style={{}}>
                    <Text style={{margin: 15, fontSize: 18, color: 'black'}}>Your appointment has been recorded successfully.</Text>
                </View>
            </View>
            <View style={styles.patientInfo}>
                <PatientInfo    
                    patientImage="https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg"
                    patientName='Tanvir Islam'
                    appointmentDate={appointments.date}
                    appointmentTime={appointments.slot}
                    patientContact='+01714112961'
                    doctorFee='500 BDT'
                    patientAddress='Modhubag, Mogbazar, Dhaka'
                    info='Patient Information'
                />
            </View>
            <ButtonCom
                title='Go To My Appointments'
                containerStyle={{backgroundColor: 'blue'}}
                buttonSize={{height: 44, width: '90%'}}
                textStyle={{color: 'white'}}
                onSelect={() => {
                    props.navigation.navigate('MyAppointment')
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    patientInfo: {
        height: '45%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ConfirmAppointment;