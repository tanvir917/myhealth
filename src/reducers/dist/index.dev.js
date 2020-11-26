"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _app = _interopRequireDefault(require("./app"));

var _auth = _interopRequireDefault(require("./auth"));

var _chat = _interopRequireDefault(require("./chat"));

var _info = _interopRequireDefault(require("./info"));

var _users = _interopRequireDefault(require("./users"));

var _webrtc = _interopRequireDefault(require("./webrtc"));

var _authM = _interopRequireDefault(require("./authM"));

var _menus = _interopRequireDefault(require("./menus"));

var _doctorList = _interopRequireDefault(require("./doctorList"));

var _appointment = _interopRequireDefault(require("./appointment"));

var _categoryreducer = _interopRequireDefault(require("./categoryreducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _redux.combineReducers)({
  app: _app["default"],
  auth: _auth["default"],
  chat: _chat["default"],
  info: _info["default"],
  users: _users["default"],
  webrtc: _webrtc["default"],
  authM: _authM["default"],
  menus: _menus["default"],
  doctorList: _doctorList["default"],
  appointment: _appointment["default"],
  categoryreducer: _categoryreducer["default"]
});

exports["default"] = _default;