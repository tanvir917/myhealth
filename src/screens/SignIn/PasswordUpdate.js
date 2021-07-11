import React, { useState } from "react"
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { useSelector, useDispatch } from "react-redux"
import { Input } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
import { Button } from "react-native-elements"

import constants from "../../constants/constants"
import colors from "../../constants/Colors"
import { updatePassword, updateConfirmPassword } from "../../store/actions/forgetPassword"
import { EyeOpen, EyeClose } from "../../icons/SVG_to_JSX_component"

const PasswordUpdate = () => {

    const password = useSelector(state => state.forgetPassword.password)
    const confirmPassword = useSelector(state => state.forgetPassword.confirmPassword)

    const dispatch = useDispatch()

    const [security, setSecurity] = useState(true)
    const [focus, setFocus] = useState(false)
    const [special, setSpecial] = useState(false)
    const [upper, setUpper] = useState(false)
    const [lower, setLower] = useState(false)
    const [digit, setDigit] = useState(false)
    const [width, setWidth] = useState(25)
    const [power, setPower] = useState("Weak")
    const [message, setMessage] = useState(null)

    const handlePassword = text => {

        dispatch(updatePassword(text))

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

    const handleConfirmPassword = text => {
        dispatch(updateConfirmPassword(text))
    }

    const eyeIcon = () => {
        setSecurity(!security)
    }

    const handleSubmit = () => {

        switch (true) {
            case special === false || upper === false || lower === false || digit === false || password.length < 8:
                setMessage(<View style={styles.invalidMessage}>
                    <Text style={styles.text}>Password criteria not fulfilled </Text>
                </View>)
                break;

            case password !== confirmPassword:
                setMessage(<View style={styles.invalidMessage}>
                    <Text style={styles.text}>Password doesn't match</Text>
                </View>)
                break;

            case password === confirmPassword:
                setMessage(null)
                console.log("password matched");
                break;
        }
    }

    return (
        <View style={{ height: "90%" }}>
            <LinearGradient
                colors={["#0171A1", '#09B44D']}
                start={[0.4, 0.3]}
                end={[1, 0.875]}
                style={styles.Gradient}
            />
            <ScrollView style={{ ...styles.container, }}>

                <Text style={styles.logoStyle}>LOGO</Text>

                <Text style={{ ...styles.text, marginTop: "5%" }}>Password Recovery</Text>

                <Input
                    placeholder="New password"
                    secureTextEntry={security}
                    value={password}
                    onChangeText={text => handlePassword(text)}
                    inputContainerStyle={styles.inputContainer}
                    containerStyle={{ paddingLeft: 0, paddingRight: 0, paddingTop: "5%", }}
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

                <Input
                    placeholder="Confirm password"
                    secureTextEntry={security}
                    value={confirmPassword}
                    onChangeText={text => handleConfirmPassword(text)}
                    inputContainerStyle={styles.inputContainer}
                    containerStyle={{ paddingLeft: 0, paddingRight: 0, paddingTop: "5%", }}
                    inputStyle={{ color: "#424244", letterSpacing: 1 }}
                    style={{ fontFamily: constants.regular, fontSize: constants.t0 }}
                    placeholderTextColor="rgba(66, 66, 68, 0.47)"
                    rightIcon={<TouchableOpacity onPress={eyeIcon}>{security ? <EyeClose /> : <EyeOpen />}</TouchableOpacity>}
                    errorStyle={{ margin: -2 }}
                />

                {message}

                <View style={styles.buttonContainerStyle}>
                    <Button
                        buttonStyle={styles.buttonStyle}
                        type="outline"
                        title="Submit"
                        titleStyle={styles.buttonTextStyle}
                        onPress={handleSubmit}
                    />
                </View>

                <View style={{ height: 15 }}>

                </View>

            </ScrollView>

            <View style={{ ...styles.screenIdentifier, }}>
                <View style={{ ...styles.screenIdentifierIndividual, backgroundColor: "rgba(66, 66, 68, 0.4)", }}>

                </View>
                <View style={{ ...styles.screenIdentifierIndividual, marginLeft: 5 }}>

                </View>

            </View>

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
    logoStyle: {
        textAlign: "center",
        fontSize: 24,
        fontFamily: constants.bold,
        color: colors.textColor_signIn_screen,
        marginTop: "10%",
    },
    container: {
        marginLeft: constants.p1,
        marginRight: constants.p1,
    },
    text: {
        fontSize: constants.t0,
        fontFamily: constants.regular,
        color: colors.textColor_signIn_screen,
    },
    inputContainer: {
        backgroundColor: colors.textColor_signIn_screen,
        height: 48,
        borderRadius: 4,
        paddingLeft: 15,
        elevation: 5
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
        marginTop: "5%",
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
    screenIdentifier: {
        flexDirection: "row",
        justifyContent: "center",
        position: "absolute",
        top: "95%",
        left: "40%"
    },
    screenIdentifierIndividual: {
        height: 7,
        width: 32,
        backgroundColor: "white",
        borderRadius: 12
    },
})

export default PasswordUpdate;