/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 843:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.JSON_BLOB_MAIN_ID = _exports.JSON_BLOB_URL = _exports.LOCAL_STORAGE_KEY = _exports.SESSION_STORAGE_KEY = _exports.URL_API_KEY = void 0;
  // constants for key of api related to the client
  var URL_API_KEY = "apiKey"; // constants for session and local storage

  _exports.URL_API_KEY = URL_API_KEY;
  var SESSION_STORAGE_KEY = "tousfacteurs:session";
  _exports.SESSION_STORAGE_KEY = SESSION_STORAGE_KEY;
  var LOCAL_STORAGE_KEY = "tousfacteurs:local"; // fake jsonBlob for save and get registred clients

  _exports.LOCAL_STORAGE_KEY = LOCAL_STORAGE_KEY;
  var JSON_BLOB_URL = "https://jsonblob.com/api/";
  _exports.JSON_BLOB_URL = JSON_BLOB_URL;
  var JSON_BLOB_MAIN_ID = "7477a122-f057-11eb-a0b0-7fdc1980dd8d";
  _exports.JSON_BLOB_MAIN_ID = JSON_BLOB_MAIN_ID;
});

/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(843), __webpack_require__(336)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_constants, _package) {
  "use strict";

  _package = _interopRequireDefault(_package);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  console.log("Tousfacteurs: ", _package["default"].name, "v" + _package["default"].version); // check if code run on browsers

  if (typeof window !== "undefined") {
    var extractScriptParamters = function extractScriptParamters() {
      // curent script source
      var scriptSource = document.currentScript.src; // get paramters from current script

      var params = scriptSource.split("?")[1]; // convert url search parameters to object

      var paramsObj = new URLSearchParams(params); // get apiKey from paramsObj

      var apiKey = paramsObj.get(_constants.URL_API_KEY);
      return {
        apiKey: apiKey
      };
    };

    console.log("Tousfacteurs is running in a browser");

    var _extractScriptParamte = extractScriptParamters(),
        apiKey = _extractScriptParamte.apiKey; // default settings


    var defaultSettings = {
      versions: [_package["default"].version],
      apiKey: apiKey
    };
    console.log("Tousfacteurs default settings: ", defaultSettings);
  } else {
    // warn the current system is not supported
    console.log("The current system is not supported.");
  }
});

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(306)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _package) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports["default"] = void 0;
  _package = _interopRequireDefault(_package);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

  // Export
  var _default = {
    name: _package["default"].name,
    version: _package["default"].version,
    description: _package["default"].description
  };
  _exports["default"] = _default;
});

/***/ }),

/***/ 306:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"name":"@tousfactor/tracking-lib","version":"0.1.1","description":"A library for tracking user interactions with your application","private":true,"repository":"https://github.com/tamsamani/tracking-lib.git","author":"Mohamed Tamsamani <mohamed@tousfacteurs.com>","license":"MIT","devDependencies":{"@babel/cli":"^7.14.8","@babel/core":"^7.14.8","@babel/plugin-transform-modules-umd":"^7.14.5","@babel/preset-env":"^7.14.8","babel-loader":"^8.2.2","cross-env":"^7.0.3","terser-webpack-plugin":"^5.1.4","webpack":"^5.47.0","webpack-cli":"^4.7.2"},"scripts":{"build:prod":"webpack","build:dev":"webpack --env dev"}}');

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(352);
/******/ 	
/******/ })()
;