// Module 231 - Savior Ephimmoi_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_constants = requireFn(1),
  dep_url_utils = requireFn(3),
  dep_dom_utils = requireFn(0);
  function var_a(param_t, param_e) {
  var var_r = "undefined" != typeof Symbol && param_t[Symbol.iterator] ||
  param_t["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_t) || (var_r = function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_s(param_t_1, param_e_1);
  var var_r_1 = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r_1 && param_t_1.constructor && (var_r_1 = param_t_1.constructor.name),
  "Map" === var_r_1 || "Set" === var_r_1 ? Array.from(param_t_1) :
  "Arguments" === var_r_1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r_1) ?
  var_s(param_t_1, param_e_1) : void 0;
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
  var var_o,
  flag_a = !0,
  flag_u = !1;
  return {
  s: function () {
  var_r = var_r.call(param_t);
  }
  ,
  n: function () {
  var var_t = var_r.next();
  return flag_a = var_t.done, var_t;
  }
  ,
  e: function (param_t_1) {
  flag_u = !0, var_o = param_t_1;
  }
  ,
  f: function () {
  try {
  flag_a || null == var_r.return || var_r.return();
  }
  finally {
  if (flag_u) throw var_o;
  }
  }
  };
  }
  function var_s(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  var obj_u = {
  getDomains: () => ["ephimmoi", "ezphimmoi", "bphimmoi.net", "phimmoipro2.net"],
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e;
  return (null === (var_e = param_t.cacheUrl) || void 0 === var_e ?
  void 0 : var_e.includes("blob:https://ezphimmoi")) || !1;
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response,
  var_s_1 = /sources\s*:\s*(.+?]),/.exec(var_r);
  if (var_s_1) {
  var var_u,
  var_c = JSON.parse(var_s_1[1]),
  list_l = [],
  var_f = var_a(var_c);
  try {
  var fn_d = function () {
  var var_t = var_u.value,
  var_r_1 = Object(dep_url_utils.f)(var_t.file);
  var_r_1.resolution = Object.keys(dep_media_constants.r).find(param_e => dep_media_constants.r[param_e].label.toLowerCase(
  ) == var_t.label.toLowerCase()), var_r_1.quality = Object(dep_dom_utils.i18n)(
  dep_media_constants.r[var_r_1.resolution].i18n_label), var_r_1.filename = var_e.filename,
  var_r_1.ext = "m3u8", var_r_1.type = "video", list_l.push(var_r_1);
  };
  for (var_f.s();
  !(var_u = var_f.n()).done;
  ) fn_d();
  }
  catch (var_t) {
  var_f.e(var_t);
  }
  finally {
  var_f.f();
  }
  return list_l;
  }
  return [];
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url,
  var_r = param_t.node;
  if (var_e.match(/(hls\.streamphim\.xyz)/)) return !0;
  var var_n = var_r.closest("#media-player-box");
  return !!(null == var_n ? void 0 : var_n.querySelector("script"));
  }
  ,
  getUrl: param_t => {
  var var_e,
  var_r = param_t.url,
  var_n = param_t.node;
  if (var_r.match(/(hls\.streamphim\.xyz)/)) return var_r;
  var var_i = var_n.closest("#media-player-box"),
  var_o = null == var_i ? void 0 : var_i.querySelector("script");
  if (var_o) {
  var var_a_1 = (null === (var_e = var_o.textContent) || void 0 === var_e ?
  void 0 : var_e.trim().replace(/[\n\t]/g, "")) || "";
  try {
  var_a_1 = var_a_1.substring(var_a_1.indexOf("playerInstance.setup(") + "playerInstance.setup(".length,
  var_a_1.indexOf("});") + 1);
  var var_s_1 = var_a_1.match(/("|')*file("|')*\s*:\s*("|')(.+?(m3u8|cdn).+?)("|')/);
  if (var_s_1 && var_s_1[4]) return var_s_1[4].replace(/\\/g, "");
  }
  catch (var_t) {
  return var_r;
  }
  }
  return var_r;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return "" == var_e.ext && (var_e.ext = "m3u8", var_e.exts = ["m3u8"]), "video";
  }
  }
  ]
  };
  exportsObj.default = obj_u;
  };
