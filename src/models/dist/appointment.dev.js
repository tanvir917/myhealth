"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Appointment = function Appointment(id, date, slot, doctorId, hospitalId) {
  _classCallCheck(this, Appointment);

  this.id = id;
  this.date = date;
  this.slot = slot;
  this.doctorId = doctorId;
  this.hospitalId = hospitalId;
};

var _default = Appointment;
exports["default"] = _default;