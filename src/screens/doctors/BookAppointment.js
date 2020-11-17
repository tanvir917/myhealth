import React, { useState,useEffect } from 'react';
import { 
    ScrollView,
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    Alert
 } from 'react-native';
import TimeSlot from '../../components/Doctors/TimeSlot'
import Card from '../../components/UI/Card';
import ProfileNavigation from '../../ProfileNavigation';
import CalendarPicker from 'react-native-calendar-picker';

const jsonData = { "slots" : {
    "slot1": "9:00am to 9:30am",
    "slot2": "9:30am to 10:00am",
    "slot3": "10:00am to 10:30am",
    "slot4": "10:30am to 11:00am",
 }
}
const BookAppointment = props => {
    const [selectedDate, setSelectedDate] = useState(null);

    const [isPressed, setIsPressed] = useState(false);
    const handlePressed = () => {
        setIsPressed(!isPressed);
    };
    useEffect(() => {
        console.log('effect: ',isPressed);
    }, [isPressed]);

    const onDateChange = (date) => {
        //function to handle the date change
        setSelectedDate(date);
    };
    
    const slots = jsonData.slots
    const slotsarr = Object.keys(slots).map( function(k) {
      return (  <View key={k} style={{margin:5}}>
                  <TimeSlot
                    onSelect={() => {
                        handlePressed()
                        console.log('...............button pressed..................')
                        console.log(slots[k]);
                    }}
                    color= {isPressed === false ? 'blue' : 'grey'}
                    title={slots[k]}
                  />
                </View>)
    });
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
                {slotsarr}
                <View style={styles.profileContainer}>
                    <ProfileNavigation />
                </View>
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
  });

 export default BookAppointment;