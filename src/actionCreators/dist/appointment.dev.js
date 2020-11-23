"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAppointment = exports.ADD_APPOINTMENT = void 0;
var ADD_APPOINTMENT = 'ADD_APPOINTMENT'; //action creator

exports.ADD_APPOINTMENT = ADD_APPOINTMENT;

var addAppointment = function addAppointment(date, slot, doctorId, hospitalId) {
  return {
    type: ADD_APPOINTMENT,
    appointmentData: {
      date: date,
      slot: slot,
      doctorId: doctorId,
      hospitalId: hospitalId
    }
  };
};

exports.addAppointment = addAppointment;