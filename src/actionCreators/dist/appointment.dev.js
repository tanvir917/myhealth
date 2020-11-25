"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addAppointment = exports.ADD_APPOINTMENT = void 0;
var ADD_APPOINTMENT = 'ADD_APPOINTMENT'; //action creator

exports.ADD_APPOINTMENT = ADD_APPOINTMENT;

var addAppointment = function addAppointment(patientId, patientName, patientEmail, doctorName, doctorRole, appStatus, doctorImage, date, slot, hosAddress, doctorId, hospitalId) {
  return {
    type: ADD_APPOINTMENT,
    appointmentData: {
      patientId: patientId,
      patientName: patientName,
      patientEmail: patientEmail,
      doctorName: doctorName,
      doctorRole: doctorRole,
      appStatus: appStatus,
      doctorImage: doctorImage,
      date: date,
      slot: slot,
      hosAddress: hosAddress,
      doctorId: doctorId,
      hospitalId: hospitalId
    }
  };
};

exports.addAppointment = addAppointment;