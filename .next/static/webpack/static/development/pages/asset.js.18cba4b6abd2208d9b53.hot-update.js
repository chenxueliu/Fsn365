webpackHotUpdate("static\\development\\pages\\asset.js",{

/***/ "./pages/asset/index.jsx":
/*!*******************************!*\
  !*** ./pages/asset/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Assets; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.less */ "./pages/asset/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _component_navinput_index__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../component/navinput/index */ "./pages/component/navinput/index.jsx");


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
  return {
    asset: asset,
    assetid: assetid,
    quantity: quantity
  };
}

var rows = [createData("India", "IN", 1324171354, 3287263), createData("China", "CN", 1403500365, 9596961), createData("Italy", "IT", 60483973, 301340), createData("United States", "US", 327167434, 9833520), createData("Canada", "CA", 37602103, 9984670), createData("Australia", "AU", 25475400, 7692024), createData("Germany", "DE", 83019200, 357578), createData("Ireland", "IE", 4857000, 70273), createData("Mexico", "MX", 126577691, 1972550), createData("Japan", "JP", 126317000, 377973), createData("France", "FR", 67022000, 640679), createData("United Kingdom", "GB", 67545757, 242495), createData("Russia", "RU", 146793744, 17098246), createData("Nigeria", "NG", 200962417, 923768), createData("Brazil", "BR", 210147125, 8515767)];
function Assets() {
  _s();

  var _this = this;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState([]),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      intval = _React$useState2[0],
      setvalue = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      page = _React$useState4[0],
      setPage = _React$useState4[1];

  var _React$useState5 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(10),
      _React$useState6 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState5, 2),
      rowsPerPage = _React$useState6[0],
      setRowsPerPage = _React$useState6[1];

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
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx(_component_navinput_index__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }), __jsx("main", {
    className: "tablecontainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }, __jsx("h2", {
    className: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  }, "Assets"), __jsx("div", {
    className: "tablebox",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "root",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
    stickyHeader: true,
    "aria-label": "sticky table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, columns.map(function (column) {
    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
      key: column.id,
      align: column.align,
      style: {
        minWidth: column.minWidth
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 23
      }
    }, column.label);
  }))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_11__["default"], {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: row.code,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }, columns.map(function (column) {
      var value = row[column.id];
      return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_7__["default"], {
        key: column.id,
        align: column.align,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 31
        }
      }, column.format && typeof value === "number" ? column.format(value) : value);
    }));
  })))), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
      lineNumber: 109,
      columnNumber: 13
    }
  })))));
}

_s(Assets, "5apfF/8M5Xpjq4gJgu9W//6xcGw=");

_c = Assets;

var _c;

$RefreshReg$(_c, "Assets");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hc3NldC9pbmRleC5qc3giXSwibmFtZXMiOlsiY29sdW1ucyIsImlkIiwibGFiZWwiLCJtaW5XaWR0aCIsImFsaWduIiwiZm9ybWF0IiwidmFsdWUiLCJ0b0xvY2FsZVN0cmluZyIsImNyZWF0ZURhdGEiLCJhc3NldCIsImFzc2V0aWQiLCJxdWFudGl0eSIsInJvd3MiLCJBc3NldHMiLCJSZWFjdCIsInVzZVN0YXRlIiwiaW50dmFsIiwic2V0dmFsdWUiLCJwYWdlIiwic2V0UGFnZSIsInJvd3NQZXJQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJoYW5kbGVDaGFuZ2VQYWdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UiLCJ0YXJnZXQiLCJtYXAiLCJjb2x1bW4iLCJzbGljZSIsInJvdyIsImNvZGUiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFNQSxPQUFPLEdBQUcsQ0FDZDtBQUFFQyxJQUFFLEVBQUUsT0FBTjtBQUFlQyxPQUFLLEVBQUUsT0FBdEI7QUFBK0JDLFVBQVEsRUFBRTtBQUF6QyxDQURjLEVBRWQ7QUFBRUYsSUFBRSxFQUFFLFNBQU47QUFBaUJDLE9BQUssRUFBRSxVQUF4QjtBQUFvQ0MsVUFBUSxFQUFFO0FBQTlDLENBRmMsRUFHZDtBQUNFRixJQUFFLEVBQUUsVUFETjtBQUVFQyxPQUFLLEVBQUUsVUFGVDtBQUdFQyxVQUFRLEVBQUUsR0FIWjtBQUlFQyxPQUFLLEVBQUUsT0FKVDtBQUtFQyxRQUFNLEVBQUUsZ0JBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLGNBQU4sQ0FBcUIsT0FBckIsQ0FBSjtBQUFBO0FBTGYsQ0FIYyxDQUFoQjs7QUFZQSxTQUFTQyxVQUFULENBQW9CQyxLQUFw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RSxVQUFJLEVBQUMsVUFGUDtBQUdFLGNBQVEsRUFBRSxDQUFDLENBSGI7QUFJRSxTQUFHLEVBQUVBLEdBQUcsQ0FBQ0MsSUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTUcvQixPQUFPLENBQUMyQixHQUFSLENBQVksVUFBQUMsTUFBTSxFQUFJO0FBQ3JCLFVBQU10QixLQUFLLEdBQUd3QixHQUFHLENBQUNGLE1BQU0sQ0FBQzNCLEVBQVIsQ0FBakI7QUFDQSxhQUNFLE1BQUMsbUVBQUQ7QUFBVyxXQUFHLEVBQUUyQixNQUFNLENBQUMzQixFQUF2QjtBQUEyQixhQUFLLEVBQUUyQixNQUFNLENBQUN4QixLQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0d3QixNQUFNLENBQUN2QixNQUFQLElBQWlCLE9BQU9DLEtBQVAsS0FBaUIsUUFBbEMsR0FDR3NCLE1BQU0sQ0FBQ3ZCLE1BQVAsQ0FBY0MsS0FBZCxDQURILEdBRUdBLEtBSE4sQ0FERjtBQU9ELEtBVEEsQ0FOSCxDQURGO0FBbUJELEdBdEJGLENBREgsQ0FkRixDQURGLENBREYsRUEyQ0UsTUFBQywwRUFBRDtBQUNFLHNCQUFrQixFQUFFLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxHQUFULENBRHRCO0FBRUUsYUFBUyxFQUFDLEtBRlo7QUFHRSxTQUFLLEVBQUVNLElBQUksQ0FBQ29CLE1BSGQ7QUFJRSxlQUFXLEVBQUVaLFdBSmY7QUFLRSxRQUFJLEVBQUVGLElBTFI7QUFNRSxnQkFBWSxFQUFFSSxnQkFOaEI7QUFPRSx1QkFBbUIsRUFBRUcsdUJBUHZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEzQ0YsQ0FERixDQUZGLENBRkYsQ0FERjtBQStERDs7R0E1RXVCWixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxhc3NldC5qcy4xOGNiYTRiNmFiZDIyMDhkOWI1My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgXCIuL2luZGV4Lmxlc3NcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgVGFibGUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlXCI7XHJcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQm9keVwiO1xyXG5pbXBvcnQgVGFibGVDZWxsIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNlbGxcIjtcclxuaW1wb3J0IFRhYmxlQ29udGFpbmVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUNvbnRhaW5lclwiO1xyXG5pbXBvcnQgVGFibGVIZWFkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUhlYWRcIjtcclxuaW1wb3J0IFRhYmxlUGFnaW5hdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIjtcclxuaW1wb3J0IE5hdmlucHV0IGZyb20gXCIuLi9jb21wb25lbnQvbmF2aW5wdXQvaW5kZXhcIjtcclxuY29uc3QgY29sdW1ucyA9IFtcclxuICB7IGlkOiBcImFzc2V0XCIsIGxhYmVsOiBcIkFzc2V0XCIsIG1pbldpZHRoOiAxMDAgfSxcclxuICB7IGlkOiBcImFzc2V0aWRcIiwgbGFiZWw6IFwiQXNzZSB0SWRcIiwgbWluV2lkdGg6IDIwMCB9LFxyXG4gIHtcclxuICAgIGlkOiBcInF1YW50aXR5XCIsXHJcbiAgICBsYWJlbDogXCJRdWFudGl0eVwiLFxyXG4gICAgbWluV2lkdGg6IDE3MCxcclxuICAgIGFsaWduOiBcInJpZ2h0XCIsXHJcbiAgICBmb3JtYXQ6IHZhbHVlID0+IHZhbHVlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIilcclxuICB9XHJcbl07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKGFzc2V0LCBhc3NldGlkLCBxdWFudGl0eSkge1xyXG4gIHJldHVybiB7IGFzc2V0LCBhc3NldGlkLCBxdWFudGl0eSB9O1xyXG59XHJcblxyXG5jb25zdCByb3dzID0gW1xyXG4gIGNyZWF0ZURhdGEoXCJJbmRpYVwiLCBcIklOXCIsIDEzMjQxNzEzNTQsIDMyODcyNjMpLFxyXG4gIGNyZWF0ZURhdGEoXCJDaGluYVwiLCBcIkNOXCIsIDE0MDM1MDAzNjUsIDk1OTY5NjEpLFxyXG4gIGNyZWF0ZURhdGEoXCJJdGFseVwiLCBcIklUXCIsIDYwNDgzOTczLCAzMDEzNDApLFxyXG4gIGNyZWF0ZURhdGEoXCJVbml0ZWQgU3RhdGVzXCIsIFwiVVNcIiwgMzI3MTY3NDM0LCA5ODMzNTIwKSxcclxuICBjcmVhdGVEYXRhKFwiQ2FuYWRhXCIsIFwiQ0FcIiwgMzc2MDIxMDMsIDk5ODQ2NzApLFxyXG4gIGNyZWF0ZURhdGEoXCJBdXN0cmFsaWFcIiwgXCJBVVwiLCAyNTQ3NTQwMCwgNzY5MjAyNCksXHJcbiAgY3JlYXRlRGF0YShcIkdlcm1hbnlcIiwgXCJERVwiLCA4MzAxOTIwMCwgMzU3NTc4KSxcclxuICBjcmVhdGVEYXRhKFwiSXJlbGFuZFwiLCBcIklFXCIsIDQ4NTcwMDAsIDcwMjczKSxcclxuICBjcmVhdGVEYXRhKFwiTWV4aWNvXCIsIFwiTVhcIiwgMTI2NTc3NjkxLCAxOTcyNTUwKSxcclxuICBjcmVhdGVEYXRhKFwiSmFwYW5cIiwgXCJKUFwiLCAxMjYzMTcwMDAsIDM3Nzk3MyksXHJcbiAgY3JlYXRlRGF0YShcIkZyYW5jZVwiLCBcIkZSXCIsIDY3MDIyMDAwLCA2NDA2NzkpLFxyXG4gIGNyZWF0ZURhdGEoXCJVbml0ZWQgS2luZ2RvbVwiLCBcIkdCXCIsIDY3NTQ1NzU3LCAyNDI0OTUpLFxyXG4gIGNyZWF0ZURhdGEoXCJSdXNzaWFcIiwgXCJSVVwiLCAxNDY3OTM3NDQsIDE3MDk4MjQ2KSxcclxuICBjcmVhdGVEYXRhKFwiTmlnZXJpYVwiLCBcIk5HXCIsIDIwMDk2MjQxNywgOTIzNzY4KSxcclxuICBjcmVhdGVEYXRhKFwiQnJhemlsXCIsIFwiQlJcIiwgMjEwMTQ3MTI1LCA4NTE1NzY3KVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXNzZXRzKCkge1xyXG4gIGNvbnN0IFtpbnR2YWwsIHNldHZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDEwKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUGFnZSA9IChldmVudCwgbmV3UGFnZSkgPT4ge1xyXG4gICAgc2V0UGFnZShuZXdQYWdlKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VSb3dzUGVyUGFnZSA9IGV2ZW50ID0+IHtcclxuICAgIHNldFJvd3NQZXJQYWdlKCtldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgc2V0UGFnZSgwKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2aW5wdXQgLz5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwidGFibGVjb250YWluZXJcIj5cclxuICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dFwiPkFzc2V0czwvaDI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZWJveFwiPlxyXG4gICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT1cInJvb3RcIj5cclxuICAgICAgICAgICAgPFRhYmxlQ29udGFpbmVyIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxUYWJsZSBzdGlja3lIZWFkZXIgYXJpYS1sYWJlbD1cInN0aWNreSB0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgICAgPFRhYmxlUm93PlxyXG4gICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcChjb2x1bW4gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ249e2NvbHVtbi5hbGlnbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWluV2lkdGg6IGNvbHVtbi5taW5XaWR0aCB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Y29sdW1uLmxhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UYWJsZUNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICA8L1RhYmxlSGVhZD5cclxuICAgICAgICAgICAgICAgIDxUYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgICAgIHtyb3dzXHJcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKHBhZ2UgKiByb3dzUGVyUGFnZSwgcGFnZSAqIHJvd3NQZXJQYWdlICsgcm93c1BlclBhZ2UpXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcChyb3cgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlUm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXstMX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Jvdy5jb2RlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbnMubWFwKGNvbHVtbiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHJvd1tjb2x1bW4uaWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBrZXk9e2NvbHVtbi5pZH0gYWxpZ249e2NvbHVtbi5hbGlnbn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5mb3JtYXQgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5mb3JtYXQodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFRhYmxlUGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzEwLCAyNSwgMTAwXX1cclxuICAgICAgICAgICAgICBjb21wb25lbnQ9XCJkaXZcIlxyXG4gICAgICAgICAgICAgIGNvdW50PXtyb3dzLmxlbmd0aH1cclxuICAgICAgICAgICAgICByb3dzUGVyUGFnZT17cm93c1BlclBhZ2V9XHJcbiAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VSb3dzUGVyUGFnZT17aGFuZGxlQ2hhbmdlUm93c1BlclBhZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=