module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/404.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/layout.tsx":
/*!***********************************!*\
  !*** ./src/components/layout.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Layout = ({\n  children\n}) => {\n  return children;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Layout);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQudHN4P2Y0MzgiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiJBQUVBO0FBQUEsTUFBTUEsTUFBK0IsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFrQjtBQUN4RCxTQUFPQSxRQUFQO0FBQ0QsQ0FGRDs7QUFJZUQscUVBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBMYXlvdXQ6IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICByZXR1cm4gY2hpbGRyZW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layout.tsx\n");

/***/ }),

/***/ "./src/components/seo.tsx":
/*!********************************!*\
  !*** ./src/components/seo.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Users/danielkrajnak/Documents/Code/dansdrinkmenu/src/components/seo.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nconst site = {\n  siteMetadata: {\n    description: \"ok\",\n    title: \"title\"\n  }\n};\n\nconst SEO = ({\n  description = \"\",\n  lang = \"en\",\n  meta = [],\n  title\n}) => {\n  const metaDescription = description || site.siteMetadata.description;\n  return __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_1__[\"Helmet\"], {\n    htmlAttributes: {\n      lang\n    },\n    title: title,\n    titleTemplate: `${site.siteMetadata.title}`,\n    meta: [{\n      name: `description`,\n      content: metaDescription\n    }, {\n      property: `og:title`,\n      content: title\n    }, {\n      property: `og:description`,\n      content: metaDescription\n    }, {\n      property: `og:type`,\n      content: `website`\n    }, {\n      name: `twitter:card`,\n      content: `summary`\n    }, {\n      name: `twitter:title`,\n      content: title\n    }, {\n      name: `twitter:description`,\n      content: metaDescription\n    }].concat(meta),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 5\n    }\n  }, __jsx(\"link\", {\n    href: \"https://fonts.googleapis.com/css2?family=Alata&display=swap\",\n    rel: \"stylesheet\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 7\n    }\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SEO);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZW8udHN4PzFmYzciXSwibmFtZXMiOlsic2l0ZSIsInNpdGVNZXRhZGF0YSIsImRlc2NyaXB0aW9uIiwidGl0bGUiLCJTRU8iLCJsYW5nIiwibWV0YSIsIm1ldGFEZXNjcmlwdGlvbiIsIm5hbWUiLCJjb250ZW50IiwicHJvcGVydHkiLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNBO0FBU0EsTUFBTUEsSUFBSSxHQUFHO0FBQ1hDLGNBQVksRUFBRTtBQUNaQyxlQUFXLEVBQUUsSUFERDtBQUVaQyxTQUFLLEVBQUU7QUFGSztBQURILENBQWI7O0FBT0EsTUFBTUMsR0FBbUMsR0FBRyxDQUFDO0FBQzNDRixhQUFXLEdBQUcsRUFENkI7QUFFM0NHLE1BQUksR0FBRyxJQUZvQztBQUczQ0MsTUFBSSxHQUFHLEVBSG9DO0FBSTNDSDtBQUoyQyxDQUFELEtBS3RDO0FBQ0osUUFBTUksZUFBZSxHQUFHTCxXQUFXLElBQUlGLElBQUksQ0FBQ0MsWUFBTCxDQUFrQkMsV0FBekQ7QUFFQSxTQUNFLE1BQUMsbURBQUQ7QUFDRSxrQkFBYyxFQUFFO0FBQ2RHO0FBRGMsS0FEbEI7QUFJRSxTQUFLLEVBQUVGLEtBSlQ7QUFLRSxpQkFBYSxFQUFHLEdBQUVILElBQUksQ0FBQ0MsWUFBTCxDQUFrQkUsS0FBTSxFQUw1QztBQU1FLFFBQUksRUFBRSxDQUNKO0FBQ0VLLFVBQUksRUFBRyxhQURUO0FBRUVDLGFBQU8sRUFBRUY7QUFGWCxLQURJLEVBS0o7QUFDRUcsY0FBUSxFQUFHLFVBRGI7QUFFRUQsYUFBTyxFQUFFTjtBQUZYLEtBTEksRUFTSjtBQUNFTyxjQUFRLEVBQUcsZ0JBRGI7QUFFRUQsYUFBTyxFQUFFRjtBQUZYLEtBVEksRUFhSjtBQUNFRyxjQUFRLEVBQUcsU0FEYjtBQUVFRCxhQUFPLEVBQUc7QUFGWixLQWJJLEVBaUJKO0FBQ0VELFVBQUksRUFBRyxjQURUO0FBRUVDLGFBQU8sRUFBRztBQUZaLEtBakJJLEVBcUJKO0FBQ0VELFVBQUksRUFBRyxlQURUO0FBRUVDLGFBQU8sRUFBRU47QUFGWCxLQXJCSSxFQXlCSjtBQUNFSyxVQUFJLEVBQUcscUJBRFQ7QUFFRUMsYUFBTyxFQUFFRjtBQUZYLEtBekJJLEVBNkJKSSxNQTdCSSxDQTZCR0wsSUE3QkgsQ0FOUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBcUNFO0FBQ0UsUUFBSSxFQUFDLDZEQURQO0FBRUUsT0FBRyxFQUFDLFlBRk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJDRixDQURGO0FBNENELENBcEREOztBQXNEZUYsa0VBQWYiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9zZW8udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSGVsbWV0IH0gZnJvbSBcInJlYWN0LWhlbG1ldFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgbGFuZz86IHN0cmluZztcbiAgbWV0YT86IHsgbmFtZTogc3RyaW5nOyBjb250ZW50OiBzdHJpbmcgfVtdO1xuICB0aXRsZTogc3RyaW5nO1xufTtcblxuY29uc3Qgc2l0ZSA9IHtcbiAgc2l0ZU1ldGFkYXRhOiB7XG4gICAgZGVzY3JpcHRpb246IFwib2tcIixcbiAgICB0aXRsZTogXCJ0aXRsZVwiLFxuICB9LFxufTtcblxuY29uc3QgU0VPOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoe1xuICBkZXNjcmlwdGlvbiA9IFwiXCIsXG4gIGxhbmcgPSBcImVuXCIsXG4gIG1ldGEgPSBbXSxcbiAgdGl0bGUsXG59KSA9PiB7XG4gIGNvbnN0IG1ldGFEZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uIHx8IHNpdGUuc2l0ZU1ldGFkYXRhLmRlc2NyaXB0aW9uO1xuXG4gIHJldHVybiAoXG4gICAgPEhlbG1ldFxuICAgICAgaHRtbEF0dHJpYnV0ZXM9e3tcbiAgICAgICAgbGFuZyxcbiAgICAgIH19XG4gICAgICB0aXRsZT17dGl0bGV9XG4gICAgICB0aXRsZVRlbXBsYXRlPXtgJHtzaXRlLnNpdGVNZXRhZGF0YS50aXRsZX1gfVxuICAgICAgbWV0YT17W1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYGRlc2NyaXB0aW9uYCxcbiAgICAgICAgICBjb250ZW50OiBtZXRhRGVzY3JpcHRpb24sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwcm9wZXJ0eTogYG9nOnRpdGxlYCxcbiAgICAgICAgICBjb250ZW50OiB0aXRsZSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3BlcnR5OiBgb2c6ZGVzY3JpcHRpb25gLFxuICAgICAgICAgIGNvbnRlbnQ6IG1ldGFEZXNjcmlwdGlvbixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHByb3BlcnR5OiBgb2c6dHlwZWAsXG4gICAgICAgICAgY29udGVudDogYHdlYnNpdGVgLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYHR3aXR0ZXI6Y2FyZGAsXG4gICAgICAgICAgY29udGVudDogYHN1bW1hcnlgLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYHR3aXR0ZXI6dGl0bGVgLFxuICAgICAgICAgIGNvbnRlbnQ6IHRpdGxlLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogYHR3aXR0ZXI6ZGVzY3JpcHRpb25gLFxuICAgICAgICAgIGNvbnRlbnQ6IG1ldGFEZXNjcmlwdGlvbixcbiAgICAgICAgfSxcbiAgICAgIF0uY29uY2F0KG1ldGEpfVxuICAgID5cbiAgICAgIDxsaW5rXG4gICAgICAgIGhyZWY9XCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUFsYXRhJmRpc3BsYXk9c3dhcFwiXG4gICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgPjwvbGluaz5cbiAgICA8L0hlbG1ldD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNFTztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/seo.tsx\n");

/***/ }),

/***/ "./src/pages/404.tsx":
/*!***************************!*\
  !*** ./src/pages/404.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout */ \"./src/components/layout.tsx\");\n/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/seo */ \"./src/components/seo.tsx\");\nvar _jsxFileName = \"/Users/danielkrajnak/Documents/Code/dansdrinkmenu/src/pages/404.tsx\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst NotFoundPage = () => __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }\n}, __jsx(_components_seo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  title: \"404: Not found\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }\n}), __jsx(\"h1\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }\n}, \"NOT FOUND\"), __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }\n}, \"You just hit a route that doesn't exist... the sadness.\"));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (NotFoundPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvNDA0LnRzeD84YmFmIl0sIm5hbWVzIjpbIk5vdEZvdW5kUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7QUFDQTs7QUFFQSxNQUFNQSxZQUFxQyxHQUFHLE1BQzVDLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNFLE1BQUMsdURBQUQ7QUFBSyxPQUFLLEVBQUMsZ0JBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2REFIRixDQURGOztBQVFlQSwyRUFBZiIsImZpbGUiOiIuL3NyYy9wYWdlcy80MDQudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dFwiO1xuaW1wb3J0IFNFTyBmcm9tIFwiLi4vY29tcG9uZW50cy9zZW9cIjtcblxuY29uc3QgTm90Rm91bmRQYWdlOiBSZWFjdC5GdW5jdGlvbkNvbXBvbmVudCA9ICgpID0+IChcbiAgPExheW91dD5cbiAgICA8U0VPIHRpdGxlPVwiNDA0OiBOb3QgZm91bmRcIiAvPlxuICAgIDxoMT5OT1QgRk9VTkQ8L2gxPlxuICAgIDxwPllvdSBqdXN0IGhpdCBhIHJvdXRlIHRoYXQgZG9lc24mIzM5O3QgZXhpc3QuLi4gdGhlIHNhZG5lc3MuPC9wPlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/404.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1oZWxtZXRcIj9jOWQwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LWhlbG1ldC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhlbG1ldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-helmet\n");

/***/ })

/******/ });