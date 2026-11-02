// Module 444 - Savior Bilutv_co Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_constants = requireFn(1),
  dep_media_sniffer = requireFn(6);
  function var_o() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_s_1(param_r, param_n, param_i, param_o) {
  var var_s_2 = param_n && param_n.prototype instanceof var_c_1 ?
  param_n : var_c_1,
  var_l_1 = Object.create(var_s_2.prototype);
  return var_a(var_l_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_a_1,
  var_s_3,
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
  return var_o_1 = param_e, var_a_1 = 0, var_s_3 = var_t, obj_d.n = param_r_2, obj_u;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_a_1 = param_r_2, var_s_3 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
  var_h_2 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_s_3 = var_o_2[(var_a_1 = var_o_2[4]) ?
  5 : (var_a_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_a_1 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_a_1 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_u;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_a_1 = param_l, var_s_3 = param_p;
  (var_e = var_a_1 < 2 ? var_t : var_s_3) || !flag_f;
  ) {
  var_o_1 || (var_a_1 ? var_a_1 < 3 ? (var_a_1 > 1 && (obj_d.n = -1), var_h_1(var_a_1,
  var_s_3)) : obj_d.n = var_s_3 : obj_d.v = var_s_3);
  try {
  if (num_c = 2, var_o_1) {
  if (var_a_1 || (param_i_2 = "next"), var_e = var_o_1[param_i_2]) {
  if (!(var_e = var_e.call(var_o_1, var_s_3))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_s_3 = var_e.value, var_a_1 < 2 && (var_a_1 = 0);
  }
  else 1 === var_a_1 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_a_1 < 2 &&
  (var_s_3 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_a_1 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d.n < 0) ? var_s_3 : param_r_1.call(param_n_1,
  obj_d)) !== obj_u) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_a_1 = 1, var_s_3 = var_e_1;
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
  var obj_u = {
  };
  function var_c_1() {
  }
  function var_l() {
  }
  function var_f() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_a(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f.prototype = var_c_1.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_a(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l.prototype = var_f, var_a(var_h, "constructor", var_f), var_a(var_f,
  "constructor", var_l), var_l.displayName = "GeneratorFunction", var_a(var_f, var_i,
  "GeneratorFunction"), var_a(var_h), var_a(var_h, var_i, "Generator"), var_a(var_h,
  var_n, function () {
  return this;
  }
  ), var_a(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_o = function () {
  return {
  w: var_s_1,
  m: var_p
  };
  }
  )();
  }
  function var_a(param_t, param_e, param_r, param_n) {
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
  (var_a = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o_1(param_e_2, param_r_2) {
  var_a(param_t_1, param_e_2, function (param_t_2) {
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
  ) : param_t_1[param_e_1] = param_r_1 : (var_o_1("next", 0), var_o_1("throw", 1),
  var_o_1("return", 2));
  }
  )(param_t, param_e, param_r, param_n);
  }
  function var_s(param_t, param_e) {
  return function (param_t_1) {
  if (Array.isArray(param_t_1)) return param_t_1;
  }
  (param_t) || function (param_t_1, param_e_1) {
  var var_r = null == param_t_1 ? null : "undefined" != typeof Symbol &&
  param_t_1[Symbol.iterator] || param_t_1["@@iterator"];
  if (null != var_r) {
  var var_n,
  var_i,
  var_o_1,
  var_a_1,
  list_s = [],
  flag_u = !0,
  flag_c = !1;
  try {
  if (var_o_1 = (var_r = var_r.call(param_t_1)).next, 0 === param_e_1) {
  if (Object(var_r) !== var_r) return;
  flag_u = !1;
  }
  else for (;
  !(flag_u = (var_n = var_o_1.call(var_r)).done) && (list_s.push(var_n.value), list_s.length !== param_e_1);
  flag_u = !0);
  }
  catch (var_t) {
  flag_c = !0, var_i = var_t;
  }
  finally {
  try {
  if (!flag_u && null != var_r.return && (var_a_1 = var_r.return(), Object(var_a_1) !== var_a_1)) return;
  }
  finally {
  if (flag_c) throw var_i;
  }
  }
  return list_s;
  }
  }
  (param_t, param_e) || function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_u(param_t_1, param_e_1);
  var var_r = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r && param_t_1.constructor && (var_r = param_t_1.constructor.name),
  "Map" === var_r || "Set" === var_r ? Array.from(param_t_1) :
  "Arguments" === var_r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r) ?
  var_u(param_t_1, param_e_1) : void 0;
  }
  }
  (param_t, param_e) || function () {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  ();
  }
  function var_u(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  var var_c,
  fn_l = function (param_t, param_e, param_r, param_n) {
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
  obj_f = {
  getDomains: () => ["bilutv.co"],
  parse: {
  sources: [...(null === (var_c = {
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/hlss\.club\/.*\.m3u8/));
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_l(void 0, void 0, void 0, var_o().m(function var_t() {
  var var_a_1, var_u_1, var_c_1, var_l, var_f, var_d, var_h, var_p, var_v, var_m,
  var_y, var_g, var_b, var_w, var_A, var__, var_E, var_S, var_O, var_x, var_k, var_M,
  var_T, var_I, var_j, var_C, var_B, var_U;
  return var_o().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  for (param_t_1.p = 0, var_c_1 = var_r.split("\n"), var_l = null === (var_a_1 = Object(
  dep_media_sniffer.c)(var_r, var_e)) || void 0 === var_a_1 ?
  void 0 : var_a_1[0], var_f = var_l.uri, var_d = var_l.attributes.CODECS.split(
  ","), var_h = var_s(var_d, 2), var_p = var_h[0], var_v = var_h[1], var_m = var_l.attributes.BANDWIDTH,
  var_y = var_l.attributes.RESOLUTION, var_g = var_y.width, var_b = var_y.height,
  var_w = "", var__ = 0;
  var__ < var_c_1.length;
  var__++) (var_E = var_c_1[var__]).startsWith("#EXT-X-MEDIA:TYPE=AUDIO") &&
  (var_S = /#EXT-X-MEDIA:TYPE=AUDIO.*LANG(UAGE)*=["']([a-z]+)["'].*(URI|URL)=["']([\S\s]+)["']/i,
  var_O = var_E.match(var_S), var_A = var_O[2] || "en", var_w = var_O[4]);
  return var_x = fetch(var_f).then(param_t_2 => param_t_2.text()).then(param_t_2 => {
  for (var var_e_1 = param_t_2.split("\n"), list_r = [], str_n = "2", list_i = [],
  num_o = 0;
  num_o < var_e_1.length;
  num_o++) {
  var var_a_2 = var_e_1[num_o];
  var_a_2.startsWith("#EXT-X-TARGETDURATION") && (str_n = var_a_2.split(":")[1]),
  var_a_2.startsWith("http") && list_r.push(`<SegmentURL media="${var_a_2}" />`);
  }
  return list_i.push(`<AdaptationSet mimeType="video/mp4" codecs="${var_p}
  
  
  ">`), list_i.push(`<Representation mimeType="video/mp4" frameRate="24" bandwidth="${var_m}
  
  
  " codecs="avc1.4d401f" width="${var_g}
  
  
  " height="${var_b}
  
  
  ">`), list_i.push(`<SegmentList duration="${str_n}
  
  
  ">`), list_i.push(...list_r), list_i.push("</SegmentList>"), list_i.push(
  "</Representation>"), list_i.push("</AdaptationSet>"), Promise.resolve(list_i);
  }
  ), var_k = fetch(var_w).then(param_t_2 => param_t_2.text()).then(param_t_2 => {
  for (var var_e_1 = param_t_2.split("\n"), list_r = [], list_n = [], str_i = "11",
  num_o = 0;
  num_o < var_e_1.length;
  num_o++) {
  var var_a_2 = var_e_1[num_o];
  var_a_2.startsWith("#EXT-X-TARGETDURATION") && (str_i = var_a_2.split(":")[1]),
  var_a_2.startsWith("http") && list_n.push(`<SegmentURL media="${var_a_2}" />`);
  }
  return list_r.push(`<AdaptationSet lang="${var_A}
  
  
  " mimeType="audio/mp4" codecs="${var_v}
  
  
  " bitmovin:label="English stereo">`), list_r.push(`<Representation mimeType="audio/mp4" codecs="${var_v}
  
  
  " audioSamplingRate="48000" startWithSAP="1" bandwidth="98414">`), list_r.push(
  `<SegmentList duration="${str_i}
  
  
  ">`), list_r.push(...list_n), list_r.push("</SegmentList>"), list_r.push(
  "</Representation>"), list_r.push("</AdaptationSet>"), Promise.resolve(list_r);
  }
  ), var_M = ['<?xml version="1.0" encoding="UTF-8" standalone="yes"?>', '<MPD profiles="urn:mpeg:dash:profile:isoff-main:2011" type="static" availabilityStartTime="2015-08-04T09:33:14.000Z" publishTime="2015-08-04T10:47:32.000Z" mediaPresentationDuration="P0Y0M0DT0H3M30.000S" minBufferTime="P0Y0M0DT0H0M1.000S" bitmovin:version="1.6.0" xmlns:ns2="http://www.w3.org/1999/xlink" xmlns="urn:mpeg:dash:schema:mpd:2011" xmlns:bitmovin="http://www.bitmovin.net/mpd/2015">',
  "<Period>"], param_t_1.n = 1, Promise.allSettled([var_x, var_k]);
  case 1:
  return var_T = param_t_1.v, var_I = var_s(var_T, 2), var_j = var_I[0], var_C = var_I[1],
  var_M.push(...var_j.value), var_M.push(...var_C.value), var_M.push("</Period>"),
  var_M.push("</MPD>"), var_B = var_b + "p", var_U = Object.assign(Object.assign(
  {
  }
  , var_e), {
  filename: document.title.split("|")[0].trim(),
  quality: (null === (var_u_1 = dep_media_constants.r[var_B]) ||
  void 0 === var_u_1 ? void 0 : var_u_1.label) || dep_media_constants.r["480p"].label,
  resolution: var_B,
  play_list: var_M.join("\n"),
  _isDashMPD: !!var_M
  }
  ), param_t_1.a(2, [var_U]);
  case 2:
  return param_t_1.p = 2, param_t_1.v, param_t_1.a(2, [var_e]);
  }
  }
  , var_t, null, [[0, 2]]);
  }
  ));
  }
  }
  ]
  }
  }
  .parse) || void 0 === var_c ? void 0 : var_c.sources)]
  }
  };
  exportsObj.default = obj_f;
  };
