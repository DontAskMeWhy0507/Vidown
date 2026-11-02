// Module 216 - Savior Biphim_co Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_sniffer = requireFn(6),
  dep_dom_utils = requireFn(0),
  dep_media_constants = requireFn(1),
  dep_network_monitor = requireFn(20),
  dep_extractor_url_merger = requireFn(23);
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
  obj_f = {
  }
  ,
  obj_d = {
  getDomains: () => ["biphim.in", "phim18vipa.co", "phim18vipb.com", "biphimss",
  "biphimvni"],
  parse: {
  sources: [{
  checkSource: param_t => param_t.url.includes("bitvtom100.xyz/hls/v2"),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_i;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, Object(dep_media_sniffer.e)(var_r, var_e);
  case 1:
  return var_i = param_t_1.v, param_t_1.a(2, var_i.map(param_t_2 => Object.assign(
  Object.assign({
  }
  , param_t_2), {
  referrer: "https://bitvtom100.xyz/"
  }
  )));
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
  checkUrl: param_t => {
  var var_e = param_t.url;
  return var_e.includes("play.") || var_e.includes("player/hls.php");
  }
  ,
  getUrl: () => fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_e, var_r;
  return var_u().w(function (param_t) {
  for (;;
  ) switch (param_t.n) {
  case 0:
  return param_t.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 1:
  if (!(var_e = param_t.v) || !var_e.url) {
  param_t.n = 2;
  break;
  }
  return var_r = null == var_e ? void 0 : var_e.url, obj_f[var_r] = var_e.realRes,
  param_t.a(2, var_r);
  case 2:
  return param_t.a(2, "null");
  }
  }
  , var_t);
  }
  )),
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = var_e.url;
  if (var_r && "null" != var_r) return var_e.ext = "m3u8", var_e.exts = ["m3u8"],
  var_e.realRes = obj_f[var_r], "video";
  }
  }
  , {
  checkUrl: param_t => param_t.url.includes("p.thoctv.com/play/"),
  getUrl: () => fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_e, var_r, var_n;
  return var_u().w(function (param_t) {
  for (;;
  ) switch (param_t.n) {
  case 0:
  return param_t.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 1:
  if (!(var_e = param_t.v) || !var_e.url) {
  param_t.n = 2;
  break;
  }
  return var_r = var_e.url, var_n = Object(dep_network_monitor.c)(var_r), param_t.a(
  2, var_n);
  case 2:
  return param_t.a(2, "blob:a.a");
  }
  }
  , var_t);
  }
  )),
  mediaObjectChange(param_t) {
  var var_e = param_t.mediaObject;
  if (!var_e.url.includes("blob:")) return var_e.url.includes("m3u8") ?
  (var_e.ext = "m3u8", var_e.exts = ["m3u8"]) : (var_e.ext = "mpd", var_e.exts = ["mpd"]),
  var_e.type = "video", "video";
  }
  }
  ],
  idsProcess(param_t) {
  var var_e = param_t.defaultIds,
  var_r = param_t.id,
  var_n = param_t.index;
  var_r.url.includes("discordapp.com") && var_e.splice(var_n, 1);
  }
  };
  exportsObj.default = Object(dep_extractor_url_merger.a)(dep_network_monitor.a,
  ["parse"])(obj_d);
  };
