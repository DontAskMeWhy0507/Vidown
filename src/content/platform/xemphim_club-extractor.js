// Module 449 - Savior Xemphim_club Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0);
  function var_i(param_t) {
  return atob(function (param_t_1) {
  let var_e = arguments.length > 1 && void 0 !== arguments[1] ?
  arguments[1] : 13;
  return param_t_1.replace(/[a-zA-Z]/g, param_t_2 => String.fromCharCode((param_t_2 <= "Z" ?
  90 : 122) >= (param_t_2 = param_t_2.charCodeAt(0) + var_e) ?
  param_t_2 : param_t_2 - 26));
  }
  (param_t, 6));
  }
  var dep_media_sniffer = requireFn(6);
  function var_a(param_t, param_e) {
  var var_r = "undefined" != typeof Symbol && param_t[Symbol.iterator] ||
  param_t["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_t) || (var_r = function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_s(param_t_1, param_e_1);
  var var_r_1 = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r_1 && param_t_1.constructor && (var_r_1 = param_t_1.constructor.name),
  "Map" === var_r_1 || "Set" === var_r_1 ? Array.from(param_t_1) :
  "Arguments" === var_r_1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r_1) ?
  var_s(param_t_1, param_e_1) : void 0;
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
  flag_u = !1;
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
  flag_u = !0, var_o = param_t_1;
  }
  ,
  f: function () {
  try {
  flag_a || null == var_r.return || var_r.return();
  }
  finally {
  if (flag_u) throw var_o;
  }
  }
  };
  }
  function var_s(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  function var_u() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i_1 = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_u_1 = param_n && param_n.prototype instanceof var_s_1 ?
  param_n : var_s_1,
  var_l_1 = Object.create(var_u_1.prototype);
  return var_c(var_l_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_2,
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
  return var_o_1 = param_e, var_s_2 = 0, var_u_2 = var_t, obj_d_1.n = param_r_2,
  obj_a;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_s_2 = param_r_2, var_u_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_2 && var_e < var_l_2.length;
  var_e++) {
  var var_i_2,
  var_o_2 = var_l_2[var_e],
  var_h_2 = obj_d_1.p,
  var_p_2 = var_o_2[2];
  param_r_2 > 3 ? (var_i_2 = var_p_2 === param_n_2) && (var_u_2 = var_o_2[(var_s_2 = var_o_2[4]) ?
  5 : (var_s_2 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_2 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_s_2 = 0, obj_d_1.v = param_n_2,
  obj_d_1.n = var_o_2[1]) : var_h_2 < var_p_2 && (var_i_2 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_2) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d_1.n = var_p_2, var_s_2 = 0));
  }
  if (var_i_2 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_s_2 = param_l, var_u_2 = param_p;
  (var_e = var_s_2 < 2 ? var_t : var_u_2) || !flag_f;
  ) {
  var_o_1 || (var_s_2 ? var_s_2 < 3 ? (var_s_2 > 1 && (obj_d_1.n = -1), var_h_1(
  var_s_2, var_u_2)) : obj_d_1.n = var_u_2 : obj_d_1.v = var_u_2);
  try {
  if (num_c = 2, var_o_1) {
  if (var_s_2 || (param_i_2 = "next"), var_e = var_o_1[param_i_2]) {
  if (!(var_e = var_e.call(var_o_1, var_u_2))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_u_2 = var_e.value, var_s_2 < 2 && (var_s_2 = 0);
  }
  else 1 === var_s_2 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_s_2 < 2 &&
  (var_u_2 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_s_2 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d_1.n < 0) ? var_u_2 : param_r_1.call(param_n_1,
  obj_d_1)) !== obj_a) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_s_2 = 1, var_u_2 = var_e_1;
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
  function var_s_1() {
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
  var_h = var_f.prototype = var_s_1.prototype = Object.create(var_d);
  function var_p_1(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_c(param_t, var_i_1, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l.prototype = var_f, var_c(var_h, "constructor", var_f), var_c(var_f,
  "constructor", var_l), var_l.displayName = "GeneratorFunction", var_c(var_f, var_i_1,
  "GeneratorFunction"), var_c(var_h), var_c(var_h, var_i_1, "Generator"), var_c(
  var_h, var_n, function () {
  return this;
  }
  ), var_c(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_u = function () {
  return {
  w: var_o,
  m: var_p_1
  };
  }
  )();
  }
  function var_c(param_t, param_e, param_r, param_n) {
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
  (var_c = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_c(param_t_1, param_e_2, function (param_t_2) {
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
  ) : param_t_1[param_e_1] = param_r_1 : (var_o("next", 0), var_o("throw", 1), var_o(
  "return", 2));
  }
  )(param_t, param_e, param_r, param_n);
  }
  var fn_l = function (param_t, param_e, param_r, param_n) {
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
  }
  ,
  obj_d = {
  }
  ,
  list_h = [];
  function var_p(param_t) {
  return {
  operationName: "TitleWatch",
  variables: {
  id: param_t,
  server: "1"
  }
  ,
  query: "query TitleWatch($id: String!, $server: String) {\n  title(id: $id, server: $server) {\n    id\n    nameEn\n    nameVi\n    intro\n    publishDate\n    tmdbPoster\n    tmdbBackdrop\n    srcUrl\n    srcServer\n    canUseVpn\n    vpnFee\n    spriteUrl\n    useVipLink\n    reachedWatchLimit\n    needImproveSubtitle\n    needImproveVideo\n    dmcaRemoved\n    type\n    number\n    subsceneSlug\n    movieInfo {\n      width\n      height\n      __typename\n    }\n    parent {\n      id\n      number\n      intro\n      publishDate\n      tmdbPoster\n      parent {\n        id\n        nameEn\n        nameVi\n        tmdbBackdrop\n        __typename\n      }\n      __typename\n    }\n    children {\n      id\n      number\n      __typename\n    }\n    relatedTitles {\n      ...TitleBasics\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment TitleBasics on Title {\n  id\n  nameEn\n  nameVi\n  type\n  postedAt\n  tmdbPoster\n  publishDate\n  intro\n  imdbRating\n  countries\n  genres {\n    nameVi\n    slug\n    __typename\n  }\n  translation\n  __typename\n}\n"
  };
  }
  function var_v(param_t) {
  var var_e = param_t.split("/"),
  var_r = var_e.slice(-1)[0],
  var_n = var_r.split(".")[1],
  var_o = var_i(var_r.split(".")[0]) + "." + var_n;
  return var_e.splice(var_e.length - 1, 1, var_o), var_e.join("/");
  }
  var obj_m = {
  getDomains: () => ["xemphimm.fun", "xemphimm.com", "phimfun.com", "chophim."],
  default: {
  mediaObjectChange: param_t => {
  var var_e,
  var_r = param_t.mediaObject,
  var_i_1 = location.href;
  if (obj_f[var_i_1]) {
  var var_o = obj_f[var_i_1];
  if (Object.keys(var_o).forEach(param_t_1 => {
  "_from_request" != param_t_1 && (var_r[param_t_1] = var_o[param_t_1]);
  }
  ), null === (var_e = obj_d[var_i_1]) || void 0 === var_e ?
  void 0 : var_e.title) {
  var var_a_1 = obj_d[var_i_1].title.movieInfo.height || 480;
  var_r.resolution = Object(dep_dom_utils.getBestFitResolution)(var_a_1) + "p";
  }
  return "video";
  }
  }
  }
  ,
  beforeGetUrl: () => fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_e, var_r, var_n, var_i_1, var_o, var_a_1;
  return var_u().w(function (param_t) {
  for (;;
  ) switch (param_t.p = param_t.n) {
  case 0:
  if (var_r = location.href, list_h.includes(var_r)) {
  param_t.n = 4;
  break;
  }
  if (var_n = /\watch\/(\d+)/i, !var_r.match(var_n)) {
  param_t.n = 4;
  break;
  }
  return list_h.push(var_r), param_t.p = 1, var_i_1 = null === (var_e = var_r.match(
  var_n)) || void 0 === var_e ? void 0 : var_e[1], var_o = {
  method: "post",
  headers: {
  referer: var_r,
  "Content-Type": "application/json"
  }
  ,
  body: JSON.stringify(var_p(var_i_1))
  }
  , param_t.n = 2, fetch(location.origin + "/b/g", var_o).then(param_t_1 => param_t_1.json(
  ));
  case 2:
  (var_a_1 = param_t.v) && var_a_1.data && (obj_d[var_r] = var_a_1.data), param_t.n = 4;
  break;
  case 3:
  param_t.p = 3, param_t.v, obj_d[var_r] = null;
  case 4:
  return param_t.a(2);
  }
  }
  , var_t, null, [[1, 3]]);
  }
  )),
  processRequestIds: param_t => {
  if (param_t.url.includes(".m3u8")) return obj_f[location.href] = param_t, !0;
  }
  ,
  urls: [{
  checkUrl: () => location.href.toLowerCase().includes("song+ng"),
  getUrl: param_t => param_t.ids.filter(param_t_1 => String(param_t_1.url).match(
  /chophim\.\w+\/static\/image\/\w+/))
  }
  ],
  parse: {
  sources: [{
  checkSource: param_t => param_t.url.includes("v7.kkphimplayer7.com"),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return Object(dep_media_sniffer.e)(var_r, var_e);
  }
  }
  , {
  checkSource: param_t => param_t.url.includes("static/image"),
  parse: param_t => {
  var var_e = param_t.media;
  return fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_r, var_n, var_i_1, var_s_1, var_c_1, var_f, var_d, var_h, var_p_1, var_v_1,
  var_m, var_y, var_g;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return var_c_1 = function (param_t_2, param_e) {
  var var_n_1, var_i_2, var_o;
  return fn_l(this, void 0, void 0, var_u().m(function var_a_1() {
  var var_s_2, var_c_2, var_l, var_f_1, var_d_1, var_h_1, var_p_2, var_v_2;
  return var_u().w(function (param_a) {
  for (;;
  ) switch (param_a.n) {
  case 0:
  if (var_s_2 = param_t_2.split(/\r?\n/).slice(1), var_c_2 = null === (var_n_1 = var_s_2.find(
  param_t_3 => /^[cd]:/.test(param_t_3))) || void 0 === var_n_1 ?
  void 0 : var_n_1.slice(2), var_l = null === (var_i_2 = var_s_2.find(param_t_3 => /^[mn]:/.test(
  param_t_3))) || void 0 === var_i_2 ? void 0 : var_i_2.slice(2), var_f_1 = null === (
  var_o = var_s_2.find(param_t_3 => param_t_3.startsWith("e:"))) ||
  void 0 === var_o ? void 0 : var_o.slice(2), var_c_2 && var_l &&
  var_f_1) {
  param_a.n = 1;
  break;
  }
  throw new Error("Invalid protected media envelope");
  case 1:
  return param_a.n = 2, crypto.subtle.importKey("raw", var_r(var_f_1), {
  name: "ECDH",
  namedCurve: "P-256"
  }
  , !1, []);
  case 2:
  return var_d_1 = param_a.v, param_a.n = 3, crypto.subtle.deriveBits({
  name: "ECDH",
  public: var_d_1
  }
  , param_e, 256);
  case 3:
  return var_h_1 = param_a.v, param_a.n = 4, crypto.subtle.importKey("raw", var_h_1,
  "AES-GCM", !1, ["decrypt"]);
  case 4:
  return var_p_2 = param_a.v, param_a.n = 5, crypto.subtle.decrypt({
  name: "AES-GCM",
  iv: var_r(var_c_2)
  }
  , var_p_2, var_r(var_l));
  case 5:
  return var_v_2 = param_a.v, param_a.a(2, new TextDecoder().decode(var_v_2));
  }
  }
  , var_a_1);
  }
  ));
  }
  , var_s_1 = function () {
  return fn_l(this, void 0, void 0, var_u().m(function var_t_1() {
  var var_e_1, var_r_1;
  return var_u().w(function (param_t_2) {
  for (;;
  ) switch (param_t_2.n) {
  case 0:
  return param_t_2.n = 1, crypto.subtle.generateKey({
  name: "ECDH",
  namedCurve: "P-256"
  }
  , !1, ["deriveBits"]);
  case 1:
  return var_e_1 = param_t_2.v, param_t_2.n = 2, crypto.subtle.exportKey("raw", var_e_1.publicKey);
  case 2:
  return var_r_1 = param_t_2.v, param_t_2.a(2, {
  privateKey: var_e_1.privateKey,
  cp_ecdh: var_n(new Uint8Array(var_r_1))
  }
  );
  }
  }
  , var_t_1);
  }
  ));
  }
  , var_i_1 = function (param_t_2) {
  return param_t_2.startsWith("RIFF\0\0\0WEBPVP8X");
  }
  , var_n = function (param_t_2) {
  var var_e_1,
  str_r = "",
  var_n_1 = var_a(new Uint8Array(param_t_2));
  try {
  for (var_n_1.s();
  !(var_e_1 = var_n_1.n()).done;
  ) {
  var var_i_2 = var_e_1.value;
  str_r += String.fromCharCode(var_i_2);
  }
  }
  catch (var_t_1) {
  var_n_1.e(var_t_1);
  }
  finally {
  var_n_1.f();
  }
  return btoa(str_r).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  , var_r = function (param_t_2) {
  for (var var_e_1 = param_t_2.replace(/-/g, "+").replace(/_/g, "/");
  var_e_1.length % 4;
  ) var_e_1 += "=";
  for (var var_r_1 = atob(var_e_1), var_n_1 = new Uint8Array(var_r_1.length), num_i = 0;
  num_i < var_r_1.length;
  num_i++) var_n_1[num_i] = var_r_1.charCodeAt(num_i);
  return var_n_1.buffer;
  }
  , param_t_1.n = 1, var_s_1();
  case 1:
  return var_f = param_t_1.v, var_d = var_f.privateKey, var_h = var_f.cp_ecdh, (
  var_p_1 = new URL(String(var_e.url))).searchParams.set("cp_ecdh", var_h), param_t_1.n = 2,
  fetch(var_p_1.toString(), {
  cache: "no-store",
  credentials: "include",
  headers: {
  Accept: "*/*"
  }
  }
  );
  case 2:
  return var_v_1 = param_t_1.v, param_t_1.n = 3, var_v_1.arrayBuffer();
  case 3:
  if (var_m = param_t_1.v, var_y = new TextDecoder("latin1").decode(var_m), var_v_1.ok) {
  param_t_1.n = 4;
  break;
  }
  throw new Error(`HTTP ${var_v_1.status}
  
  
  : ${new TextDecoder().decode(var_m).slice(0, 200)}
  
  
  `);
  case 4:
  if (!var_i_1(var_y)) {
  param_t_1.n = 6;
  break;
  }
  return param_t_1.n = 5, var_c_1(var_y, var_d);
  case 5:
  var_g = param_t_1.v, param_t_1.n = 7;
  break;
  case 6:
  var_y.includes("#EXTM3U") && (var_g = var_y);
  case 7:
  if (var_g) {
  param_t_1.n = 8;
  break;
  }
  return param_t_1.a(2, []);
  case 8:
  return param_t_1.a(2, Object(dep_media_sniffer.e)(var_g, var_e));
  }
  }
  , var_t);
  }
  ));
  }
  }
  ],
  default: param_t => {
  for (var var_e = param_t.media, var_r = param_t.response.split("\n"), list_n = [],
  var_i_1 = Object.assign({
  }
  , var_e), num_o = 0;
  num_o < var_r.length;
  num_o++) {
  var var_a_1 = var_r[num_o],
  var_s_1 = var_a_1;
  if (var_a_1.startsWith("https://") && (var_s_1 = var_v(var_a_1)), var_a_1.startsWith(
  "#EXT-X-KEY")) {
  var var_u_1 = var_a_1.split(/['"]/)[1],
  var_c_1 = var_v(var_u_1);
  var_s_1 = var_a_1.replace(var_u_1, var_c_1);
  }
  list_n.push(var_s_1);
  }
  return var_i_1.play_list = list_n.join("\n"), [var_i_1];
  }
  }
  };
  exportsObj.default = obj_m;
  };
