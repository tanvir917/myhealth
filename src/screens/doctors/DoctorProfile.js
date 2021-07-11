import React from "react";
import { ScrollView, View, Text, StyleSheet, Button, Image, Alert, TouchableHighlight } from 'react-native';
import DoctorFile from '../../components/Doctors/DoctorFile'
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/UI/Card';
import ProfileNavigation from '../../ProfileNavigation';
import ButtonCom from "../../components/UI/ButtonCom";
import LogoTitle from "../LogoTitle";

const DoctorProfile = props =>  {
    const doctorId = props.navigation.getParam('doctorId');
    const hospitalId = props.navigation.getParam('hospitalId');
    const doctorData = useSelector(state => 
        state.doctorList.availableDoctors.find(prod => prod.id === doctorId)
    );
    
    const hosData = Object.values(doctorData.hospital)
    const hospitalData = hosData.find(h => h.id === hospitalId)
    return (
        <ScrollView style={styles.fullView}>
        <View style={{ alignItems: 'center', overflow: 'visible' }}>
            <View >
                <Card style={{...styles.Cardstyle, backgroundColor: 'white'}}>

                    <View style={styles.parentView}>
                        <View style={{ margin: '5%' }}>
                            <Image style={styles.image}
                                source={{uri: doctorData.imageUrl}} 
                            />
                        </View>
                        <View 
                            style={{
                                fontSize: 20, color: "blue", 
                                justifyContent: 'center', 
                                alignItems: 'center'
                        }}>
                            <Text 
                                style={{ fontWeight: "bold", fontSize: 25, color: "black" }}
                                >{doctorData.name}
                            </Text>
                            <View>
                                <Text 
                                    style={{ color: "blue", fontSize: 18, paddingTop: 2, paddingBottom: 2 }}
                                >{doctorData.role}</Text>
                            </View>
                        </View>

                        <View>
                    <Text style={{ paddingBottom: 10, paddingTop: 2 }}>{doctorData.degree}</Text>
                        </View>

                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', width: '100%', margin: '5%' }}>
                        <Card style={styles.commoncard}>
                            <View><Text>Experience</Text></View>
                            <View><Text>25+ Years</Text></View>
                        </Card>
                        <Card style={styles.commoncard} >
                            <View><Text>Opening</Text></View>
                            <View><Text>10 am - 08 pm</Text></View>
                        </Card>
                        <Card style={styles.commoncard}>
                            <View><Text>Fee</Text></View>
                            <View><Text>500 BDT</Text></View>
                        </Card>
                    </View>


                </Card>
            </View>
            <View style={{ margin: '3%', flexDirection: 'row' }}>

                    <ButtonCom 
                        title="Call Now"
                        containerStyle={{backgroundColor: 'white'}}
                        buttonSize={{height: 44, width: '30%', marginRight: 15}}
                        textStyle={{color: 'black'}}
                        onPress={() => {
                            Alert.alert('Need to take appointment')
                        }}
                    />

                    <ButtonCom
                        title='Appointment'
                        containerStyle={{backgroundColor: 'white'}}
                        buttonSize={{height: 44, width: '30%'}}
                        textStyle={{color: 'black'}}
                        onSelect={() => {
                            props.navigation.navigate('BookAppointment', {
                                doctorId,
                                hospitalId,
                                slots: hospitalData.slots
                            })
                        }}
                    />


            </View>
        </View>
        <View style={styles.profileContainer}>
            <ProfileNavigation />
        </View>
    </ScrollView>
    );
}

DoctorProfile.navigationOptions = navData => {
    return {
        headerTitle: 'Doctor Profile',
        headerRight:
            () => 
            <TouchableHighlight 
                onPress={() => navData.navigation.toggleDrawer()}
                style={{margin: 15, height: 50, width: 50}}
                activeOpacity='0'>
                <LogoTitle
                    style={[{ color: 'blue'}]}
                    size={15}
                />
            </TouchableHighlight>,
    }
  };

const styles = StyleSheet.create({
    parentView: {
        paddingTop: '8%',
        flex: 1,
        justifyContent: 'center',
        height: '50%',
        width: '90%',
        alignItems: 'center',

    },

    image: {
        width: 150,
        height: 150,
        borderRadius: 20,
        overflow: "hidden",
        borderWidth: 3,
        paddingTop: '1%',

    },
    Cardstyle: {
        width: '95%',
        alignItems: 'center',
        marginTop: '2%'
    },
    commoncard: {
        backgroundColor: '#F4F9FF',
        height: 50,
        maxHeight: 100,
        padding: '3%', 
        marginLeft: '2.5%',  
        borderWidth: 1, justifyContent: 'center',
        alignItems: 'center'
    }
    ,
    commonbutton: {
        backgroundColor: '#F4F9FF',
        height: '100%',
        margin: '2%',
        borderRadius: 5
    },
    fullView: {
        height: '100%',
        width: '100%'
    }

})

export default DoctorProfile;