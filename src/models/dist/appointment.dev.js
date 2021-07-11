"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Appointment = function Appointment(id, patientId, patientName, patientEmail, doctorName, doctorRole, appStatus, doctorImage, date, slot, hosAddress, doctorId, hospitalId) {
  _classCallCheck(this, Appointment);

  this.id = id;
  this.patientId = patientId;
  this.patientName = patientName;
  this.patientEmail = patientEmail;
  this.doctorName = doctorName;
  this.doctorRole = doctorRole;
  this.appStatus = appStatus;
  this.doctorImage = doctorImage;
  this.date = date;
  this.slot = slot;
  this.hosAddress = hosAddress;
  this.doctorId = doctorId;
  this.hospitalId = hospitalId;
};

var _default = Appointment;
exports["default"] = _default;