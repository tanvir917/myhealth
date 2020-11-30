import React from 'react';
import { 
    SafeAreaView,
    FlatList,
    StyleSheet,
    View, Text, TouchableHighlight, Image
  } from 'react-native';

import { useSelector } from 'react-redux';
import DoctorItem from '../../components/Doctors/DoctorItem';
//import { HeaderBackButton } from "react-navigation-stack";

const MyAppointment = props => {
    const appointments = useSelector(
        state => state.appointment.appointments
    );
    console.log('====================================');
    console.log(appointments);
    console.log('====================================');
    return (   
        <SafeAreaView>
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

  class LogoTitle extends React.Component {
    render() {
      return (
        <View style={styles.drawer}>
            <Image
                source={require('../../image/icons8-menu-24.png')}
                style={{ width: 30, height: 30, margin: 10, padding: 10 }}
            />
        </View>
      );
    }
  }

MyAppointment.navigationOptions = navData => {
    console.log('====================================');
    console.log(navData);
    console.log('====================================');
    return {
        headerTitle: 'My Appointment',
        headerRight:
            () => 
            <TouchableHighlight 
                onPress={() => navData.navigation.toggleDrawer()}
                activeOpacity='0'>
            <LogoTitle
                style={[{ color: 'blue', marginRight: 12 }]}
                size={15}
            /></TouchableHighlight>,
        // headerLeft:
        //   (<HeaderBackButton
        //     onPress={() => navigation.navigate('ConfirmAppointment')}
        //   />)
        
    }
};

  const styles = StyleSheet.create({
    
  });

export default MyAppointment; 