import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/functions'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvib1iZmXGjoYLtcRbhLO-D3l-O-aflCY",
  authDomain: "myhealth-e2b27.firebaseapp.com",
  databaseURL: "https://myhealth-e2b27.firebaseio.com",
  projectId: "myhealth-e2b27",
  storageBucket: "myhealth-e2b27.appspot.com",
  messagingSenderId: "617167455635",
  appId: "1:617167455635:web:f125c4fda171c2865ed466",
  measurementId: "G-XGFLV8GK2Y",
};

let app;

if(!firebase.apps.length){
  app = firebase.initializeApp(firebaseConfig);
}
//if (firebase.apps.length === 0) {
  // app = firebase.initializeApp(firebaseConfig);
//} else {
  //app = firebase.app();
//}

const db = app.firestore();
const auth = firebase.auth();
const database = firebase.database();
const functions = firebase.functions();
const f = firebase;
export { db, auth, f, database, functions };
