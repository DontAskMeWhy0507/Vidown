// Module 255 - Savior Iqiyi_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_url_utils = requireFn(3);
  function var_i() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_a = var_r.toStringTag || "@@toStringTag";
  function var_s_1(param_r, param_n, param_i, param_a) {
  var var_s_2 = param_n && param_n.prototype instanceof var_c ?
  param_n : var_c,
  var_l_1 = Object.create(var_s_2.prototype);
  return var_o(var_l_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
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
  (param_r, param_i, param_a), !0), var_l_1;
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
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_o(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f.prototype = var_c.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_o(param_t, var_a, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l.prototype = var_f, var_o(var_h, "constructor", var_f), var_o(var_f,
  "constructor", var_l), var_l.displayName = "GeneratorFunction", var_o(var_f, var_a,
  "GeneratorFunction"), var_o(var_h), var_o(var_h, var_a, "Generator"), var_o(var_h,
  var_n, function () {
  return this;
  }
  ), var_o(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_i = function () {
  return {
  w: var_s_1,
  m: var_p
  };
  }
  )();
  }
  function var_o(param_t, param_e, param_r, param_n) {
  var var_i_1 = Object.defineProperty;
  try {
  var_i_1({
  }
  , "", {
  }
  );
  }
  catch (var_t) {
  var_i_1 = 0;
  }
  (var_o = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_a(param_e_2, param_r_2) {
  var_o(param_t_1, param_e_2, function (param_t_2) {
  return this._invoke(param_e_2, param_r_2, param_t_2);
  }
  );
  }
  param_e_1 ? var_i_1 ? var_i_1(param_t_1, param_e_1, {
  value: param_r_1,
  enumerable: !param_n_1,
  configurable: !param_n_1,
  writable: !param_n_1
  }
  ) : param_t_1[param_e_1] = param_r_1 : (var_a("next", 0), var_a("throw", 1), var_a(
  "return", 2));
  }
  )(param_t, param_e, param_r, param_n);
  }
  var fn_a = function (param_t, param_e, param_r, param_n) {
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
  var_s = location.href,
  var_u = location.href,
  list_c = [],
  obj_l = {
  getDomains: () => ["iq.com"],
  forceUpdate() {
  location.href !== var_s && (EE.emit("widget.forceUpdate"), var_s = location.href);
  }
  ,
  parse: {
  sources: [{
  checkSource: param_t => param_t.url === location.href,
  parse: param_t => [param_t.media]
  }
  ]
  }
  ,
  urls: [{
  checkUrl: () => location.href.includes("iq.com"),
  getUrl: () => fn_a(void 0, void 0, void 0, var_i().m(function var_t() {
  var var_e, var_r, var_o_1, var_a, var_s_1, var_l, var_f, var_d, var_h, var_p, var_v,
  var_m, var_y, var_g;
  return var_i().w(function (param_t) {
  for (;;
  ) switch (param_t.p = param_t.n) {
  case 0:
  if (param_t.p = 0, !(list_c.length > 0)) {
  param_t.n = 2;
  break;
  }
  return var_d = list_c[0], param_t.n = 1, fetch(var_d.url).then(param_t_1 => param_t_1.json(
  ));
  case 1:
  var_h = param_t.v, var_f = null == var_h ? void 0 : var_h.data, list_c = [];
  case 2:
  if (0 === list_c.length && var_u === location.href && (var_p = JSON.parse((null === (
  var_e = document.querySelector("#__NEXT_DATA__")) || void 0 === var_e ?
  void 0 : var_e.innerText) || "{}"), var_f = null === (var_l = null === (var_s_1 = null === (
  var_a = null === (var_o_1 = null === (var_r = null == var_p ?
  void 0 : var_p.props) || void 0 === var_r ? void 0 : var_r.initialProps) ||
  void 0 === var_o_1 ? void 0 : var_o_1.pageProps) || void 0 === var_a ?
  void 0 : var_a.prePlayerData) || void 0 === var_s_1 ? void 0 :
  var_s_1.dash) || void 0 === var_l ? void 0 : var_l.data), var_v = document.title,
  !(var_m = null == var_f ? void 0 : var_f.program)) {
  param_t.n = 3;
  break;
  }
  return var_y = var_f.dm || "https://meta.video.iq.com", var_g = [], (var_m.video ||
  []).forEach(param_t_1 => {
  var var_e_1,
  var_r_1,
  var_i_1,
  var_o_2 = null === (var_r_1 = null === (var_e_1 = param_t_1.scrsz) ||
  void 0 === var_e_1 ? void 0 : var_e_1.split("x")) || void 0 === var_r_1 ?
  void 0 : var_r_1[0];
  if (param_t_1.m3u8Url) {
  var var_a_1 = Object(dep_url_utils.f)(`${var_y}${param_t_1.m3u8Url}`);
  return var_a_1.ext = "m3u8", var_a_1.exts = ["m3u8"], var_a_1.type = "video", var_a_1.filename = var_v,
  var_a_1.resolution = var_o_2 + "p", void var_g.push(var_a_1);
  }
  if (null === (var_i_1 = param_t_1.m3u8) || void 0 === var_i_1 ?
  void 0 : var_i_1.includes("#EXTM3U")) {
  var obj_s = {
  ext: "m3u8",
  exts: ["m3u8"],
  type: "video",
  filename: var_v,
  resolution: var_o_2 + "p",
  play_list: param_t_1.m3u8,
  url: location.href
  };
  var_g.push(obj_s);
  }
  else {
  if (param_t_1.mpdUrl) {
  var var_u_1 = Object(dep_url_utils.f)(`${var_y}
  
  
  ${param_t_1.mpdUrl}
  
  
  `);
  return var_u_1.ext = "mp4", var_u_1.exts = ["mp4"], var_u_1.type = "video", var_u_1._isDashMPD = !0,
  var_u_1.filename = var_v, var_u_1.resolution = var_o_2 + "p", void var_g.push(
  var_u_1);
  }
  if (param_t_1.m3u8) {
  var var_c = Object(dep_url_utils.f)(`${var_y}${param_t_1.m3u8Url || param_t_1.mu}`);
  return var_c.ext = "m3u8", var_c.exts = ["m3u8"], var_c.type = "video", var_c.play_list = param_t_1.m3u8,
  var_c.filename = var_v, var_c.resolution = var_o_2 + "p", void var_g.push(var_c);
  }
  }
  }
  ), var_m.audio.forEach(param_t_1 => {
  if (param_t_1.m3u8Url) {
  var var_e_1 = Object(dep_url_utils.f)(`${var_y}${param_t_1.m3u8Url}`);
  return var_e_1.ext = "m3u8", var_e_1.exts = ["m3u8"], var_e_1.type = "audio", var_e_1.filename = var_v,
  void var_g.push(var_e_1);
  }
  if (param_t_1.mpdUrl) {
  var var_r_1 = Object(dep_url_utils.f)(`${var_y}
  
  
  ${param_t_1.mpdUrl}
  
  
  `);
  return var_r_1.ext = "mp4", var_r_1.exts = ["mp4"], var_r_1.type = "audio", var_r_1.quality = param_t_1.name,
  var_r_1.i18n_quality = param_t_1.name, var_r_1._isDashMPD = !0, var_r_1.filename = var_v,
  void var_g.push(var_r_1);
  }
  }
  ), var_m.stl.forEach(param_t_1 => {
  if (param_t_1.srt || param_t_1.webvtt || param_t_1.xml) {
  var var_e_1 = Object(dep_url_utils.f)(var_y + param_t_1.srt);
  var_e_1.filename = var_v, var_e_1.quality = param_t_1._name, var_e_1.i18n_quality = param_t_1._name,
  var_e_1.type = "subtitles", var_g.push(var_e_1);
  }
  }
  ), param_t.a(2, var_g);
  case 3:
  param_t.n = 5;
  break;
  case 4:
  return param_t.p = 4, param_t.v, param_t.a(2, void 0);
  case 5:
  return param_t.a(2);
  }
  }
  , var_t, null, [[0, 4]]);
  }
  ))
  }
  ],
  processRequestIds: param_t => (param_t.url.match(/.+cache\-video\.iq\.com\/dash\?.+/) &&
  (list_c[0] = param_t), !0)
  };
  exportsObj.default = obj_l;
  };
