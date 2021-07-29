(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.TF = global.TF || {};
    global.TF.track = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
  "use strict";

  var pkg = require("./package.json");

  console.log("Tousfactor: ", pkg.name, "v" + pkg.version); // check if code run on browsers

  if (typeof window !== "undefined") {
    console.log("Tousfactor is running in a browser");
  } else {
    // warn the current system is not supported
    console.log("The current system is not supported.");
  }
});