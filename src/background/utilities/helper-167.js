// Module 167 [utilities] - Shared utility component (helper-167)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  moduleObj.exports = function () {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function") {
  return false;
  }
  if (typeof Symbol.iterator == "symbol") {
  return true;
  }
  var obj_e = {
  };
  var var_t = Symbol("test");
  var var_r = Object(var_t);
  if (typeof var_t == "string") {
  return false;
  }
  if (Object.prototype.toString.call(var_t) !== "[object Symbol]") {
  return false;
  }
  if (Object.prototype.toString.call(var_r) !== "[object Symbol]") {
  return false;
  }
  obj_e[var_t] = 42;
  for (var var_n in obj_e) {
  return false;
  }
  if (typeof Object.keys == "function" && Object.keys(obj_e).length !== 0) {
  return false;
  }
  if (typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(
  obj_e).length !== 0) {
  return false;
  }
  var var_o = Object.getOwnPropertySymbols(obj_e);
  if (var_o.length !== 1 || var_o[0] !== var_t) {
  return false;
  }
  if (!Object.prototype.propertyIsEnumerable.call(obj_e, var_t)) {
  return false;
  }
  if (typeof Object.getOwnPropertyDescriptor == "function") {
  var var_i = Object.getOwnPropertyDescriptor(obj_e, var_t);
  if (var_i.value !== 42 || var_i.enumerable !== true) {
  return false;
  }
  }
  return true;
  };
  };
