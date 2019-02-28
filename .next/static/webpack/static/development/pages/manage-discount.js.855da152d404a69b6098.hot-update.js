webpackHotUpdate("static\\development\\pages\\manage-discount.js",{

/***/ "./components/ManageDiscount/BookCategoryList.js":
/*!*******************************************************!*\
  !*** ./components/ManageDiscount/BookCategoryList.js ***!
  \*******************************************************/
/*! exports provided: default, GET_CATEGORIES_QUERY, GET_TYPES_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BookCategory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BookCategory */ "./components/ManageDiscount/BookCategory.js");
/* harmony import */ var _BookType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BookType */ "./components/ManageDiscount/BookType.js");
/* harmony import */ var _BookPublisher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BookPublisher */ "./components/ManageDiscount/BookPublisher.js");
/* harmony import */ var _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../lib/QueryMutations */ "./lib/QueryMutations.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES_QUERY", function() { return _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_5__["GET_CATEGORIES_QUERY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GET_TYPES_QUERY", function() { return _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_5__["GET_TYPES_QUERY"]; });

var _jsxFileName = "D:\\Learn\\book-store\\vook-admin\\components\\ManageDiscount\\BookCategoryList.js";







function BookCategoryList() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-lg-6 grid-margin stretch-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    class: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Book Categories"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "table-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    class: "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Sno."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Category Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Discount"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Quantity"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_5__["GET_CATEGORIES_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        error = _ref.error,
        loading = _ref.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Loading...")));
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, {
      error: "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, data.getCategories.map(function (category, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookCategory__WEBPACK_IMPORTED_MODULE_2__["default"], {
        category: category,
        key: index,
        sno: index + 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      });
    }));
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-lg-6 grid-margin stretch-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    class: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Book Types"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "table-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    class: "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Sno."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Type Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Quantity"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_5__["GET_TYPES_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, function (_ref2) {
    var data = _ref2.data,
        error = _ref2.error,
        loading = _ref2.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      },
      __self: this
    }, "Loading...")));
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, {
      error: "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    });
    console.log(data);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65
      },
      __self: this
    }, data.getTypes.map(function (type, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookType__WEBPACK_IMPORTED_MODULE_3__["default"], {
        type: type,
        key: index,
        sno: index + 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      });
    }));
  }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "col-lg-12 grid-margin stretch-card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    class: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Publisher List"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    class: "table-responsive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
    class: "table",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, "Sno."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Publisher Name"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, "Discount"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Quantity"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_5__["GET_PUBLISHERS_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, function (_ref3) {
    var data = _ref3.data,
        error = _ref3.error,
        loading = _ref3.loading;
    if (loading) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, "Loading...")));
    if (error) return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Error, {
      error: "error",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    });
    console.log(data);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, data.getPublishers.map(function (publisher, index) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BookPublisher__WEBPACK_IMPORTED_MODULE_4__["default"], {
        publisher: publisher,
        key: index,
        sno: index + 1,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      });
    }));
  }))))))));
}

/* harmony default export */ __webpack_exports__["default"] = (BookCategoryList);


/***/ })

})
//# sourceMappingURL=manage-discount.js.855da152d404a69b6098.hot-update.js.map