webpackHotUpdate("static\\development\\pages\\asset.js",{

/***/ "./pages/asset/index.jsx":
/*!*******************************!*\
  !*** ./pages/asset/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StickyHeadTable; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _component_navinput_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../component/navinput/index */ "./pages/component/navinput/index.jsx");


var _jsxFileName = "E:\\2020\u5DE5\u4F5C\u5BA4\\fsn365\\pages\\asset\\index.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;











var columns = [{
  id: "name",
  label: "Name",
  minWidth: 170
}, {
  id: "code",
  label: "ISO\xA0Code",
  minWidth: 100
}, {
  id: "population",
  label: "Population",
  minWidth: 170,
  align: "right",
  format: function format(value) {
    return value.toLocaleString("en-US");
  }
}, {
  id: "size",
  label: "Size\xA0(km\xB2)",
  minWidth: 170,
  align: "right",
  format: function format(value) {
    return value.toLocaleString("en-US");
  }
}, {
  id: "density",
  label: "Density",
  minWidth: 170,
  align: "right",
  format: function format(value) {
    return value.toFixed(2);
  }
}];

function createData(name, code, population, size) {
  var density = population / size;
  return {
    name: name,
    code: code,
    population: population,
    size: size,
    density: density
  };
}

var rows = [createData("India", "IN", 1324171354, 3287263), createData("China", "CN", 1403500365, 9596961), createData("Italy", "IT", 60483973, 301340), createData("United States", "US", 327167434, 9833520), createData("Canada", "CA", 37602103, 9984670), createData("Australia", "AU", 25475400, 7692024), createData("Germany", "DE", 83019200, 357578), createData("Ireland", "IE", 4857000, 70273), createData("Mexico", "MX", 126577691, 1972550), createData("Japan", "JP", 126317000, 377973), createData("France", "FR", 67022000, 640679), createData("United Kingdom", "GB", 67545757, 242495), createData("Russia", "RU", 146793744, 17098246), createData("Nigeria", "NG", 200962417, 923768), createData("Brazil", "BR", 210147125, 8515767)];
function StickyHeadTable() {
  _s();

  var _this = this;

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(10),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      rowsPerPage = _React$useState4[0],
      setRowsPerPage = _React$useState4[1];

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 5
    }
  }, __jsx(_component_navinput_index__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }), __jsx("main", {
    className: "tablecontainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "tablebox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "root",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    stickyHeader: true,
    "aria-label": "sticky table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, columns.map(function (column) {
    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      key: column.id,
      align: column.align,
      style: {
        minWidth: column.minWidth
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 23
      }
    }, column.label);
  }))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 17
    }
  }, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: row.code,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 25
      }
    }, columns.map(function (column) {
      var value = row[column.id];
      return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
        key: column.id,
        align: column.align,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 31
        }
      }, column.format && typeof value === "number" ? column.format(value) : value);
    }));
  })))), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_9__["default"], {
    rowsPerPageOptions: [10, 25, 100],
    component: "div",
    count: rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  })))));
}

_s(StickyHeadTable, "1LSjuq2DZUwZxE9BYIdgLLfYYP4=", true);

_c = StickyHeadTable;

var _c;

$RefreshReg$(_c, "StickyHeadTable");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hc3NldC9pbmRleC5qc3giXSwibmFtZXMiOlsiY29sdW1ucyIsImlkIiwibGFiZWwiLCJtaW5XaWR0aCIsImFsaWduIiwiZm9ybWF0IiwidmFsdWUiLCJ0b0xvY2FsZVN0cmluZyIsInRvRml4ZWQiLCJjcmVhdGVEYXRhIiwibmFtZSIsImNvZGUiLCJwb3B1bGF0aW9uIiwic2l6ZSIsImRlbnNpdHkiLCJyb3dzIiwiU3RpY2t5SGVhZFRhYmxlIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJwYWdlIiwic2V0UGFnZSIsInJvd3NQZXJQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJoYW5kbGVDaGFuZ2VQYWdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UiLCJ0YXJnZXQiLCJtYXAiLCJjb2x1bW4iLCJzbGljZSIsInJvdyIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxPQUFPLEdBQUcsQ0FDZDtBQUFFQyxJQUFFLEVBQUUsTUFBTjtBQUFjQyxPQUFLLEVBQUUsTUFBckI7QUFBNkJDLFVBQVEsRUFBRTtBQUF2QyxDQURjLEVBRWQ7QUFBRUYsSUFBRSxFQUFFLE1BQU47QUFBY0MsT0FBSyxFQUFFLGFBQXJCO0FBQXNDQyxVQUFRLEVBQUU7QUFBaEQsQ0FGYyxFQUdkO0FBQ0VGLElBQUUsRUFBRSxZQUROO0FBRUVDLE9BQUssRUFBRSxZQUZUO0FBR0VDLFVBQVEsRUFBRSxHQUhaO0FBSUVDLE9BQUssRUFBRSxPQUpUO0FBS0VDLFFBQU0sRUFBRSxnQkFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsY0FBTixDQUFxQixPQUFyQixDQUFKO0FBQUE7QUFMZixDQUhjLEVBVWQ7QUFDRU4sSUFB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QyxFQUFELEVBQUssRUFBTCxFQUFTLEdBQVQsQ0FEdEI7QUFFRSxhQUFTLEVBQUMsS0FGWjtBQUdFLFNBQUssRUFBRVMsSUFBSSxDQUFDbUIsTUFIZDtBQUlFLGVBQVcsRUFBRVgsV0FKZjtBQUtFLFFBQUksRUFBRUYsSUFMUjtBQU1FLGdCQUFZLEVBQUVJLGdCQU5oQjtBQU9FLHVCQUFtQixFQUFFRyx1QkFQdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNDRixDQURGLENBREYsQ0FGRixDQURGO0FBOEREOztHQTNFdUJaLGU7O0tBQUFBLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFzc2V0LmpzLjBlMmNiZmY0Y2E1ZWUwM2RjMjIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIjtcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCI7XHJcbmltcG9ydCBUYWJsZVBhZ2luYXRpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XHJcbmltcG9ydCBOYXZpbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50L25hdmlucHV0L2luZGV4XCI7XHJcbmNvbnN0IGNvbHVtbnMgPSBbXHJcbiAgeyBpZDogXCJuYW1lXCIsIGxhYmVsOiBcIk5hbWVcIiwgbWluV2lkdGg6IDE3MCB9LFxyXG4gIHsgaWQ6IFwiY29kZVwiLCBsYWJlbDogXCJJU09cXHUwMGEwQ29kZVwiLCBtaW5XaWR0aDogMTAwIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwicG9wdWxhdGlvblwiLFxyXG4gICAgbGFiZWw6IFwiUG9wdWxhdGlvblwiLFxyXG4gICAgbWluV2lkdGg6IDE3MCxcclxuICAgIGFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICBmb3JtYXQ6IHZhbHVlID0+IHZhbHVlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIilcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcInNpemVcIixcclxuICAgIGxhYmVsOiBcIlNpemVcXHUwMGEwKGttXFx1MDBiMilcIixcclxuICAgIG1pbldpZHRoOiAxNzAsXHJcbiAgICBhbGlnbjogXCJyaWdodFwiLFxyXG4gICAgZm9ybWF0OiB2YWx1ZSA9PiB2YWx1ZS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIpXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogXCJkZW5zaXR5XCIsXHJcbiAgICBsYWJlbDogXCJEZW5zaXR5XCIsXHJcbiAgICBtaW5XaWR0aDogMTcwLFxyXG4gICAgYWxpZ246IFwicmlnaHRcIixcclxuICAgIGZvcm1hdDogdmFsdWUgPT4gdmFsdWUudG9GaXhlZCgyKVxyXG4gIH1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURhdGEobmFtZSwgY29kZSwgcG9wdWxhdGlvbiwgc2l6ZSkge1xyXG4gIGNvbnN0IGRlbnNpdHkgPSBwb3B1bGF0aW9uIC8gc2l6ZTtcclxuICByZXR1cm4geyBuYW1lLCBjb2RlLCBwb3B1bGF0aW9uLCBzaXplLCBkZW5zaXR5IH07XHJcbn1cclxuXHJcbmNvbnN0IHJvd3MgPSBbXHJcbiAgY3JlYXRlRGF0YShcIkluZGlhXCIsIFwiSU5cIiwgMTMyNDE3MTM1NCwgMzI4NzI2MyksXHJcbiAgY3JlYXRlRGF0YShcIkNoaW5hXCIsIFwiQ05cIiwgMTQwMzUwMDM2NSwgOTU5Njk2MSksXHJcbiAgY3JlYXRlRGF0YShcIkl0YWx5XCIsIFwiSVRcIiwgNjA0ODM5NzMsIDMwMTM0MCksXHJcbiAgY3JlYXRlRGF0YShcIlVuaXRlZCBTdGF0ZXNcIiwgXCJVU1wiLCAzMjcxNjc0MzQsIDk4MzM1MjApLFxyXG4gIGNyZWF0ZURhdGEoXCJDYW5hZGFcIiwgXCJDQVwiLCAzNzYwMjEwMywgOTk4NDY3MCksXHJcbiAgY3JlYXRlRGF0YShcIkF1c3RyYWxpYVwiLCBcIkFVXCIsIDI1NDc1NDAwLCA3NjkyMDI0KSxcclxuICBjcmVhdGVEYXRhKFwiR2VybWFueVwiLCBcIkRFXCIsIDgzMDE5MjAwLCAzNTc1NzgpLFxyXG4gIGNyZWF0ZURhdGEoXCJJcmVsYW5kXCIsIFwiSUVcIiwgNDg1NzAwMCwgNzAyNzMpLFxyXG4gIGNyZWF0ZURhdGEoXCJNZXhpY29cIiwgXCJNWFwiLCAxMjY1Nzc2OTEsIDE5NzI1NTApLFxyXG4gIGNyZWF0ZURhdGEoXCJKYXBhblwiLCBcIkpQXCIsIDEyNjMxNzAwMCwgMzc3OTczKSxcclxuICBjcmVhdGVEYXRhKFwiRnJhbmNlXCIsIFwiRlJcIiwgNjcwMjIwMDAsIDY0MDY3OSksXHJcbiAgY3JlYXRlRGF0YShcIlVuaXRlZCBLaW5nZG9tXCIsIFwiR0JcIiwgNjc1NDU3NTcsIDI0MjQ5NSksXHJcbiAgY3JlYXRlRGF0YShcIlJ1c3NpYVwiLCBcIlJVXCIsIDE0Njc5Mzc0NCwgMTcwOTgyNDYpLFxyXG4gIGNyZWF0ZURhdGEoXCJOaWdlcmlhXCIsIFwiTkdcIiwgMjAwOTYyNDE3LCA5MjM3NjgpLFxyXG4gIGNyZWF0ZURhdGEoXCJCcmF6aWxcIiwgXCJCUlwiLCAyMTAxNDcxMjUsIDg1MTU3NjcpXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGlja3lIZWFkVGFibGUoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtwYWdlLCBzZXRQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IFtyb3dzUGVyUGFnZSwgc2V0Um93c1BlclBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMTApO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50LCBuZXdQYWdlKSA9PiB7XHJcbiAgICBzZXRQYWdlKG5ld1BhZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlID0gZXZlbnQgPT4ge1xyXG4gICAgc2V0Um93c1BlclBhZ2UoK2V2ZW50LnRhcmdldC52YWx1ZSk7XHJcbiAgICBzZXRQYWdlKDApO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZpbnB1dCAvPlxyXG4gICAgICA8bWFpbiBjbGFzc05hbWU9XCJ0YWJsZWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVib3hcIj5cclxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8VGFibGUgc3RpY2t5SGVhZGVyIGFyaWEtbGFiZWw9XCJzdGlja3kgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoY29sdW1uID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPXtjb2x1bW4uYWxpZ259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBjb2x1bW4ubWluV2lkdGggfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cm93c1xyXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShwYWdlICogcm93c1BlclBhZ2UsIHBhZ2UgKiByb3dzUGVyUGFnZSArIHJvd3NQZXJQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocm93ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyb3cuY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByb3dbY29sdW1uLmlkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtjb2x1bW4uaWR9IGFsaWduPXtjb2x1bW4uYWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uZm9ybWF0ICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uZm9ybWF0KHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxUYWJsZVBhZ2luYXRpb25cclxuICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgMjUsIDEwMF19XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgICBjb3VudD17cm93cy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgcm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxyXG4gICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VQYWdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlUm93c1BlclBhZ2U9e2hhbmRsZUNoYW5nZVJvd3NQZXJQYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9