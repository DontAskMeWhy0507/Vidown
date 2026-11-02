// Module 242 - Savior Hentaiz Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0),
  dep_media_constants = requireFn(1),
  dep_media_target_resolver = requireFn(113),
  dep_url_utils = requireFn(3),
  dep_media_sniffer = requireFn(6),
  dep_format_resolver = requireFn(14);
  function var_c(param_t, param_e) {
  var var_r = "undefined" != typeof Symbol && param_t[Symbol.iterator] ||
  param_t["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_t) || (var_r = var_h(param_t)) || param_e &&
  param_t && "number" == typeof param_t.length) {
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
  function var_l() {
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
  var_c_2 = Object.create(var_u_1.prototype);
  return var_f(var_c_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
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
  a: var_h_2,
  f: var_h_2.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_1 = 0, var_u_2 = var_t, obj_d.n = param_r_2, obj_a;
  }
  };
  function var_h_2(param_r_2, param_n_2) {
  for (var_s_1 = param_r_2, var_u_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_1.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_1[var_e],
  var_h_3 = obj_d.p,
  var_p_2 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_2 === param_n_2) && (var_u_2 = var_o_2[(var_s_1 = var_o_2[4]) ?
  5 : (var_s_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_3 &&
  ((var_i_1 = param_r_2 < 2 && var_h_3 < var_o_2[1]) ? (var_s_1 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_3 < var_p_2 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_2) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_2, var_s_1 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_2(param_l, param_p), var_s_1 = param_l, var_u_2 = param_p;
  (var_e = var_s_1 < 2 ? var_t : var_u_2) || !flag_f;
  ) {
  var_o_1 || (var_s_1 ? var_s_1 < 3 ? (var_s_1 > 1 && (obj_d.n = -1), var_h_2(var_s_1,
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
  (param_r, param_i, param_o), !0), var_c_2;
  }
  var obj_a = {
  };
  function var_s() {
  }
  function var_u() {
  }
  function var_c_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_d_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_f(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h_1 = var_c_1.prototype = var_s.prototype = Object.create(var_d_1);
  function var_p_1(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_c_1) :
  (param_t.__proto__ = var_c_1, var_f(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h_1), param_t;
  }
  return var_u.prototype = var_c_1, var_f(var_h_1, "constructor", var_c_1), var_f(
  var_c_1, "constructor", var_u), var_u.displayName = "GeneratorFunction", var_f(
  var_c_1, var_i, "GeneratorFunction"), var_f(var_h_1), var_f(var_h_1, var_i, "Generator"),
  var_f(var_h_1, var_n, function () {
  return this;
  }
  ), var_f(var_h_1, "toString", function () {
  return "[object Generator]";
  }
  ), (var_l = function () {
  return {
  w: var_o,
  m: var_p_1
  };
  }
  )();
  }
  function var_f(param_t, param_e, param_r, param_n) {
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
  (var_f = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_f(param_t_1, param_e_2, function (param_t_2) {
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
  function var_d(param_t, param_e) {
  return function (param_t_1) {
  if (Array.isArray(param_t_1)) return param_t_1;
  }
  (param_t) || function (param_t_1, param_e_1) {
  var var_r = null == param_t_1 ? null : "undefined" != typeof Symbol &&
  param_t_1[Symbol.iterator] || param_t_1["@@iterator"];
  if (null != var_r) {
  var var_n,
  var_i,
  var_o,
  var_a,
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
  flag_c = !0, var_i = var_t;
  }
  finally {
  try {
  if (!flag_u && null != var_r.return && (var_a = var_r.return(), Object(var_a) !== var_a)) return;
  }
  finally {
  if (flag_c) throw var_i;
  }
  }
  return list_s;
  }
  }
  (param_t, param_e) || var_h(param_t, param_e) || function () {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  ();
  }
  function var_h(param_t, param_e) {
  if (param_t) {
  if ("string" == typeof param_t) return var_p(param_t, param_e);
  var var_r = {
  }
  .toString.call(param_t).slice(8, -1);
  return "Object" === var_r && param_t.constructor && (var_r = param_t.constructor.name),
  "Map" === var_r || "Set" === var_r ? Array.from(param_t) :
  "Arguments" === var_r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r) ?
  var_p(param_t, param_e) : void 0;
  }
  }
  function var_p(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  var var_v,
  fn_m = function (param_t, param_e, param_r, param_n) {
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
  var_y = location.href;
  function var_g(param_t, param_e, param_r) {
  var var_o = param_t.tiktokM3u8 || param_t.defaultM3u8,
  var_s = var_o.master.match(/RESOLUTION=(\d+x\d+)/g),
  var_u = var_o.master.match(/\w+\/playlist\.m3u8/g),
  var_c_1 = var_s.map(param_t_1 => param_t_1.split("=")[1].split("x")[1] + "p");
  var_o.playlists.forEach((param_o, param_s) => {
  var var_l_1,
  num_f = 0,
  var_d_1 = param_o.split("\n").map(param_e_1 => !param_e_1 ||
  param_e_1.startsWith("http") || param_e_1.startsWith("#EXT") ?
  param_e_1 : fn_S({
  variant: var_u[param_s],
  streamType: param_t.streamType,
  blockDomain: param_t.domain,
  segmentDomains: param_t.segmentDomains,
  segmentUri: param_e_1,
  segmentIndex: num_f++,
  videoId: param_t.id
  }
  )).join("\n"),
  var_h_1 = Object(dep_url_utils.f)(param_r);
  var_h_1.ext = "m3u8", var_h_1.exts = ["m3u8"], var_h_1.type = "video", var_h_1.play_list = var_d_1,
  var_h_1.resolution = var_c_1[param_s], var_h_1.quality = Object(dep_dom_utils.i18n)(
  null === (var_l_1 = dep_media_constants.r[var_c_1[param_s]]) ||
  void 0 === var_l_1 ? void 0 : var_l_1.i18n_label), var_h_1.filename = document.title,
  var_h_1.url = param_r, param_e.push(var_h_1);
  }
  );
  }
  function var_b(param_t) {
  var var_e = new TextEncoder().encode(param_t);
  return crypto.subtle.digest("SHA-256", var_e);
  }
  function var_w(param_t) {
  return new Uint8Array(param_t.match(/.{1,2}/g).map(param_t_1 => parseInt(param_t_1,
  16))).buffer;
  }
  function var_A(param_t, param_e) {
  return ((param_t_1, param_e_1, param_r) => new Promise((param_n, param_i) => {
  var fn_o = param_t_2 => {
  try {
  fn_s(param_r.next(param_t_2));
  }
  catch (var_t) {
  param_i(var_t);
  }
  }
  ,
  fn_a = param_t_2 => {
  try {
  fn_s(param_r.throw(param_t_2));
  }
  catch (var_t) {
  param_i(var_t);
  }
  }
  ,
  fn_s = param_t_2 => param_t_2.done ? param_n(param_t_2.value) :
  Promise.resolve(param_t_2.value).then(fn_o, fn_a);
  fn_s((param_r = param_r.apply(param_t_1, param_e_1)).next());
  }
  ))(this, null, var_l().m(function var_r() {
  var var_n, var_i, var_o, var_a, var_s, var_u, var_c_1, var_f_1, var_h_1;
  return var_l().w(function (param_r) {
  for (;;
  ) switch (param_r.n) {
  case 0:
  return param_r.n = 1, var_b(param_e);
  case 1:
  return var_n = param_r.v, var_i = param_t.split(":"), var_o = var_d(var_i, 2),
  var_a = var_o[0], var_s = var_o[1], var_u = var_w(var_a), var_c_1 = var_w(var_s),
  param_r.n = 2, crypto.subtle.importKey("raw", var_n, {
  name: "AES-CTR"
  }
  , !1, ["decrypt"]);
  case 2:
  return var_f_1 = param_r.v, param_r.n = 3, crypto.subtle.decrypt({
  name: "AES-CTR",
  counter: var_u,
  length: 128
  }
  , var_f_1, var_c_1);
  case 3:
  return var_h_1 = param_r.v, param_r.a(2, new TextDecoder().decode(var_h_1));
  }
  }
  , var_r);
  }
  ));
  }
  var var__,
  var_E = ((var__ = {
  }
  ).Default = "v1", var__.Tiktok = "v2", var__.Google = "v3", var__),
  fn_S = param_t => {
  var str_e = "";
  switch (param_t.streamType) {
  case var_E.Tiktok:
  var var_r = param_t.segmentUri.split("/").pop();
  null != var_r && var_r.includes("~") && (var_r = var_r.split("~")[0]), str_e = `/redirector/${var_E.Tiktok}?key=${var_r}`;
  break;
  default:
  var var_n = param_t.segmentDomains[param_t.segmentIndex % param_t.segmentDomains.length],
  var_i = param_t.variant.replace("playlist.m3u8", "").slice(0, -1),
  var_o = param_t.segmentUri.replace(".png", ""),
  var_a = new URL(`/${param_t.videoId}/${var_i}/${var_o}.png`, var_n).href;
  str_e = `/redirector/${var_E.Default}?ref=${var_a}`;
  }
  return new URL(str_e, param_t.blockDomain).href;
  }
  ,
  obj_O = {
  getDomains: () => ["hentaiz", "ihentai.", "hentaivs."],
  forceUpdate() {
  location.href !== var_y && (EE.emit("widget.forceUpdate"), var_y = location.href);
  }
  ,
  parse: {
  sources: [{
  checkSource: param_t => param_t.url.includes("x.mimix"),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_m(void 0, void 0, void 0, var_l().m(function var_t() {
  var var_n, var_i, var_o, var_a, var_s;
  return var_l().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return var_n = var_e.url, var_i = [], var_o = new URL(var_n).pathname.split("/").filter(
  Boolean).pop(), var_s = JSON, param_t_1.n = 1, var_A(var_r, var_o ||
  "");
  case 1:
  return (var_a = var_s.parse.call(var_s, param_t_1.v)) && var_g(var_a, var_i, var_n),
  param_t_1.a(2, var_i);
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
  return /play\.sonar-cdn\.com.+/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return fn_m(void 0, void 0, void 0, var_l().m(function var_t() {
  var var_r, var_o, var_u, var_c_1, var_f_1, var_d_1, var_h_1, var_p_1, var_v_1,
  var_y_1, var_b_1, var_w_1, var___1, var_E_1;
  return var_l().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return var_o = new URL(var_e.url).origin, param_t_1.n = 1, Object(dep_dom_utils.sendMessage)(
  {
  type: dep_media_constants.b.GET_URL
  }
  );
  case 1:
  if ((var_u = param_t_1.v) && var_u.url) {
  param_t_1.n = 4;
  break;
  }
  return var_c_1 = [], var_f_1 = var_e.url, var_d_1 = new URL(var_f_1).searchParams,
  var_h_1 = var_d_1.get("v"), param_t_1.n = 2, Object(dep_dom_utils.sendMessage)(
  {
  type: dep_media_constants.b.CORS_FETCH,
  data: {
  url: "https://x.mimix.cc/watch/" + var_h_1,
  responseType: "text"
  }
  }
  );
  case 2:
  return var_p_1 = param_t_1.v, var_v_1 = var_p_1.data, var_E_1 = JSON, param_t_1.n = 3,
  var_A(var_v_1, var_h_1 || "");
  case 3:
  return (var_y_1 = var_E_1.parse.call(var_E_1, param_t_1.v)) &&
  var_g(var_y_1, var_c_1, var_f_1), param_t_1.a(2, var_c_1);
  case 4:
  return var_b_1 = null === (var_r = var_u.url.split("/streaming/")) ||
  void 0 === var_r ? void 0 : var_r[1], (var_w_1 = Object(dep_url_utils.f)(var_u.url)).url = var_u.url,
  var_w_1.referrer = var_o, var_w_1.ext = "m3u8", var_w_1.exts = ["m3u8"], var_w_1.type = "video",
  param_t_1.n = 5, Object(dep_media_sniffer.e)(var_u.content, var_w_1);
  case 5:
  return var___1 = (var___1 = param_t_1.v).map(param_t_2 => Object.assign(Object.assign(
  {
  }
  , param_t_2), {
  url: param_t_2.url.split("/streaming").join("/streaming/" + var_b_1)
  }
  )), param_t_1.n = 6, Promise.allSettled(var___1.map(param_t_2 => fn_m(void 0, void 0,
  void 0, var_l().m(function var_e_1() {
  var var_r_1;
  return var_l().w(function (param_e) {
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
  return var_r_1 = param_e.v, param_t_2.play_list = var_r_1.content, param_t_2.url = "https://google.com",
  param_e.a(2, param_t_2);
  case 2:
  param_e.p = 2, param_e.v;
  case 3:
  return param_e.a(2);
  }
  }
  , var_e_1, null, [[0, 2]]);
  }
  )))).then(param_t_2 => param_t_2.map(param_t_3 => param_t_3.value));
  case 6:
  return param_t_1.a(2, var___1);
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
  return Boolean(var_e.match(/kpi\.gooqlevideo\.com|gooqlevideo\.com\/play/));
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  try {
  var var_o = JSON.parse(var_r),
  var_a = `${var_o.segmentDomains[0]}/segment/${var_e.id}/`,
  num_s = 0;
  return var_o.playlists.mediaPlaylists.map(param_t_1 => {
  var var_r_1,
  var_u = var_o.qualities[num_s];
  num_s++;
  var var_c_1 = Object.assign({
  }
  , var_e);
  return var_c_1.play_list = param_t_1.source.replace(/,\\n(?=segment)|,undefined\n\d*\w\//g,
  `,\n${var_a}${var_u}/`).replace(/segment-/g, "").replace(/\.ts/g, ".html"), var_c_1.resolution = var_u,
  var_c_1.quality = Object(dep_dom_utils.i18n)(null === (var_r_1 = dep_media_constants.r[var_u]) ||
  void 0 === var_r_1 ? void 0 : var_r_1.i18n_label), var_c_1._hls = !0, var_c_1.url = var_a + (
  var_u + "/") + param_t_1.segments[0].uri.replace(/[\s\S]*segment-/g, "").replace(
  /\.ts/g, ".html"), var_c_1;
  }
  );
  }
  catch (var_t) {
  return [];
  }
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return /media\.sonar-cdn\.com\/.+/i.test(var_e);
  }
  ,
  parse: param_t => param_t.media
  }
  , ...((null === (var_v = dep_media_target_resolver.a.parse) ||
  void 0 === var_v ? void 0 : var_v.sources) || [])]
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /play\.sonar-cdn\.com\/.+/i.test(var_e);
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "m3u8", var_e.exts = ["video"], "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /media\.sonar-cdn\.com\/.+/i.test(var_e);
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_m(void 0, void 0, void 0, var_l().m(function var_t() {
  var var_r, var_o, var_s, var_f_1, var_d_1, var_h_1, var_p_1, var_v_1, var_m, var_y_1,
  var_g_1, var_b_1, var_w_1, var_A_1;
  return var_l().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return var_r = new URL(var_e).searchParams, var_o = var_r.get("v"), param_t_1.n = 1,
  Object(dep_dom_utils.sleep)(1e3);
  case 1:
  return param_t_1.n = 2, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: `https://ipa.irex.cc/storage/${var_o}.html`
  }
  }
  );
  case 2:
  return var_s = param_t_1.v, Promise.allSettled([]), param_t_1.n = 3, Object(dep_format_resolver.g)(
  var_o || "", var_s.url);
  case 3:
  var_f_1 = param_t_1.v, var_d_1 = JSON.parse(var_f_1), var_h_1 = [], var_p_1 = var_c(
  var_d_1.streaming.resolutions);
  try {
  for (var_p_1.s();
  !(var_v_1 = var_p_1.n()).done;
  ) {
  for (var_m = var_v_1.value, (var_y_1 = Object(dep_url_utils.f)(var_e)).url = var_e,
  var_y_1.resolution = var_m.height + "p", var_y_1.quality = Object(dep_dom_utils.i18n)(
  dep_media_constants.r[var_y_1.resolution].i18n_label), (var_g_1 = ["#EXTM3U"]).push(
  "#EXT-X-VERSION:3"), var_g_1.push("#EXT-X-TARGETDURATION:11"), var_g_1.push("#EXT-X-MEDIA-SEQUENCE:1"),
  var_g_1.push("#EXT-X-PLAYLIST-TYPE:VOD"), var_b_1 = 0;
  var_b_1 < var_m.segments.length;
  var_b_1++) var_w_1 = var_m.segments[var_b_1], var_A_1 = `${var_d_1.block.segmentDomains[0]}/storage/${var_o}/${var_m.key}/${var_w_1.key}.${var_w_1.ext}`, var_g_1.push(`#EXTINF:${var_w_1.duration},`), var_g_1.push(var_A_1);
  var_g_1.push("#EXT-X-ENDLIST"), var_y_1.play_list = var_g_1.join("\n"), var_y_1.ext = "m3u8",
  var_y_1.exts = ["m3u8"], var_y_1.type = "video", var_y_1.filename = var_d_1.video.title,
  var_h_1.push(var_y_1);
  }
  }
  catch (var_t_1) {
  var_p_1.e(var_t_1);
  }
  finally {
  var_p_1.f();
  }
  return param_t_1.a(2, var_h_1);
  }
  }
  , var_t);
  }
  ));
  }
  }
  , {
  checkUrl: param_t => param_t.url.includes("rr6-sn-8qj-i5o6k.gooqlevideo.com"),
  getUrl: param_t => {
  var var_e = param_t.url.split("/");
  return "https://kpi.gooqlevideo.com/segment/" + (var_e.pop() ||
  var_e.pop());
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = param_t.node;
  var_e.ext = "m3u8";
  var var_n = var_r.src.split("/");
  return var_e.id = var_n.pop() || var_n.pop(), "video";
  }
  }
  , ...(dep_media_target_resolver.a.urls || []), {
  checkUrl: param_t => "IFRAME" === param_t.node.tagName,
  getUrl: param_t => {
  var var_e = param_t.url,
  var_r = param_t.ids;
  return fn_m(void 0, void 0, void 0, var_l().m(function var_t() {
  var var_i, var_o, var_a, var_s, var_u;
  return var_l().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (!var_r.length) {
  param_t_1.n = 3;
  break;
  }
  if (!Object(dep_dom_utils.isSpecialUrls)(var_r[0].url)) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.n = 1, Object(dep_dom_utils.send)("GET", var_r[0].url);
  case 1:
  if (var_i = param_t_1.v, var_o = var_i.responseText) try {
  var_a = JSON.parse(var_o), var_r[0].url = var_a.manifest;
  }
  catch (var_t_1) {
  }
  case 2:
  param_t_1.n = 4;
  break;
  case 3:
  return var_s = var_e.split("/"), var_u = var_s[var_s.length - 1], param_t_1.a(
  2, "https://loading.irec.top/api/hls/" + var_u + "/playlist.m3u8");
  case 4:
  return param_t_1.a(2);
  }
  }
  , var_t);
  }
  ));
  }
  }
  ],
  idsProcess(param_t) {
  var var_e = param_t.defaultIds,
  var_r = param_t.id,
  var_n = param_t.index;
  var_r.url.includes("playhubconnect") && "mp4" === var_r.ext &&
  var_e.splice(var_n, 1);
  }
  };
  exportsObj.default = obj_O;
  };
