/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/article/[slug]",{

/***/ "./components/comment.js":
/*!*******************************!*\
  !*** ./components/comment.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_quentindessartine_Documents_GitHub_Cab_expeo_strapi_next_node_blog_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_quentindessartine_Documents_GitHub_Cab_expeo_strapi_next_node_blog_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_quentindessartine_Documents_GitHub_Cab_expeo_strapi_next_node_blog_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_quentindessartine_Documents_GitHub_Cab_expeo_strapi_next_node_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/api */ \"./lib/api.js\");\n/* harmony import */ var _image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image */ \"./components/image.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/quentindessartine/Documents/GitHub/Cab-expeo/strapi-next-node/blog-frontend/components/comment.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Comment = function Comment(_ref) {\n  _s();\n\n  var comment = _ref.comment;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({}),\n      author = _useState[0],\n      setAuthor = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(),\n      imgUrl = _useState2[0],\n      setImgUrl = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {\n    // Create an scoped async function in the hook\n    function fetchAuthor() {\n      return _fetchAuthor.apply(this, arguments);\n    } // Execute the created function directly\n\n\n    function _fetchAuthor() {\n      _fetchAuthor = (0,_Users_quentindessartine_Documents_GitHub_Cab_expeo_strapi_next_node_blog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/_Users_quentindessartine_Documents_GitHub_Cab_expeo_strapi_next_node_blog_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {\n        return _Users_quentindessartine_Documents_GitHub_Cab_expeo_strapi_next_node_blog_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return (0,_lib_api__WEBPACK_IMPORTED_MODULE_5__.fetchAPI)(\"/writers/\".concat(comment.writer)).then(function (data) {\n                  setImgUrl(data.picture.url);\n                  console.log(imgUrl);\n                });\n\n              case 2:\n              case \"end\":\n                return _context.stop();\n            }\n          }\n        }, _callee);\n      }));\n      return _fetchAuthor.apply(this, arguments);\n    }\n\n    setAuthor(fetchAuthor());\n  }, [comment]);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n    className: \"uk-comment\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n      className: \"uk-comment-header\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"uk-grid-medium uk-flex-middle\",\n        \"uk-grid\": true,\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"uk-width-auto\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          className: \"uk-width-expand\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n            className: \"uk-comment-title uk-margin-remove\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n              className: \"uk-link-reset\",\n              href: \"#\",\n              children: author.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 75\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: \"uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top\",\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n              children: [\"  \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_moment__WEBPACK_IMPORTED_MODULE_4___default()), {\n                format: \"MMM Do YYYY\",\n                children: comment.date\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 35\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 25\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      className: \"uk-comment-body\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n        children: comment.Content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Comment, \"72Hue2iNV+tsC8r+l6Utrl13Xxg=\");\n\n_c = Comment;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Comment);\n\nvar _c;\n\n$RefreshReg$(_c, \"Comment\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb21tZW50LmpzPzhhNWMiXSwibmFtZXMiOlsiQ29tbWVudCIsImNvbW1lbnQiLCJ1c2VTdGF0ZSIsImF1dGhvciIsInNldEF1dGhvciIsImltZ1VybCIsInNldEltZ1VybCIsInVzZUVmZmVjdCIsImZldGNoQXV0aG9yIiwiZmV0Y2hBUEkiLCJ3cml0ZXIiLCJ0aGVuIiwiZGF0YSIsInBpY3R1cmUiLCJ1cmwiLCJjb25zb2xlIiwibG9nIiwibmFtZSIsImRhdGUiLCJDb250ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxPQUFpQjtBQUFBOztBQUFBLE1BQWRDLE9BQWMsUUFBZEEsT0FBYzs7QUFBQSxrQkFDREMsK0NBQVEsQ0FBQyxFQUFELENBRFA7QUFBQSxNQUN0QkMsTUFEc0I7QUFBQSxNQUNkQyxTQURjOztBQUFBLG1CQUVERiwrQ0FBUSxFQUZQO0FBQUEsTUFFdEJHLE1BRnNCO0FBQUEsTUFFZEMsU0FGYzs7QUFHN0JDLGtEQUFTLENBQUMsWUFBTTtBQUNaO0FBRFksYUFFR0MsV0FGSDtBQUFBO0FBQUEsTUFRUDs7O0FBUk87QUFBQSw2WEFFWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFDV0Msa0RBQVEsb0JBQWFSLE9BQU8sQ0FBQ1MsTUFBckIsRUFBUixDQUF1Q0MsSUFBdkMsQ0FBNEMsVUFBQ0MsSUFBRCxFQUFTO0FBQ25ETiwyQkFBUyxDQUFDTSxJQUFJLENBQUNDLE9BQUwsQ0FBYUMsR0FBZCxDQUFUO0FBQ0RDLHlCQUFPLENBQUNDLEdBQVIsQ0FBWVgsTUFBWjtBQUNGLGlCQUhDLENBRFg7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FGWTtBQUFBO0FBQUE7O0FBU1pELGFBQVMsQ0FBQ0ksV0FBVyxFQUFaLENBQVQ7QUFFSCxHQVhRLEVBV1AsQ0FBQ1AsT0FBRCxDQVhPLENBQVQ7QUFhQSxzQkFDSTtBQUFTLGFBQVMsRUFBQyxZQUFuQjtBQUFBLDRCQUNJO0FBQVEsZUFBUyxFQUFDLG1CQUFsQjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUErQyx1QkFBL0M7QUFBQSxnQ0FDSTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBR0k7QUFBSyxtQkFBUyxFQUFDLGlCQUFmO0FBQUEsa0NBQ0k7QUFBSSxxQkFBUyxFQUFDLG1DQUFkO0FBQUEsbUNBQWtEO0FBQUcsdUJBQVMsRUFBQyxlQUFiO0FBQ0csa0JBQUksRUFBQyxHQURSO0FBQUEsd0JBQ2FFLE1BQU0sQ0FBQ2M7QUFEcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFsRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBR0k7QUFBSSxxQkFBUyxFQUFDLGtFQUFkO0FBQUEsbUNBQ0k7QUFBQSw0Q0FBTSw4REFBQyxxREFBRDtBQUFRLHNCQUFNLEVBQUMsYUFBZjtBQUFBLDBCQUE4QmhCLE9BQU8sQ0FBQ2lCO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBZUk7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQSw2QkFDSTtBQUFBLGtCQUFJakIsT0FBTyxDQUFDa0I7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdUJELENBdkNIOztHQUFNbkIsTzs7S0FBQUEsTztBQXlDSiwrREFBZUEsT0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvY29tbWVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTW9tZW50IGZyb20gXCJyZWFjdC1tb21lbnRcIlxuaW1wb3J0IHsgZmV0Y2hBUEkgfSBmcm9tIFwiLi4vbGliL2FwaVwiXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuL2ltYWdlXCJcbmNvbnN0IENvbW1lbnQgPSAoeyBjb21tZW50IH0pID0+IHtcbiAgICBjb25zdCBbYXV0aG9yLCBzZXRBdXRob3JdID0gdXNlU3RhdGUoe30pO1xuICAgIGNvbnN0IFtpbWdVcmwsIHNldEltZ1VybF0gPSB1c2VTdGF0ZSgpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vIENyZWF0ZSBhbiBzY29wZWQgYXN5bmMgZnVuY3Rpb24gaW4gdGhlIGhvb2tcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hBdXRob3IoKSB7XG4gICAgICAgICAgICAgYXdhaXQgZmV0Y2hBUEkoYC93cml0ZXJzLyR7Y29tbWVudC53cml0ZXJ9YCkudGhlbigoZGF0YSkgPT57XG4gICAgICAgICAgICAgICAgICAgICBzZXRJbWdVcmwoZGF0YS5waWN0dXJlLnVybClcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW1nVXJsKVxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgKVxuICAgICAgICB9ICAgIC8vIEV4ZWN1dGUgdGhlIGNyZWF0ZWQgZnVuY3Rpb24gZGlyZWN0bHlcbiAgICAgICAgc2V0QXV0aG9yKGZldGNoQXV0aG9yKCkpO1xuXG4gICAgfSxbY29tbWVudF0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwidWstY29tbWVudFwiPlxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ1ay1jb21tZW50LWhlYWRlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstZ3JpZC1tZWRpdW0gdWstZmxleC1taWRkbGVcIiB1ay1ncmlkPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVrLXdpZHRoLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWstd2lkdGgtZXhwYW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidWstY29tbWVudC10aXRsZSB1ay1tYXJnaW4tcmVtb3ZlXCI+PGEgY2xhc3NOYW1lPVwidWstbGluay1yZXNldFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCI+e2F1dGhvci5uYW1lfTwvYT48L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVrLWNvbW1lbnQtbWV0YSB1ay1zdWJuYXYgdWstc3VibmF2LWRpdmlkZXIgdWstbWFyZ2luLXJlbW92ZS10b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+ICA8TW9tZW50IGZvcm1hdD1cIk1NTSBEbyBZWVlZXCI+e2NvbW1lbnQuZGF0ZX08L01vbWVudD48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1ay1jb21tZW50LWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8cD57Y29tbWVudC5Db250ZW50fTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG5cblxuICAgIClcbiAgfVxuXG4gIGV4cG9ydCBkZWZhdWx0IENvbW1lbnRcblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/comment.js\n");

/***/ })

});