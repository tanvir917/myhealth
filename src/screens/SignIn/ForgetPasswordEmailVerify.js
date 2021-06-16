import React, { useState, } from "react"
import { View, Text, StyleSheet, ScrollView, } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { Input } from 'react-native-elements';
import { useSelector, useDispatch } from "react-redux"
import { Button } from "react-native-elements"
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import constants from "../../constants/constants"
import colors from "../../constants/Colors"
import { updateEmail } from "../../store/actions/forgetPassword"
import { f } from "../../firebase"

const ForgetPasswordEmailVerify = (props) => {

    const email = useSelector(state => state.forgetPassword.email)
    const dispatch = useDispatch()
    const [valid, setValid] = useState(null)

    const handleEmail = text => {
        dispatch(updateEmail(text))
    }

    const handleContinue = () => {

        f.auth().sendPasswordResetEmail(email)
            .then(() => setValid("okk"))
            .catch(error => setValid("not okk"))

    }

    if (valid === "okk") {
        setTimeout(() => {
            props.navigation.navigate('PasswordUpdate');
        }, 2000)
    }

    let message;

    if (valid === "not okk") {
        message = <View style={styles.invalidMessage}>
            <Text style={styles.text}>Oops! You entered an invalid email. Try again!</Text>
        </View>
    }
    if (valid === "okk") {
        message = null
    }

    return (
        <View style={{ flex: 1 }}>
            <LinearGradient
                colors={["#0171A1", '#09B44D']}
                start={[0.4, 0.3]}
                end={[1, 0.875]}
                style={styles.Gradient}
            />

            {
                valid !== "okk" ? (
                    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                        <Text style={styles.logoStyle}>LOGO</Text>

                        <Text style={styles.text}>Forget your password?</Text>

                        <Text style={{ ...styles.text, marginTop: "2%" }}>To protect your account security, we need to verify your identity</Text>

                        <Input
                            placeholder="please enter your email"
                            value={email}
                            onChangeText={text => handleEmail(text)}
                            inputContainerStyle={styles.inputContainer}
                            containerStyle={{ paddingLeft: 0, paddingRight: 0, }}
                            inputStyle={{ color: "#424244", letterSpacing: 1 }}
                            style={{ fontFamily: constants.regular, fontSize: constants.t0 }}
                            placeholderTextColor="rgba(72, 72, 74, 0.5)"
                            keyboardType="email-address"
                        />

                        {message}

                        <View style={styles.buttonContainerStyle}>
                            <Button
                                icon={<MaterialIcons name="email" size={24} color="#09b44d" />}
                                buttonStyle={styles.buttonStyle}
                                type="outline"
                                title="Verify through Email"
                                titleStyle={{ ...styles.buttonTextStyle, color: "#09b44d", paddingTop: 5, marginLeft: 10 }}
                                onPress={handleContinue}
                            />
                        </View>

                        <View style={{ ...styles.screenIdentifier, marginTop: valid === "not okk" ? "36%" : "60%", }}>
                            <View style={styles.screenIdentifierIndividual}>

                            </View>
                            <View style={{ ...styles.screenIdentifierIndividual, backgroundColor: "rgba(66, 66, 68, 0.4)", marginLeft: 5 }}>

                            </View>
                        </View>


                    </ScrollView>
                ) : (
                    <View >

                        <Text style={styles.logoStyle}>LOGO</Text>

                        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: "35%" }}>
                            <AntDesign name="checkcircle" size={70} color="white" />
                        </View>

                        <Text style={{ ...styles.text, textAlign: "center", marginTop: "5%" }}>SUCCESS!</Text>
                        <Text style={{ ...styles.text, textAlign: "center" }}>A link has been sent to your email</Text>

                    </View>
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft: constants.p1,
        marginRight: constants.p1
    },
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
        marginTop: "10%"
    },
    text: {
        fontSize: constants.t0,
        fontFamily: constants.regular,
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
    screenIdentifier: {
        flexDirection: "row",
        justifyContent: "center"
    },
    screenIdentifierIndividual: {
        height: 7,
        width: 32,
        backgroundColor: "white",
        borderRadius: 12
    },
    invalidMessage: {
        height: 55,
        marginLeft: "2%",
        marginRight: "2%",
        backgroundColor: "rgba(224, 50, 50, 0.9)",
        flexDirection: "row",
        padding: "2%",
        borderRadius: 4,
        marginBottom: "7%"
    },
    text: {
        fontSize: constants.t0,
        fontFamily: constants.regular,
        color: colors.textColor_signIn_screen
    },
})

export default ForgetPasswordEmailVerify;