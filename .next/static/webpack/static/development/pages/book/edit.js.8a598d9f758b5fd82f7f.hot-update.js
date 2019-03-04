webpackHotUpdate("static\\development\\pages\\book\\edit.js",{

/***/ "./components/Books/Edit.js":
/*!**********************************!*\
  !*** ./components/Books/Edit.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_InputGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../common/InputGroup */ "./components/common/InputGroup.js");
/* harmony import */ var _common_TextareaGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common/TextareaGroup */ "./components/common/TextareaGroup.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/Tag */ "./components/Tag.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _common_SelectOption__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../common/SelectOption */ "./components/common/SelectOption.js");
/* harmony import */ var _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../lib/QueryMutations */ "./lib/QueryMutations.js");
/* harmony import */ var _lib_utilFunctions__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../lib/utilFunctions */ "./lib/utilFunctions.js");
/* harmony import */ var _lib_utilFunctions__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../config */ "./config.js");
/* harmony import */ var apollo_fetch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! apollo-fetch */ "./node_modules/apollo-fetch/dist/index.js");

var _jsxFileName = "D:\\Learn\\book-store\\vook-admin\\components\\Books\\Edit.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }















var Edit =
/*#__PURE__*/
function (_Component) {
  _inherits(Edit, _Component);

  function Edit(props) {
    var _this;

    _classCallCheck(this, Edit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Edit).call(this));
    _this.state = {
      id: props.bookId,
      title: '',
      author: '',
      publisher: '',
      category: '',
      subject: '',
      type: '',
      edition: '',
      quantity: '',
      detail: '',
      description: '',
      mrp: '',
      tags: [],
      tag: '',
      images: [],
      slug: ''
    };
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDragOver = _this.onDragOver.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDrop = _this.onDrop.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onDragLeave = _this.onDragLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.addTag = _this.addTag.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.removeTag = _this.removeTag.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Edit, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var fetch, res, book;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetch = Object(apollo_fetch__WEBPACK_IMPORTED_MODULE_13__["createApolloFetch"])({
                  uri: _config__WEBPACK_IMPORTED_MODULE_12__["endpoint"]
                });
                _context.next = 3;
                return fetch({
                  query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_10__["GET_SINGLE_BOOK"],
                  variables: {
                    id: this.state.id
                  }
                });

              case 3:
                res = _context.sent;
                if (!res) console.log(res);
                book = res.data.getSingleBook;
                console.log(book);
                fetch({
                  query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_10__["GET_SINGLE_BOOK"],
                  variables: {
                    id: this.state.id
                  }
                }).then(function (res) {
                  console.log(res);
                }).catch(function (err) {
                  console.log(err);
                });

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "onDragOver",
    value: function onDragOver(e) {
      e.preventDefault();
      document.getElementById('dropzone').className = 'dropzone dragover';
    }
  }, {
    key: "onDrop",
    value: function onDrop(event) {
      var _this2 = this;

      event.preventDefault();
      document.getElementById('dropzone').className = 'dropzone';
      document.getElementById('dropzone-text').style.display = 'none';
      var files = event.dataTransfer.files;

      if (files.length > 5) {
        return alert('Invalid');
      }

      for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var extension = file.name.substr(file.name.lastIndexOf('.') + 1);
        var allowedExtension = ['jpg', 'jpeg', 'png', 'JPG'];

        if (allowedExtension.indexOf(extension) === -1) {
          console.log("Invalid file");
        } else {
          var data = new FormData();
          data.append('image', file, file.name);
          var config = {
            headers: {
              'content-type': 'multipart/form-data'
            },
            onUploadProgress: function onUploadProgress(progressEvent) {
              var percentCompleted = Math.round(progressEvent.loaded * 100 / progressEvent.total);
              console.log(percentCompleted);
            }
          };
          axios__WEBPACK_IMPORTED_MODULE_4___default.a.post(_config__WEBPACK_IMPORTED_MODULE_12__["imageServerUrl"], data, config).then(function (res) {
            if (res.data.success) {
              var variable = 'image' + (i + 1);
              var div = document.createElement('div');
              div.className = 'dropzone-image';
              div.innerHTML = '<img src="' + res.data.url + '" name="' + variable + '" className="img-responsive" width="92px" height="125px">';
              document.getElementById('dropzone-images').appendChild(div);

              _this2.setState({
                images: _toConsumableArray(_this2.state.images).concat([res.data.url])
              });
            }
          }).catch(function (err) {
            console.log(err);
          });
        }
      }
    }
  }, {
    key: "onDragLeave",
    value: function onDragLeave() {
      document.getElementById('dropzone').className = 'dropzone';
    }
  }, {
    key: "onChange",
    value: function onChange(e) {
      if (e.target.name == 'category') {
        document.getElementById('subject').innerHTML = '';

        if (e.target.value == 'class 9') {
          var html = '';
          var subjects = ['Hindi', 'English', 'Maths', 'Science', 'History', 'Geography', 'Economics', 'Political Science'];
          subjects.map(function (subject) {
            html = html + "<option value='" + subject + "'>" + subject + "</option>";
          });
          document.getElementById('subject').innerHTML = html;
        } else if (e.target.value == 'class 10') {
          var html = '';
          var subjects = ['Hindi', 'English', 'Maths', 'Science', 'History', 'Geography', 'Economics', 'Political Science'];
          subjects.map(function (subject) {
            html = html + "<option value='" + subject + "'>" + subject + "</option>";
          });
          document.getElementById('subject').innerHTML = html;
        } else if (e.target.value == 'class 11') {
          var html = '';
          var subjects = ['Physics', 'Chemistry', 'Maths', 'English', 'Biology', 'Computer', 'Physical Education', 'Economics', 'Accounts', 'Business'];
          subjects.map(function (subject) {
            html = html + "<option value='" + subject + "'>" + subject + "</option>";
          });
          document.getElementById('subject').innerHTML = html;
        } else if (e.target.value == 'class 12') {
          var html = '';
          var subjects = ['Physics', 'Chemistry', 'Maths', 'English', 'Biology', 'Computer', 'Physical Education', 'Economics', 'Accounts', 'Business'];
          subjects.map(function (subject) {
            html = html + "<option value='" + subject + "'>" + subject + "</option>";
          });
          document.getElementById('subject').innerHTML = html;
        }
      }

      if (e.target.name == 'title') {
        if (e.target.value.length > 50 && e.target.value.length <= 60) {
          document.getElementById('title').style.border = '1px solid #00ce68 ';
        } else {
          document.getElementById('title').style.border = '1px solid #e65251';
        }

        var slug = Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_11__["titleToSlug"])(e.target.value);
        this.setState({
          slug: slug
        });
      }

      if (e.target.name == 'detail') {
        if (e.target.value.length > 150 && e.target.value.length <= 160) {
          document.getElementById('detail').style.border = '1px solid #00ce68 ';
        } else {
          document.getElementById('detail').style.border = '1px solid #e65251';
        }
      }

      this.setState(_defineProperty({}, e.target.name, e.target.value));
    }
  }, {
    key: "addTag",
    value: function addTag(e) {
      e.preventDefault();
      var tag = this.state.tag;
      this.setState({
        tags: _toConsumableArray(this.state.tags).concat([tag])
      });
      this.setState({
        tag: ''
      });
    }
  }, {
    key: "removeTag",
    value: function removeTag(e) {
      var tagToRemove = e.target.getAttribute('value');

      var tagsArray = _toConsumableArray(this.state.tags);

      var index = tagsArray.indexOf(tagToRemove);

      if (index !== -1) {
        tagsArray.splice(index, 1);
        this.setState({
          tags: tagsArray
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      // var tagsArray = this.state.tags.map((tag,index)=><Tag tag={tag} removeTag={this.removeTag} key={index} value={tag}/>)
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 216
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-12 grid-margin",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "card-body",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
        className: "text-center",
        style: {
          marginBottom: '50px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221
        },
        __self: this
      }, "UPDATE BOOK"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-sample",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "card-description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223
        },
        __self: this
      }, "Book Details"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_InputGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "text",
        label: "Title",
        name: "title",
        info: this.state.title.length,
        onChange: this.onChange,
        id: "title",
        value: this.state.title,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_InputGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
        type: "text",
        label: "Author",
        name: "author",
        value: this.state.author,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "col-sm-3 col-form-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }, "Publisher"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Query"], {
        query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_10__["GET_PUBLISHERS_QUERY"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, function (_ref) {
        var data = _ref.data,
            error = _ref.error,
            loading = _ref.loading;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          className: "form-control",
          name: "publisher",
          id: "publisher",
          onChange: _this3.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 250
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 251
          },
          __self: this
        }, "-SELECT-PUBLISHER-"));
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 261
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "col-sm-3 col-form-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, "Category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Query"], {
        query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_10__["GET_CATEGORIES_QUERY"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264
        },
        __self: this
      }, function (_ref2) {
        var data = _ref2.data,
            error = _ref2.error,
            loading = _ref2.loading;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          className: "form-control",
          name: "category",
          id: "category",
          onChange: _this3.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: this
        }, "-SELECT-CATEGORY-"));
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 278
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 279
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "col-sm-3 col-form-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281
        },
        __self: this
      }, "Subject"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        className: "form-control",
        name: "subject",
        id: "subject",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284
        },
        __self: this
      }, "-SELECT-SUBJECT-"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "col-sm-3 col-form-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        __self: this
      }, "Type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Query"], {
        query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_10__["GET_TYPES_QUERY"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, function (_ref3) {
        var data = _ref3.data,
            error = _ref3.error,
            loading = _ref3.loading;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          className: "form-control",
          name: "type",
          id: "type",
          onChange: _this3.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          },
          __self: this
        }, "-SELECT-TYPE-"));
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "col-sm-3 col-form-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310
        },
        __self: this
      }, "Edition"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 311
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
        className: "form-control",
        name: "edition",
        id: "edition",
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 312
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 313
        },
        __self: this
      }, "-SELECT-EDITION-"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "2019",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 314
        },
        __self: this
      }, "2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "2018",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 315
        },
        __self: this
      }, "2018"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "2017",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        __self: this
      }, "2017"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "2016",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317
        },
        __self: this
      }, "2016"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
        value: "2015",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318
        },
        __self: this
      }, "2015"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_InputGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: "Quantity",
        name: "quantity",
        type: "number",
        value: this.state.quantity,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 323
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 330
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 331
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "col-sm-3 col-form-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 333
        },
        __self: this
      }, "Detail"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        rows: "6",
        className: "form-control",
        name: "detail",
        id: "detail",
        onChange: this.onChange,
        value: this.state.detail,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: this
      }), this.state.detail.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        __self: this
      }, this.state.detail.length, " | 160 Characters Typed")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 349
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 350
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "col-sm-3 col-form-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 351
        },
        __self: this
      }, "Description"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 352
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
        rows: "6",
        className: "form-control",
        name: "description",
        id: "description",
        onChange: this.onChange,
        value: this.state.description,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 353
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 365
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_InputGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: "MRP",
        name: "mrp",
        type: "number",
        value: this.state.mrp,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 366
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "col-sm-3 col-form-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 374
        },
        __self: this
      }, "Tags"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 375
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.addTag,
        id: "book-tag-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 376
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "input-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 377
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "tag",
        value: this.state.tag,
        onChange: this.onChange,
        autoComplete: "off",
        id: "tag-textbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 378
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "input-group-append",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 379
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
        className: "btn btn-outline-secondary",
        type: "submit",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 380
        },
        __self: this
      }, "ADD")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 384
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 390
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-6",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 391
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 392
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        className: "col-sm-3 col-form-label",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 393
        },
        __self: this
      }, "Slug"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-9",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 394
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        className: "form-control",
        name: "slug",
        value: this.state.slug,
        onChange: this.onChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 395
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 400
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 401
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 402
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "form-group row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 403
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-sm-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 404
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "dropzone text-center",
        id: "dropzone",
        onDragOver: this.onDragOver,
        onDragLeave: this.onDragLeave,
        onDrop: this.onDrop,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 405
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "dropzone-text",
        id: "dropzone-text",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 406
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 407
        },
        __self: this
      }, "Drop book Images Here")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "dropzone-images",
        id: "dropzone-images",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 409
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "note",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 416
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 417
        },
        __self: this
      }, "* Maximum 5 files can be upload."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "text-danger",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 418
        },
        __self: this
      }, "* Allowed extension are jpg, png, jpeg, JPG.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 420
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 421
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "text-center col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "submit",
        className: "btn btn-success",
        onClick:
        /*#__PURE__*/
        function () {
          var _ref4 = _asyncToGenerator(
          /*#__PURE__*/
          _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
            var res, list;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    e.preventDefault();
                    _context2.next = 3;
                    return createBook();

                  case 3:
                    res = _context2.sent;

                    _this3.setState({
                      title: '',
                      author: '',
                      publisher: '',
                      category: '',
                      subject: '',
                      type: '',
                      edition: '',
                      quantity: '',
                      detail: '',
                      description: '',
                      mrp: '',
                      tags: [],
                      tag: '',
                      images: [],
                      slug: ''
                    });

                    Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_11__["resetSelectElement"])(document.getElementById('publisher'));
                    Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_11__["resetSelectElement"])(document.getElementById('category'));
                    Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_11__["resetSelectElement"])(document.getElementById('type'));
                    Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_11__["resetSelectElement"])(document.getElementById('edition'));
                    Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_11__["resetSelectElement"])(document.getElementById('subject'));
                    document.getElementById('detail').style.border = '1px solid #f2f2f2';
                    document.getElementById('title').style.border = '1px solid #f2f2f2';
                    list = document.getElementById('dropzone-images');

                    while (list.hasChildNodes()) {
                      list.removeChild(list.firstChild);
                    }

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          return function (_x) {
            return _ref4.apply(this, arguments);
          };
        }(),
        value: "SAVE",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 425
        },
        __self: this
      })))))))));
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ })

})
//# sourceMappingURL=edit.js.8a598d9f758b5fd82f7f.hot-update.js.map