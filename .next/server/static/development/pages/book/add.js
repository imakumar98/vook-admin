module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Books/Add.js":
/*!*********************************!*\
  !*** ./components/Books/Add.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_InputGroup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../common/InputGroup */ "./components/common/InputGroup.js");
/* harmony import */ var _common_TextareaGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../common/TextareaGroup */ "./components/common/TextareaGroup.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../components/Tag */ "./components/Tag.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _common_SelectOption__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../common/SelectOption */ "./components/common/SelectOption.js");
/* harmony import */ var _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../../lib/QueryMutations */ "./lib/QueryMutations.js");

var _jsxFileName = "D:\\Learn\\book-store\\vook-admin\\components\\Books\\Add.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var Add =
/*#__PURE__*/
function (_Component) {
  _inherits(Add, _Component);

  function Add(props) {
    var _this;

    _classCallCheck(this, Add);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Add).call(this));
    _this.state = {
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

  _createClass(Add, [{
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
          axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('http://localhost:5000/upload/vook/book', data, config).then(function (res) {
            if (res.data.success) {
              var variable = 'image' + (i + 1);
              var div = document.createElement('div');
              div.className = 'dropzone-image';
              div.innerHTML = '<img src="' + res.data.url + '" name="' + variable + '" className="img-responsive" width="100px" height="200px">';
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

      var tagsArray = this.state.tags.map(function (tag, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Tag__WEBPACK_IMPORTED_MODULE_6__["default"], {
          tag: tag,
          removeTag: _this3.removeTag,
          key: index,
          value: tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Mutation"], {
        mutation: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_10__["CREATE_BOOK_MUTATION"],
        variables: {
          title: this.state.title,
          author: this.state.author,
          publisher: this.state.publisher,
          type: this.state.type,
          subject: this.state.subject,
          category: this.state.category,
          edition: parseInt(this.state.edition),
          quantity: parseInt(this.state.quantity),
          detail: this.state.detail,
          description: this.state.description,
          mrp: parseInt(this.state.mrp),
          tags: this.state.tags,
          images: this.state.images,
          slug: this.state.slug
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        },
        __self: this
      }, function (createBook, _ref) {
        var error = _ref.error,
            loading = _ref.loading,
            called = _ref.called;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 190
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-12 grid-margin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 194
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "card-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 196
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
          className: "text-center",
          style: {
            marginBottom: '50px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197
          },
          __self: this
        }, "ADD BOOK"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-sample",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 199
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "card-description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200
          },
          __self: this
        }, "Book Details"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_InputGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "text",
          label: "Title",
          name: "title",
          info: _this3.state.title.length,
          onChange: _this3.onChange,
          id: "title",
          value: _this3.state.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 202
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_InputGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
          type: "text",
          label: "Author",
          name: "author",
          value: _this3.state.author,
          onChange: _this3.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 211
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 222
          },
          __self: this
        }, "Publisher"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 223
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Query"], {
          query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_10__["GET_PUBLISHERS_QUERY"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224
          },
          __self: this
        }, function (_ref2) {
          var data = _ref2.data,
              error = _ref2.error,
              loading = _ref2.loading;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            className: "form-control",
            name: "publisher",
            id: "publisher",
            onChange: _this3.onChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 227
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 228
            },
            __self: this
          }, "-SELECT-PUBLISHER-"), data.getPublishers.map(function (publisher, index) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SelectOption__WEBPACK_IMPORTED_MODULE_9__["default"], {
              key: index,
              value: publisher.name,
              text: publisher.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 229
              },
              __self: this
            });
          }));
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 237
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 238
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 239
          },
          __self: this
        }, "Category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Query"], {
          query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_10__["GET_CATEGORIES_QUERY"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        }, function (_ref3) {
          var data = _ref3.data,
              error = _ref3.error,
              loading = _ref3.loading;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            className: "form-control",
            name: "category",
            id: "category",
            onChange: _this3.onChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 245
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 246
            },
            __self: this
          }, "-SELECT-CATEGORY-"), data.getCategories.map(function (category, index) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SelectOption__WEBPACK_IMPORTED_MODULE_9__["default"], {
              key: index,
              value: category.name,
              text: category.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 248
              },
              __self: this
            });
          }));
        }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 259
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
        }, "Subject"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 263
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          className: "form-control",
          name: "subject",
          id: "subject",
          onChange: _this3.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 264
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 265
          },
          __self: this
        }, "-SELECT-SUBJECT-"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          },
          __self: this
        }, "Type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_7__["Query"], {
          query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_10__["GET_TYPES_QUERY"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          },
          __self: this
        }, function (_ref4) {
          var data = _ref4.data,
              error = _ref4.error,
              loading = _ref4.loading;
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            className: "form-control",
            name: "type",
            id: "type",
            onChange: _this3.onChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 277
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 278
            },
            __self: this
          }, "-SELECT-TYPE-"), data.getTypes.map(function (type, index) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SelectOption__WEBPACK_IMPORTED_MODULE_9__["default"], {
              key: index,
              value: type.name,
              text: type.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 279
              },
              __self: this
            });
          }));
        }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 288
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
        }, "Edition"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          className: "form-control",
          name: "edition",
          id: "edition",
          onChange: _this3.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295
          },
          __self: this
        }, "-SELECT-EDITION-"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "2019",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          },
          __self: this
        }, "2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "2018",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          },
          __self: this
        }, "2018"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "2017",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298
          },
          __self: this
        }, "2017"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "2016",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299
          },
          __self: this
        }, "2016"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "2015",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 300
          },
          __self: this
        }, "2015"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_InputGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: "Quantity",
          name: "quantity",
          type: "number",
          value: _this3.state.quantity,
          onChange: _this3.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 305
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 313
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316
          },
          __self: this
        }, "Detail"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
          rows: "6",
          className: "form-control",
          name: "detail",
          id: "detail",
          onChange: _this3.onChange,
          value: _this3.state.detail,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          },
          __self: this
        }), _this3.state.detail.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 326
          },
          __self: this
        }, _this3.state.detail.length, " | 160 Characters Typed")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 332
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 333
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 334
          },
          __self: this
        }, "Description"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 335
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("textarea", {
          rows: "6",
          className: "form-control",
          name: "description",
          id: "description",
          onChange: _this3.onChange,
          value: _this3.state.description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 336
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_InputGroup__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: "MRP",
          name: "mrp",
          type: "number",
          value: _this3.state.mrp,
          onChange: _this3.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 359
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 360
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 361
          },
          __self: this
        }, "Tags"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 362
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          onSubmit: _this3.addTag,
          id: "book-tag-form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 363
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "input-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 364
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          className: "form-control",
          name: "tag",
          value: _this3.state.tag,
          onChange: _this3.onChange,
          autoComplete: "off",
          id: "tag-textbox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 365
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "input-group-append",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 366
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "btn btn-outline-secondary",
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 367
          },
          __self: this
        }, "ADD")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 371
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "book-tags-div",
          id: "book-tags",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 372
          },
          __self: this
        }, tagsArray))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 377
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 379
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 380
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 381
          },
          __self: this
        }, "Slug"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 382
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          className: "form-control",
          name: "slug",
          value: _this3.state.value,
          onChange: _this3.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 383
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 389
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-12",
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
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 393
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropzone text-center",
          id: "dropzone",
          onDragOver: _this3.onDragOver,
          onDragLeave: _this3.onDragLeave,
          onDrop: _this3.onDrop,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 394
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropzone-text",
          id: "dropzone-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 395
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 396
          },
          __self: this
        }, "Drop book Images Here")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropzone-images",
          id: "dropzone-images",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 398
          },
          __self: this
        })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "note",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 405
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "text-danger",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 406
          },
          __self: this
        }, "* Maximum 5 files can be upload."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "text-danger",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 407
          },
          __self: this
        }, "* Allowed extension are jpg, png, jpeg, JPG.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 410
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 411
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "text-center col-md-12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 413
          },
          __self: this
        }, !error && !loading && called && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "text-success",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 414
          },
          __self: this
        }, "BOOK SAVED SUCCESSFULLY"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 417
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "submit",
          className: "btn btn-success",
          onClick:
          /*#__PURE__*/
          function () {
            var _ref5 = _asyncToGenerator(
            /*#__PURE__*/
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
              var res;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      e.preventDefault();
                      _context.next = 3;
                      return createBook();

                    case 3:
                      res = _context.sent;
                      console.log(res);

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

                      document.getElementById('dropzone-images').appendChild('<div></div>');

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));

            return function (_x) {
              return _ref5.apply(this, arguments);
            };
          }(),
          value: "SAVE",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 418
          },
          __self: this
        })))))))));
      });
    }
  }]);

  return Add;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Add);

/***/ }),

/***/ "./components/ErrorMessage.js":
/*!************************************!*\
  !*** ./components/ErrorMessage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Learn\\book-store\\vook-admin\\components\\ErrorMessage.js";



var ErrorStyles = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "ErrorMessage__ErrorStyles",
  componentId: "sc-11u5fgj-0"
})(["padding:2rem;background:white;margin:2rem 0;border:1px solid rgba(0,0,0,0.05);border-left:5px solid red;p{margin:0;font-weight:100;}strong{margin-right:1rem;}"]);

var DisplayError = function DisplayError(_ref) {
  var error = _ref.error;
  if (!error || !error.message) return null;

  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map(function (error, i) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
        key: i,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        "data-test": "graphql-error",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
    });
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ErrorStyles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    "data-test": "graphql-error",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Shoot!"), error.message.replace('GraphQL error: ', '')));
};

DisplayError.defaultProps = {
  error: {}
};
DisplayError.propTypes = {
  error: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (DisplayError);

/***/ }),

/***/ "./components/Tag.js":
/*!***************************!*\
  !*** ./components/Tag.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Learn\\book-store\\vook-admin\\components\\Tag.js";


function Tag(_ref) {
  var tag = _ref.tag,
      removeTag = _ref.removeTag;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "tag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, tag, " \xA0"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    onClick: removeTag,
    name: "tag",
    value: tag,
    style: {
      cursor: 'pointer'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "\xD7"));
}

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ "./components/common/InputGroup.js":
/*!*****************************************!*\
  !*** ./components/common/InputGroup.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Learn\\book-store\\vook-admin\\components\\common\\InputGroup.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function InputGroup(_ref) {
  var _React$createElement;

  var name = _ref.name,
      id = _ref.id,
      placeholder = _ref.placeholder,
      value = _ref.value,
      label = _ref.label,
      error = _ref.error,
      info = _ref.info,
      type = _ref.type,
      onChange = _ref.onChange,
      disabled = _ref.disabled;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-3 col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", (_React$createElement = {
    type: type,
    id: id,
    className: "form-control",
    name: name,
    disabled: disabled,
    value: value,
    onChange: onChange
  }, _defineProperty(_React$createElement, "value", value), _defineProperty(_React$createElement, "__source", {
    fileName: _jsxFileName,
    lineNumber: 21
  }), _defineProperty(_React$createElement, "__self", this), _React$createElement)), info > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, info, " | 60 Characters Typed"), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "texxt-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, error))));
}

/* harmony default export */ __webpack_exports__["default"] = (InputGroup);

/***/ }),

/***/ "./components/common/SelectOption.js":
/*!*******************************************!*\
  !*** ./components/common/SelectOption.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectOption; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utilFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../lib/utilFunctions */ "./lib/utilFunctions.js");
/* harmony import */ var _lib_utilFunctions__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Learn\\book-store\\vook-admin\\components\\common\\SelectOption.js";


function SelectOption(_ref) {
  var value = _ref.value,
      text = _ref.text;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("option", {
    value: value,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_1__["getCapitalizedString"])(text));
}

/***/ }),

/***/ "./components/common/TextareaGroup.js":
/*!********************************************!*\
  !*** ./components/common/TextareaGroup.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "D:\\Learn\\book-store\\vook-admin\\components\\common\\TextareaGroup.js";


function TextareaGroup(_ref) {
  var id = _ref.id,
      name = _ref.name,
      placeholder = _ref.placeholder,
      value = _ref.value,
      label = _ref.label,
      error = _ref.error,
      info = _ref.info,
      onChange = _ref.onChange,
      disabled = _ref.disabled;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "form-group row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "col-sm-3 col-form-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, label), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-sm-9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
    rows: "6",
    className: "form-control",
    name: name,
    id: id,
    disabled: disabled,
    onChange: onChange,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, value), info > 0 && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, info, " | 160 Characters Typed"), error && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("small", {
    className: "text-danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, error))));
}

/* harmony default export */ __webpack_exports__["default"] = (TextareaGroup);

/***/ }),

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
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    mutation CREATE_BOOK_MUTATION(\n        $title: String!, \n        $author: String!, \n        $publisher: String!, \n        $type: String!, \n        $subject: String!, \n        $category: String!, \n        $edition: Int!, \n        $quantity: Int!, \n        $detail: String!, \n        $description: String\n        $mrp: Int!, \n        $tags: [String!],\n        $images: [String!],\n        $slug: String!){\n        createBook(\n            title: $title,\n            author: $author,\n            publisher: $publisher,\n            type: $type,\n            subject: $subject,\n            category: $category,\n            edition: $edition, \n            quantity: $quantity, \n            detail: $detail, \n            description: $description\n            mrp: $mrp, \n            tags: $tags, \n            images: $images, \n            slug: $slug\n         ){\n            id\n            title\n            mrp\n            detail\n            publisher{\n                name\n            }\n            slug\n        }\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    query GET_TYPES_QUERY{\n        getTypes{\n            id\n            name\n            books{\n                id\n            }\n        }\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    query GET_CATEGORIES_QUERY{\n        getCategories{\n            id\n            name\n            books{\n                id\n            }\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    query GET_PUBLISHERS_QUERY{\n        getPublishers{\n            id\n            name\n            discount\n            books{\n                id\n            }\n        }\n    }\n"]);

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


/***/ }),

/***/ "./lib/utilFunctions.js":
/*!******************************!*\
  !*** ./lib/utilFunctions.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  getCapitalizedString: function getCapitalizedString(string) {
    return string[0].toUpperCase() + string.slice(1);
  }
};

/***/ }),

/***/ "./pages/book/add.js":
/*!***************************!*\
  !*** ./pages/book/add.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Books_Add__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../components/Books/Add */ "./components/Books/Add.js");
var _jsxFileName = "D:\\Learn\\book-store\\vook-admin\\pages\\book\\add.js";



function add() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Books_Add__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  });
}

/* harmony default export */ __webpack_exports__["default"] = (add);

/***/ }),

/***/ 3:
/*!*********************************!*\
  !*** multi ./pages/book/add.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/book/add.js */"./pages/book/add.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=add.js.map