// Module 20 - Savior Network Monitor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.d(exportsObj, "b", function () {
  return var_v;
  }
  ), requireFn.d(exportsObj, "c", function () {
  return var_m;
  }
  );
  var dep_dom_utils = requireFn(0),
  dep_media_constants = requireFn(1),
  dep_url_utils = requireFn(3),
  dep_format_resolver = requireFn(14),
  dep_media_sniffer = requireFn(6);
  function var_u() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_u_1 = param_n && param_n.prototype instanceof var_s ?
  param_n : var_s,
  var_l_1 = Object.create(var_u_1.prototype);
  return var_c(var_l_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_1,
  var_u_2,
  num_c = 0,
  var_l_2 = param_i_1 || [],
  flag_f = !1,
  obj_d_1 = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_1,
  f: var_h_1.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_1 = 0, var_u_2 = var_t, obj_d_1.n = param_r_2,
  obj_a;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_s_1 = param_r_2, var_u_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
  var_h_2 = obj_d_1.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_u_2 = var_o_2[(var_s_1 = var_o_2[4]) ?
  5 : (var_s_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_s_1 = 0, obj_d_1.v = param_n_2,
  obj_d_1.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d_1.n = var_p_1, var_s_1 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_s_1 = param_l, var_u_2 = param_p;
  (var_e = var_s_1 < 2 ? var_t : var_u_2) || !flag_f;
  ) {
  var_o_1 || (var_s_1 ? var_s_1 < 3 ? (var_s_1 > 1 && (obj_d_1.n = -1), var_h_1(
  var_s_1, var_u_2)) : obj_d_1.n = var_u_2 : obj_d_1.v = var_u_2);
  try {
  if (num_c = 2, var_o_1) {
  if (var_s_1 || (param_i_2 = "next"), var_e = var_o_1[param_i_2]) {
  if (!(var_e = var_e.call(var_o_1, var_u_2))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_u_2 = var_e.value, var_s_1 < 2 && (var_s_1 = 0);
  }
  else 1 === var_s_1 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_s_1 < 2 &&
  (var_u_2 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_s_1 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d_1.n < 0) ? var_u_2 : param_r_1.call(param_n_1,
  obj_d_1)) !== obj_a) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_s_1 = 1, var_u_2 = var_e_1;
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
  (param_r, param_i, param_o), !0), var_l_1;
  }
  var obj_a = {
  };
  function var_s() {
  }
  function var_l() {
  }
  function var_f() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_c(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f.prototype = var_s.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_c(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l.prototype = var_f, var_c(var_h, "constructor", var_f), var_c(var_f,
  "constructor", var_l), var_l.displayName = "GeneratorFunction", var_c(var_f, var_i,
  "GeneratorFunction"), var_c(var_h), var_c(var_h, var_i, "Generator"), var_c(var_h,
  var_n, function () {
  return this;
  }
  ), var_c(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_u = function () {
  return {
  w: var_o,
  m: var_p
  };
  }
  )();
  }
  function var_c(param_t, param_e, param_r, param_n) {
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
  (var_c = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_c(param_t_1, param_e_2, function (param_t_2) {
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
  var fn_l = function (param_t, param_e, param_r, param_n) {
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
  obj_f = {
  mobile: "144p",
  lowest: "240p",
  low: "360p",
  sd: "480p",
  hd: "720p",
  full: "1080p"
  }
  ,
  obj_d = {
  }
  ,
  obj_h = {
  }
  ,
  list_p = [];
  function var_v(param_t, param_e) {
  var var_r = param_e || function (param_t_1) {
  try {
  var var_e = (null == param_t_1 ? void 0 : param_t_1.closest('div[data-options][data-module="OKVideo"]')) ||
  (null == param_t_1 ? void 0 : param_t_1.closest("div[data-options]")) ||
  document.querySelectorAll("div[data-options]")[0],
  var_r_1 = (null == var_e ? void 0 : var_e.dataset.options) ||
  "",
  var_n = JSON.parse(var_r_1),
  var_i = var_n.flashvars.metadata;
  return var_i ? JSON.parse(var_i) : var_n.flashvars.metadataUrl;
  }
  catch (var_t) {
  return null;
  }
  }
  (param_t);
  if (var_r) return "string" == typeof var_r ? decodeURIComponent(var_r) :
  {
  dashXML: var_r.metadataEmbedded,
  dashUrl: var_r.metadataUrl || var_r.ondemandDash,
  hlsUrl: var_r.hlsManifestUrl,
  metaData: var_r
  };
  }
  function var_m(param_t) {
  return "string" == typeof param_t ? (list_p.push(param_t), obj_h[param_t] = param_t,
  param_t) : (null == param_t ? void 0 : param_t.hlsUrl) ? (obj_h[param_t.hlsUrl] = param_t,
  null == param_t ? void 0 : param_t.hlsUrl) : (null == param_t ?
  void 0 : param_t.dashUrl) ? (obj_h[param_t.dashUrl] = param_t, param_t.dashUrl) :
  void 0;
  }
  var fn_y = param_t => {
  var var_e,
  var_r,
  var_n,
  var_i,
  var_o,
  var_a,
  var_s,
  var_u_1,
  var_c_1,
  var_l,
  var_f = null === (var_i = null === (var_n = null === (var_r = null === (var_e = param_t.closest(
  "[data-options]")) || void 0 === var_e ? void 0 : var_e.querySelector(".vid-card_player")) ||
  void 0 === var_r ? void 0 : var_r.getAttribute("aria-label")) ||
  void 0 === var_n ? void 0 : var_n.trim()) || void 0 === var_i ?
  void 0 : var_i.replace(/video player,? ?/i, "");
  return var_f || (var_f = (null === (var_s = null === (var_a = null === (var_o = param_t.closest(
  ".feed")) || void 0 === var_o ? void 0 : var_o.querySelector(".media-text")) ||
  void 0 === var_a ? void 0 : var_a.innerText) || void 0 === var_s ?
  void 0 : var_s.trim()) || (null === (var_l = null === (var_c_1 = null === (var_u_1 = param_t.closest(
  ".feed")) || void 0 === var_u_1 ? void 0 : var_u_1.querySelector(".feed-info-title")) ||
  void 0 === var_c_1 ? void 0 : var_c_1.innerText) || void 0 === var_l ?
  void 0 : var_l.trim())) || document.title;
  }
  ,
  obj_g = {
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return obj_h.hasOwnProperty(var_e) || list_p.includes(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return Array.isArray(var_r) ? var_r : function (param_t_1, param_e, param_r) {
  var var_c_1, var_d;
  return fn_l(this, void 0, void 0, var_u().m(function var_l() {
  var var_h, var_p, var_y, var_g, var_b, var_w, var_A, var__, var_E, var_S, var_O,
  var_x, var_k, var_M, var_T, var_I, var_j;
  return var_u().w(function (param_u) {
  for (;;
  ) switch (param_u.p = param_u.n) {
  case 0:
  if (param_t_1) {
  param_u.n = 1;
  break;
  }
  return param_u.a(2, []);
  case 1:
  if ("string" != typeof param_t_1) {
  param_u.n = 9;
  break;
  }
  param_u.p = 2, var_h = JSON.parse(param_r), param_u.n = 7;
  break;
  case 3:
  return param_u.p = 3, param_u.v, param_u.p = 4, param_u.n = 5, fetch(param_t_1,
  {
  method: "POST"
  }
  ).then(param_t_2 => param_t_2.json());
  case 5:
  var_p = param_u.v, var_h = var_v(void 0, var_p), (var_y = var_m(var_h)) &&
  (param_e ? param_e.url = var_y : param_e = Object(dep_url_utils.f)(var_y), param_r = void 0),
  param_u.n = 7;
  break;
  case 6:
  return param_u.p = 6, param_u.v, param_u.a(2, []);
  case 7:
  if (var_h) {
  param_u.n = 8;
  break;
  }
  return param_u.a(2, []);
  case 8:
  param_u.n = 10;
  break;
  case 9:
  var_h = param_t_1;
  case 10:
  if (var_g = var_h.metaData, !(null === (var_c_1 = var_g.videos) ||
  void 0 === var_c_1 ? void 0 : var_c_1.length)) {
  param_u.n = 11;
  break;
  }
  return param_u.a(2, var_g.videos.map(param_t_2 => {
  var var_r_1,
  var_n,
  var_a = new URL(param_t_2.url),
  var_s = Object(dep_url_utils.f)(var_a.href),
  var_u_1 = obj_f[param_t_2.name];
  return var_s.ext = "mp4", var_s.exts = ["mp4"], var_s.type = "video", var_s.resolution = var_u_1,
  var_s.quality = null === (var_r_1 = dep_media_constants.r[var_u_1]) ||
  void 0 === var_r_1 ? void 0 : var_r_1.label, var_s.filename = (null === (var_n = var_g.movie) ||
  void 0 === var_n ? void 0 : var_n.title) || var_g.compilationTitle ||
  (null == param_e ? void 0 : param_e.fixName), var_s;
  }
  ));
  case 11:
  if (!(var_w = var_h.hlsUrl)) {
  param_u.n = 18;
  break;
  }
  if (param_u.p = 12, var_b = new URL(var_w).origin, var_h.hlsUrl != (null == param_e ?
  void 0 : param_e.url) || !param_r) {
  param_u.n = 13;
  break;
  }
  var_A = param_r, param_u.n = 15;
  break;
  case 13:
  return param_u.n = 14, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: var_w
  }
  }
  );
  case 14:
  var_A = param_u.v, param_e || (param_e = Object(dep_url_utils.f)(var_w)), param_e.type = "video",
  param_e.hls = !0, param_e.ext = "mp4", param_e.url = var_w;
  case 15:
  return param_u.n = 16, Object(dep_media_sniffer.e)(var_A, param_e);
  case 16:
  return var__ = param_u.v.map(param_t_2 => {
  try {
  for (var var_e_1 = new URL(param_t_2.url), var_r_1 = var_e_1.pathname.substring(
  1).split("/"), list_n = [], num_i = 0, var_o = var_r_1.length;
  num_i < var_o;
  num_i += 2) list_n.push([var_r_1[num_i], var_r_1[num_i + 1]]);
  var_e_1.pathname = "/?" + list_n.map(param_t_3 => param_t_3.join("=")).join("&"),
  var_e_1.searchParams.set("ct", "21"), param_t_2.url = var_e_1.href;
  }
  catch (var_t) {
  }
  return param_t_2;
  }
  ), param_u.a(2, var__);
  case 17:
  param_u.p = 17, var_T = param_u.v, console.warn("Caught", var_T);
  case 18:
  if (var_E = var_h.dashXML, var_S = var_h.dashUrl || "", param_u.p = 19, var_b = new URL(
  var_S).origin, var_E) {
  param_u.n = 22;
  break;
  }
  if (var_S != (null == param_e ? void 0 : param_e.url) || !param_r) {
  param_u.n = 20;
  break;
  }
  var_E = param_r, param_u.n = 22;
  break;
  case 20:
  return param_u.n = 21, fetch(var_S).then(param_t_2 => param_t_2.text());
  case 21:
  var_E = param_u.v;
  case 22:
  param_u.n = 24;
  break;
  case 23:
  param_u.p = 23, var_I = param_u.v, console.warn("Caught", var_I);
  case 24:
  if (param_u.p = 24, !(var_O = Object(dep_format_resolver.b)(var_E, (null === (
  var_d = var_g.movie) || void 0 === var_d ? void 0 : var_d.title) ||
  var_g.compilationTitle, var_b, var_S))) {
  param_u.n = 25;
  break;
  }
  return param_u.a(2, var_O.map(param_t_2 => (param_t_2.ext = "mp4", param_t_2.type = "video",
  param_t_2.exts = ["mp4"], param_t_2)));
  case 25:
  param_u.n = 27;
  break;
  case 26:
  param_u.p = 26, var_j = param_u.v, console.warn(var_j);
  case 27:
  return var_x = new DOMParser(), var_k = var_x.parseFromString(var_E, "text/xml"),
  var_M = [...var_k.getElementsByTagName("Representation")], param_u.a(2, var_M.filter(
  param_t_2 => {
  var var_e_1 = param_t_2.getAttribute("height");
  return !(!var_e_1 || "null" == var_e_1);
  }
  ).map(param_t_2 => {
  var var_e_1,
  var_r_1,
  var_a,
  var_s = param_t_2.getElementsByTagName("BaseURL")[0].childNodes[0].nodeValue ||
  "";
  var_s.startsWith("http") || (var_s = var_b + var_s);
  var var_u_1 = Object(dep_url_utils.f)(var_s);
  var_u_1.ext = "mp4", var_u_1.type = "video", var_u_1.exts = ["mp4"];
  var var_c_2 = param_t_2.getAttribute("height");
  var_c_2 && "null" != var_c_2 || (var_c_2 = "480");
  var var_l_1 = var_c_2 + "p";
  var_u_1.resolution = var_l_1, var_u_1.quality = null === (var_e_1 = dep_media_constants.r[var_l_1]) ||
  void 0 === var_e_1 ? void 0 : var_e_1.label;
  try {
  var_u_1.i18n_quality = Object(dep_dom_utils.i18n)(null === (var_r_1 = dep_media_constants.r[var_l_1]) ||
  void 0 === var_r_1 ? void 0 : var_r_1.i18n_label) || var_u_1.quality;
  }
  catch (var_t) {
  var_u_1.i18n_quality = var_u_1.quality;
  }
  return var_u_1.filename = (null === (var_a = var_g.movie) ||
  void 0 === var_a ? void 0 : var_a.title) || var_g.compilationTitle, var_u_1;
  }
  ));
  }
  }
  , var_l, null, [[24, 26], [19, 23], [12, 17], [4, 6], [2, 3]]);
  }
  ));
  }
  (obj_h[var_e.url], var_e, var_r).then(param_t_1 => ("ok6-30.vkuser.net" == var_e.host &&
  param_t_1.forEach(param_t_2 => param_t_2.removeOrigin = !0), param_t_1));
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: param_t => param_t.url.includes("://ok.ru/video"),
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_r, var_o;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (obj_d[var_e]) {
  param_t_1.n = 3;
  break;
  }
  return param_t_1.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 1:
  if (!(var_r = param_t_1.v) || !var_r.url) {
  param_t_1.n = 2;
  break;
  }
  return var_o = var_r.url, param_t_1.a(2, var_m(var_o));
  case 2:
  param_t_1.n = 4;
  break;
  case 3:
  return param_t_1.a(2, var_e);
  case 4:
  return param_t_1.a(2);
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = param_t.node.src;
  if (obj_d[var_r]) return var_e.nodeSrc = var_r, var_e.ext = "mp4", var_e.exts = ["mp4"],
  "video";
  }
  }
  , {
  checkUrl: param_t => param_t.node.matches('video[class*="gif"]'),
  getUrl: param_t => {
  var var_e = param_t.node;
  return fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_r, var_n, var_i;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return var_r = var_e.src, var_n = Object(dep_url_utils.f)(var_r), (var_i = fn_y(
  var_e)) && (var_n.filename = var_i, var_n.fixName = var_i), var_n.ext = "mp4",
  var_n.exts = ["mp4"], var_n.type = "video", param_t_1.a(2, [var_n]);
  }
  }
  , var_t);
  }
  ));
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.node;
  return "IFRAME" == var_e.nodeName && var_e.src.includes("javascript:");
  }
  ,
  getUrl: () => []
  }
  , {
  checkUrl: () => {
  var var_t;
  return (null === (var_t = document.querySelectorAll("div[data-options]")) ||
  void 0 === var_t ? void 0 : var_t.length) > 0;
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.node;
  return fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_r;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return var_r = var_v(var_e), param_t_1.a(2, var_m(var_r));
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = param_t.node;
  list_p.includes(var_e.url) && (var_e.requestMethod = "POST");
  var var_n = fn_y(var_r);
  return var_n && (var_e.filename = var_n, var_e.fixName = var_n), var_e.ext = "mp4",
  var_e.exts = ["mp4"], "video";
  }
  }
  ]
  };
  exportsObj.a = obj_g;
  };
