// Module 687 - Savior Playngon Net Host
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_phephim_net_extractor = requireFn(133),
  dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0);
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
  var_l_1 = Object.create(var_a_1.prototype);
  return var_s(var_l_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_a_2,
  var_s_1,
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
  return var_o_1 = param_e, var_a_2 = 0, var_s_1 = var_t, obj_d.n = param_r_2, obj_u;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_a_2 = param_r_2, var_s_1 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
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
  return var_l.prototype = var_f, var_s(var_h, "constructor", var_f), var_s(var_f,
  "constructor", var_l), var_l.displayName = "GeneratorFunction", var_s(var_f, var_i,
  "GeneratorFunction"), var_s(var_h), var_s(var_h, var_i, "Generator"), var_s(var_h,
  var_n, function () {
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
  var fn_u = function (param_t, param_e, param_r, param_n) {
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
  };
  exportsObj.default = {
  index: 30,
  getUrl(param_t, param_e, param_r, param_s) {
  var var_c, var_l, var_f;
  return fn_u(this, void 0, void 0, var_a().m(function var_e() {
  var var_s_1, var_u, var_d, var_h, var_p, var_v, var_m, var_y, var_g, var_b, var_w,
  var_A, var__;
  return var_a().w(function (param_e_1) {
  for (;;
  ) switch (param_e_1.p = param_e_1.n) {
  case 0:
  if (!param_t.includes("playngon.net")) {
  param_e_1.n = 11;
  break;
  }
  if (-1 !== param_r.requestedUrls.indexOf(location.href)) {
  param_e_1.n = 11;
  break;
  }
  if (var_s_1 = /embed\/video\?id=([a-z0-9]+)/i, var_u = /embed\/video\/([a-z0-9]+)/i,
  var_d = /\/video\?v=([a-z0-9]+)/i, !location.href.match(var_s_1)) {
  param_e_1.n = 3;
  break;
  }
  return var_h = null === (var_c = location.href.match(var_s_1)) ||
  void 0 === var_c ? void 0 : var_c[1], var_p = location.origin + "/api/getvinfo?callback=json&vid=" + var_h,
  var_v = "2", param_r.requestedUrls.push(location.href), param_e_1.n = 1, fetch(
  var_p).then(param_t_1 => param_t_1.text());
  case 1:
  if (!(var_m = param_e_1.v)) {
  param_e_1.n = 2;
  break;
  }
  if (!(var_m = JSON.parse(var_m)).data) {
  param_e_1.n = 2;
  break;
  }
  if (var_y = "", var_m.data.hls ? var_y = var_m.data.host + "/vod/v" + var_v + "/" + var_m.data.mid + "/playlist.m3u8" :
  var_m.data.static && (var_y = var_m.data.static + "/vod/v1/" + var_h + "/playlist.m3u8?cdn=" + var_m.data.vid),
  !var_y) {
  param_e_1.n = 2;
  break;
  }
  return param_e_1.a(2, {
  return: !0,
  data: {
  url: var_y
  }
  }
  );
  case 2:
  param_e_1.n = 11;
  break;
  case 3:
  if (!location.href.match(var_u)) {
  param_e_1.n = 6;
  break;
  }
  return var_g = (null === (var_l = location.href.match(var_u)) ||
  void 0 === var_l ? void 0 : var_l[1]) || "", param_e_1.p = 4, param_r.requestedUrls.push(
  location.href), param_e_1.a(2, {
  return: !0,
  data: Object(dep_phephim_net_extractor.getPlaylists)(var_g).then(param_t_1 => {
  if (Array.isArray(param_t_1)) for (var num_e = 0;
  num_e < param_t_1.length;
  num_e++) {
  var var_r = param_t_1[num_e];
  if ([dep_phephim_net_extractor.SourceType.b2html, dep_phephim_net_extractor.SourceType.b2].includes(
  var_r.id) && var_r.sources && var_r.sources[0]) return {
  url: var_r.sources[0].file
  };
  }
  }
  )
  }
  );
  case 5:
  param_e_1.p = 5, var_A = param_e_1.v, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.CONSOLE_LOG,
  params: {
  url: {
  error: var_A
  }
  }
  }
  ), console.warn({
  error: var_A
  }
  ), param_e_1.n = 11;
  break;
  case 6:
  if (!location.href.match(var_d)) {
  param_e_1.n = 11;
  break;
  }
  return var_b = (null === (var_f = location.href.match(var_d)) ||
  void 0 === var_f ? void 0 : var_f[1]) || "", param_e_1.p = 7, param_r.requestedUrls.push(
  location.href), param_e_1.n = 8, Object(dep_phephim_net_extractor.getPlaylistV2)(
  var_b);
  case 8:
  if (!(var_w = param_e_1.v)) {
  param_e_1.n = 9;
  break;
  }
  return param_e_1.a(2, {
  return: !0,
  data: {
  url: var_w.file,
  referrer: location.href
  }
  }
  );
  case 9:
  param_e_1.n = 11;
  break;
  case 10:
  param_e_1.p = 10, var__ = param_e_1.v, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.CONSOLE_LOG,
  params: {
  url: {
  error: var__
  }
  }
  }
  ), console.warn({
  error: var__
  }
  );
  case 11:
  return param_e_1.a(2, {
  return: !1,
  data: null
  }
  );
  }
  }
  , var_e, null, [[7, 10], [4, 5]]);
  }
  ));
  }
  };
  };
