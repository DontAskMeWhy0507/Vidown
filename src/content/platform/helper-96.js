// Module 96 - Savior Helper 96
export default function (moduleObj, exportsObj) {
  moduleObj.exports = function (param_t) {
  return param_t.webpackPolyfill || (param_t.deprecate = function () {
  }
  , param_t.paths = [], param_t.children || (param_t.children = []), Object.defineProperty(
  param_t, "loaded", {
  enumerable: !0,
  get: function () {
  return param_t.l;
  }
  }
  ), Object.defineProperty(param_t, "id", {
  enumerable: !0,
  get: function () {
  return param_t.i;
  }
  }
  ), param_t.webpackPolyfill = 1), param_t;
  };
  };
