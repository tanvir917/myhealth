import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

import { useDispatch } from 'react-redux'
import CheckAuth from './containers/CheckAuth'
import Login from './containers/Auth/Login'
import CheckConnection from './containers/CheckConnection'
import Users from './containers/Users'
import CallScreen from './containers/CallScreen'
import Info from './containers/Info'
import { navigationHeader } from './theme'
import AuthScreen from '../src/screens/AuthScreen'
import doctorsList from '../src/screens/doctors/doctorsList'
import PatientsOverviewScreen from '../src/screens/patients/PatientsOverviewScreen';
import DoctorListScreen from '../src/screens/doctors/DoctorListScreen';
import Colors from './constants/Colors'


const ProductsNavigator = createStackNavigator(
  {
    PatientsOverviewScreen: PatientsOverviewScreen,
    DoctorListScreen: DoctorListScreen,
    doctorsList: doctorsList
  });

const AuthNavigator = createStackNavigator({
  Auth: AuthScreen
}, {
  defaultNavigationOptions: navigationHeader
});

const MenusNavigator = createDrawerNavigator({
  ProductsNavigator: ProductsNavigator,
  PatientsOverviewScreen: PatientsOverviewScreen,
  DoctorListScreen: DoctorListScreen  
})

const AppNavigator = createSwitchNavigator({
  MenusNavigator: MenusNavigator
})

export default createAppContainer(AppNavigator)
