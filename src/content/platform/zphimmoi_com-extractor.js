// Module 403 - Savior Zphimmoi_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_constants = requireFn(1),
  dep_url_utils = requireFn(3),
  dep_dom_utils = requireFn(0),
  dep_media_sniffer = requireFn(6),
  dep_extractor_url_merger = requireFn(23),
  dep_stream_cipher_helper = requireFn(31);
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
  obj_p = {
  getDomains: () => ["zphimmoi.com", "vuaphimmoi.net", "alophimmoi.net"],
  siteMatcher: param_t => /vuaphimmoi[a-z0-9]{0,3}\.net/.test(param_t),
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e;
  return (null === (var_e = param_t.cacheUrl) || void 0 === var_e ?
  void 0 : var_e.includes("blob:https://")) || !1;
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response,
  var_a = /sources\s*:\s*(.+?]),/.exec(var_r);
  if (var_a) {
  var var_s,
  var_u = JSON.parse(var_a[1]),
  list_c = [],
  var_l_1 = var_f(var_u);
  try {
  var fn_d = function () {
  var var_t = var_s.value,
  var_r_1 = Object(dep_url_utils.f)(var_t.file);
  var_r_1.resolution = Object.keys(dep_media_constants.r).find(param_e => dep_media_constants.r[param_e].label.toLowerCase(
  ) == var_t.label.toLowerCase()), var_r_1.quality = Object(dep_dom_utils.i18n)(
  dep_media_constants.r[var_r_1.resolution].i18n_label), var_r_1.filename = var_e.filename,
  var_r_1.ext = "m3u8", var_r_1.type = "video", list_c.push(var_r_1);
  };
  for (var_l_1.s();
  !(var_s = var_l_1.n()).done;
  ) fn_d();
  }
  catch (var_t) {
  var_l_1.e(var_t);
  }
  finally {
  var_l_1.f();
  }
  return list_c;
  }
  return [];
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return /\.asiaplayer\.site\/m3u8\/.+\/[a-z0-9]+\/master\.txt/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_h(void 0, void 0, void 0, var_c().m(function var_t() {
  var var_i;
  return var_c().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, Object(dep_media_sniffer.e)(var_r, var_e);
  case 1:
  return var_i = param_t_1.v, param_t_1.n = 2, Promise.allSettled(var_i.map(param_t_2 => fn_h(
  void 0, void 0, void 0, var_c().m(function var_e_1() {
  var var_r_1;
  return var_c().w(function (param_e) {
  for (;;
  ) switch (param_e.p = param_e.n) {
  case 0:
  return param_e.p = 0, param_e.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: param_t_2.url
  }
  }
  );
  case 1:
  return var_r_1 = param_e.v, param_t_2.play_list = var_r_1.url, param_e.a(2, param_t_2);
  case 2:
  return param_e.p = 2, param_e.v, param_e.a(2, param_t_2);
  }
  }
  , var_e_1, null, [[0, 2]]);
  }
  )))).then(param_t_2 => param_t_2.map(param_t_3 => param_t_3.value));
  case 2:
  return param_t_1.a(2, param_t_1.v);
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
  return /(player\.zphimmoi\.com\/api\/play\/)[a-zA-Z0-9_.-]+/g.test(var_e);
  }
  ,
  getUrl: param_t => {
  var var_e,
  var_r = param_t.url,
  var_n = (null === (var_e = var_r.match(/(player\.zphimmoi\.com\/api\/play\/)[a-zA-Z0-9_.-]+/g)) ||
  void 0 === var_e ? void 0 : var_e[0].split("/")) || [];
  return var_r = "https://player.zphimmoi.com/api/m3u8/" + var_n[var_n.length - 1] + "/master.m3u8";
  }
  }
  ]
  };
  exportsObj.default = Object(dep_extractor_url_merger.a)(dep_stream_cipher_helper.a,
  ["parse", "urls"])(obj_p);
  };
