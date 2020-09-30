import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import CheckAuth from './containers/CheckAuth'
import Login from './containers/Auth/Login'
import CheckConnection from './containers/CheckConnection'
import Users from './containers/Users'
import CallScreen from './containers/CallScreen'
import Info from './containers/Info'
import { navigationHeader } from './theme'
import AuthScreen from '../src/screens/AuthScreen'

const AuthNavigator = createStackNavigator({
  Auth: AuthScreen
}, {
  defaultNavigationOptions: navigationHeader
});

const AppNavigator = createSwitchNavigator({
  Auth: AuthNavigator
})

export default createAppContainer(AppNavigator)
