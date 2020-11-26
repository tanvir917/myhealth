import React from "react";
import { ScrollView, View, Text, StyleSheet, Button, Image } from 'react-native';
import DoctorFile from '../../components/Doctors/DoctorFile'
import { useSelector, useDispatch } from 'react-redux';
import Card from '../../components/UI/Card';

const DoctorProfile = props =>  {
    const doctorId = props.navigation.getParam('doctorId');
    const hospitalId = props.navigation.getParam('hospitalId');
    // const doctorData = useSelector(state => 
    //     state.doctorList.availableDoctors.find(prod => prod.id === doctorId)
    // );
    console.log('====================================');
    console.log(doctorId);
    console.log('====================================');
    return (
        <ScrollView>

        <View style={{ alignItems: 'center', height: '100%', overflow: 'visible' }}>
            <View style={{ height: '90%', backgroundColor: 'red' }}>
                <Card style={styles.Cardstyle}>

                    <View style={styles.parentView}>
                        <View style={{ paddingTop: '5%', paddingBottom: '4%' }}><Image style={styles.image}
                            source={require('../../image/icont.png')} />
                        </View>
                        <View style={{
                            fontSize: 25, color: "blue", justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Text style={{ fontWeight: "bold", fontSize: 25, color: "black" }}>Dr. Ariana Bosking</Text>
                            <View><Text style={{ color: "blue", fontSize: 18, paddingTop: 2, paddingBottom: 2 }}>Cancer Sergon</Text></View>
                        </View>

                        <View><Text style={{ paddingBottom: 10, paddingTop: 2 }}>FCPS, MBBS (Surgery) Dhaka Medical</Text></View>

                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', width: '100%', paddingLeft: '2%', paddingRight: '2%', paddingBottom: 20 }}>
                        <Card style={styles.commoncard1}>
                            <View><Text>Experience1</Text></View>
                            <View><Text>Experience2</Text></View>
                        </Card>
                        <Card style={styles.commoncard2} >
                            <View><Text>Experience3</Text></View>
                            <View><Text>Experience4</Text></View>
                        </Card>
                        <Card style={styles.commoncard3}>
                            <View><Text>Experience5</Text></View>
                            <View><Text>Experience6</Text></View>
                        </Card>
                    </View>


                </Card>
            </View>
            <View style={{ marginTop: '3%', flexDirection: 'row' }}>
                <View style={styles.commonbutton1}>

                    <Button title='Call Now'></Button>
                </View>
                <View style={{ backgroundColor: '#34C85B', borderRadius: 5 }}>

                    <Button title='Live Chat'></Button>
                </View>
                <View style={{ backgroundColor: '#006DF0', borderRadius: 5 }}>

                    <Button 
                        title='Appointment'
                        onPress={() => {
                            props.navigation.navigate('BookAppointment', {
                                doctorId,
                                hospitalId
                            })
                        }}
                    ></Button>
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
        height: '100%',
        width: '85%',
        alignItems: 'center',
        marginTop: '2%'
      

    },
    commoncard1: {
        backgroundColor: '#F4F9FF',
        height: '100%',
        padding: '3%'      
    },
    commoncard2: {
        backgroundColor: '#F4F9FF',
        height: '100%',
        padding: '3%', 
        marginLeft: '2.5%',
        
        
    }, commoncard3: {
        backgroundColor: '#F4F9FF',
        height: '100%',
        padding: '3%',
        marginLeft: '2.5%',
     

    }
    ,
    commonbutton1: {
        backgroundColor: '#F4F9FF',
        height: '100%',
        padding: '3%',
        borderRadius: 5

    },
    commonbutton2: {
        backgroundColor: '#F4F9FF',
        height: '100%',
        padding: '3%',
         marginLeft: '2.5%',
        borderRadius: 5
    }, commonbutton3: {
        backgroundColor: '#F4F9FF',
        height: '100%',
        padding: '3%',
        marginLeft: '2.5%',
        borderRadius: 5

    }

})

export default DoctorProfile;