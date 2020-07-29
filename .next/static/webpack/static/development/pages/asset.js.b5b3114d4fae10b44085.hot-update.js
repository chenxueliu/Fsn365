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
  minWidth: 100
}, {
  id: "assetid",
  label: "Asse tId",
  minWidth: 200
}, {
  id: "quantity",
  label: "Quantity",
  minWidth: 170,
  align: "right",
  format: function format(value) {
    return value.toLocaleString("en-US");
  }
}];

function createData(asset, assetid, quantity) {
  // const density = population / size;
  return {
    asset: asset,
    assetid: assetid,
    quantity: quantity
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hc3NldC9pbmRleC5qc3giXSwibmFtZXMiOlsiY29sdW1ucyIsImlkIiwibGFiZWwiLCJtaW5XaWR0aCIsImFsaWduIiwiZm9ybWF0IiwidmFsdWUiLCJ0b0xvY2FsZVN0cmluZyIsImNyZWF0ZURhdGEiLCJhc3NldCIsImFzc2V0aWQiLCJxdWFudGl0eSIsInJvd3MiLCJTdGlja3lIZWFkVGFibGUiLCJSZWFjdCIsInVzZVN0YXRlIiwicGFnZSIsInNldFBhZ2UiLCJyb3dzUGVyUGFnZSIsInNldFJvd3NQZXJQYWdlIiwiaGFuZGxlQ2hhbmdlUGFnZSIsImV2ZW50IiwibmV3UGFnZSIsImhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlIiwidGFyZ2V0IiwibWFwIiwiY29sdW1uIiwic2xpY2UiLCJyb3ciLCJjb2RlIiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxPQUFPLEdBQUcsQ0FDZDtBQUFFQyxJQUFFLEVBQUUsT0FBTjtBQUFlQyxPQUFLLEVBQUUsT0FBdEI7QUFBK0JDLFVBQVEsRUFBRTtBQUF6QyxDQURjLEVBRWQ7QUFBRUYsSUFBRSxFQUFFLFNBQU47QUFBaUJDLE9BQUssRUFBRSxVQUF4QjtBQUFvQ0MsVUFBUSxFQUFFO0FBQTlDLENBRmMsRUFHZDtBQUNFRixJQUFFLEVBQUUsVUFETjtBQUVFQyxPQUFLLEVBQUUsVUFGVDtBQUdFQyxVQUFRLEVBQUUsR0FIWjtBQUlFQyxPQUFLLEVBQUUsT0FKVDtBQUtFQyxRQUFNLEVBQUUsZ0JBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLGNBQU4sQ0FBcUIsT0FBckIsQ0FBSjtBQUFBO0FBTGYsQ0FIYyxDQUFoQjs7QUFZQSxTQUFTQyxVQUFULENBQW9CQyxLQUFwQixFQUEyQkMsT0FBM0IsRUFB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QUE7QUFBQTtBQUFBLE9BTUc3QixPQUFPLENBQUN5QixHQUFSLENBQVksVUFBQUMsTUFBTSxFQUFJO0FBQ3JCLFVBQU1wQixLQUFLLEdBQUdzQixHQUFHLENBQUNGLE1BQU0sQ0FBQ3pCLEVBQVIsQ0FBakI7QUFDQSxhQUNFLE1BQUMsbUVBQUQ7QUFBVyxXQUFHLEVBQUV5QixNQUFNLENBQUN6QixFQUF2QjtBQUEyQixhQUFLLEVBQUV5QixNQUFNLENBQUN0QixLQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0dzQixNQUFNLENBQUNyQixNQUFQLElBQWlCLE9BQU9DLEtBQVAsS0FBaUIsUUFBbEMsR0FDR29CLE1BQU0sQ0FBQ3JCLE1BQVAsQ0FBY0MsS0FBZCxDQURILEdBRUdBLEtBSE4sQ0FERjtBQU9ELEtBVEEsQ0FOSCxDQURGO0FBbUJELEdBdEJGLENBREgsQ0FkRixDQURGLENBREYsRUEyQ0UsTUFBQyx5RUFBRDtBQUNFLHNCQUFrQixFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxHQUFULENBRHRCO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxTQUFLLEVBQUVNLElBQUksQ0FBQ2tCLE1BSGQ7QUFJRSxlQUFXLEVBQUVaLFdBSmY7QUFLRSxRQUFJLEVBQUVGLElBTFI7QUFNRSxnQkFBWSxFQUFFSSxnQkFOaEI7QUFPRSx1QkFBbUIsRUFBRUcsdUJBUHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQ0YsQ0FERixDQUZGLENBRkYsQ0FERjtBQStERDs7R0EzRXVCVixlOztLQUFBQSxlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhc3NldC5qcy5iNWIzMTE0ZDRmYWUxMGI0NDA4NS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIjtcclxuaW1wb3J0IFRhYmxlUGFnaW5hdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIjtcclxuaW1wb3J0IE5hdmlucHV0IGZyb20gXCIuLi9jb21wb25lbnQvbmF2aW5wdXQvaW5kZXhcIjtcclxuY29uc3QgY29sdW1ucyA9IFtcclxuICB7IGlkOiBcImFzc2V0XCIsIGxhYmVsOiBcIkFzc2V0XCIsIG1pbldpZHRoOiAxMDAgfSxcclxuICB7IGlkOiBcImFzc2V0aWRcIiwgbGFiZWw6IFwiQXNzZSB0SWRcIiwgbWluV2lkdGg6IDIwMCB9LFxyXG4gIHtcclxuICAgIGlkOiBcInF1YW50aXR5XCIsXHJcbiAgICBsYWJlbDogXCJRdWFudGl0eVwiLFxyXG4gICAgbWluV2lkdGg6IDE3MCxcclxuICAgIGFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICBmb3JtYXQ6IHZhbHVlID0+IHZhbHVlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIilcclxuICB9XHJcbl07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKGFzc2V0LCBhc3NldGlkLCBxdWFudGl0eSkge1xyXG4gIC8vIGNvbnN0IGRlbnNpdHkgPSBwb3B1bGF0aW9uIC8gc2l6ZTtcclxuICByZXR1cm4geyBhc3NldCwgYXNzZXRpZCwgcXVhbnRpdHkgfTtcclxufVxyXG5cclxuY29uc3Qgcm93cyA9IFtcclxuICBjcmVhdGVEYXRhKFwiSW5kaWFcIiwgXCJJTlwiLCAxMzI0MTcxMzU0LCAzMjg3MjYzKSxcclxuICBjcmVhdGVEYXRhKFwiQ2hpbmFcIiwgXCJDTlwiLCAxNDAzNTAwMzY1LCA5NTk2OTYxKSxcclxuICBjcmVhdGVEYXRhKFwiSXRhbHlcIiwgXCJJVFwiLCA2MDQ4Mzk3MywgMzAxMzQwKSxcclxuICBjcmVhdGVEYXRhKFwiVW5pdGVkIFN0YXRlc1wiLCBcIlVTXCIsIDMyNzE2NzQzNCwgOTgzMzUyMCksXHJcbiAgY3JlYXRlRGF0YShcIkNhbmFkYVwiLCBcIkNBXCIsIDM3NjAyMTAzLCA5OTg0NjcwKSxcclxuICBjcmVhdGVEYXRhKFwiQXVzdHJhbGlhXCIsIFwiQVVcIiwgMjU0NzU0MDAsIDc2OTIwMjQpLFxyXG4gIGNyZWF0ZURhdGEoXCJHZXJtYW55XCIsIFwiREVcIiwgODMwMTkyMDAsIDM1NzU3OCksXHJcbiAgY3JlYXRlRGF0YShcIklyZWxhbmRcIiwgXCJJRVwiLCA0ODU3MDAwLCA3MDI3MyksXHJcbiAgY3JlYXRlRGF0YShcIk1leGljb1wiLCBcIk1YXCIsIDEyNjU3NzY5MSwgMTk3MjU1MCksXHJcbiAgY3JlYXRlRGF0YShcIkphcGFuXCIsIFwiSlBcIiwgMTI2MzE3MDAwLCAzNzc5NzMpLFxyXG4gIGNyZWF0ZURhdGEoXCJGcmFuY2VcIiwgXCJGUlwiLCA2NzAyMjAwMCwgNjQwNjc5KSxcclxuICBjcmVhdGVEYXRhKFwiVW5pdGVkIEtpbmdkb21cIiwgXCJHQlwiLCA2NzU0NTc1NywgMjQyNDk1KSxcclxuICBjcmVhdGVEYXRhKFwiUnVzc2lhXCIsIFwiUlVcIiwgMTQ2NzkzNzQ0LCAxNzA5ODI0NiksXHJcbiAgY3JlYXRlRGF0YShcIk5pZ2VyaWFcIiwgXCJOR1wiLCAyMDA5NjI0MTcsIDkyMzc2OCksXHJcbiAgY3JlYXRlRGF0YShcIkJyYXppbFwiLCBcIkJSXCIsIDIxMDE0NzEyNSwgODUxNTc2NylcclxuXTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0aWNreUhlYWRUYWJsZSgpIHtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDEwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudCwgbmV3UGFnZSkgPT4ge1xyXG4gICAgc2V0UGFnZShuZXdQYWdlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSA9IGV2ZW50ID0+IHtcclxuICAgIHNldFJvd3NQZXJQYWdlKCtldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0UGFnZSgwKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2aW5wdXQgLz5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwidGFibGVjb250YWluZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dFwiPkFzc2V0czwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZWJveFwiPlxyXG4gICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxUYWJsZSBzdGlja3lIZWFkZXIgYXJpYS1sYWJlbD1cInN0aWNreSB0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249e2NvbHVtbi5hbGlnbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IGNvbHVtbi5taW5XaWR0aCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHtyb3dzXHJcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKHBhZ2UgKiByb3dzUGVyUGFnZSwgcGFnZSAqIHJvd3NQZXJQYWdlICsgcm93c1BlclBhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChyb3cgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Jvdy5jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbnMubWFwKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJvd1tjb2x1bW4uaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBrZXk9e2NvbHVtbi5pZH0gYWxpZ249e2NvbHVtbi5hbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5mb3JtYXQgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5mb3JtYXQodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFRhYmxlUGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLCAyNSwgMTAwXX1cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgICAgIGNvdW50PXtyb3dzLmxlbmd0aH1cclxuICAgICAgICAgICAgICByb3dzUGVyUGFnZT17cm93c1BlclBhZ2V9XHJcbiAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VSb3dzUGVyUGFnZT17aGFuZGxlQ2hhbmdlUm93c1BlclBhZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=