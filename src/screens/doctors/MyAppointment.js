import React, { useEffect } from 'react';
import { 
    SafeAreaView,
    FlatList,
    StyleSheet,
    View, Text, TouchableHighlight, Image
  } from 'react-native';

import { useSelector, useDispatch } from 'react-redux';
import DoctorItem from '../../components/Doctors/DoctorItem';
import * as appointmentActions from '../../actionCreators/appointment';

const MyAppointment = props => {
  const dispatch = useDispatch();

    const userId = useSelector(state => state.authM.userId)
    const userInfo = useSelector(state => state.authM.userInfo)
    const appointments = useSelector(
        state => state.appointment.appointments
    );
    const dd = appointments ? Object.values(appointments) : null
    const apDataForPatientView = dd && userId ? dd.filter(prod => prod.patientId === userId) : null
    const appointmentData = dd && userId ? dd.filter(prod => prod.doctorId === userId) : null

    useEffect(() => {
      dispatch(appointmentActions.fetchAppointments())
    }, [])
    console.log('==============myappointments======================');
    console.log(Object.values(appointments));
    console.log('====================================');
    const userEmail = useSelector(state => state.authM.email);
    const userName = useSelector(state => state.authM.displayName);
    console.log('.........user from login.........');
    console.log(userEmail);
    console.log(userName);
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
            data={userInfo && userInfo.isAdmin ? appointmentData : apDataForPatientView} 
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
                      patientId: userEmail,
                      patientName: userName,
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