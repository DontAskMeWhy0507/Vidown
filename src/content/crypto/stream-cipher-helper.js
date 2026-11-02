// Module 31 - Savior Stream Cipher Helper
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_url_decryption_provider = requireFn(114),
  dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0),
  dep_streamc_xyz_host = requireFn(147);
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
  function var_c_1() {
  }
  function var_l() {
  }
  function var_f_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_u(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f_1.prototype = var_c_1.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f_1) :
  (param_t.__proto__ = var_f_1, var_u(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l.prototype = var_f_1, var_u(var_h, "constructor", var_f_1), var_u(
  var_f_1, "constructor", var_l), var_l.displayName = "GeneratorFunction", var_u(
  var_f_1, var_i, "GeneratorFunction"), var_u(var_h), var_u(var_h, var_i, "Generator"),
  var_u(var_h, var_n, function () {
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
  fn_l = function (param_t, param_e, param_r, param_n) {
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
  var_f = null === (var_c = document.getElementById("player")) ||
  void 0 === var_c ? void 0 : var_c.dataset.obf,
  str_d = "",
  str_h = "";
  exportsObj.a = {
  urls: [{
  checkUrl: param_t => param_t.url.includes(".php") || /\.streamc\.xyz/i.test(location.host),
  getUrl: param_t => {
  var var_e = param_t.ids,
  var_r = param_t.url;
  return /xemphim1\.top|motchill[a-z0-9]*\.|vietsubtv|motchilltvphim\.com|yumeani\.|caphim\.|hh3dsub\.|ani4u\.|gogophim[a-z0-9]*\.|phimhdcss\.|tramphim\.|saigonphim\./.test(
  location.host) && (var_e = var_e.filter(param_t_1 => param_t_1.url.includes(".m3u8") ||
  /\.streamc\.xyz\/(eyJ[A-Za-z0-9+/=_-]+)/.test(param_t_1.url))), (var_e = var_e.filter(
  param_t_1 => !param_t_1.url.includes("embed.php"))).forEach(param_t_1 => {
  ["getPlaylist", "get", void 0].includes(param_t_1.filename) &&
  (param_t_1.fixName = document.title), /xemphim1\.top|gogophim[a-z0-9]*\.|phim\.nguonc\.|phimhdcss\.|saigonphim\.|cobephim|tramphim\./.test(
  location.host) && (param_t_1.fixName = document.title, param_t_1.filename = document.title),
  param_t_1.skipRedirect = !0;
  }
  ), str_h = var_r, var_e;
  }
  ,
  mediaObjectChange(param_t) {
  param_t.mediaObject.fixName = document.title;
  }
  }
  ],
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return /\.streamc\.xyz\/((.*hash\.php|(get|[a-z]{1,2})[a-z0-9]*\.php)\?hash=.+|[a-z]{1,2}[a-z0-9].+\.(m3u8|m3u9)|eyJ[A-Za-z0-9+/=_-]+)/i.test(
  var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_l(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_u_1, var_c_1, var_l, var_p, var_v, var_m, var_y, var_g, var_b, var_w, var_A;
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (var_c_1 = var_r, var_f || str_d) {
  param_t_1.n = 4;
  break;
  }
  if (!/\.streamc\.xyz\/embed\.php/.test(location.href)) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.n = 1, dep_streamc_xyz_host.default.getUrl("", {
  }
  , {
  }
  , "https://embed14.streamc.xyz/embed.php");
  case 1:
  var_l = param_t_1.v, str_d = null == var_l ? void 0 : var_l.data.videoHash, var_f = null == var_l ?
  void 0 : var_l.data.obf, param_t_1.n = 4;
  break;
  case 2:
  return param_t_1.n = 3, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: "https://embed14.streamc.xyz/embed.php"
  }
  }
  );
  case 3:
  var_p = param_t_1.v, str_d = null == var_p ? void 0 : var_p.videoHash, var_f = null == var_p ?
  void 0 : var_p.obf;
  case 4:
  if (!!var_c_1) {
  param_t_1.n = 6;
  break;
  }
  return param_t_1.n = 5, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: var_e.url
  }
  }
  );
  case 5:
  var_c_1 = param_t_1.v.url;
  case 6:
  if (var_f || str_d) {
  param_t_1.n = 8;
  break;
  }
  return param_t_1.n = 7, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.CORS_FETCH,
  data: {
  url: str_h,
  responseType: "text"
  }
  }
  );
  case 7:
  var_v = param_t_1.v, (var_m = /data-obf="(\.?)"/.exec(var_v)) &&
  (var_f = var_m[1]);
  case 8:
  if (!(null == var_c_1 ? void 0 : var_c_1.includes("#ENC-AESGCM"))) {
  param_t_1.n = 16;
  break;
  }
  return param_t_1.n = 9, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: "https://embed14.streamc.xyz/embed.php"
  }
  }
  );
  case 9:
  if (var_y = param_t_1.v, !(null == (var_g = JSON.parse((null === (var_u_1 = document.getElementById(
  "stream-bootstrap")) || void 0 === var_u_1 ? void 0 : var_u_1.textContent) ||
  "null") || (null == var_y ? void 0 : var_y.bootstrap)) ? void 0 :
  var_g.video)) {
  param_t_1.n = 11;
  break;
  }
  return param_t_1.n = 10, Object(dep_url_decryption_provider.decryptM3U8)(var_c_1,
  var_g.video);
  case 10:
  return var_c_1 = param_t_1.v, param_t_1.a(3, 16);
  case 11:
  if (!(var_f = var_f || (null == var_y ? void 0 : var_y.obf))) {
  param_t_1.n = 16;
  break;
  }
  return param_t_1.p = 12, var_b = str_d || Object(dep_url_decryption_provider.parseVideoHashFromObf)(
  var_f), param_t_1.n = 13, Object(dep_url_decryption_provider.decryptM3U8)(var_c_1,
  var_b);
  case 13:
  var_c_1 = param_t_1.v, param_t_1.n = 16;
  break;
  case 14:
  return param_t_1.p = 14, param_t_1.v, var_w = Object(dep_url_decryption_provider.parseKXFromNonce)(
  var_f), param_t_1.n = 15, Object(dep_url_decryption_provider.decryptM3U8WithKX)(
  var_c_1, var_w);
  case 15:
  var_c_1 = param_t_1.v;
  case 16:
  if (!(null == (var_r = var_c_1) ? void 0 : var_r.match(/#extm3u/i))) {
  param_t_1.n = 17;
  break;
  }
  return var_e.fixName = var_e.filename, (var_A = Object.assign({
  }
  , var_e)).play_list = var_r, var_A.ext = "m3u8", var_A.exts = ["m3u8"], var_A.url = "https://google.com",
  param_t_1.a(2, [var_A]);
  case 17:
  return param_t_1.a(2, []);
  }
  }
  , var_t, null, [[12, 14]]);
  }
  ));
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return /\.streamc\.xyz\/s3\/[a-z0-9]+\.(m3u8|m3u9)/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_l(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_n;
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (param_t_1.p = 0, var_e.filename = document.title.replace(/xem phim|watch/i,
  "").trim() || var_e.filename, var_e.fixName = var_e.filename, var_r.match(/#extm3u/i)) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.n = 1, fetch(var_e.url).then(param_t_2 => param_t_2.text());
  case 1:
  var_r = param_t_1.v;
  case 2:
  return var_n = Object.assign({
  }
  , var_e), var_r && (var_n.play_list = var_r, var_n.ext = "m3u8", var_n.exts = ["m3u8"]),
  param_t_1.a(2, [var_n]);
  case 3:
  return param_t_1.p = 3, param_t_1.v, param_t_1.a(2, [var_e]);
  }
  }
  , var_t, null, [[0, 3]]);
  }
  ));
  }
  }
  ]
  }
  };
  };
