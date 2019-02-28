webpackHotUpdate("static\\development\\pages\\books.js",{

/***/ "./lib/QueryMutations.js":
/*!*******************************!*\
  !*** ./lib/QueryMutations.js ***!
  \*******************************/
/*! exports provided: GET_CATEGORIES_QUERY, GET_TYPES_QUERY, GET_PUBLISHERS_QUERY, GET_ALL_BOOKS_QUERY, CREATE_BOOK_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_CATEGORIES_QUERY", function() { return GET_CATEGORIES_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TYPES_QUERY", function() { return GET_TYPES_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_PUBLISHERS_QUERY", function() { return GET_PUBLISHERS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALL_BOOKS_QUERY", function() { return GET_ALL_BOOKS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_BOOK_MUTATION", function() { return CREATE_BOOK_MUTATION; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    mutation CREATE_BOOK_MUTATION(\n        $title: String!, \n        $author: String!, \n        # $publisher: String!, \n        # $type: String!, \n        $subject: String!, \n        # $category: String!, \n        $edition: Int!, \n        $quantity: Int!, \n        $detail: String!, \n        $description: String\n        $mrp: Int!, \n        $tags: [String!],\n        $images: [String!],\n        $slug: String!){\n        createProduct(\n            title: $title,\n            author: $author,\n            publisher: $publisher,\n            type: $type,\n            subject: $subject,\n            category: $category,\n            edition: $edition, \n            quantity: $quantity, \n            detail: $detail, \n            description: $description\n            mrp: $mrp, \n            tags: $tags, \n            images: $images, \n            slug: $slug\n         ){\n            id\n            title\n            mrp\n            detail\n            publisher{\n                name\n            }\n        }\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    query GET_TYPES_QUERY{\n        getTypes{\n            id\n            name\n            products{\n                id\n            }\n        }\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    query GET_CATEGORIES_QUERY{\n        getCategories{\n            id\n            name\n            products{\n                id\n            }\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    query GET_PUBLISHERS_QUERY{\n        getPublishers{\n            id\n            name\n            discount\n            products{\n                id\n            }\n        }\n    }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    query GET_ALL_BOOKS_QUERY {\n        getAllBooks{\n            id\n            title \n            author\n            dateTime \n            publisher{\n                name\n                discount\n            }\n            category{\n                name\n            }\n            type{\n                name\n            }\n            mrp\n            images{\n                src\n            }\n            sku\n        }\n    }\n    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GET_ALL_BOOKS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());
var GET_PUBLISHERS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2());
var GET_CATEGORIES_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject3());
var GET_TYPES_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject4());
var CREATE_BOOK_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject5());


/***/ })

})
//# sourceMappingURL=books.js.5f303b1b0c2db1ad6e9d.hot-update.js.map