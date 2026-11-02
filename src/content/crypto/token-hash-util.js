// Module 45 - Savior Token Hash Util
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_module_16 = requireFn(16),
  var_i = requireFn.n(dep_module_16),
  dep_media_constants = requireFn(1);
  function var_a(param_t, param_e) {
  let var_r = var_i.a.AES.encrypt(param_t, param_e).toString();
  return var_r = var_i.a.enc.Base64.parse(var_r).toString(var_i.a.enc.Hex), var_r;
  }
  function var_s(param_t, param_e) {
  let var_r;
  try {
  let var_n = var_i.a.enc.Hex.parse(param_t).toString(var_i.a.enc.Base64);
  var_r = var_i.a.AES.decrypt(var_n, param_e), var_r = var_r.toString(var_i.a.enc.Utf8);
  }
  catch (var_t) {
  console.log("Error decrypting data: " + var_t);
  }
  return var_r;
  }
  function var_u(param_t, param_e = 1) {
  const var_r = param_t.split("|")[1];
  if (1 == param_e) {
  const var_e = param_t.split("|")[0] + var_s(var_r, "9bA7vVU90zX2WLwXy12Ux3OMU2LubvBQ");
  return `https://${window.location.hostname}/clencv1/${var_a(var_e, "sHqvxUbI3HRHqHNdluQ5thFw5e8DCglJ")}`;
  }
  return param_t.split("|")[0] + var_s(var_r, "9bA7vVU90zX2WLwXy12Ux3OMU2LubvBQ");
  }
  function var_c(param_t) {
  let str_e = "";
  try {
  const var_r = var_i.a.enc.Hex.parse(param_t).toString(var_i.a.enc.Base64);
  str_e = var_i.a.AES.decrypt(var_r, "sHqvxUbI3HRHqHNdluQ5thFw5e8DCglJ"), str_e = str_e.toString(
  var_i.a.enc.Utf8);
  }
  catch (var_e) {
  console.log("Error decrypting data: " + param_t);
  }
  return str_e;
  }
  var dep_url_utils = requireFn(3),
  dep_dom_utils = requireFn(0),
  dep_media_sniffer = requireFn(6);
  function var_h(param_t, param_e) {
  return function (param_t_1) {
  if (Array.isArray(param_t_1)) return param_t_1;
  }
  (param_t) || function (param_t_1, param_e_1) {
  var var_r = null == param_t_1 ? null : "undefined" != typeof Symbol &&
  param_t_1[Symbol.iterator] || param_t_1["@@iterator"];
  if (null != var_r) {
  var var_n,
  var_i_1,
  var_o,
  var_a_1,
  list_s = [],
  flag_u = !0,
  flag_c = !1;
  try {
  if (var_o = (var_r = var_r.call(param_t_1)).next, 0 === param_e_1) {
  if (Object(var_r) !== var_r) return;
  flag_u = !1;
  }
  else for (;
  !(flag_u = (var_n = var_o.call(var_r)).done) && (list_s.push(var_n.value), list_s.length !== param_e_1);
  flag_u = !0);
  }
  catch (var_t) {
  flag_c = !0, var_i_1 = var_t;
  }
  finally {
  try {
  if (!flag_u && null != var_r.return && (var_a_1 = var_r.return(), Object(var_a_1) !== var_a_1)) return;
  }
  finally {
  if (flag_c) throw var_i_1;
  }
  }
  return list_s;
  }
  }
  (param_t, param_e) || function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_p(param_t_1, param_e_1);
  var var_r = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r && param_t_1.constructor && (var_r = param_t_1.constructor.name),
  "Map" === var_r || "Set" === var_r ? Array.from(param_t_1) :
  "Arguments" === var_r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r) ?
  var_p(param_t_1, param_e_1) : void 0;
  }
  }
  (param_t, param_e) || function () {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  ();
  }
  function var_p(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  function var_v() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i_1 = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_u_2 = param_n && param_n.prototype instanceof var_s_1 ?
  param_n : var_s_1,
  var_c_2 = Object.create(var_u_2.prototype);
  return var_m(var_c_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_2,
  var_u_3,
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
  return var_o_1 = param_e, var_s_2 = 0, var_u_3 = var_t, obj_d.n = param_r_2, obj_a;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_s_2 = param_r_2, var_u_3 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_2 && var_e < var_l_1.length;
  var_e++) {
  var var_i_2,
  var_o_2 = var_l_1[var_e],
  var_h_2 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_2 = var_p_1 === param_n_2) && (var_u_3 = var_o_2[(var_s_2 = var_o_2[4]) ?
  5 : (var_s_2 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_2 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_s_2 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_2 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_s_2 = 0));
  }
  if (var_i_2 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_s_2 = param_l, var_u_3 = param_p;
  (var_e = var_s_2 < 2 ? var_t : var_u_3) || !flag_f;
  ) {
  var_o_1 || (var_s_2 ? var_s_2 < 3 ? (var_s_2 > 1 && (obj_d.n = -1), var_h_1(var_s_2,
  var_u_3)) : obj_d.n = var_u_3 : obj_d.v = var_u_3);
  try {
  if (num_c = 2, var_o_1) {
  if (var_s_2 || (param_i_2 = "next"), var_e = var_o_1[param_i_2]) {
  if (!(var_e = var_e.call(var_o_1, var_u_3))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_u_3 = var_e.value, var_s_2 < 2 && (var_s_2 = 0);
  }
  else 1 === var_s_2 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_s_2 < 2 &&
  (var_u_3 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_s_2 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d.n < 0) ? var_u_3 : param_r_1.call(param_n_1,
  obj_d)) !== obj_a) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_s_2 = 1, var_u_3 = var_e_1;
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
  (param_r, param_i, param_o), !0), var_c_2;
  }
  var obj_a = {
  };
  function var_s_1() {
  }
  function var_u_1() {
  }
  function var_c_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_l = [][var_n] ? var_e(var_e([][var_n]())) : (var_m(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_f = var_c_1.prototype = var_s_1.prototype = Object.create(var_l);
  function var_d(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_c_1) :
  (param_t.__proto__ = var_c_1, var_m(param_t, var_i_1, "GeneratorFunction")), param_t.prototype = Object.create(
  var_f), param_t;
  }
  return var_u_1.prototype = var_c_1, var_m(var_f, "constructor", var_c_1), var_m(
  var_c_1, "constructor", var_u_1), var_u_1.displayName = "GeneratorFunction", var_m(
  var_c_1, var_i_1, "GeneratorFunction"), var_m(var_f), var_m(var_f, var_i_1, "Generator"),
  var_m(var_f, var_n, function () {
  return this;
  }
  ), var_m(var_f, "toString", function () {
  return "[object Generator]";
  }
  ), (var_v = function () {
  return {
  w: var_o,
  m: var_d
  };
  }
  )();
  }
  function var_m(param_t, param_e, param_r, param_n) {
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
  (var_m = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_m(param_t_1, param_e_2, function (param_t_2) {
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
  var fn_y = function (param_t, param_e, param_r, param_n) {
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
  obj_g = {
  }
  ,
  list_b = [];
  function var_w(param_t) {
  for (var num_e = 0, list_r = ["oJwmvmVBajMaRCTklxbfjavpQO7SZpsL", "oA4yOQ2oi97oymsQgcCjRD0YVKetjzSl"];
  num_e < list_r.length;
  num_e++) {
  var var_n = var_s(param_t, list_r[num_e]);
  if (var_n) return var_n;
  }
  return "";
  }
  function var_A(param_t, param_e, param_r) {
  var var_n;
  return fn_y(this, void 0, void 0, var_v().m(function var_i_1() {
  var var_a_1, var_u_1, var_c_1, var_d, var_h_1, var_p_1, var_m_1, var_y, var_g,
  var_b, var_w_1, var_A_1, var___1, var_E;
  return var_v().w(function (param_i) {
  for (;;
  ) switch (param_i.p = param_i.n) {
  case 0:
  return var_a_1 = param_t.url, var_u_1 = var_a_1.substring(0, var_a_1.indexOf("getblob")),
  var_d = param_t.referrer || location.href, param_i.p = 1, param_i.n = 2, Object(
  dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: var_u_1 + "infoRequest"
  }
  }
  );
  case 2:
  var_h_1 = param_i.v, var_d = var_h_1.referrer, var_c_1 = JSON.parse(var_h_1.url),
  param_i.n = 4;
  break;
  case 3:
  param_i.p = 3, param_i.v, var_c_1 = void 0;
  case 4:
  for (var_p_1 = var_s(var_c_1.ip, "vp0DGD9E5rp6X0a3QYZ1qbDpilL83FO7"), var_m_1 = new URL(
  var_d).hostname, var_y = navigator.platform || "noplf", 1, var_g = param_e.data,
  var_b = param_e.tgdr, (var_w_1 = ["#EXTM3U"]).push("#EXT-X-VERSION:3"), var_w_1.push(
  "#EXT-X-TARGETDURATION:" + var_b), var_w_1.push("#EXT-X-PLAYLIST-TYPE:VOD"), var_A_1 = 0;
  var_A_1 < var_g[0].length;
  var_A_1++) "" == var_g[0][var_A_1] ? var_w_1.push("#EXTINF:" + var_b + ",") :
  var_w_1.push("#EXTINF:" + var_g[0][var_A_1] + ","), var_w_1.push(param_r(1, var_g,
  var_A_1, var_p_1, var_m_1, var_y));
  return var_w_1.push("#EXT-X-ENDLIST"), (var___1 = Object(dep_url_utils.f)("https://google.com")).originalUrl = param_t.url,
  var_E = param_e.quaity || param_e.quality, var___1.ext = "m3u8", var___1.exts = ["m3u8"],
  var___1.type = "video", var___1.filename = param_t.filename, var___1._hls = !0,
  var___1.resolution = var_E + "p", var___1.quality = null === (var_n = dep_media_constants.r[var___1.resolution]) ||
  void 0 === var_n ? void 0 : var_n.label, var___1.play_list = var_w_1.join("\n"),
  var___1.referrer = var_m_1, param_i.a(2, [var___1]);
  }
  }
  , var_i_1, null, [[1, 3]]);
  }
  ));
  }
  function var__(param_t, param_e, param_r) {
  var var_n;
  return fn_y(this, void 0, void 0, var_v().m(function var_i_1() {
  var var_a_1, var_s_1, var_u_1, var_c_1, var_f, var_d, var_p_1, var_m_1, var_y,
  var_g;
  return var_v().w(function (param_i) {
  for (;;
  ) switch (param_i.n) {
  case 0:
  for (var_a_1 = param_e.tgdr, param_e.key_giaima, var_s_1 = param_e.data, var_u_1 = param_e.quaity ||
  param_e.quality, (var_c_1 = Object(dep_url_utils.f)(param_t.referrer ||
  location.href)).originalUrl = param_t.url || location.href, var_c_1.url = "https://google.com",
  (var_f = ["#EXTM3U"]).push("#EXT-X-VERSION:3"), var_f.push("#EXT-X-TARGETDURATION:" + var_a_1),
  var_f.push("#EXT-X-PLAYLIST-TYPE:VOD"), var_d = var_h(var_s_1, 2), var_p_1 = var_d[0],
  var_m_1 = var_d[1], var_y = 0;
  var_y < var_p_1.length;
  var_y++) "string" == typeof (var_g = param_r(var_m_1[var_y], var_y, param_e)) &&
  (var_f.push(`#EXTINF:${var_p_1[var_y]},`), var_f.push(var_g));
  return var_f.push("#EXT-X-ENDLIST"), var_c_1.ext = "m3u8", var_c_1.exts = ["m3u8"],
  var_c_1.type = "video", var_c_1.filename = param_t.filename, var_c_1._hls = !0,
  var_c_1.resolution = var_u_1 + "p", var_c_1.quality = null === (var_n = dep_media_constants.r[var_c_1.resolution]) ||
  void 0 === var_n ? void 0 : var_n.label, var_c_1.play_list = var_f.join("\n"),
  param_i.a(2, [var_c_1]);
  }
  }
  , var_i_1);
  }
  ));
  }
  var obj_E = {
  parse: {
  sources: [{
  checkSource: param_t => param_t.url.includes("m3u8-play"),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_y(void 0, void 0, void 0, var_v().m(function var_t() {
  var var_n, var_i_1, var_o;
  return var_v().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (!String(var_e.url).includes("tp1-rdv1-encv1")) {
  param_t_1.n = 1;
  break;
  }
  return var_n = Object(dep_url_utils.f)(var_e.url), var_i_1 = var_r.trim().split(
  "\n").map(param_t_2 => /https?:\/\/.+\/clencv\d\//i.test(param_t_2) &&
  var_c(param_t_2.split(/\/clencv\d\//i)[1]) || param_t_2).join("\n"), var_n.play_list = var_i_1,
  var_n.type = "video", var_n.removeOrigin = !0, var_n.filename = document.title,
  param_t_1.a(2, [var_n]);
  case 1:
  return param_t_1.n = 2, Object(dep_media_sniffer.e)(var_r, var_e);
  case 2:
  return (var_o = param_t_1.v)[0].play_list = var_r, param_t_1.a(2, var_o);
  }
  }
  , var_t);
  }
  ));
  }
  }
  , {
  checkSource: param_t => [param_t.referrer, param_t.cacheUrl, param_t.url].some(
  param_t_1 => param_t_1 && /[a-z0-9\-_]+\.(play|plhq)[\s\S]*(xyz|net|site|click|cfd|com)/i.test(
  param_t_1)),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_y(void 0, void 0, void 0, var_v().m(function var_t() {
  var var_n, var_p_1, var_m_1, var_y, var_b, var_E, var_S, var_O, var_x, var_k, var_M,
  var_T, var_I, var_j, var_C, var_B, var_U, var_P, var_N, var_D, var_R, var_L, var_q,
  var_F, var_G, var_Q, var_z, var_H, var_V;
  return var_v().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (param_t_1.p = 0, !(null == var_r ? void 0 : var_r.trim().match(/^#ext/i))) {
  param_t_1.n = 1;
  break;
  }
  return param_t_1.a(2, Object(dep_media_sniffer.e)(var_r, var_e));
  case 1:
  param_t_1.n = 3;
  break;
  case 2:
  param_t_1.p = 2, param_t_1.v;
  case 3:
  if (param_t_1.p = 3, var_e.originalUrl = var_e.url, 0 != (var_p_1 = JSON.parse(
  var_r)).status) {
  param_t_1.n = 9;
  break;
  }
  return param_t_1.p = 4, param_t_1.n = 5, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 5:
  return var_m_1 = param_t_1.v.url, param_t_1.n = 6, Object(dep_dom_utils.sendMessage)(
  {
  type: dep_media_constants.b.GET_URL,
  params: {
  url: "/cdn-cgi/trace"
  }
  }
  );
  case 6:
  return var_y = param_t_1.v, var_b = var_y.url, var_y.referrer, var_E = var_b.trim(
  ).split("\n").map(param_t_2 => param_t_2.split("=")), var_S = Object.fromEntries(
  var_E), var_O = var_S.ip, var_x = var_S.ts, var_k = var_s(var_m_1.fileId, "9strzXhL69tmu3PdU5qPnYhgOX0eN3lL"),
  var_M = var_s(var_m_1.userId, "9str0OK8tTXlxT6FewQTKZcw21UNRdfn"), var_T = {
  idfile: var_k,
  iduser: var_M,
  domain_play: location.href.split("/").slice(0, 3).join("/") ||
  window.self.location.ancestorOrigins[0] || "",
  platform: navigator.platform || "noplf",
  ip_clien: var_O,
  time_request: var_x,
  hlsSupport: !0
  }
  , var_I = var_a(JSON.stringify(var_T), "9strUQhkOhoSfyteyzGeeDzU0BHoeTyZ"), var_j = var_i.a.MD5(
  var_I + "9strTaCZh1DTBXpSwbfU1RuBX5z5qyei").toString(), "POST" == (var_C = {
  method: var_e.requestMethod || "GET",
  referrer: var_e.referrer,
  body: Object.entries({
  GGV3: !1,
  data: var_I + "|" + var_j
  }
  ).map(param_t_2 => {
  var var_e_1 = var_h(param_t_2, 2);
  return `${var_e_1[0]}=${var_e_1[1]}`;
  }
  ).join("&")
  }
  ).method && (var_C.headers ? (var_C.headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8",
  var_C.headers["Content-Length"] = 499) : var_C.headers = {
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
  "Content-Length": "499"
  }
  ), param_t_1.n = 7, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: var_e.url,
  config: var_C
  }
  }
  );
  case 7:
  var_B = param_t_1.v, var_p_1 = JSON.parse(var_B.url), param_t_1.n = 9;
  break;
  case 8:
  param_t_1.p = 8, param_t_1.v;
  case 9:
  if (var_U = obj_g[var_e.referrer || var_e.cacheUrl || ""], var_P = (null === (
  var_n = null == var_U ? void 0 : var_U.domainList) || void 0 === var_n ?
  void 0 : var_n.length) || 0, 1 != var_p_1.status) {
  param_t_1.n = 23;
  break;
  }
  if (1 != var_p_1.type || !var_U) {
  param_t_1.n = 10;
  break;
  }
  for (var_N = Object.assign({
  }
  , var_e), (var_D = ["#EXTM3U"]).push("#EXT-X-VERSION:3"), var_D.push("#EXT-X-TARGETDURATION:" + var_p_1.tgdr),
  var_D.push("#EXT-X-PLAYLIST-TYPE:VOD"), var_R = 0;
  var_R < var_p_1.data[0].length;
  var_R++) 0 == var_R && (var_N.url = `https://${var_U.domainList[var_R % var_P]}/rdv6/${var_p_1.quaity}/${var_U.userId}/${var_p_1.data[1][var_R]}.rd`), var_D.push(`#EXTINF:${var_p_1.data[0][var_R]},`), var_D.push(`https://${var_U.domainList[var_R % var_P]}/rdv6/${var_p_1.quaity}/${var_U.userId}/${var_p_1.data[1][var_R]}.rd`);
  return var_D.push("#EXT-X-ENDLIST"), var_N.play_list = var_D.join("\n"), var_N.skipReferrer = !0,
  var_N.referrer = var_N.url, param_t_1.a(2, [var_N]);
  case 10:
  if (2 != var_p_1.type || !var_U) {
  param_t_1.n = 11;
  break;
  }
  return param_t_1.a(2, [{
  url: var_p_1.data,
  ext: "m3u8",
  exts: ["m3u8"],
  skipReferrer: !0,
  type: "video",
  filename: document.title,
  referrer: var_e.url
  }
  ]);
  case 11:
  if (!var_p_1.type.toString().includes("url-blob-tvhay")) {
  param_t_1.n = 12;
  break;
  }
  return param_t_1.a(2, []);
  case 12:
  if ("tvh-blob-encv1" != var_p_1.type) {
  param_t_1.n = 13;
  break;
  }
  return param_t_1.a(2, var_A(var_e, var_p_1, (param_t_2, param_e, param_r, param_n,
  param_i, param_o) => {
  if (1 == param_t_2) {
  var var_u_1 = param_e[1][param_r],
  var_l = var_u_1.split("|")[0] + "/" + var_s(var_u_1.split("|")[1], "dW229npNL84ub4KbTJ9sK4WYuHqCbyOp") + "/" + var_a(
  param_n, "X2uxycQxu0QBtSuLrw7pCKTwFoqyyxo4");
  return var_c(("https://" + param_i + "/clencv1/" + var_a(var_l, "sHqvxUbI3HRHqHNdluQ5thFw5e8DCglJ")).split(
  /\/clencv\d\//i)[1]);
  }
  var var_f = param_e[1][param_r];
  return var_f.split("|")[0] + "/" + var_s(var_f.split("|")[1], "dW229npNL84ub4KbTJ9sK4WYuHqCbyOp") + "/" + var_a(
  param_n, "X2uxycQxu0QBtSuLrw7pCKTwFoqyyxo4");
  }
  ));
  case 13:
  if ("blob-encv2" != var_p_1.type) {
  param_t_1.n = 14;
  break;
  }
  return param_t_1.a(2, var_A(var_e, var_p_1, (param_t_2, param_e, param_r) => {
  if (1 == param_t_2) {
  var var_n_1 = var_s(param_e[1][param_r], "dW229npNL84ub4KbTJ9sK4WYuHqCbyOp");
  return var_c(("https://" + window.location.hostname + "/clencv1/" + var_a(var_n_1,
  "sHqvxUbI3HRHqHNdluQ5thFw5e8DCglJ")).split(/\/clencv\d\//i)[1]);
  }
  return var_s(param_e[1][param_r], "dW229npNL84ub4KbTJ9sK4WYuHqCbyOp");
  }
  ));
  case 14:
  if (!var_p_1.type.startsWith("blob-") || !var_p_1.type.endsWith("-encv1")) {
  param_t_1.n = 15;
  break;
  }
  return param_t_1.a(2, var__(var_e, var_p_1, param_t_2 => var_c(var_u(param_t_2).split(
  /\/clencv\d\//i)[1])));
  case 15:
  if ("blob-9str-rdv1" != var_p_1.type) {
  param_t_1.n = 16;
  break;
  }
  return var_e.originalUrl = var_e.url, var_e.url = "https://google.com", param_t_1.a(
  2, var__(var_e, var_p_1, param_t_2 => param_t_2));
  case 16:
  if ("url-m3u8-encv1" != var_p_1.type) {
  param_t_1.n = 23;
  break;
  }
  if (var_L = var_p_1.data, var_q = var_w(var_L)) {
  param_t_1.n = 17;
  break;
  }
  return param_t_1.a(2, []);
  case 17:
  return var_F = Object(dep_url_utils.f)(var_q), var_Q = [], param_t_1.p = 18, param_t_1.n = 19,
  fetch(var_q).then(param_t_2 => param_t_2.text());
  case 19:
  var_G = param_t_1.v, param_t_1.n = 22;
  break;
  case 20:
  return param_t_1.p = 20, param_t_1.v, param_t_1.n = 21, Object(dep_dom_utils.sendMessage)(
  {
  type: dep_media_constants.b.GET_URL,
  params: {
  url: var_q
  }
  }
  );
  case 21:
  var_z = param_t_1.v, var_G = var_z.url;
  case 22:
  if (var_G && (var_Q = var_G.split("\n")), var_Q.length) {
  for (var_H = 0;
  var_H < var_Q.length;
  var_H++) /https?:\/\/.+\/clencv\d\//i.test(var_Q[var_H]) &&
  (var_Q[var_H] = var_c(var_Q[var_H].split(/\/clencv\d\//i)[1]));
  var_F.play_list = var_Q.join("\n");
  }
  return var_F.ext = "m3u8", var_F.exts = ["m3u8"], var_F.type = "video", var_F.filename = var_e.filename,
  var_F._hls = !0, param_t_1.a(2, [var_F]);
  case 23:
  return param_t_1.a(2, []);
  case 24:
  return param_t_1.p = 24, var_V = param_t_1.v, console.log(var_V), param_t_1.a(
  2, []);
  }
  }
  , var_t, null, [[18, 20], [4, 8], [3, 24], [0, 2]]);
  }
  ));
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: param_t => param_t.url.includes("play.playsex3x.xyz"),
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_y(void 0, void 0, void 0, var_v().m(function var_t() {
  return var_v().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (!list_b.length) {
  param_t_1.n = 1;
  break;
  }
  return list_b[0].referrer = var_e, param_t_1.a(2, list_b);
  case 1:
  return param_t_1.a(2);
  }
  }
  , var_t);
  }
  ));
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /((play(v3)?)|(plhq.+))?\.((play[\s\S]*)|(plhq.*))(xyz|net|site|click|cfd|com)/i.test(
  var_e) && list_b.length > 0;
  }
  ,
  getUrl: () => list_b
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /(proxy\.vpspro\.xyz\/.+link=)|(cdn-play\.vipcloudvn\.com\/play)|(play.+\.sexapi\.xyz\/play\/)|((streamapi|streamobs)\.[a-z]+\/play)/i.test(
  var_e) && list_b.length > 0;
  }
  ,
  getUrl: () => list_b
  }
  ],
  processRequestIds(param_t) {
  var regex_e = /api\-.+\.(play|plhq)[\s\S]*\.(xyz|site|click|cfd|com)\/api\/.+playiframe/i,
  var_r = param_t.url;
  if (param_t.filename = document.title, param_t.url.match(/api\-.+\.(play|plhq)[\s\S]*\.(xyz|site|click|cfd|com)\/api\/.+getblob/i) &&
  !list_b.some(param_e => param_e.url == param_t.url)) {
  list_b.push(param_t);
  var var_n = list_b.findIndex(param_t_1 => regex_e.test(param_t_1.url));
  return var_n > -1 && list_b.splice(var_n, 1), !0;
  }
  return param_t.url.match(regex_e) && "POST" === param_t.requestMethod ?
  (list_b.push(param_t), !0) : var_r.match(/.+\.(play|plhq)[\s\S]*(xyz|net|site|click|cfd|com)\/(m3u8|hls)/i) ?
  (param_t.ext = "m3u8", param_t.type = "video", list_b.push(param_t), !0) :
  var_r.match(/.+\.(play|plhq)[\s\S]*(xyz|net|site|click|cfd|com)\/(type1rdv3)/i) ?
  (param_t.ext = "mp4", param_t.type = "video", list_b.push(param_t), !0) :
  void 0;
  }
  };
  exportsObj.a = obj_E;
  };
