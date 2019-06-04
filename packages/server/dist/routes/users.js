"use strict";

var _express = _interopRequireDefault(require("express"));

var _const = require("@yourproject/common/src/const");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();
/* GET users listing. */


router.get("/", function (req, res, next) {
  res.send("respond with a resource: [".concat(_const.FOO, "]"));
});
module.exports = router;