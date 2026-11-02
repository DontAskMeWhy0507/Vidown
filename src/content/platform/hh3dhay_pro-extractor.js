// Module 243 - Savior Hh3dhay_pro Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_sniffer = requireFn(6),
  dep_dom_utils = requireFn(0),
  dep_media_constants = requireFn(1),
  dep_network_monitor = requireFn(20),
  dep_dailymotion_extractor = requireFn(127),
  dep_dash_parser = requireFn(28),
  dep_url_utils = requireFn(3);
  function var_l(param_t, param_e) {
  var var_r = "undefined" != typeof Symbol && param_t[Symbol.iterator] ||
  param_t["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_t) || (var_r = function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_f(param_t_1, param_e_1);
  var var_r_1 = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r_1 && param_t_1.constructor && (var_r_1 = param_t_1.constructor.name),
  "Map" === var_r_1 || "Set" === var_r_1 ? Array.from(param_t_1) :
  "Arguments" === var_r_1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r_1) ?
  var_f(param_t_1, param_e_1) : void 0;
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
  function var_f(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  function var_d() {
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
  var_c_1 = Object.create(var_u_1.prototype);
  return var_h(var_c_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_1,
  var_u_2,
  num_c = 0,
  var_l_2 = param_i_1 || [],
  flag_f = !1,
  obj_d = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_1,
  f: var_h_1.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_1 = 0, var_u_2 = var_t, obj_d.n = param_r_2, obj_a;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_s_1 = param_r_2, var_u_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
  var_h_2 = obj_d.p,
  var_p_2 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_2 === param_n_2) && (var_u_2 = var_o_2[(var_s_1 = var_o_2[4]) ?
  5 : (var_s_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_s_1 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_2 < var_p_2 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_2) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_2, var_s_1 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_s_1 = param_l, var_u_2 = param_p;
  (var_e = var_s_1 < 2 ? var_t : var_u_2) || !flag_f;
  ) {
  var_o_1 || (var_s_1 ? var_s_1 < 3 ? (var_s_1 > 1 && (obj_d.n = -1), var_h_1(var_s_1,
  var_u_2)) : obj_d.n = var_u_2 : obj_d.v = var_u_2);
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
  else if ((var_e = (flag_f = obj_d.n < 0) ? var_u_2 : param_r_1.call(param_n_1,
  obj_d)) !== obj_a) break;
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
  (param_r, param_i, param_o), !0), var_c_1;
  }
  var obj_a = {
  };
  function var_s() {
  }
  function var_u() {
  }
  function var_c() {
  }
  var_e = Object.getPrototypeOf;
  var var_l_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_h(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_f_1 = var_c.prototype = var_s.prototype = Object.create(var_l_1);
  function var_p_1(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_c) :
  (param_t.__proto__ = var_c, var_h(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_f_1), param_t;
  }
  return var_u.prototype = var_c, var_h(var_f_1, "constructor", var_c), var_h(var_c,
  "constructor", var_u), var_u.displayName = "GeneratorFunction", var_h(var_c, var_i,
  "GeneratorFunction"), var_h(var_f_1), var_h(var_f_1, var_i, "Generator"), var_h(
  var_f_1, var_n, function () {
  return this;
  }
  ), var_h(var_f_1, "toString", function () {
  return "[object Generator]";
  }
  ), (var_d = function () {
  return {
  w: var_o,
  m: var_p_1
  };
  }
  )();
  }
  function var_h(param_t, param_e, param_r, param_n) {
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
  (var_h = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_h(param_t_1, param_e_2, function (param_t_2) {
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
  var var_p,
  fn_v = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a(param_t_1) {
  try {
  var_u(param_n.next(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_s(param_t_1) {
  try {
  var_u(param_n.throw(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_u(param_t_1) {
  var var_e;
  param_t_1.done ? param_i(param_t_1.value) : (var_e = param_t_1.value, var_e instanceof param_r ?
  var_e : new param_r(function (param_t_2) {
  param_t_2(var_e);
  }
  )).then(var_a, var_s);
  }
  var_u((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  }
  ,
  obj_m = {
  getDomains: () => ["hh3dhay.", "hhhtq.", "hhtqvietsub."],
  parse: {
  sources: [...((null === (var_p = dep_network_monitor.a.parse) ||
  void 0 === var_p ? void 0 : var_p.sources) || []), {
  checkSource: param_t => {
  var var_e = param_t.url;
  return /dailymotion\.com\/player/i.test(var_e);
  }
  ,
  parse: dep_dailymotion_extractor.default.parse.default
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(Object(dep_dom_utils.getVideoId)(var_e));
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return dep_dash_parser.a.parse(Object(dep_dom_utils.getVideoId)(var_e.url));
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return /playhh3dhay.xyz\/cdn\/hls\/.+\/master\.txt/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_v(void 0, void 0, void 0, var_d().m(function var_t() {
  var var_a, var_s;
  return var_d().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  return param_t_1.p = 0, param_t_1.n = 1, Object(dep_media_sniffer.e)(var_r, var_e);
  case 1:
  return var_a = param_t_1.v, param_t_1.n = 2, Promise.allSettled(var_a.map(param_t_2 => Object(
  dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: param_t_2.url
  }
  }
  ).then(param_t_3 => param_t_3.url)));
  case 2:
  return var_s = param_t_1.v, var_a.forEach((param_t_2, param_e) => {
  "fulfilled" == var_s[param_e].status && (param_t_2.play_list = var_s[param_e].value);
  }
  ), param_t_1.a(2, var_a);
  case 3:
  return param_t_1.p = 3, param_t_1.v, param_t_1.a(2, []);
  }
  }
  , var_t, null, [[0, 3]]);
  }
  ));
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return /([a-z0-9\-_]+\.)?cliphub\.[a-z0-9\.\-]+\/videos/i.test(var_e);
  }
  ,
  parse(param_t) {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_v(this, void 0, void 0, var_d().m(function var_t() {
  var var_n, var_i, var_o;
  return var_d().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (param_t_1.p = 0, var_r) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.n = 1, fetch(var_e.url).then(param_t_2 => param_t_2.text());
  case 1:
  var_r = param_t_1.v;
  case 2:
  param_t_1.n = 4;
  break;
  case 3:
  return param_t_1.p = 3, param_t_1.v, param_t_1.a(2, []);
  case 4:
  if (param_t_1.p = 4, var_n = JSON.parse(var_r), var_i = atob(var_n.pl[0] + var_n.pl.slice(
  1).split("").reverse().join(""))) {
  param_t_1.n = 5;
  break;
  }
  throw new Error("");
  case 5:
  return var_o = Object.assign(Object.assign({
  }
  , var_e), {
  url: var_e.url,
  filename: var_e.fixName,
  play_list: var_i
  }
  ), param_t_1.a(2, [var_o]);
  case 6:
  return param_t_1.p = 6, param_t_1.v, param_t_1.a(2, []);
  }
  }
  , var_t, null, [[4, 6], [0, 3]]);
  }
  ));
  }
  }
  , {
  checkSource: param_t => param_t.url.includes("syntheticvideo.xyz/players/sources"),
  parse: param_t => {
  var var_e,
  var_r = param_t.media,
  var_n = param_t.response;
  try {
  var var_i = JSON.parse(var_n, (param_t_1, param_e) => {
  if ("source" == param_t_1) {
  console.log({
  key: param_t_1,
  value: param_e
  }
  );
  try {
  return JSON.parse(param_e);
  }
  catch (var_t) {
  return param_e;
  }
  }
  return param_e;
  }
  ),
  var_o = (null === (var_e = null == var_i ? void 0 : var_i.message) ||
  void 0 === var_e ? void 0 : var_e.source) || (null == var_i ?
  void 0 : var_i.source);
  if (!var_o) return [];
  if ("string" == typeof var_o) {
  var var_a = Object(dep_url_utils.f)(var_o);
  return var_a.filename = var_r.filename, var_a.type = "video", [var_a];
  }
  return var_o.map(param_t_1 => {
  var var_e_1 = param_t_1.file,
  var_n_1 = param_t_1.label;
  return Object.assign(Object.assign({
  }
  , var_r), {
  url: var_e_1,
  quality: var_n_1,
  i18n_quality: var_n_1,
  type: "video"
  }
  );
  }
  );
  }
  catch (var_t) {
  return [];
  }
  }
  }
  ]
  }
  ,
  urls: [...(dep_network_monitor.a.urls || []), ...(dep_dailymotion_extractor.default.urls ||
  []), {
  checkUrl: param_t => {
  var var_e = param_t.node,
  var_r = param_t.url;
  return "IFRAME" == var_e.nodeName && var_r.includes("scontent-sin2");
  }
  ,
  getUrl: param_t => {
  param_t.node;
  var var_e,
  var_r = var_l(param_t.ids);
  try {
  for (var_r.s();
  !(var_e = var_r.n()).done;
  ) {
  var var_n = var_e.value;
  if (var_n.url.includes("/stream")) return var_n.url;
  }
  }
  catch (var_t) {
  var_r.e(var_t);
  }
  finally {
  var_r.f();
  }
  return [];
  }
  ,
  mediaObjectChange: param_t => (param_t.mediaObject.filename = document.title, "video")
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.node,
  var_r = param_t.url;
  return "IFRAME" == var_e.nodeName && /([a-z0-9\-_]+\.)?cliphub\./i.test(var_r);
  }
  ,
  getUrl(param_t) {
  var var_e,
  var_r,
  var_n,
  var_i,
  var_o,
  var_a = param_t.node,
  var_s = param_t.ids.find(param_t_1 => /([a-z0-9\-_]+\.)?cliphub\.[a-z0-9\.\-]+\/videos/i.test(
  param_t_1.url));
  if (!var_s) return [];
  var var_u = var_a.closest(".myui-player__item") || document.querySelector(".myui-player__item"),
  var_c = (null === (var_r = null === (var_e = null == var_u ?
  void 0 : var_u.querySelector("h3.title")) || void 0 === var_e ?
  void 0 : var_e.innerText) || void 0 === var_r ? void 0 : var_r.trim()) ||
  document.title,
  var_l_1 = null === (var_o = null === (var_i = null === (var_n = document.querySelector(
  "#playlist, ul.playlist")) || void 0 === var_n ? void 0 : var_n.querySelector(
  "li.active")) || void 0 === var_i ? void 0 : var_i.innerText) ||
  void 0 === var_o ? void 0 : var_o.trim();
  return var_s.fixName = `${var_c}- ${var_l_1 || Date.now()}`, var_s.ext = "m3u8", var_s.exts = ["m3u8"], var_s.type = "video", [var_s];
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.node,
  var_r = param_t.url;
  return "IFRAME" == var_e.nodeName && /([a-z0-9\-_]+\.)?syntheticvideo\./i.test(
  var_r);
  }
  ,
  getUrl(param_t) {
  var var_e,
  var_r = null === (var_e = param_t.url.match(/syntheticvideo\.[a-z0-9\.\-]+\/v\/[a-z0-9\-_]{15}(\d+)/i)) ||
  void 0 === var_e ? void 0 : var_e[1];
  return var_r ? "https://syntheticvideo.xyz/players/sources?videoId=" + var_r :
  [];
  }
  ,
  mediaObjectChange(param_t) {
  var var_e = param_t.mediaObject;
  var_e.ext = "m3u8", var_e.exts = ["m3u8"], var_e.type = "video", var_e.filename = document.title,
  var_e.requestMethod = "POST";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.node,
  var_r = param_t.url;
  return "IFRAME" == var_e.nodeName && /([a-z0-9\-_]+\.)?hh3dhay\..+\/play-hls-v2\/play\/[a-z0-9\-_]+\.m3u8/i.test(
  var_r);
  }
  ,
  getUrl(param_t) {
  var var_e = param_t.url,
  var_r = new URL(var_e),
  var_n = var_r.pathname.split("/");
  return var_n[2] = "read", var_r.pathname = var_n.join("/"), var_r.toString();
  }
  ,
  mediaObjectChange(param_t) {
  var var_e = param_t.mediaObject;
  var_e.ext = "m3u8", var_e.exts = ["m3u8"], var_e.type = "video";
  }
  }
  ]
  };
  exportsObj.default = obj_m;
  };
