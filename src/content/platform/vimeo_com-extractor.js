// Module 119 - Savior Vimeo_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0),
  dep_media_constants = requireFn(1),
  dep_url_utils = requireFn(3),
  dep_media_sniffer = requireFn(6),
  dep_url_filter = requireFn(81),
  dep_dom_helper = requireFn(12),
  dep_overlay_styles = requireFn(138),
  var_l = requireFn.n(dep_overlay_styles);
  function var_f(param_t, param_e) {
  var var_r = "undefined" != typeof Symbol && param_t[Symbol.iterator] ||
  param_t["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_t) || (var_r = function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_d(param_t_1, param_e_1);
  var var_r_1 = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r_1 && param_t_1.constructor && (var_r_1 = param_t_1.constructor.name),
  "Map" === var_r_1 || "Set" === var_r_1 ? Array.from(param_t_1) :
  "Arguments" === var_r_1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r_1) ?
  var_d(param_t_1, param_e_1) : void 0;
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
  function var_d(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  function var_h(param_t, param_e, param_r, param_n) {
  var var_i,
  list_o = ["#EXTM3U", "#EXT-X-VERSION:" + ((null == param_n ?
  void 0 : param_n.version) || 3), "#EXT-X-TARGETDURATION:" + ((null == param_n ?
  void 0 : param_n.targetDuration) || 11), "#EXT-X-MEDIA-SEQUENCE:" + ((null == param_n ?
  void 0 : param_n.mediaSequence) || 1), "#EXT-X-PLAYLIST-TYPE:" + ((null == param_n ?
  void 0 : param_n.playlistType) || "VOD")],
  var_a = "#EXTINF: " + (param_r || 5),
  var_s = var_f(param_e);
  try {
  for (var_s.s();
  !(var_i = var_s.n()).done;
  ) {
  var var_u = var_i.value;
  list_o.push(var_a), list_o.push(param_t + var_u);
  }
  }
  catch (var_t) {
  var_s.e(var_t);
  }
  finally {
  var_s.f();
  }
  return list_o.join("\n");
  }
  function var_p(param_t) {
  if (null != param_t) {
  var var_e = param_t["function" == typeof Symbol && Symbol.iterator ||
  "@@iterator"],
  num_r = 0;
  if (var_e) return var_e.call(param_t);
  if ("function" == typeof param_t.next) return param_t;
  if (!isNaN(param_t.length)) return {
  next: function () {
  return param_t && num_r >= param_t.length && (param_t = void 0), {
  value: param_t && param_t[num_r++],
  done: !param_t
  };
  }
  };
  }
  throw new TypeError(typeof param_t + " is not iterable");
  }
  function var_v(param_t, param_e) {
  var var_r = "undefined" != typeof Symbol && param_t[Symbol.iterator] ||
  param_t["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_t) || (var_r = function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_m(param_t_1, param_e_1);
  var var_r_1 = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r_1 && param_t_1.constructor && (var_r_1 = param_t_1.constructor.name),
  "Map" === var_r_1 || "Set" === var_r_1 ? Array.from(param_t_1) :
  "Arguments" === var_r_1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r_1) ?
  var_m(param_t_1, param_e_1) : void 0;
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
  function var_m(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  function var_y() {
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
  return var_g(var_c_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
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
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_u_2 = var_o_2[(var_s_1 = var_o_2[4]) ?
  5 : (var_s_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_s_1 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_s_1 = 0));
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
  var var_l_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_g(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_f_1 = var_c.prototype = var_s.prototype = Object.create(var_l_1);
  function var_d_1(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_c) :
  (param_t.__proto__ = var_c, var_g(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_f_1), param_t;
  }
  return var_u.prototype = var_c, var_g(var_f_1, "constructor", var_c), var_g(var_c,
  "constructor", var_u), var_u.displayName = "GeneratorFunction", var_g(var_c, var_i,
  "GeneratorFunction"), var_g(var_f_1), var_g(var_f_1, var_i, "Generator"), var_g(
  var_f_1, var_n, function () {
  return this;
  }
  ), var_g(var_f_1, "toString", function () {
  return "[object Generator]";
  }
  ), (var_y = function () {
  return {
  w: var_o,
  m: var_d_1
  };
  }
  )();
  }
  function var_g(param_t, param_e, param_r, param_n) {
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
  (var_g = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_g(param_t_1, param_e_2, function (param_t_2) {
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
  var var_b,
  fn_w = function (param_t, param_e, param_r, param_n) {
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
  list_A = [],
  obj__ = {
  }
  ,
  var_E = null,
  obj_S = {
  }
  ,
  obj_O = {
  }
  ,
  obj_x = {
  }
  ,
  regex_k = /\/\/.+\.vimeocdn.com\/video\/([0-9]+)/i;
  function var_M(param_t, param_e) {
  return fn_w(this, void 0, void 0, var_y().m(function var_r() {
  var var_u, var_c, var_l_1, var_f_1, var_d_1, var_h_1, var_p_1;
  return var_y().w(function (param_r) {
  for (;;
  ) switch (param_r.p = param_r.n) {
  case 0:
  if (var_u = [], var_c = [], param_r.p = 1, (var_c = Object(dep_dom_utils.getProp)(
  param_t, "request.files.progressive")) && 0 != var_c.length) {
  param_r.n = 7;
  break;
  }
  if (var_l_1 = Object(dep_url_filter.a)(param_t)) {
  param_r.n = 2;
  break;
  }
  throw new Error();
  case 2:
  if (!Array.isArray(var_l_1)) {
  param_r.n = 3;
  break;
  }
  return param_r.a(2, var_l_1);
  case 3:
  return var_f_1 = Object.assign(Object.assign({
  }
  , param_e), Object(dep_url_utils.f)(var_l_1)), param_r.p = 4, param_r.n = 5, fetch(
  var_l_1).then(param_t_1 => param_t_1.text());
  case 5:
  return var_d_1 = param_r.v, param_r.a(2, Object(dep_media_sniffer.e)(var_d_1, var_f_1));
  case 6:
  return param_r.p = 6, var_h_1 = param_r.v, console.warn("Caught", var_h_1), var_f_1.exts ||
  (var_f_1.exts = [var_f_1.ext]), var_f_1.type = "video", var_f_1.filename = document.title,
  param_r.a(2, [var_f_1]);
  case 7:
  param_r.n = 9;
  break;
  case 8:
  return param_r.p = 8, var_p_1 = param_r.v, console.warn("Caught", var_p_1), param_r.a(
  2, var_u);
  case 9:
  return var_c.forEach(function (param_e_1) {
  var var_r_1, var_o;
  try {
  var_o = param_t.i18n_quality || Object(dep_dom_utils.i18n)(null === (var_r_1 = dep_media_constants.r[param_e_1.quality]) ||
  void 0 === var_r_1 ? void 0 : var_r_1.i18n_label);
  }
  catch (var_t) {
  console.log(var_t);
  }
  var_u.push({
  type: "video",
  title: param_t.video.title,
  filename: param_t.video.title,
  ext: "mp4",
  url: param_e_1.url,
  resolution: param_e_1.quality,
  quality: var_o,
  i18n_quality: var_o
  }
  );
  }
  ), param_r.a(2, var_u);
  }
  }
  , var_r, null, [[4, 6], [1, 8]]);
  }
  ));
  }
  var obj_T = {
  siteMatcher: () => /^vimeo.com/.test(location.href),
  getCustomParent: param_t => param_t.closest(".player_area"),
  toggleLight: {
  turnOff: {
  updated(param_t, param_e) {
  var var_r,
  var_n,
  var_i,
  var_o = param_e.parent.$parent;
  if ("IFRAME" == (null == var_o ? void 0 : var_o.nodeName) &&
  var_o.contentDocument) {
  var var_a = param_e.$backdrop;
  var_a = var_a.cloneNode();
  var var_s = Object(dep_dom_helper.a)("style");
  var_b = var_s, var_s.innerHTML = var_l.a, null === (var_r = var_o.contentDocument) ||
  void 0 === var_r || var_r.head.appendChild(var_s);
  var var_c = null === (var_n = var_o.contentDocument) || void 0 === var_n ?
  void 0 : var_n.querySelector("iframe"),
  var_f_1 = null == var_c ? void 0 : var_c.parentElement;
  if (var_f_1) {
  var_f_1.classList.add("--savior-overlay-z-index-top"), var_c.classList.add("--savior-overlay-position-relative",
  "--savior-overlay-z-index-top");
  var list_d = ["0px", "0px"];
  var_a.style.top = list_d[0], var_a.style.left = list_d[1], var_f_1.prepend(var_a);
  }
  }
  var var_h_1 = param_e.parent.$node;
  if (var_h_1.closest(".asset-wrapper, .hero-zoom-scale-wrapper")) {
  var var_p_1 = null === (var_i = var_h_1.closest(".asset-wrapper, .hero-zoom-scale-wrapper")) ||
  void 0 === var_i ? void 0 : var_i.classList;
  null == var_p_1 || var_p_1.add("--savior-overlay-z-index-top"), null == var_p_1 ||
  var_p_1.remove("--savior-overlay-z-index-reset");
  }
  if (var_h_1.closest("ul>section")) {
  var var_v_1 = param_e.parent.$parent;
  for (var_v_1 == param_e.parent.$node && (var_v_1 = var_v_1.parentElement);
  var_v_1 && ("UL" != var_v_1.nodeName || !var_v_1.querySelector("&>section")) &&
  "body" != (null == var_v_1 ? void 0 : var_v_1.nodeName);
  ) null == var_v_1 || var_v_1.classList.remove("--savior-overlay-z-index-reset"),
  null == var_v_1 || var_v_1.classList.add("--savior-overlay-z-index-top"), var_v_1 = (
  null == var_v_1 ? void 0 : var_v_1.parentElement) || void 0;
  }
  }
  }
  ,
  turnOn: {
  updated(param_t, param_e) {
  var var_r,
  var_n,
  var_i = param_e.parent.$parent;
  "IFRAME" == (null == var_i ? void 0 : var_i.nodeName) && var_i.contentDocument &&
  (null === (var_n = null === (var_r = var_i.contentDocument) ||
  void 0 === var_r ? void 0 : var_r.querySelector(".--savior-backdrop")) ||
  void 0 === var_n || var_n.remove(), var_b.remove());
  }
  }
  }
  ,
  parse: {
  sources: [{
  checkSource: param_t => Boolean(param_t.url.match(/vod-adaptive-ak\.vimeocdn\.com\/.+?\/playlist.json/)),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  try {
  var var_a,
  var_s = JSON.parse(var_r),
  var_u = Object(dep_url_utils.a)(new URL(var_e.url), var_s.base_url),
  list_c = [],
  var_l_1 = var_v(var_s.audio);
  try {
  for (var_l_1.s();
  !(var_a = var_l_1.n()).done;
  ) {
  var var_f_1 = var_a.value,
  list_d = [var_f_1.index_segment, ...var_f_1.segments.map(param_t_1 => param_t_1.url)];
  list_c.push({
  resolution: var_f_1.bitrate,
  playlist: var_h(var_u, list_d, var_f_1.max_segment_duration)
  }
  );
  }
  }
  catch (var_t) {
  var_l_1.e(var_t);
  }
  finally {
  var_l_1.f();
  }
  var var_p_1,
  list_m = [],
  var_y_1 = var_v(var_s.video);
  try {
  for (var_y_1.s();
  !(var_p_1 = var_y_1.n()).done;
  ) {
  var var_g_1 = var_p_1.value,
  list_b = [var_g_1.index_segment, ...var_g_1.segments.map(param_t_1 => param_t_1.url)];
  list_m.push({
  resolution: var_g_1.height,
  playlist: var_h(var_u, list_b, var_g_1.max_segment_duration),
  url: var_u + var_g_1.index_segment
  }
  );
  }
  }
  catch (var_t) {
  var_y_1.e(var_t);
  }
  finally {
  var_y_1.f();
  }
  var var_w = list_c.map(param_t_1 => param_t_1.resolution),
  var_A = Math.min(...var_w),
  var__ = Math.max(...var_w),
  var_E_1 = list_c.find(param_t_1 => param_t_1.resolution === var_A),
  var_S = list_c.find(param_t_1 => param_t_1.resolution === var__);
  return list_m.map(param_t_1 => {
  var var_r_1 = Object(dep_url_utils.f)(param_t_1.url);
  return var_r_1.url = {
  videoUrl: "https://www.google.com",
  audioUrl: "https://www.google.com"
  }
  , var_r_1.resolution = param_t_1.resolution + "p", var_r_1.quality = Object(dep_dom_utils.i18n)(
  dep_media_constants.r[var_r_1.resolution].i18n_label), var_r_1.ext = "m3u8", var_r_1.exts = ["m3u8"],
  var_r_1.type = "video", var_r_1.filename = var_e.filename, var_r_1.extraData = [{
  name: "video_playlist",
  value: param_t_1.playlist
  }
  , {
  name: "audio_playlist",
  value: (param_t_1.resolution > 540 ? null == var_S ? void 0 :
  var_S.playlist : null == var_E_1 ? void 0 : var_E_1.playlist) ||
  ""
  }
  ], var_r_1;
  }
  );
  }
  catch (var_t) {
  return [];
  }
  }
  }
  ],
  default: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_w(void 0, void 0, void 0, var_y().m(function var_t() {
  var var_n, var_i;
  return var_y().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  return param_t_1.p = 0, var_n = JSON.parse(var_r), param_t_1.n = 1, var_M({
  config: var_n
  }
  , var_e);
  case 1:
  return param_t_1.a(2, param_t_1.v);
  case 2:
  if (param_t_1.p = 2, param_t_1.v, "mp4" != var_e.ext) {
  param_t_1.n = 3;
  break;
  }
  return param_t_1.a(2, [var_e]);
  case 3:
  if (!(null == var_r ? void 0 : var_r.includes("#EXTM3U"))) {
  param_t_1.n = 4;
  break;
  }
  return param_t_1.a(2, Object(dep_media_sniffer.e)(var_r, var_e));
  case 4:
  if (var_i = var_e.url, !obj_S[var_i]) {
  param_t_1.n = 6;
  break;
  }
  return param_t_1.n = 5, var_M(obj_S[var_i]);
  case 5:
  return param_t_1.a(2, param_t_1.v);
  case 6:
  return param_t_1.a(2, []);
  }
  }
  , var_t, null, [[0, 2]]);
  }
  ));
  }
  }
  ,
  urls: [{
  checkUrl: () => null != var_E,
  getUrl: () => fn_w(void 0, void 0, void 0, var_y().m(function var_t() {
  var var_e, var_r, var_i;
  return var_y().w(function (param_t) {
  for (;;
  ) switch (param_t.n) {
  case 0:
  if (null != var_E) {
  param_t.n = 1;
  break;
  }
  return param_t.a(2, []);
  case 1:
  return var_e = var_E, param_t.n = 2, Object(dep_dom_utils.send)("GET", var_e);
  case 2:
  return var_r = param_t.v.responseText, var_i = JSON.parse(var_r), obj__[var_e] = Object(
  dep_url_filter.a)({
  config: var_i
  }
  ), param_t.a(2, obj__[var_e]);
  }
  }
  , var_t);
  }
  ))
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return "VIDEO" == param_t.node.nodeName && var_e.includes(".mp4");
  }
  ,
  getUrl: param_t => param_t.url,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  param_t.node.autoplay && (var_e.filename = "Hero banner video", var_e.noAudio = !0);
  }
  }
  ],
  default: {
  getUrl: param_t => {
  var var_e = param_t.url,
  var_r = param_t.node;
  return fn_w(void 0, void 0, void 0, var_y().m(function var_t() {
  var var_o, var_a, var_u, var_c, var_l_1, var_f_1, var_d_1, var_h_1, var_v_1, var_m_1,
  var_g_1, var_b_1, var_w, var_E_1, var_M_1, var_T, var_I, var_j, var_C, var_B, var_U,
  var_P, var_N, var_D, var_R, var_L, var_q, var_F, var_G;
  return var_y().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (var_m_1 = (null === (var_o = var_r.closest("article")) ||
  void 0 === var_o ? void 0 : var_o.querySelector("a")) || (null === (var_a = var_r.closest(
  "article[draggable]")) || void 0 === var_a ? void 0 : var_a.querySelector("a")),
  var_g_1 = var_m_1 && var_m_1.href || location.href, var_e) {
  param_t_1.n = 1;
  break;
  }
  return param_t_1.a(2);
  case 1:
  if (var_e.includes("player.vimeo.com") && (var_g_1 = var_e), var_b_1 = Object(
  dep_url_filter.b)(var_g_1 || location.href), var_r.closest("[data-clip-id]") &&
  !var_b_1 && (var_b_1 = (null === (var_u = var_r.closest("[data-clip-id]")) ||
  void 0 === var_u ? void 0 : var_u.getAttribute("data-clip-id")) ||
  null), var_w = var_r.getAttribute("poster") || (null === (var_l_1 = null === (
  var_c = var_r.closest("article")) || void 0 === var_c ? void 0 :
  var_c.querySelector("img")) || void 0 === var_l_1 ? void 0 :
  var_l_1.src) || (null === (var_d_1 = null === (var_f_1 = var_r.closest("article[draggable]")) ||
  void 0 === var_f_1 ? void 0 : var_f_1.querySelector("img")) ||
  void 0 === var_d_1 ? void 0 : var_d_1.src), (var_E_1 = null === (var_h_1 = null == var_w ?
  void 0 : var_w.match(regex_k)) || void 0 === var_h_1 ? void 0 :
  var_h_1[1]) && (var_b_1 ? obj_O[var_E_1] = var_b_1 : var_b_1 = obj_O[var_E_1]),
  !obj__[var_M_1 = `https://vimeo.com/${var_b_1}?action=load_config`] || null == var_b_1) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.a(2, obj__[var_M_1]);
  case 2:
  return param_t_1.p = 2, obj_x[var_M_1] || (list_A.push(var_M_1), obj_x[var_M_1] = fetch(
  var_M_1, {
  headers: {
  "X-Requested-With": "XMLHttpRequest"
  }
  }
  ).then(param_t_2 => param_t_2.json())), param_t_1.n = 3, obj_x[var_M_1];
  case 3:
  return var_T = param_t_1.v, var_I = var_T.player.config_url, obj__[var_e] = var_I,
  obj__[var_M_1] = var_I, param_t_1.a(2, var_I);
  case 4:
  return param_t_1.p = 4, var_G = param_t_1.v, Object(dep_dom_utils.devLog)(var_G),
  var_r instanceof HTMLIFrameElement && (var_j = var_r.src), param_t_1.n = 5, Object(
  dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  parentTargetUrl: var_j || void 0
  }
  }
  );
  case 5:
  if ((var_C = param_t_1.v) && var_C.config) {
  param_t_1.n = 11;
  break;
  }
  return var_B = "https://player.vimeo.com/video/" + var_b_1, param_t_1.n = 6, Object(
  dep_dom_utils.send)("GET", var_B);
  case 6:
  var_U = param_t_1.v.responseText, var_P = new DOMParser(), var_N = var_P.parseFromString(
  var_U, "text/html"), var_D = [/config *= *({.*?});/i, /config *= *({.*})/i], var_R = Array.from(
  var_N.querySelectorAll("script")).filter(param_t_2 => param_t_2 &&
  param_t_2.innerText).map(param_t_2 => param_t_2.innerText), var_L = var_y().m(
  function var_t_1() {
  var var_r_1, var_n, var_i;
  return var_y().w(function (param_t_2) {
  for (;;
  ) switch (param_t_2.n) {
  case 0:
  if (var_r_1 = var_D[var_F], !(var_n = var_R.find(param_t_3 => param_t_3.match(
  var_r_1)))) {
  param_t_2.n = 1;
  break;
  }
  return var_i = JSON.parse((null === (var_v_1 = var_r_1.exec(var_n)) ||
  void 0 === var_v_1 ? void 0 : var_v_1[1]) || "{}"), obj__[var_e] = Object(dep_url_filter.a)(
  {
  config: var_i
  }
  ), obj__[var_B] = Object(dep_url_filter.a)({
  config: var_i
  }
  ), obj_S[var_e] = var_i, param_t_2.a(2, {
  v: obj__[var_B]
  }
  );
  case 1:
  return param_t_2.a(2);
  }
  }
  , var_t_1);
  }
  ), var_F = 0;
  case 7:
  if (!(var_F < var_D.length)) {
  param_t_1.n = 10;
  break;
  }
  return param_t_1.d(var_p(var_L()), 8);
  case 8:
  if (!(var_q = param_t_1.v)) {
  param_t_1.n = 9;
  break;
  }
  return param_t_1.a(2, var_q.v);
  case 9:
  var_F++, param_t_1.n = 7;
  break;
  case 10:
  return param_t_1.a(2);
  case 11:
  return list_A.push(var_e), obj__[var_e] = Object(dep_url_filter.a)(var_C), obj__[var_M_1] = Object(
  dep_url_filter.a)(var_C), obj_S[var_e] = var_C.config, param_t_1.a(2, obj__[var_M_1]);
  }
  }
  , var_t, null, [[2, 4]]);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n,
  var_i,
  var_o,
  var_a,
  var_s,
  var_u,
  var_c,
  var_l_1,
  var_f_1,
  var_d_1 = param_t.mediaObject,
  var_h_1 = param_t.node,
  var_p_1 = (null === (var_i = null === (var_n = null === (var_r = null === (var_e = var_h_1.closest(
  "[data-clip-id]")) || void 0 === var_e ? void 0 : var_e.closest(".data")) ||
  void 0 === var_r ? void 0 : var_r.querySelector(".details .title")) ||
  void 0 === var_n ? void 0 : var_n.innerText) || void 0 === var_i ?
  void 0 : var_i.trim()) || (null === (var_a = null === (var_o = var_h_1.closest(
  "article:has(img[srcset])")) || void 0 === var_o ? void 0 :
  var_o.querySelector("img[srcset]")) || void 0 === var_a ? void 0 :
  var_a.alt) || (null === (var_u = null === (var_s = var_h_1.closest("article[draggable]")) ||
  void 0 === var_s ? void 0 : var_s.querySelector("img")) ||
  void 0 === var_u ? void 0 : var_u.alt) || (null === (var_f_1 = null === (var_l_1 = null === (
  var_c = var_h_1.closest(".asset-card-container")) || void 0 === var_c ?
  void 0 : var_c.querySelector("h3")) || void 0 === var_l_1 ?
  void 0 : var_l_1.innerText) || void 0 === var_f_1 ? void 0 :
  var_f_1.trim());
  if (var_p_1 && (var_d_1.fixName = var_p_1, var_d_1.filename = var_p_1), obj__[var_h_1.src]) return var_d_1.ext = "m3u8",
  var_d_1.exts = ["m3u8"], var_d_1.type = "video", "video";
  }
  }
  ,
  idsProcess(param_t) {
  var var_e = param_t.defaultIds,
  var_r = param_t.id,
  var_n = param_t.index;
  new URL(var_r.url).searchParams.has("range") && var_e.splice(var_n, 1);
  }
  ,
  processRequestIds: param_t => {
  if (param_t.url.includes("config") && (var_E = param_t.url, EE.emit("widget.forceUpdate")),
  param_t.url.includes("playlist.json")) return obj__ = {
  }
  , param_t, !0;
  }
  };
  exportsObj.default = obj_T;
  };
