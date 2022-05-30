"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactRouterDom = require("react-router-dom");

var _jsxRuntime = require("react/jsx-runtime");

function Register() {
  var navigate = (0, _reactRouterDom.useNavigate)();

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/');
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("h1", {
      children: "Register"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("form", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "text",
        placeholder: "Name"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "email",
        placeholder: "Email"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
        type: "password",
        placeholder: "Password"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
        type: "submit",
        children: "Register"
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      type: "button",
      onClick: handleSubmit,
      children: "Login"
    })]
  });
}

var _default = Register;
exports.default = _default;