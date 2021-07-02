import React, { useReducer, useCallback, useEffect, useState } from 'react';
 import { View, ScrollView, StyleSheet, ActivityIndicator, Alert, KeyboardAvoidingView, Text } from 'react-native';
 import { Button } from "react-native-elements"
 import { LinearGradient } from 'react-native-linear-gradient';
 import { useDispatch } from 'react-redux';
 import doctorsList from '../screens/doctors/doctorsList';

  import Input from '../components/UI/Input';
 import Card from '../components/UI/Card';
 import colors from '../constants/Colors';
 import constants from '../constants/constants';
import * as authActions from '../actionCreators/authM';
import Icon from 'react-native-vector-icons/AntDesign';

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

  const AuthScreen = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [error, setError] = useState();
    const dispatch = useDispatch();
    // const [state, dispatch] = useReducer(reducer, initialState);
    const [formState, dispatchFormState ] =  useReducer(formReducer, {
       inputValues: {
           displayName: '',
           email: '',
           password: ''
       }, 
       inputValidities: {
           email: false,
           password: false
       }, 
       formIsValid: false
   });

   useEffect(() => {
        if (error) {
            Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
        }
    }, [error]);

    const google = async () => {
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(authActions.signInWithGoogle())
            console.log('complete');
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
        setIsLoading(false);
        props.navigation.push('PatientsOverviewScreen')
    };

   const authHandler = async () => {	         
        let action;	         
        if (isSignup) {		             
            action = authActions.signup(	                 
            formState.inputValues.email,     
            formState.inputValues.password		             
        );		         
        } else {
            action = authActions.login(
                formState.inputValues.email,
                formState.inputValues.password
            );
        }
        setError(null);
         setIsLoading(true);
         try {
             await dispatch(action);
             props.navigation.navigate('PatientsOverviewScreen');
         } catch(err) {
             setError(err.message);
             setIsLoading(false);
         }
         
    };

    const inputChangeHandler = useCallback((inputIdentifier, inputValue, inputValidity) => {
       dispatchFormState({
           type: FORM_INPUT_UPDATE,
           value: inputValue,
           isValid: inputValidity,
           input: inputIdentifier//'title'
       });
   }, [dispatchFormState]);
     return ( 
         <KeyboardAvoidingView 
         >
             <View style={styles.gradient}>
                 <Card style={styles.authContainer}>
                     <ScrollView>
                     {/* {isSignup ? (
                        <Input 
                            id="displayName" 
                            label="E-Mail" 
                            keyboardType="default"
                            required
                            autoCapitalize="none"
                            errorText="Please enter a valid name."
                            onInputChange={inputChangeHandler}
                            initialValue=""
                        />): (null)} */}
                         <Input 
                             id="email" 
                             label="E-Mail" 
                             keyboardType="email-address"
                             required
                             email
                             autoCapitalize="none"
                             errorText="Please enter a valid email address."
                             onInputChange={inputChangeHandler}
                             initialValue=""
                         />
                         <Input 
                             id="password" 
                             label="Password" 
                             keyboardType="default"
                             secureTextEntry
                             required
                             minLength={5}
                             autoCapitalize="none"
                             errorText="Please enter a valid password."
                             onInputChange={inputChangeHandler}
                             initialValue=""
                         />
                         <View style={styles.buttonContainer}>
                         {isLoading ? (
                            <ActivityIndicator size='small' color={colors.primary}/>
                        ) : (
                            <Button 
                         title={isSignup ? "Sign Up" : "Login"}
                         color={colors.primary} 
                         onPress={authHandler}
                             />)}
                         </View>
                         <View style={styles.buttonContainer}>
                         <Button 
                            title={`Switch to ${isSignup ? 'Login' : 'Sign Up'}`}
                            color={colors.accent} 
                            onPress={() => {
                                setIsSignup(prevState => !prevState)
                            }} 
                         />
                         </View>
                     </ScrollView>
                 </Card>
                 <View style={{marginTop: 10}}>
                     <Text>= or =</Text>
                 </View>
                 <View style={styles.buttonContainerStyle}>
                    <Button
                        icon={
                            <View style={{marginRight: 5}}>
                                <Icon name='google' size={30} />
                            </View>
                        }
                        buttonStyle={{ ...styles.buttonStyle}}
                        type="outline"
                        title="Sign in with Google"
                        titleStyle={styles.buttonTextStyle}
                        onPress={google}
                        iconContainerStyle={{ borderWidth: 1, backgroundColor: "red" }}
                    />
                </View>

                <View style={styles.buttonContainerStyle}>
                    <Button
                        icon={<Icon name="facebook-square" size={30} color="#1976d2" />}
                        buttonStyle={styles.buttonStyle}
                        type="outline"
                        title="Sign in with Facebook"
                        titleStyle={styles.buttonTextStyle}
                        onPress={() => {}}
                    />
                </View>
                 </View>
         </KeyboardAvoidingView>
     )
 };

  AuthScreen.navigationOptions = {
     headerTitle: 'Authenticate'
 }

  const styles = StyleSheet.create({
     screen: { 
         flex:1
     },
     gradient: {
         height: '100%',
         width: '100%',
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: colors.backgroundColor
     },
     authContainer: {
         width: '80%',
         maxWidth: 500,
         maxHeight: 800,
         padding: 20
     },
     buttonContainer: {
         marginTop: 10,
     },
     buttonContainerStyle: {
        marginTop: "7%",
        backgroundColor: "#ffffff",
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    buttonStyle: {
        borderRadius: 4,
        backgroundColor: colors.buttonColor_signIn_screen,
        height: 48,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: "20%",
        paddingRight: "15%"
    },
    buttonTextStyle: {
        color: colors.textColor_insideButton_signIn_screen,
        fontSize: constants.t0,
        paddingTop: 5,
        // marginLeft: "10%"
    },
 });

  export default AuthScreen;