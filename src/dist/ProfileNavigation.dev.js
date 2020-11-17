"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactNavigation = require("react-navigation");

var _reactNavigationTabs = require("react-navigation-tabs");

var _Header = _interopRequireDefault(require("./components/Doctors/Header"));

var _AboutDoctor = _interopRequireDefault(require("./screens/doctors/AboutDoctor"));

var _Chamber = _interopRequireDefault(require("./screens/doctors/Chamber"));

var _Post = _interopRequireDefault(require("./screens/doctors/Post"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TabNavigator = (0, _reactNavigationTabs.createMaterialTopTabNavigator)({
  AboutDoctor: _AboutDoctor["default"],
  Chamber: _Chamber["default"],
  Post: _Post["default"]
}, {
  tabBarComponent: _Header["default"],
  tabBarOptions: {
    activeTintColor: "#1BA1F3",
    inactiveTintColor: "#000"
  },
  initialRouteName: "AboutDoctor"
});
var ProfileNavigation = (0, _reactNavigation.createAppContainer)(TabNavigator);
var _default = ProfileNavigation;
exports["default"] = _default;