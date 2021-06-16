import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import 'firebase/functions'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxJ4ja_cf5RF3uk9o-2x3fGBAS6Lz-YIA",
  authDomain: "mztube-c19ef.firebaseapp.com",
  databaseURL: "https://mztube-c19ef-default-rtdb.firebaseio.com",
  projectId: "mztube-c19ef",
  storageBucket: "mztube-c19ef.appspot.com",
  messagingSenderId: "594899517762",
  appId: "1:594899517762:web:4b1e98a6c921a83d5648db",
  measurementId: "G-JEZRK6BLYT",
  androidClientId: '594899517762-e1tbhtal0pqa9th07vnni1uoj6v8i0ic.apps.googleusercontent.com',
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
