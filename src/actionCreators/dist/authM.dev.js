"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = exports.logout = exports.signup = exports.LOGOUT = exports.LOGIN = exports.SIGNUP = void 0;
var SIGNUP = 'SIGNUP';
exports.SIGNUP = SIGNUP;
var LOGIN = 'LOGIN';
exports.LOGIN = LOGIN;
var LOGOUT = 'LOGOUT';
exports.LOGOUT = LOGOUT;

var signup = function signup(displayName, email, password) {
  return function _callee(dispatch) {
    var response, errorResData, errorId, message, resData;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCvib1iZmXGjoYLtcRbhLO-D3l-O-aflCY', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                displayName: displayName,
                email: email,
                password: password,
                returnSecureToken: true
              })
            }));

          case 3:
            response = _context.sent;

            if (response.ok) {
              _context.next = 12;
              break;
            }

            _context.next = 7;
            return regeneratorRuntime.awrap(response.json());

          case 7:
            errorResData = _context.sent;
            errorId = errorResData.error.message;
            message = 'Something went wrong!';

            if (errorId === 'EMAIL_EXISTS') {
              message = 'This email exists already!';
            }

            throw new Error(message);

          case 12:
            _context.next = 14;
            return regeneratorRuntime.awrap(response.json());

          case 14:
            resData = _context.sent;
            dispatch({
              type: SIGNUP,
              token: resData.idToken,
              userId: resData.localId,
              displayName: resData.displayName,
              email: resData.email
            });
            _context.next = 25;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            throw _context.t0;

          case 25:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 19]]);
  };
};

exports.signup = signup;

var logout = function logout() {
  return {
    type: LOGOUT
  };
};

exports.logout = logout;

var login = function login(email, password) {
  return function _callee2(dispatch) {
    var response, errorResData, errorId, message, resData;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCvib1iZmXGjoYLtcRbhLO-D3l-O-aflCY', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                email: email,
                password: password,
                returnSecureToken: true
              })
            }));

          case 3:
            response = _context2.sent;

            if (response.ok) {
              _context2.next = 12;
              break;
            }

            _context2.next = 7;
            return regeneratorRuntime.awrap(response.json());

          case 7:
            errorResData = _context2.sent;
            errorId = errorResData.error.message;
            message = 'Something went wrong!';

            if (errorId === 'EMAIL_NOT_FOUND') {
              message = 'This email could not be found!';
            } else if (errorId === 'INVALID_PASSWORD') {
              message = 'Password is not valid!';
            }

            throw new Error(message);

          case 12:
            _context2.next = 14;
            return regeneratorRuntime.awrap(response.json());

          case 14:
            resData = _context2.sent;
            dispatch({
              type: LOGIN,
              token: resData.idToken,
              userId: resData.localId,
              displayName: resData.displayName,
              email: resData.email
            });
            _context2.next = 23;
            break;

          case 19:
            _context2.prev = 19;
            _context2.t0 = _context2["catch"](0);
             //console.log('finishing error');

            throw _context2.t0;

          case 23:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 19]]);
  };
};

exports.login = login;