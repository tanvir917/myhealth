import React from 'react'
import {
  PermissionsAndroid,
  Platform,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native'
import { SafeAreaView } from 'react-navigation'

import HeaderButton from '../HeaderButton'
import UsersFilter from '../../containers/Users/Filter'
import SelectedUsersAndCallButtons from '../../containers/Users/SelectedUsersAndCallButtons'
import UsersList from '../../containers/Users/List'
import { INFO, EXIT } from '../../images'
import styles from './styles'

class LogoTitle extends React.Component {
  render() {
    return (
      <View style={styles.drawer}>
          <Image
              source={require('../../image/icons8-menu-24.png')}
              style={{ width: 30, height: 30, margin: 10, padding: 10 }}
          />
      </View>
    );
  }
}

export default class UsersScreen extends React.Component {

  static navigationOptions = ({ navigation }) => {
    const user = navigation.getParam('user', {})
    const handleLogout = navigation.getParam('handleLogout')
    const username = user.fullName || user.email || user.login || ''
    return {
      headerLeft: (
        <HeaderButton
          onPress={handleLogout}
          imageSource={EXIT}
        />
      ),
      headerTitle: (
        <View style={styles.titleView}>
          <Text style={styles.titleText}>{username}</Text>
        </View>
      ),
      // headerRight: (
      //   <HeaderButton
      //     imageSource={INFO}
      //     onPress={() => navigation.navigate('AppNavigatorD')}
      //   />
      // ),
      headerRight:
            () => 
            <TouchableHighlight 
                onPress={() => navigation.navigate('PatientsOverviewScreen')}
                activeOpacity='0'>
            <LogoTitle
                style={[{ color: 'blue', marginRight: 12 }]}
                size={15}
            /></TouchableHighlight>,
      }
  }

  componentDidMount() {
    const { navigation, user } = this.props
    if (user) {
      navigation.setParams({ handleLogout: this.logout, user })
    }
    if (Platform.OS === 'android') {
      PermissionsAndroid.requestMultiple([
        'android.permission.CAMERA',
        'android.permission.RECORD_AUDIO',
      ])
    }
  }

  shouldComponentUpdate(nextProps) {
    const { navigation, user } = this.props
    let shouldUpdate = false
    if (user !== nextProps.user) {
      if (user && !nextProps.user) {
        navigation.navigate('CheckAuth')
        return shouldUpdate
      }
      shouldUpdate = true
    }
    return shouldUpdate
  }

  logout = () => {
    this.props.logout()
  }

  render() {
    return (
      <SafeAreaView
        forceInset={{ top: 'never' }}
        style={styles.safeArea}
      >
        <UsersFilter />
        <SelectedUsersAndCallButtons />
        <UsersList />
      </SafeAreaView>
    )
  }
}

// UsersScreen.navigationOptions = navData => {
//   return {
//       headerTitle: 'Video',
//       headerRight:
//           () => 
//           <TouchableHighlight 
//               onPress={() => navData.navigation.toggleDrawer()}
//               activeOpacity='0'>
//           <LogoTitle
//               style={[{ color: 'blue', marginRight: 12 }]}
//               size={15}
//           /></TouchableHighlight>,
//       headerLeft: () => {},
//   }
// };