import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonCom from '../../components/UI/ButtonCom'
import PatientInfo from '../../components/Doctors/PatientInfo'
import LogoTitle from '../LogoTitle';


const ConfirmAppointment = props => {
    const appointments = useSelector(state => state.appointment.appointments);
    console.log('====================apms================');
    console.log(appointments);
    console.log('====================================');
    const userInfo = useSelector(state => state.authM.userInfo);
    const patientName = userInfo.name
    const patientId = userInfo.id
    const patientEmail = userInfo.email
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
                    appointmentDate={appointments.date}
                    appointmentTime={appointments.slot}
                    patientImage={userInfo.avatar}
                    patientName={userInfo.name}
                    patientContact={userInfo.phone}
                    doctorFee='500 BDT'
                    patientAddress={userInfo.address}
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
ConfirmAppointment.navigationOptions = (navData) => {
    return {
        headerTitle: 'Confirmed Appointment',
        headerRight:
          () => 
          <TouchableHighlight 
              onPress={() => navData.navigation.toggleDrawer()}
              style={{margin: 10, height: 50, width: 50}}
              activeOpacity={.2} >
          <LogoTitle
              style={[{ color: 'blue' }]}
              size={15}
          /></TouchableHighlight>,
    };
}

const styles = StyleSheet.create({
    patientInfo: {
        height: '45%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ConfirmAppointment;