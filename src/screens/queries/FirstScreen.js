import React, { useEffect, useState } from 'react';
import { View, Text, Button, TouchableOpacity, SafeAreaView, SafeAreaViewComponent, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import * as queryActions from '../../actionCreators/queries'
import Colors from '../../constants/Colors';
import DropDownPicker from 'react-native-dropdown-picker';
import Question from '../queries/Question';
import { database } from '../../firebase';

const FirstScreen = (props) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(queryActions.fetchMyQueries())
    }, [])
    const queries = useSelector(state => state.queries.myQueries);
    console.log('========================qq============');
    console.log(queries["precautions to take"]);
    console.log('====================================');
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);
    
  return (
    <View style={{margin: 10, height: '90%'}}>
        <ScrollView style={{height: '80%'}}>
            <View >
                <Question/>
            </View>
            <View >
                <Question/>
            </View>
            <View >
                <Question/>
            </View>
            <View >
                <Question/>
            </View>
        </ScrollView>
        <Button
            title="Add Doctors"
            onPress={() => {
                addDoctors();
            }}
        />
        <View 
            style={{height: 40, width: 100, margin: 10,
                backgroundColor: Colors.buttonColor, borderRadius: 10,
                justifyContent: 'center', alignItems: 'center'
            }}>
            <TouchableOpacity>
                <Text style={{fontWeight: 'bold', fontSize: 15,}}>
                    Submit
                </Text>
            </TouchableOpacity>
        </View>
    </View>

  );
}

export default FirstScreen;
