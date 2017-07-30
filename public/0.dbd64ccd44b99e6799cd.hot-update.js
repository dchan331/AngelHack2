webpackHotUpdate(0,{

/***/ 412:
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./frontend/components/Chart.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () {\n  function defineProperties(target, props) {\n    for (var i = 0; i < props.length; i++) {\n      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);\n    }\n  }return function (Constructor, protoProps, staticProps) {\n    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;\n  };\n}();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _recharts = __webpack_require__(/*! recharts */ 897);\n\nvar _axios = __webpack_require__(/*! axios */ 394);\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) {\n  return obj && obj.__esModule ? obj : { default: obj };\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (!self) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }return call && ((typeof call === \"undefined\" ? \"undefined\" : _typeof(call)) === \"object\" || typeof call === \"function\") ? call : self;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function, not \" + (typeof superClass === \"undefined\" ? \"undefined\" : _typeof(superClass)));\n  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;\n}\n\nvar data = [{ name: 'Room 1', Trash: 1500, Recycle: 2400, Compost: 1900 }, { name: 'Room 2', Trash: 1500, Recycle: 2400, Compost: 1900 }, { name: 'Room 3', Trash: 1500, Recycle: 2400, Compost: 1900 }];\n\nfunction wasteCalculator(array) {\n  var total = 0;\n  array.forEach(function (room) {\n    var item = room.wasteHistory;\n    var temp = item.Trash + item.Recycle + item.Compost;\n    total += temp;\n  });\n  return total;\n}\n\nvar Chart = function (_React$Component) {\n  _inherits(Chart, _React$Component);\n\n  function Chart(props) {\n    _classCallCheck(this, Chart);\n\n    var _this = _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).call(this, props));\n\n    _this.state = {\n      data: []\n    };\n    return _this;\n  }\n\n  _createClass(Chart, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      console.log('lg here');\n      _axios2.default.get('http://localhost:3000/recyclable').then(function (resp) {\n        console.log('resp', resp);\n        _this2.setState({ data: resp.data });\n        console.log('data', data);\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var Trash = wasteHistory.Trash;\n      var Recycle = wasteHistory.Recycle;\n      var Compost = wasteHistory.Compost;\n      return _react2.default.createElement('div', { style: { display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' } }, _react2.default.createElement(_recharts.BarChart, {\n        width: 600,\n        height: 300,\n        data: this.state.data,\n        margin: { top: 5, right: 30, left: 20, bottom: 5 },\n        style: { flex: 1 } }, _react2.default.createElement(_recharts.XAxis, { dataKey: 'photonDeviceId' }), _react2.default.createElement(_recharts.YAxis, null), _react2.default.createElement(_recharts.CartesianGrid, { strokeDasharray: '3 3' }), _react2.default.createElement(_recharts.Tooltip, null), _react2.default.createElement(_recharts.Legend, null), _react2.default.createElement(_recharts.Bar, { dataKey: 'wasteHistory.Trash', fill: 'red' }), _react2.default.createElement(_recharts.Bar, { dataKey: 'wasteHistory.Recycle', fill: 'blue' }), _react2.default.createElement(_recharts.Bar, { dataKey: 'wasteHistory.Compost', fill: 'green' })), _react2.default.createElement('div', { style: { flex: 1 } }, 'Total Waste = ', wasteCalculator(this.state.data)));\n    }\n  }]);\n\n  return Chart;\n}(_react2.default.Component);\n\nexports.default = Chart;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNDEyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQ2hhcnQuanM/YTMzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCYXJDaGFydCwgWEF4aXMsIFlBeGlzLCBDYXJ0ZXNpYW5HcmlkLCBUb29sdGlwLCBMZWdlbmQsIEJhcn0gZnJvbSAncmVjaGFydHMnO1xuY29uc3QgZGF0YSA9IFtcbiAgICAgIHtuYW1lOiAnUm9vbSAxJywgVHJhc2g6IDE1MDAsIFJlY3ljbGU6IDI0MDAsIENvbXBvc3Q6MTkwMH0sXG4gICAgICB7bmFtZTogJ1Jvb20gMicsIFRyYXNoOiAxNTAwLCBSZWN5Y2xlOiAyNDAwLCBDb21wb3N0OjE5MDB9LFxuICAgICAge25hbWU6ICdSb29tIDMnLCBUcmFzaDogMTUwMCwgUmVjeWNsZTogMjQwMCwgQ29tcG9zdDoxOTAwfVxuXTtcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmZ1bmN0aW9uIHdhc3RlQ2FsY3VsYXRvcihhcnJheSl7XG4gIGxldCB0b3RhbCA9IDA7XG4gIGFycmF5LmZvckVhY2goKHJvb20pID0+IHtcbiAgICBjb25zdCBpdGVtID0gcm9vbS53YXN0ZUhpc3Rvcnk7XG4gICAgY29uc3QgdGVtcCA9IGl0ZW0uVHJhc2ggKyBpdGVtLlJlY3ljbGUgKyBpdGVtLkNvbXBvc3Q7XG4gICAgdG90YWwgKz0gdGVtcFxuICB9KVxuICByZXR1cm4gdG90YWxcbn1cbmNsYXNzIENoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGRhdGE6IFtdXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coJ2xnIGhlcmUnKTtcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9yZWN5Y2xhYmxlJywgKVxuICAgIC50aGVuKChyZXNwKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygncmVzcCcsIHJlc3ApO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YTogcmVzcC5kYXRhfSlcbiAgICAgIGNvbnNvbGUubG9nKCdkYXRhJywgZGF0YSk7XG4gICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBUcmFzaCA9IHdhc3RlSGlzdG9yeS5UcmFzaDtcbiAgICBjb25zdCBSZWN5Y2xlID0gd2FzdGVIaXN0b3J5LlJlY3ljbGU7XG4gICAgY29uc3QgQ29tcG9zdCA9IHdhc3RlSGlzdG9yeS5Db21wb3N0O1xuICAgIHJldHVybiAgKFxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcid9fT5cbiAgICAgICAgPEJhckNoYXJ0XG4gICAgICAgICAgd2lkdGg9ezYwMH1cbiAgICAgICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgICAgICBkYXRhPXt0aGlzLnN0YXRlLmRhdGF9XG4gICAgICAgICAgbWFyZ2luPXt7dG9wOiA1LCByaWdodDogMzAsIGxlZnQ6IDIwLCBib3R0b206IDV9fVxuICAgICAgICAgIHN0eWxlPXt7ZmxleDogMX19PlxuICAgICAgICAgICA8WEF4aXMgZGF0YUtleT1cInBob3RvbkRldmljZUlkXCIvPlxuICAgICAgICAgICA8WUF4aXMvPlxuICAgICAgICAgICA8Q2FydGVzaWFuR3JpZCBzdHJva2VEYXNoYXJyYXk9XCIzIDNcIi8+XG4gICAgICAgICAgIDxUb29sdGlwLz5cbiAgICAgICAgICAgPExlZ2VuZCAvPlxuICAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJ3YXN0ZUhpc3RvcnkuVHJhc2hcIiBmaWxsPVwicmVkXCIvPlxuICAgICAgICAgICA8QmFyIGRhdGFLZXk9XCJ3YXN0ZUhpc3RvcnkuUmVjeWNsZVwiIGZpbGw9XCJibHVlXCIgLz5cbiAgICAgICAgICAgPEJhciBkYXRhS2V5PVwid2FzdGVIaXN0b3J5LkNvbXBvc3RcIiBmaWxsPVwiZ3JlZW5cIiAvPlxuICAgICAgICAgIDwvQmFyQ2hhcnQ+XG4gICAgICAgICAgPGRpdiBzdHlsZT17e2ZsZXg6IDF9fT5Ub3RhbCBXYXN0ZSA9IHt3YXN0ZUNhbGN1bGF0b3IodGhpcy5zdGF0ZS5kYXRhKX08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICl9XG4gIH1cblxuICBleHBvcnQgZGVmYXVsdCBDaGFydDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBmcm9udGVuZC9jb21wb25lbnRzL0NoYXJ0LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU5BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBOztBQUtBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7Ozs7O0FBN0JBO0FBQ0E7QUEyQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///412\n");

/***/ })

})