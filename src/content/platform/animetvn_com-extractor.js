// Module 200 - Savior Animetvn_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_extractor_url_merger = requireFn(23),
  dep_token_hash_util = requireFn(45),
  dep_dom_utils = requireFn(0),
  dep_media_constants = requireFn(1);
  function var_s() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_s_1 = param_n && param_n.prototype instanceof var_c ?
  param_n : var_c,
  var_l_1 = Object.create(var_s_1.prototype);
  return var_u(var_l_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_2,
  var_u_1,
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
  return var_o_1 = param_e, var_s_2 = 0, var_u_1 = var_t, obj_d.n = param_r_2, obj_a;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_s_2 = param_r_2, var_u_1 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
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
  (param_r, param_i, param_o), !0), var_l_1;
  }
  var obj_a = {
  };
  function var_c() {
  }
  function var_l() {
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
  var_h = var_f.prototype = var_c.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_u(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l.prototype = var_f, var_u(var_h, "constructor", var_f), var_u(var_f,
  "constructor", var_l), var_l.displayName = "GeneratorFunction", var_u(var_f, var_i,
  "GeneratorFunction"), var_u(var_h), var_u(var_h, var_i, "Generator"), var_u(var_h,
  var_n, function () {
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
  var fn_c = function (param_t, param_e, param_r, param_n) {
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
  obj_l = {
  }
  ,
  obj_f = {
  getDomains: () => ["animetvn.", "chillhay.", "phimsexvkl.", "m4uhd.tv"],
  siteMatcher: param_t => /(animetvn\d+\.com)|(hentaihay\d*\.)/i.test(param_t),
  parse: {
  sources: [{
  checkSource: param_t => param_t.url.includes("playhydrax.com"),
  parse: param_t => {
  var var_e = param_t.media;
  return fn_c(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_r;
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
  if (!((var_r = param_t_1.v).qualities.length > 0)) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.a(2, var_r.qualities.map(param_t_2 => {
  var var_r_1,
  var_n = Object.assign({
  }
  , var_e);
  return var_n.play_list = param_t_2.playlist, var_n.resolution = param_t_2.label,
  var_n.quality = null === (var_r_1 = dep_media_constants.r[var_n.resolution]) ||
  void 0 === var_r_1 ? void 0 : var_r_1.label, var_n.referrer = var_e.url, var_n.ext = "m3u8",
  var_n.exts = ["m3u8"], var_n.url = "https://google.com", var_n;
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
  ],
  default: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  if (location.host.match(/animetvn\.(com|xyz)/) && "string" == typeof var_e.url &&
  var_e.url.includes("/hls/")) return [var_e];
  if (var_e.cacheUrl) try {
  var var_n = JSON.parse(var_r),
  var_i = obj_l[var_e.cacheUrl],
  var_o = var_i.domainList.length;
  if (1 != var_n.status || !var_i) return [];
  if (1 == var_n.type) {
  var var_a = Object.assign({
  }
  , var_e),
  list_s = ["#EXTM3U"];
  list_s.push("#EXT-X-VERSION:3"), list_s.push("#EXT-X-TARGETDURATION:" + var_n.tgdr),
  list_s.push("#EXT-X-PLAYLIST-TYPE:VOD");
  for (var num_u = 0;
  num_u < var_n.data[0].length;
  num_u++) {
  var var_c = void 0;
  var_c = ".rd" == var_i.ext ? `https://${var_i.domainList[num_u % var_o]}${var_i.part}${var_n.v}/${var_n.quaity}/${var_i.userId}/${var_n.data[1][num_u]}${var_i.ext}` : `https://${var_i.domainList[num_u % var_o]}/stream/v5/${var_n.data[1][num_u]}.html`, 0 == num_u && (var_a.url = var_c), list_s.push(`#EXTINF:${var_n.data[0][num_u]},`), list_s.push(var_c);
  }
  return list_s.push("#EXT-X-ENDLIST"), var_a.play_list = list_s.join("\n"), [var_a];
  }
  if (2 == var_n.type) return var_n.data;
  }
  catch (var_t) {
  console.log(var_t);
  }
  }
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /titan\.animeuk\.net/.test(var_e);
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url,
  var_r = new URL(var_e),
  var_n = var_r.searchParams.get("id");
  return var_e = `${var_r.protocol}//${var_r.host}/hls/${var_n}/${var_n}?v=${Date.now()}`;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "m3u8", var_e.exts = ["m3u8"], "video";
  }
  }
  , {
  checkUrl: param_t => param_t.url.includes("playhydrax.com"),
  getUrl: param_t => param_t.url,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "mp4", var_e.exts = ["mp4"], var_e.filename = document.title,
  "video";
  }
  }
  ]
  };
  exportsObj.default = Object(dep_extractor_url_merger.a)(dep_token_hash_util.a,
  ["urls", "parse", "processRequestIds"])(obj_f);
  };
