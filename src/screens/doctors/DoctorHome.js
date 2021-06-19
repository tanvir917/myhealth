import React, { useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, FlatList, Image } from 'react-native';
import DoctorFile from '../../components/Doctors/DoctorFile'
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/UI/Card';
import ProfileNavigation from '../../ProfileNavigation';
import ButtonCom from "../../components/UI/ButtonCom";
import ButtonWithImage from "../../components/UI/ButtonWithImage";
import Colors from "../../constants/Colors";
import * as appointmentActions from '../../actionCreators/appointment';
import PatientItem from '../../components/Patients/PatientItem';
import FA from 'react-native-vector-icons/FontAwesome';

const DoctorHome = props =>  {
    const dispatch = useDispatch();
    const appointments = useSelector(
        state => state.appointment.appointments
    );
    const userInfo = useSelector(state => state.authM.userInfo)
    useEffect(() => {
      dispatch(appointmentActions.fetchAppointments())
    }, [])
    console.log('==============userInfo d h======================');
    console.log(userInfo);
    console.log('====================================');
    return (
      <ScrollView style={styles.fullView}>
        <View >
          <View >
              <View style={styles.parentView}>
                <View style={{ marginLeft: '5%', flexDirection: 'row' }}>
                    <Image style={styles.image}
                        source={{uri: "https://lh3.googleusercontent.com/a-/AOh14GjRCrYaP0qiRWz0fHxR2vj66CeMQBXEPzUBTlC5IQ=s96-c"}} 
                    />
                    <View style={{ marginLeft: 15}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginRight: 30}}>
                          <Text style={{ fontWeight: "bold", fontSize: 18, color: "black" }}
                              >{userInfo.name}
                          </Text>
                          <ButtonCom
                            title='Edit'
                            containerStyle={{backgroundColor: '#006df0', borderRadius: 20}}
                            buttonSize={{height: 38, marginLeft: 10, marginRight: 0, marginTop: 5, marginBottom: 10}}
                            textStyle={{color: 'white', paddingLeft: 10, paddingRight: 10}}
                            onSelect={() => {
                            }}
                          />
                        </View>
                        <View style={{marginTop: -30}}>
                          <Text style={{ color: "blue", fontSize: 14, paddingTop: 4, paddingBottom: 4 }}
                            >Role
                          </Text>
                          <View>
                            <Text style={{ paddingBottom: 5, paddingTop: 2 }}>Degree</Text>
                          </View>
                        </View>
                        <View style={{flexDirection: 'row', marginLeft: -7 }}>
                          <View style={styles.commonbutton}>
                              <ButtonWithImage
                                title='Call Now'
                                iconName='phone'
                                containerStyle={{backgroundColor: '#f9efe3'}}
                                buttonSize={{height: 40, width: 110}}
                                textStyle={{color: '#1c3f3f'}}
                                onSelect={() => {
                                }}
                              />
                          </View>
                          <View style={styles.commonbutton}>
                              <ButtonWithImage
                                title='Appointment'
                                iconName='calendar'
                                containerStyle={{backgroundColor: '#d6e7ff'}}
                                buttonSize={{height: 40, width: 140 }}
                                textStyle={{color: '#1c3f3f'}}
                                onSelect={() => {
                                }}
                              />
                          </View>
                      </View>
                    </View>
                    
                  </View>
                </View>
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
                        <Text style={{...styles.textStyle, marginLeft: 10}}>12</Text>
                      </View>
                      <View style={{...styles.text1, flexDirection: 'row', margin: 5, marginLeft: 25}}>
                        <FA name='female' size={15} color='pink'/>
                        <Text style={{...styles.textStyle, marginLeft: 10}}>7</Text>
                      </View>
                    </View>
                </Card>
            </View>
          </View>

          <View 
            style={{ backgroundColor: '#fff', borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
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
                  {/* <Card style={styles.commoncard}>
                      <View style={styles.text1}><Text>Fee</Text></View>
                      <View style={styles.text1}><Text>500 BDT</Text></View>
                  </Card> */}
            </View>
            <View style={{flexDirection: 'row', justifyContent:'space-between', marginLeft: 0, marginRight: 10}}>
              <ButtonCom
                title='Pending Appointment'
                containerStyle={{backgroundColor: '#006df0', borderRadius: 20}}
                buttonSize={{height: 38, marginLeft: 10, marginRight: 0, marginTop: 5, marginBottom: 10}}
                textStyle={{color: 'white', paddingLeft: 10, paddingRight: 10}}
                onSelect={() => {
                }}
              />
              <ButtonCom
                title='Appointment Request'
                containerStyle={{backgroundColor: 'white', borderRadius: 20, borderWidth: 2, borderColor: '#e5f2fe'}}
                buttonSize={{height: 38, marginLeft: 10, marginRight: 0, marginTop: 5, marginBottom: 10}}
                textStyle={{color: 'black', paddingLeft: 10, paddingRight: 10}}
                onSelect={() => {
                }}
              />
            </View>
            
            <View>
            <FlatList
              data={Object.values(appointments)} 
              numColumns={1}
              keyExtractor={item => item.id} 
              renderItem={itemData => <PatientItem 
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
            />
            </View>

          </View>
            
        </View>
    </ScrollView>
    );
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