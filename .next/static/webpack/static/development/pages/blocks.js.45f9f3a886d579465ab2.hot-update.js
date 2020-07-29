webpackHotUpdate("static\\development\\pages\\blocks.js",{

/***/ "./pages/blocks/index.jsx":
/*!********************************!*\
  !*** ./pages/blocks/index.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blocks; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index.less */ "./pages/blocks/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_footer_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../component/footer/index */ "./pages/component/footer/index.jsx");
/* harmony import */ var _component_navinput_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../component/navinput/index */ "./pages/component/navinput/index.jsx");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");




var _jsxFileName = "E:\\2020\u5DE5\u4F5C\u5BA4\\fsn365\\pages\\blocks\\index.jsx",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;













var columns = [{
  id: "height",
  label: "Block",
  minWidth: 170,
  align: "center"
}, {
  id: "timestamp",
  label: "Age",
  minWidth: 80,
  align: "center"
}, {
  id: "miner",
  label: "Miner",
  minWidth: 170,
  align: "center",
  format: function format(value) {
    return value.toLocaleString("en-US");
  }
}, {
  id: "txns",
  label: "Txn",
  minWidth: 170,
  align: "center",
  format: function format(value) {
    return value.toLocaleString("en-US");
  }
}, {
  id: "reward",
  label: "Reward",
  minWidth: 170,
  align: "center",
  format: function format(value) {
    return value.toFixed(2);
  }
}];

var blockel = function blockel(val) {// console.log("val" + val);
};

function Blocks() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      arr = _useState[0],
      setArr = _useState[1]; // 请求数据


  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    var fetchData = /*#__PURE__*/function () {
      var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.get("https://api.fsn365.com/blocks");

              case 2:
                result = _context.sent;
                setArr(result.data.data.data); // console.log(result);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function fetchData() {
        return _ref.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(10),
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
      lineNumber: 70,
      columnNumber: 5
    }
  }, __jsx(_component_navinput_index__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }
  }), __jsx("main", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "blockscontainer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "blockstext",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 11
    }
  }, "Blocks"), __jsx(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: "root",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: "container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_9__["default"], {
    stickyHeader: true,
    "aria-label": "sticky table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 15
    }
  }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_13__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 19
    }
  }, columns.map(function (column) {
    return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
      key: column.id,
      align: column.align,
      style: {
        minWidth: column.minWidth
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 23
      }
    }, column.label);
  }))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, arr.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(function (row) {
    console.log(row);
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_15__["default"], {
      hover: true,
      role: "checkbox",
      tabIndex: -1,
      key: row.reward,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 25
      }
    }, columns.map(function (column) {
      var value = row[column.id]; // console.log(value);

      return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_11__["default"], {
        onClick: blockel(value),
        key: column.id,
        align: column.align,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 31
        }
      }, column.format && typeof value === "number" ? column.format(value) : value);
    }));
  })))), __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_14__["default"], {
    rowsPerPageOptions: [5, 10, 25, 50, 100],
    component: "div",
    count: arr.length,
    rowsPerPage: rowsPerPage,
    page: page,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  })))), __jsx(_component_footer_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 7
    }
  }));
}

_s(Blocks, "GqNcTIyE40wZS5H8+H5vA5WGZt0=");

_c = Blocks;

var _c;

$RefreshReg$(_c, "Blocks");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9ibG9ja3MvaW5kZXguanN4Il0sIm5hbWVzIjpbImNvbHVtbnMiLCJpZCIsImxhYmVsIiwibWluV2lkdGgiLCJhbGlnbiIsImZvcm1hdCIsInZhbHVlIiwidG9Mb2NhbGVTdHJpbmciLCJ0b0ZpeGVkIiwiYmxvY2tlbCIsInZhbCIsIkJsb2NrcyIsInVzZVN0YXRlIiwiYXJyIiwic2V0QXJyIiwidXNlRWZmZWN0IiwiZmV0Y2hEYXRhIiwiYXhpb3MiLCJnZXQiLCJyZXN1bHQiLCJkYXRhIiwiUmVhY3QiLCJwYWdlIiwic2V0UGFnZSIsInJvd3NQZXJQYWdlIiwic2V0Um93c1BlclBhZ2UiLCJoYW5kbGVDaGFuZ2VQYWdlIiwiZXZlbnQiLCJuZXdQYWdlIiwiaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UiLCJ0YXJnZXQiLCJtYXAiLCJjb2x1bW4iLCJzbGljZSIsInJvdyIsImNvbnNvbGUiLCJsb2ciLCJyZXdhcmQiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRyxDQUNkO0FBQUVDLElBQUUsRUFBRSxRQUFOO0FBQWdCQyxPQUFLLEVBQUUsT0FBdkI7QUFBZ0NDLFVBQVEsRUFBRSxHQUExQztBQUErQ0MsT0FBSyxFQUFFO0FBQXRELENBRGMsRUFFZDtBQUFFSCxJQUFFLEVBQUUsV0FBTjtBQUFtQkMsT0FBSyxFQUFFLEtBQTFCO0FBQWlDQyxVQUFRLEVBQUUsRUFBM0M7QUFBK0NDLE9BQUssRUFBRTtBQUF0RCxDQUZjLEVBR2Q7QUFDRUgsSUFBRSxFQUFFLE9BRE47QUFFRUMsT0FBSyxFQUFFLE9BRlQ7QUFHRUMsVUFBUSxFQUFFLEdBSFo7QUFJRUMsT0FBSyxFQUFFLFFBSlQ7QUFLRUMsUUFBTSxFQUFFLGdCQUFBQyxLQUFLO0FBQUEsV0FBSUEsS0FBSyxDQUFDQyxjQUFOLENBQXFCLE9BQXJCLENBQUo7QUFBQTtBQUxmLENBSGMsRUFVZDtBQUNFTixJQUFFLEVBQUUsTUFETjtBQUVFQyxPQUFLLEVBQUUsS0FGVDtBQUdFQyxVQUFRLEVBQUUsR0FIWjtBQUlFQyxPQUFLLEVBQUUsUUFKVDtBQUtFQyxRQUFNLEVBQUUsZ0JBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNDLGNBQU4sQ0FBcUIsT0FBckIsQ0FBSjtBQUFBO0FBTGYsQ0FWYyxFQWlCZDtBQUNFTixJQUFFLEVBQUUsUUFETjtBQUVFQyxPQUFLLEVBQUUsUUFGVDtBQUdFQyxVQUFRLEVBQUUsR0FIWjtBQUlFQyxPQUFLLEVBQUUsUUFKVDtBQUtFQyxRQUFNLEVBQUUsZ0JBQUFDLEtBQUs7QUFBQSxXQUFJQSxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBQUo7QUFBQTtBQUxmLENBakJjLENBQWhCOztBQTBCQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFBQyxHQUFHLEVBQUksQ0FDckI7QUFDRCxDQUZEOztBQUdlLFNBQVNDLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDVEMsc0RBQVEsQ0FBQyxFQUFELENBREM7QUFBQSxNQUN4QkMsR0FEd0I7QUFBQSxNQUNuQkMsTUFEbUIsaUJBRS9COzs7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsU0FBUztBQUFBLGtNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQ0tDLDRDQUFLLENBQUNDLEdBQU4sQ0FBVSwrQkFBVixDQURMOztBQUFBO0FBQ1ZDLHNCQURVO0FBRWhCTCxzQkFBTSxDQUFDSyxNQUFNLENBQUNDLElBQVAsQ0FBWUEsSUFBWixDQUFpQkEsSUFBbEIsQ0FBTixDQUZnQixDQUdoQjs7QUFIZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSDs7QUFBQSxzQkFBVEosU0FBUztBQUFBO0FBQUE7QUFBQSxPQUFmOztBQUtBQSxhQUFTO0FBQ1YsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFIK0Isd0JBWVBLLDRDQUFLLENBQUNULFFBQU4sQ0FBZSxDQUFmLENBWk87QUFBQTtBQUFBLE1BWXhCVSxJQVp3QjtBQUFBLE1BWWxCQyxPQVprQjs7QUFBQSx5QkFhT0YsNENBQUssQ0FBQ1QsUUFBTixDQUFlLEVBQWYsQ0FiUDtBQUFBO0FBQUEsTUFheEJZLFdBYndCO0FBQUEsTUFhWEMsY0FiVzs7QUFlL0IsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixDQUFDQyxLQUFELEVBQVFDLE9BQVIsRUFBb0I7QUFDM0NMLFdBQU8sQ0FBQ0ssT0FBRCxDQUFQO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUFGLEtBQUssRUFBSTtBQUN2Q0Ysa0JBQWMsQ0FBQyxDQUFDRSxLQUFLLENBQUNHLE1BQU4sQ0FBYXhCLEtBQWYsQ0FBZDtBQUNBaUIsV0FBTyxDQUFDLENBQUQsQ0FBUDtBQUNELEdBSEQ7O0FBS0EsU0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLEVBRUUsTUFBQywrREFBRDtBQUFPLGFBQVMsRUFBQyxNQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyx5RUFBRDtBQUFnQixhQUFTLEVBQUMsV0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBTyxnQkFBWSxNQUFuQjtBQUFvQixrQkFBVyxjQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0d2QixPQUFPLENBQUMrQixHQUFSLENBQVksVUFBQUMsTUFBTTtBQUFBLFdBQ2pCLE1BQUMsb0VBQUQ7QUFDRSxTQUFHLEVBQUVBLE1BQU0sQ0FBQy9CLEVBRGQ7QUFFRSxXQUFLLEVBQUUrQixNQUFNLENBQUM1QixLQUZoQjtBQUdFLFdBQUssRUFBRTtBQUFFRCxnQkFBUSxFQUFFNkIsTUFBTSxDQUFDN0I7QUFBbkIsT0FIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BS0c2QixNQUFNLENBQUM5QixLQUxWLENBRGlCO0FBQUEsR0FBbEIsQ0FESCxDQURGLENBREYsRUFjRSxNQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDR1csR0FBRyxDQUNEb0IsS0FERixDQUNRWCxJQUFJLEdBQUdFLFdBRGYsRUFDNEJGLElBQUksR0FBR0UsV0FBUCxHQUFxQkEsV0FEakQsRUFFRU8sR0FGRixDQUVNLFVBQUFHLEdBQUcsRUFBSTtBQUNWQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLFdBQ0UsTUFBQyxtRUFBRDtBQUNFLFdBQUssTUFEUDtBQUVFLFVBQUksRUFBQyxVQUZQO0FBR0UsY0FBUSxFQUFFLENBQUMsQ0FIYjtBQUlFLFNBQUcsRUFBRUEsR0FBRyxDQUFDRyxNQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FNR3JDLE9BQU8sQ0FBQytCLEdBQVIsQ0FBWSxVQUFBQyxNQUFNLEVBQUk7QUFDckIsVUFBTTFCLEtBQUssR0FBRzRCLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDL0IsRUFBUixDQUFqQixDQURxQixDQUVyQjs7QUFDQSxhQUNFLE1BQUMsb0VBQUQ7QUFDRSxlQUFPLEVBQUVRLE9BQU8sQ0FBQ0gsS0FBRCxDQURsQjtBQUVFLFdBQUcsRUFBRTBCLE1BQU0sQ0FBQy9CLEVBRmQ7QUFHRSxhQUFLLEVBQUUrQixNQUFNLENBQUM1QixLQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBS0c0QixNQUFNLENBQUMzQixNQUFQLElBQWlCLE9BQU9DLEtBQVAsS0FBaUIsUUFBbEMsR0FDRzBCLE1BQU0sQ0FBQzNCLE1BQVAsQ0FBY0MsS0FBZCxDQURILEdBRUdBLEtBUE4sQ0FERjtBQVdELEtBZEEsQ0FOSCxDQURGO0FBd0JELEdBNUJGLENBREgsQ0FkRixDQURGLENBREYsRUFpREUsTUFBQywwRUFBRDtBQUNFLHNCQUFrQixFQUFFLENBQUMsQ0FBRCxFQUFJLEVBQUosRUFBUSxFQUFSLEVBQVksRUFBWixFQUFnQixHQUFoQixDQUR0QjtBQUVFLGFBQVMsRUFBQyxLQUZaO0FBR0UsU0FBSyxFQUFFTyxHQUFHLENBQUN5QixNQUhiO0FBSUUsZUFBVyxFQUFFZCxXQUpmO0FBS0UsUUFBSSxFQUFFRixJQUxSO0FBTUUsZ0JBQVksRUFBRUksZ0JBTmhCO0FBT0UsdUJBQW1CLEVBQUVHLHVCQVB2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBakRGLENBRkYsQ0FERixDQUZGLEVBa0VFLE1BQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWxFRixDQURGO0FBc0VEOztHQTlGdUJsQixNOztLQUFBQSxNIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxibG9ja3MuanMuNDVmOWYzYTg4NmQ1Nzk0NjVhYjIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIi4vaW5kZXgubGVzc1wiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudC9mb290ZXIvaW5kZXhcIjtcclxuaW1wb3J0IE5hdmlucHV0IGZyb20gXCIuLi9jb21wb25lbnQvbmF2aW5wdXQvaW5kZXhcIjtcclxuXHJcbmltcG9ydCBQYXBlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXJcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIjtcclxuaW1wb3J0IFRhYmxlSGVhZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVIZWFkXCI7XHJcbmltcG9ydCBUYWJsZVBhZ2luYXRpb24gZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUGFnaW5hdGlvblwiO1xyXG5pbXBvcnQgVGFibGVSb3cgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlUm93XCI7XHJcblxyXG5jb25zdCBjb2x1bW5zID0gW1xyXG4gIHsgaWQ6IFwiaGVpZ2h0XCIsIGxhYmVsOiBcIkJsb2NrXCIsIG1pbldpZHRoOiAxNzAsIGFsaWduOiBcImNlbnRlclwiIH0sXHJcbiAgeyBpZDogXCJ0aW1lc3RhbXBcIiwgbGFiZWw6IFwiQWdlXCIsIG1pbldpZHRoOiA4MCwgYWxpZ246IFwiY2VudGVyXCIgfSxcclxuICB7XHJcbiAgICBpZDogXCJtaW5lclwiLFxyXG4gICAgbGFiZWw6IFwiTWluZXJcIixcclxuICAgIG1pbldpZHRoOiAxNzAsXHJcbiAgICBhbGlnbjogXCJjZW50ZXJcIixcclxuICAgIGZvcm1hdDogdmFsdWUgPT4gdmFsdWUudG9Mb2NhbGVTdHJpbmcoXCJlbi1VU1wiKVxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IFwidHhuc1wiLFxyXG4gICAgbGFiZWw6IFwiVHhuXCIsXHJcbiAgICBtaW5XaWR0aDogMTcwLFxyXG4gICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBmb3JtYXQ6IHZhbHVlID0+IHZhbHVlLnRvTG9jYWxlU3RyaW5nKFwiZW4tVVNcIilcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiBcInJld2FyZFwiLFxyXG4gICAgbGFiZWw6IFwiUmV3YXJkXCIsXHJcbiAgICBtaW5XaWR0aDogMTcwLFxyXG4gICAgYWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICBmb3JtYXQ6IHZhbHVlID0+IHZhbHVlLnRvRml4ZWQoMilcclxuICB9XHJcbl07XHJcblxyXG5jb25zdCBibG9ja2VsID0gdmFsID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhcInZhbFwiICsgdmFsKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmxvY2tzKCkge1xyXG4gIGNvbnN0IFthcnIsIHNldEFycl0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgLy8g6K+35rGC5pWw5o2uXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGZldGNoRGF0YSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9hcGkuZnNuMzY1LmNvbS9ibG9ja3NcIik7XHJcbiAgICAgIHNldEFycihyZXN1bHQuZGF0YS5kYXRhLmRhdGEpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpO1xyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgW3BhZ2UsIHNldFBhZ2VdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3Jvd3NQZXJQYWdlLCBzZXRSb3dzUGVyUGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgxMCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVBhZ2UgPSAoZXZlbnQsIG5ld1BhZ2UpID0+IHtcclxuICAgIHNldFBhZ2UobmV3UGFnZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UgPSBldmVudCA9PiB7XHJcbiAgICBzZXRSb3dzUGVyUGFnZSgrZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldFBhZ2UoMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxOYXZpbnB1dCAvPlxyXG4gICAgICA8bWFpbj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2Nrc2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9ja3N0ZXh0XCI+QmxvY2tzPC9kaXY+XHJcbiAgICAgICAgICA8UGFwZXIgY2xhc3NOYW1lPVwicm9vdFwiPlxyXG4gICAgICAgICAgICA8VGFibGVDb250YWluZXIgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPFRhYmxlIHN0aWNreUhlYWRlciBhcmlhLWxhYmVsPVwic3RpY2t5IHRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8VGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAge2NvbHVtbnMubWFwKGNvbHVtbiA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8VGFibGVDZWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17Y29sdW1uLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj17Y29sdW1uLmFsaWdufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtaW5XaWR0aDogY29sdW1uLm1pbldpZHRoIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW4ubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICAgICAgIDwvVGFibGVIZWFkPlxyXG4gICAgICAgICAgICAgICAgPFRhYmxlQm9keT5cclxuICAgICAgICAgICAgICAgICAge2FyclxyXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZShwYWdlICogcm93c1BlclBhZ2UsIHBhZ2UgKiByb3dzUGVyUGFnZSArIHJvd3NQZXJQYWdlKVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYXAocm93ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGFibGVSb3dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBob3ZlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cm93LnJld2FyZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtjb2x1bW5zLm1hcChjb2x1bW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSByb3dbY29sdW1uLmlkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUYWJsZUNlbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtibG9ja2VsKHZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2NvbHVtbi5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbj17Y29sdW1uLmFsaWdufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvbHVtbi5mb3JtYXQgJiYgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNvbHVtbi5mb3JtYXQodmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHZhbHVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVGFibGVSb3c+XHJcbiAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgPC9UYWJsZUJvZHk+XHJcbiAgICAgICAgICAgICAgPC9UYWJsZT5cclxuICAgICAgICAgICAgPC9UYWJsZUNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPFRhYmxlUGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgIHJvd3NQZXJQYWdlT3B0aW9ucz17WzUsIDEwLCAyNSwgNTAsIDEwMF19XHJcbiAgICAgICAgICAgICAgY29tcG9uZW50PVwiZGl2XCJcclxuICAgICAgICAgICAgICBjb3VudD17YXJyLmxlbmd0aH1cclxuICAgICAgICAgICAgICByb3dzUGVyUGFnZT17cm93c1BlclBhZ2V9XHJcbiAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICBvbkNoYW5nZVBhZ2U9e2hhbmRsZUNoYW5nZVBhZ2V9XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VSb3dzUGVyUGFnZT17aGFuZGxlQ2hhbmdlUm93c1BlclBhZ2V9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==