import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { WebView } from 'react-native-webview'
import { database, auth } from '../../firebase';
const STRIPE_PK = 'pk_test_vyo3aJWr18A3Hu2TKTg7AQJc00V3wm1kRm'


const PaymentView = (props) => { 
    const userId = auth.currentUser.uid;
    const { amount, product} = props
    const onCheckStatus = (response) => {
        props.onCheckStatus(response)
    }


    const htmlContent = `
        <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Payment Page</title>
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
                <script src="https://js.stripe.com/v3/"></script>
                <style>
                
                .container-fluid{
                    background-color: white;
                }
                
                .card-holder{
                    display: flex;
                    flex-direction: column;
                    height: 100px;
                    justify-content: space-around;
                    background-color: white;
                    border-radius: 20px;
                    margin-bottom: 10px;
                }
                .card-element{
                    height: 100px;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-around;
                }
                .card-name{
                    color: '#FFF';
                    font-weight: 500;
                    font-size: '20px';
                    padding: 12px;
                    border-radius: 15px;
                    border-color: #09b44d;
                    color: #424244;
                    margin-top: 20px
                    margin-bottom: 30px

                }
                .card-num{
                    border: 2px solid black;
                    border-radius: 2px;
                    background-color: #3CBC8D;
                }

                input {
                    outline:none;
                    color: #ffffff;
                    font-size: '25px';
                    font-weight: 500;
                    background-color: transparent;
                    }
                    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
                        color: #5c5c5c;
                        opacity: 1; /* Firefox */
                      }
                    

                    .row{
                        margin-top: '50px';
                        display: flex;
                        flex-direction: row;
                        justify-content: center;
                        align-items: center;
                    }

                    .products-info{
                        width: 100%;
                        padding: 10px;
                        text-align: start;
                        background-color: white;
                        font-size: 20px;
                        font-weight: 500;
                        color: #424244;
                    }
                    .card-errors{
                        color: red;
                    }
                    .pay-btn{
                        display: flex;
                        height: 50px;
                        justify-content: flex-end;
                        align-items: center;
                        margin-top: 30px;
                    }
                    .container {
                        display: block;
                        position: relative;
                        padding-left: 35px;
                        margin-bottom: 12px;
                        cursor: pointer;
                        font-size: 14px;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                      }
                      
                      /* Hide the browser's default checkbox */
                      .container input {
                        position: absolute;
                        opacity: 0;
                        cursor: pointer;
                        height: 0;
                        width: 0;
                      }
                      
                      /* Create a custom checkbox */
                      .checkmark {
                        position: absolute;
                        top: 0;
                        left: 0;
                        height: 20px;
                        width: 20px;
                        background-color: #eee;
                      }
                      
                      /* On mouse-over, add a grey background color */
                      .container:hover input ~ .checkmark {
                        background-color: white;
                        border: solid #4fe445;
                        border-width: 1px 1px 1px 1px;
                      }
                      
                      /* When the checkbox is checked, add a blue background */
                      .container input:checked ~ .checkmark {
                        background-color: #4fe445;
                      }
                      
                      /* Create the checkmark/indicator (hidden when not checked) */
                      .checkmark:after {
                        content: "";
                        position: absolute;
                        display: none;
                      }
                      
                      /* Show the checkmark when checked */
                      .container input:checked ~ .checkmark:after {
                        display: block;
                      }
                      
                      /* Style the checkmark/indicator */
                      .container .checkmark:after {
                        left: 6px;
                        top: 1px;
                        width: 8px;
                        height: 14px;
                        border: solid white;
                        border-width: 0 3px 3px 0;
                        -webkit-transform: rotate(45deg);
                        -ms-transform: rotate(45deg);
                        transform: rotate(45deg);
                      }
                
                </style>
            
            </head>
            <body>
                
                <!-- product info -->
                <div class="container-fluid">
                    <div class="row">
                        <div class="products-info">
                            Enter Your Card Details
                        </div>
                    </div>
                    <div class="row">
                        <label class="card-errors" id="card-errors"></label>
                    </div>
            
                        <form>
                            <div class="card-holder">
                                    <input type="text" placeholder="Card Holder Name" id="card-name" class="card-name" />
                                    <div id="card-element" class="card-element">
                                        <div class="form-group">
                                            <label for="card_number">Carn Number</label>
                                            <input type="text" class="form-control" id="card_number" data-stripe="number">
                                        </div>
                                        <div class="form-row">
                                            <label>
                                                <span>Card number</span>
                                                <input type="text" size="20" data-stripe="number">
                                            </label>
                                        </div> 
                                    
                                        <div class="form-row">
                                        <label>
                                            <span>Expiration (MM/YY)</span>
                                            <input type="text" size="2" data-stripe="exp_month">
                                        </label>
                                        <span> / </span>
                                        <input type="text" size="2" data-stripe="exp_year">
                                        </div>
                                    
                                        <div class="form-row">
                                        <label>
                                            <span>CVC</span>
                                            <input type="text" size="4" data-stripe="cvc">
                                        </label>
                                        </div>
                                    
                                        <div class="form-row">
                                        <label>
                                            <span>Billing Zip</span>
                                            <input type="hidden" size="6" data-stripe="address_zip" value="400012">
                                        </label>
                                        </div>
                                    
                                        
                                    </div>
                                </div>
                            
                                <div class="pay-btn">
                                    <input type="submit" class="btn btn-info btn-lg" value="Pay Now" />
                                </div>
                                <br/>
                                <label class="container">Save this card for future payments?
                                    <input type="checkbox" checked="checked">
                                    <span class="checkmark"></span>
                                </label>
                
                        </form>
            
                    
                </div>
                
                <script>
                    var stripe = Stripe('${STRIPE_PK}');
                    var elements = stripe.elements();
            
            
                        var card = elements.create("card", {
                            hidePostalCode: true,
                            style: {
                                base: {
                                    fontWeight: 610,
                                    fontFamily: 'Source Code Pro, Consolas, Menlo, monospace',
                                    fontSize: '16px',
                                    fontSmoothing: 'antialiased',
                                    '::placeholder': {
                                        color: 'grey',
                                    },
                                    ':-webkit-autofill': {
                                        color: '#e39f48',
                                    },
                                },
                                invalid: {
                                    color: '#FC011F',
                                    '::placeholder': {
                                        color: '#FFCCA5',
                                    },
                                }
                            }
                        });
                        // Add an instance of the card Element into the 'card-element' <div>.
                        card.mount('#card-element');
                        /**
                         * Error Handling
                         */
                        //show card error if entered Invalid Card Number
                        function showCardError(error){
                            document.getElementById('card-errors').innerHTML = ""
                            if(error){
                                document.getElementById('card-errors').innerHTML = error
                            } 
                        }
                        
                        card.on('change', function(event) {
                            if (event.complete) {
                                showCardError()
                                // enable payment button
                            } else if (event.error) {
                                const { message} = event.error
                                console.log(message)
                                showCardError(message)
                            }
                        });
                        
                        card.mount('#card-element');
                        
                        /**
                         * Payment Request Element
                         */
                        var paymentRequest = stripe.paymentRequest({
                            country: "US",
                            currency: "usd",
                            total: {
                                amount: ${amount},
                                label: "Total"
                            }
                        });
                        var form =  document.querySelector('form');
                        form.addEventListener('submit', function(e) {
                            e.preventDefault();
            
                            var additionalData = {
                                name: document.getElementById('card-name').value,
                                address_line1: undefined,
                                address_city:  undefined,
                                address_state: undefined,
                                address_zip: undefined,
                            };
            
                            stripe.createToken(card, additionalData).then(function(result) {
                            
                            console.log(result);
                            if (result.token) {
                                window.postMessage(JSON.stringify(result));
                            } else {
                                window.postMessage(JSON.stringify(result));
                            }
                        });
                        })
                </script>
            </body>
            </html>
    `;

    const injectedJavaScript = `(function() {
        window.postMessage = function(data){
            window.ReactNativeWebView.postMessage(data);
        };
    })()`;


    const onMessage = (event) => {
        const { data } =  event.nativeEvent;
        console.log(data)
        onCheckStatus(data)
        
    }



return <WebView
    javaScriptEnabled={true}
    style={{ top: 0, width: '90%', 
        marginLeft: '5%', marginTop: 10, 
        borderRadius: 10, backgroundColor: 'white', 
        marginBottom: "20%"
    }}
    originWhitelist={['*']}
    source={{ html: htmlContent}}
    injectedJavaScript={injectedJavaScript}
    onMessage={onMessage}
/>

}
 

 export default PaymentView;