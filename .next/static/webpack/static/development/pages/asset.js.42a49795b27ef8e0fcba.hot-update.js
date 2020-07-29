webpackHotUpdate("static\\development\\pages\\asset.js",{

/***/ "./pages/asset/index.jsx":
/*!*******************************!*\
  !*** ./pages/asset/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomPaginationActionsTable; });
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TableFooter */ "./node_modules/@material-ui/core/esm/TableFooter/index.js");
/* harmony import */ var _material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TablePagination */ "./node_modules/@material-ui/core/esm/TablePagination/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/FirstPage */ "./node_modules/_@material-ui_icons@4.9.1@@material-ui/icons/FirstPage.js");
/* harmony import */ var _material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowLeft */ "./node_modules/_@material-ui_icons@4.9.1@@material-ui/icons/KeyboardArrowLeft.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/KeyboardArrowRight */ "./node_modules/_@material-ui_icons@4.9.1@@material-ui/icons/KeyboardArrowRight.js");
/* harmony import */ var _material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/LastPage */ "./node_modules/_@material-ui_icons@4.9.1@@material-ui/icons/LastPage.js");
/* harmony import */ var _material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _component_navinput_index__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../component/navinput/index */ "./pages/component/navinput/index.jsx");


var _jsxFileName = "E:\\2020\u5DE5\u4F5C\u5BA4\\fsn365\\pages\\asset\\index.jsx",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

















var useStyles1 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      flexShrink: 0,
      marginLeft: theme.spacing(2.5)
    }
  };
});

function TablePaginationActions(props) {
  _s();

  var classes = useStyles1();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"])();
  var count = props.count,
      page = props.page,
      rowsPerPage = props.rowsPerPage,
      onChangePage = props.onChangePage;

  var handleFirstPageButtonClick = function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  };

  var handleBackButtonClick = function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  };

  var handleNextButtonClick = function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  };

  var handleLastPageButtonClick = function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 5
    }
  }, __jsx(_component_navinput_index__WEBPACK_IMPORTED_MODULE_17__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleFirstPageButtonClick,
    disabled: page === 0,
    "aria-label": "first page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, theme.direction === "rtl" ? __jsx(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 40
    }
  }) : __jsx(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 59
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleBackButtonClick,
    disabled: page === 0,
    "aria-label": "previous page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }, theme.direction === "rtl" ? __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleNextButtonClick,
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    "aria-label": "next page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, theme.direction === "rtl" ? __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleLastPageButtonClick,
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    "aria-label": "last page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, theme.direction === "rtl" ? __jsx(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 40
    }
  }) : __jsx(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 60
    }
  }))));
}

_s(TablePaginationActions, "KqsuGf3FnFNq6eN80CYbjOwL8vo=", false, function () {
  return [useStyles1, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["useTheme"]];
});

_c = TablePaginationActions;
TablePaginationActions.propTypes = {
  count: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  onChangePage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  page: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired,
  rowsPerPage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number.isRequired
};

function createData(name, calories, fat) {
  return {
    name: name,
    calories: calories,
    fat: fat
  };
}

var rows = [createData("Cupcake", 305, 3.7), createData("Donut", 452, 25.0), createData("Eclair", 262, 16.0), createData("Frozen yoghurt", 159, 6.0), createData("Gingerbread", 356, 16.0), createData("Honeycomb", 408, 3.2), createData("Ice cream sandwich", 237, 9.0), createData("Jelly Bean", 375, 0.0), createData("KitKat", 518, 26.0), createData("Lollipop", 392, 0.2), createData("Marshmallow", 318, 0), createData("Nougat", 360, 19.0), createData("Oreo", 437, 18.0)].sort(function (a, b) {
  return a.calories < b.calories ? -1 : 1;
});
var useStyles2 = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])({
  table: {
    minWidth: 500
  }
});
function CustomPaginationActionsTable() {
  _s2();

  var _this = this;

  var classes = useStyles2();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(0),
      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState, 2),
      page = _React$useState2[0],
      setPage = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState(5),
      _React$useState4 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_React$useState3, 2),
      rowsPerPage = _React$useState4[0],
      setRowsPerPage = _React$useState4[1];

  var emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  var handleChangePage = function handleChangePage(event, newPage) {
    setPage(newPage);
  };

  var handleChangeRowsPerPage = function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    component: _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.table,
    "aria-label": "custom pagination table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 9
    }
  }, (rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: row.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 15
      }
    }, row.name), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        width: 160
      },
      align: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 15
      }
    }, row.calories), __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        width: 160
      },
      align: "right",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 15
      }
    }, row.fat));
  }), emptyRows > 0 && __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    style: {
      height: 53 * emptyRows
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
    colSpan: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  }, __jsx(_material_ui_core_TablePagination__WEBPACK_IMPORTED_MODULE_9__["default"], {
    rowsPerPageOptions: [5, 10, 25, {
      label: "All",
      value: -1
    }],
    colSpan: 3,
    count: rows.length,
    rowsPerPage: rowsPerPage,
    page: page,
    SelectProps: {
      inputProps: {
        "aria-label": "rows per page"
      },
      "native": true
    },
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    ActionsComponent: TablePaginationActions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  })))));
}

_s2(CustomPaginationActionsTable, "N7xAgYYZoaGkWr+XDiFUaQf3IRk=", false, function () {
  return [useStyles2];
});

_c2 = CustomPaginationActionsTable;

var _c, _c2;

$RefreshReg$(_c, "TablePaginationActions");
$RefreshReg$(_c2, "CustomPaginationActionsTable");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hc3NldC9pbmRleC5qc3giXSwibmFtZXMiOlsidXNlU3R5bGVzMSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4U2hyaW5rIiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJUYWJsZVBhZ2luYXRpb25BY3Rpb25zIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJjb3VudCIsInBhZ2UiLCJyb3dzUGVyUGFnZSIsIm9uQ2hhbmdlUGFnZSIsImhhbmRsZUZpcnN0UGFnZUJ1dHRvbkNsaWNrIiwiZXZlbnQiLCJoYW5kbGVCYWNrQnV0dG9uQ2xpY2siLCJoYW5kbGVOZXh0QnV0dG9uQ2xpY2siLCJoYW5kbGVMYXN0UGFnZUJ1dHRvbkNsaWNrIiwiTWF0aCIsIm1heCIsImNlaWwiLCJkaXJlY3Rpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImNyZWF0ZURhdGEiLCJuYW1lIiwiY2Fsb3JpZXMiLCJmYXQiLCJyb3dzIiwic29ydCIsImEiLCJiIiwidXNlU3R5bGVzMiIsInRhYmxlIiwibWluV2lkdGgiLCJDdXN0b21QYWdpbmF0aW9uQWN0aW9uc1RhYmxlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldFBhZ2UiLCJzZXRSb3dzUGVyUGFnZSIsImVtcHR5Um93cyIsIm1pbiIsImxlbmd0aCIsImhhbmRsZUNoYW5nZVBhZ2UiLCJuZXdQYWdlIiwiaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiUGFwZXIiLCJzbGljZSIsIm1hcCIsInJvdyIsIndpZHRoIiwiaGVpZ2h0IiwibGFiZWwiLCJpbnB1dFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQW5CSixDQURGLEVBeUJFLE1BQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsbUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMseUVBQUQ7QUFDRSxzQkFBa0IsRUFBRSxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsRUFBUixFQUFZO0FBQUVlLFdBQUssRUFBRSxLQUFUO0FBQWdCUCxXQUFLLEVBQUUsQ0FBQztBQUF4QixLQUFaLENBRHRCO0FBRUUsV0FBTyxFQUFFLENBRlg7QUFHRSxTQUFLLEVBQUVwQixJQUFJLENBQUNjLE1BSGQ7QUFJRSxlQUFXLEVBQUVsQyxXQUpmO0FBS0UsUUFBSSxFQUFFRCxJQUxSO0FBTUUsZUFBVyxFQUFFO0FBQ1hpRCxnQkFBVSxFQUFFO0FBQUUsc0JBQWM7QUFBaEIsT0FERDtBQUVYLGdCQUFRO0FBRkcsS0FOZjtBQVVFLGdCQUFZLEVBQUViLGdCQVZoQjtBQVdFLHVCQUFtQixFQUFFRSx1QkFYdkI7QUFZRSxvQkFBZ0IsRUFBRTNDLHNCQVpwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixDQXpCRixDQURGLENBREY7QUFnREQ7O0lBakV1QmlDLDRCO1VBQ05ILFU7OztNQURNRyw0QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcYXNzZXQuanMuNDJhNDk3OTViMjdlZjhlMGZjYmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzLCB1c2VUaGVtZSB9IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXNcIjtcclxuaW1wb3J0IFRhYmxlIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVwiO1xyXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUJvZHlcIjtcclxuaW1wb3J0IFRhYmxlQ2VsbCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDZWxsXCI7XHJcbmltcG9ydCBUYWJsZUNvbnRhaW5lciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVDb250YWluZXJcIjtcclxuaW1wb3J0IFRhYmxlRm9vdGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZUZvb3RlclwiO1xyXG5pbXBvcnQgVGFibGVQYWdpbmF0aW9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVBhZ2luYXRpb25cIjtcclxuaW1wb3J0IFRhYmxlUm93IGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UYWJsZVJvd1wiO1xyXG5pbXBvcnQgUGFwZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1BhcGVyXCI7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uXCI7XHJcbmltcG9ydCBGaXJzdFBhZ2VJY29uIGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvRmlyc3RQYWdlXCI7XHJcbmltcG9ydCBLZXlib2FyZEFycm93TGVmdCBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0tleWJvYXJkQXJyb3dMZWZ0XCI7XHJcbmltcG9ydCBLZXlib2FyZEFycm93UmlnaHQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93UmlnaHRcIjtcclxuaW1wb3J0IExhc3RQYWdlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0xhc3RQYWdlXCI7XHJcbmltcG9ydCBOYXZpbnB1dCBmcm9tIFwiLi4vY29tcG9uZW50L25hdmlucHV0L2luZGV4XCI7XHJcbmNvbnN0IHVzZVN0eWxlczEgPSBtYWtlU3R5bGVzKHRoZW1lID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgZmxleFNocmluazogMCxcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMi41KVxyXG4gIH1cclxufSkpO1xyXG5cclxuZnVuY3Rpb24gVGFibGVQYWdpbmF0aW9uQWN0aW9ucyhwcm9wcykge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMxKCk7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG4gIGNvbnN0IHsgY291bnQsIHBhZ2UsIHJvd3NQZXJQYWdlLCBvbkNoYW5nZVBhZ2UgfSA9IHByb3BzO1xyXG5cclxuICBjb25zdCBoYW5kbGVGaXJzdFBhZ2VCdXR0b25DbGljayA9IGV2ZW50ID0+IHtcclxuICAgIG9uQ2hhbmdlUGFnZShldmVudCwgMCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmFja0J1dHRvbkNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgb25DaGFuZ2VQYWdlKGV2ZW50LCBwYWdlIC0gMSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dEJ1dHRvbkNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgb25DaGFuZ2VQYWdlKGV2ZW50LCBwYWdlICsgMSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTGFzdFBhZ2VCdXR0b25DbGljayA9IGV2ZW50ID0+IHtcclxuICAgIG9uQ2hhbmdlUGFnZShldmVudCwgTWF0aC5tYXgoMCwgTWF0aC5jZWlsKGNvdW50IC8gcm93c1BlclBhZ2UpIC0gMSkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8TmF2aW5wdXQgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUZpcnN0UGFnZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDB9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiZmlyc3QgcGFnZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gXCJydGxcIiA/IDxMYXN0UGFnZUljb24gLz4gOiA8Rmlyc3RQYWdlSWNvbiAvPn1cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2tCdXR0b25DbGlja31cclxuICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAwfVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cInByZXZpb3VzIHBhZ2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09IFwicnRsXCIgPyAoXHJcbiAgICAgICAgICAgIDxLZXlib2FyZEFycm93UmlnaHQgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxLZXlib2FyZEFycm93TGVmdCAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRCdXR0b25DbGlja31cclxuICAgICAgICAgIGRpc2FibGVkPXtwYWdlID49IE1hdGguY2VpbChjb3VudCAvIHJvd3NQZXJQYWdlKSAtIDF9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwibmV4dCBwYWdlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSBcInJ0bFwiID8gKFxyXG4gICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd0xlZnQgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxLZXlib2FyZEFycm93UmlnaHQgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMYXN0UGFnZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPj0gTWF0aC5jZWlsKGNvdW50IC8gcm93c1BlclBhZ2UpIC0gMX1cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJsYXN0IHBhZ2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09IFwicnRsXCIgPyA8Rmlyc3RQYWdlSWNvbiAvPiA6IDxMYXN0UGFnZUljb24gLz59XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblRhYmxlUGFnaW5hdGlvbkFjdGlvbnMucHJvcFR5cGVzID0ge1xyXG4gIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgb25DaGFuZ2VQYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICByb3dzUGVyUGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWUsIGNhbG9yaWVzLCBmYXQpIHtcclxuICByZXR1cm4geyBuYW1lLCBjYWxvcmllcywgZmF0IH07XHJcbn1cclxuXHJcbmNvbnN0IHJvd3MgPSBbXHJcbiAgY3JlYXRlRGF0YShcIkN1cGNha2VcIiwgMzA1LCAzLjcpLFxyXG4gIGNyZWF0ZURhdGEoXCJEb251dFwiLCA0NTIsIDI1LjApLFxyXG4gIGNyZWF0ZURhdGEoXCJFY2xhaXJcIiwgMjYyLCAxNi4wKSxcclxuICBjcmVhdGVEYXRhKFwiRnJvemVuIHlvZ2h1cnRcIiwgMTU5LCA2LjApLFxyXG4gIGNyZWF0ZURhdGEoXCJHaW5nZXJicmVhZFwiLCAzNTYsIDE2LjApLFxyXG4gIGNyZWF0ZURhdGEoXCJIb25leWNvbWJcIiwgNDA4LCAzLjIpLFxyXG4gIGNyZWF0ZURhdGEoXCJJY2UgY3JlYW0gc2FuZHdpY2hcIiwgMjM3LCA5LjApLFxyXG4gIGNyZWF0ZURhdGEoXCJKZWxseSBCZWFuXCIsIDM3NSwgMC4wKSxcclxuICBjcmVhdGVEYXRhKFwiS2l0S2F0XCIsIDUxOCwgMjYuMCksXHJcbiAgY3JlYXRlRGF0YShcIkxvbGxpcG9wXCIsIDM5MiwgMC4yKSxcclxuICBjcmVhdGVEYXRhKFwiTWFyc2htYWxsb3dcIiwgMzE4LCAwKSxcclxuICBjcmVhdGVEYXRhKFwiTm91Z2F0XCIsIDM2MCwgMTkuMCksXHJcbiAgY3JlYXRlRGF0YShcIk9yZW9cIiwgNDM3LCAxOC4wKVxyXG5dLnNvcnQoKGEsIGIpID0+IChhLmNhbG9yaWVzIDwgYi5jYWxvcmllcyA/IC0xIDogMSkpO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzMiA9IG1ha2VTdHlsZXMoe1xyXG4gIHRhYmxlOiB7XHJcbiAgICBtaW5XaWR0aDogNTAwXHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbVBhZ2luYXRpb25BY3Rpb25zVGFibGUoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlczIoKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDUpO1xyXG5cclxuICBjb25zdCBlbXB0eVJvd3MgPVxyXG4gICAgcm93c1BlclBhZ2UgLSBNYXRoLm1pbihyb3dzUGVyUGFnZSwgcm93cy5sZW5ndGggLSBwYWdlICogcm93c1BlclBhZ2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50LCBuZXdQYWdlKSA9PiB7XHJcbiAgICBzZXRQYWdlKG5ld1BhZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlID0gZXZlbnQgPT4ge1xyXG4gICAgc2V0Um93c1BlclBhZ2UocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xyXG4gICAgc2V0UGFnZSgwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwiY3VzdG9tIHBhZ2luYXRpb24gdGFibGVcIj5cclxuICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgeyhyb3dzUGVyUGFnZSA+IDBcclxuICAgICAgICAgICAgPyByb3dzLnNsaWNlKHBhZ2UgKiByb3dzUGVyUGFnZSwgcGFnZSAqIHJvd3NQZXJQYWdlICsgcm93c1BlclBhZ2UpXHJcbiAgICAgICAgICAgIDogcm93c1xyXG4gICAgICAgICAgKS5tYXAocm93ID0+IChcclxuICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93Lm5hbWV9PlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3Jvdy5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgd2lkdGg6IDE2MCB9fSBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICB7cm93LmNhbG9yaWVzfVxyXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgd2lkdGg6IDE2MCB9fSBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICB7cm93LmZhdH1cclxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgIHtlbXB0eVJvd3MgPiAwICYmIChcclxuICAgICAgICAgICAgPFRhYmxlUm93IHN0eWxlPXt7IGhlaWdodDogNTMgKiBlbXB0eVJvd3MgfX0+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs2fSAvPlxyXG4gICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICA8VGFibGVGb290ZXI+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgIDxUYWJsZVBhZ2luYXRpb25cclxuICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1s1LCAxMCwgMjUsIHsgbGFiZWw6IFwiQWxsXCIsIHZhbHVlOiAtMSB9XX1cclxuICAgICAgICAgICAgICBjb2xTcGFuPXszfVxyXG4gICAgICAgICAgICAgIGNvdW50PXtyb3dzLmxlbmd0aH1cclxuICAgICAgICAgICAgICByb3dzUGVyUGFnZT17cm93c1BlclBhZ2V9XHJcbiAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICBTZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wczogeyBcImFyaWEtbGFiZWxcIjogXCJyb3dzIHBlciBwYWdlXCIgfSxcclxuICAgICAgICAgICAgICAgIG5hdGl2ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VQYWdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlUm93c1BlclBhZ2U9e2hhbmRsZUNoYW5nZVJvd3NQZXJQYWdlfVxyXG4gICAgICAgICAgICAgIEFjdGlvbnNDb21wb25lbnQ9e1RhYmxlUGFnaW5hdGlvbkFjdGlvbnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVGb290ZXI+XHJcbiAgICAgIDwvVGFibGU+XHJcbiAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==