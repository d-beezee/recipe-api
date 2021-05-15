"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var route = function route(c, req, res) {
  return res.status(200).json({
    result: 'ok'
  });
};

var _default = route;
exports["default"] = _default;