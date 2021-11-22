/*! For license information please see catalog_static_react_Pages_Game_js.iraj.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["catalog_static_react_Pages_Game_js"],{"./catalog/static/react/Pages/Game.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ TicTacToe)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var _catalog_static_css_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../catalog/static/css/index.css */ "./catalog/static/css/index.css");\n/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/Layout */ "./catalog/static/react/Shared/Layout.js");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\nfunction Square(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n    className: "square",\n    onClick: props.onClick\n  }, props.value);\n}\n\nvar Board = /*#__PURE__*/function (_React$Component) {\n  _inherits(Board, _React$Component);\n\n  var _super = _createSuper(Board);\n\n  function Board() {\n    _classCallCheck(this, Board);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Board, [{\n    key: "renderSquare",\n    value: function renderSquare(i) {\n      var _this = this;\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Square, {\n        value: this.props.squares[i],\n        onClick: function onClick() {\n          return _this.props.onClick(i);\n        }\n      });\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n        className: "board-row"\n      }, this.renderSquare(0), this.renderSquare(1), this.renderSquare(2)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n        className: "board-row"\n      }, this.renderSquare(3), this.renderSquare(4), this.renderSquare(5)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n        className: "board-row"\n      }, this.renderSquare(6), this.renderSquare(7), this.renderSquare(8)));\n    }\n  }]);\n\n  return Board;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nvar Game = /*#__PURE__*/function (_React$Component2) {\n  _inherits(Game, _React$Component2);\n\n  var _super2 = _createSuper(Game);\n\n  function Game(props) {\n    var _this2;\n\n    _classCallCheck(this, Game);\n\n    _this2 = _super2.call(this, props);\n    _this2.state = {\n      history: [{\n        squares: Array(9).fill(null)\n      }],\n      stepNumber: 0,\n      xIsNext: true\n    };\n    return _this2;\n  }\n\n  _createClass(Game, [{\n    key: "handleClick",\n    value: function handleClick(i) {\n      var history = this.state.history.slice(0, this.state.stepNumber + 1);\n      var current = history[history.length - 1];\n      var squares = current.squares.slice();\n\n      if (calculateWinner(squares) || squares[i]) {\n        return;\n      }\n\n      squares[i] = this.state.xIsNext ? \'X\' : \'O\';\n      this.setState({\n        history: history.concat([{\n          squares: squares\n        }]),\n        stepNumber: history.length,\n        xIsNext: !this.state.xIsNext\n      });\n    }\n  }, {\n    key: "jumpTo",\n    value: function jumpTo(step) {\n      this.setState({\n        stepNumber: step,\n        xIsNext: step % 2 === 0\n      });\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      var _this3 = this;\n\n      var history = this.state.history;\n      var current = history[this.state.stepNumber];\n      var winner = calculateWinner(current.squares);\n      var moves = history.map(function (step, move) {\n        var desc = move ? \'Go to move #\' + move : \'Go to game start\';\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {\n          key: move\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", {\n          onClick: function onClick() {\n            return _this3.jumpTo(move);\n          }\n        }, desc));\n      });\n      var status;\n\n      if (winner) {\n        status = \'Winner: \' + winner;\n      } else {\n        status = \'Next player: \' + (this.state.xIsNext ? \'X\' : \'O\');\n      }\n\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n        className: "game"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n        className: "game-board"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Board, {\n        squares: current.squares,\n        onClick: function onClick(i) {\n          return _this3.handleClick(i);\n        }\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {\n        className: "game-info"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, status), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", null, moves)));\n    }\n  }]);\n\n  return Game;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n\nfunction calculateWinner(squares) {\n  var lines = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];\n\n  for (var i = 0; i < lines.length; i++) {\n    var _lines$i = _slicedToArray(lines[i], 3),\n        a = _lines$i[0],\n        b = _lines$i[1],\n        c = _lines$i[2];\n\n    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {\n      return squares[a];\n    }\n  }\n\n  return null;\n} // ========================================\n// ReactDOM.render(\n//   <Game />,\n//   document.getElementById(\'root\')\n// );\n\n\nfunction TicTacToe() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1", null, " Play a game of tic tac toe "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Game, null));\n}\n;\n\n//# sourceURL=webpack:///./catalog/static/react/Pages/Game.js?')}}]);