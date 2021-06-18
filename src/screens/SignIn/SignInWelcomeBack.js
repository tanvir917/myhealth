import React, { useState, useRef } from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, ScrollView, Animated, Dimensions } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Input } from 'react-native-elements';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { CheckBox } from 'react-native-elements'

import constants from "../../constants/constants"
import colors from "../../constants/Colors"
import { EyeOpen, EyeClose } from "../../icons/SVG_to_JSX_component"

import { useDispatch } from "react-redux"
import * as authActions from '../../store/actions/auth';
import { auth } from '../../firebase';
import * as Progress from 'react-native-progress';

const SignInWelcomeBack = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [security, setSecurity] = useState(true)
    const [remember, setRemember] = useState(false)
    const [message, setMessage] = useState(false)
    const [emailErrorMessage, setEmailErrorMessage] = useState(null)
    const [passwordErrorMessage, setPasswordErrorMessage] = useState(null)

    const dispatch = useDispatch()
    const [isLoading, setIsLoading] = useState(false);
    let animation = new Animated.Value(0);

    const eyeIcon = () => {
        setSecurity(!security)
    }

    const handleRemember = () => {
        setRemember(!remember)
    }

    const forgetPassword = () => {
        props.navigation.navigate("ForgetPasswordEmailVerify")
    }


    const handleSignIn = async () => {
        let action;
        action = authActions.login(
            email,
            password
        );
        setMessage(false)
        setIsLoading(true);
        try {
            await dispatch(action);
            props.navigation.push('Home');
        } catch (err) {
            setMessage(true)
            setIsLoading(false);
        }
        setMessage(false)
        setIsLoading(false);
    };

    const handleEmail = text => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            setEmail(text)
            setEmailErrorMessage(<Text style={{ ...styles.text, fontSize: 10 }}>Email is not valid</Text>)
        }
        else {
            setEmail(text)
            setEmailErrorMessage(null)
        }
    }

    const handlePassword = text => {
        setPassword(text)
    }

    const progressInterpolate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["0%", "100%"],
        extrapolate: "clamp"
    })

    const colorInterpolate = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ["#0171A1", "#0171A1"]
    })

    const progressStyle = {
        width: progressInterpolate,
        bottom: 0,
        backgroundColor: colorInterpolate,
        borderRadius: 4,
    }

    return (
        <View style={{ flex: 1 }} >

            <LinearGradient
                colors={["#0171A1", '#09B44D']}
                start={[0.4, 0.3]}
                end={[1, 0.875]}
                style={styles.Gradient}
            />

            <ScrollView style={styles.Container} showsVerticalScrollIndicator={false}>



                <View style={styles.HeadingContainer}>
                    <Text style={styles.Heading}>Welcome back!</Text>
                </View>

                <View style={{ ...styles.HeadingContainer, marginTop: "5%" }}>
                    <Text style={styles.text}>Enter your details to access your account</Text>
                </View>

                {/* {
                    message ? (
                        <View style={styles.invalidMessage}>
                            <Text style={styles.text}>Oops! You entered an invalid username or password. Try again!</Text>
                        </View>
                    ) : null
                } */}

                <View style={{ marginTop: "25%" }}>
                    <Input
                        placeholder="Email"
                        value={email}
                        onChangeText={text => handleEmail(text)}
                        inputContainerStyle={styles.inputContainer}
                        containerStyle={{ paddingLeft: 0, paddingRight: 0, }}
                        inputStyle={{ color: "#424244", letterSpacing: 1 }}
                        style={{ fontFamily: constants.regular, fontSize: constants.t0 }}
                        placeholderTextColor="rgba(66, 66, 68, 0.47)"
                        keyboardType="email-address"
                        errorMessage={emailErrorMessage}
                    />
                </View>

                <View>
                    <Input
                        placeholder="Password (8+ characters)"
                        secureTextEntry={security}
                        value={password}
                        onChangeText={text => handlePassword(text)}
                        inputContainerStyle={styles.inputContainer}
                        containerStyle={{ paddingLeft: 0, paddingRight: 0, }}
                        inputStyle={{ color: "#424244", letterSpacing: 1 }}
                        style={{ fontFamily: constants.regular, fontSize: constants.t0 }}
                        placeholderTextColor="rgba(66, 66, 68, 0.47)"
                        rightIcon={<TouchableOpacity onPress={eyeIcon}>{security ? <EyeClose /> : <EyeOpen />}</TouchableOpacity>}
                    />
                </View>

                <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginTop: "2%" }}>
                    <View style={{ flexDirection: "row", alignItems: "center", }}>
                        <CheckBox
                            title={<Text style={{ ...styles.text, marginTop: 5, paddingLeft: 5 }}>Remember me</Text>}
                            checked={remember}
                            onPress={handleRemember}
                            containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent', marginLeft: 0, paddingLeft: 0, }}
                            checkedColor="white"
                            uncheckedColor="white"
                        />
                    </View>
                    <TouchableOpacity onPress={forgetPassword}>
                        <Text style={{ ...styles.text, marginTop: 5 }}>Forget password?</Text>
                    </TouchableOpacity>
                </View>



                <View style={styles.buttonContainerStyle}>

                    <TouchableOpacity onPress={handleSignIn} style={{ height: 48, borderRadius: 4, flexDirection: "row", alignItems: "center", justifyContent: "center" }}>

                        {/* <Progress.Bar progress={0.5} width={Dimensions.get('window').width - 35} color="#0171A1" animationType="timing" style={{ position: "absolute", }} height={48} borderRadius={4} indeterminateAnimationDuration={1000} /> */}

                        <View style={StyleSheet.absoluteFill}>
                            <Animated.View style={[styles.progress, progressStyle]} />
                        </View>

                        <Text style={{ ...styles.text, color: "#424244", }}>Sign in</Text>

                    </TouchableOpacity>

                </View >

                <View style={{ height: 15 }}>

                </View>

            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    Gradient: {
        position: "absolute",
        height: "100%",
        top: 0,
        left: 0,
        right: 0
    },
    Container: {
        marginLeft: constants.p1,
        marginRight: constants.p1,

    },
    HeadingContainer: {
        marginTop: "10%",
        flexDirection: "row",
        justifyContent: "center"
    },
    Heading: {
        fontFamily: constants.medium,
        fontSize: constants.h1,
        color: colors.textColor_signIn_screen
    },
    text: {
        fontSize: constants.t0,
        fontFamily: constants.regular,
        color: colors.textColor_signIn_screen
    },
    inputContainer: {
        backgroundColor: colors.textColor_signIn_screen,
        height: 48,
        borderRadius: 4,
        paddingLeft: 15,
        elevation: 5
    },
    buttonStyle: {
        borderRadius: 4,
        backgroundColor: colors.buttonColor_signIn_screen,
        height: 48,
        borderColor: "white"
    },
    buttonTextStyle: {
        color: colors.textColor_insideButton_signIn_screen,
        fontFamily: constants.regular,
        fontSize: constants.t0,
    },
    buttonContainerStyle: {
        marginTop: "7%",
        backgroundColor: "white",
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        height: 48,

        elevation: 5,
    },
    invalidMessage: {
        position: "absolute",
        top: "25%",
        height: 55,
        marginLeft: "2%",
        marginRight: "2%",
        backgroundColor: "rgba(224, 50, 50, 0.9)",
        flexDirection: "row",
        padding: "2%",
        borderRadius: 4
    },
    progress: {
        position: "absolute",
        top: 0,
        left: 0
    }
})

export default SignInWelcomeBack;