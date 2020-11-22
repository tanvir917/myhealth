"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Doctor = function Doctor(id, name, role, degree, hospital, imageUrl) {
  _classCallCheck(this, Doctor);

  this.id = id;
  this.name = name;
  this.role = role;
  this.degree = degree, this.hospital = hospital, this.imageUrl = imageUrl;
};

var _default = Doctor;
exports["default"] = _default;