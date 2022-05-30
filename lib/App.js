"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./App.css");

var _rotas = _interopRequireDefault(require("./routes/rotas"));

var _jsxRuntime = require("react/jsx-runtime");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_rotas.default, {});
}

var _default = App;
exports.default = _default;