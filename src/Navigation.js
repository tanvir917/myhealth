import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer';

import { useDispatch } from 'react-redux'
import CheckAuth from './containers/CheckAuth'
import CheckConnection from './containers/CheckConnection'
import Users from './containers/Users'
import CallScreen from './containers/CallScreen'
import Info from './containers/Info'
import { navigationHeader } from './theme'
import AuthScreen from '../src/screens/AuthScreen'
//import SignInScreen from '../src/screens/SignIn/SignInScreen'
import doctorsList from '../src/screens/doctors/doctorsList'
import PatientsOverviewScreen from '../src/screens/patients/PatientsOverviewScreen';
import FindDoctor from './screens/doctors/FindDoctor';
import BookAppointment from '../src/screens/doctors/BookAppointment';
import Colors from './constants/Colors'
import FindChamber from '../src/screens/doctors/FindChamber';
import CheckAppointment from '../src/screens/doctors/CheckAppointment'
import ConfirmAppointment from '../src/screens/doctors/ConfirmAppointment'
import MyAppointment from '../src/screens/doctors/MyAppointment'
import AppointmentDetail from '../src/screens/doctors/AppointmentDetail'
import DoctorProfile from '../src/screens/doctors/DoctorProfile'
import Login from './containers/Auth/Login'
import FirstScreen from './screens/queries/FirstScreen';
import DoctorHome from './screens/doctors/DoctorHome';
import ResultScreen from './screens/queries/ResultScreen';
import PaymentScreen from './screens/doctors/PaymentScreen';

const VideoNavigator = createSwitchNavigator({
  CheckAuth,
  Auth: createStackNavigator({
    Login,
    Info,
  }, {
    initialRouteName: 'Login',
    defaultNavigationOptions: navigationHeader,
  }),
  WebRTC: createSwitchNavigator({
    CheckConnection,
    CallScreen,
    Main: createStackNavigator({
      Users,
      Info,
    }, {
      initialRouteName: 'Users',
      defaultNavigationOptions: navigationHeader,
    })
  }, {
    initialRouteName: 'CheckConnection'
  })
}, {
  initialRouteName: 'CheckAuth'
})

const ProductsNavigator = createStackNavigator(
  {
    PatientsOverviewScreen: PatientsOverviewScreen,
    FindDoctor: FindDoctor,
    FindChamber: FindChamber,
    doctorsList: doctorsList,
    BookAppointment: BookAppointment,
    CheckAppointment: CheckAppointment,
    PaymentScreen: PaymentScreen,
    ConfirmAppointment: ConfirmAppointment,
    MyAppointment: MyAppointment,
    AppointmentDetail: AppointmentDetail,
    DoctorProfile: DoctorProfile,
    Login: Login,
    FirstScreen: FirstScreen,
    DoctorHome: DoctorHome,
    ResultScreen: ResultScreen,
  });

const AuthNavigator = createStackNavigator({
  Auth: AuthScreen,
});

const MenusNavigator = createDrawerNavigator({
  ProductsNavigator: ProductsNavigator,
  PatientsOverviewScreen: PatientsOverviewScreen,
  FindDoctor: FindDoctor  
})

const AppNavigatorD = createSwitchNavigator({
  AuthNavigator: AuthNavigator,
  MenusNavigator: MenusNavigator,
  VideoNavigator: VideoNavigator,
})

export default createAppContainer(AppNavigatorD)
