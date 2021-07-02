import React from "react";
import { ScrollView, View, Text, StyleSheet, Button, Image } from 'react-native';
import DoctorFile from '../../components/Doctors/DoctorFile'
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/UI/Card';
import ProfileNavigation from '../../ProfileNavigation';

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
                <Card style={styles.Cardstyle}>

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
                <View style={styles.commonbutton}>

                    <Button title='Call Now'></Button>
                </View>
                <View style={styles.commonbutton}>

                    <Button title='Live Chat'></Button>
                </View>
                <View style={styles.commonbutton}>

                    <Button 
                        title='Appointment'
                        onPress={() => {
                            props.navigation.navigate('BookAppointment', {
                                doctorId,
                                hospitalId,
                                slots: hospitalData.slots
                            })
                        }}
                    ></Button>
                </View>


            </View>
        </View>
        <View style={styles.profileContainer}>
            <ProfileNavigation />
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    parentView: {
        paddingTop: '8%',
        flex: 1,
        justifyContent: 'center',
        height: '50%',
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