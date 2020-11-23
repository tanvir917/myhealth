"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactNative = require("react-native");

var _reactRedux = require("react-redux");

var _DoctorItem = _interopRequireDefault(require("../../components/Doctors/DoctorItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MyAppointment = function MyAppointment(props) {
  var listOfDoctors = (0, _reactRedux.useSelector)(function (state) {
    return state.doctorList.availableDoctors;
  });
};

var _default = MyAppointment;
exports["default"] = _default;