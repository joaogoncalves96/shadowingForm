"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRouterDom = require("react-router-dom");

var _UseUserState = _interopRequireDefault(require("./UseUserState"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrivateRoute = function PrivateRoute(_ref) {
  var children = _ref.children;
  var UserState = (0, _UseUserState.default)();

  if (!UserState.isloggedin) {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Navigate, {
      to: "/",
      replace: true
    });
  }

  return children;
};

var _default = PrivateRoute;
exports.default = _default;