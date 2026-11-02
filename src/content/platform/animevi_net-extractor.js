// Module 201 - Savior Animevi_net Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_constants = requireFn(1),
  dep_url_utils = requireFn(3),
  dep_dom_utils = requireFn(0),
  dep_media_sniffer = requireFn(6);
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
  obj_d_1 = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_1,
  f: var_h_1.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_2 = 0, var_u_1 = var_t, obj_d_1.n = param_r_2,
  obj_a;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_s_2 = param_r_2, var_u_1 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
  var_h_2 = obj_d_1.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_u_1 = var_o_2[(var_s_2 = var_o_2[4]) ?
  5 : (var_s_2 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_s_2 = 0, obj_d_1.v = param_n_2,
  obj_d_1.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d_1.n = var_p_1, var_s_2 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_s_2 = param_l, var_u_1 = param_p;
  (var_e = var_s_2 < 2 ? var_t : var_u_1) || !flag_f;
  ) {
  var_o_1 || (var_s_2 ? var_s_2 < 3 ? (var_s_2 > 1 && (obj_d_1.n = -1), var_h_1(
  var_s_2, var_u_1)) : obj_d_1.n = var_u_1 : obj_d_1.v = var_u_1);
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
  else if ((var_e = (flag_f = obj_d_1.n < 0) ? var_u_1 : param_r_1.call(param_n_1,
  obj_d_1)) !== obj_a) break;
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
  regex_f = /ssplay\.net\/v\/(\d+)\.html/i,
  obj_d = {
  }
  ,
  obj_h = {
  processRequestIds: /animevietsub\./i.test(location.host) ?
  void 0 : param_t => {
  var var_e,
  var_r,
  var_n = null === (var_r = null === (var_e = param_t.url) ||
  void 0 === var_e ? void 0 : var_e.match(/ssplay\.net\/[a-z0-9]{2,4}\/\d+\/(\d+)\/[a-z0-9]+\/[a-z0-9]+/i)) ||
  void 0 === var_r ? void 0 : var_r[1];
  return (!var_n || !obj_l[var_n]) && (var_n ? (obj_l[var_n] = param_t, param_t.type = "video",
  !0) : param_t.url.match(/ssplay\.net\/[a-z0-9]{2,4}\/(\d+\/(\d+)\/[a-z0-9]+\/[a-z0-9]+|[a-z\d]+\/[a-z\d]+)/i) ?
  (obj_l[location.href] = param_t, param_t.filename = document.title, param_t.referrer = "https://ssplay.net/",
  param_t.type = "video", !0) : param_t.url.match(/index\.m3u8/i) ?
  (obj_l[location.href] = param_t, param_t.filename = document.title, param_t.type = "video",
  !0) : void 0);
  }
  ,
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return /(storage|stream)\.googleapiscdn\.com\/player/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return fn_c(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_r, var_i, var_a;
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  return param_t_1.p = 0, param_t_1.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.SCRIPTING.INJECT,
  frameUrl: var_e.url,
  file: "animevietsub"
  }
  );
  case 1:
  return var_r = param_t_1.v, (var_i = var_e).play_list = var_r, var_i.url = "https://google.com",
  param_t_1.a(2, [var_i]);
  case 2:
  return param_t_1.p = 2, var_a = param_t_1.v, Object(dep_dom_utils.sendMessage)(
  {
  type: dep_media_constants.b.CONSOLE_LOG,
  params: {
  error: String(var_a)
  }
  }
  ), param_t_1.a(2, []);
  }
  }
  , var_t, null, [[0, 2]]);
  }
  ));
  }
  }
  , {
  checkSource: param_t => param_t.url.includes("ssplay.net"),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_c(void 0, void 0, void 0, var_s().m(function var_t() {
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
  return var_r = param_t_1.v, param_t_1.a(2, Object(dep_media_sniffer.e)(var_r.url,
  var_e));
  }
  }
  , var_t);
  }
  ));
  }
  }
  , {
  checkSource: param_t => param_t.url.includes("/ajax/player"),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_c(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_a, var_u_1, var_c, var_l;
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  return param_t_1.p = 0, var_a = JSON.parse(var_r), document.body.setAttribute(
  "savior-decode-needed", JSON.stringify(var_a)), param_t_1.n = 1, Object(dep_dom_utils.sendMessage)(
  {
  type: dep_media_constants.b.SCRIPTING.INJECT,
  file: "animevietsub"
  }
  );
  case 1:
  return var_u_1 = param_t_1.v, var_c = JSON.parse(var_u_1), var_l = var_c.map(param_t_2 => "link" == param_t_2.type ?
  Object.assign(Object.assign({
  }
  , Object(dep_url_utils.f)(param_t_2.data)), {
  type: "video"
  }
  ) : Object.assign(Object.assign({
  }
  , var_e), {
  originalUrl: var_e.url,
  url: "https://google.com",
  referrer: location.origin,
  play_list: param_t_2.data
  }
  )), param_t_1.a(2, var_l);
  case 2:
  return param_t_1.p = 2, param_t_1.v, param_t_1.a(2, []);
  }
  }
  , var_t, null, [[0, 2]]);
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
  return /(storage|stream)\.googleapiscdn\.com\/player/i.test(var_e);
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_c(void 0, void 0, void 0, var_s().m(function var_t() {
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.a(2, var_e);
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return fn_c(void 0, void 0, void 0, var_s().m(function var_t() {
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return var_e.filename = document.title, var_e.ext = "m3u8", param_t_1.a(2, "video");
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
  return Boolean(decodeURIComponent(var_e).match(regex_f));
  }
  ,
  getUrl(param_t) {
  var var_e,
  var_r,
  var_n,
  var_i,
  var_o = param_t.url,
  var_a = param_t.node,
  var_s_1 = null === (var_e = var_o.match(regex_f)) || void 0 === var_e ?
  void 0 : var_e[1],
  var_u_1 = null === (var_i = null === (var_n = null === (var_r = var_a.parentElement) ||
  void 0 === var_r ? void 0 : var_r.parentElement) || void 0 === var_n ?
  void 0 : var_n.querySelector(".div-film-info a")) || void 0 === var_i ?
  void 0 : var_i.title;
  return var_s_1 && obj_l[var_s_1] ? (obj_l[var_s_1].filename = var_u_1, [obj_l[var_s_1]]) :
  obj_l[location.href] ? [obj_l[location.href]] : void 0;
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /animevi(sub)?\.net\/embed_/i.test(var_e);
  }
  ,
  getUrl(param_t) {
  var var_e,
  var_r,
  var_n,
  var_i,
  var_o = param_t.node,
  var_a = var_o.contentDocument,
  var_s_1 = null == var_a ? void 0 : var_a.querySelector("iframe");
  if (var_s_1) {
  var var_u_1 = null === (var_e = var_s_1.src.match(regex_f)) ||
  void 0 === var_e ? void 0 : var_e[1],
  var_c = null === (var_i = null === (var_n = null === (var_r = var_o.parentElement) ||
  void 0 === var_r ? void 0 : var_r.parentElement) || void 0 === var_n ?
  void 0 : var_n.querySelector(".div-film-info a")) || void 0 === var_i ?
  void 0 : var_i.title;
  if (var_u_1 && obj_l[var_u_1]) return obj_l[var_u_1].filename = var_c, [obj_l[var_u_1]];
  }
  return obj_l[location.href] ? [obj_l[location.href]] : "blob:";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /\.opstream\d*\.com\/share\//i.test(var_e);
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_c(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_r;
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (obj_d[var_e]) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 1:
  (var_r = param_t_1.v) && var_r.url && (obj_d[var_e] = var_r.url);
  case 2:
  return param_t_1.a(2, obj_d[var_e]);
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
  return /animevietsub\./i.test(location.host) && var_e.startsWith("blob:");
  }
  ,
  getUrl: () => location.origin + "/ajax/player",
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n,
  var_i,
  var_o = param_t.mediaObject,
  var_a = param_t.node;
  var_o.filename = document.title;
  var var_s_1 = var_a.closest("main");
  if (var_s_1) {
  var var_u_1 = null === (var_e = var_s_1.querySelector("h1.Title")) ||
  void 0 === var_e ? void 0 : var_e.innerText,
  var_c = null === (var_r = var_s_1.querySelector("ul li.active, ul li.playing")) ||
  void 0 === var_r ? void 0 : var_r.innerText;
  var_u_1 && var_c && (var_o.filename = `${var_u_1}- ${var_c}`);
  }
  var var_l = null === (var_n = location.href.match(/.+a(\d+)\/.+\.html/i)) ||
  void 0 === var_n ? void 0 : var_n[1],
  var_f = null === (var_i = document.querySelector('#links-backup a[data-play="api"]')) ||
  void 0 === var_i ? void 0 : var_i.getAttribute("data-href");
  if (var_l && var_f) return var_o.ext = "m3u8", var_o.requestMethod = "POST", var_o.params = {
  link: var_f,
  id: var_l
  }
  , "video";
  }
  }
  ],
  getDomains: () => ["animevi.net", "animevisub.net", "luotphim1.net", "luotphim2.net",
  "luotphimtv1.vip", "animevietsub.", "anime14."],
  siteMatcher: param_t => Boolean(param_t.match(/anime\d+\./))
  };
  exportsObj.default = obj_h;
  };
