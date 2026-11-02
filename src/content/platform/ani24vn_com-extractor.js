// Module 187 - Savior Ani24vn_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0),
  dep_media_sniffer = requireFn(6),
  dep_format_resolver = requireFn(14);
  function var_s() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_s_1 = param_n && param_n.prototype instanceof var_c_1 ?
  param_n : var_c_1,
  var_l_2 = Object.create(var_s_1.prototype);
  return var_u(var_l_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_2,
  var_u_1,
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
  return var_o_1 = param_e, var_s_2 = 0, var_u_1 = var_t, obj_d.n = param_r_2, obj_a;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_s_2 = param_r_2, var_u_1 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_3.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_3[var_e],
  var_h_2 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_u_1 = var_o_2[(var_s_2 = var_o_2[4]) ?
  5 : (var_s_2 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_s_2 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_s_2 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_s_2 = param_l, var_u_1 = param_p;
  (var_e = var_s_2 < 2 ? var_t : var_u_1) || !flag_f;
  ) {
  var_o_1 || (var_s_2 ? var_s_2 < 3 ? (var_s_2 > 1 && (obj_d.n = -1), var_h_1(var_s_2,
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
  (param_r, param_i, param_o), !0), var_l_2;
  }
  var obj_a = {
  };
  function var_c_1() {
  }
  function var_l_1() {
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
  var_h = var_f.prototype = var_c_1.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_u(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l_1.prototype = var_f, var_u(var_h, "constructor", var_f), var_u(var_f,
  "constructor", var_l_1), var_l_1.displayName = "GeneratorFunction", var_u(var_f,
  var_i, "GeneratorFunction"), var_u(var_h), var_u(var_h, var_i, "Generator"), var_u(
  var_h, var_n, function () {
  return this;
  }
  ), var_u(var_h, "toString", function () {
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
  var var_c,
  var_l,
  fn_f = function (param_t, param_e, param_r, param_n) {
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
  str_d = "",
  obj_h = {
  getDomains: () => ["ani24vn.com", "anime1s", "holitv.org"],
  forceUpdate() {
  var var_t,
  var_e,
  var_r,
  var_n = document.querySelector(".stream iframe"),
  var_i = (null === (var_r = null === (var_e = null === (var_t = null == var_n ?
  void 0 : var_n.closest(".stream")) || void 0 === var_t ? void 0 :
  var_t.querySelector(`.server_option [data-embed="${var_n.src}
  
  
  "]`)) || void 0 === var_e ? void 0 : var_e.innerText) ||
  void 0 === var_r ? void 0 : var_r.trim()) || "_",
  var_o = `${document.title}
  
  
   ${var_i}
  
  
  `;
  str_d != var_o && (str_d = var_o, var_c = void 0);
  }
  ,
  parse: {
  sources: [{
  checkSource: param_t => "mpd" == param_t.ext,
  parse: param_t => {
  var var_e = param_t.response,
  var_r = param_t.media;
  return fn_f(void 0, void 0, void 0, var_s().m(function var_t() {
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: null == var_r ? void 0 : var_r.url
  }
  }
  );
  case 1:
  return var_e = param_t_1.v, param_t_1.a(2, Object(dep_format_resolver.b)(var_e,
  document.title, var_r.host, var_r.url));
  }
  }
  , var_t);
  }
  ));
  }
  }
  , {
  checkSource: param_t => param_t.url.includes("holi.starzd"),
  parse: param_t => {
  var var_e = param_t.response,
  var_r = param_t.media;
  return fn_f(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_a, var_u_1, var_c_1, var_l_1;
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (var_e && var_e.includes("M3U8")) {
  param_t_1.n = 5;
  break;
  }
  return param_t_1.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: var_r.url
  }
  }
  );
  case 1:
  if (var_c_1 = var_a = param_t_1.v, var_u_1 = null === var_c_1) {
  param_t_1.n = 2;
  break;
  }
  var_u_1 = void 0 === var_a;
  case 2:
  if (!var_u_1) {
  param_t_1.n = 3;
  break;
  }
  var_l_1 = void 0, param_t_1.n = 4;
  break;
  case 3:
  var_l_1 = var_a.url;
  case 4:
  var_e = var_l_1;
  case 5:
  return param_t_1.a(2, Object(dep_media_sniffer.e)(var_e, var_r));
  }
  }
  , var_t);
  }
  ));
  }
  }
  , {
  checkSource: param_t => param_t.url.includes("anime1s.tool2x.cc/videos/") ||
  param_t.url.includes("hakpor.tool2x.cc/videos/"),
  parse: param_t => {
  var var_e = param_t.media;
  return fn_f(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_r, var_o;
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: var_e.url
  }
  }
  );
  case 1:
  if (var_r = param_t_1.v) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.a(2, []);
  case 2:
  return (var_o = Object.assign({
  }
  , var_e)).play_list = var_r.playlist, param_t_1.a(2, [var_o]);
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
  checkUrl: () => !!var_l,
  getUrl(param_t) {
  param_t.url, param_t.ids;
  return null == var_l ? void 0 : var_l.url;
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.node;
  return /ani24vn\.com/i.test(location.href) && !var_e.closest(".stream");
  }
  ,
  getUrl: () => []
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /ecostream\.me/i.test(var_e);
  }
  ,
  getUrl() {
  return fn_f(this, void 0, void 0, var_s().m(function var_t() {
  return var_s().w(function (param_t) {
  for (;;
  ) switch (param_t.n) {
  case 0:
  if (var_c) {
  param_t.n = 1;
  break;
  }
  return param_t.a(2, []);
  case 1:
  return var_c.filename = document.title, param_t.a(2, [var_c]);
  }
  }
  , var_t);
  }
  ));
  }
  }
  , {
  checkUrl: param_t => param_t.url.includes("holitv.org"),
  getUrl: () => var_c ? (var_c.filename = document.title, [var_c]) :
  [],
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  var_e.ext = "m3u8", var_e.exts = ["m3u8"];
  }
  }
  ],
  default: {
  getUrl: () => null == var_c ? void 0 : var_c.url,
  mediaObjectChange(param_t) {
  var var_e = param_t.mediaObject;
  return var_e.filename = str_d, var_e.fixName = var_e.filename, /(m3u8|mp4)/i.test(
  var_e.ext) && (var_e.type = "video"), var_e.type;
  }
  }
  ,
  processRequestIds: param_t => (var_c = param_t, "mpd" == param_t.ext &&
  (var_l = param_t), !0)
  };
  exportsObj.default = obj_h;
  };
