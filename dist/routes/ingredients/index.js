"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _post = _interopRequireDefault(require("./post"));

var _get = _interopRequireDefault(require("./get"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(api) {
  api.register({
    "post-ingredients": _post["default"]
  });
};

exports["default"] = _default;