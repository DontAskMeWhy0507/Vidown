// Module 314 - Savior Phimsea_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  function var_n(param_t, param_e) {
  return function (param_t_1) {
  if (Array.isArray(param_t_1)) return param_t_1;
  }
  (param_t) || function (param_t_1, param_e_1) {
  var var_r = null == param_t_1 ? null : "undefined" != typeof Symbol &&
  param_t_1[Symbol.iterator] || param_t_1["@@iterator"];
  if (null != var_r) {
  var var_n_1,
  var_i_1,
  var_o_1,
  var_a,
  list_s = [],
  flag_u = !0,
  flag_c = !1;
  try {
  if (var_o_1 = (var_r = var_r.call(param_t_1)).next, 0 === param_e_1) {
  if (Object(var_r) !== var_r) return;
  flag_u = !1;
  }
  else for (;
  !(flag_u = (var_n_1 = var_o_1.call(var_r)).done) && (list_s.push(var_n_1.value),
  list_s.length !== param_e_1);
  flag_u = !0);
  }
  catch (var_t) {
  flag_c = !0, var_i_1 = var_t;
  }
  finally {
  try {
  if (!flag_u && null != var_r.return && (var_a = var_r.return(), Object(var_a) !== var_a)) return;
  }
  finally {
  if (flag_c) throw var_i_1;
  }
  }
  return list_s;
  }
  }
  (param_t, param_e) || function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_i(param_t_1, param_e_1);
  var var_r = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r && param_t_1.constructor && (var_r = param_t_1.constructor.name),
  "Map" === var_r || "Set" === var_r ? Array.from(param_t_1) :
  "Arguments" === var_r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r) ?
  var_i(param_t_1, param_e_1) : void 0;
  }
  }
  (param_t, param_e) || function () {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  ();
  }
  function var_i(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n_1 = Array(param_e);
  num_r < param_e;
  num_r++) var_n_1[num_r] = param_t[num_r];
  return var_n_1;
  }
  function var_o(param_t) {
  var var_e,
  var_r,
  var_i_1 = param_t.split("/").pop(),
  var_o_1 = var_n((null == var_i_1 ? void 0 : var_i_1.split(".")) ||
  [], 2),
  var_a = var_o_1[0],
  var_s = var_o_1[1],
  var_u = (var_e = 6, var_r = var_a.replace(/[a-zA-Z]/g, param_t_1 => {
  var var_r_1 = param_t_1.charCodeAt(0) + var_e,
  var_n_1 = param_t_1 <= "Z" ? 90 : 122;
  return String.fromCharCode(var_r_1 <= var_n_1 ? var_r_1 : var_r_1 - 26);
  }
  ), atob(var_r)),
  var_c = param_t.split("/");
  return var_c[var_c.length - 1] = var_u + "." + var_s, var_c.join("/");
  }
  requireFn.r(exportsObj);
  var obj_a = {
  getDomains: () => ["phimsea."],
  parse: {
  default: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response,
  var_n_1 = null == var_r ? void 0 : var_r.split("\n").map(param_t_1 => param_t_1.startsWith(
  "https") ? var_o(param_t_1) : param_t_1.startsWith("#EXT-X-KEY") ?
  param_t_1.replace(/https:\/\/.*\.key/, param_t_2 => var_o(param_t_2)) :
  param_t_1).join("\n");
  return [Object.assign(Object.assign({
  }
  , var_e), {
  url: "https://google.com",
  play_list: var_n_1
  }
  )];
  }
  }
  };
  exportsObj.default = obj_a;
  };
