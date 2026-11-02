// Module 685 - Savior Player Asianfans Net Host
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0);
  function var_i(param_t, param_e) {
  var var_r = "undefined" != typeof Symbol && param_t[Symbol.iterator] ||
  param_t["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_t) || (var_r = function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_o(param_t_1, param_e_1);
  var var_r_1 = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r_1 && param_t_1.constructor && (var_r_1 = param_t_1.constructor.name),
  "Map" === var_r_1 || "Set" === var_r_1 ? Array.from(param_t_1) :
  "Arguments" === var_r_1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r_1) ?
  var_o(param_t_1, param_e_1) : void 0;
  }
  }
  (param_t)) || param_e && param_t && "number" == typeof param_t.length) {
  var_r && (param_t = var_r);
  var num_n = 0,
  fn_i = function () {
  };
  return {
  s: fn_i,
  n: function () {
  return num_n >= param_t.length ? {
  done: !0
  }
  : {
  done: !1,
  value: param_t[num_n++]
  };
  }
  ,
  e: function (param_t_1) {
  throw param_t_1;
  }
  ,
  f: fn_i
  };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var var_a,
  flag_s = !0,
  flag_u = !1;
  return {
  s: function () {
  var_r = var_r.call(param_t);
  }
  ,
  n: function () {
  var var_t = var_r.next();
  return flag_s = var_t.done, var_t;
  }
  ,
  e: function (param_t_1) {
  flag_u = !0, var_a = param_t_1;
  }
  ,
  f: function () {
  try {
  flag_s || null == var_r.return || var_r.return();
  }
  finally {
  if (flag_u) throw var_a;
  }
  }
  };
  }
  function var_o(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  exportsObj.default = {
  index: 110,
  getUrl(param_t, param_e, param_r, param_o) {
  if (param_t.includes("player.asianfans.net")) {
  var var_a,
  var_s = var_i(Object(dep_dom_utils.queryAll)("script").filter(param_t_1 => param_t_1.innerHTML));
  try {
  for (var_s.s();
  !(var_a = var_s.n()).done;
  ) {
  var var_u = var_a.value.innerHTML,
  var_c = /src="([^"]*)"/.exec(var_u);
  var_c && Object(dep_dom_utils.sendMessage)({
  requestType: "save_url",
  params: {
  url: var_c[1]
  }
  }
  );
  }
  }
  catch (var_t) {
  var_s.e(var_t);
  }
  finally {
  var_s.f();
  }
  }
  return {
  return: !1,
  data: null
  };
  }
  };
  };
