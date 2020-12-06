"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = retriveData = function retriveData(props) {
  var userEmail = (0, _reactRedux.useSelector)(function (state) {
    return state.authM.email;
  });
  var userName = (0, _reactRedux.useSelector)(function (state) {
    return state.authM.displayName;
  });
  console.log('.........user from userdata.........');
  console.log(userEmail);
  console.log(userName);
};

exports["default"] = _default;