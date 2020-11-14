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
 import {Calendar} from 'react-native-calendars';
 import TimeSlot from '../../components/Doctors/TimeSlot'
import Card from '../../components/UI/Card';

const jsonData = { "slots" : {
    "slot1": "9:00am to 9:30am",
    "slot2": "9:30am to 10:00am",
    "slot3": "10:00am to 10:30am",
    "slot4": "10:30am to 11:00am",
 }
}
const BookAppointment = props => {
    const [isPressed, setIsPressed] = useState(false);
    const handlePressed = () => setIsPressed(!isPressed);
    useEffect(() => {
        console.log('effect: ',isPressed);
    }, [isPressed]);
    const slots = jsonData.slots
    const slotsarr = Object.keys(slots).map( function(k) {
      return (  <View key={k} style={{margin:5}}>
                  <TimeSlot
                    onSelect={() => {
                        handlePressed()
                        console.log('...............button pressed..................')
                        console.log(isPressed);
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
                        <Calendar
                        onDayPress={() => {}}
                        style={styles.calendar}
                        hideExtraDays
                        //markedDates={{[state.selected]: {selected: true}}}
                        theme={{
                            selectedDayBackgroundColor: 'green',
                            todayTextColor: 'green',
                            arrowColor: 'green',
                        }}
                        />
                    </Card>
                </View>
                {slotsarr}
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
        width: '90%'
    }
  });

 export default BookAppointment;