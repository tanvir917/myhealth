import React from 'react';
import { 
    SafeAreaView,
    FlatList,
    StyleSheet,
    View, Text
  } from 'react-native';

import { useSelector } from 'react-redux';
import DoctorItem from '../../components/Doctors/DoctorItem';

const MyAppointment = props => {
    const appointments = useSelector(
        state => state.appointment.appointments
    );
    
    return (
        <SafeAreaView style={styles.container}>
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
                onSelect={() => {
                    // props.navigation.navigate('FindChamber', {
                    //   doctorId: itemData.item.id,
                    //   hospitalId: itemData.item.hospital,
                    //   doctorName: itemData.item.name
                    // });
                }}
            />} 
        />
        </SafeAreaView>
      );
    
  };

  const styles = StyleSheet.create({
    item: {
      backgroundColor: '#f9c2ff',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
  });

export default MyAppointment; 