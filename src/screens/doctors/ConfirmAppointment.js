import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';
import ButtonCom from '../../components/UI/ButtonCom'

const ConfirmAppointment = props => {
    const appointments = useSelector(state => state.appointment.appointments);
    console.log('====================================');
    console.log(appointments);
    console.log('====================================');
    return (
        <View style={{marginLeft: 25 ,justifyContent: 'center'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Appointment Confirmed</Text>
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

export default ConfirmAppointment;