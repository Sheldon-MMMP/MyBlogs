"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blog/[species]";
exports.ids = ["pages/blog/[species]"];
exports.modules = {

/***/ "./src/components/Header.tsx":
/*!***********************************!*\
  !*** ./src/components/Header.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst Header = ({ title  })=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {}, void 0, false, {\n            fileName: \"D:\\\\student\\\\complete_project\\\\myBlogs\\\\src\\\\components\\\\Header.tsx\",\n            lineNumber: 6,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\student\\\\complete_project\\\\myBlogs\\\\src\\\\components\\\\Header.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFBeUI7QUFFekIsTUFBTUMsTUFBTSxHQUFHLENBQUMsRUFBRUMsS0FBSyxHQUFxQixHQUFLO0lBQy9DLHFCQUNFLDhEQUFDQyxRQUFNO2tCQUNMLDRFQUFDQyxJQUFFOzs7O3FCQUFNOzs7OztpQkFDRixDQUNWO0NBQ0Y7QUFFRCxpRUFBZUgsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL215YmxvZ3MvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIudHN4P2E2OTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jb25zdCBIZWFkZXIgPSAoeyB0aXRsZSB9OiB7IHRpdGxlOiBzdHJpbmcgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxoZWFkZXI+XG4gICAgICA8aDE+PC9oMT5cbiAgICA8L2hlYWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkhlYWRlciIsInRpdGxlIiwiaGVhZGVyIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Header.tsx\n");

/***/ }),

/***/ "./src/pages/blog/[species].tsx":
/*!**************************************!*\
  !*** ./src/pages/blog/[species].tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header.tsx\");\n\n\n\n\n\nconst Blog = ()=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(router);\n    const { species  } = router.query;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: species\n                }, void 0, false, {\n                    fileName: \"D:\\\\student\\\\complete_project\\\\myBlogs\\\\src\\\\pages\\\\blog\\\\[species].tsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\student\\\\complete_project\\\\myBlogs\\\\src\\\\pages\\\\blog\\\\[species].tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                title: species\n            }, void 0, false, {\n                fileName: \"D:\\\\student\\\\complete_project\\\\myBlogs\\\\src\\\\pages\\\\blog\\\\[species].tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\student\\\\complete_project\\\\myBlogs\\\\src\\\\pages\\\\blog\\\\[species].tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvYmxvZy9bc3BlY2llc10udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUF5QjtBQUNjO0FBQ1g7QUFDZ0I7QUFFNUMsTUFBTUksSUFBSSxHQUFhLElBQU07SUFFM0IsTUFBTUMsTUFBTSxHQUFHSixzREFBUyxFQUFFO0lBQzFCSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsTUFBTSxDQUFDLENBQUM7SUFFcEIsTUFBTSxFQUFFRyxPQUFPLEdBQUUsR0FBd0JILE1BQU0sQ0FBQ0ksS0FBSztJQUNyRCxxQkFDRSw4REFBQ0MsS0FBRzs7MEJBQ0YsOERBQUNSLGtEQUFJOzBCQUNILDRFQUFDUyxPQUFLOzhCQUFFSCxPQUFPOzs7Ozs2QkFBUzs7Ozs7eUJBQ25COzBCQUNQLDhEQUFDTCwwREFBTTtnQkFBQ1EsS0FBSyxFQUFFSCxPQUFPOzs7Ozt5QkFBVzs7Ozs7O2lCQUM3QixDQUNQO0NBQ0Y7QUFFRCxpRUFBZUosSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL215YmxvZ3MvLi9zcmMvcGFnZXMvYmxvZy9bc3BlY2llc10udHN4PzcyMTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9IZWFkZXInXG5cbmNvbnN0IEJsb2c6IFJlYWN0LkZDID0gKCkgPT4ge1xuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zb2xlLmxvZyhyb3V0ZXIpO1xuXG4gIGNvbnN0IHsgc3BlY2llcyB9OiB7IHNwZWNpZXM6IHN0cmluZyB9ID0gcm91dGVyLnF1ZXJ5O1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntzcGVjaWVzfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8SGVhZGVyIHRpdGxlPXtzcGVjaWVzfT48L0hlYWRlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nXG5cbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJvdXRlciIsIkhlYWQiLCJIZWFkZXIiLCJCbG9nIiwicm91dGVyIiwiY29uc29sZSIsImxvZyIsInNwZWNpZXMiLCJxdWVyeSIsImRpdiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/blog/[species].tsx\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./src/pages/blog/[species].tsx"));
module.exports = __webpack_exports__;

})();