import React, { useEffect, useState } from "react";
import { ScrollView, View, Text, StyleSheet, FlatList, Image, Button, TouchableHighlight } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/UI/Card';
import ButtonCom from "../../components/UI/ButtonCom";
import ButtonWithImage from "../../components/UI/ButtonWithImage";
import Colors from "../../constants/Colors";
import * as appointmentActions from '../../actionCreators/appointment';
import * as authActions from '../../actionCreators/authM';
import PatientItem from '../../components/Patients/PatientItem';
import DoctorItem from '../../components/Doctors/DoctorItem';
import FA from 'react-native-vector-icons/FontAwesome';
import { database, auth } from '../../firebase'
import * as doctorActions from '../../actionCreators/doctorList';
import LogoTitle from '../LogoTitle';

const DoctorHome = props =>  {
    const dispatch = useDispatch();
    const [doctorInfo, setDoctorInfo] = useState();
    const userId = useSelector(state => state.authM.userId)
    const appointments = useSelector(
        state => state.appointment.appointments
    );
    //const dd = appointments ? Object.values(appointments) : null
    const apDataForPatientView = appointments && userId ? appointments.filter(prod => prod.patientId === userId) : undefined
    const appointmentData = appointments && userId ? appointments.filter(prod => prod.doctorId === userId) : undefined
    const userInfo = useSelector(state => state.authM.userInfo)
    console.log('==============userInfo======================');
    console.log(userInfo);
    console.log('====================================');
    const listOfDoctors = useSelector(state => state.doctorList.availableDoctors);
    
    useEffect(() => {
      dispatch(appointmentActions.fetchAppointments())
    }, [])
    useEffect(() => {
      setDoctorInfo(listOfDoctors.find( prod=>prod.id === userId))
    },[listOfDoctors, userId])
    useEffect(() => {
      dispatch(doctorActions.fetchDoctors())
    }, [])
    useEffect(() => {}, [appointments])

    const logout = () => {
      // setLogoutLoaderControl(true);
        auth.signOut().then(() => {
          dispatch(authActions.logout());
        });
        // setLogoutLoaderControl(false);
        props.navigation.navigate('Auth');
      // }, 1000);
    };

    const ExperienceSection = 
      <View 
        style={{ alignItems: 'center', 
          flexDirection: 'row', width: '95%', marginTop: '7%', marginBottom: '4%', 
          justifyContent: 'center', borderWidth: 1 , height: 90, borderRadius: 15, marginLeft: 10,
          borderColor: '#deeefe'
        }}>
            <Card style={styles.commoncard}>
                <View style={styles.text1}><Text>Experience</Text></View>
                <View style={styles.text1}><Text style={styles.textStyle}>25+ Years</Text></View>
            </Card>
            <Card style={styles.commoncard} >
                <View style={styles.text1}><Text>Opening</Text></View>
                <View style={styles.text1}><Text style={styles.textStyle}>10 am - 08 pm</Text></View>
            </Card>
            <Card style={styles.commoncard}>
                <View style={styles.text1}><Text>Fee</Text></View>
                <View style={styles.text1}><Text style={styles.textStyle}>500 BDT</Text></View>
            </Card>
      </View>
    
    const HeadSection = 
    <View style={styles.parentView}>
      <View style={{ marginLeft: '5%', flexDirection: 'row' }}>
          <Image style={styles.image}
              source={{uri: userInfo ? userInfo.avatar : (
                <FA name='user' size={35}/>
              )}}
          />
          <View style={{ marginLeft: 15}}>
            
              <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 30}}>
                <Text style={{ fontWeight: "bold", fontSize: 18, color: "black" }}
                    >{userInfo ? userInfo.isAdmin ? (doctorInfo ? doctorInfo.name : 'Name') : userInfo.name : 'Name'}
                </Text>
                <ButtonCom
                  title='Edit'
                  containerStyle={{backgroundColor: '#006df0', borderRadius: 20}}
                  buttonSize={{height: 38, width: 70, marginLeft: 70, marginRight: 0, marginTop: 5, marginBottom: 10}}
                  textStyle={{color: 'white', paddingLeft: 10, paddingRight: 10}}
                  onSelect={() => {
                    props.navigation.navigate('EditProfile')
                  }}
                />
              </View>
              <View style={{marginTop: -30}}>
                <Text style={{ color: "blue", fontSize: 14, paddingTop: 4, paddingBottom: 4 }}
                  >{userInfo ? userInfo.isAdmin ? (doctorInfo ? doctorInfo.role : 'Role') : userInfo.email : 'Role'}
                </Text>
                <View>
                  <Text style={{ paddingBottom: 5, paddingTop: 2 }}>{userInfo ? userInfo.isAdmin ? (doctorInfo ? doctorInfo.degree : 'Degree') : userInfo.phone : 'Degree'}</Text>
                </View>
              </View>
          </View>
          
        </View>
        <Button title="Logout" onPress={logout}/>
      </View>
  const PatientView = 
  <FlatList
    data={apDataForPatientView}
    numColumns={1}
    keyExtractor={item => item.id} 
    renderItem={itemData => <PatientItem 
        image={itemData.item.doctorImage}
        name={itemData.item.doctorName}
        address={itemData.item.slot}
        appStatus={itemData.item.appStatus}
        onSelectCall={() => {
          props.navigation.navigate('CheckAuth', {
              patientEmail: userInfo.email,
              patientName: itemData.item.doctorName 
          })
          }}
        onSelect={() => {
            props.navigation.navigate('AppointmentDetail', {
              patientId: userId,
              patientName: userInfo.name,
              doctorId: itemData.item.doctorId,
              doctorName: itemData.item.doctorName,
              doctorImage: itemData.item.doctorImage,
              hospitalId: itemData.item.hospitalId,
              appDate: itemData.item.date,
              appTime: itemData.item.slot,         
            });
        }}
    />} 
  />

  const DoctorView = 
  <FlatList
    data={appointmentData}
    numColumns={1}
    keyExtractor={item => item.id} 
    renderItem={itemData => <PatientItem 
        image={itemData.item.doctorImage}
        name={itemData.item.patientName}
        address={itemData.item.slot}
        appStatus={itemData.item.appStatus}
        onSelectCall={() => {
          props.navigation.navigate('CheckAuth', {
              patientEmail: userInfo.email,
              patientName: itemData.item.patientName
          })
          }}
        onSelect={() => {
            props.navigation.navigate('AppointmentDetail', {
              patientId: userId,
              patientName: userInfo.name,
              doctorId: itemData.item.doctorId,
              doctorName: itemData.item.doctorName,
              doctorImage: itemData.item.doctorImage,
              hospitalId: itemData.item.hospitalId,
              appDate: itemData.item.date,
              appTime: itemData.item.slot,         
            });
        }}
    />} 
  />

  const DetailsSection = 
  <View style={{ alignItems: 'center', flexDirection: 'row', width: '100%', marginTop: '3%', marginBottom: '4%', justifyContent: 'center' }}>
    <Card style={styles.commoncard}>
        <View style={styles.text1}><Text style={styles.textStyle}>Chamber</Text></View>
        <View style={styles.text1}><Text>Mohakhali, Dhaka</Text></View>
    </Card>
    <Card style={styles.commoncard} >
        <View style={styles.text1}><Text style={styles.textStyle}>Todays Appointments</Text></View>
        <View style={{flexDirection: 'row'}}>
          <View style={{...styles.text1, flexDirection: 'row', margin: 5}}>
            <FA name='male' size={15} color='blue'/>
            <Text style={{...styles.textStyle, marginLeft: 10}}>{appointmentData ? appointmentData.length : 0}</Text>
          </View>
          <View style={{...styles.text1, flexDirection: 'row', margin: 5, marginLeft: 25}}>
            <FA name='female' size={15} color='pink'/>
            <Text style={{...styles.textStyle, marginLeft: 10}}>0</Text>
          </View>
        </View>
      </Card>
  </View>

    return (
      <ScrollView style={styles.fullView}>
        <View >
          <View >
            {HeadSection}
            {userInfo && userInfo.isAdmin ? 
            (
              DetailsSection
            ) : (
              null
            )}
          </View>

            <View 
              style={{ backgroundColor: '#fff', borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
            {userInfo && userInfo.isAdmin ? (
              ExperienceSection
            ) : (
            null
          )}
            <View style={{flexDirection: 'row', justifyContent:'space-between', marginLeft: 0, marginRight: 10}}>
              <ButtonCom
                title='Pending Appointment'
                containerStyle={{backgroundColor: '#006df0', borderRadius: 20}}
                buttonSize={{height: 38, marginLeft: 10, marginRight: 0, marginTop: 5, marginBottom: 10}}
                textStyle={{color: 'white', paddingLeft: 10, paddingRight: 10}}
                onSelect={() => {
                }}
              />
              {userInfo && userInfo.isAdmin ? (
              <ButtonCom
                title='Appointment Request'
                containerStyle={{backgroundColor: 'white', borderRadius: 20, borderWidth: 2, borderColor: '#e5f2fe'}}
                buttonSize={{height: 38, marginLeft: 10, marginRight: 0, marginTop: 5, marginBottom: 10}}
                textStyle={{color: 'black', paddingLeft: 10, paddingRight: 10}}
                onSelect={() => {
                }}
              />) : null}
            </View>
            
            {userInfo && userInfo.isAdmin ? (
            <View>
              {DoctorView}
            </View>
            ) : (
              <View>
                {apDataForPatientView ? (
                  PatientView
                ) : (null)}
              </View>
            )}
          </View>
            
        </View>
    </ScrollView>
    );
}

DoctorHome.navigationOptions = (navData) => {
  return {
      headerTitle: 'Profile',
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
    parentView: {
        paddingTop: '8%',
        flex: 1,
    },

    image: {
        width: 100,
        height: 100,
        borderRadius: 20,
        overflow: "hidden",
        paddingTop: '0.5%',

    },
    Cardstyle: {
        width: '95%',
        alignItems: 'center',
        marginTop: '2%'
    },
    commoncard: {
        backgroundColor: '#ffffff',
        height: 65,
        maxHeight: 100,
        padding: '3.5%', 
        marginLeft: '1.5%',  
        borderWidth: 2,
        borderColor: '#e2f0fe',
        alignItems: 'center',
        justifyContent: 'center'
    }
    ,
    commonbutton: {
      marginRight: -15
    },
    fullView: {
        height: '100%',
        width: '100%',
        backgroundColor: Colors.backgroundColor
    },
    text1: {
      marginBottom: 5
    },
    textStyle: {
      fontSize: 14,
      fontWeight: 'bold'
    }

})

export default DoctorHome;