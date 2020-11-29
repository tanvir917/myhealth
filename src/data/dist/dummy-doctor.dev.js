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
  image: 'https://picsum.photos/id/237/200/300'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://picsum.photos/id/237/200/300'
}], 'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg'), new _doctor["default"]('d2', 'Dr. Fahmida Basking', 'Cancer Surgeon', 'MBBS in Cardiology, Dhaka Medical', [{
  id: 'h1',
  title: "Medinova Hospital",
  phone: '01843911111',
  email: 'helloworld@gmail.com',
  location: 'Jigatola, Dhanmondi, Dhaka-1207',
  image: 'https://picsum.photos/id/237/200/300'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://picsum.photos/id/237/200/300'
}], 'https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'), new _doctor["default"]('d3', 'Dr. Ziya Basking', 'Cancer Surgeon', 'MBBS in Cardiology, Dhaka Medical', [{
  id: 'h1',
  title: "Medinova Hospital",
  phone: '01843911111',
  email: 'helloworld@gmail.com',
  location: 'Jigatola, Dhanmondi, Dhaka-1207',
  image: 'https://picsum.photos/id/237/200/300'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://picsum.photos/id/237/200/300'
}], 'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg'), new _doctor["default"]('d4', 'Dr. Zim Basking', 'Cardiologist', 'MBBS in Cardiology, Dhaka Medical', [{
  id: 'h1',
  title: "Medinova Hospital",
  phone: '01843911111',
  email: 'helloworld@gmail.com',
  location: 'Jigatola, Dhanmondi, Dhaka-1207',
  image: 'https://picsum.photos/id/237/200/300'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://picsum.photos/id/237/200/300'
}], 'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=blur-blurred-book-pages-46274.jpg&fm=jpg'), new _doctor["default"]('d5', 'Dr. Iqbal Basking', 'CCardiologist', 'MBBS in Cardiology, Dhaka Medical', [{
  id: 'h1',
  title: "Medinova Hospital",
  phone: '01843911111',
  email: 'helloworld@gmail.com',
  location: 'Jigatola, Dhanmondi, Dhaka-1207',
  image: 'https://picsum.photos/id/237/200/300'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://picsum.photos/id/237/200/300'
}], 'https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg'), new _doctor["default"]('d6', 'Dr. Himaloy Basking', 'Eye Specialist', 'MBBS in Cardiology, Dhaka Medical', [{
  id: 'h1',
  title: "Medinova Hospital",
  phone: '01843911111',
  email: 'helloworld@gmail.com',
  location: 'Jigatola, Dhanmondi, Dhaka-1207',
  image: 'https://picsum.photos/id/237/200/300'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://picsum.photos/id/237/200/300'
}], 'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg'), new _doctor["default"]('d7', 'Dr. Himaloy Basking', 'Cancer Surgeon', 'MBBS in Cardiology, Dhaka Medical', [{
  id: 'h1',
  title: "Medinova Hospital",
  phone: '01843911111',
  email: 'helloworld@gmail.com',
  location: 'Jigatola, Dhanmondi, Dhaka-1207',
  image: 'https://picsum.photos/id/237/200/300'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://picsum.photos/id/237/200/300'
}], 'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg'), new _doctor["default"]('d8', 'Dr. Himaloy Basking', 'Cancer Surgeon', 'MBBS in Cardiology, Dhaka Medical', [{
  id: 'h1',
  title: "Medinova Hospital",
  phone: '01843911111',
  email: 'helloworld@gmail.com',
  location: 'Jigatola, Dhanmondi, Dhaka-1207',
  image: 'https://picsum.photos/id/237/200/300'
}, {
  id: 'h2',
  title: "Dhaka Medical Hospital",
  phone: '0182000000',
  email: 'loremipsum@gmail.com',
  location: 'Puran Dhaka, Dhaka-1212',
  image: 'https://picsum.photos/id/237/200/300'
}], 'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg')];
var _default = DOCTORS;
exports["default"] = _default;