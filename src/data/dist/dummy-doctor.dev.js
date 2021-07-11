"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _doctor = _interopRequireDefault(require("../models/doctor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DOCTORS = [new _doctor["default"]('d1', 'Dr. Ariana Basking', 'Cancer Surgeon', 'MBBS in Cardiology, Dhaka Medical', [{
  id: 'h1',
  title: "Medinova Hospital",
  phone: '01843911111',
  email: 'helloworld@gmail.com',
  location: 'Jigatola, Dhanmondi, Dhaka-1207',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}], 'https://i.ibb.co/mbzWr1X/doctor-character-background-1270-84.jpg'), new _doctor["default"]('d2', 'Dr. Fahmida Basking', 'Cancer Surgeon', 'MBBS in Cardiology, Dhaka Medical', [{
  id: 'h1',
  title: "Medinova Hospital",
  phone: '01843911111',
  email: 'helloworld@gmail.com',
  location: 'Jigatola, Dhanmondi, Dhaka-1207',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}], 'https://i.ibb.co/mbzWr1X/doctor-character-background-1270-84.jpg'), new _doctor["default"]('d3', 'Dr. Ziya Basking', 'Cancer Surgeon', 'MBBS in Cardiology, Dhaka Medical', [{
  id: 'h1',
  title: "Medinova Hospital",
  phone: '01843911111',
  email: 'helloworld@gmail.com',
  location: 'Jigatola, Dhanmondi, Dhaka-1207',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}], 'https://i.ibb.co/mbzWr1X/doctor-character-background-1270-84.jpg'), new _doctor["default"]('d4', 'Dr. Zim Basking', 'Cardiologist', 'MBBS in Cardiology, Dhaka Medical', [{
  id: 'h1',
  title: "Medinova Hospital",
  phone: '01843911111',
  email: 'helloworld@gmail.com',
  location: 'Jigatola, Dhanmondi, Dhaka-1207',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}], 'https://i.ibb.co/mbzWr1X/doctor-character-background-1270-84.jpg'), new _doctor["default"]('d5', 'Dr. Iqbal Basking', 'CCardiologist', 'MBBS in Cardiology, Dhaka Medical', [{
  id: 'h1',
  title: "Medinova Hospital",
  phone: '01843911111',
  email: 'helloworld@gmail.com',
  location: 'Jigatola, Dhanmondi, Dhaka-1207',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}], 'https://i.ibb.co/mbzWr1X/doctor-character-background-1270-84.jpg'), new _doctor["default"]('d6', 'Dr. Himaloy Basking', 'Eye Specialist', 'MBBS in Cardiology, Dhaka Medical', [{
  id: 'h1',
  title: "Medinova Hospital",
  phone: '01843911111',
  email: 'helloworld@gmail.com',
  location: 'Jigatola, Dhanmondi, Dhaka-1207',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}], 'https://i.ibb.co/mbzWr1X/doctor-character-background-1270-84.jpg'), new _doctor["default"]('d7', 'Dr. Himaloy Basking', 'Cancer Surgeon', 'MBBS in Cardiology, Dhaka Medical', [{
  id: 'h1',
  title: "Medinova Hospital",
  phone: '01843911111',
  email: 'helloworld@gmail.com',
  location: 'Jigatola, Dhanmondi, Dhaka-1207',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}], 'https://i.ibb.co/mbzWr1X/doctor-character-background-1270-84.jpg'), new _doctor["default"]('d8', 'Dr. Himaloy Basking', 'Cancer Surgeon', 'MBBS in Cardiology, Dhaka Medical', [{
  id: 'h1',
  title: "Medinova Hospital",
  phone: '01843911111',
  email: 'helloworld@gmail.com',
  location: 'Jigatola, Dhanmondi, Dhaka-1207',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://i.ibb.co/sJ35vxC/hospital.jpg'
}], 'https://i.ibb.co/mbzWr1X/doctor-character-background-1270-84.jpg')];
var _default = DOCTORS;
exports["default"] = _default;