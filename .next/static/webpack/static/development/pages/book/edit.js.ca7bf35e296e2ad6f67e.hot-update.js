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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var apollo_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! apollo-fetch */ "./node_modules/apollo-fetch/dist/index.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_InputGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../common/InputGroup */ "./components/common/InputGroup.js");
/* harmony import */ var _components_Tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./../../components/Tag */ "./components/Tag.js");
/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../ErrorMessage */ "./components/ErrorMessage.js");
/* harmony import */ var _common_SelectOption__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./../common/SelectOption */ "./components/common/SelectOption.js");
/* harmony import */ var _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./../../lib/QueryMutations */ "./lib/QueryMutations.js");
/* harmony import */ var _lib_utilFunctions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./../../lib/utilFunctions */ "./lib/utilFunctions.js");
/* harmony import */ var _lib_utilFunctions__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./../../config */ "./config.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./../Image */ "./components/Image.js");

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

//IMPORT LIBRARIES





 //IMPORT COMPONENTS










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
    _this.removeImage = _this.removeImage.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Edit, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var fetch, res, book, tags, images;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                fetch = Object(apollo_fetch__WEBPACK_IMPORTED_MODULE_4__["createApolloFetch"])({
                  uri: _config__WEBPACK_IMPORTED_MODULE_13__["endpoint"]
                });
                _context.next = 3;
                return fetch({
                  query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_11__["GET_SINGLE_BOOK"],
                  variables: {
                    id: this.state.id
                  }
                });

              case 3:
                res = _context.sent;
                if (!res) console.log(res);
                book = res.data.getSingleBook;
                tags = book.tags.map(function (tag) {
                  return tag.text;
                });
                images = book.images.map(function (image) {
                  return image.src;
                });
                this.setState({
                  title: book.title,
                  author: book.author,
                  detail: book.detail,
                  description: book.description,
                  mrp: book.mrp,
                  quantity: book.quantity,
                  publisher: book.publisher.name,
                  images: images,
                  tags: tags,
                  type: book.type.name,
                  category: book.category.name,
                  slug: book.slug,
                  edition: book.edition,
                  subject: book.subject
                });

              case 9:
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
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(_config__WEBPACK_IMPORTED_MODULE_13__["bookUploadUrl"], data, config).then(function (res) {
            if (res.data.success) {
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

        var slug = Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_12__["titleToSlug"])(e.target.value);
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
    key: "removeImage",
    value: function () {
      var _removeImage = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(e) {
        var imageToRemove, imageArray, index;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                imageToRemove = e.target.getAttribute('value'); //DELETE IMAGE FROM SERVER
                // var image = imageToRemove.split("https://image-manager.server.vook.in/assets/vook/books/")[1]
                // const url = bookDeleteUrl+ image;
                // const res = await axios({
                //     method: 'delete',
                //     url : url
                // });
                // if(res.data.error) return alert("Something went wrong"); 
                //REMOVE FROM STATE

                imageArray = _toConsumableArray(this.state.images);
                index = imageArray.indexOf(imageToRemove);

                if (index !== -1) {
                  imageArray.splice(index, 1);
                  this.setState({
                    images: imageArray
                  });
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function removeImage(_x) {
        return _removeImage.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var tagsArray = this.state.tags.map(function (tag, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Tag__WEBPACK_IMPORTED_MODULE_8__["default"], {
          tag: tag,
          removeTag: _this3.removeTag,
          key: index,
          value: tag,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 240
          },
          __self: this
        });
      });
      var imageArray = this.state.images.map(function (image, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Image__WEBPACK_IMPORTED_MODULE_14__["default"], {
          image: image,
          removeImage: _this3.removeImage,
          value: image,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 242
          },
          __self: this
        });
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Mutation"], {
        mutation: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_11__["UPDATE_BOOK_MUTATION"],
        variables: {
          id: this.state.id,
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
          lineNumber: 246
        },
        __self: this
      }, function (updateBook, _ref) {
        var loading = _ref.loading,
            error = _ref.error,
            called = _ref.called;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("fieldset", {
          disabled: loading,
          "aria-busy": loading,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 266
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-12 grid-margin",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 268
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "card",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 269
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "card-body",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 270
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
          className: "text-center",
          style: {
            marginBottom: '50px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 271
          },
          __self: this
        }, "UPDATE BOOK"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-sample",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 272
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "card-description",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 273
          },
          __self: this
        }, "Book Details"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 274
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
          type: "text",
          label: "Title",
          name: "title",
          info: _this3.state.title.length,
          onChange: _this3.onChange,
          id: "title",
          value: _this3.state.title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 275
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
          type: "text",
          label: "Author",
          name: "author",
          value: _this3.state.author,
          onChange: _this3.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 284
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 292
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295
          },
          __self: this
        }, "Publisher"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
          query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_11__["GET_PUBLISHERS_QUERY"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297
          },
          __self: this
        }, function (_ref2) {
          var data = _ref2.data,
              error = _ref2.error,
              loading = _ref2.loading;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            className: "form-control",
            name: "publisher",
            id: "publisher",
            onChange: _this3.onChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 300
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 301
            },
            __self: this
          }, "-SELECT-PUBLISHER-"));
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            className: "form-control",
            name: "publisher",
            id: "publisher",
            onChange: _this3.onChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 307
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 308
            },
            __self: this
          }, "-SELECT-PUBLISHER-"), data.getPublishers.map(function (publisher, index) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SelectOption__WEBPACK_IMPORTED_MODULE_10__["default"], {
              key: index,
              value: publisher.name,
              text: publisher.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 309
              },
              __self: this
            });
          }));
        })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 317
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 318
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319
          },
          __self: this
        }, "Category"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
          query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_11__["GET_CATEGORIES_QUERY"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 321
          },
          __self: this
        }, function (_ref3) {
          var data = _ref3.data,
              error = _ref3.error,
              loading = _ref3.loading;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            className: "form-control",
            name: "category",
            id: "category",
            onChange: _this3.onChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 324
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 325
            },
            __self: this
          }, "-SELECT-CATEGORY-"));
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            className: "form-control",
            name: "category",
            id: "category",
            onChange: _this3.onChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 329
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 330
            },
            __self: this
          }, "-SELECT-CATEGORY-"), data.getCategories.map(function (category, index) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SelectOption__WEBPACK_IMPORTED_MODULE_10__["default"], {
              key: index,
              value: category.name,
              text: category.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 331
              },
              __self: this
            });
          }));
        }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 341
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 342
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 343
          },
          __self: this
        }, "Subject"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 344
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          className: "form-control",
          name: "subject",
          id: "subject",
          onChange: _this3.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 346
          },
          __self: this
        }, "-SELECT-SUBJECT-"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 351
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 352
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 353
          },
          __self: this
        }, "Type"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 354
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_5__["Query"], {
          query: _lib_QueryMutations__WEBPACK_IMPORTED_MODULE_11__["GET_TYPES_QUERY"],
          __source: {
            fileName: _jsxFileName,
            lineNumber: 355
          },
          __self: this
        }, function (_ref4) {
          var data = _ref4.data,
              error = _ref4.error,
              loading = _ref4.loading;
          if (loading) return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            className: "form-control",
            name: "type",
            id: "type",
            onChange: _this3.onChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 358
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 359
            },
            __self: this
          }, "-SELECT-TYPE-"));
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
            className: "form-control",
            name: "type",
            id: "type",
            onChange: _this3.onChange,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 363
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
            value: "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 364
            },
            __self: this
          }, "-SELECT-TYPE-"), data.getTypes.map(function (type, index) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_SelectOption__WEBPACK_IMPORTED_MODULE_10__["default"], {
              key: index,
              value: type.name,
              text: type.name,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 365
              },
              __self: this
            });
          }));
        }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 374
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 376
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 377
          },
          __self: this
        }, "Edition"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 378
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("select", {
          className: "form-control",
          name: "edition",
          id: "edition",
          onChange: _this3.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 379
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 380
          },
          __self: this
        }, "-SELECT-EDITION-"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "2019",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 381
          },
          __self: this
        }, "2019"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "2018",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 382
          },
          __self: this
        }, "2018"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "2017",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 383
          },
          __self: this
        }, "2017"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "2016",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 384
          },
          __self: this
        }, "2016"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("option", {
          value: "2015",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 385
          },
          __self: this
        }, "2015"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
          label: "Quantity",
          name: "quantity",
          type: "number",
          value: _this3.state.quantity,
          onChange: _this3.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 390
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 397
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 398
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 399
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 400
          },
          __self: this
        }, "Detail"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 401
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
            lineNumber: 402
          },
          __self: this
        }, _this3.state.detail), _this3.state.detail.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("small", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 410
          },
          __self: this
        }, _this3.state.detail.length, " | 160 Characters Typed")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 416
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 417
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 418
          },
          __self: this
        }, "Description"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 419
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
            lineNumber: 420
          },
          __self: this
        }, _this3.state.description))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 432
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_InputGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
          label: "MRP",
          name: "mrp",
          type: "number",
          value: _this3.state.mrp,
          onChange: _this3.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 433
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 439
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 440
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 441
          },
          __self: this
        }, "Tags"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 442
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
          onSubmit: _this3.addTag,
          id: "book-tag-form",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 443
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "input-group",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 444
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
            lineNumber: 445
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "input-group-append",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 446
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
          className: "btn btn-outline-secondary",
          type: "submit",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 447
          },
          __self: this
        }, "ADD")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 451
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "book-tags-div",
          id: "book-tags",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 452
          },
          __self: this
        }, tagsArray))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 457
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-6",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 458
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 459
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          className: "col-sm-3 col-form-label",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 460
          },
          __self: this
        }, "Slug"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-9",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 461
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          type: "text",
          className: "form-control",
          name: "slug",
          value: _this3.state.slug,
          onChange: _this3.onChange,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 462
          },
          __self: this
        }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 467
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 468
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-md-12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 469
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "form-group row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 470
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "col-sm-12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 471
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
            lineNumber: 472
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropzone-text",
          id: "dropzone-text",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 473
          },
          __self: this
        }, !imageArray.length && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 474
          },
          __self: this
        }, "Drop book Images Here")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropzone-images",
          id: "dropzone-images",
          style: {
            position: 'absolute',
            padding: '15px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 476
          },
          __self: this
        }, imageArray)))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "note",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 486
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "text-danger",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 487
          },
          __self: this
        }, "* Maximum 5 files can be upload."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          className: "text-danger",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 488
          },
          __self: this
        }, "* Allowed extension are jpg, png, jpeg, JPG.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 490
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 491
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "text-center col-md-12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 492
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ErrorMessage__WEBPACK_IMPORTED_MODULE_9__["default"], {
          error: error,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 494
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
            _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(e) {
              var res, list;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      e.preventDefault();
                      _context3.next = 3;
                      return updateBook();

                    case 3:
                      res = _context3.sent;

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

                      Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_12__["resetSelectElement"])(document.getElementById('publisher'));
                      Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_12__["resetSelectElement"])(document.getElementById('category'));
                      Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_12__["resetSelectElement"])(document.getElementById('type'));
                      Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_12__["resetSelectElement"])(document.getElementById('edition'));
                      Object(_lib_utilFunctions__WEBPACK_IMPORTED_MODULE_12__["resetSelectElement"])(document.getElementById('subject'));
                      document.getElementById('detail').style.border = '1px solid #f2f2f2';
                      document.getElementById('title').style.border = '1px solid #f2f2f2';
                      list = document.getElementById('dropzone-images');

                      while (list.hasChildNodes()) {
                        list.removeChild(list.firstChild);
                      }

                      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push('/books');

                    case 15:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));

            return function (_x2) {
              return _ref5.apply(this, arguments);
            };
          }(),
          value: "UPDATE",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 497
          },
          __self: this
        })))))))));
      });
    }
  }]);

  return Edit;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ })

})
//# sourceMappingURL=edit.js.ca7bf35e296e2ad6f67e.hot-update.js.map