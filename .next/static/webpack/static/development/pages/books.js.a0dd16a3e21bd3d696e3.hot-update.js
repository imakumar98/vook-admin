webpackHotUpdate("static\\development\\pages\\books.js",{

/***/ "./components/Books/BookRow.js":
/*!*************************************!*\
  !*** ./components/Books/BookRow.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_utilFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../lib/utilFunctions */ "./lib/utilFunctions.js");
/* harmony import */ var _lib_utilFunctions__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Learn\\book-store\\vook-admin\\components\\Books\\BookRow.js";




function BookRow(_ref) {
  var book = _ref.book;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "# ", book.sku), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: book.images[0].src,
    className: "img-fluid",
    style: {
      borderRadius: '0',
      width: '80px',
      height: '100px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/book-edit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, book.title))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, book.author, ", ", Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_2__["getCapitalizedString"])(book.publisher.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, book.mrp), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_2__["getCapitalizedString"])(book.category.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_2__["getCapitalizedString"])(book.type.name)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, book.dateTime), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/book",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "EDIT")), "\xA0\xA0", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "DELETE"))));
}

/* harmony default export */ __webpack_exports__["default"] = (BookRow);

/***/ })

})
//# sourceMappingURL=books.js.a0dd16a3e21bd3d696e3.hot-update.js.map