// Module 198 - Savior Animehay Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_sniffer = requireFn(6),
  dep_dom_utils = requireFn(0),
  dep_media_constants = requireFn(1);
  function var_a() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_a_1 = param_n && param_n.prototype instanceof var_c_1 ?
  param_n : var_c_1,
  var_l_2 = Object.create(var_a_1.prototype);
  return var_s(var_l_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_a_2,
  var_s_1,
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
  return var_o_1 = param_e, var_a_2 = 0, var_s_1 = var_t, obj_d.n = param_r_2, obj_u;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_a_2 = param_r_2, var_s_1 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_3.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_3[var_e],
  var_h_2 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_s_1 = var_o_2[(var_a_2 = var_o_2[4]) ?
  5 : (var_a_2 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_a_2 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_a_2 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_u;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_a_2 = param_l, var_s_1 = param_p;
  (var_e = var_a_2 < 2 ? var_t : var_s_1) || !flag_f;
  ) {
  var_o_1 || (var_a_2 ? var_a_2 < 3 ? (var_a_2 > 1 && (obj_d.n = -1), var_h_1(var_a_2,
  var_s_1)) : obj_d.n = var_s_1 : obj_d.v = var_s_1);
  try {
  if (num_c = 2, var_o_1) {
  if (var_a_2 || (param_i_2 = "next"), var_e = var_o_1[param_i_2]) {
  if (!(var_e = var_e.call(var_o_1, var_s_1))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_s_1 = var_e.value, var_a_2 < 2 && (var_a_2 = 0);
  }
  else 1 === var_a_2 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_a_2 < 2 &&
  (var_s_1 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_a_2 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d.n < 0) ? var_s_1 : param_r_1.call(param_n_1,
  obj_d)) !== obj_u) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_a_2 = 1, var_s_1 = var_e_1;
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
  var obj_u = {
  };
  function var_c_1() {
  }
  function var_l_1() {
  }
  function var_f() {
  }
  var_e = Object.getPrototypeOf;
  var var_d_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_s(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f.prototype = var_c_1.prototype = Object.create(var_d_1);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_s(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l_1.prototype = var_f, var_s(var_h, "constructor", var_f), var_s(var_f,
  "constructor", var_l_1), var_l_1.displayName = "GeneratorFunction", var_s(var_f,
  var_i, "GeneratorFunction"), var_s(var_h), var_s(var_h, var_i, "Generator"), var_s(
  var_h, var_n, function () {
  return this;
  }
  ), var_s(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_a = function () {
  return {
  w: var_o,
  m: var_p
  };
  }
  )();
  }
  function var_s(param_t, param_e, param_r, param_n) {
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
  (var_s = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_s(param_t_1, param_e_2, function (param_t_2) {
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
  var var_u,
  var_c,
  var_l,
  fn_f = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a_1(param_t_1) {
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
  )).then(var_a_1, var_s_1);
  }
  var_u_1((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  }
  ,
  var_d = null === (var_u = document.querySelector("#list_sv .bg-green, #list_sv .active")) ||
  void 0 === var_u ? void 0 : var_u.getAttribute("name"),
  num_h = 0,
  obj_p = {
  };
  function var_v(param_t) {
  var var_e;
  return fn_f(this, void 0, void 0, var_a().m(function var_r() {
  var var_n, var_s_1, var_u_1, var_c_1;
  return var_a().w(function (param_r) {
  for (;;
  ) switch (param_r.p = param_r.n) {
  case 0:
  if (!obj_p[param_t]) {
  param_r.n = 1;
  break;
  }
  return param_r.a(2, obj_p[param_t]);
  case 1:
  return param_r.p = 1, param_r.n = 2, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: param_t
  }
  }
  );
  case 2:
  if (var_u_1 = var_e = param_r.v, var_s_1 = null === var_u_1) {
  param_r.n = 3;
  break;
  }
  var_s_1 = void 0 === var_e;
  case 3:
  if (!var_s_1) {
  param_r.n = 4;
  break;
  }
  var_c_1 = void 0, param_r.n = 5;
  break;
  case 4:
  var_c_1 = var_e.url;
  case 5:
  return var_n = var_c_1, obj_p[param_t] = var_n, param_r.a(2, var_n);
  case 6:
  return param_r.p = 6, param_r.v, param_r.a(2, null);
  }
  }
  , var_r, null, [[1, 6]]);
  }
  ));
  }
  var obj_m = {
  getDomains: () => ["animehay."],
  forceUpdate() {
  var var_t,
  var_e = null === (var_t = document.querySelector("#list_sv .bg-green, #list_sv .active")) ||
  void 0 === var_t ? void 0 : var_t.getAttribute("name");
  var_e != var_d && (var_d = var_e, EE.emit("widget.forceUpdate"), num_h++);
  }
  ,
  parse: {
  sources: [{
  checkSource: param_t => param_t.url.includes("ssplay."),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_f(void 0, void 0, void 0, var_a().m(function var_t() {
  return var_a().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return var_e.url = var_c.url, param_t_1.a(2, Object(dep_media_sniffer.e)(var_r,
  var_e));
  }
  }
  , var_t);
  }
  ));
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return /(playlist|master)\.(m3u8|txt)/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_f(void 0, void 0, void 0, var_a().m(function var_t() {
  var var_i, var_s_1;
  return var_a().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, Object(dep_media_sniffer.e)(var_r, var_e);
  case 1:
  return var_i = param_t_1.v, param_t_1.n = 2, Promise.all(var_i.map(param_t_2 => new Promise(
  param_n => "object" == typeof param_t_2.url ? param_n(Promise.all([var_v(param_t_2.url.videoUrl),
  var_v(param_t_2.url.audioUrl)]).then(param_t_3 => ({
  videoUrl: param_t_3[0],
  audioUrl: param_t_3[1]
  }
  ))) : [var_e.url, "https://google.com"].includes(param_t_2.url) ?
  param_n(var_r) : param_n(var_v(param_t_2.url)))));
  case 2:
  return var_s_1 = param_t_1.v, param_t_1.a(2, var_i.map((param_t_2, param_e) => (
  "string" == typeof param_t_2.url && (param_t_2.ext = "m3u8", param_t_2.play_list = var_s_1[param_e] ||
  obj_p[param_t_2.url] || param_t_2.play_list), "audio" == param_t_2.type &&
  (param_t_2.ext = "mp3", param_t_2.exts = ["m3u8"], param_t_2.soundOnly = !0, param_t_2.resolution = "128kbps",
  param_t_2.quality = dep_media_constants.r["480p"].label, param_t_2._hls = !0),
  param_t_2)));
  }
  }
  , var_t);
  }
  ));
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: param_t => param_t.url.includes("ssplay."),
  getUrl: param_t => {
  var var_e = param_t.url;
  return var_c ? var_e : [];
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = param_t.node;
  return var_e.ext = "m3u8", var_e.exts = ["m3u8"], var_e.cacheUrl = var_r.src, "video";
  }
  }
  ],
  default: {
  getUrl: param_t => {
  var var_e = param_t.ids,
  var_r = param_t.url;
  if (var_l) return var_l.url;
  if (num_h > -1) try {
  return var_e[num_h].url;
  }
  catch (var_t) {
  return [];
  }
  return var_e.length ? var_e[var_e.length - 1].url : var_r;
  }
  ,
  mediaObjectChange(param_t) {
  var var_e,
  var_r = param_t.mediaObject;
  return (null === (var_e = var_r.filename) || void 0 === var_e ?
  void 0 : var_e.match(/(playlist|master)\.(txt|m3u8)/)) || var_r.url.match(/(playlist|master)\.(txt|m3u8)/) ?
  (var_r.ext = "m3u8", var_r.exts = ["m3u8"], "video") : var_r.type;
  }
  }
  ,
  processRequestIds: param_t => "TOK" == var_d && param_t.url.includes(".m3u8") ?
  (var_l = param_t, !0) : param_t.url.includes("ssplay.") ? (var_c = param_t, !0) :
  void 0
  };
  exportsObj.default = obj_m;
  };
