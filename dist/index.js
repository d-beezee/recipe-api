"use strict";

var _express = _interopRequireDefault(require("express"));

var _openapiBackend = _interopRequireDefault(require("openapi-backend"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])(); // create api with your definition file or object

var api = new _openapiBackend["default"]({
  definition: './reference/Recipes.yaml'
}); // register your framework specific request handlers here\

api.register({
  notFound: function notFound(c, req, res) {
    return res.status(404).json({
      err: 'not found'
    });
  }
});
(0, _routes["default"])(api);
app.use(_express["default"].json());
app.use(function (req, res) {
  return api.handleRequest(req, req, res);
});
app.listen(9000);