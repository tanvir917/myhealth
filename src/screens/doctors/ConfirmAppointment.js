import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';

const ConfirmAppointment = props => {
    const appointments = useSelector(state => state.appointment.appointments);
    console.log('====================================');
    console.log(appointments);
    console.log('====================================');
    return (
        <View>
            <Text>Appointment Confirmed</Text>
            <Button
                title='Go To My Appointments'
                style={{margin: 10}}
                onPress={() => {
                    props.navigation.navigate('MyAppointment')
                }}
            />
        </View>
    );
};

export default ConfirmAppointment;