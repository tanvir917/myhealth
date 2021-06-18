import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import constants from "../../constants/constants"
import colors from "../../constants/Colors"
import { Input } from 'react-native-elements';
import { EyeOpen, EyeClose } from "../../icons/SVG_to_JSX_component"
import { AntDesign } from '@expo/vector-icons';
import { Button } from "react-native-elements"
import { useDispatch } from "react-redux"

import * as authActions from '../../store/actions/auth';


const SignUpRedesign = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [emailErrorMessage, setEmailErrorMessage] = useState(<Text style={{ ...styles.text, fontSize: 10 }}>Please enter a valid Email address</Text>)
    const [password, setPassword] = useState("")

    const [security, setSecurity] = useState(true)
    const [focus, setFocus] = useState(false)
    const [special, setSpecial] = useState(false)
    const [upper, setUpper] = useState(false)
    const [lower, setLower] = useState(false)
    const [digit, setDigit] = useState(false)
    const [width, setWidth] = useState(25)
    const [power, setPower] = useState("Weak")
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const handleEmail = text => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        if (reg.test(text) === false) {
            setEmail(text)
            setEmailErrorMessage(<Text style={{ ...styles.text, fontSize: 10 }}>Please enter a valid Email address</Text>)
        }
        else {
            setEmail(text)
            setEmailErrorMessage(null)
        }
    }

    const handlePassword = text => {

        setPassword(text)

        let specialCharacter = /^(?=.*?[\{\}\[\]#?!@$%^&*-]).{1,}$/
        let upperCase = /^(?=.*?[A-Z]).{1,}$/
        let lowerCase = /^(?=.*?[a-z]).{1,}$/
        let digit = /^(?=.*?[0-9]).{1,}$/

        specialCharacter.test(text) ? setSpecial(true) : setSpecial(false)
        upperCase.test(text) ? setUpper(true) : setUpper(false)
        lowerCase.test(text) ? setLower(true) : setLower(false)
        digit.test(text) ? setDigit(true) : setDigit(false)

        switch (true) {
            case specialCharacter.test(text) && upperCase.test(text) && lowerCase.test(text) && digit.test(text) && text.length > 8:
                setWidth(100)
                setPower("Strong")
                break;

            case specialCharacter.test(text) && upperCase.test(text) && lowerCase.test(text) && digit.test(text) && text.length == 8:
                setWidth(75)
                setPower("Good")
                break;

            case specialCharacter.test(text) && upperCase.test(text) && lowerCase.test(text) && digit.test(text):
                setWidth(50)
                setPower("Medium")
                break;

            default:
                setWidth(25)
                setPower("Weak")
        }
    }

    const eyeIcon = () => {
        setSecurity(!security)
    }

    const handleCreateAccount = async () => {
        switch (true) {
            case special === false || upper === false || lower === false || digit === false || password.length < 8 || emailErrorMessage != null:
                setMessage(<View style={styles.invalidMessage}>
                    <Text style={styles.text}>Invalid password or email </Text>
                </View>)
                break;

            case special && upper && lower && digit && password.length >= 8 && emailErrorMessage === null:
                setMessage(null)
                let action;
                action = authActions.signup(
                    email,
                    password
                );
                // setError(null);
                // setIsLoading(true);
                try {
                    await dispatch(action);
                    props.navigation.navigate('Profile');
                } catch (err) {
                    // setError(err.message);
                    // setIsLoading(false);
                    setMessage(<View style={{ ...styles.invalidMessage, backgroundColor: '#09B44D', }}>
                        <Text style={styles.text}>{err.message}</Text>
                    </View>)
                }

        }
    }

    const signIn = () => {
        props.navigation.navigate('SignInWelcomeBack');
    }

    return (
        <View style={{ height: "90%" }}>
            <LinearGradient
                colors={["#0171A1", '#09B44D']}
                start={[0.4, 0.3]}
                end={[1, 0.875]}
                style={styles.Gradient}
            />
            <ScrollView style={{ ...styles.container, }} showsVerticalScrollIndicator={false}>

                <Text style={styles.logoStyle}>Create an account</Text>

                {message}

                <Input
                    placeholder="Name"
                    value={name}
                    onChangeText={text => setName(text)}
                    inputContainerStyle={styles.inputContainer}
                    containerStyle={{ paddingLeft: 0, paddingRight: 0, }}
                    inputStyle={{ color: "#424244", letterSpacing: 1 }}
                    style={{ fontFamily: constants.regular, fontSize: constants.t0 }}
                    placeholderTextColor="rgba(72, 72, 74, 0.5)"
                    errorStyle={{ margin: -7 }}
                />

                <Input
                    placeholder="Email"
                    value={email}
                    onChangeText={text => handleEmail(text)}
                    inputContainerStyle={styles.inputContainer}
                    containerStyle={{ paddingLeft: 0, paddingRight: 0, }}
                    inputStyle={{ color: "#424244", letterSpacing: 1 }}
                    style={{ fontFamily: constants.regular, fontSize: constants.t0, }}
                    placeholderTextColor="rgba(66, 66, 68, 0.47)"
                    keyboardType="email-address"
                    errorMessage={emailErrorMessage}
                    errorStyle={{ marginBottom: -6, marginTop: 2 }}
                />

                <Input
                    placeholder="Password(8+ characters"
                    secureTextEntry={security}
                    value={password}
                    onChangeText={text => handlePassword(text)}
                    inputContainerStyle={styles.inputContainer}
                    containerStyle={{ paddingLeft: 0, paddingRight: 0, }}
                    inputStyle={{ color: "#424244", letterSpacing: 1 }}
                    style={{ fontFamily: constants.regular, fontSize: constants.t0 }}
                    placeholderTextColor="rgba(66, 66, 68, 0.47)"
                    rightIcon={<TouchableOpacity onPress={eyeIcon}>{security ? <EyeClose /> : <EyeOpen />}</TouchableOpacity>}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    errorStyle={{ margin: -2 }}
                />

                {
                    focus ? (
                        <View>

                            <View style={{ height: 4, backgroundColor: "rgba(198, 253, 229, 0.8)", width: `${width}%` }}>

                            </View>
                            <View style={{ marginTop: "2%", marginBottom: "2%" }}>
                                <Text style={{ ...styles.text, fontSize: constants.t0, }}>{power}</Text>
                            </View>

                            <Text style={{ ...styles.text, fontSize: constants.d1, }}>Password must contain at least 8 characters consisting</Text>

                            <View style={styles.conditionContainer}>
                                <AntDesign name="checkcircle" size={18} color={special ? "#4bf8ad" : "white"} />
                                <Text style={{ ...styles.text, marginLeft: "2%", fontSize: constants.d1, }}>at least 1 special character. For e.g. {`{ }`} , [ ] . / _ - & % # @ etc</Text>
                            </View>

                            <View style={styles.conditionContainer}>
                                <AntDesign name="checkcircle" size={18} color={upper ? "#4bf8ad" : "white"} />
                                <Text style={{ ...styles.text, marginLeft: "2%", fontSize: constants.d1, }}>1 upper case</Text>
                            </View>

                            <View style={styles.conditionContainer}>
                                <AntDesign name="checkcircle" size={18} color={lower ? "#4bf8ad" : "white"} />
                                <Text style={{ ...styles.text, marginLeft: "2%", fontSize: constants.d1, }}>1 lower case</Text>
                            </View>

                            <View style={styles.conditionContainer}>
                                <AntDesign name="checkcircle" size={18} color={digit ? "#4bf8ad" : "white"} />
                                <Text style={{ ...styles.text, marginLeft: "2%", fontSize: constants.d1, }}>1 digit</Text>
                            </View>

                        </View>

                    ) :
                        null
                }

                <View style={styles.buttonContainerStyle}>
                    <Button
                        buttonStyle={styles.buttonStyle}
                        type="outline"
                        title="Create account"
                        titleStyle={styles.buttonTextStyle}
                        onPress={handleCreateAccount}
                    />
                </View>

                <View style={{ ...styles.HeadingContainer, marginBottom: "10%" }}>
                    <Text style={styles.text}>Have an account? </Text>
                    <TouchableOpacity onPress={signIn}>
                        <Text style={{ ...styles.text, textDecorationLine: "underline" }}>Sign in</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ ...styles.HeadingContainer, marginBottom: "10%" }}>
                    <Text style={{ ...styles.text, textAlign: "center" }}>By clicking on "Create account" you agree to our <Text style={{ ...styles.text, fontFamily: constants.bold }}>Terms</Text> and <Text style={{ ...styles.text, fontFamily: constants.bold }}>Privacy Policy</Text></Text>
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
    container: {
        marginLeft: constants.p1,
        marginRight: constants.p1,
    },
    logoStyle: {
        textAlign: "center",
        fontSize: 20,
        fontFamily: constants.bold,
        color: colors.textColor_signIn_screen,
        marginTop: "10%"
    },
    inputContainer: {
        backgroundColor: colors.textColor_signIn_screen,
        height: 48,
        borderRadius: 4,
        paddingLeft: 15,
        elevation: 5,
        marginTop: "5%",
    },
    text: {
        fontSize: constants.t0,
        fontFamily: constants.regular,
        color: colors.textColor_signIn_screen
    },
    conditionContainer: {
        flexDirection: "row",
        paddingRight: "5%",
        alignItems: "center",
        marginBottom: "1%"
    },
    buttonStyle: {
        borderRadius: 4,
        backgroundColor: colors.buttonColor_signIn_screen,
        height: 48,
        borderColor: "white",
    },
    buttonTextStyle: {
        color: colors.textColor_insideButton_signIn_screen,
        fontFamily: constants.regular,
        fontSize: constants.t0,
    },
    buttonContainerStyle: {
        marginTop: "15%",
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
        marginBottom: 20
    },
    HeadingContainer: {
        marginTop: "10%",
        flexDirection: "row",
        justifyContent: "center"
    },
    invalidMessage: {
        height: 55,
        marginLeft: "2%",
        marginRight: "2%",
        backgroundColor: "rgba(224, 50, 50, 0.9)",
        flexDirection: "row",
        padding: "2%",
        alignItems: "center",
        borderRadius: 4,
    },
})

export default SignUpRedesign;