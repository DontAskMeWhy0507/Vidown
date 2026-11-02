// Module 230 - Savior Elolms Edu_vn Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_constants = requireFn(1),
  dep_dom_helper = requireFn(12),
  dep_quality_helper = requireFn(9),
  dep_url_utils = requireFn(3),
  dep_dom_utils = requireFn(0),
  dep_filename_sanitizer = requireFn(80);
  function var_c() {
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
  return var_l(var_c_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_1,
  var_u_2,
  num_c = 0,
  var_l_1 = param_i_1 || [],
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
  !flag_f && num_c && !var_i_1 && var_e < var_l_1.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_1[var_e],
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
  function var_f_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_d_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_l(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f_1.prototype = var_s.prototype = Object.create(var_d_1);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f_1) :
  (param_t.__proto__ = var_f_1, var_l(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_u.prototype = var_f_1, var_l(var_h, "constructor", var_f_1), var_l(
  var_f_1, "constructor", var_u), var_u.displayName = "GeneratorFunction", var_l(
  var_f_1, var_i, "GeneratorFunction"), var_l(var_h), var_l(var_h, var_i, "Generator"),
  var_l(var_h, var_n, function () {
  return this;
  }
  ), var_l(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_c = function () {
  return {
  w: var_o,
  m: var_p
  };
  }
  )();
  }
  function var_l(param_t, param_e, param_r, param_n) {
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
  (var_l = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_l(param_t_1, param_e_2, function (param_t_2) {
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
  var fn_h = function (param_t, param_e, param_r, param_n) {
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
  list_p = [],
  obj_v = {
  };
  function var_m(param_t) {
  var var_e, var_r;
  if (null === (var_r = null === (var_e = null == param_t ? void 0 :
  param_t.config) || void 0 === var_e ? void 0 : var_e.request) ||
  void 0 === var_r ? void 0 : var_r.files) {
  var var_n = param_t.config.request.files,
  var_i = var_n.progressive,
  var_s = var_n.hls;
  if (var_i) {
  var list_u = [];
  return var_i.forEach(param_t_1 => {
  var var_e_1 = Object(dep_url_utils.f)(param_t_1.url);
  var_e_1.resolution = param_t_1.quality, var_e_1.quality = dep_quality_helper.b.getVimeoQuality(
  param_t_1.quality), var_e_1.type = "video", var_e_1.filename = document.title,
  list_u.push(var_e_1);
  }
  ), list_u;
  }
  if (var_s && var_s.cdns) return var_s.cdns[var_s.default_cdn].url;
  }
  }
  var obj_y = {
  getDomains: () => ["elolms.edu.vn", "globalacademy.maplebear"],
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/(master|playlist)\.json/));
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response,
  var_i = JSON.parse(var_r),
  var_o = var_e.url,
  var_s = document.title,
  var_u = var_o.split("/"),
  var_c_1 = var_u.indexOf("video"),
  var_l_1 = var_u.slice(0, var_c_1 + 1);
  return var_i.video.map(param_t_1 => {
  var var_r_1,
  list_o = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>', '<MPD profiles="urn:mpeg:dash:profile:isoff-main:2011" type="static" availabilityStartTime="2015-08-04T09:33:14.000Z" publishTime="2015-08-04T10:47:32.000Z" mediaPresentationDuration="P0Y0M0DT0H3M30.000S" minBufferTime="P0Y0M0DT0H0M1.000S" bitmovin:version="1.6.0" xmlns:ns2="http://www.w3.org/1999/xlink" xmlns="urn:mpeg:dash:schema:mpd:2011" xmlns:bitmovin="http://www.bitmovin.net/mpd/2015">',
  "<Period>"],
  var_u_1 = param_t_1.codecs,
  var_c_2 = param_t_1.framerate,
  var_d_1 = param_t_1.duration,
  var_h = param_t_1.segments,
  var_p = param_t_1.base_url,
  var_v = param_t_1.height,
  var_m_1 = param_t_1.bitrate,
  var_y = var_v / 9 * 16;
  list_o.push(`<AdaptationSet mimeType="video/mp4" codecs="${var_u_1}">`), list_o.push(`<Representation mimeType="video/mp4" frameRate="${var_c_2}" bandwidth="${var_m_1}" codecs="avc1.4d401f" width="${var_y}" height="${var_v}">`), list_o.push(`<SegmentList duration="${var_d_1}">`), list_o.push(...var_h.map(param_t_2 => {
  var var_r_2,
  list_n = [...var_l_1],
  var_o_1 = var_f(Object(dep_url_utils.a)(new URL(var_e.url), (var_p ||
  var_i.base_url) + param_t_2.url).split("/"));
  try {
  for (var_o_1.s();
  !(var_r_2 = var_o_1.n()).done;
  ) {
  var var_s_1 = var_r_2.value;
  ".." === var_s_1 ? list_n.pop() : list_n.push(var_s_1);
  }
  }
  catch (var_t) {
  var_o_1.e(var_t);
  }
  finally {
  var_o_1.f();
  }
  return `<SegmentURL media="${list_n.join("/")}" />`;
  }
  )), list_o.push("</SegmentList>"), list_o.push("</Representation>"), list_o.push(
  "</AdaptationSet>");
  var var_g = var_i.audio.find(param_e => param_e.id === param_t_1.id) ||
  var_i.audio[0],
  var_b = var_g.codecs,
  var_w = var_g.duration,
  var_A = var_g.segments,
  var__ = var_g.base_url,
  var_E = var_g.bitrate,
  var_S = var_g.mime_type;
  list_o.push(`<AdaptationSet lang="vi" mimeType="${var_S}" codecs="${var_b}" bitmovin:label="English stereo">`), list_o.push(`<Representation mimeType="${var_S}" codecs="${var_b}" audioSamplingRate="48000" startWithSAP="1" bandwidth="${var_E}">`), list_o.push(`<SegmentList duration="${var_w}">`), list_o.push(...var_A.map(param_t_2 => {
  var var_r_2,
  list_n = [...var_l_1],
  var_o_1 = var_f(Object(dep_url_utils.a)(new URL(var_e.url), (var__ ||
  var_i.base_url) + param_t_2.url).split("/"));
  try {
  for (var_o_1.s();
  !(var_r_2 = var_o_1.n()).done;
  ) {
  var var_s_1 = var_r_2.value;
  ".." === var_s_1 ? list_n.pop() : list_n.push(var_s_1);
  }
  }
  catch (var_t) {
  var_o_1.e(var_t);
  }
  finally {
  var_o_1.f();
  }
  return `<SegmentURL media="${list_n.join("/")}" />`;
  }
  )), list_o.push("</SegmentList>"), list_o.push("</Representation>"), list_o.push(
  "</AdaptationSet>"), list_o.push("</Period>"), list_o.push("</MPD>");
  var var_O = param_t_1.height + "p",
  var_x = Object.assign(Object.assign({
  }
  , var_e), {
  filename: var_s,
  quality: (null === (var_r_1 = dep_media_constants.r[var_O]) ||
  void 0 === var_r_1 ? void 0 : var_r_1.label) || dep_media_constants.r["480p"].label,
  resolution: var_O,
  play_list: list_o.join("\n"),
  _isDashMPD: !!list_o
  }
  );
  return var_x.url = "https://www.google.com", var_x;
  }
  );
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url,
  var_r = param_t.node;
  return var_e.includes("vimeo.com") && "IFRAME" === var_r.tagName ||
  location.href.includes("globalacademy.maplebear") || location.href.includes("player.vimeo.com");
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_h(void 0, void 0, void 0, var_c().m(function var_t() {
  var var_r, var_i, var_o, var_a, var_u, var_l_1, var_f_1, var_d_1;
  return var_c().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (var_e || (null === (var_l_1 = null === (var_u = null === (var_a = null === (
  var_o = null === (var_i = null === (var_r = document.querySelector("d2l-sequence-viewer")) ||
  void 0 === var_r ? void 0 : var_r.shadowRoot) || void 0 === var_i ?
  void 0 : var_i.querySelector("d2l-sequences-content-router")) ||
  void 0 === var_o ? void 0 : var_o.shadowRoot) || void 0 === var_a ?
  void 0 : var_a.querySelector("d2l-sequences-content-file-html")) ||
  void 0 === var_u ? void 0 : var_u.shadowRoot) || void 0 === var_l_1 ?
  void 0 : var_l_1.querySelector("iframe"))) {
  param_t_1.n = 1;
  break;
  }
  return param_t_1.a(2);
  case 1:
  if (!list_p.includes(var_e)) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.a(2, var_m(obj_v[var_e]));
  case 2:
  return param_t_1.p = 2, param_t_1.n = 3, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 3:
  if (!(var_f_1 = param_t_1.v) || !var_f_1.config) {
  param_t_1.n = 4;
  break;
  }
  return list_p.push(var_e), obj_v[var_e] = var_f_1, param_t_1.a(2, var_m(var_f_1));
  case 4:
  param_t_1.n = 6;
  break;
  case 5:
  param_t_1.p = 5, var_d_1 = param_t_1.v, console.log("Caught", var_d_1);
  case 6:
  return param_t_1.a(2);
  }
  }
  , var_t, null, [[2, 5]]);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => (param_t.mediaObject.ext = "m3u8", "video")
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url,
  var_r = param_t.node;
  return Boolean(var_e.match(/drive\.google\.com\/file/)) &&
  "IFRAME" === var_r.tagName;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_i = null === (var_r = null === (var_e = var_n.url) || void 0 === var_e ?
  void 0 : var_e.match(/d\/(.*)\/preview/)) || void 0 === var_r ?
  void 0 : var_r[1];
  return var_n.url = "https://drive.google.com/uc?confirm=t&id=" + var_i, var_n.ext = "mp4",
  var_n.filename = Object(dep_filename_sanitizer.a)(), "video";
  }
  }
  ],
  getCustomElement: () => {
  var var_t, var_e;
  return location.href.includes("globalacademy.maplebear") ?
  [...((null === (var_e = null === (var_t = document.querySelector("d2l-sequence-viewer")) ||
  void 0 === var_t ? void 0 : var_t.shadowRoot) || void 0 === var_e ?
  void 0 : var_e.querySelectorAll("d2l-sequences-content-router")) ||
  [])] : [];
  }
  ,
  isValidVideoNode: param_t => !(!location.href.includes("globalacademy.maplebear") ||
  "d2l-sequences-content-router" !== param_t.tagName.toLowerCase()) ||
  Object(dep_dom_helper.m)(param_t)
  };
  exportsObj.default = obj_y;
  };
