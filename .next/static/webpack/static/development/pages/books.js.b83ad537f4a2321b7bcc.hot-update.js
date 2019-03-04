webpackHotUpdate("static\\development\\pages\\books.js",{

/***/ "./lib/utilFunctions.js":
/*!******************************!*\
  !*** ./lib/utilFunctions.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  getCapitalizedString: function getCapitalizedString(string) {
    if (string == 'ncert') return string.toUpperCase();
    return string[0].toUpperCase() + string.slice(1);
  },
  titleToSlug: function titleToSlug(title) {
    return title.trim().toLowerCase().replace(/ /g, '-');
  },
  resetSelectElement: function resetSelectElement(selectElement) {
    selectElement.selectedIndex = 0;
  }
};

/***/ })

})
//# sourceMappingURL=books.js.b83ad537f4a2321b7bcc.hot-update.js.map