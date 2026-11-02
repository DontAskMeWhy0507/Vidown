// Module 188 - Savior Ani4u_org Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_sniffer = requireFn(6),
  dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0),
  dep_stream_cipher_helper = requireFn(31),
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
  regex_f = /(helvid\.[a-z0-9]+\/hash.php|helvid\.net\/play\/token\_hash\?).+/i,
  obj_d = {
  getDomains: () => ["ani4u.", "helvid.", "boctem.org", "phimthuyetminh.online"],
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return regex_f.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_a, var_s;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, Object(dep_media_sniffer.e)(var_r, var_e);
  case 1:
  return var_a = param_t_1.v, var_s = var_a.map(param_t_2 => fn_l(void 0, void 0,
  void 0, var_u().m(function var_e_1() {
  var var_r_1, var_n;
  return var_u().w(function (param_e) {
  for (;;
  ) switch (param_e.p = param_e.n) {
  case 0:
  if (param_e.p = 0, !location.host.match(regex_f)) {
  param_e.n = 2;
  break;
  }
  return param_e.n = 1, fetch(param_t_2.url).then(param_t_3 => param_t_3.text());
  case 1:
  var_n = param_e.v, var_r_1 = {
  url: var_n
  }
  , param_e.n = 4;
  break;
  case 2:
  return param_e.n = 3, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: param_t_2.url
  }
  }
  );
  case 3:
  var_r_1 = param_e.v;
  case 4:
  return param_t_2.play_list = var_r_1.url, param_t_2.originalUrl = param_t_2.url,
  param_t_2.url = "https://google.com", param_t_2.ext = "m3u8", param_t_2.exts = ["m3u8"],
  param_e.a(2, param_t_2);
  case 5:
  return param_e.p = 5, param_e.v, param_e.a(2, param_t_2);
  }
  }
  , var_e_1, null, [[0, 5]]);
  }
  ))), param_t_1.n = 2, Promise.allSettled(var_s).then(param_t_2 => param_t_2.map(
  param_t_3 => param_t_3.value));
  case 2:
  return param_t_1.a(2, param_t_1.v);
  }
  }
  , var_t);
  }
  ));
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return var_e.includes("abyssplayer.com") || var_e.includes("playhydrax.com");
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_r, var_n;
  return var_u().w(function (param_t_1) {
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
  if (var_n = param_t_1.v, !((null === (var_r = null == var_n ?
  void 0 : var_n.qualities) || void 0 === var_r ? void 0 : var_r.length) > 0)) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.a(2, var_n.qualities.map(param_t_2 => {
  var var_r_1,
  var_n_1 = Object.assign({
  }
  , var_e);
  return var_n_1.play_list = param_t_2.playlist, var_n_1.resolution = param_t_2.label,
  var_n_1.quality = null === (var_r_1 = dep_media_constants.r[var_n_1.resolution]) ||
  void 0 === var_r_1 ? void 0 : var_r_1.label, var_n_1.referrer = var_e.url, var_n_1.ext = "m3u8",
  var_n_1.exts = ["m3u8"], var_n_1.url = "https://google.com", var_n_1;
  }
  ));
  case 2:
  return param_t_1.a(2, []);
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
  checkUrl: param_t => param_t.url.includes("helvid"),
  getUrl: param_t => {
  var var_e;
  return null === (var_e = param_t.ids.find(param_t_1 => regex_f.test(param_t_1.url))) ||
  void 0 === var_e ? void 0 : var_e.url;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "m3u8", var_e.exts = ["m3u8"], var_e.referrer = var_e.url, var_e.filename = document.title,
  "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /embed(\/)?\?url=https:\/\/abyssplayer\.com\//.test(var_e);
  }
  ,
  getUrl: param_t => {
  var var_e;
  return (null === (var_e = param_t.ids.find(param_t_1 => param_t_1.url.includes(
  "https://abyssplayer.com"))) || void 0 === var_e ? void 0 :
  var_e.url) || [];
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "mp4", var_e.exts = ["mp4"], var_e.filename = document.title,
  "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return var_e.includes("abyssplayer.com") || var_e.includes("playhydrax.com");
  }
  ,
  getUrl: param_t => param_t.url,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "mp4", var_e.exts = ["mp4"], var_e.filename = document.title,
  "video";
  }
  }
  ]
  };
  exportsObj.default = Object(dep_extractor_url_merger.a)(dep_stream_cipher_helper.a,
  ["parse", "urls"])(obj_d);
  };
