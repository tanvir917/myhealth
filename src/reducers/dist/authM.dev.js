"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _authM = require("../actionCreators/authM");

var initialState = {
  token: null,
  userId: null,
  displayName: null,
  email: null
};

var _default = function _default() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _authM.LOGIN:
      return {
        token: action.token,
        userId: action.userId,
        displayName: action.displayName,
        email: action.email
      };

    case _authM.SIGNUP:
      return {
        token: action.token,
        userId: action.userId,
        displayname: action.displayname,
        email: action.email
      };

    case _authM.LOGOUT:
      return initialState;

    default:
      return state;
  }
};

exports["default"] = _default;