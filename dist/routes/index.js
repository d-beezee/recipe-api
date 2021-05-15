"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _recipes = _interopRequireDefault(require("./recipes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var register = function register(api) {
  (0, _recipes["default"])(api);
};

var _default = register;
exports["default"] = _default;