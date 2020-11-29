import React from 'react';
import { 
    SafeAreaView,
    FlatList,
    StyleSheet,
    View, Text, Button
  } from 'react-native';

import { useSelector } from 'react-redux';
import DoctorItem from '../../components/Doctors/DoctorItem';

const MyAppointment = props => {
    const appointments = useSelector(
        state => state.appointment.appointments
    );
    console.log('====================================');
    console.log(appointments);
    console.log('====================================');
    return (
        
        <SafeAreaView style={styles.container}>
            {appointments.length === 0 ? 
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <Text 
                    style={{fontSize: 22, fontWeight: 'bold'}}
                >No Appointments Found</Text>
  
            </View> 
        : 
          <FlatList
            data={appointments} 
            numColumns={1}
            keyExtractor={item => item.id} 
            renderItem={itemData => <DoctorItem 
                image={itemData.item.doctorImage}
                name={itemData.item.doctorName}
                role={itemData.item.doctorRole}
                degree={itemData.item.date.toString().slice(0, 15)}
                address={itemData.item.slot}
                appStatus={itemData.item.appStatus}
                onSelect={() => {
                    props.navigation.navigate('AppointmentDetail', {
                      patientId: itemData.item.patientId,
                      patientName: itemData.item.patientName,
                      doctorId: itemData.item.doctorId,
                      doctorName: itemData.item.doctorName,
                      doctorImage: itemData.item.doctorImage,
                      hospitalId: itemData.item.hospitalId,
                      appDate: itemData.item.date,
                      appTime: itemData.item.slot,
                      
                    });
                }}
            />} 
          /> }
        </SafeAreaView>
      );
    
  };

  const styles = StyleSheet.create({
    
  });

export default MyAppointment; 