"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNavigation = require("react-navigation");

var _reactNavigationStack = require("react-navigation-stack");

var _reactNavigationDrawer = require("react-navigation-drawer");

var _reactRedux = require("react-redux");

var _CheckAuth = _interopRequireDefault(require("./containers/CheckAuth"));

var _CheckConnection = _interopRequireDefault(require("./containers/CheckConnection"));

var _Users = _interopRequireDefault(require("./containers/Users"));

var _CallScreen = _interopRequireDefault(require("./containers/CallScreen"));

var _Info = _interopRequireDefault(require("./containers/Info"));

var _theme = require("./theme");

var _AuthScreen = _interopRequireDefault(require("../src/screens/AuthScreen"));

var _doctorsList = _interopRequireDefault(require("../src/screens/doctors/doctorsList"));

var _PatientsOverviewScreen = _interopRequireDefault(require("../src/screens/patients/PatientsOverviewScreen"));

var _FindDoctor = _interopRequireDefault(require("./screens/doctors/FindDoctor"));

var _BookAppointment = _interopRequireDefault(require("../src/screens/doctors/BookAppointment"));

var _Colors = _interopRequireDefault(require("./constants/Colors"));

var _FindChamber = _interopRequireDefault(require("../src/screens/doctors/FindChamber"));

var _CheckAppointment = _interopRequireDefault(require("../src/screens/doctors/CheckAppointment"));

var _ConfirmAppointment = _interopRequireDefault(require("../src/screens/doctors/ConfirmAppointment"));

var _MyAppointment = _interopRequireDefault(require("../src/screens/doctors/MyAppointment"));

var _AppointmentDetail = _interopRequireDefault(require("../src/screens/doctors/AppointmentDetail"));

var _DoctorProfile = _interopRequireDefault(require("../src/screens/doctors/DoctorProfile"));

var _Login = _interopRequireDefault(require("./containers/Auth/Login"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var VideoNavigator = (0, _reactNavigation.createSwitchNavigator)({
  CheckAuth: _CheckAuth["default"],
  Auth: (0, _reactNavigationStack.createStackNavigator)({
    Login: _Login["default"],
    Info: _Info["default"]
  }, {
    initialRouteName: 'Login',
    defaultNavigationOptions: _theme.navigationHeader
  }),
  WebRTC: (0, _reactNavigation.createSwitchNavigator)({
    CheckConnection: _CheckConnection["default"],
    CallScreen: _CallScreen["default"],
    Main: (0, _reactNavigationStack.createStackNavigator)({
      Users: _Users["default"],
      Info: _Info["default"]
    }, {
      initialRouteName: 'Users',
      defaultNavigationOptions: _theme.navigationHeader
    })
  }, {
    initialRouteName: 'CheckConnection'
  })
}, {
  initialRouteName: 'CheckAuth'
});
var ProductsNavigator = (0, _reactNavigationStack.createStackNavigator)({
  PatientsOverviewScreen: _PatientsOverviewScreen["default"],
  FindDoctor: _FindDoctor["default"],
  FindChamber: _FindChamber["default"],
  doctorsList: _doctorsList["default"],
  BookAppointment: _BookAppointment["default"],
  CheckAppointment: _CheckAppointment["default"],
  ConfirmAppointment: _ConfirmAppointment["default"],
  MyAppointment: _MyAppointment["default"],
  AppointmentDetail: _AppointmentDetail["default"],
  DoctorProfile: _DoctorProfile["default"],
  Login: _Login["default"]
});
var AuthNavigator = (0, _reactNavigationStack.createStackNavigator)({
  Auth: _AuthScreen["default"]
});
var MenusNavigator = (0, _reactNavigationDrawer.createDrawerNavigator)({
  ProductsNavigator: ProductsNavigator,
  PatientsOverviewScreen: _PatientsOverviewScreen["default"],
  FindDoctor: _FindDoctor["default"]
});
var AppNavigatorD = (0, _reactNavigation.createSwitchNavigator)({
  //AuthNavigator: AuthNavigator,
  MenusNavigator: MenusNavigator,
  VideoNavigator: VideoNavigator
});

var _default = (0, _reactNavigation.createAppContainer)(AppNavigatorD);

exports["default"] = _default;