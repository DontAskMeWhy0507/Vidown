// Module 262 - Savior Keeng_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0),
  dep_media_sniffer = requireFn(6),
  dep_url_utils = requireFn(3),
  dep_media_constants = requireFn(1);
  function var_s() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_s_1 = param_n && param_n.prototype instanceof var_c ?
  param_n : var_c,
  var_l_1 = Object.create(var_s_1.prototype);
  return var_u(var_l_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_2,
  var_u_1,
  num_c = 0,
  var_l_2 = param_i_1 || [],
  flag_f = !1,
  obj_d = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_2,
  f: var_h_2.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_2 = 0, var_u_1 = var_t, obj_d.n = param_r_2, obj_a;
  }
  };
  function var_h_2(param_r_2, param_n_2) {
  for (var_s_2 = param_r_2, var_u_1 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
  var_h_3 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_u_1 = var_o_2[(var_s_2 = var_o_2[4]) ?
  5 : (var_s_2 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_3 &&
  ((var_i_1 = param_r_2 < 2 && var_h_3 < var_o_2[1]) ? (var_s_2 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_3 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_s_2 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_2(param_l, param_p), var_s_2 = param_l, var_u_1 = param_p;
  (var_e = var_s_2 < 2 ? var_t : var_u_1) || !flag_f;
  ) {
  var_o_1 || (var_s_2 ? var_s_2 < 3 ? (var_s_2 > 1 && (obj_d.n = -1), var_h_2(var_s_2,
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
  (param_r, param_i, param_o), !0), var_l_1;
  }
  var obj_a = {
  };
  function var_c() {
  }
  function var_l() {
  }
  function var_f() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_u(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h_1 = var_f.prototype = var_c.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_u(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h_1), param_t;
  }
  return var_l.prototype = var_f, var_u(var_h_1, "constructor", var_f), var_u(var_f,
  "constructor", var_l), var_l.displayName = "GeneratorFunction", var_u(var_f, var_i,
  "GeneratorFunction"), var_u(var_h_1), var_u(var_h_1, var_i, "Generator"), var_u(
  var_h_1, var_n, function () {
  return this;
  }
  ), var_u(var_h_1, "toString", function () {
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
  var fn_c = function (param_t, param_e, param_r, param_n) {
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
  list_l = [],
  obj_f = {
  }
  ,
  list_d = [];
  function var_h(param_t, param_e, param_r, param_n) {
  var var_i,
  var_a = new URL(param_t);
  var_a.pathname = "lossless" === param_r ? var_a.pathname.replace("song/", "bucket-audio-keeng/song/") :
  var_a.pathname.replace("bucket-audio-keeng/", "mp3/"), var_a.host = "musicmd1.keeng.vn";
  var var_s_1 = Object(dep_url_utils.f)(var_a.href),
  var_u_1 = (null === (var_i = var_a.searchParams.get("filename")) ||
  void 0 === var_i ? void 0 : var_i.replace(/\.[a-z0-9]+$/i, "")) ||
  param_n;
  return var_s_1.filename = var_u_1, var_s_1.quality = param_e, var_s_1.resolution = param_r,
  var_s_1.type = "audio", var_s_1;
  }
  var obj_p = {
  getDomains: () => ["keeng.vn"],
  processRequestIds: param_t => !!param_t.url.match(/\.keeng\.vn\/m3u8\/.+playlist.m3u8/i) &&
  (list_d.push(param_t), !0),
  parse: {
  sources: [{
  checkSource: param_t => param_t.url.includes("vipservice.keeng.vn/KeengWSRestful"),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_c(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_u_1, var_c, var_l, var_f, var_d, var_p, var_v, var_m;
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (param_t_1.p = 0, var_u_1 = JSON.parse(var_r), var_c = var_u_1.data, !var_e.url.includes(
  "getAlbumInfo")) {
  param_t_1.n = 1;
  break;
  }
  return var_l = var_c.list_item.map(param_t_2 => {
  var var_e_1 = param_t_2.download_url_lossless,
  var_r_1 = param_t_2.download_url_web,
  var_i = param_t_2.download_url,
  var_o = `${param_t_2.name}- ${param_t_2.singer}`,
  list_s = [];
  return var_e_1 && list_s.push(var_h(var_e_1, "Lossless", "lossless", var_o)), var_r_1 ?
  list_s.push(var_h(var_r_1, Object(dep_dom_utils.i18n)(dep_media_constants.r["480p"].i18n_label),
  "", var_o)) : list_s.push(var_h(var_i, Object(dep_dom_utils.i18n)(dep_media_constants.r["480p"].i18n_label),
  "", var_o)), list_s;
  }
  ).flat(1), param_t_1.a(2, var_l);
  case 1:
  return var_f = var_c.cache_path, var_d = Object(dep_url_utils.f)(new URL(var_f,
  "https://musicmd1.keeng.vn").href), var_p = var_c.name ? `${var_c.name}- ${var_c.singer}` : var_e.filename || document.title, var_d.filename = var_p, var_d.fixName = var_p,
  var_d.type = "video", param_t_1.n = 2, fetch(var_d.url).then(param_t_2 => param_t_2.text(
  ));
  case 2:
  return var_v = param_t_1.v, param_t_1.n = 3, Object(dep_media_sniffer.e)(var_v,
  var_d);
  case 3:
  return var_m = param_t_1.v, param_t_1.a(2, var_m);
  case 4:
  return param_t_1.p = 4, param_t_1.v, param_t_1.a(2, []);
  }
  }
  , var_t, null, [[0, 4]]);
  }
  ));
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: () => /\/(video|album)\/.+\/[a-z0-9]+/i.test(location.href),
  getUrl() {
  var var_t = location.href.match(/\/(video|album)\/.+\/([a-z0-9]+)/i);
  if (!var_t || !var_t[2]) return [];
  var var_e = var_t[2];
  return "video" === var_t[1] ? `https://vipservice.keeng.vn/KeengWSRestful///ws/common/getVideo?identify=${var_e}&id_has_played=` : `https://vipservice.keeng.vn/KeengWSRestful///ws/common/getAlbumInfo?identify=${var_e}&id_has_played=`;
  }
  ,
  mediaObjectChange(param_t) {
  var var_e = param_t.mediaObject;
  return var_e.ext = "m3u8", var_e.exts = ["m3u8"], var_e.fixName = document.title,
  "video";
  }
  }
  , {
  checkUrl: () => location.href.includes("audio") || location.href.includes("album"),
  mediaObjectChange(param_t) {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_i = (null === (var_r = null === (var_e = param_t.node.closest(".player-keeng, #album_player")) ||
  void 0 === var_e ? void 0 : var_e.querySelector('.keeng-player-info h3, [class*="info-player-h"]')) ||
  void 0 === var_r ? void 0 : var_r.innerText) || "";
  return var_i && (var_n.filename = var_i), "audio";
  }
  }
  , {
  checkUrl: () => !0,
  getUrl: () => {
  if (list_d.length > 0) return [list_d[list_d.length - 1]];
  }
  }
  , {
  checkUrl: () => location.href.includes("video"),
  getUrl: param_t => {
  param_t.url;
  return fn_c(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_e, var_r, var_i, var_o, var_a, var_u_1, var_c;
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (var_e = location.href.split("/"), var_r = var_e.pop() ||
  var_e.pop(), var_i = `http://vip.service.keeng.vn:8080/KeengWSRestful///ws/common/getVideo?identify=${var_r}&id_has_played=`, -1 !== list_l.indexOf(var_i)) {
  param_t_1.n = 4;
  break;
  }
  return param_t_1.p = 1, param_t_1.n = 2, Object(dep_dom_utils.send)("GET", var_i);
  case 2:
  return var_o = param_t_1.v, var_a = var_o.responseText, list_l.push(var_i), var_u_1 = JSON.parse(
  var_a), obj_f[var_i] = var_u_1.data.download_url, param_t_1.a(2, var_u_1.data.download_url);
  case 3:
  param_t_1.p = 3, var_c = param_t_1.v, console.log(var_c), param_t_1.n = 5;
  break;
  case 4:
  return param_t_1.a(2, obj_f[var_i]);
  case 5:
  return param_t_1.a(2);
  }
  }
  , var_t, null, [[1, 3]]);
  }
  ));
  }
  }
  ]
  };
  exportsObj.default = obj_p;
  };
