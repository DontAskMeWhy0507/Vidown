// Module 318 - Savior Phimtv_cv Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_url_utils = requireFn(3),
  dep_media_sniffer = requireFn(6);
  function var_o() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_s(param_r, param_n, param_i, param_o) {
  var var_s_1 = param_n && param_n.prototype instanceof var_c ?
  param_n : var_c,
  var_l_2 = Object.create(var_s_1.prototype);
  return var_a(var_l_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_a_1,
  var_s_2,
  num_c = 0,
  var_l_3 = param_i_1 || [],
  flag_f = !1,
  obj_d_1 = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_1,
  f: var_h_1.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_a_1 = 0, var_s_2 = var_t, obj_d_1.n = param_r_2,
  obj_u;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_a_1 = param_r_2, var_s_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_3.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_3[var_e],
  var_h_2 = obj_d_1.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_s_2 = var_o_2[(var_a_1 = var_o_2[4]) ?
  5 : (var_a_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_a_1 = 0, obj_d_1.v = param_n_2,
  obj_d_1.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d_1.n = var_p_1, var_a_1 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_u;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_a_1 = param_l, var_s_2 = param_p;
  (var_e = var_a_1 < 2 ? var_t : var_s_2) || !flag_f;
  ) {
  var_o_1 || (var_a_1 ? var_a_1 < 3 ? (var_a_1 > 1 && (obj_d_1.n = -1), var_h_1(
  var_a_1, var_s_2)) : obj_d_1.n = var_s_2 : obj_d_1.v = var_s_2);
  try {
  if (num_c = 2, var_o_1) {
  if (var_a_1 || (param_i_2 = "next"), var_e = var_o_1[param_i_2]) {
  if (!(var_e = var_e.call(var_o_1, var_s_2))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_s_2 = var_e.value, var_a_1 < 2 && (var_a_1 = 0);
  }
  else 1 === var_a_1 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_a_1 < 2 &&
  (var_s_2 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_a_1 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d_1.n < 0) ? var_s_2 : param_r_1.call(param_n_1,
  obj_d_1)) !== obj_u) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_a_1 = 1, var_s_2 = var_e_1;
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
  var obj_u = {
  };
  function var_c() {
  }
  function var_l_1() {
  }
  function var_f_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_a(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f_1.prototype = var_c.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f_1) :
  (param_t.__proto__ = var_f_1, var_a(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l_1.prototype = var_f_1, var_a(var_h, "constructor", var_f_1), var_a(
  var_f_1, "constructor", var_l_1), var_l_1.displayName = "GeneratorFunction", var_a(
  var_f_1, var_i, "GeneratorFunction"), var_a(var_h), var_a(var_h, var_i, "Generator"),
  var_a(var_h, var_n, function () {
  return this;
  }
  ), var_a(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_o = function () {
  return {
  w: var_s,
  m: var_p
  };
  }
  )();
  }
  function var_a(param_t, param_e, param_r, param_n) {
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
  (var_a = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o_1(param_e_2, param_r_2) {
  var_a(param_t_1, param_e_2, function (param_t_2) {
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
  ) : param_t_1[param_e_1] = param_r_1 : (var_o_1("next", 0), var_o_1("throw", 1),
  var_o_1("return", 2));
  }
  )(param_t, param_e, param_r, param_n);
  }
  var fn_s = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a_1(param_t_1) {
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
  )).then(var_a_1, var_s);
  }
  var_u((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  }
  ,
  regex_u = /kkphimplayer\d*\.com|phim1280/i,
  regex_c = /mtstreamc|alostream/i;
  function var_l() {
  return [...document.querySelectorAll("a.streaming-server[data-link]")].map(param_t => {
  var var_e,
  var_r = param_t.getAttribute("data-link");
  return var_r ? {
  link: var_r,
  type: param_t.getAttribute("data-type") || "m3u8",
  name: (null === (var_e = param_t.textContent) || void 0 === var_e ?
  void 0 : var_e.trim()) || "",
  id: param_t.getAttribute("data-id") || ""
  }
  : null;
  }
  ).filter(param_t => Boolean(param_t)).filter(param_t => ["m3u8", "mp4"].includes(
  param_t.type));
  }
  function var_f(param_t) {
  var var_e = Object(dep_url_utils.f)(param_t.link);
  return var_e.type = "video", var_e.ext = "mp4" === param_t.type ?
  "mp4" : "m3u8", var_e.exts = [var_e.ext], var_e.referrer = location.href, var_e.filename = param_t.name ?
  `${document.title}[${param_t.name}]` : document.title, param_t.id && (var_e.identifier = `${param_t.id}-${param_t.name || param_t.link}`), var_e;
  }
  var obj_d = {
  getDomains: () => ["phimtv."],
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return "VIDEO" === param_t.node.nodeName && var_e.startsWith("blob:");
  }
  ,
  getUrl: () => {
  var var_t = var_l();
  if (var_t.length) return var_t.map(var_f);
  }
  ,
  mediaObjectChange(param_t) {
  var var_e = param_t.mediaObject;
  if (!var_e.url.startsWith("blob:")) return var_e.ext = var_e.ext ||
  "m3u8", var_e.exts = var_e.exts || ["m3u8"], "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /\/1day2love\/(play\/embed|me\/x)\.php/i.test(var_e);
  }
  ,
  getUrl: param_t => param_t.url,
  mediaObjectChange(param_t) {
  var var_e = param_t.mediaObject;
  return var_e.ext = "m3u8", var_e.exts = ["m3u8"], var_e.referrer = location.href,
  "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return regex_u.test(var_e) && var_e.includes(".m3u8");
  }
  ,
  getUrl: param_t => param_t.url,
  mediaObjectChange(param_t) {
  var var_e = param_t.mediaObject;
  return var_e.ext = "m3u8", var_e.exts = ["m3u8"], var_e.referrer = location.href,
  "video";
  }
  }
  ],
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return /\/1day2love\/(play\/embed|me\/x)\.php/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_s(void 0, void 0, void 0, var_o().m(function var_t() {
  var var_n, var_a_1;
  return var_o().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (param_t_1.p = 0, null == (var_n = var_r) ? void 0 : var_n.match(/#extm3u/i)) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.n = 1, fetch(var_e.url, {
  credentials: "include"
  }
  ).then(param_t_2 => param_t_2.text());
  case 1:
  var_n = param_t_1.v;
  case 2:
  return param_t_1.n = 3, Object(dep_media_sniffer.e)(var_n, var_e);
  case 3:
  return var_a_1 = param_t_1.v, param_t_1.a(2, var_a_1.map(param_t_2 => Object.assign(
  Object.assign({
  }
  , param_t_2), {
  referrer: location.href
  }
  )));
  case 4:
  return param_t_1.p = 4, param_t_1.v, param_t_1.a(2, []);
  }
  }
  , var_t, null, [[0, 4]]);
  }
  ));
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return regex_u.test(var_e) && var_e.includes(".m3u8");
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_s(void 0, void 0, void 0, var_o().m(function var_t() {
  var var_n;
  return var_o().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, Object(dep_media_sniffer.e)(var_r, var_e);
  case 1:
  return var_n = param_t_1.v, param_t_1.a(2, var_n.map(param_t_2 => {
  var var_e_1,
  var_r_1 = Object.assign(Object.assign({
  }
  , param_t_2), {
  referrer: location.href
  }
  );
  return var_r_1.play_list = (var_e_1 = var_r_1.play_list) ?
  var_e_1.split("#EXT-X-DISCONTINUITY").filter(param_t_3 => !(param_t_3.match(/^\s*#ext-x-key:method=none/i) ||
  param_t_3.length < 100)).join("\n") : var_e_1, var_r_1;
  }
  ));
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
  idsProcess(param_t) {
  var var_e = param_t.defaultIds,
  var_r = param_t.id,
  var_n = param_t.index,
  var_i = var_r.url;
  if (var_i.includes("/1day2love/play/embed.php") || var_i.includes("/1day2love/me/x.php")) {
  var var_o_1 = var_l().find(param_t_1 => function (param_t_2) {
  try {
  var var_e_1 = new URL(param_t_2).pathname;
  return (regex_u.test(param_t_2) || regex_c.test(param_t_2)) &&
  !param_t_2.includes("phimapi") && var_e_1.endsWith(".m3u8");
  }
  catch (var_t) {
  return !1;
  }
  }
  (param_t_1.link));
  var_o_1 && var_e.some(param_t_1 => param_t_1.url.includes(var_o_1.link)) &&
  var_e.splice(var_n, 1);
  }
  }
  };
  exportsObj.default = obj_d;
  };
