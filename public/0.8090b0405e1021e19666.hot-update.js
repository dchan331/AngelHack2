webpackHotUpdate(0,{

/***/ 387:
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./frontend/components/Chart.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n}();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _recharts = __webpack_require__(/*! recharts */ 871);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar data = [{ name: 'Room 1', Trash: 1500, Recycle: 2400, Compost: 1900 }, { name: 'Room 2', Trash: 1500, Recycle: 2400, Compost: 1900 }, { name: 'Room 3', Trash: 1500, Recycle: 2400, Compost: 1900 }];\n\nfunction wasteCalculator(array) {\n  var total = 0;\n  array.forEach(function (room) {\n    var temp = room.Trash + room.Recycle + room.Compost;\n    total += temp;\n  });\n  return total;\n}\n\nvar Chart = function (_React$Component) {\n  _inherits(Chart, _React$Component);\n\n  function Chart(props) {\n    _classCallCheck(this, Chart);\n\n    var _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, props));\n\n    _this.state = {\n      data: []\n    };\n    return _this;\n  }\n\n  _createClass(Chart, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement('div', { style: { display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' } }, _react2.default.createElement(_recharts.BarChart, {\n        width: 600,\n        height: 300,\n        data: this.state.data,\n        margin: { top: 5, right: 30, left: 20, bottom: 5 },\n        style: { flex: 1 } }, _react2.default.createElement(_recharts.XAxis, { dataKey: 'name' }), _react2.default.createElement(_recharts.YAxis, null), _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }), _react2.default.createElement(_recharts.Tooltip, null), _react2.default.createElement(_recharts.Legend, null), _react2.default.createElement(_recharts.Bar, { dataKey: 'Trash', fill: 'red' }), _react2.default.createElement(_recharts.Bar, { dataKey: 'Recycle', fill: 'blue' }), _react2.default.createElement(_recharts.Bar, { dataKey: 'Compost', fill: 'green' })), _react2.default.createElement('div', { style: { flex: 1 } }, 'Total Waste = ', wasteCalculator(data)));\n    }\n  }]);\n\n  return Chart;\n}(_react2.default.Component);\n\nexports.default = Chart;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg3LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQ2hhcnQuanM/YTMzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCYXJDaGFydCwgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLCBUb29sdGlwLCBMZWdlbmQsIEJhcn0gZnJvbSAncmVjaGFydHMnO1xuY29uc3QgZGF0YSA9IFtcbiAgICAgIHtuYW1lOiAnUm9vbSAxJywgVHJhc2g6IDE1MDAsIFJlY3ljbGU6IDI0MDAsIENvbXBvc3Q6MTkwMH0sXG4gICAgICB7bmFtZTogJ1Jvb20gMicsIFRyYXNoOiAxNTAwLCBSZWN5Y2xlOiAyNDAwLCBDb21wb3N0OjE5MDB9LFxuICAgICAge25hbWU6ICdSb29tIDMnLCBUcmFzaDogMTUwMCwgUmVjeWNsZTogMjQwMCwgQ29tcG9zdDoxOTAwfVxuXTtcblxuZnVuY3Rpb24gd2FzdGVDYWxjdWxhdG9yKGFycmF5KXtcbiAgbGV0IHRvdGFsID0gMDtcbiAgYXJyYXkuZm9yRWFjaCgocm9vbSkgPT4ge1xuICAgIGNvbnN0IHRlbXAgPSByb29tLlRyYXNoICsgcm9vbS5SZWN5Y2xlICsgcm9vbS5Db21wb3N0O1xuICAgIHRvdGFsICs9IHRlbXBcbiAgfSlcbiAgcmV0dXJuIHRvdGFsXG59XG5jbGFzcyBDaGFydCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBbXVxuICAgIH1cbiAgfVxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuICAoXG4gICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBhbGlnbkl0ZW1zOiAnY2VudGVyJ319PlxuICAgICAgICA8QmFyQ2hhcnRcbiAgICAgICAgICB3aWR0aD17NjAwfVxuICAgICAgICAgIGhlaWdodD17MzAwfVxuICAgICAgICAgIGRhdGE9e3RoaXMuc3RhdGUuZGF0YX1cbiAgICAgICAgICBtYXJnaW49e3t0b3A6IDUsIHJpZ2h0OiAzMCwgbGVmdDogMjAsIGJvdHRvbTogNX19XG4gICAgICAgICAgc3R5bGU9e3tmbGV4OiAxfX0+XG4gICAgICAgICAgIDxYQXhpcyBkYXRhS2V5PVwibmFtZVwiLz5cbiAgICAgICAgICAgPFlBeGlzLz5cbiAgICAgICAgICAgPENhcnRlc2lhbkdyaWQgc3Ryb2tlRGFzaGFycmF5PVwiMyAzXCIvPlxuICAgICAgICAgICA8VG9vbHRpcC8+XG4gICAgICAgICAgIDxMZWdlbmQgLz5cbiAgICAgICAgICAgPEJhciBkYXRhS2V5PVwiVHJhc2hcIiBmaWxsPVwicmVkXCIvPlxuICAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJSZWN5Y2xlXCIgZmlsbD1cImJsdWVcIiAvPlxuICAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJDb21wb3N0XCIgZmlsbD1cImdyZWVuXCIgLz5cbiAgICAgICAgICA8L0JhckNoYXJ0PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3tmbGV4OiAxfX0+VG90YWwgV2FzdGUgPSB7d2FzdGVDYWxjdWxhdG9yKGRhdGEpfTwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKX1cbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IENoYXJ0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvQ2hhcnQuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBOztBQUtBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBOzs7OztBQWZBO0FBQ0E7QUE2QkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///387\n");

/***/ })

})