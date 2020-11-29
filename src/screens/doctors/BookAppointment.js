import React, { useState, useEffect } from 'react';
import { 
    ScrollView,
    View,
    Text,
    Alert,
    Button,
    StyleSheet,
    FlatList,
    TouchableOpacity,
 } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import TimeSlot from '../../components/Doctors/TimeSlot'
import Card from '../../components/UI/Card';
import CalendarPicker from 'react-native-calendar-picker';
import * as appointmentActions from '../../actionCreators/appointment';
import ButtonCom from '../../components/UI/ButtonCom'

// const jsonData = { "slots" : {
//     "slot1": "9:00am to 9:30am",
//     "slot2": "9:30am to 10:00am",
//     "slot3": "10:00am to 10:30am",
//     "slot4": "10:30am to 11:00am",
//  }
// }
const slotData = [
    {
    id: "slot1",
    slot: "9:00am to 9:30am",
    },
    {
    id: "slot2",
    slot: "9:30am to 10:00am",
    },
    {
    id: "slot3",
    slot: "10:00am to 10:30am",
    }
  ];

const BookAppointment = props => {
    const doctorId = props.navigation.getParam('doctorId');
    const hospitalId = props.navigation.getParam('hospitalId');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedbtn, setSelectedbtn] = useState(null);

    // const [isPressed, setIsPressed] = useState(false);
    // const handlePressed = () => {
    //     setIsPressed(!isPressed);
    // };
    const onBtnPress = (id) => {
        setSelectedbtn(id)
    }
    // useEffect(() => {
    //     console.log('effect: ',isPressed);
    // }, [isPressed]);

    const onDateChange = (date) => {
        //function to handle the date change
        setSelectedDate(date);
    };
    
    // const slots = jsonData.slots
    // const slotsarr = Object.keys(slots).map( function(k) {
    //   return (  <View key={k} style={{margin:5}}>
    //               <TimeSlot
    //                 onSelect={() => {
    //                     handlePressed()
    //                     console.log('...............button pressed..................')
    //                     console.log(slots[k]);
    //                 }}
    //                 color= {isPressed === false ? 'blue' : 'grey'}
    //                 title={slots[k]}
    //               />
    //             </View>)
    // });
    const dispatch = useDispatch();
     return (
         <ScrollView>
            <View>
                <View style={styles.container}>
                    <Card style={styles.card}>
                    <CalendarPicker
                        startFromMonday={true}
                        minDate={new Date(2018, 1, 1)}
                        maxDate={new Date(2050, 6, 3)}
                        weekdays={
                            [
                            'Mon', 
                            'Tue', 
                            'Wed', 
                            'Thur', 
                            'Fri', 
                            'Sat', 
                            'Sun'
                            ]}
                        months={[
                            'January',
                            'Febraury',
                            'March',
                            'April',
                            'May',
                            'June',
                            'July',
                            'August',
                            'September',
                            'October',
                            'November',
                            'December',
                        ]}
                        previousTitle="Previous"
                        nextTitle="Next"
                        todayBackgroundColor="#e6ffe6"
                        selectedDayColor="#66ff33"
                        selectedDayTextColor="#000000"
                        scaleFactor={375}
                        textStyle={{
                            fontFamily: 'Cochin',
                            color: '#000000',
                        }}
                        onDateChange={onDateChange}
                    />
                    </Card>
                    <View style={styles.textStyle}>
                        <Text style={styles.textStyle}>
                            Selected Date :
                        </Text>
                        <Text style={styles.textStyle}>
                            {selectedDate ? selectedDate.toString() : ''}
                            {console.log(selectedDate)}
                        </Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.slotText}>Available Slots: </Text>
                    <FlatList
                        extractData={selectedbtn}
                        data={slotData}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress={() => {
                                    onBtnPress(item.id)
                                    console.log('====================================');
                                    console.log(item.id);
                                    console.log('====================================');
                                }}>
                                <Card
                                    style={{}}
                                    basicStyle = {{
                                        height: 60,
                                        alignItems: 'center', 
                                        justifyContent: 'center',
                                        margin: 7,
                                        borderRadius: 5
                                    }}
                                    containerStyle={selectedbtn === item.id ? {
                                        backgroundColor: '#a1a1a1',
                                    } : {backgroundColor: 'white'}}>
                                        <Text style={{fontSize: 25}}>{item.slot}</Text>
                                </Card>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <ButtonCom
                        title="Continue"
                        buttonSize={{height: 44, width: '90%'}}
                        containerStyle={{backgroundColor: 'blue'}}
                        textStyle={{color: 'white'}}
                        onSelect={() => {
                            //dispatch(appointmentActions.addAppointment(selectedDate, selectedbtn, doctorId, hospitalId));
                            props.navigation.navigate('CheckAppointment', {
                                doctorId,
                                hospitalId,
                                selectedDate,
                                selectedbtn: slotData.find(prod => prod.id === selectedbtn)
                            })
                        }}
                    />
            </View>
         </ScrollView>
     );
 };

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      borderRadius: 17
    },
    profileContainer: {
        flex: 1,
        backgroundColor: "#eef",
        flexDirection: "column",
        margin: '3%'
      },
    calendar: {
      borderTopWidth: 1,
      paddingTop: 5,
      borderBottomWidth: 1,
      borderColor: '#eee',
      height: 350
    },
    slotButton: {
        
    },
    card: {
        width: '98%'
    },
    textStyle: {
        marginTop: 10,
    },
    slotText: {
        marginLeft: 10,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
    }
  });

 export default BookAppointment;