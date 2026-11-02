// Module 225 - Savior Dantri_com_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  function var_n() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_o = var_r.iterator || "@@iterator",
  var_a = var_r.toStringTag || "@@toStringTag";
  function var_s(param_r, param_n, param_o, param_a) {
  var var_s_1 = param_n && param_n.prototype instanceof var_c_1 ?
  param_n : var_c_1,
  var_l_1 = Object.create(var_s_1.prototype);
  return var_i(var_l_1, "_invoke", function (param_r_1, param_n_1, param_i) {
  var var_o_1,
  var_a_1,
  var_s_2,
  num_c = 0,
  var_l_2 = param_i || [],
  flag_f = !1,
  obj_d = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_1,
  f: var_h_1.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_a_1 = 0, var_s_2 = var_t, obj_d.n = param_r_2, obj_u;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_a_1 = param_r_2, var_s_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
  var_h_2 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_s_2 = var_o_2[(var_a_1 = var_o_2[4]) ?
  5 : (var_a_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_a_1 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_a_1 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_u;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_1, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_a_1 = param_l, var_s_2 = param_p;
  (var_e = var_a_1 < 2 ? var_t : var_s_2) || !flag_f;
  ) {
  var_o_1 || (var_a_1 ? var_a_1 < 3 ? (var_a_1 > 1 && (obj_d.n = -1), var_h_1(var_a_1,
  var_s_2)) : obj_d.n = var_s_2 : obj_d.v = var_s_2);
  try {
  if (num_c = 2, var_o_1) {
  if (var_a_1 || (param_i_1 = "next"), var_e = var_o_1[param_i_1]) {
  if (!(var_e = var_e.call(var_o_1, var_s_2))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_s_2 = var_e.value, var_a_1 < 2 && (var_a_1 = 0);
  }
  else 1 === var_a_1 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_a_1 < 2 &&
  (var_s_2 = TypeError("The iterator does not provide a '" + param_i_1 + "' method"),
  var_a_1 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d.n < 0) ? var_s_2 : param_r_1.call(param_n_1,
  obj_d)) !== obj_u) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_a_1 = 1, var_s_2 = var_e_1;
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
  (param_r, param_o, param_a), !0), var_l_1;
  }
  var obj_u = {
  };
  function var_c_1() {
  }
  function var_l() {
  }
  function var_f() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_o] ? var_e(var_e([][var_o]())) : (var_i(var_e = {
  }
  , var_o, function () {
  return this;
  }
  ), var_e),
  var_h = var_f.prototype = var_c_1.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_i(param_t, var_a, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l.prototype = var_f, var_i(var_h, "constructor", var_f), var_i(var_f,
  "constructor", var_l), var_l.displayName = "GeneratorFunction", var_i(var_f, var_a,
  "GeneratorFunction"), var_i(var_h), var_i(var_h, var_a, "Generator"), var_i(var_h,
  var_o, function () {
  return this;
  }
  ), var_i(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_n = function () {
  return {
  w: var_s,
  m: var_p
  };
  }
  )();
  }
  function var_i(param_t, param_e, param_r, param_n) {
  var var_o = Object.defineProperty;
  try {
  var_o({
  }
  , "", {
  }
  );
  }
  catch (var_t) {
  var_o = 0;
  }
  (var_i = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_a(param_e_2, param_r_2) {
  var_i(param_t_1, param_e_2, function (param_t_2) {
  return this._invoke(param_e_2, param_r_2, param_t_2);
  }
  );
  }
  param_e_1 ? var_o ? var_o(param_t_1, param_e_1, {
  value: param_r_1,
  enumerable: !param_n_1,
  configurable: !param_n_1,
  writable: !param_n_1
  }
  ) : param_t_1[param_e_1] = param_r_1 : (var_a("next", 0), var_a("throw", 1), var_a(
  "return", 2));
  }
  )(param_t, param_e, param_r, param_n);
  }
  requireFn.r(exportsObj);
  var fn_o = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a(param_t_1) {
  try {
  var_u_1(param_n.next(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_s(param_t_1) {
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
  )).then(var_a, var_s);
  }
  var_u_1((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  }
  ,
  obj_a = {
  }
  ,
  obj_s = {
  }
  ,
  var_u = new Set(),
  var_c = new Map(),
  obj_l = {
  getDomains: () => ["dantri.com.vn"],
  processRequestIds(param_t) {
  var var_e,
  var_r,
  var_n_1 = param_t.url;
  if (var_n_1.includes("playlist.m3u8") && var_u.add(var_n_1), var_n_1.includes(
  ".m3u8")) {
  var var_i_1 = null === (var_e = null == var_n_1 ? void 0 :
  var_n_1.match(/.+-(\d+)\/(playlist|master|index)\.m3u8/i)) ||
  void 0 === var_e ? void 0 : var_e[1];
  return var_i_1 && (obj_a[var_i_1] = var_n_1), !0;
  }
  var var_o = null === (var_r = null == var_n_1 ? void 0 : var_n_1.match(/(\d+)\/[a-z_\-\d]+\./i)) ||
  void 0 === var_r ? void 0 : var_r[1];
  return var_o && (obj_a[var_o] = var_n_1), !0;
  }
  ,
  urls: [{
  checkUrl: () => location.pathname.startsWith("/short-video"),
  getUrl: param_t => {
  var var_e,
  var_r = param_t.node,
  var_n_1 = param_t.ids,
  var_i_1 = var_r.closest(".vplayer-container") || var_r.parentElement,
  var_o = null == var_i_1 ? void 0 : var_i_1.querySelector(".vjs-poster");
  if (var_o) {
  var var_a = null === (var_e = getComputedStyle(var_o).backgroundImage.match(/\/(short-video\/.+)\/[a-z0-9\-_]+\./i)) ||
  void 0 === var_e ? void 0 : var_e[1];
  if (var_a) return `https://vcdn.dantri.com.vn/vod/${var_a}/playlist.m3u8`;
  }
  return var_n_1;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n_1,
  var_i_1,
  var_o = param_t.mediaObject,
  var_a = null === (var_i_1 = null === (var_n_1 = null === (var_r = null === (var_e = param_t.node.closest(
  ".vplayer-container")) || void 0 === var_e ? void 0 : var_e.parentElement) ||
  void 0 === var_r ? void 0 : var_r.querySelector("img[alt]")) ||
  void 0 === var_n_1 ? void 0 : var_n_1.alt) || void 0 === var_i_1 ?
  void 0 : var_i_1.trim();
  return var_a && (var_o.filename = var_a, var_o.fixName = var_a), var_o.type;
  }
  }
  , {
  checkUrl: param_t => "VIDEO" == param_t.node.nodeName,
  getUrl: param_t => {
  var var_e = param_t.node;
  return fn_o(void 0, void 0, void 0, var_n().m(function var_t() {
  var var_r, var_i_1, var_o, var_l, var_f, var_d, var_h, var_p, var_v, var_m, var_y,
  var_g, var_b, var_w;
  return var_n().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (var_h = var_e.closest("div[data-video-id]"), var_p = null == var_h ?
  void 0 : var_h.getAttribute("data-src"), !(var_v = null === (var_r = null == var_p ?
  void 0 : var_p.match(/.+-(\d+)(\.mp4|\/(.+\.m3u8)|(\.mkv)|(\.mov))/i)) ||
  void 0 === var_r ? void 0 : var_r[1]) || !obj_a[var_v]) {
  param_t_1.n = 1;
  break;
  }
  return var_m = obj_a[var_v], var_y = null === (var_i_1 = null == var_h ?
  void 0 : var_h.parentElement) || void 0 === var_i_1 ? void 0 :
  var_i_1.querySelector("figcaption p"), (var_g = null == var_y ?
  void 0 : var_y.innerText) && (obj_s[var_m] = var_g), param_t_1.a(2, var_m);
  case 1:
  if (!(var_b = null === (var_d = null === (var_f = null === (var_l = null === (
  var_o = var_e.closest(".video-js")) || void 0 === var_o ? void 0 :
  var_o.querySelector(".vjs-poster img")) || void 0 === var_l ?
  void 0 : var_l.src) || void 0 === var_f ? void 0 : var_f.match(/\/([^/]+)\/[^/]+$/)) ||
  void 0 === var_d ? void 0 : var_d[1])) {
  param_t_1.n = 3;
  break;
  }
  if (!var_c.get(var_b)) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.a(2, var_c.get(var_b));
  case 2:
  if (!var_u.size) {
  param_t_1.n = 3;
  break;
  }
  if (!(var_w = Array.from(var_u).find(param_t_2 => param_t_2.includes(var_b)))) {
  param_t_1.n = 3;
  break;
  }
  return var_c.set(var_b, var_w), var_u.delete(var_w), param_t_1.a(2, var_c.get(
  var_b));
  case 3:
  return param_t_1.a(2, []);
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange(param_t) {
  var var_e,
  var_r,
  var_n_1,
  var_i_1,
  var_o = param_t.mediaObject,
  var_a = param_t.node;
  return var_o.filename = (null === (var_r = null === (var_e = var_a.closest("figure.video")) ||
  void 0 === var_e ? void 0 : var_e.querySelector("figcaption")) ||
  void 0 === var_r ? void 0 : var_r.innerText) || obj_s[var_o.url] ||
  var_o.filename, var_o.fixName = (null === (var_i_1 = null === (var_n_1 = var_a.closest(
  "figure.video")) || void 0 === var_n_1 ? void 0 : var_n_1.querySelector("figcaption")) ||
  void 0 === var_i_1 ? void 0 : var_i_1.innerText) || obj_s[var_o.url], var_o.type;
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return !!new URL(var_e).searchParams.get("file");
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_o(void 0, void 0, void 0, var_n().m(function var_t() {
  var var_r, var_i_1;
  return var_n().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (var_r = new URL(var_e), !(var_i_1 = var_r.searchParams.get("file"))) {
  param_t_1.n = 1;
  break;
  }
  return param_t_1.a(2, var_i_1);
  case 1:
  return param_t_1.a(2, []);
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange(param_t) {
  var var_e,
  var_r = param_t.mediaObject,
  var_n_1 = (null === (var_e = document.querySelector('article h1[data-slot="title"]')) ||
  void 0 === var_e ? void 0 : var_e.textContent) || document.title;
  return var_r.filename = var_n_1, var_r.fixName = var_n_1, "video";
  }
  }
  ],
  default: {
  getUrl: param_t => {
  var var_e,
  var_r = param_t.url,
  var_n_1 = null === (var_e = param_t.node.closest("[data-article-id]")) ||
  void 0 === var_e ? void 0 : var_e.getAttribute("data-article-id");
  return var_n_1 ? obj_a[var_n_1] : var_r;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n_1,
  var_i_1 = param_t.mediaObject,
  var_o = param_t.node;
  return var_i_1.filename = (null === (var_n_1 = null === (var_r = null === (var_e = var_o.closest(
  "[data-article-id]")) || void 0 === var_e ? void 0 : var_e.nextElementSibling) ||
  void 0 === var_r ? void 0 : var_r.innerText) || void 0 === var_n_1 ?
  void 0 : var_n_1.trim()) || document.title, var_i_1.type;
  }
  }
  ,
  addNode: () => ["#article-audio"],
  getCustomElement: () => Array.from(document.querySelectorAll("#article-audio"))
  };
  exportsObj.default = obj_l;
  };
