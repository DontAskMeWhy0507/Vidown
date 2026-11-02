// Module 579 - Savior Helper 579
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var var_n,
  var_i,
  var_o = Function.prototype.toString,
  var_a = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
  if ("function" == typeof var_a && "function" == typeof Object.defineProperty) try {
  var_n = Object.defineProperty({
  }
  , "length", {
  get: function () {
  throw var_i;
  }
  }
  ), var_i = {
  }
  , var_a(function () {
  throw 42;
  }
  , null, var_n);
  }
  catch (var_t) {
  var_t !== var_i && (var_a = null);
  }
  else var_a = null;
  var regex_s = /^\s*class\b/,
  fn_u = function (param_t) {
  try {
  var var_e = var_o.call(param_t);
  return regex_s.test(var_e);
  }
  catch (var_t) {
  return !1;
  }
  }
  ,
  fn_c = function (param_t) {
  try {
  return !fn_u(param_t) && (var_o.call(param_t), !0);
  }
  catch (var_t) {
  return !1;
  }
  }
  ,
  var_l = Object.prototype.toString,
  var_f = "function" == typeof Symbol && !!Symbol.toStringTag,
  flag_d = !(0 in [,]),
  fn_h = function () {
  return !1;
  };
  if ("object" == typeof document) {
  var var_p = document.all;
  var_l.call(var_p) === var_l.call(document.all) && (fn_h = function (param_t) {
  if ((flag_d || !param_t) && (void 0 === param_t || "object" == typeof param_t)) try {
  var var_e = var_l.call(param_t);
  return ("[object HTMLAllCollection]" === var_e || "[object HTML document.all class]" === var_e ||
  "[object HTMLCollection]" === var_e || "[object Object]" === var_e) &&
  null == param_t("");
  }
  catch (var_t) {
  }
  return !1;
  }
  );
  }
  moduleObj.exports = var_a ? function (param_t) {
  if (fn_h(param_t)) return !0;
  if (!param_t) return !1;
  if ("function" != typeof param_t && "object" != typeof param_t) return !1;
  try {
  var_a(param_t, null, var_n);
  }
  catch (var_t) {
  if (var_t !== var_i) return !1;
  }
  return !fn_u(param_t) && fn_c(param_t);
  }
  : function (param_t) {
  if (fn_h(param_t)) return !0;
  if (!param_t) return !1;
  if ("function" != typeof param_t && "object" != typeof param_t) return !1;
  if (var_f) return fn_c(param_t);
  if (fn_u(param_t)) return !1;
  var var_e = var_l.call(param_t);
  return !("[object Function]" !== var_e && "[object GeneratorFunction]" !== var_e &&
  !/^\[object HTML/.test(var_e)) && fn_c(param_t);
  };
  };
