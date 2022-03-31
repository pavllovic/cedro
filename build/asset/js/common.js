/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./asset/components/menu/menu.js":
/*!***************************************!*\
  !*** ./asset/components/menu/menu.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var Lib_nav_nav_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Lib/nav/nav.js */ "./asset/lib/nav/nav.js");

var Nav = Lib_nav_nav_js__WEBPACK_IMPORTED_MODULE_0__.nav;
Nav.prototype = {
  constructor: Nav,
  init: Lib_nav_nav_js__WEBPACK_IMPORTED_MODULE_0__.init,
  setListeners: Lib_nav_nav_js__WEBPACK_IMPORTED_MODULE_0__.setListeners,
  openMenu: Lib_nav_nav_js__WEBPACK_IMPORTED_MODULE_0__.openMenu,
  closeMenu: Lib_nav_nav_js__WEBPACK_IMPORTED_MODULE_0__.closeMenu,
  toogleMenu: Lib_nav_nav_js__WEBPACK_IMPORTED_MODULE_0__.toogleMenu,
  destroy: Lib_nav_nav_js__WEBPACK_IMPORTED_MODULE_0__.destroy,
  handleEvent: Lib_nav_nav_js__WEBPACK_IMPORTED_MODULE_0__.handleEvent
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

/***/ }),

/***/ "./asset/lib/nav/nav.js":
/*!******************************!*\
  !*** ./asset/lib/nav/nav.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "closeMenu": () => (/* binding */ closeMenu),
/* harmony export */   "destroy": () => (/* binding */ destroy),
/* harmony export */   "handleEvent": () => (/* binding */ handleEvent),
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "nav": () => (/* binding */ nav),
/* harmony export */   "openMenu": () => (/* binding */ openMenu),
/* harmony export */   "setListeners": () => (/* binding */ setListeners),
/* harmony export */   "toogleMenu": () => (/* binding */ toogleMenu)
/* harmony export */ });
function nav(parent) {
  this.btnOpen = parent.querySelector('[data-nav="open"]');
  this.menu = parent.querySelector('[data-nav="menu"]'); // state nav

  this.open = false;
}
function init() {
  this.setListeners();
}
function setListeners() {
  this.btnOpen.addEventListener('click', this);
}
function openMenu() {
  this.btnOpen.setAttribute('aria-expanded', 'true');
  this.menu.classList.add('is-active');
}
function closeMenu() {
  this.btnOpen.setAttribute('aria-expanded', 'false');
  this.menu.classList.remove('is-active');
}
function toogleMenu() {
  this.open ? this.closeMenu() : this.openMenu();
  this.open = !this.open;
}
function destroy() {
  this.btnOpen.removeEventListener('click', this);
}
function handleEvent(e) {
  switch (e.type) {
    case 'click':
      return this.toogleMenu();

    default:
      break;
  }

  return undefined;
}

/***/ }),

/***/ "./asset/styles/common.css":
/*!*********************************!*\
  !*** ./asset/styles/common.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./asset/common.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/common.css */ "./asset/styles/common.css");
/* harmony import */ var _components_menu_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/menu/menu.js */ "./asset/components/menu/menu.js");



var initMenu = function initMenu() {
  var menuElement = document.querySelector('.js-menu');
  var menu = new _components_menu_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"](menuElement);
  menu.init();
  return menu;
};

initMenu();
window.initMenu = initMenu;
})();

/******/ })()
;