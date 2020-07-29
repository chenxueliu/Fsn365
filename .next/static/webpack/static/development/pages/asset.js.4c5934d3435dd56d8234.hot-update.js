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
  }, __jsx("div", {
    className: classes.root,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleFirstPageButtonClick,
    disabled: page === 0,
    "aria-label": "first page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 9
    }
  }, theme.direction === "rtl" ? __jsx(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 40
    }
  }) : __jsx(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 59
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleBackButtonClick,
    disabled: page === 0,
    "aria-label": "previous page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, theme.direction === "rtl" ? __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleNextButtonClick,
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    "aria-label": "next page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, theme.direction === "rtl" ? __jsx(_material_ui_icons_KeyboardArrowLeft__WEBPACK_IMPORTED_MODULE_14___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }) : __jsx(_material_ui_icons_KeyboardArrowRight__WEBPACK_IMPORTED_MODULE_15___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: handleLastPageButtonClick,
    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
    "aria-label": "last page",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }
  }, theme.direction === "rtl" ? __jsx(_material_ui_icons_FirstPage__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 40
    }
  }) : __jsx(_material_ui_icons_LastPage__WEBPACK_IMPORTED_MODULE_16___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
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
      lineNumber: 141,
      columnNumber: 5
    }
  }, __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: classes.table,
    "aria-label": "custom pagination table",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 7
    }
  }, __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 9
    }
  }, (rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map(function (row) {
    return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
      key: row.name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 13
      }
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
      component: "th",
      scope: "row",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
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
        lineNumber: 152,
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
        lineNumber: 155,
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
      lineNumber: 162,
      columnNumber: 13
    }
  }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_6__["default"], {
    colSpan: 6,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 15
    }
  }))), __jsx(_material_ui_core_TableFooter__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 9
    }
  }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
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
      lineNumber: 169,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hc3NldC9pbmRleC5qc3giXSwibmFtZXMiOlsidXNlU3R5bGVzMSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJmbGV4U2hyaW5rIiwibWFyZ2luTGVmdCIsInNwYWNpbmciLCJUYWJsZVBhZ2luYXRpb25BY3Rpb25zIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlVGhlbWUiLCJjb3VudCIsInBhZ2UiLCJyb3dzUGVyUGFnZSIsIm9uQ2hhbmdlUGFnZSIsImhhbmRsZUZpcnN0UGFnZUJ1dHRvbkNsaWNrIiwiZXZlbnQiLCJoYW5kbGVCYWNrQnV0dG9uQ2xpY2siLCJoYW5kbGVOZXh0QnV0dG9uQ2xpY2siLCJoYW5kbGVMYXN0UGFnZUJ1dHRvbkNsaWNrIiwiTWF0aCIsIm1heCIsImNlaWwiLCJkaXJlY3Rpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwiZnVuYyIsImNyZWF0ZURhdGEiLCJuYW1lIiwiY2Fsb3JpZXMiLCJmYXQiLCJyb3dzIiwic29ydCIsImEiLCJiIiwidXNlU3R5bGVzMiIsInRhYmxlIiwibWluV2lkdGgiLCJDdXN0b21QYWdpbmF0aW9uQWN0aW9uc1RhYmxlIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInNldFBhZ2UiLCJzZXRSb3dzUGVyUGFnZSIsImVtcHR5Um93cyIsIm1pbiIsImxlbmd0aCIsImhhbmRsZUNoYW5nZVBhZ2UiLCJuZXdQYWdlIiwiaGFuZGxlQ2hhbmdlUm93c1BlclBhZ2UiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiUGFwZXIiLCJzbGljZSIsIm1hcCIsInJvdyIsIndpZHRoIiwiaGVpZ2h0IiwibGFiZWwiLCJpbnB1dFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLG1FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLHlFQUFEO0FBQ0Usc0JBQWtCLEVBQUUsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLEVBQVIsRUFBWTtBQUFFZSxXQUFLLEVBQUUsS0FBVDtBQUFnQlAsV0FBSyxFQUFFLENBQUM7QUFBeEIsS0FBWixDQUR0QjtBQUVFLFdBQU8sRUFBRSxDQUZYO0FBR0UsU0FBSyxFQUFFcEIsSUFBSSxDQUFDYyxNQUhkO0FBSUUsZUFBVyxFQUFFbEMsV0FKZjtBQUtFLFFBQUksRUFBRUQsSUFMUjtBQU1FLGVBQVcsRUFBRTtBQUNYaUQsZ0JBQVUsRUFBRTtBQUFFLHNCQUFjO0FBQWhCLE9BREQ7QUFFWCxnQkFBUTtBQUZHLEtBTmY7QUFVRSxnQkFBWSxFQUFFYixnQkFWaEI7QUFXRSx1QkFBbUIsRUFBRUUsdUJBWHZCO0FBWUUsb0JBQWdCLEVBQUUzQyxzQkFacEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsQ0F6QkYsQ0FERixDQURGO0FBZ0REOztJQWpFdUJpQyw0QjtVQUNOSCxVOzs7TUFETUcsNEIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGFzc2V0LmpzLjRjNTkzNGQzNDM1ZGQ1NmQ4MjM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzXCI7XHJcbmltcG9ydCBUYWJsZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVcIjtcclxuaW1wb3J0IFRhYmxlQm9keSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVCb2R5XCI7XHJcbmltcG9ydCBUYWJsZUNlbGwgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ2VsbFwiO1xyXG5pbXBvcnQgVGFibGVDb250YWluZXIgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RhYmxlQ29udGFpbmVyXCI7XHJcbmltcG9ydCBUYWJsZUZvb3RlciBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVGb290ZXJcIjtcclxuaW1wb3J0IFRhYmxlUGFnaW5hdGlvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVQYWdpbmF0aW9uXCI7XHJcbmltcG9ydCBUYWJsZVJvdyBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGFibGVSb3dcIjtcclxuaW1wb3J0IFBhcGVyIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9QYXBlclwiO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvblwiO1xyXG5pbXBvcnQgRmlyc3RQYWdlSWNvbiBmcm9tIFwiQG1hdGVyaWFsLXVpL2ljb25zL0ZpcnN0UGFnZVwiO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd0xlZnQgZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9LZXlib2FyZEFycm93TGVmdFwiO1xyXG5pbXBvcnQgS2V5Ym9hcmRBcnJvd1JpZ2h0IGZyb20gXCJAbWF0ZXJpYWwtdWkvaWNvbnMvS2V5Ym9hcmRBcnJvd1JpZ2h0XCI7XHJcbmltcG9ydCBMYXN0UGFnZUljb24gZnJvbSBcIkBtYXRlcmlhbC11aS9pY29ucy9MYXN0UGFnZVwiO1xyXG5pbXBvcnQgTmF2aW5wdXQgZnJvbSBcIi4uL2NvbXBvbmVudC9uYXZpbnB1dC9pbmRleFwiO1xyXG5jb25zdCB1c2VTdHlsZXMxID0gbWFrZVN0eWxlcyh0aGVtZSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIGZsZXhTaHJpbms6IDAsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIuNSlcclxuICB9XHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIFRhYmxlUGFnaW5hdGlvbkFjdGlvbnMocHJvcHMpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzMSgpO1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuICBjb25zdCB7IGNvdW50LCBwYWdlLCByb3dzUGVyUGFnZSwgb25DaGFuZ2VQYWdlIH0gPSBwcm9wcztcclxuXHJcbiAgY29uc3QgaGFuZGxlRmlyc3RQYWdlQnV0dG9uQ2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICBvbkNoYW5nZVBhZ2UoZXZlbnQsIDApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhY2tCdXR0b25DbGljayA9IGV2ZW50ID0+IHtcclxuICAgIG9uQ2hhbmdlUGFnZShldmVudCwgcGFnZSAtIDEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHRCdXR0b25DbGljayA9IGV2ZW50ID0+IHtcclxuICAgIG9uQ2hhbmdlUGFnZShldmVudCwgcGFnZSArIDEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxhc3RQYWdlQnV0dG9uQ2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICBvbkNoYW5nZVBhZ2UoZXZlbnQsIE1hdGgubWF4KDAsIE1hdGguY2VpbChjb3VudCAvIHJvd3NQZXJQYWdlKSAtIDEpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUZpcnN0UGFnZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDB9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiZmlyc3QgcGFnZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge3RoZW1lLmRpcmVjdGlvbiA9PT0gXCJydGxcIiA/IDxMYXN0UGFnZUljb24gLz4gOiA8Rmlyc3RQYWdlSWNvbiAvPn1cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2tCdXR0b25DbGlja31cclxuICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAwfVxyXG4gICAgICAgICAgYXJpYS1sYWJlbD1cInByZXZpb3VzIHBhZ2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09IFwicnRsXCIgPyAoXHJcbiAgICAgICAgICAgIDxLZXlib2FyZEFycm93UmlnaHQgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxLZXlib2FyZEFycm93TGVmdCAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPEljb25CdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHRCdXR0b25DbGlja31cclxuICAgICAgICAgIGRpc2FibGVkPXtwYWdlID49IE1hdGguY2VpbChjb3VudCAvIHJvd3NQZXJQYWdlKSAtIDF9XHJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwibmV4dCBwYWdlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICB7dGhlbWUuZGlyZWN0aW9uID09PSBcInJ0bFwiID8gKFxyXG4gICAgICAgICAgICA8S2V5Ym9hcmRBcnJvd0xlZnQgLz5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIDxLZXlib2FyZEFycm93UmlnaHQgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgIDxJY29uQnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVMYXN0UGFnZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPj0gTWF0aC5jZWlsKGNvdW50IC8gcm93c1BlclBhZ2UpIC0gMX1cclxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJsYXN0IHBhZ2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIHt0aGVtZS5kaXJlY3Rpb24gPT09IFwicnRsXCIgPyA8Rmlyc3RQYWdlSWNvbiAvPiA6IDxMYXN0UGFnZUljb24gLz59XHJcbiAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcblRhYmxlUGFnaW5hdGlvbkFjdGlvbnMucHJvcFR5cGVzID0ge1xyXG4gIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXHJcbiAgb25DaGFuZ2VQYWdlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxyXG4gIHBhZ2U6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcclxuICByb3dzUGVyUGFnZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkXHJcbn07XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEYXRhKG5hbWUsIGNhbG9yaWVzLCBmYXQpIHtcclxuICByZXR1cm4geyBuYW1lLCBjYWxvcmllcywgZmF0IH07XHJcbn1cclxuXHJcbmNvbnN0IHJvd3MgPSBbXHJcbiAgY3JlYXRlRGF0YShcIkN1cGNha2VcIiwgMzA1LCAzLjcpLFxyXG4gIGNyZWF0ZURhdGEoXCJEb251dFwiLCA0NTIsIDI1LjApLFxyXG4gIGNyZWF0ZURhdGEoXCJFY2xhaXJcIiwgMjYyLCAxNi4wKSxcclxuICBjcmVhdGVEYXRhKFwiRnJvemVuIHlvZ2h1cnRcIiwgMTU5LCA2LjApLFxyXG4gIGNyZWF0ZURhdGEoXCJHaW5nZXJicmVhZFwiLCAzNTYsIDE2LjApLFxyXG4gIGNyZWF0ZURhdGEoXCJIb25leWNvbWJcIiwgNDA4LCAzLjIpLFxyXG4gIGNyZWF0ZURhdGEoXCJJY2UgY3JlYW0gc2FuZHdpY2hcIiwgMjM3LCA5LjApLFxyXG4gIGNyZWF0ZURhdGEoXCJKZWxseSBCZWFuXCIsIDM3NSwgMC4wKSxcclxuICBjcmVhdGVEYXRhKFwiS2l0S2F0XCIsIDUxOCwgMjYuMCksXHJcbiAgY3JlYXRlRGF0YShcIkxvbGxpcG9wXCIsIDM5MiwgMC4yKSxcclxuICBjcmVhdGVEYXRhKFwiTWFyc2htYWxsb3dcIiwgMzE4LCAwKSxcclxuICBjcmVhdGVEYXRhKFwiTm91Z2F0XCIsIDM2MCwgMTkuMCksXHJcbiAgY3JlYXRlRGF0YShcIk9yZW9cIiwgNDM3LCAxOC4wKVxyXG5dLnNvcnQoKGEsIGIpID0+IChhLmNhbG9yaWVzIDwgYi5jYWxvcmllcyA/IC0xIDogMSkpO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzMiA9IG1ha2VTdHlsZXMoe1xyXG4gIHRhYmxlOiB7XHJcbiAgICBtaW5XaWR0aDogNTAwXHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbVBhZ2luYXRpb25BY3Rpb25zVGFibGUoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlczIoKTtcclxuICBjb25zdCBbcGFnZSwgc2V0UGFnZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBbcm93c1BlclBhZ2UsIHNldFJvd3NQZXJQYWdlXSA9IFJlYWN0LnVzZVN0YXRlKDUpO1xyXG5cclxuICBjb25zdCBlbXB0eVJvd3MgPVxyXG4gICAgcm93c1BlclBhZ2UgLSBNYXRoLm1pbihyb3dzUGVyUGFnZSwgcm93cy5sZW5ndGggLSBwYWdlICogcm93c1BlclBhZ2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGFuZ2VQYWdlID0gKGV2ZW50LCBuZXdQYWdlKSA9PiB7XHJcbiAgICBzZXRQYWdlKG5ld1BhZ2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVJvd3NQZXJQYWdlID0gZXZlbnQgPT4ge1xyXG4gICAgc2V0Um93c1BlclBhZ2UocGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlLCAxMCkpO1xyXG4gICAgc2V0UGFnZSgwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFRhYmxlQ29udGFpbmVyIGNvbXBvbmVudD17UGFwZXJ9PlxyXG4gICAgICA8VGFibGUgY2xhc3NOYW1lPXtjbGFzc2VzLnRhYmxlfSBhcmlhLWxhYmVsPVwiY3VzdG9tIHBhZ2luYXRpb24gdGFibGVcIj5cclxuICAgICAgICA8VGFibGVCb2R5PlxyXG4gICAgICAgICAgeyhyb3dzUGVyUGFnZSA+IDBcclxuICAgICAgICAgICAgPyByb3dzLnNsaWNlKHBhZ2UgKiByb3dzUGVyUGFnZSwgcGFnZSAqIHJvd3NQZXJQYWdlICsgcm93c1BlclBhZ2UpXHJcbiAgICAgICAgICAgIDogcm93c1xyXG4gICAgICAgICAgKS5tYXAocm93ID0+IChcclxuICAgICAgICAgICAgPFRhYmxlUm93IGtleT17cm93Lm5hbWV9PlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgY29tcG9uZW50PVwidGhcIiBzY29wZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAge3Jvdy5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgd2lkdGg6IDE2MCB9fSBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICB7cm93LmNhbG9yaWVzfVxyXG4gICAgICAgICAgICAgIDwvVGFibGVDZWxsPlxyXG4gICAgICAgICAgICAgIDxUYWJsZUNlbGwgc3R5bGU9e3sgd2lkdGg6IDE2MCB9fSBhbGlnbj1cInJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICB7cm93LmZhdH1cclxuICAgICAgICAgICAgICA8L1RhYmxlQ2VsbD5cclxuICAgICAgICAgICAgPC9UYWJsZVJvdz5cclxuICAgICAgICAgICkpfVxyXG5cclxuICAgICAgICAgIHtlbXB0eVJvd3MgPiAwICYmIChcclxuICAgICAgICAgICAgPFRhYmxlUm93IHN0eWxlPXt7IGhlaWdodDogNTMgKiBlbXB0eVJvd3MgfX0+XHJcbiAgICAgICAgICAgICAgPFRhYmxlQ2VsbCBjb2xTcGFuPXs2fSAvPlxyXG4gICAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L1RhYmxlQm9keT5cclxuICAgICAgICA8VGFibGVGb290ZXI+XHJcbiAgICAgICAgICA8VGFibGVSb3c+XHJcbiAgICAgICAgICAgIDxUYWJsZVBhZ2luYXRpb25cclxuICAgICAgICAgICAgICByb3dzUGVyUGFnZU9wdGlvbnM9e1s1LCAxMCwgMjUsIHsgbGFiZWw6IFwiQWxsXCIsIHZhbHVlOiAtMSB9XX1cclxuICAgICAgICAgICAgICBjb2xTcGFuPXszfVxyXG4gICAgICAgICAgICAgIGNvdW50PXtyb3dzLmxlbmd0aH1cclxuICAgICAgICAgICAgICByb3dzUGVyUGFnZT17cm93c1BlclBhZ2V9XHJcbiAgICAgICAgICAgICAgcGFnZT17cGFnZX1cclxuICAgICAgICAgICAgICBTZWxlY3RQcm9wcz17e1xyXG4gICAgICAgICAgICAgICAgaW5wdXRQcm9wczogeyBcImFyaWEtbGFiZWxcIjogXCJyb3dzIHBlciBwYWdlXCIgfSxcclxuICAgICAgICAgICAgICAgIG5hdGl2ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgb25DaGFuZ2VQYWdlPXtoYW5kbGVDaGFuZ2VQYWdlfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlUm93c1BlclBhZ2U9e2hhbmRsZUNoYW5nZVJvd3NQZXJQYWdlfVxyXG4gICAgICAgICAgICAgIEFjdGlvbnNDb21wb25lbnQ9e1RhYmxlUGFnaW5hdGlvbkFjdGlvbnN9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L1RhYmxlUm93PlxyXG4gICAgICAgIDwvVGFibGVGb290ZXI+XHJcbiAgICAgIDwvVGFibGU+XHJcbiAgICA8L1RhYmxlQ29udGFpbmVyPlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==