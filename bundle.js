/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./dom.js":
/*!****************!*\
  !*** ./dom.js ***!
  \****************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const getUsers = __webpack_require__(/*! ./users */ \"./users.js\").getUsers;\n\nfunction addUserToDOM(name) {\n    const node = document.createElement(\"li\");\n    const text = document.createTextNode(name);\n    node.appendChild(text);\n\n    document.getElementById(\"users\")\n        .appendChild(node);\n}\n\ndocument.getElementById(\"submit\")\n    .addEventListener(\"click\", () => {\n        const input = document.getElementById(\"input\");\n        addUserToDOM(input.value);\n\n        input.value = \"\";\n    });\n\nusers = getUsers();\n\nfor (let i = 0; i < users.length; i++) {\n    addUserToDOM(users[i]);\n}\n\n\n//# sourceURL=webpack://webpack-js/./dom.js?");

/***/ }),

/***/ "./users.js":
/*!******************!*\
  !*** ./users.js ***!
  \******************/
/***/ ((module) => {

eval("const users = ['Tyler', 'Sarah', 'Dan'];\n\nfunction getUsers() {\n    return users;\n}\n\nmodule.exports = {\n    getUsers\n}\n\n\n//# sourceURL=webpack://webpack-js/./users.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./dom.js");
/******/ 	
/******/ })()
;