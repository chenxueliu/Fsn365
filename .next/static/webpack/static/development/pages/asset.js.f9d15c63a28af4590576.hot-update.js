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
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.less */ "./pages/asset/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_2__);
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
  id: "asset",
  label: "Asset",
  minWidth: 170
}, {
  id: "assetid",
  label: "Asse tId",
  minWidth: 100
}, {
  id: "quantity",
  label: "Quantity",
  minWidth: 170,
  align: "right",
  format: function format(value) {
    return value.toLocaleString("en-US");
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
      lineNumber: 60,
      columnNumber: 5
    }
  }, __jsx(_component_navinput_index__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx("main", {
    className: "tablecontainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, "Assets"), __jsx("div", {
    className: "tablebox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "root",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    stickyHeader: true,
    "aria-label": "sticky table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
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
        lineNumber: 71,
        columnNumber: 23
      }
    }, column.label);
  }))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
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
        lineNumber: 86,
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
          lineNumber: 95,
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
      lineNumber: 108,
      columnNumber: 13
    }
  })))));
}

_s(StickyHeadTable, "65nbIEELuFY2eeUXbED/8VsHrEQ=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hc3NldC9pbmRleC5qc3giXSwibmFtZXMiOlsiY29sdW1ucyIsImlkIiwibGFiZWwiLCJtaW5XaWR0aCIsImFsaWduIiwiZm9ybWF0IiwidmFsdWUiLCJ0b0xvY2FsZVN0cmluZyIsImNyZWF0ZURhdGEiLCJuYW1lIiwiY29kZSIsInBvcHVsYXRpb24iLCJzaXplIiwiZGVuc2l0eSIsInJvd3MiLCJTdGlja3lIZWFkVGFibGUiLCJSZWFjdCIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJyb3dzUGVyUGFnZSIsInNldFJvd3NQZXJQYWdlIiwiaGFuZGxlQ2hhbmdlUGFnZSIsImV2ZW50IiwibmV3UGFnZSIsImhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlIiwidGFyZ2V0IiwibWFwIiwiY29sdW1uIiwic2xpY2UiLCJyb3ciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLE9BQU8sR0FBRyxDQUNkO0FBQUVDLElBQUUsRUFBRSxPQUFOO0FBQWVDLE9BQUssRUFBRSxPQUF0QjtBQUErQkMsVUFBUSxFQUFFO0FBQXpDLENBRGMsRUFFZDtBQUFFRixJQUFFLEVBQUUsU0FBTjtBQUFpQkMsT0FBSyxFQUFFLFVBQXhCO0FBQW9DQyxVQUFRLEVBQUU7QUFBOUMsQ0FGYyxFQUdkO0FBQ0VGLElBQUUsRUFBRSxVQUROO0FBRUVDLE9BQUssRUFBRSxVQUZUO0FBR0VDLFVBQVEsRUFBRSxHQUhaO0FBSUVDLE9BQUssRUFBRSxPQUpUO0FBS0VDLFFBQU0sRUFBRSxnQkFBQUMsS0FBSztBQUFBLFdBQUlBLEtBQUssQ0FBQ0MsY0FBTixDQUFxQixPQUFyQixDQUFKO0FBQUE7QUFMZixDQUhjLENBQWhCOztBQVlBLFNBQVNDLFVBQVQsQ0FBb0JDLElBQXBCLEVBQTBCQyxJ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UDtBQUVFLFVBQUksRUFBQyxVQUZQO0FBR0UsY0FBUSxFQUFFLENBQUMsQ0FIYjtBQUlFLFNBQUcsRUFBRUEsR0FBRyxDQUFDcEIsSUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUdWLE9BQU8sQ0FBQzJCLEdBQVIsQ0FBWSxVQUFBQyxNQUFNLEVBQUk7QUFDckIsVUFBTXRCLEtBQUssR0FBR3dCLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDM0IsRUFBUixDQUFqQjtBQUNBLGFBQ0UsTUFBQyxtRUFBRDtBQUFXLFdBQUcsRUFBRTJCLE1BQU0sQ0FBQzNCLEVBQXZCO0FBQTJCLGFBQUssRUFBRTJCLE1BQU0sQ0FBQ3hCLEtBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDR3dCLE1BQU0sQ0FBQ3ZCLE1BQVAsSUFBaUIsT0FBT0MsS0FBUCxLQUFpQixRQUFsQyxHQUNHc0IsTUFBTSxDQUFDdkIsTUFBUCxDQUFjQyxLQUFkLENBREgsR0FFR0EsS0FITixDQURGO0FBT0QsS0FUQSxDQU5ILENBREY7QUFtQkQsR0F0QkYsQ0FESCxDQWRGLENBREYsQ0FERixFQTJDRSxNQUFDLHlFQUFEO0FBQ0Usc0JBQWtCLEVBQUUsQ0FBQyxFQUFELEVBQUssRUFBTCxFQUFTLEdBQVQsQ0FEdEI7QUFFRSxhQUFTLEVBQUMsS0FGWjtBQUdFLFNBQUssRUFBRVEsSUFBSSxDQUFDaUIsTUFIZDtBQUlFLGVBQVcsRUFBRVgsV0FKZjtBQUtFLFFBQUksRUFBRUYsSUFMUjtBQU1FLGdCQUFZLEVBQUVJLGdCQU5oQjtBQU9FLHVCQUFtQixFQUFFRyx1QkFQdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNDRixDQURGLENBRkYsQ0FGRixDQURGO0FBK0REOztHQTNFdUJWLGU7O0tBQUFBLGUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFzc2V0LmpzLmY5ZDE1YzYzYTI4YWY0NTkwNTc2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCI7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBUYWJsZUhlYWQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlSGVhZFwiO1xyXG5pbXBvcnQgVGFibGVQYWdpbmF0aW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVBhZ2luYXRpb25cIjtcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiO1xyXG5pbXBvcnQgTmF2aW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudC9uYXZpbnB1dC9pbmRleFwiO1xyXG5jb25zdCBjb2x1bW5zID0gW1xyXG4gIHsgaWQ6IFwiYXNzZXRcIiwgbGFiZWw6IFwiQXNzZXRcIiwgbWluV2lkdGg6IDE3MCB9LFxyXG4gIHsgaWQ6IFwiYXNzZXRpZFwiLCBsYWJlbDogXCJBc3NlIHRJZFwiLCBtaW5XaWR0aDogMTAwIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwicXVhbnRpdHlcIixcclxuICAgIGxhYmVsOiBcIlF1YW50aXR5XCIsXHJcbiAgICBtaW5XaWR0aDogMTcwLFxyXG4gICAgYWxpZ246IFwicmlnaHRcIixcclxuICAgIGZvcm1hdDogdmFsdWUgPT4gdmFsdWUudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiKVxyXG4gIH1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURhdGEobmFtZSwgY29kZSwgcG9wdWxhdGlvbiwgc2l6ZSkge1xyXG4gIGNvbnN0IGRlbnNpdHkgPSBwb3B1bGF0aW9uIC8gc2l6ZTtcclxuICByZXR1cm4geyBuYW1lLCBjb2RlLCBwb3B1bGF0aW9uLCBzaXplLCBkZW5zaXR5IH07XHJcbn1cclxuXHJcbmNvbnN0IHJvd3MgPSBbXHJcbiAgY3JlYXRlRGF0YShcIkluZGlhXCIsIFwiSU5cIiwgMTMyNDE3MTM1NCwgMzI4NzI2MyksXHJcbiAgY3JlYXRlRGF0YShcIkNoaW5hXCIsIFwiQ05cIiwgMTQwMzUwMDM2NSwgOTU5Njk2MSksXHJcbiAgY3JlYXRlRGF0YShcIkl0YWx5XCIsIFwiSVRcIiwgNjA0ODM5NzMsIDMwMTM0MCksXHJcbiAgY3JlYXRlRGF0YShcIlVuaXRlZCBTdGF0ZXNcIiwgXCJVU1wiLCAzMjcxNjc0MzQsIDk4MzM1MjApLFxyXG4gIGNyZWF0ZURhdGEoXCJDYW5hZGFcIiwgXCJDQVwiLCAzNzYwMjEwMywgOTk4NDY3MCksXHJcbiAgY3JlYXRlRGF0YShcIkF1c3RyYWxpYVwiLCBcIkFVXCIsIDI1NDc1NDAwLCA3NjkyMDI0KSxcclxuICBjcmVhdGVEYXRhKFwiR2VybWFueVwiLCBcIkRFXCIsIDgzMDE5MjAwLCAzNTc1NzgpLFxyXG4gIGNyZWF0ZURhdGEoXCJJcmVsYW5kXCIsIFwiSUVcIiwgNDg1NzAwMCwgNzAyNzMpLFxyXG4gIGNyZWF0ZURhdGEoXCJNZXhpY29cIiwgXCJNWFwiLCAxMjY1Nzc2OTEsIDE5NzI1NTApLFxyXG4gIGNyZWF0ZURhdGEoXCJKYXBhblwiLCBcIkpQXCIsIDEyNjMxNzAwMCwgMzc3OTczKSxcclxuICBjcmVhdGVEYXRhKFwiRnJhbmNlXCIsIFwiRlJcIiwgNjcwMjIwMDAsIDY0MDY3OSksXHJcbiAgY3JlYXRlRGF0YShcIlVuaXRlZCBLaW5nZG9tXCIsIFwiR0JcIiwgNjc1NDU3NTcsIDI0MjQ5NSksXHJcbiAgY3JlYXRlRGF0YShcIlJ1c3NpYVwiLCBcIlJVXCIsIDE0Njc5Mzc0NCwgMTcwOTgyNDYpLFxyXG4gIGNyZWF0ZURhdGEoXCJOaWdlcmlhXCIsIFwiTkdcIiwgMjAwOTYyNDE3LCA5MjM3NjgpLFxyXG4gIGNyZWF0ZURhdGEoXCJCcmF6aWxcIiwgXCJCUlwiLCAyMTAxNDcxMjUsIDg1MTU3NjcpXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGlja3lIZWFkVGFibGUoKSB7XHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBhZ2UgPSAoZXZlbnQsIG5ld1BhZ2UpID0+IHtcclxuICAgIHNldFBhZ2UobmV3UGFnZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UgPSBldmVudCA9PiB7XHJcbiAgICBzZXRSb3dzUGVyUGFnZSgrZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldFBhZ2UoMCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPE5hdmlucHV0IC8+XHJcbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cInRhYmxlY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHRcIj5Bc3NldHM8L2gyPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGVib3hcIj5cclxuICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9XCJyb290XCI+XHJcbiAgICAgICAgICAgIDxUYWJsZUNvbnRhaW5lciBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8VGFibGUgc3RpY2t5SGVhZGVyIGFyaWEtbGFiZWw9XCJzdGlja3kgdGFibGVcIj5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgICAgICB7Y29sdW1ucy5tYXAoY29sdW1uID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtjb2x1bW4uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduPXtjb2x1bW4uYWxpZ259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiBjb2x1bW4ubWluV2lkdGggfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgICAgICB7cm93c1xyXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShwYWdlICogcm93c1BlclBhZ2UsIHBhZ2UgKiByb3dzUGVyUGFnZSArIHJvd3NQZXJQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocm93ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZVJvd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvdmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcm9sZT1cImNoZWNrYm94XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD17LTF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtyb3cuY29kZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByb3dbY29sdW1uLmlkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGwga2V5PXtjb2x1bW4uaWR9IGFsaWduPXtjb2x1bW4uYWxpZ259PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4uZm9ybWF0ICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjb2x1bW4uZm9ybWF0KHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiB2YWx1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvVGFibGVCb2R5PlxyXG4gICAgICAgICAgICAgIDwvVGFibGU+XHJcbiAgICAgICAgICAgIDwvVGFibGVDb250YWluZXI+XHJcbiAgICAgICAgICAgIDxUYWJsZVBhZ2luYXRpb25cclxuICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1sxMCwgMjUsIDEwMF19XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgICBjb3VudD17cm93cy5sZW5ndGh9XHJcbiAgICAgICAgICAgICAgcm93c1BlclBhZ2U9e3Jvd3NQZXJQYWdlfVxyXG4gICAgICAgICAgICAgIHBhZ2U9e3BhZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VQYWdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlUm93c1BlclBhZ2U9e2hhbmRsZUNoYW5nZVJvd3NQZXJQYWdlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9QYXBlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9