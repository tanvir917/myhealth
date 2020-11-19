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
import FindDoctor from './screens/doctors/FindDoctor';
import BookAppointment from '../src/screens/doctors/BookAppointment';
import Colors from './constants/Colors'


const ProductsNavigator = createStackNavigator(
  {
    PatientsOverviewScreen: PatientsOverviewScreen,
    FindDoctor: FindDoctor,
    doctorsList: doctorsList,
    BookAppointment: BookAppointment
  });

const AuthNavigator = createStackNavigator({
  Auth: AuthScreen
}, {
  defaultNavigationOptions: navigationHeader
});

const MenusNavigator = createDrawerNavigator({
  ProductsNavigator: ProductsNavigator,
  PatientsOverviewScreen: PatientsOverviewScreen,
  FindDoctor: FindDoctor  
})

const AppNavigator = createSwitchNavigator({
  MenusNavigator: MenusNavigator
})

export default createAppContainer(AppNavigator)
