webpackHotUpdate("static\\development\\pages\\book\\add.js",{

/***/ "./components/Books/Add.js":
/*!*********************************!*\
  !*** ./components/Books/Add.js ***!
  \*********************************/
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
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_TextareaGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "Detail",
          name: "detail",
          info: _this3.state.detail.length,
          onChange: _this3.onChange,
          id: "detail",
          value: _this3.state.detail,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 314
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_TextareaGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "Description",
          name: "description",
          onChange: _this3.onChange,
          value: _this3.state.description,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 322
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 330
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
            lineNumber: 331
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 338
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340
          },
          __self: this
        }, "Tags"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          onSubmit: _this3.addTag,
          id: "book-tag-form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "input-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343
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
            lineNumber: 344
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "input-group-append",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "btn btn-outline-secondary",
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 346
          },
          __self: this
        }, "ADD")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 350
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "book-tags-div",
          id: "book-tags",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351
          },
          __self: this
        }, tagsArray))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 356
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 358
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 359
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 360
          },
          __self: this
        }, "Slug"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 361
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
            lineNumber: 362
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 368
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 369
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 370
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 371
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 372
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
            lineNumber: 373
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropzone-text",
          id: "dropzone-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375
          },
          __self: this
        }, "Drop book Images Here")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropzone-images",
          id: "dropzone-images",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 377
          },
          __self: this
        })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "note",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 384
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "text-danger",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 385
          },
          __self: this
        }, "* Maximum 5 files can be upload."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "text-danger",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 386
          },
          __self: this
        }, "* Allowed extension are jpg, png, jpeg, JPG.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
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
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "text-success",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 391
          },
          __self: this
        }, "BOOK SAVED"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "text-center col-md-12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 392
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_8__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 393
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

                      document.getElementById('dropzone-images').appendChild('');

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
            lineNumber: 394
          },
          __self: this
        })))))))));
      });
    }
  }]);

  return Add;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Add);

/***/ })

})
//# sourceMappingURL=add.js.bcbe6467ef0262adaf90.hot-update.js.map