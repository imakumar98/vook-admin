webpackHotUpdate("static\\development\\pages\\books.js",{

/***/ "./pages/books.js":
/*!************************!*\
  !*** ./pages/books.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../lib/QueryMutations */ "./lib/QueryMutations.js");
/* harmony import */ var _components_Books_BookRow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../components/Books/BookRow */ "./components/Books/BookRow.js");
var _jsxFileName = "D:\\Learn\\book-store\\vook-admin\\pages\\books.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var books =
/*#__PURE__*/
function (_Component) {
  _inherits(books, _Component);

  function books() {
    _classCallCheck(this, books);

    return _possibleConstructorReturn(this, _getPrototypeOf(books).apply(this, arguments));
  }

  _createClass(books, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_2__["Query"], {
        query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_3__["GET_ALL_BOOKS_QUERY"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13
          },
          __self: this
        }, "Error");
        if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14
          },
          __self: this
        }, "Loading");
        console.log(data);
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "col-12 grid-margin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "card-header",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "text-center",
          style: {
            marginBottom: '50px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          },
          __self: this
        }, "ALL BOOKS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "pull-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
          prefetch: true,
          href: "/book/add",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 23
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
          className: "btn btn-primary btn-fw",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }, "ADD BOOK")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "card-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "form-sample",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "table-responsive",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
          className: "table",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, "SKU"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, "Image"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          },
          __self: this
        }, "Title"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }, "Author/Publisher"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, "MRP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, "Category"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, "Type"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "Date"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "Action"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, data.getAllBooks.map(function (book, index) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Books_BookRow__WEBPACK_IMPORTED_MODULE_4__["default"], {
            book: book,
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          });
        }), loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, "Loading..."))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }))))));
      });
    }
  }]);

  return books;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (books);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/books")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=books.js.55d43f7bd8671d6fc8d3.hot-update.js.map