"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _menu = _interopRequireDefault(require("../models/menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MENUS = [new _menu["default"]('p1', 'FindDoctor', 'Find Doctor', 'https://i.ibb.co/2SV08bG/017-doctor.png'), new _menu["default"]('p2', 'FindDoctor', 'Find Chamber', 'https://i.ibb.co/9Vk17fP/033-hospital.png'), new _menu["default"]('p3', 'FindDoctor', 'Find Hospital', 'https://i.ibb.co/XFbsxGh/035-insurance.png'), new _menu["default"]('p4', 'MyAppointment', 'My Appointments', 'https://i.ibb.co/jhLKhmW/021-expenses.png'), new _menu["default"]('p5', 'FindDoctor', 'My Care Team', 'https://i.ibb.co/FHXfcgr/030-heart.png'), new _menu["default"]('p6', 'FindDoctor', 'My Documents', 'https://i.ibb.co/LhXzVT4/025-folder.png'), new _menu["default"]('p7', 'doctorsList', 'My Prescription', 'https://i.ibb.co/j57Xwxm/039-rx.png'), new _menu["default"]('p8', 'doctorsList', 'My Medicine', 'https://i.ibb.co/VJxPGqv/019-drugs.png'), new _menu["default"]('p9', 'doctorsList', 'My Bill', 'https://i.ibb.co/vqHBp3H/027-health-report.png')];
var _default = MENUS;
exports["default"] = _default;