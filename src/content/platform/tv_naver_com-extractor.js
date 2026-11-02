// Module 358 - Savior Tv_naver_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_url_utils = requireFn(3),
  dep_media_constants = requireFn(1),
  dep_filename_sanitizer = requireFn(80),
  dep_dom_utils = requireFn(0),
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
  list_f = [],
  obj_d = {
  }
  ,
  str_h = "",
  obj_p = {
  getDomains: () => ["tv.naver.com", "m.naver.com", "brand.naver."],
  parse: {
  sources: [{
  checkSource: () => location.host.includes("tv.naver") || location.host.includes(
  "m.naver"),
  parse: param_t => {
  var var_e = param_t.response;
  if (var_e && !var_e.includes("#EXTM3U")) return JSON.parse(var_e).videos.list.map(
  param_t_1 => {
  var var_e_1 = Object(dep_url_utils.f)(param_t_1.source);
  var_e_1.filename = Object(dep_filename_sanitizer.a)(var_e_1.filename, document.title),
  var_e_1.resolution = param_t_1.encodingOption.name.toLowerCase(), var_e_1.quality = dep_media_constants.r[var_e_1.resolution].label;
  try {
  var_e_1.i18n_quality = Object(dep_dom_utils.i18n)(dep_media_constants.r[var_e_1.resolution].i18n_label) ||
  var_e_1.quality;
  }
  catch (var_t) {
  var_e_1.i18n_quality = var_e_1.quality;
  }
  return var_e_1.type = "video", var_e_1;
  }
  );
  }
  }
  , {
  checkSource: () => !(!location.host.includes("brand.naver") ||
  !str_h),
  parse: param_t => {
  var var_e = param_t.response;
  return fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_r, var_i, var_o, var_a, var_c_1, var_l, var_f, var_d, var_h, var_p, var_v,
  var_m, var_y;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (!var_e || "string" != typeof var_e) {
  param_t_1.n = 3;
  break;
  }
  if (var_l = JSON.parse(var_e), var_f = null === (var_i = null === (var_r = null == var_l ?
  void 0 : var_l.streams) || void 0 === var_r ? void 0 : var_r[0]) ||
  void 0 === var_i ? void 0 : var_i.source, var_d = null === (var_c_1 = null === (
  var_a = null === (var_o = null == var_l ? void 0 : var_l.streams) ||
  void 0 === var_o ? void 0 : var_o[0]) || void 0 === var_a ?
  void 0 : var_a.keys) || void 0 === var_c_1 ? void 0 : var_c_1[0].value, !var_f ||
  !var_d) {
  param_t_1.n = 3;
  break;
  }
  return var_h = `${var_f}?__gda__=${var_d}`, var_p = Object(dep_url_utils.f)(var_h), param_t_1.n = 1, fetch(var_h).then(
  param_t_2 => param_t_2.text());
  case 1:
  return var_v = param_t_1.v, var_m = var_v.replace(/\.m3u8/g, ".m3u8?__gda__=" + var_d),
  param_t_1.n = 2, Object(dep_media_sniffer.e)(var_m, var_p);
  case 2:
  return (var_y = param_t_1.v).forEach(param_t_2 => {
  if (param_t_2.play_list) {
  var var_e_1 = param_t_2.play_list.replace(/\.ts/g, ".ts?__gda__=" + var_d);
  param_t_2.play_list = var_e_1;
  }
  }
  ), param_t_1.a(2, var_y);
  case 3:
  return param_t_1.a(2);
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
  checkUrl: () => !(!location.host.includes("brand.naver") ||
  !str_h),
  getUrl: () => str_h
  }
  , {
  checkUrl: () => location.pathname.startsWith("/l/"),
  getUrl: () => []
  }
  , {
  checkUrl: param_t => "VIDEO" === param_t.node.tagName && "tv.naver.com" === location.host,
  getUrl: () => fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_e, var_r, var_n, var_i, var_o, var_a, var_s;
  return var_u().w(function (param_t) {
  for (;;
  ) switch (param_t.n) {
  case 0:
  if (-1 !== list_f.indexOf(location.href)) {
  param_t.n = 2;
  break;
  }
  return param_t.n = 1, fetch(location.href).then(param_t_1 => param_t_1.text()).catch(
  () => (list_f.push(location.href), ""));
  case 1:
  return var_n = param_t.v, var_i = /\"videoId\"\s*:\s*\"([^"]*)\"/, var_o = null === (
  var_e = /\"inKey\"\s*:\s*\"([^"]*)\"/.exec(var_n)) || void 0 === var_e ?
  void 0 : var_e[1], var_a = null === (var_r = var_i.exec(var_n)) ||
  void 0 === var_r ? void 0 : var_r[1], var_s = `https://apis.naver.com/rmcnmv/rmcnmv/vod/play/v2.0/${var_a}?key=${var_o}`, list_f.push(location.href), obj_d[location.href] = var_s, param_t.a(2,
  var_s);
  case 2:
  return param_t.a(2, obj_d[location.href]);
  case 3:
  return param_t.a(2);
  }
  }
  , var_t);
  }
  )),
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  if (obj_d[location.href]) return var_e.ext = "m3u8", var_e.exts = ["m3u8"], "video";
  }
  }
  , {
  checkUrl: param_t => "VIDEO" === param_t.node.tagName && "m.naver.com" == location.host,
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n,
  var_i,
  var_o = param_t.node,
  var_a = param_t.mediaObject,
  var_s = null === (var_r = null === (var_e = var_o.closest(".section_player")) ||
  void 0 === var_e ? void 0 : var_e.parentElement) || void 0 === var_r ?
  void 0 : var_r.querySelector(".section_info"),
  var_u_1 = null === (var_i = null === (var_n = null == var_s ?
  void 0 : var_s.querySelector(".si_text_area .si_desc")) ||
  void 0 === var_n ? void 0 : var_n.innerText) || void 0 === var_i ?
  void 0 : var_i.trim();
  return var_u_1 && (var_a.filename = var_u_1, var_a.fixName = var_u_1), "video";
  }
  }
  ],
  shouldWidgetAttachToParentNode: param_t => "m.naver.com" == location.host &&
  null != param_t.closest(".section_player"),
  getCustomParent: param_t => "m.naver.com" == location.host ?
  param_t.closest(".section_player") : null,
  processRequestIds: param_t => {
  var var_e = param_t.url;
  return !!/apis\.naver\.com\/.*\/vod\/play.*\?key\=.*/.test(var_e) &&
  (str_h = var_e, !0);
  }
  };
  exportsObj.default = obj_p;
  };
