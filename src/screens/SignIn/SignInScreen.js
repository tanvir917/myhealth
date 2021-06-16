import React, { useState, useEffect } from "react"
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Alert } from "react-native"
import constants from "../../constants/constants"
import colors from "../../constants/Colors"
import { Button } from "react-native-elements"
import { LinearGradient } from 'expo-linear-gradient';
import { Email, Google } from "../../image/SVG_to_JSX_component"
import { Entypo } from '@expo/vector-icons';
import { useDispatch } from "react-redux"
import * as authActions from '../../actionCreators/authM';
import { auth } from '../../firebase';

const SignInScreen = (props) => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const dispatch = useDispatch()

    useEffect(() => {
        if (error) {
            Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
        }
    }, [error]);

    const email = () => {
        props.navigation.navigate("SignInWelcomeBack")
    }

    const google = async () => {
        setError(null);
        setIsLoading(true);
        try {
            await dispatch(authActions.signInWithGoogle())
        } catch (err) {
            setError(err.message);
            setIsLoading(false);
        }
        setIsLoading(false);
        props.navigation.push('Home')
    };

    const facebook = async () => {
        try {
            await dispatch(authActions.signInWithFacebook()).then(() => {
                authActions.createUserObj(
                    auth.currentUser.uid,
                    auth.currentUser.email,
                    auth.currentUser
                );
            });
            props.navigation.push('Home');
        } catch (error) {
            setError(error.message);
        }
    };

    const createAccount = () => {
        props.navigation.navigate('SignUpRedesign');
    }

    return (
        <View style={{ flex: 1 }}>

            <LinearGradient
                colors={["#0171A1", '#09B44D']}
                start={[0.4, 0.3]}
                end={[1, 0.875]}
                style={styles.Gradient}
            />

            <View style={styles.Container}>

                <View style={styles.HeadingContainer}>
                    <Text style={styles.Heading}>Sign in</Text>
                </View>

                <View style={styles.buttonContainerStyle}>
                    <Button
                        icon={<Email />}
                        buttonStyle={{ ...styles.buttonStyle, paddingRight: "24%" }}
                        type="outline"
                        title="Sign in with email"
                        titleStyle={styles.buttonTextStyle}
                        onPress={email}
                    />
                </View>

                <View style={{ marginTop: "10%", }}>
                    <Text ellipsizeMode="clip" numberOfLines={1} style={{ ...styles.Heading, fontSize: constants.t0 }}>{"-".repeat((Dimensions.get('window').width / 10) / 2)}     or     {"-".repeat((Dimensions.get('window').width / 10) / 2)}</Text>
                </View>

                <View style={styles.buttonContainerStyle}>
                    <Button
                        icon={<Google />}
                        buttonStyle={{ ...styles.buttonStyle, paddingRight: "21%" }}
                        type="outline"
                        title="Sign in with Google"
                        titleStyle={styles.buttonTextStyle}
                        onPress={google}
                        iconContainerStyle={{ borderWidth: 1, backgroundColor: "red" }}
                    />
                </View>

                <View style={styles.buttonContainerStyle}>
                    {/* <Button
                        icon={<Entypo name="facebook" size={30} color="#1976d2" />}
                        buttonStyle={styles.buttonStyle}
                        type="outline"
                        title="Sign in with Facebook"
                        titleStyle={styles.buttonTextStyle}
                        onPress={facebook}
                    /> */}
                </View>

                <View style={styles.HeadingContainer}>
                    <Text style={styles.text}>New here? </Text>
                    <TouchableOpacity onPress={createAccount}>
                        <Text style={{ ...styles.text, textDecorationLine: "underline" }}>Create an account</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ ...styles.HeadingContainer, }}>
                    <Text style={{ ...styles.text, textAlign: "center" }}>By using our services you are agreeing to our <Text style={{ ...styles.text, fontFamily: constants.bold }}>Terms</Text> and <Text style={{ ...styles.text, fontFamily: constants.bold }}>Privacy Statement</Text></Text>
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
        fontFamily: constants.regular,
        fontSize: constants.t0,
        paddingTop: 5,
        // marginLeft: "10%"
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
    text: {
        fontSize: constants.t0,
        fontFamily: constants.regular,
        color: colors.textColor_signIn_screen
    }
})

export default SignInScreen;