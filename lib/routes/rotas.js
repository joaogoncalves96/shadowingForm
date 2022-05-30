"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _Login = _interopRequireDefault(require("../components/Login/Login"));

var _List = _interopRequireDefault(require("../components/List/List"));

var _Register = _interopRequireDefault(require("../components/Register/Register"));

var _PrivateRoute = _interopRequireDefault(require("./PrivateRoute"));

var _PrivateRouteLoggedin = _interopRequireDefault(require("./PrivateRouteLoggedin"));

var _Logout = _interopRequireDefault(require("../components/Logout/Logout"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Rotas() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.BrowserRouter, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactRouterDom.Routes, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/logout",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Logout.default, {})
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PrivateRouteLoggedin.default, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Login.default, {})
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/register",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PrivateRouteLoggedin.default, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Register.default, {})
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactRouterDom.Route, {
        path: "/list",
        element: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PrivateRoute.default, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_List.default, {})
        })
      })]
    })
  });
}

var _default = Rotas;
exports.default = _default;