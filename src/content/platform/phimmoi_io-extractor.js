// Module 311 - Savior Phimmoi_io Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0),
  dep_url_utils = requireFn(3),
  dep_media_constants = requireFn(1),
  dep_media_sniffer = requireFn(6),
  dep_stream_cipher_helper = requireFn(31);
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
  var_l_2 = Object.create(var_u_1.prototype);
  return var_c(var_l_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_1,
  var_u_2,
  num_c = 0,
  var_l_3 = param_i_1 || [],
  flag_f = !1,
  obj_d = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_2,
  f: var_h_2.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_1 = 0, var_u_2 = var_t, obj_d.n = param_r_2, obj_a;
  }
  };
  function var_h_2(param_r_2, param_n_2) {
  for (var_s_1 = param_r_2, var_u_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_3.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_3[var_e],
  var_h_3 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_u_2 = var_o_2[(var_s_1 = var_o_2[4]) ?
  5 : (var_s_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_3 &&
  ((var_i_1 = param_r_2 < 2 && var_h_3 < var_o_2[1]) ? (var_s_1 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_3 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_s_1 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_2(param_l, param_p), var_s_1 = param_l, var_u_2 = param_p;
  (var_e = var_s_1 < 2 ? var_t : var_u_2) || !flag_f;
  ) {
  var_o_1 || (var_s_1 ? var_s_1 < 3 ? (var_s_1 > 1 && (obj_d.n = -1), var_h_2(var_s_1,
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
  (param_r, param_i, param_o), !0), var_l_2;
  }
  var obj_a = {
  };
  function var_s() {
  }
  function var_l_1() {
  }
  function var_f_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_d_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_c(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h_1 = var_f_1.prototype = var_s.prototype = Object.create(var_d_1);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f_1) :
  (param_t.__proto__ = var_f_1, var_c(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h_1), param_t;
  }
  return var_l_1.prototype = var_f_1, var_c(var_h_1, "constructor", var_f_1), var_c(
  var_f_1, "constructor", var_l_1), var_l_1.displayName = "GeneratorFunction", var_c(
  var_f_1, var_i, "GeneratorFunction"), var_c(var_h_1), var_c(var_h_1, var_i, "Generator"),
  var_c(var_h_1, var_n, function () {
  return this;
  }
  ), var_c(var_h_1, "toString", function () {
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
  function var_l(param_t, param_e) {
  return function (param_t_1) {
  if (Array.isArray(param_t_1)) return param_t_1;
  }
  (param_t) || function (param_t_1, param_e_1) {
  var var_r = null == param_t_1 ? null : "undefined" != typeof Symbol &&
  param_t_1[Symbol.iterator] || param_t_1["@@iterator"];
  if (null != var_r) {
  var var_n,
  var_i,
  var_o,
  var_a,
  list_s = [],
  flag_u = !0,
  flag_c = !1;
  try {
  if (var_o = (var_r = var_r.call(param_t_1)).next, 0 === param_e_1) {
  if (Object(var_r) !== var_r) return;
  flag_u = !1;
  }
  else for (;
  !(flag_u = (var_n = var_o.call(var_r)).done) && (list_s.push(var_n.value), list_s.length !== param_e_1);
  flag_u = !0);
  }
  catch (var_t) {
  flag_c = !0, var_i = var_t;
  }
  finally {
  try {
  if (!flag_u && null != var_r.return && (var_a = var_r.return(), Object(var_a) !== var_a)) return;
  }
  finally {
  if (flag_c) throw var_i;
  }
  }
  return list_s;
  }
  }
  (param_t, param_e) || var_d(param_t, param_e) || function () {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  ();
  }
  function var_f(param_t, param_e) {
  var var_r = "undefined" != typeof Symbol && param_t[Symbol.iterator] ||
  param_t["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_t) || (var_r = var_d(param_t)) || param_e &&
  param_t && "number" == typeof param_t.length) {
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
  function var_d(param_t, param_e) {
  if (param_t) {
  if ("string" == typeof param_t) return var_h(param_t, param_e);
  var var_r = {
  }
  .toString.call(param_t).slice(8, -1);
  return "Object" === var_r && param_t.constructor && (var_r = param_t.constructor.name),
  "Map" === var_r || "Set" === var_r ? Array.from(param_t) :
  "Arguments" === var_r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r) ?
  var_h(param_t, param_e) : void 0;
  }
  }
  function var_h(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  var fn_p = function (param_t, param_e, param_r, param_n) {
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
  obj_v = {
  }
  ,
  list_m = [],
  obj_y = {
  siteMatcher: param_t => /^(www\.)?phimmoi\./.test(param_t),
  urls: [...dep_stream_cipher_helper.a.urls, {
  checkUrl: param_t => param_t.url.includes("drive.google.com"),
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_p(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_r, var_a, var_s, var_c_1, var_d_1, var_h_1, var_p, var_v;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (var_r = var_e.split("/"), var_a = (var_r.pop() || var_r.pop()) &&
  var_r.pop(), var_s = `${var_r[0]}//${var_r[2]}/u/0/get_video_info?docid=${var_a}`, list_m.includes(var_s)) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.n = 1, Object(dep_dom_utils.send)("GET", var_s);
  case 1:
  var_c_1 = param_t_1.v.responseText, list_m.push(var_s), var_c_1 = var_c_1.split(
  "&"), var_d_1 = [], var_h_1 = var_f(var_c_1);
  try {
  for (var_h_1.s();
  !(var_p = var_h_1.n()).done;
  ) (var_v = var_p.value).match(/^fmt_stream_map/) && (var_d_1 = decodeURIComponent(
  var_v.split("=")[1]).split(","));
  }
  catch (var_t_1) {
  var_h_1.e(var_t_1);
  }
  finally {
  var_h_1.f();
  }
  return param_t_1.a(2, var_d_1.map(param_t_2 => {
  var var_e_1 = var_l(param_t_2.split("|"), 2),
  var_r_1 = var_e_1[0],
  var_a_1 = var_e_1[1],
  var_s_1 = Object(dep_url_utils.f)(var_a_1),
  var_u_1 = parseInt(var_r_1);
  return 18 === var_u_1 && (var_s_1.resolution = "360p"), 22 === var_u_1 &&
  (var_s_1.resolution = "720p"), var_s_1.quality = Object(dep_dom_utils.i18n)(dep_media_constants.r[var_s_1.resolution].i18n_label),
  var_s_1.ext = "mp4", var_s_1.type = "video", var_s_1;
  }
  ));
  case 2:
  return param_t_1.a(2);
  }
  }
  , var_t);
  }
  ));
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url,
  var_r = param_t.node;
  return "VIDEO" == var_r.nodeName && var_e.startsWith("blob:") &&
  Boolean(var_r.closest("#media-player-box, #watch-block, #block-player"));
  }
  ,
  getUrl: param_t => {
  var var_e,
  var_r,
  var_n = param_t.node,
  var_i = param_t.url,
  var_o = null === (var_e = var_n.closest("#media-player-box, #watch-block, #block-player")) ||
  void 0 === var_e ? void 0 : var_e.parentElement,
  var_a = null === (var_r = null == var_o ? void 0 : var_o.querySelector("a.active")) ||
  void 0 === var_r ? void 0 : var_r.getAttribute("data-link");
  return var_a ? (var_a.startsWith("http") || (var_a = location.origin + var_a),
  var_a) : var_i;
  }
  ,
  mediaObjectChange(param_t) {
  var var_e = param_t.mediaObject;
  if (!var_e.url.startsWith("blob")) return var_e.ext = "m3u8", var_e.exts = ["m3u8"],
  "video";
  }
  }
  ],
  default: {
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_p(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_r;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (!obj_v[var_e]) {
  param_t_1.n = 1;
  break;
  }
  return param_t_1.a(2, obj_v[var_e]);
  case 1:
  return param_t_1.n = 2, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 2:
  if (!(var_r = param_t_1.v) || !var_r.url) {
  param_t_1.n = 3;
  break;
  }
  return var_r.url = var_r.url.map(param_t_2 => (param_t_2.filename = document.title,
  param_t_2)), obj_v[var_e] = var_r.url, param_t_1.a(2, var_r.url);
  case 3:
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
  var_r = param_t.node;
  if (obj_v[var_r.src]) return var_e.ext = "mp4", var_e.exts = ["mp4"], "video";
  }
  }
  ,
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return /\.(m3u8|pdf)/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_p(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_i, var_o, var_s, var_c_1, var_l_1, var_d_1;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (param_t_1.p = 0, var_r.match(/#extm3u/)) {
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
  param_t_1.p = 3, param_t_1.v;
  case 4:
  return param_t_1.n = 5, Object(dep_media_sniffer.e)(var_r, var_e);
  case 5:
  var_i = param_t_1.v, var_o = var_f(var_i), param_t_1.p = 6, var_o.s();
  case 7:
  if ((var_s = var_o.n()).done) {
  param_t_1.n = 14;
  break;
  }
  if (var_c_1 = var_s.value, param_t_1.p = 8, var_c_1.url != var_e.url) {
  param_t_1.n = 9;
  break;
  }
  return var_c_1.play_list = var_r, param_t_1.a(3, 13);
  case 9:
  return param_t_1.n = 10, Object(dep_dom_utils.send)("GET", var_c_1.url);
  case 10:
  if ((var_l_1 = param_t_1.v.responseText).match(/#extm3u/)) {
  param_t_1.n = 11;
  break;
  }
  throw new Error();
  case 11:
  var_c_1.play_list = var_l_1, var_c_1.url = location.href, param_t_1.n = 13;
  break;
  case 12:
  param_t_1.p = 12, param_t_1.v;
  case 13:
  param_t_1.n = 7;
  break;
  case 14:
  param_t_1.n = 16;
  break;
  case 15:
  param_t_1.p = 15, var_d_1 = param_t_1.v, var_o.e(var_d_1);
  case 16:
  return param_t_1.p = 16, var_o.f(), param_t_1.f(16);
  case 17:
  return var_i.forEach(param_t_2 => {
  param_t_2.ext = "m3u8", param_t_2.exts = ["m3u8"];
  }
  ), param_t_1.a(2, var_i);
  }
  }
  , var_t, null, [[8, 12], [6, 15, 16, 17], [0, 3]]);
  }
  ));
  }
  }
  , ...dep_stream_cipher_helper.a.parse.sources]
  }
  };
  exportsObj.default = obj_y;
  };
