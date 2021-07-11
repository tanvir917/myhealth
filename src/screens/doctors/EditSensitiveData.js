import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {View, StyleSheet, TextInput, Text, Button} from 'react-native';
import { database } from '../../firebase';

const EditSensitiveData = () => {
    const [sensitivity, setSensitivity] = useState(null);
    const [resistance, setResistance] = useState(null);
    const [allergy, setAllergy] = useState(null);
    const userInfo = useSelector(state => state.authM.userInfo)
    const userId = useSelector(state => state.authM.userId)

    const submitHandler =  () => {
        // setError(null);
        // setIsLoading(true);
        try {
            database.ref(`users/${userId}`).child('sdata').update(
                {
                    sensitivity: sensitivity,
                    resistance: resistance,
                    allergy: allergy,
                }
            )
            props.navigation.navigate('doctorsList');
        } catch (err) {
            // setError(err.message);
        }
        // setIsLoading(false);   
    };

    return (
        <View style={{ margin: 20 }}>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>Drug Sensitivity</Text>
            <TextInput
                keyboardType='default'
                autoCapitalize='sentences'
                style={{ height: 80, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setSensitivity(text)}
                value={sensitivity}
            />
            <View style={{marginTop: 25}}></View>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>Antibiotic Resistance</Text>
            <TextInput
                style={{ height: 80, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setResistance(text)}
                value={resistance}
            />
            <View style={{marginTop: 25}}></View>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>Drug Allergy</Text>
            <TextInput
                style={{ height: 80, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={text => setAllergy(text)}
                value={allergy}
            />
            <Button title='Submit' onPress={submitHandler}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default EditSensitiveData;
