"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Heading(_ref) {
  var _ref$level = _ref.level,
      level = _ref$level === void 0 ? "1" : _ref$level,
      title = _ref.title;
  return _react["default"].createElement("h".concat(level), {}, title);
}

var _default = Heading;
exports["default"] = _default;