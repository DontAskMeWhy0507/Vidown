// Module 29 [utilities] - Stream / runtime utility component (string-decoder)
export default function (moduleObj, exportsObj, requireFn) {
  (function (param_e) {
  function var_r(param_e_1) {
  return Object.prototype.toString.call(param_e_1);
  }
  exportsObj.isArray = function (param_e_1) {
  if (Array.isArray) {
  return Array.isArray(param_e_1);
  }
  else {
  return var_r(param_e_1) === "[object Array]";
  }
  };
  exportsObj.isBoolean = function (param_e_1) {
  return typeof param_e_1 == "boolean";
  };
  exportsObj.isNull = function (param_e_1) {
  return param_e_1 === null;
  };
  exportsObj.isNullOrUndefined = function (param_e_1) {
  return param_e_1 == null;
  };
  exportsObj.isNumber = function (param_e_1) {
  return typeof param_e_1 == "number";
  };
  exportsObj.isString = function (param_e_1) {
  return typeof param_e_1 == "string";
  };
  exportsObj.isSymbol = function (param_e_1) {
  return typeof param_e_1 == "symbol";
  };
  exportsObj.isUndefined = function (param_e_1) {
  return param_e_1 === undefined;
  };
  exportsObj.isRegExp = function (param_e_1) {
  return var_r(param_e_1) === "[object RegExp]";
  };
  exportsObj.isObject = function (param_e_1) {
  return typeof param_e_1 == "object" && param_e_1 !== null;
  };
  exportsObj.isDate = function (param_e_1) {
  return var_r(param_e_1) === "[object Date]";
  };
  exportsObj.isError = function (param_e_1) {
  return var_r(param_e_1) === "[object Error]" || param_e_1 instanceof Error;
  };
  exportsObj.isFunction = function (param_e_1) {
  return typeof param_e_1 == "function";
  };
  exportsObj.isPrimitive = function (param_e_1) {
  return param_e_1 === null || typeof param_e_1 == "boolean" ||
  typeof param_e_1 == "number" || typeof param_e_1 == "string" ||
  typeof param_e_1 == "symbol" || param_e_1 === undefined;
  };
  exportsObj.isBuffer = param_e.isBuffer;
  }
  ).call(this, requireFn(27).Buffer);
  };
