// Module 167 - Savior Helper 167
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  moduleObj.exports = function () {
  if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
  if ("symbol" == typeof Symbol.iterator) return !0;
  var obj_t = {
  }
  ,
  var_e = Symbol("test"),
  var_r = Object(var_e);
  if ("string" == typeof var_e) return !1;
  if ("[object Symbol]" !== Object.prototype.toString.call(var_e)) return !1;
  if ("[object Symbol]" !== Object.prototype.toString.call(var_r)) return !1;
  for (var var_n in obj_t[var_e] = 42, obj_t) return !1;
  if ("function" == typeof Object.keys && 0 !== Object.keys(obj_t).length) return !1;
  if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(
  obj_t).length) return !1;
  var var_i = Object.getOwnPropertySymbols(obj_t);
  if (1 !== var_i.length || var_i[0] !== var_e) return !1;
  if (!Object.prototype.propertyIsEnumerable.call(obj_t, var_e)) return !1;
  if ("function" == typeof Object.getOwnPropertyDescriptor) {
  var var_o = Object.getOwnPropertyDescriptor(obj_t, var_e);
  if (42 !== var_o.value || !0 !== var_o.enumerable) return !1;
  }
  return !0;
  };
  };
