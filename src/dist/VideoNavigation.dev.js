"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNavigation = require("react-navigation");

var _reactNavigationStack = require("react-navigation-stack");

var _CheckAuth = _interopRequireDefault(require("./containers/CheckAuth"));

var _Login = _interopRequireDefault(require("./containers/Auth/Login"));

var _CheckConnection = _interopRequireDefault(require("./containers/CheckConnection"));

var _Users = _interopRequireDefault(require("./containers/Users"));

var _CallScreen = _interopRequireDefault(require("./containers/CallScreen"));

var _Info = _interopRequireDefault(require("./containers/Info"));

var _theme = require("./theme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AppNavigator = (0, _reactNavigation.createSwitchNavigator)({
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

var _default = (0, _reactNavigation.createAppContainer)(AppNavigator);

exports["default"] = _default;