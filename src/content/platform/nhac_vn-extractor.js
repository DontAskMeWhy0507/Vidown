// Module 293 - Savior Nhac_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_quality_helper = requireFn(9),
  dep_url_utils = requireFn(3),
  dep_dash_parser = requireFn(28);
  function var_a() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_a_1 = param_n && param_n.prototype instanceof var_c ?
  param_n : var_c,
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
  function var_c() {
  }
  function var_l_1() {
  }
  function var_f() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_s(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f.prototype = var_c.prototype = Object.create(var_d);
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
  fn_c = function (param_t, param_e, param_r, param_n) {
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
  var_l = location.href,
  obj_f = {
  siteMatcher: (param_t, param_e) => param_t.includes("nhac.vn") &&
  /youtube.com\/embed\/([a-z0-9\-_]+)/i.test(param_e || ""),
  forceUpdate() {
  location.href !== var_l && (EE.emit("widget.forceUpdate"), var_l = location.href);
  }
  ,
  getDomains: () => ["nhac.vn"],
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e;
  return Boolean(null === (var_e = param_t.cacheUrl) || void 0 === var_e ?
  void 0 : var_e.match(/youtube.com\/embed\/([a-z0-9\-_]+)/i)) ||
  /youtube\.com/i.test(param_t.url);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return dep_dash_parser.a.parse(var_e.url);
  }
  }
  ]
  }
  ,
  isMiniPlayerNode: param_t => "VIDEO" == param_t.nodeName &&
  Boolean(param_t.closest("#myalbum-player")),
  urls: [{
  checkUrl: param_t => {
  var var_e,
  var_r,
  var_n = param_t.node;
  return Boolean(null === (var_r = null === (var_e = var_n.closest("#myalbum-player, .youtube-player")) ||
  void 0 === var_e ? void 0 : var_e.parentElement) || void 0 === var_r ?
  void 0 : var_r.querySelector('.youtube-player:not([style*="display: none"]'));
  }
  ,
  getUrl() {
  var var_t,
  var_e,
  var_r = document.querySelector("#list-songs-of-the-album li.items.onpause, #list-songs-of-the-album li.items.playing"),
  var_n = null === (var_e = null === (var_t = null == var_r ?
  void 0 : var_r.getAttribute("onclick")) || void 0 === var_t ?
  void 0 : var_t.match(/reloadYtb\(\d+, *[`'"]([^`'"]+)[`'"]/i)) ||
  void 0 === var_e ? void 0 : var_e[1];
  if (var_n) {
  var var_i = "https://www.youtube.com/watch?v=" + var_n;
  return var_u != var_i && (var_u = var_i, EE.emit("widget.forceUpdate")), var_i;
  }
  }
  ,
  mediaObjectChange(param_t) {
  var var_e,
  var_r,
  var_n,
  var_i,
  var_o = param_t.mediaObject,
  var_a_1 = param_t.node;
  if (var_o.url.includes("youtube.com")) {
  var_o.cacheUrl = var_a_1.getAttribute("src") || "";
  var var_s_1 = document.querySelector("#list-songs-of-the-album li.items.onpause, #list-songs-of-the-album li.items.playing");
  if (var_s_1) {
  var var_u_1 = null === (var_r = null === (var_e = var_s_1.querySelector(".name")) ||
  void 0 === var_e ? void 0 : var_e.innerText) || void 0 === var_r ?
  void 0 : var_r.trim(),
  var_c = null === (var_i = null === (var_n = var_s_1.querySelector(".artist")) ||
  void 0 === var_n ? void 0 : var_n.innerText) || void 0 === var_i ?
  void 0 : var_i.trim(),
  var_l_1 = `${var_u_1}
  
  
  ${var_c ? " - " + var_c : ""}
  
  
  `;
  var_o.filename = var_l_1;
  }
  return var_o.ext = "mp4", var_o.exts = ["mp4"], "video";
  }
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.node;
  return Boolean(var_e.closest("#song-list-player, .song-list-player, #myalbum-player, .album-player"));
  }
  ,
  getUrl() {
  var var_t;
  try {
  var var_e = Array.from(document.getElementsByTagName("script")).filter(param_t => param_t.innerText.includes(
  "sources")).map(param_t => param_t.innerText)[0],
  var_r = (null === (var_t = var_e.match(/playlist: (\[.+\]),/i)) ||
  void 0 === var_t ? void 0 : var_t[1]) || "";
  return JSON.parse(var_r).map(param_t => {
  var var_e_1,
  var_r_1 = param_t.description || param_t.media_desc,
  var_o = `${param_t.title || param_t.media_title}
  
  
  ${var_r_1 ? " - " + var_r_1 : ""}
  
  
  `;
  return param_t.sources.map(param_t_1 => {
  var var_e_2 = Object(dep_url_utils.f)(param_t_1.file);
  var_e_2.filename = var_o;
  var var_r_2 = Number(param_t_1.label.replace(/k(bps)?/i, ""));
  var_e_2.resolution = var_r_2 + "p";
  var var_a_1 = var_r_2 < 300 ? dep_quality_helper.b.QUALITY_TYPES[dep_quality_helper.a.QL_VIDEO_SMALL] :
  dep_quality_helper.b.QUALITY_TYPES[dep_quality_helper.a.QL_VIDEO_MEDIUM];
  return var_e_2.quality = var_a_1.quality, var_e_2.i18n_quality = var_a_1.i18n_quality,
  var_e_2.type = Object(dep_url_utils.e)(param_t_1.file), var_e_2;
  }
  ).concat((null === (var_e_1 = param_t.tracks) || void 0 === var_e_1 ?
  void 0 : var_e_1.map(param_t_1 => {
  var var_e_2 = Object(dep_url_utils.f)(param_t_1.file);
  return var_e_2.filename = var_o, var_e_2.quality = param_t_1.label, var_e_2.i18n_ext = var_e_2.ext,
  var_e_2.type = "subtitles", var_e_2.isSubtitles = !0, var_e_2;
  }
  )) || []);
  }
  ).flat();
  }
  catch (var_t_1) {
  return;
  }
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(null == var_e ? void 0 : var_e.match(/youtube.com\/embed\/([a-z0-9\-_]+)/i));
  }
  ,
  getUrl: () => fn_c(void 0, void 0, void 0, var_a().m(function var_t() {
  var var_e, var_r, var_n, var_i, var_o, var_s_1, var_u_1;
  return var_a().w(function (param_t) {
  for (;;
  ) switch (param_t.n) {
  case 0:
  if (var_r = new URL(location.href).searchParams.get("st")) {
  param_t.n = 1;
  break;
  }
  return param_t.a(2, "");
  case 1:
  if (var_n = null === (var_e = [...document.querySelectorAll("a.name")].find(param_t_1 => param_t_1.href.includes(
  var_r))) || void 0 === var_e ? void 0 : var_e.closest("li")) {
  param_t.n = 2;
  break;
  }
  return param_t.a(2, "");
  case 2:
  if (var_i = /reloadYtb\(.*?\`(.*?)\`.+?\)/, var_o = var_n.outerHTML, var_s_1 = var_i.exec(
  var_o || "")) {
  param_t.n = 3;
  break;
  }
  return param_t.a(2, "");
  case 3:
  return var_u_1 = var_s_1[1], param_t.a(2, ("https:" === location.protocol.toLowerCase(
  ) ? "https:" : "http:") + "//www.youtube.com/watch?v=" + var_u_1);
  }
  }
  , var_t);
  }
  )),
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = param_t.node;
  return var_e.ext = "mp4", var_e.exts = ["mp4"], var_e.cacheUrl = var_r.src, "video";
  }
  }
  ],
  default: {
  mediaObjectChange(param_t) {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_i = null === (var_e = param_t.node.closest(".jwplayer")) ||
  void 0 === var_e ? void 0 : var_e.querySelector(".jw-title");
  if (var_i) {
  var var_o = null === (var_r = var_i.innerText) || void 0 === var_r ?
  void 0 : var_r.trim().replace(/\n/i, "-");
  var_o && (var_n.filename = var_o);
  }
  return var_n.type;
  }
  }
  };
  exportsObj.default = obj_f;
  };
