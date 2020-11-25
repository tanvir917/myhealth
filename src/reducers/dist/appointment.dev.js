"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _appointment = require("../actionCreators/appointment");

var _appointment2 = _interopRequireDefault(require("../models/appointment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  appointments: []
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _appointment.ADD_APPOINTMENT:
      var newAppointment = new _appointment2["default"](new Date().toString(), action.appointmentData.patientId, action.appointmentData.patientName, action.appointmentData.patientEmail, action.appointmentData.doctorName, action.appointmentData.doctorRole, action.appointmentData.appStatus, action.appointmentData.doctorImage, action.appointmentData.date, action.appointmentData.slot, action.appointmentData.hosAddress, action.appointmentData.doctorId, action.appointmentData.hospitalId);
      return _objectSpread({}, state, {
        //copying old state which is redundant here
        appointments: state.appointments.concat(newAppointment) //creating a brand new arry order

      });
  }

  return state;
};

exports["default"] = _default;