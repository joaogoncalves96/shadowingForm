"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _reactRouterDom = require("react-router-dom");

var _UseUserState = _interopRequireDefault(require("../../routes/UseUserState"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function Login() {
  var navigate = (0, _reactRouterDom.useNavigate)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      username = _useState2[0],
      setUsername = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      password = _useState4[0],
      setPassword = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      error = _useState6[0],
      setError = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      sucess = _useState8[0],
      setSucess = _useState8[1];

  var UserState = (0, _UseUserState.default)();

  function handleSubmit(event) {
    event.preventDefault(username, password);

    if (username === 'user' && password === 'pass') {
      setSucess('Logged in');
      UserState.handleLoginChange(true);
      navigate('/list');
    } else {
      setError('Invalid credentials');
    }
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "Login"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        value: username,
        placeholder: "Username",
        type: "text",
        onChange: function onChange(e) {
          return setUsername(e.target.value);
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        value: password,
        placeholder: "Password",
        type: "password",
        onChange: function onChange(e) {
          return setPassword(e.target.value);
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "button",
        onClick: handleSubmit,
        children: "Login"
      }), error && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: error
      }), sucess && /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: sucess
      })]
    })]
  });
}

var _default = Login;
exports.default = _default;