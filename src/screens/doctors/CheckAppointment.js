import React from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as appointmentActions from '../../actionCreators/appointment';

const CheckAppointment = props => {
    const doctorId = props.navigation.getParam('doctorId');
    const hospitalId = props.navigation.getParam('hospitalId');
    const selectedDate = props.navigation.getParam('selectedDate');
    const selectedbtn = props.navigation.getParam('selectedbtn');
    const doctorData = useSelector(state => 
        state.doctorList.availableDoctors.find(prod => prod.id === doctorId)
    );
    //date = selectedDate.slice(0, 10);
    hospitalData = doctorData.hospital.find(prod => prod.id = hospitalId);
    const dispatch = useDispatch();
    return (
        <View>
            <Text>{doctorData.name}</Text>
            <Text>{doctorData.role}</Text>
            <Text>{doctorData.degree}</Text>
            <Text>{hospitalData.title}</Text>
            <Text>{hospitalData.location}</Text>
            <Text>{selectedDate.toString()}</Text>
            <Text>{selectedbtn.slot}</Text>
            <Button 
                title='Confirm'
                style={{margin: 10}}
                onPress={() => {
                    dispatch(appointmentActions.addAppointment(
                        doctorData.name, doctorData.role, 
                        appStatus = 0, doctorData.imageUrl, 
                        selectedDate, selectedbtn.slot, 
                        hospitalData.location, doctorId, hospitalId
                    ));
                    props.navigation.navigate('ConfirmAppointment')
                }}
            />
        </View>
    );
};

export default CheckAppointment;