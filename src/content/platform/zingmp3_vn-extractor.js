// Module 402 - Savior Zingmp3_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0),
  dep_url_utils = requireFn(3),
  dep_media_sniffer = requireFn(6);
  function var_s() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_s_1 = param_n && param_n.prototype instanceof var_c_1 ?
  param_n : var_c_1,
  var_l_2 = Object.create(var_s_1.prototype);
  return var_u(var_l_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_2,
  var_u_1,
  num_c = 0,
  var_l_3 = param_i_1 || [],
  flag_f = !1,
  obj_d = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_1,
  f: var_h_1.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_2 = 0, var_u_1 = var_t, obj_d.n = param_r_2, obj_a;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_s_2 = param_r_2, var_u_1 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_3.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_3[var_e],
  var_h_2 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_u_1 = var_o_2[(var_s_2 = var_o_2[4]) ?
  5 : (var_s_2 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_s_2 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_s_2 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_s_2 = param_l, var_u_1 = param_p;
  (var_e = var_s_2 < 2 ? var_t : var_u_1) || !flag_f;
  ) {
  var_o_1 || (var_s_2 ? var_s_2 < 3 ? (var_s_2 > 1 && (obj_d.n = -1), var_h_1(var_s_2,
  var_u_1)) : obj_d.n = var_u_1 : obj_d.v = var_u_1);
  try {
  if (num_c = 2, var_o_1) {
  if (var_s_2 || (param_i_2 = "next"), var_e = var_o_1[param_i_2]) {
  if (!(var_e = var_e.call(var_o_1, var_u_1))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_u_1 = var_e.value, var_s_2 < 2 && (var_s_2 = 0);
  }
  else 1 === var_s_2 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_s_2 < 2 &&
  (var_u_1 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_s_2 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d.n < 0) ? var_u_1 : param_r_1.call(param_n_1,
  obj_d)) !== obj_a) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_s_2 = 1, var_u_1 = var_e_1;
  }
  finally {
  num_c = 1;
  }
  }
  return {
  value: var_e,
  done: flag_f
  };
  };
  }
  (param_r, param_i, param_o), !0), var_l_2;
  }
  var obj_a = {
  };
  function var_c_1() {
  }
  function var_l_1() {
  }
  function var_f_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_u(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f_1.prototype = var_c_1.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f_1) :
  (param_t.__proto__ = var_f_1, var_u(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l_1.prototype = var_f_1, var_u(var_h, "constructor", var_f_1), var_u(
  var_f_1, "constructor", var_l_1), var_l_1.displayName = "GeneratorFunction", var_u(
  var_f_1, var_i, "GeneratorFunction"), var_u(var_h), var_u(var_h, var_i, "Generator"),
  var_u(var_h, var_n, function () {
  return this;
  }
  ), var_u(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_s = function () {
  return {
  w: var_o,
  m: var_p
  };
  }
  )();
  }
  function var_u(param_t, param_e, param_r, param_n) {
  var var_i = Object.defineProperty;
  try {
  var_i({
  }
  , "", {
  }
  );
  }
  catch (var_t) {
  var_i = 0;
  }
  (var_u = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_u(param_t_1, param_e_2, function (param_t_2) {
  return this._invoke(param_e_2, param_r_2, param_t_2);
  }
  );
  }
  param_e_1 ? var_i ? var_i(param_t_1, param_e_1, {
  value: param_r_1,
  enumerable: !param_n_1,
  configurable: !param_n_1,
  writable: !param_n_1
  }
  ) : param_t_1[param_e_1] = param_r_1 : (var_o("next", 0), var_o("throw", 1), var_o(
  "return", 2));
  }
  )(param_t, param_e, param_r, param_n);
  }
  function var_c(param_t, param_e) {
  var var_r = "undefined" != typeof Symbol && param_t[Symbol.iterator] ||
  param_t["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_t) || (var_r = function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_l(param_t_1, param_e_1);
  var var_r_1 = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r_1 && param_t_1.constructor && (var_r_1 = param_t_1.constructor.name),
  "Map" === var_r_1 || "Set" === var_r_1 ? Array.from(param_t_1) :
  "Arguments" === var_r_1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r_1) ?
  var_l(param_t_1, param_e_1) : void 0;
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
  flag_s = !1;
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
  flag_s = !0, var_o = param_t_1;
  }
  ,
  f: function () {
  try {
  flag_a || null == var_r.return || var_r.return();
  }
  finally {
  if (flag_s) throw var_o;
  }
  }
  };
  }
  function var_l(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  var var_f,
  fn_d = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a(param_t_1) {
  try {
  var_u_1(param_n.next(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_s_1(param_t_1) {
  try {
  var_u_1(param_n.throw(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_u_1(param_t_1) {
  var var_e;
  param_t_1.done ? param_i(param_t_1.value) : (var_e = param_t_1.value, var_e instanceof param_r ?
  var_e : new param_r(function (param_t_2) {
  param_t_2(var_e);
  }
  )).then(var_a, var_s_1);
  }
  var_u_1((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  }
  ,
  list_h = [],
  list_p = [{
  bitrate: "128kbps",
  name: "Medium",
  qualityValue: 100
  }
  , {
  bitrate: "320kbps",
  name: "High",
  qualityValue: 200
  }
  ],
  obj_v = {
  getDomains: () => ["zingmp3"],
  processRequestIds: param_t => (list_h.push(param_t), !0),
  parse: {
  default: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_d(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_u_1, var_l_1, var_d, var_h, var_v, var_m, var_y, var_g, var_b, var_w, var_A,
  var__, var_E, var_S, var_O, var_x, var_k, var_M, var_T, var_I, var_j, var_C, var_B,
  var_U;
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (var_g = var_e.url, param_t_1.p = 1, var_b = JSON.parse(var_r), !var_g.includes(
  "song")) {
  param_t_1.n = 2;
  break;
  }
  return var_f = null === (var_u_1 = JSON.parse(window.localStorage.getItem("zmp3_non_logged.v1.1") ||
  "{}")) || void 0 === var_u_1 ? void 0 : var_u_1.recentSongs, var_w = null == var_f ?
  void 0 : var_f.find(param_t_2 => param_t_2 && var_g.includes(param_t_2.encodeId)),
  var_A = var_b.data, var__ = Object.keys(var_A), param_t_1.a(2, var__.map(param_t_2 => {
  if ("string" == typeof var_A[param_t_2] && var_A[param_t_2].includes("https")) {
  var var_e_1 = Object(dep_url_utils.f)(var_A[param_t_2]),
  var_r_1 = list_p.find(param_e => param_e.bitrate.includes(param_t_2));
  return var_e_1.filename = (null == var_w ? void 0 : var_w.title) ||
  (null == var_w ? void 0 : var_w.alias), var_e_1.quality = null == var_r_1 ?
  void 0 : var_r_1.name, var_e_1.resolution = null == var_r_1 ?
  void 0 : var_r_1.bitrate, var_e_1.type = "audio", var_e_1.ext = "mp3", var_e_1;
  }
  }
  ).filter(param_t_2 => !!param_t_2));
  case 2:
  var_E = var_b.data, var_S = Object.keys(var_E.streaming), var_O = var_S.map(param_t_2 => {
  var var_e_1 = var_E.streaming[param_t_2];
  return Object.keys(var_e_1).map(param_t_3 => {
  var var_r_1 = param_t_3;
  if (var_e_1[var_r_1].length > 0) {
  var var_a = Object(dep_url_utils.f)(var_e_1[var_r_1]);
  var_a.filename = var_E.alias, var_a.quality = dep_media_constants.r[var_r_1].label;
  try {
  var_a.i18n_quality = Object(dep_dom_utils.i18n)(dep_media_constants.r[var_r_1].i18n_label) ||
  var_a.quality;
  }
  catch (var_t_1) {
  var_a.i18n_quality = var_a.quality;
  }
  return var_a.resolution = var_r_1, var_a.type = "video", var_a;
  }
  }
  ).filter(param_t_3 => !!param_t_3);
  }
  ).flat(1), var_x = [], var_k = var_c(var_O), param_t_1.p = 3, var_k.s();
  case 4:
  if ((var_M = var_k.n()).done) {
  param_t_1.n = 7;
  break;
  }
  return var_T = var_M.value, param_t_1.n = 5, Object(dep_media_sniffer.e)(var_r,
  Object(dep_url_utils.f)(var_T.url));
  case 5:
  (var_I = param_t_1.v)[0].quality = var_T.quality, var_x.push(var_I[0]);
  case 6:
  param_t_1.n = 4;
  break;
  case 7:
  param_t_1.n = 9;
  break;
  case 8:
  param_t_1.p = 8, var_U = param_t_1.v, var_k.e(var_U);
  case 9:
  return param_t_1.p = 9, var_k.f(), param_t_1.f(9);
  case 10:
  return param_t_1.a(2, var_x);
  case 11:
  param_t_1.n = 13;
  break;
  case 12:
  return param_t_1.p = 12, param_t_1.v, var_f = null === (var_l_1 = JSON.parse(window.localStorage.getItem(
  "zmp3_non_logged.v1.1") || "{}")) || void 0 === var_l_1 ? void 0 :
  var_l_1.recentSongs, var_j = null === (var_d = document.querySelector(".media-content .item-title")) ||
  void 0 === var_d ? void 0 : var_d.textContent, var_C = null === (var_h = document.querySelector(
  ".media-content h3")) || void 0 === var_h ? void 0 : var_h.textContent, var_B = `${var_j}- ${var_C}`, var_e.filename = null !== (var_y = null !== (var_m = null === (var_v = null == var_f ?
  void 0 : var_f.find(param_t_2 => param_t_2 && var_g.includes(param_t_2.encodeId))) ||
  void 0 === var_v ? void 0 : var_v.alias) && void 0 !== var_m ?
  var_m : var_B) && void 0 !== var_y ? var_y : var_e.filename, param_t_1.a(2, []);
  case 13:
  return param_t_1.a(2);
  }
  }
  , var_t, null, [[3, 8, 9, 10], [1, 12]]);
  }
  ));
  }
  }
  ,
  urls: [{
  checkUrl: param_t => "AUDIO" === param_t.node.tagName,
  getUrl: param_t => {
  var var_e,
  var_r,
  var_n = param_t.url,
  var_i = (var_f = null === (var_e = JSON.parse(window.localStorage.getItem("zmp3_non_logged.v1.1") ||
  "{}")) || void 0 === var_e ? void 0 : var_e.recentSongs) &&
  (null === (var_r = var_f[0]) || void 0 === var_r ? void 0 :
  var_r.encodeId),
  var_o = null == list_h ? void 0 : list_h.filter(param_t_1 => !param_t_1.url.includes(
  "recommend") && param_t_1.url.includes(var_i));
  return var_o.length > 0 ? var_o : var_n;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "mp3", var_e.exts = ["mp3"], "audio";
  }
  }
  , {
  checkUrl: param_t => "VIDEO" === param_t.node.tagName,
  getUrl: () => {
  var var_t = /\/([^\/]*)\.html/.exec(location.href);
  if (var_t) {
  var var_e = var_t[1],
  var_r = list_h.filter(param_t => /(get\/video)/i.test(param_t.url) &&
  param_t.url.includes(var_e));
  if (var_r.length > 0) return var_r;
  }
  }
  }
  ]
  };
  exportsObj.default = obj_v;
  };
