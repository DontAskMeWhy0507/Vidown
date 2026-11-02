// Module 96 [utilities] - Shared utility component (helper-96)
export default function (moduleObj, exportsObj) {
  moduleObj.exports = function (param_e) {
  if (!param_e.webpackPolyfill) {
  param_e.deprecate = function () {
  };
  param_e.paths = [];
  param_e.children ||= [];
  Object.defineProperty(param_e, "loaded", {
  enumerable: true,
  get: function () {
  return param_e.l;
  }
  }
  );
  Object.defineProperty(param_e, "id", {
  enumerable: true,
  get: function () {
  return param_e.i;
  }
  }
  );
  param_e.webpackPolyfill = 1;
  }
  return param_e;
  };
  };
