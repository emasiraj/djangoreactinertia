/*! For license information please see catalog_static_react_Pages_AddBook_js.iraj.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["catalog_static_react_Pages_AddBook_js"],{"./catalog/static/react/Pages/AddBook.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ AddBook)\n/* harmony export */ });\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/Layout */ "./catalog/static/react/Shared/Layout.js");\n/* harmony import */ var _CSRFToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSRFToken */ "./catalog/static/react/Pages/CSRFToken.js");\n/* harmony import */ var _catalog_static_css_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../catalog/static/css/index.css */ "./catalog/static/css/index.css");\nfunction _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\n\n\n\n\n\n\n\nvar AddBookForm = /*#__PURE__*/function (_React$Component) {\n  _inherits(AddBookForm, _React$Component);\n\n  var _super = _createSuper(AddBookForm);\n\n  function AddBookForm(props) {\n    var _this;\n\n    _classCallCheck(this, AddBookForm);\n\n    _this = _super.call(this, props);\n    _this.state = {\n      title: \'\',\n      author: \'\',\n      summary: \'\',\n      isbn: \'\'\n    };\n    _this.handleInputChange = _this.handleInputChange.bind(_assertThisInitialized(_this));\n    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));\n    return _this;\n  }\n\n  _createClass(AddBookForm, [{\n    key: "handleInputChange",\n    value: function handleInputChange(event) {\n      var target = event.target;\n      var value = target.value;\n      var name = target.name;\n      this.setState(_defineProperty({}, name, value));\n    }\n  }, {\n    key: "handleSubmit",\n    value: function handleSubmit(event) {\n      event.preventDefault();\n      debugger;\n      _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__.Inertia.post(\'/catalog/books/\', this.state);\n    }\n  }, {\n    key: "render",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("h1", null, "Add a book:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("form", {\n        onSubmit: this.handleSubmit\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_CSRFToken__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("ul", {\n        style: {\n          listStyleType: "none"\n        }\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", null, "Title:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {\n        type: "text",\n        name: "title",\n        value: this.state.name,\n        onChange: this.handleInputChange\n      })), "Author:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {\n        type: "text",\n        name: "author",\n        value: this.state.author,\n        onChange: this.handleInputChange\n      })), "Summary:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("textarea", {\n        type: "text",\n        name: "summary",\n        value: this.state.summary,\n        onChange: this.handleInputChange\n      })), "ISBN:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {\n        type: "text",\n        name: "isbn",\n        value: this.state.isbn,\n        onChange: this.handleInputChange\n      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {\n        type: "submit",\n        value: "Submit"\n      })))));\n    }\n  }]);\n\n  return AddBookForm;\n}(react__WEBPACK_IMPORTED_MODULE_2__.Component);\n\nfunction AddBook(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Shared_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(AddBookForm, null));\n}\n\n//# sourceURL=webpack:///./catalog/static/react/Pages/AddBook.js?')},"./catalog/static/react/Pages/CSRFToken.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n\nvar csrftoken = getCookie(\'csrftoken\');\n\nvar CSRFToken = function CSRFToken() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", {\n    type: "hidden",\n    name: "csrfmiddlewaretoken",\n    value: csrftoken\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CSRFToken);\n\n//# sourceURL=webpack:///./catalog/static/react/Pages/CSRFToken.js?')}}]);