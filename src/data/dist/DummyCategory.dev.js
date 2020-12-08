"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _categoryModel = _interopRequireDefault(require("../models/categoryModel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CategoryDoctor = [new _categoryModel["default"]('c1', 'Eye Specialist', 'https://i.ibb.co/zPGjSfb/022-eye.png'), new _categoryModel["default"]('c2', 'Cardiologist', 'https://i.ibb.co/zJTwmFh/006-blood-donation.png'), new _categoryModel["default"]('c3', 'Cancer Surgeon', 'https://i.ibb.co/Yh4dkJF/002-bacteria.png'), new _categoryModel["default"]('c4', 'Eye Specialist', 'https://i.ibb.co/zPGjSfb/022-eye.png'), new _categoryModel["default"]('c5', 'Cardiologist', 'https://i.ibb.co/VJxPGqv/019-drugs.png'), new _categoryModel["default"]('c6', 'Cancer Surgeon', 'https://i.ibb.co/WKZcXjd/046-syringe.png')];
var _default = CategoryDoctor;
exports["default"] = _default;