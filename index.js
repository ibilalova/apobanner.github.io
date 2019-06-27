(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["adblock_detection_banner_demo"] = factory();
	else
		root["adblock_detection_banner_demo"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/apobanner.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/apobanner.js":
/*!*************************!*\
  !*** ./js/apobanner.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var adblock_detection_banner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! adblock-detection-banner */ \"./node_modules/adblock-detection-banner/index.js\");\n/* harmony import */ var adblock_detection_banner__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(adblock_detection_banner__WEBPACK_IMPORTED_MODULE_0__);\n \n\nwindow.banner = adblock_detection_banner__WEBPACK_IMPORTED_MODULE_0___default.a;\n\n//# sourceURL=webpack://adblock_detection_banner_demo/./js/apobanner.js?");

/***/ }),

/***/ "./node_modules/adblock-detection-banner/index.js":
/*!********************************************************!*\
  !*** ./node_modules/adblock-detection-banner/index.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(window, function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, { enumerable: true, get: getter });\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// create a fake namespace object\n/******/ \t// mode & 1: value is a module id, require it\n/******/ \t// mode & 2: merge all properties of value into the ns\n/******/ \t// mode & 4: return value when already ns object\n/******/ \t// mode & 8|1: behave like require\n/******/ \t__webpack_require__.t = function(value, mode) {\n/******/ \t\tif(mode & 1) value = __webpack_require__(value);\n/******/ \t\tif(mode & 8) return value;\n/******/ \t\tif((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;\n/******/ \t\tvar ns = Object.create(null);\n/******/ \t\t__webpack_require__.r(ns);\n/******/ \t\tObject.defineProperty(ns, 'default', { enumerable: true, value: value });\n/******/ \t\tif(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));\n/******/ \t\treturn ns;\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./js/banner.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./js/banner.js\":\n/*!**********************!*\\\n  !*** ./js/banner.js ***!\n  \\**********************/\n/*! exports provided: default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"default\\\", function() { return Banner; });\\n/* harmony import */ var adblock_detector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! adblock-detector */ \\\"./node_modules/adblock-detector/detector.js\\\");\\n \\n\\nclass Banner {\\n    constructor(config) {\\n        this.config = config;\\n        this.detectionResult = null;\\n    }\\n\\n    show(isDetected) {\\n        document.readyState !== \\\"loading\\\" \\n            ?  _drawBanner(isDetected, this.config) \\n            : document.addEventListener(\\\"DOMContentLoaded\\\", () => _drawBanner(isDetected, this.config));\\n    }\\n\\n    detectAdblocker() {\\n        return !!this.detectionResult\\n            ? Promise.resolve(this.detectionResult)\\n            : Object(adblock_detector__WEBPACK_IMPORTED_MODULE_0__[\\\"detect\\\"])().then(isDetected => this.detectionResult = isDetected);\\n    }\\n\\n    showIfAdblockerDetected() {\\n        this.detectAdblocker().then(adblock => this.show(adblock));\\n    }\\n\\n    isShown() {\\n        return !!document.getElementById(\\\"apomaya_banner_cb\\\");\\n    }\\n}\\n\\nconst defaultFonts = \\\"'Lucida Sans Unicode', 'Arial', 'Verdana', 'Trebuchet MS'\\\";\\n/**\\n * @param {bool} isDetected if adblocker detected the value is `true`\\n * @param {object} config config with custom options\\n */\\nfunction _drawBanner(isDetected, config) {\\n    if (isDetected === undefined || isDetected) {\\n        let {\\n            content = {}, \\n            position = 'bottom',\\n            type = 'banner',\\n            closeButton = {},\\n        } = config;\\n        let {\\n            dest = '',\\n            text = 'We notice that you are using an ad blocker. We use advertising to fund content creation for this site.  Please whitelist us.',\\n            containerStyle = '',\\n            contentStyle = '',\\n            background = '',\\n        } = content;\\n\\n        let _config = { text, dest, containerStyle, contentStyle, closeButton, background, position };\\n        if (type === \\\"banner\\\") {\\n            return _attachBanner(_config);\\n        }\\n        if (type === \\\"modal\\\") {\\n            return _attachModal(_config);\\n        }\\n        if (type === \\\"innerBlock\\\") {\\n            return _attachInnerBlock(_config);\\n        }\\n    }\\n}\\n\\nfunction _attachInnerBlock(config) {\\n    let { text, dest, containerStyle, contentStyle, closeButton, background } = config;\\n    let destContainer = document.getElementById(dest);\\n    if (!destContainer) {\\n        console.error('destination container not found');\\n        return undefined;\\n    }\\n    destContainer.style.position = 'relative';\\n    let container = document.createElement(\\\"div\\\");\\n    container.style = `\\n        position: absolute;\\n        left: 0;\\n        bottom: 0;\\n        color: #243342;\\n        background: rgb(17, 188, 207);\\n        background: ${background}; \\n        width: 100%; \\n        height: 100%;\\n        z-index: 1000000; \\n        border: 0.5px solid #44444457;\\n        justify-content: center;\\n        display: flex;\\n        padding: 15px;\\n        box-sizing: border-box;\\n        ${containerStyle}`;\\n\\n    let content = `\\n        ${_getCloseButton(closeButton)}\\n        <div style=\\\"font-size: 20px; font-family: ${defaultFonts}; align-self: center; ${contentStyle}\\\">\\n            ${text}\\n        </div>\\n    `;\\n\\n    container.innerHTML = content;\\n    destContainer.appendChild(container);\\n}\\n\\nfunction _attachBanner(config) {\\n    let { text, containerStyle, contentStyle, closeButton, background, position } = config;\\n    let container = document.createElement(\\\"div\\\");\\n    container.style = `\\n        position: fixed;\\n        left: 0;\\n        bottom: 0;\\n        ${position}: 0;\\n        color: #243342;\\n        background: #11bccfc7;\\n        background: ${background}; \\n        width: 100%; \\n        z-index: 1000000; \\n        border: 0.5px solid #44444457;\\n        height: fit-content;\\n        justify-content: center;\\n        display: flex;\\n        min-height: 40px;\\n        padding: 15px;\\n        box-sizing: border-box;\\n        ${containerStyle}`;\\n\\n    let content = `\\n        ${_getCloseButton(closeButton)}\\n        <div style=\\\"font-size: 20px; font-family: ${defaultFonts}; align-self: center; ${contentStyle}\\\">\\n            ${text}\\n        </div>\\n    `;\\n\\n    container.innerHTML = content;\\n    document.body.appendChild(container);\\n}\\n\\nfunction _attachModal(config) {\\n    let { text, contentStyle, closeButton, background } = config;\\n    let container = document.createElement(\\\"div\\\");\\n    container.id = \\\"admodal\\\";\\n    container.style = `\\n        position: fixed;\\n        z-index: 1000000;\\n        top: 0;\\n        left: 0;\\n        display: flex;\\n        align-items: center;\\n        justify-content: center;\\n        width: 100vw;\\n        height: 100vh;`;\\n\\n    const wrapperStyle = `\\n        position: absolute;\\n        top: 0;\\n        left: 0;\\n        width: 100%;\\n        height: 100%;\\n        background: rgba(255, 255, 255, 0.8);\\n        background: ${background};`;\\n    const bodyStyle = `\\n        box-sizing: border-box;\\n        font-family: ${defaultFonts};\\n        font-size: 20px;\\n        min-width: 400px;\\n        text-align: center;\\n        min-height: 10px;\\n        max-height: 100vh;\\n        background-color: #fff;\\n        box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.12);\\n        padding: 35px 25px;\\n        overflow-y: auto;\\n        position: relative;\\n        max-width: 65%;`;\\n    const isModal = true;\\n    let content = `\\n        <div style=\\\"${wrapperStyle}\\\"></div>\\n        <div style=\\\"${bodyStyle}${contentStyle}\\\">\\n            ${_getCloseButton(closeButton, isModal)}\\n            ${text}\\n        </div>\\n    `;\\n\\n    container.innerHTML = content;\\n    document.body.appendChild(container);\\n}\\n\\nfunction _getCloseButton(config, isModal) {\\n    let {\\n        show = true,\\n        style = '',\\n        size = '14px',\\n        color = '#444c',\\n    } = config;\\n\\n    const cbStyle = `width: ${size}; position:absolute; right: 13px; top: 6px; cursor: pointer;${style}`;\\n    return show \\n        ? ` <div id=\\\"apomaya_banner_cb\\\" style=\\\"${cbStyle}\\\" onclick=\\\"${isModal ? 'this.parentElement.parentElement.remove()' : 'this.parentElement.remove()'}\\\">\\n                <svg viewBox=\\\"0 0 13.83 13.83\\\" width=\\\"100%\\\" height=\\\"100%\\\">\\n                    <path stroke=${color} d=\\\"M13.48.35L.35 13.48M.35.35l13.13 13.13\\\"></path>\\n                </svg>\\n        </div>`\\n        : '';\\n}\\n\\n\\n//# sourceURL=webpack://adblock_detection_banner/./js/banner.js?\");\n\n/***/ }),\n\n/***/ \"./node_modules/adblock-detector/detector.js\":\n/*!***************************************************!*\\\n  !*** ./node_modules/adblock-detector/detector.js ***!\n  \\***************************************************/\n/*! exports provided: detect, getAdblockerType */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"detect\\\", function() { return detect; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"getAdblockerType\\\", function() { return getAdblockerType; });\\nfunction detect() {\\n    let element = document.documentElement;\\n    let div = document.createElement(\\\"div\\\");\\n    div.id = \\\"AD-300x250\\\";\\n    element.appendChild(div);\\n\\n    return new Promise((resolve) => {\\n        setTimeout(() => {\\n            let isDetected = window.getComputedStyle(div).display === \\\"none\\\";\\n            resolve(isDetected);\\n        }, 0);\\n    });\\n}\\n\\nfunction getAdblockerType() {\\n    return fetchScripts().then(res => detectAdblocker(res));\\n}\\n\\nfunction fetchScripts() {\\n    let promises = [\\n        { url: \\\"https://apomaya.tech/js/advert.js\\\" },\\n        { url: \\\"https://connect.facebook.net/en_US/fbevents.js\\\" },\\n        { url: \\\"https://tag.digitaltarget.ru/adcm.js\\\" },\\n        { url: \\\"https://mc.yandex.ru/metrika/watch.js\\\" }\\n    ].map(el => fetchRemoteScript(el.url));\\n    return Promise.all(promises);\\n}\\n\\nfunction fetchRemoteScript(url) {\\n    return fetch(url, {mode: \\\"no-cors\\\", method: \\\"GET\\\"})\\n            .then(response => response.body)\\n            .then(() => { return false; })\\n            .catch(() => { return true; });\\n}\\n\\nfunction detectAdblocker(flags) {\\n    if (document.body) {\\n        return ublockEnabled().then(isUblock => getAdblocker(flags, true, isUblock));\\n    }\\n    return getAdblocker(flags, false);\\n}\\n\\nfunction getAdblocker(detectionResult, isFullDetection, isUblock) {\\n    let [isBlockerEnabled, isFbBlocked, isTagBlocked, isYaBlocked] = detectionResult;\\n\\n    if (!isBlockerEnabled) {\\n        return getDetectionResult(\\\"not detected\\\", \\\"no\\\", false);\\n    }\\n    if (isUblock || isYaBlocked) {\\n        return getDetectionResult(\\\"uBlock\\\", \\\"ublock\\\", true);\\n    }\\n    if (isFbBlocked) {\\n        return getDetectionResult(\\\"AdBlock\\\", \\\"adblock\\\", true);\\n    }\\n    if (isTagBlocked) {\\n        return getDetectionResult(\\\"AdBlock Plus\\\", \\\"adblockplus\\\", true);\\n    }\\n    if (isFullDetection) {\\n        return isGhosteryEnabled()\\n            ? getDetectionResult(\\\"Ghostery\\\", \\\"ghostery\\\", true)\\n            : getDetectionResult(\\\"unknown\\\", \\\"unknown\\\", true);\\n    }\\n    return getDetectionResult(\\\"unknown\\\", \\\"unknown\\\", true);\\n}\\n\\nfunction getDetectionResult(title, name, isDetected) {\\n    return { title, name, isDetected };\\n}\\n\\n// Ghostery injects css styles for its widget.\\n// So we are trying to detect if these styles exist.\\nfunction isGhosteryEnabled() {\\n    if (!window.getComputedStyle) {\\n        return false;\\n    }\\n    let element = document.createElement(\\\"div\\\");\\n    document.body.appendChild(element);\\n    element.id = \\\"ghostery-purple-box\\\";\\n    element.className = \\\"ghostery-top\\\";\\n    let styles = window.getComputedStyle(element);\\n    let detected = styles.position === \\\"fixed\\\" && styles.top.match(/^\\\\d+px$/);\\n    element.remove();\\n    return detected;\\n}\\n\\n// uBlock sets \\\"display: none !important\\\" property dynamically\\n// This fact is used to check if it is enabled. It makes the function async.\\nfunction  ublockEnabled() {\\n    return new Promise(function(resolve) {\\n        let bait = document.createElement(\\\"div\\\");\\n        bait.setAttribute(\\\"class\\\", \\\"pub_300x250 pub_300x250m pub_728x90 text-ad textAd text_ad text_ads text-ads text-ad-links\\\");\\n        bait.setAttribute(\\\"style\\\", \\\"width: 1px !important; height: 1px !important; position: absolute !important; left: -2px !important; top: -2px !important; display: block !important;\\\");\\n        document.body.appendChild(bait);\\n        setTimeout(function() {\\n            resolve(bait.style.display === \\\"none\\\");\\n        }, 0);\\n    });\\n}\\n\\n\\n//# sourceURL=webpack://adblock_detection_banner/./node_modules/adblock-detector/detector.js?\");\n\n/***/ })\n\n/******/ })[\"default\"];\n});\n\n//# sourceURL=webpack://adblock_detection_banner_demo/./node_modules/adblock-detection-banner/index.js?");

/***/ })

/******/ })["default"];
});