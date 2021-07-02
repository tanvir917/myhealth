import React, {useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Image, Button } from 'react-native';
import { useSelector } from "react-redux"
import { CheckBox } from 'react-native-elements'
import PaymentView from '../../components/UI/PaymentView';
import axios from 'axios';
import { database, auth } from '../../firebase';
//import CartNav from '../../components/CartNav';
import Colors from '../../constants/Colors';
// import Summary_block from './Order_Summary/Summary_block';
import Card from '../../components/UI/Card'
import constants from '../../constants/constants';

const PaymentScreen = (props) => {
    // const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    // const discount_value = useSelector(state => state.orderCoupon.discount)
    // const item = props.route.params.items;
    // const orderId = props.route.params.id;
    const user = auth.currentUser;
    const userId = user.uid;
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [isSelected, setSelection] = useState(false);
    const cartItems = {
        productTitle: ' ',
        productPrice: 20
    };
    const [response, setResponse ] = useState()
    const [ makePayment, setMakePayment ] = useState(false)
    const [paymentStatus, setPaymentStatus] = useState('')
    const onCheckStatus = async (paymentResponse) => {
        setPaymentStatus('Please wait while confirming your payment!')
        setResponse(paymentResponse)

        let jsonResponse = JSON.parse(paymentResponse);
        // perform operation to check payment status

        try {
            //const stripeResponse = await axios.post('http://192.168.0.105:8000/payment', {
            const stripeResponse = await axios.post('http://192.168.0.113:8000/payment', {
                email: user.email,
                product: cartItems,
                authToken: jsonResponse
            })

            if(stripeResponse){

                const { paid } = stripeResponse.data;
                if(paid === true){
                    // database.ref(`orders/${userId}`)
                    // .child(orderId)
                    // .update({
                    //     'paymentStatus': 'complete'
                    // })
                    setPaymentStatus('Payment Success')
                }else{
                    setPaymentStatus('Payment failed due to some issue1')
                }

            }else{
                setPaymentStatus(' Payment failed due to that some issue')
            }

            
        } catch (error) {
            setPaymentStatus(' Payment failed due to some issue2')
        }
 
    }
    const handleRating = () => {
        setSelection(state => !state)
    }

    const paymentUI = () => {

        if(!makePayment){

            return <View style={styles.mainPayUI}>
                
                    <Card 
                        style={styles.cardView} 
                    >  
                        <Text style={styles.paymentMethod}>Add payment method</Text>
                        <CheckBox
                            title={
                                <Card style={{width: windowWidth*.5, ...styles.checkboxView}}>
                                    <View style={styles.card}> 
                                        <Image style={styles.payImage} source={require('../../image/121.jpg')}/>            
                                        <Text style={styles.stripeView}>Stripe Payment</Text>
                                    </View>
                                </Card>
                            }
                            checked={isSelected}
                            checkedIcon='dot-circle-o'
                            uncheckedIcon='circle-o'
                            onPress={handleRating}
                            containerStyle={{...styles.container1, width: windowWidth*.85, height: windowHeight*.09,}}
                            checkedColor={Colors.cartIconBackground}
                            uncheckedColor={Colors.cartIconBackground}
                            size= {29}
                        />           
                    </Card>
                </View>
            // show to make payment
        }else{

            if(response !== undefined){
                return <View style={styles.responseView}>
                    <Text style={styles.payStatusView}> { paymentStatus} </Text>
                    <Text style={styles.responseView}> { response} </Text>
                </View>

            }else{
                return <PaymentView 
                            onCheckStatus={onCheckStatus} 
                            product=' '
                            amount='20'
                            // product={cartItems.productTitle} 
                            // amount={cartItems.productPrice}
                            userId={userId}
                        />
            }
        }
    }

    return (
        <View style={styles.container}>
            {/* <CartNav 
                cartScreen = {true}
                orderScreen = {true} 
                paymentScreen = {true}
            /> */}
            {paymentUI()}
            <View style={{ width:  windowWidth, ...styles.paymentView}}>
                <View style={styles.Summary_block}>
                    <Button title='View Confirmed Appointment' onPress={() => {
                        props.navigation.navigate('ConfirmAppointment')
                    }}/>
                    {/* <Summary_block total={cartTotalAmount} discount={discount_value} /> */}
                    {!makePayment ? (
                        <TouchableOpacity 
                        style={styles.makePaymentView}
                        onPress={() => {
                            setMakePayment(true)
                        }}
                        >
                        <Text style={styles.buyNowView} >Buy Now</Text>
                    </TouchableOpacity>
                    ) : null}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {height:"92%", justifyContent: 'space-between'},
    container1: {
        borderColor: "white",
        backgroundColor: "white",
        marginLeft: 15,
        paddingLeft: 3,
        marginBottom: "1%",

    },
    mainPayUI: { height: 200, width: '90%', marginLeft: '5%'},
    payImage: {height: 20, width: 30, marginLeft: 20},
    paymentMethod: {fontSize: constants.h3,  padding: 20},
    navigation: { flex: 2, backgroundColor: 'red' },
    stripeView: {marginLeft: 20},
    payStatusView: { fontSize: 25, margin: 10},
    responseView: { fontSize: 16, margin: 10},
    buyNowView: {color: Colors.white, textAlign: 'center', marginTop:15},
    body: {  justifyContent: 'center', alignItems: 'center'},
    footer: { flex: 1, backgroundColor: 'cyan' },
    Summary_block: {
        width: "100%",
        paddingRight: 17,
        paddingLeft: 16,
    },
    card: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
        borderColor: Colors.cartIconBackground,
        borderWidth: 1,
        borderRadius: 5,
        flexDirection: 'row'
    },
    cardView: { 
        backgroundColor: 'white',
        borderRadius: 10 },
    checkboxContainer: {
        flexDirection: "row",
        marginBottom: 20,
      },
      checkbox: {
        alignSelf: "center",
        height: 30,
        width: 30
      },
      responseView: { 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center', 
          height: 300, 
          marginTop: 50
    },
    paymentView: {
        borderTopLeftRadius: 40, 
        borderTopRightRadius: 40, 
        backgroundColor: Colors.white,
        marginBottom:5
    },
    makePaymentView: {
        height: 50,
        width:"95%", 
        alignSelf: "center", 
        marginTop: 10, 
        backgroundColor: Colors.btnBlue ,
        marginTop: '-5%'
    },
    checkboxView: {
        height: 60, backgroundColor: 'white', marginLeft: 15
    }
    })

export default PaymentScreen;
