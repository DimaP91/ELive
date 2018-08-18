/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/App.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./source/App.js":
/*!***********************!*\
  !*** ./source/App.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _View = __webpack_require__(/*! ./tools/View */ \"./source/tools/View.js\");\n\nvar _View2 = _interopRequireDefault(_View);\n\nvar _map = __webpack_require__(/*! ./map */ \"./source/map.js\");\n\nvar _map2 = _interopRequireDefault(_map);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar view = new _View2.default('body', _map2.default);\n\nview.display();\n\n//# sourceURL=webpack:///./source/App.js?");

/***/ }),

/***/ "./source/helpers/dom.js":
/*!*******************************!*\
  !*** ./source/helpers/dom.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = $;\nfunction $(tag) {\n  return document.querySelector(tag);\n}\n\n$.createElement = function (tag, context) {\n  var elem = document.createElement(tag);\n  if (context) {\n    elem.innerText = context;\n  }\n  return elem;\n};\n\n//# sourceURL=webpack:///./source/helpers/dom.js?");

/***/ }),

/***/ "./source/map.js":
/*!***********************!*\
  !*** ./source/map.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = {\n  design: ['####################################################', '#                 ####         ****              ###', '#   *  @  ##                 ########       &&    ##', '#   *    ##        & &                 ****       *#', '#       ##*                        ##########     *#', '#      ##***  *         ****                     **#', '#* **  #  *  ***      #########                  **#', '#* **  #      *               #   *              **#', '#     ##              #   &   #  ***          ######', '#*            @       #       #   *        &  #    #', '#*                    #  ######                 ** #', '###          ****          ***                  ** #', '#       &                        @         &       #', '#   *     ##  ##  ##  ##               ###      *  #', '#   **         #              *       #####  &     #', '##  **  &   &  #  #    ***  ***        ###      ** #', '###               #   *****                    ****#', '####################################################'],\n\n  objects: {\n    '#': 'wall',\n    '*': 'plant',\n    '&': 'some',\n    '@': 'tiger'\n  }\n};\n\n//# sourceURL=webpack:///./source/map.js?");

/***/ }),

/***/ "./source/tools/View.js":
/*!******************************!*\
  !*** ./source/tools/View.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _dom = __webpack_require__(/*! ../helpers/dom */ \"./source/helpers/dom.js\");\n\nvar _dom2 = _interopRequireDefault(_dom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar View = function () {\n  function View(elem, _ref) {\n    var design = _ref.design,\n        objects = _ref.objects;\n\n    _classCallCheck(this, View);\n\n    this.design = design;\n    this.objects = objects;\n    this.root = (0, _dom2.default)(elem);\n    console.info(objects);\n  }\n\n  _createClass(View, [{\n    key: 'display',\n    value: function display() {\n      this.root.appendChild(this.createGrid());\n    }\n  }, {\n    key: 'createGrid',\n    value: function createGrid() {\n      var TABLE = _dom2.default.createElement('table');\n\n      this.design.map(function (row) {\n        var TR = _dom2.default.createElement('tr');\n        row.split('').map(function (column) {\n          return TR.appendChild(_dom2.default.createElement('td', column));\n        });\n        return TABLE.appendChild(TR);\n      });\n\n      return TABLE;\n    }\n  }]);\n\n  return View;\n}();\n\nexports.default = View;\n\n//# sourceURL=webpack:///./source/tools/View.js?");

/***/ })

/******/ });