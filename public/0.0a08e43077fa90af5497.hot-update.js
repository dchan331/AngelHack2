webpackHotUpdate(0,{

/***/ 388:
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./frontend/components/Chart.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ 1);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _recharts = __webpack_require__(/*! recharts */ 871);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar data = [{ name: 'a', value: [5, 12] }];\n//\n// import rd3 from 'react-d3-library';\n// var BarChart = rd3.BarChart\n// var barData = [\n//   {\n//     \"name\": \"Series A\",\n//     \"values\": [\n//       { \"x\": 1, \"y\":  150},\n//       { \"x\": 2, \"y\": 290},\n//       { \"x\": 3, \"y\": -25},\n//     ]\n//   },\n//   {\n//     \"name\": \"Series B\",\n//     \"values\": [\n//       { \"x\": 1, \"y\":  9},\n//       { \"x\": 2, \"y\": 49},\n//       { \"x\": 3, \"y\": -20},\n//     ]\n//   },\n//   {\n//     \"name\": \"Series C\",\n//     \"values\": [\n//       { \"x\": 1, \"y\":  14},\n//       { \"x\": 2, \"y\": 77},\n//       { \"x\": 3, \"y\": -70},\n//     ]\n//   }\n// ];\n\nvar Chart = function (_React$Component) {\n  _inherits(Chart, _React$Component);\n\n  function Chart() {\n    _classCallCheck(this, Chart);\n\n    return _possibleConstructorReturn(this, (Chart.__proto__ || Object.getPrototypeOf(Chart)).apply(this, arguments));\n  }\n\n  _createClass(Chart, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          _recharts.BarChart,\n          { width: 730, height: 250, data: data },\n          _react2.default.createElement(XAxis, { dataKey: 'name' }),\n          _react2.default.createElement(YAxis, null),\n          _react2.default.createElement(CartesianGrid, { strokeDasharray: '3 3' }),\n          _react2.default.createElement(Tooltip, null),\n          _react2.default.createElement(Legend, null),\n          _react2.default.createElement(Bar, { dataKey: 'pv', fill: '#8884d8' }),\n          _react2.default.createElement(Bar, { dataKey: 'uv', fill: '#82ca9d' })\n        )\n      );\n    }\n  }]);\n\n  return Chart;\n}(_react2.default.Component);\n\nexports.default = Chart;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzg4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2Zyb250ZW5kL2NvbXBvbmVudHMvQ2hhcnQuanM/YTMzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHtCYXJDaGFydH0gZnJvbSAncmVjaGFydHMnO1xuY29uc3QgZGF0YSA9IFt7IG5hbWU6ICdhJywgdmFsdWU6IFs1LCAxMl0gfV1cbi8vXG4vLyBpbXBvcnQgcmQzIGZyb20gJ3JlYWN0LWQzLWxpYnJhcnknO1xuLy8gdmFyIEJhckNoYXJ0ID0gcmQzLkJhckNoYXJ0XG4vLyB2YXIgYmFyRGF0YSA9IFtcbi8vICAge1xuLy8gICAgIFwibmFtZVwiOiBcIlNlcmllcyBBXCIsXG4vLyAgICAgXCJ2YWx1ZXNcIjogW1xuLy8gICAgICAgeyBcInhcIjogMSwgXCJ5XCI6ICAxNTB9LFxuLy8gICAgICAgeyBcInhcIjogMiwgXCJ5XCI6IDI5MH0sXG4vLyAgICAgICB7IFwieFwiOiAzLCBcInlcIjogLTI1fSxcbi8vICAgICBdXG4vLyAgIH0sXG4vLyAgIHtcbi8vICAgICBcIm5hbWVcIjogXCJTZXJpZXMgQlwiLFxuLy8gICAgIFwidmFsdWVzXCI6IFtcbi8vICAgICAgIHsgXCJ4XCI6IDEsIFwieVwiOiAgOX0sXG4vLyAgICAgICB7IFwieFwiOiAyLCBcInlcIjogNDl9LFxuLy8gICAgICAgeyBcInhcIjogMywgXCJ5XCI6IC0yMH0sXG4vLyAgICAgXVxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgXCJuYW1lXCI6IFwiU2VyaWVzIENcIixcbi8vICAgICBcInZhbHVlc1wiOiBbXG4vLyAgICAgICB7IFwieFwiOiAxLCBcInlcIjogIDE0fSxcbi8vICAgICAgIHsgXCJ4XCI6IDIsIFwieVwiOiA3N30sXG4vLyAgICAgICB7IFwieFwiOiAzLCBcInlcIjogLTcwfSxcbi8vICAgICBdXG4vLyAgIH1cbi8vIF07XG5cbmNsYXNzIENoYXJ0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAgKFxuICAgICAgPGRpdj5cbiAgICAgICAgPEJhckNoYXJ0IHdpZHRoPXs3MzB9IGhlaWdodD17MjUwfSBkYXRhPXtkYXRhfT5cbiAgICAgICAgICA8WEF4aXMgZGF0YUtleT1cIm5hbWVcIiAvPlxuICAgICAgICAgIDxZQXhpcyAvPlxuICAgICAgICAgIDxDYXJ0ZXNpYW5HcmlkIHN0cm9rZURhc2hhcnJheT1cIjMgM1wiIC8+XG4gICAgICAgICAgPFRvb2x0aXAgLz5cbiAgICAgICAgICA8TGVnZW5kIC8+XG4gICAgICAgICAgPEJhciBkYXRhS2V5PVwicHZcIiBmaWxsPVwiIzg4ODRkOFwiIC8+XG4gICAgICAgICAgPEJhciBkYXRhS2V5PVwidXZcIiBmaWxsPVwiIzgyY2E5ZFwiIC8+XG4gICAgICAgIDwvQmFyQ2hhcnQ+XG4gICAgICA8L2Rpdj5cbiAgICApfVxuICB9XG5cbiAgZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gZnJvbnRlbmQvY29tcG9uZW50cy9DaGFydC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQURBO0FBV0E7Ozs7QUFkQTtBQUNBO0FBZ0JBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///388\n");

/***/ })

})