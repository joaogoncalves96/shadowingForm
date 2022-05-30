"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _UseUserState = _interopRequireDefault(require("../../routes/UseUserState"));

var _reactRouterDom = require("react-router-dom");

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Logout() {
  var UserState = (0, _UseUserState.default)();

  function handleSubmit(event) {
    event.preventDefault();
    UserState.handleLoginChange(false);
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    onClick: handleSubmit,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Link, {
      to: "/",
      children: "LOGIN"
    })
  });
}

var _default = Logout;
exports.default = _default;