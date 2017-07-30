webpackHotUpdate(0,{

/***/ 223:
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./frontend/components/body.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactD3Library = __webpack_require__(/*! react-d3-library */ 454);\n\nvar _reactD3Library2 = _interopRequireDefault(_reactD3Library);\n\nvar _diagram = __webpack_require__(/*! ./diagram */ 224);\n\nvar _diagram2 = _interopRequireDefault(_diagram);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n// const RD3Component = rd3.Component;\nvar BarChart = _reactD3Library2.default.BarChart;\nvar barData = [{\n  \"name\": \"Series A\",\n  \"values\": [{ \"x\": 1, \"y\": 91 }, { \"x\": 2, \"y\": 290 }, { \"x\": 3, \"y\": -25 }]\n}, {\n  \"name\": \"Series B\",\n  \"values\": [{ \"x\": 1, \"y\": 9 }, { \"x\": 2, \"y\": 49 }, { \"x\": 3, \"y\": -20 }]\n}, {\n  \"name\": \"Series C\",\n  \"values\": [{ \"x\": 1, \"y\": 14 }, { \"x\": 2, \"y\": 77 }, { \"x\": 3, \"y\": -70 }]\n}];\n\nconsole.log('node', _diagram2.default);\n\nvar Body = function (_React$Component) {\n  _inherits(Body, _React$Component);\n\n  function Body(props) {\n    _classCallCheck(this, Body);\n\n    var _this = _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).call(this, props));\n\n    _this.state = {\n      barData: []\n    };\n    return _this;\n  }\n\n  _createClass(Body, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      this.setState({ barData: batData });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      console.log('d3 state');\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(BarChart, {\n          data: barData,\n          width: 500,\n          height: 300,\n          title: 'Bar Chart',\n          xAxisLabel: 'Value',\n          yAxisLabel: 'Label'\n        })\n      );\n    }\n  }]);\n\n  return Body;\n}(_react2.default.Component);\n\nexports.default = Body;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvYm9keS5qcz9mYmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmQzIGZyb20gJ3JlYWN0LWQzLWxpYnJhcnknO1xuaW1wb3J0IG5vZGUgZnJvbSAnLi9kaWFncmFtJztcbi8vIGNvbnN0IFJEM0NvbXBvbmVudCA9IHJkMy5Db21wb25lbnQ7XG52YXIgQmFyQ2hhcnQgPSByZDMuQmFyQ2hhcnRcbnZhciBiYXJEYXRhID0gW1xuICB7XG4gICAgXCJuYW1lXCI6IFwiU2VyaWVzIEFcIixcbiAgICBcInZhbHVlc1wiOiBbXG4gICAgICB7IFwieFwiOiAxLCBcInlcIjogIDkxfSxcbiAgICAgIHsgXCJ4XCI6IDIsIFwieVwiOiAyOTB9LFxuICAgICAgeyBcInhcIjogMywgXCJ5XCI6IC0yNX0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU2VyaWVzIEJcIixcbiAgICBcInZhbHVlc1wiOiBbXG4gICAgICB7IFwieFwiOiAxLCBcInlcIjogIDl9LFxuICAgICAgeyBcInhcIjogMiwgXCJ5XCI6IDQ5fSxcbiAgICAgIHsgXCJ4XCI6IDMsIFwieVwiOiAtMjB9LFxuICAgIF1cbiAgfSxcbiAge1xuICAgIFwibmFtZVwiOiBcIlNlcmllcyBDXCIsXG4gICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgeyBcInhcIjogMSwgXCJ5XCI6ICAxNH0sXG4gICAgICB7IFwieFwiOiAyLCBcInlcIjogNzd9LFxuICAgICAgeyBcInhcIjogMywgXCJ5XCI6IC03MH0sXG4gICAgXVxuICB9XG5dO1xuXG5jb25zb2xlLmxvZygnbm9kZScsIG5vZGUpO1xuXG5jbGFzcyBCb2R5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbmNvbnN0cnVjdG9yKHByb3BzKXtcbiAgc3VwZXIocHJvcHMpO1xuICB0aGlzLnN0YXRlID0ge1xuICAgIGJhckRhdGE6IFtdXG4gIH1cbn1cblxuIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgdGhpcy5zZXRTdGF0ZSh7YmFyRGF0YTogYmF0RGF0YX0pO1xuIH1cblxuIHJlbmRlcigpIHtcbiAgIGNvbnNvbGUubG9nKCdkMyBzdGF0ZScsICk7XG4gICByZXR1cm4gKFxuICAgICA8ZGl2PlxuICAgICAgIDxCYXJDaGFydFxuICAgICAgZGF0YT17YmFyRGF0YX1cbiAgICAgIHdpZHRoPXs1MDB9XG4gICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgIHRpdGxlPVwiQmFyIENoYXJ0XCJcbiAgICAgIHhBeGlzTGFiZWw9XCJWYWx1ZVwiXG4gICAgICB5QXhpc0xhYmVsPVwiTGFiZWxcIlxuICAgICAgLz5cbiAgICAgICB7LyogPFJEM0NvbXBvbmVudCBkYXRhPXt0aGlzLnN0YXRlLmQzfSAvPiAqL31cbiAgICAgPC9kaXY+XG4gICApXG4gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb2R5O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGZyb250ZW5kL2NvbXBvbmVudHMvYm9keS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQVNBO0FBQ0E7QUFGQTtBQVNBO0FBQ0E7QUFGQTtBQUNBO0FBU0E7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBRkE7QUFLQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBREE7QUFZQTs7OztBQTNCQTtBQUNBO0FBNkJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///223\n");

/***/ })

})