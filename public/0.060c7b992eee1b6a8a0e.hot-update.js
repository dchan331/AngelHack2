webpackHotUpdate(0,{

/***/ 223:
/* no static exports found */
/* all exports used */
/*!*************************************!*\
  !*** ./frontend/components/body.js ***!
  \*************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ 4);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactD3Library = __webpack_require__(/*! react-d3-library */ 454);\n\nvar _reactD3Library2 = _interopRequireDefault(_reactD3Library);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar BarChart = _reactD3Library2.default.BarChart;\nvar barData = [{\n  \"name\": \"Series A\",\n  \"values\": [{ \"x\": 1, \"y\": 150 }, { \"x\": 2, \"y\": 290 }, { \"x\": 3, \"y\": -25 }]\n}, {\n  \"name\": \"Series B\",\n  \"values\": [{ \"x\": 1, \"y\": 9 }, { \"x\": 2, \"y\": 49 }, { \"x\": 3, \"y\": -20 }]\n}, {\n  \"name\": \"Series C\",\n  \"values\": [{ \"x\": 1, \"y\": 14 }, { \"x\": 2, \"y\": 77 }, { \"x\": 3, \"y\": -70 }]\n}];\n\nvar Body = _react2.default.createClass({\n  displayName: 'Body',\n\n  render: function render() {\n    return _react2.default.createElement(\n      'div',\n      null,\n      _react2.default.createElement(BarChart, {\n        data: barData,\n        width: 500,\n        height: 300,\n        title: 'Bar Chart',\n        xAxisLabel: 'Value',\n        yAxisLabel: 'Label'\n      })\n    );\n  }\n});\n\nexports.default = Body;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjIzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvYm9keS5qcz9mYmU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmQzIGZyb20gJ3JlYWN0LWQzLWxpYnJhcnknO1xudmFyIEJhckNoYXJ0ID0gcmQzLkJhckNoYXJ0XG52YXIgYmFyRGF0YSA9IFtcbiAge1xuICAgIFwibmFtZVwiOiBcIlNlcmllcyBBXCIsXG4gICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgeyBcInhcIjogMSwgXCJ5XCI6ICAxNTB9LFxuICAgICAgeyBcInhcIjogMiwgXCJ5XCI6IDI5MH0sXG4gICAgICB7IFwieFwiOiAzLCBcInlcIjogLTI1fSxcbiAgICBdXG4gIH0sXG4gIHtcbiAgICBcIm5hbWVcIjogXCJTZXJpZXMgQlwiLFxuICAgIFwidmFsdWVzXCI6IFtcbiAgICAgIHsgXCJ4XCI6IDEsIFwieVwiOiAgOX0sXG4gICAgICB7IFwieFwiOiAyLCBcInlcIjogNDl9LFxuICAgICAgeyBcInhcIjogMywgXCJ5XCI6IC0yMH0sXG4gICAgXVxuICB9LFxuICB7XG4gICAgXCJuYW1lXCI6IFwiU2VyaWVzIENcIixcbiAgICBcInZhbHVlc1wiOiBbXG4gICAgICB7IFwieFwiOiAxLCBcInlcIjogIDE0fSxcbiAgICAgIHsgXCJ4XCI6IDIsIFwieVwiOiA3N30sXG4gICAgICB7IFwieFwiOiAzLCBcInlcIjogLTcwfSxcbiAgICBdXG4gIH1cbl07XG5cbnZhciBCb2R5ID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAgKFxuICAgICAgPGRpdj5cbiAgICBcdDxCYXJDaGFydFxuICAgICAgZGF0YT17YmFyRGF0YX1cbiAgICAgIHdpZHRoPXs1MDB9XG4gICAgICBoZWlnaHQ9ezMwMH1cbiAgICAgIHRpdGxlPVwiQmFyIENoYXJ0XCJcbiAgICAgIHhBeGlzTGFiZWw9XCJWYWx1ZVwiXG4gICAgICB5QXhpc0xhYmVsPVwiTGFiZWxcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKX1cbn0pO1xuXG5cbmV4cG9ydCBkZWZhdWx0IEJvZHk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9ib2R5LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBRkE7QUFTQTtBQUNBO0FBRkE7QUFDQTtBQVNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQURBO0FBVUE7QUFiQTtBQUNBO0FBZ0JBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///223\n");

/***/ })

})