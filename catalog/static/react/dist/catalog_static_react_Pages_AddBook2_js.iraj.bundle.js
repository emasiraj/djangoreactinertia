/*! For license information please see catalog_static_react_Pages_AddBook2_js.iraj.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["catalog_static_react_Pages_AddBook2_js"],{"./catalog/static/react/Pages/AddBook2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ AddBook)\n/* harmony export */ });\n/* harmony import */ var _inertiajs_inertia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @inertiajs/inertia */ "./node_modules/@inertiajs/inertia/dist/index.js");\n/* harmony import */ var _inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @inertiajs/inertia-react */ "./node_modules/@inertiajs/inertia-react/dist/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var _Shared_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Shared/Layout */ "./catalog/static/react/Shared/Layout.js");\n/* harmony import */ var _CSRFToken__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CSRFToken */ "./catalog/static/react/Pages/CSRFToken.js");\n/* harmony import */ var _catalog_static_css_index_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../catalog/static/css/index.css */ "./catalog/static/css/index.css");\n\n\n\n\n\n\n\nfunction AddBook(props) {\n  var _useForm = (0,_inertiajs_inertia_react__WEBPACK_IMPORTED_MODULE_1__.useForm)({\n    title: \'\',\n    author: \'DEFAULT\',\n    summary: \'\',\n    isbn: \'\',\n    cover: \'\'\n  }),\n      data = _useForm.data,\n      setData = _useForm.setData,\n      post = _useForm.post,\n      processing = _useForm.processing,\n      errors = _useForm.errors;\n\n  function submit(e) {\n    e.preventDefault();\n    post(\'/catalog/booksubmitted/\');\n  }\n\n  debugger;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("form", {\n    onSubmit: submit\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_CSRFToken__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("ul", {\n    style: {\n      listStyleType: "none"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("label", null, "Title:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {\n    type: "text",\n    name: "title",\n    value: data.name,\n    onChange: function onChange(e) {\n      return setData(\'name\', e.target.value);\n    }\n  })), "Author:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("select", {\n    name: "author",\n    value: data.author,\n    onChange: function onChange(e) {\n      return setData(\'author\', e.target.value);\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("option", {\n    value: "DEFAULT",\n    disabled: true\n  }, "Choose an author..."), props.author_list.slice(0).reverse().map(function (author) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("option", {\n      key: author.pk,\n      value: author.pk\n    }, author.fields.first_name, " ", author.fields.last_name);\n  }))), "Summary:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("textarea", {\n    type: "text",\n    name: "summary",\n    value: data.summary,\n    onChange: function onChange(e) {\n      return setData(\'summary\', e.target.value);\n    }\n  })), "ISBN:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {\n    type: "text",\n    name: "isbn",\n    value: data.isbn,\n    onChange: function onChange(e) {\n      return setData(\'isbn\', e.target.value);\n    }\n  })), "Cover image:", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {\n    type: "file",\n    name: "cover",\n    value: data.cover,\n    onChange: function onChange(e) {\n      return setData(\'cover\', e.target.value);\n    }\n  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("br", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("input", {\n    type: "submit",\n    value: "Submit"\n  }))));\n}\n\n//# sourceURL=webpack:///./catalog/static/react/Pages/AddBook2.js?')},"./catalog/static/react/Pages/CSRFToken.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\n\nfunction getCookie(name) {\n  var cookieValue = null;\n\n  if (document.cookie && document.cookie !== '') {\n    var cookies = document.cookie.split(';');\n\n    for (var i = 0; i < cookies.length; i++) {\n      var cookie = cookies[i].trim(); // Does this cookie string begin with the name we want?\n\n      if (cookie.substring(0, name.length + 1) === name + '=') {\n        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n        break;\n      }\n    }\n  }\n\n  return cookieValue;\n}\n\nvar csrftoken = getCookie('csrftoken');\nfetch(window.location.href, {\n  credentials: 'include',\n  method: 'POST',\n  mode: 'same-origin',\n  headers: {\n    'Accept': 'application/json',\n    'Content-Type': 'application/json',\n    'X-CSRFToken': csrftoken\n  },\n  body: {}\n});\n\nvar CSRFToken = function CSRFToken() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n    type: \"hidden\",\n    name: \"csrfmiddlewaretoken\",\n    value: csrftoken\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CSRFToken);\n\n//# sourceURL=webpack:///./catalog/static/react/Pages/CSRFToken.js?")}}]);