import React from 'react'
import { connect } from 'react-redux'
import { StatusBar, StyleSheet, View } from 'react-native'
import FlashMessage from 'react-native-flash-message'

import Navigator from './Navigation'
import NavigationService from './NavigationService'
import { appStart } from './actionCreators'
import { colors } from './theme'
import config from './QBConfig'
import * as firebase from 'firebase';
import ApiKeys from './constants/ApiKeys'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Poppins_100Thin,
  Poppins_200ExtraLight,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
  Poppins_800ExtraBold,
  Poppins_900Black,
} from '@expo-google-fonts/poppins';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  navigatorView: {
    flex: 1,
    width: '100%',
  },
})

class App extends React.Component {

  constructor(props) {
    super(props)
    props.appStart(config)
    // if (!firebase.apps.length) { firebase.initializeApp(ApiKeys.FirebaseConfig); }
    // firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  }

  onAuthStateChanged = (user) => {
    this.setState({isAuthenticationReady: true});
    this.setState({isAuthenticated: !!user});
  }
  
  render() {
    // let [fontsLoaded] = useFonts({
    //   Poppins_100Thin,
    //   Poppins_200ExtraLight,
    //   Poppins_300Light,
    //   Poppins_300Light_Italic,
    //   Poppins_400Regular,
    //   Poppins_500Medium,
    //   Poppins_600SemiBold,
    //   Poppins_700Bold,
    //   Poppins_800ExtraBold,
    //   Poppins_900Black,
    // });

    // if (!fontsLoaded) {
    //   return (
    //     <AppLoading />
    //   );
    // } else {
      return (
        <View style={styles.container}>
          <View style={styles.navigatorView}>
            <Navigator ref={NavigationService.init} />
          </View>
          <FlashMessage position="bottom" />
        </View>
      )
    //}
  }

}

const mapStateToProps = null

const mapDispatchToProps = { appStart }

export default connect(mapStateToProps, mapDispatchToProps)(App)