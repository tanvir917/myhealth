import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector } from 'react-redux';

const AppointmentDetail = props => {
    const patientId = props.navigation.getParam('patientId');
    const patientName = props.navigation.getParam('patientName');
    const doctorId = props.navigation.getParam('doctorId');
    const doctorName = props.navigation.getParam('doctorName');
    const hospitalId = props.navigation.getParam('hospitalId');
    const appDate = props.navigation.getParam('appDate');
    const appTime = props.navigation.getParam('appTime');
    return (
        <View>
            <Text>{patientId}</Text>
            <Text>{patientName}</Text>
            <Text>{doctorId}</Text>
            <Text>{doctorName}</Text>
            <Text>{hospitalId}</Text>
            <Text>{appDate.toString().slice(0, 15)}</Text>
            <Text>{appTime}</Text>
            <Button 
                    title="Video Call"
                    onPress={() => {
                      props.navigation.navigate('CheckAuth')
                    }}
            />
        </View>
    );
};

export default AppointmentDetail;