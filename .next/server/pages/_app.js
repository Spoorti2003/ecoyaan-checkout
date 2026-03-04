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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/CheckoutContext.js":
/*!************************************!*\
  !*** ./context/CheckoutContext.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CheckoutProvider: () => (/* binding */ CheckoutProvider),\n/* harmony export */   useCheckout: () => (/* binding */ useCheckout)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CheckoutContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);\nfunction CheckoutProvider({ children }) {\n    const [cartData, setCartData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        fullName: \"\",\n        email: \"\",\n        phone: \"\",\n        pinCode: \"\",\n        city: \"\",\n        state: \"\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CheckoutContext.Provider, {\n        value: {\n            cartData,\n            setCartData,\n            address,\n            setAddress\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\ecoyaan-checkout\\\\context\\\\CheckoutContext.js\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\nfunction useCheckout() {\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CheckoutContext);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0NoZWNrb3V0Q29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTREO0FBRTVELE1BQU1HLGdDQUFrQkgsb0RBQWFBLENBQUM7QUFFL0IsU0FBU0ksaUJBQWlCLEVBQUVDLFFBQVEsRUFBRTtJQUMzQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0wsK0NBQVFBLENBQUM7SUFDekMsTUFBTSxDQUFDTSxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO1FBQ3JDUSxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxTQUFTO1FBQ1RDLE1BQU07UUFDTkMsT0FBTztJQUNUO0lBRUEscUJBQ0UsOERBQUNaLGdCQUFnQmEsUUFBUTtRQUN2QkMsT0FBTztZQUFFWDtZQUFVQztZQUFhQztZQUFTQztRQUFXO2tCQUVuREo7Ozs7OztBQUdQO0FBRU8sU0FBU2E7SUFDZCxPQUFPakIsaURBQVVBLENBQUNFO0FBQ3BCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNveWFhbi1jaGVja291dC8uL2NvbnRleHQvQ2hlY2tvdXRDb250ZXh0LmpzPzlhOTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQ2hlY2tvdXRDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcblxuZXhwb3J0IGZ1bmN0aW9uIENoZWNrb3V0UHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XG4gIGNvbnN0IFtjYXJ0RGF0YSwgc2V0Q2FydERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthZGRyZXNzLCBzZXRBZGRyZXNzXSA9IHVzZVN0YXRlKHtcbiAgICBmdWxsTmFtZTogXCJcIixcbiAgICBlbWFpbDogXCJcIixcbiAgICBwaG9uZTogXCJcIixcbiAgICBwaW5Db2RlOiBcIlwiLFxuICAgIGNpdHk6IFwiXCIsXG4gICAgc3RhdGU6IFwiXCIsXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPENoZWNrb3V0Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3sgY2FydERhdGEsIHNldENhcnREYXRhLCBhZGRyZXNzLCBzZXRBZGRyZXNzIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2hlY2tvdXRDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlQ2hlY2tvdXQoKSB7XG4gIHJldHVybiB1c2VDb250ZXh0KENoZWNrb3V0Q29udGV4dCk7XG59XG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdGF0ZSIsIkNoZWNrb3V0Q29udGV4dCIsIkNoZWNrb3V0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImNhcnREYXRhIiwic2V0Q2FydERhdGEiLCJhZGRyZXNzIiwic2V0QWRkcmVzcyIsImZ1bGxOYW1lIiwiZW1haWwiLCJwaG9uZSIsInBpbkNvZGUiLCJjaXR5Iiwic3RhdGUiLCJQcm92aWRlciIsInZhbHVlIiwidXNlQ2hlY2tvdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/CheckoutContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _context_CheckoutContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/CheckoutContext */ \"./context/CheckoutContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_context_CheckoutContext__WEBPACK_IMPORTED_MODULE_1__.CheckoutProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\ecoyaan-checkout\\\\pages\\\\_app.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\HP\\\\Downloads\\\\ecoyaan-checkout\\\\pages\\\\_app.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBOEQ7QUFDL0I7QUFFaEIsU0FBU0MsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRSw4REFBQ0gsc0VBQWdCQTtrQkFDZiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUc5QiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb3lhYW4tY2hlY2tvdXQvLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hlY2tvdXRQcm92aWRlciB9IGZyb20gXCIuLi9jb250ZXh0L0NoZWNrb3V0Q29udGV4dFwiO1xuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Q2hlY2tvdXRQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NoZWNrb3V0UHJvdmlkZXI+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ2hlY2tvdXRQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();