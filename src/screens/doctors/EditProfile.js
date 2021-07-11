import React, { useState, useEffect, useCallback, useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, ScrollView, KeyboardAvoidingView, StyleSheet, Platform, Text, Alert, TouchableOpacity } from 'react-native';
import Input from '../../components/UI/Input';
import * as ImagePicker from "react-native-image-picker";
import Colors from '../../constants/Colors';
import { database } from '../../firebase';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
    if (action.type === FORM_INPUT_UPDATE) {
        const updatedValues = {
            ...state.inputValues,
            [action.input]: action.value
        };
        const updatedValidities = {
            ...state.inputValidities,
            [action.input]: action.isValid
        }
        let updatedFormIsValid = true;
        for (const key in updatedValidities) {
            updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
        }
        return {
            formIsValid: updatedFormIsValid,
            inputValidities: updatedValidities,
            inputValues: updatedValues
        };
    }
    return state;
}



 const EditProfile = (props) => {
     const userInfo = useSelector(state => state.auth.userInfo)
     const userId = useSelector(state => state.auth.userId)
     const [photo, setPhoto] = useState('');
     const [ selectedImage, setSelectedImage] = useState("")
     const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dv244dkbr/image/upload'
    const dispatch = useDispatch();
    const [formState, dispatchFormState ] =  useReducer(formReducer, {
        inputValues: {
            name: userInfo ? userInfo.name: '',
        }, 
        inputValidities: {
            name: userInfo ? true: false,
        }, 
        formIsValid: userInfo ? true : false
    });

    const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
        dispatchFormState({
            type: FORM_INPUT_UPDATE, 
            value: inputValue,
            isValid: inputValidity,
            input: inputIdentifier//'title'
        });
    }, [dispatchFormState]);

    //asks phone for permission to access photos
    let openImagePickerAsync = async () => {
        
    };

    const submitHandler =  () => {

        if (!formState.formIsValid) {
            Alert.alert('Wrong Input!', 'Please check the errors in the form.', [
                { text: 'Okay' }
            ]);
            return;
        }
        // setError(null);
        // setIsLoading(true);
        try {
            database.ref(`users/${userId}`).update(
                {name: formState.inputValues.name,
                avatar: photo}
            )
            props.navigation.goBack();
        } catch (err) {
            // setError(err.message);
        }
        // setIsLoading(false);   
    };

  return (
    <KeyboardAvoidingView style={{flex: 1}} behavior="padding" keyboardVerticalOffset={0} >
            <ScrollView>
                <View style={styles.form}>
                    <Text>User Name</Text>
                    <Input 
                        id="name"
                        label="Name"
                        errorText="Please enter your name"
                        keyboardType='default'
                        autoCapitalize='sentences'
                        autoCorrect
                        returnKeyType='next'
                        onInputChange={inputChangeHandler}
                        initialValue={userInfo ? userInfo.name: ''}
                        //initiallyValid={!!userInfo}
                        required
                    />
                    <TouchableOpacity onPress={openImagePickerAsync}>
                        <View style={{height: 30, width: 100, margin: 20, backgroundColor: 'grey', justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
                            <Text>Select Photo</Text>
                        </View>
                    </TouchableOpacity>
                    {photo ? <Text>{photo}</Text> : null}
                    <TouchableOpacity onPress={submitHandler}>
                        <View style={{height: 30, width: 80, margin: 20, backgroundColor: Colors.buttonColor, justifyContent: 'center', alignItems: 'center', borderRadius: 10}}>
                            <Text>Submit</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
    form: {
        margin: 20,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
});


export default EditProfile;