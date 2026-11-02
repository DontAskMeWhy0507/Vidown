// Module 448 - Savior Phimsex123_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0),
  dep_media_constants = requireFn(1);
  function var_o() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_s_1(param_r, param_n, param_i, param_o) {
  var var_s_2 = param_n && param_n.prototype instanceof var_c ?
  param_n : var_c,
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
  function var_c() {
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
  var_h = var_f.prototype = var_c.prototype = Object.create(var_d);
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
  var var_s,
  fn_u = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a_1(param_t_1) {
  try {
  var_u(param_n.next(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_s_1(param_t_1) {
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
  )).then(var_a_1, var_s_1);
  }
  var_u((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  }
  ,
  obj_c = {
  }
  ,
  obj_l = {
  }
  ,
  obj_f = {
  }
  ,
  fn_d = param_t => param_t.url.includes("vnstream.cc"),
  fn_h = param_t => {
  var var_e, var_r;
  param_t.ext = "m3u8", param_t.exts = ["m3u8"];
  var var_n = document.title;
  var_n && var_n.length ? param_t.fixName = var_n : param_t.fixName = "" + Date.now(
  ), param_t.host = location.host, param_t.id = null === (var_e = obj_c[obj_f[param_t.url]]) ||
  void 0 === var_e ? void 0 : var_e.vid, param_t.referrer = null === (var_r = obj_c[obj_f[param_t.url]]) ||
  void 0 === var_r ? void 0 : var_r.referer;
  }
  ,
  obj_p = {
  urls: [{
  checkUrl: fn_d,
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_u(void 0, void 0, void 0, var_o().m(function var_t() {
  var var_r;
  return var_o().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (obj_l[var_e]) {
  param_t_1.n = 3;
  break;
  }
  return param_t_1.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 1:
  if (!(var_r = param_t_1.v)) {
  param_t_1.n = 2;
  break;
  }
  return obj_c[var_e] = var_r, obj_l[var_e] = var_r.url, obj_f[var_r.url] = var_e,
  param_t_1.a(2, obj_l[var_e]);
  case 2:
  param_t_1.n = 4;
  break;
  case 3:
  return param_t_1.a(2, obj_l[var_e]);
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
  var var_e = param_t.mediaObject;
  if (fn_d(var_e)) return fn_h(var_e), "video";
  }
  }
  ],
  parse: {
  sources: [{
  checkSource: fn_d,
  parse: param_t => {
  var var_e,
  var_r = param_t.media,
  var_n = param_t.response;
  if (fn_d(var_r)) {
  var var_o_1,
  obj_a = {
  vid: var_r.vid,
  type: "hls",
  ms: 0
  }
  ,
  list_s = [];
  fn_h(var_r), var_r.fixName = null === (var_e = var_r.fixName) ||
  void 0 === var_e ? void 0 : var_e.replace(new RegExp(var_r.host ||
  location.host, "i"), "");
  try {
  var var_u = JSON.parse(var_n);
  var_o_1 = var_u.data || {
  };
  }
  catch (var_t) {
  var_o_1 = {
  };
  }
  return var_o_1.m3u8 && var_o_1.m3u8.length && var_o_1.m3u8.forEach(param_t_1 => {
  var var_e_1,
  var_n_1 = Object.assign({
  }
  , var_r);
  var_n_1.filename = var_n_1.fixName, var_n_1.id = `${var_n_1.id}_${param_t_1.label}`, var_n_1.resolution = param_t_1.label + "p", var_n_1.quality = (null === (
  var_e_1 = dep_media_constants.r[var_n_1.resolution]) || void 0 === var_e_1 ?
  void 0 : var_e_1.label) || "Standard";
  var var_u_1 = ((param_t_2, param_e, param_r, param_n, param_i, param_o) => {
  try {
  for (var list_a = ["#EXTM3U", "#EXT-X-VERSION:7", "#EXT-X-PLAYLIST-TYPE:VOD", "#EXT-X-TARGETDURATION:" + param_t_2.targetDuration,
  "#EXT-X-MEDIA-SEQUENCE:0"], num_s = 0;
  num_s < param_t_2.segments.length;
  num_s++) 1 == param_i ? (list_a.push("#EXTINF:" + param_t_2.segments[num_s].inf.duration),
  list_a.push(`${param_r}/uploads/hls/${param_e}/${param_n}-${param_t_2.segments[num_s].byteRange.length}@${param_t_2.segments[num_s].byteRange.offset}.txt` + (param_o.ms > 0 ? "?ms=" + param_o.ms : ""))) :
  (list_a.push("#EXTINF:" + param_t_2.segments[num_s].inf.duration), list_a.push(
  `${param_r}/uploads/hls/${param_e}/r/${param_n}-${param_t_2.segments[num_s].byteRange.length}@${param_t_2.segments[num_s].byteRange.offset}.txt` + (param_o.ms > 0 ? "?ms=" + param_o.ms : "")));
  return list_a.push("#EXT-X-ENDLIST"), list_a.join("\n");
  }
  catch (var_t) {
  return;
  }
  }
  )(param_t_1.hls, var_o_1.hash, var_o_1.server, param_t_1.label, var_o_1.debug,
  obj_a);
  var_n_1.play_list = var_u_1, list_s.push(var_n_1);
  }
  ), list_s;
  }
  return [];
  }
  }
  ]
  }
  }
  ,
  obj_v = {
  getDomains: () => ["phimsex123.com"],
  urls: [...(obj_p.urls || [])],
  parse: {
  sources: [...((null === (var_s = obj_p.parse) || void 0 === var_s ?
  void 0 : var_s.sources) || [])]
  }
  };
  exportsObj.default = obj_v;
  };
