import firebase from "firebase/app";
import "firebase/auth";
import { database, auth, f } from '../firebase'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
    GoogleSignin,
    statusCodes,
  } from '@react-native-google-signin/google-signin';
export const SIGNUP = 'SIGNUP';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const AUTHENTICATE = 'AUTHENTICATE';
export const AUTHENTICATE_USER_INFO = 'AUTHENTICATE_USER_INFO';

export const authenticate = (userId, userData, expiryTime) => {
    return dispatch => {
      dispatch(setLogoutTimer(expiryTime));
      dispatch({ type: AUTHENTICATE, userId: userId, userInfo: userData })
    }
  }
  export const tryLogin = async (uid) => {
    if (uid) {
      const userData = await database.ref('users').child(uid).once('value')
      dispatch(
        authenticate(
          uid,
          userData.val(),
          360000000
        )
      );
    }
  }

  export const signup = (email, password) => {
    return async dispatch => {
        try {
            await auth.createUserWithEmailAndPassword(email, password)
                .then(async (userObj) => {
                    await createUserObj(userObj.user.uid, email, userObj.user)
                    const userData = await database.ref('users').child(userObj.user.uid).once('value')
                    dispatch(
                        authenticate(
                            userObj.user.uid, 
                            userData.val(),
                            360000
                        )
                    );
                    const user= {userId: userObj.user.uid}
                    AsyncStorage.setItem(
                      'userId', //key to retrive data later
                      JSON.stringify(user)
                  )
                    saveDataToStorage(userData.val());
                    const expirationDate = new Date(
                        new Date().getTime() +  360000
                    );
                })
            
        } catch (err) {
            throw err;
        }
    }
}


  export const login = (email, password) => {
    return async dispatch => {
      try {
        const response = await auth.signInWithEmailAndPassword(email, password)
          .catch(function (error) {
            throw new Error(error.message);
          });
          database.ref('users').child(response.user.uid).on('value', (snapshot) => {
                const exists = snapshot.val() !== null;
                if (exists) {
                  let userData = snapshot;
                  dispatch(
                      authenticate(
                          response.user.uid,
                          userData.val(),
                          360000000
                      )
                  );
                  AsyncStorage.setItem(
                      'userId', //key to retrive data later
                      JSON.stringify(response.user.uid)
                  )
                  saveDataToStorage(userData.val());
              }
            }
          )
              
          } catch (err) {
              throw err;
          }
        }
  
      }

  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      const providerData = firebaseUser.providerData;
      for (let i = 0; i < providerData.length; i++) {
        if (
          providerData[i].providerId ===
          firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
          providerData[i].uid === googleUser.user.id
        ) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  };
  const onSignIn = googleUser => {
    // We need to register an Observer on Firebase Auth to make sure auth is initialized.
    const unsubscribe = auth.onAuthStateChanged(
      firebaseUser => {
        unsubscribe();
        // Check if we are already signed-in Firebase with the correct user.
        if (!isUserEqual(googleUser, firebaseUser)) {
          // Build Firebase credential with the Google ID token.
          const credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.idToken,
            //googleUser.accessToken
          );
          // Sign in with credential from the Google user.
          auth
            .signInWithCredential(credential)
            .then((result) => {
              if (result.additionalUserInfo.isNewUser) {
                firebase.
                  database()
                  .ref('users')
                  .child(result.user.uid)
                  .set({
                    email: result.user.email,
                    avatar: result.user.photoURL,
                    name: result.user.displayName,
                    isAdmin: false,
                    isActive: false,
                    created_at: Date.now()
                  })
                  .then(function (snapshot) {
                  });
              } else {
                database
                  .ref('users')
                  .child(result.user.uid)
                  .update({
                    last_logged_in: Date.now()
                  });
              }
              dispatch(
                authenticate(
                  result.user.uid,
                  result.user,
                  36000000
                )
              );
            })
            .catch((error) => {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              // ...
            });
        }
      }
    );
  };
  
  export const signInWithGoogle = () => {
    return async dispatch => {
      try {
        GoogleSignin.configure();
        await GoogleSignin.hasPlayServices();
        const result = await GoogleSignin.signIn();
        if (result.user) {
          await onSignIn(result);
          return result.idToken;
        } else {
          return { cancelled: true };
        }
      } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
          // user cancelled the login flow
          console.log('cancelled');
        } else if (error.code === statusCodes.IN_PROGRESS) {
          // operation (e.g. sign in) is in progress already
          console.log('in progress');
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
          // play services not available or outdated
          console.log('no avai');
        } else {
          // some other error happened
          console.log('other');
        }
        throw error;
      }
    }
  }
  
  const createUserObj = (uid, email, user) => {
    const uObj = {
      name: email.split('@')[0],
      avatar: 'https://res.cloudinary.com/dv244dkbr/image/upload/v1619297628/MzTube/user-dummy-200x200-1_czlwxk.png',
      email: email,
      isAdmin: false,
      isActive: false,
      created_at: Date.now(),
      phone: '+8801700000000',
      address: 'Edit your address',
    };
    database.ref('users').child(uid).set(uObj);
  }

 export const fetchUserInfo = (uId) => {
    database.ref('users').child(uId).once('value')
      .then(function (snapshot) {
        const exists = (snapshot.val() !== null);
        if (exists) {
          data = snapshot.val();
          return data;
        }
      }).catch(err => { return err });
  }
  
  const clearLogoutTimer = () => {
    if (timer) {
      clearTimeout(timer)
    }
  }
  
  const setLogoutTimer = expirationTime => {
    return dispatch => {
      timer = setTimeout(() => {
        dispatch(logout());
      }, expirationTime);
    }
  }

 const saveDataToStorage = (user) => {
    AsyncStorage.setItem(
      'user', //key to retrive data later
      JSON.stringify(user)
    )
  }

  export const logout = () => {
    return {
      type: LOGOUT
    }
  }
