"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = require("core-js/fn/reflect"),
    construct = _require.construct;

var CategoryDoctors = function CategoryDoctors(id, Name, image) {
  _classCallCheck(this, CategoryDoctors);

  this.id = id;
  this.Name = Name;
  this.image = image;
};

var _default = CategoryDoctors;
exports["default"] = _default;