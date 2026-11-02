// Module 330 - Savior Sexhihi_org Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_extractor_url_merger = requireFn(23),
  dep_dom_utils = requireFn(0),
  dep_token_hash_util = requireFn(45),
  dep_media_constants = requireFn(1),
  dep_media_sniffer = requireFn(6),
  dep_url_utils = requireFn(3),
  dep_dom_helper = requireFn(12);
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
  var_c_1 = Object.create(var_u_1.prototype);
  return var_f(var_c_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
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
  function var_c() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_f(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_c.prototype = var_s.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_c) :
  (param_t.__proto__ = var_c, var_f(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_u.prototype = var_c, var_f(var_h, "constructor", var_c), var_f(var_c,
  "constructor", var_u), var_u.displayName = "GeneratorFunction", var_f(var_c, var_i,
  "GeneratorFunction"), var_f(var_h), var_f(var_h, var_i, "Generator"), var_f(var_h,
  var_n, function () {
  return this;
  }
  ), var_f(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_l = function () {
  return {
  w: var_o,
  m: var_p
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
  var fn_d = function (param_t, param_e, param_r, param_n) {
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
  obj_h = {
  }
  ,
  obj_p = {
  }
  ,
  obj_v = {
  getDomains: () => ["phimsex69", "sexphimhd.net", "sex333.net", "sexhihi", "sex5.pro",
  "cu3x.net", "sexmoi.cc", "sexmoi.buzz", "londep.pro", "phimsexmy", "jav678.net",
  "xemsex.vip", "phimsex.ink", "haysex.net", "haysex3xyz.net", "xxvn.me", "javnhe.",
  "javpro.biz", "top1sex.cc", "phimsexxnxx.net", "kichdam.cc", "heovl.", "sex2024.",
  "sexviet88.", "vlxyz.tube", "heo69.moe", "lenlut.tv", "sexsoc.", "sexvietco.",
  "sexviettop.", "vlxxai.", "clipsexquaylen", "sexdep.", "sextop1.", "simplyglitz.",
  "guitest."],
  siteMatcher: (param_t, param_e) => Boolean(param_t.match(/^javhd\.(?!today)/i)),
  isValidVideoNode: param_t => !("IFRAME" != param_t.nodeName ||
  !param_t.src.match(/\/\/streamobs\./i)) || Object(dep_dom_helper.m)(param_t),
  urls: [{
  checkUrl: param_t => param_t.url.includes("streamqq.com"),
  getUrl: param_t => {
  param_t.url;
  return fn_d(void 0, void 0, void 0, var_l().m(function var_t() {
  return var_l().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (!obj_h[location.href]) {
  param_t_1.n = 1;
  break;
  }
  return param_t_1.a(2, [obj_h[location.href]]);
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
  checkUrl: param_t => param_t.url.includes(".cdn-xvideos-xnxx.xyz"),
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "mp4", var_e.exts = ["mp4"], "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /sanstream\.xyz\/video/i.test(var_e);
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url,
  var_r = new URL(var_e);
  var_r.pathname += "/master.html";
  var var_n = Object(dep_url_utils.f)(var_r.href);
  return var_n.ext = "m3u8", var_n.exts = ["m3u8"], var_n.type = "video", [var_n];
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.node;
  return !!(null == var_e ? void 0 : var_e.closest("[data-video-src]"));
  }
  ,
  getUrl: param_t => {
  var var_e,
  var_r = param_t.node,
  var_n = null === (var_e = null == var_r ? void 0 : var_r.closest("[data-video-src]")) ||
  void 0 === var_e ? void 0 : var_e.getAttribute("data-video-src");
  return var_n || [];
  }
  ,
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_i = (null === (var_r = null === (var_e = document.querySelector(".dsp-title")) ||
  void 0 === var_e ? void 0 : var_e.textContent) || void 0 === var_r ?
  void 0 : var_r.trim()) || document.title;
  return var_n.filename = var_i, var_n.fixName = var_i, var_n.ext = "m3u8", var_n.exts = ["m3u8"],
  "video";
  }
  }
  , {
  checkUrl: () => !!obj_h[location.href],
  getUrl: () => fn_d(void 0, void 0, void 0, var_l().m(function var_t() {
  return var_l().w(function (param_t) {
  for (;;
  ) switch (param_t.n) {
  case 0:
  return param_t.a(2, [obj_h[location.href]]);
  }
  }
  , var_t);
  }
  ))
  }
  ],
  default: {
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = param_t.node;
  return fn_d(void 0, void 0, void 0, var_l().m(function var_t() {
  var var_n, var_o;
  return var_l().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (var_n = var_r.src, !obj_h[location.href]) {
  param_t_1.n = 4;
  break;
  }
  if (obj_p[var_n]) {
  param_t_1.n = 3;
  break;
  }
  return param_t_1.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: obj_h[location.href].url
  }
  }
  );
  case 1:
  if (!(var_o = param_t_1.v) || !var_o.url) {
  param_t_1.n = 2;
  break;
  }
  return obj_p[var_n] = var_o.url, Object.assign(var_e, obj_h[location.href]), var_e.realRes = var_o.url,
  var_e.ext = "m3u8", var_e.exts = ["m3u8"], var_e.url = location.href, var_e.referrer = var_n,
  param_t_1.a(2, "video");
  case 2:
  param_t_1.n = 4;
  break;
  case 3:
  return Object.assign(var_e, obj_h[location.href]), var_e.url = location.href, var_e.ext = "m3u8",
  var_e.exts = ["m3u8"], var_e.referrer = var_n, var_e.realRes = obj_p[var_n], param_t_1.a(
  2, "video");
  case 4:
  return param_t_1.a(2);
  }
  }
  , var_t);
  }
  ));
  }
  }
  ,
  parse: {
  sources: [{
  checkSource: param_t => param_t.url.includes(".cdn-xvideos-xnxx.xyz"),
  parse: param_t => {
  var var_e = param_t.media;
  return fn_d(void 0, void 0, void 0, var_l().m(function var_t() {
  var var_r, var_n;
  return var_l().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 1:
  if (!(null == (var_r = param_t_1.v) ? void 0 : var_r.url)) {
  param_t_1.n = 3;
  break;
  }
  return param_t_1.n = 2, Object(dep_media_sniffer.e)(var_r.url, var_e);
  case 2:
  return (var_n = param_t_1.v).forEach(param_t_2 => {
  param_t_2.ext = "m3u8", param_t_2.exts = ["m3u8"], param_t_2.extraData = var_e.extraData;
  }
  ), 1 == var_n.length && var_n[0].url == var_e.url && (var_n[0].play_list = var_r.url,
  var_n[0].type = "video"), param_t_1.a(2, var_n);
  case 3:
  return param_t_1.a(2, []);
  }
  }
  , var_t);
  }
  ));
  }
  }
  , {
  checkSource: param_t => param_t.url.includes("streamqq"),
  parse: param_t => {
  var var_e = param_t.media;
  return fn_d(void 0, void 0, void 0, var_l().m(function var_t() {
  var var_r, var_n;
  return var_l().w(function (param_t_1) {
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
  if (!(null == (var_r = param_t_1.v) ? void 0 : var_r.url)) {
  param_t_1.n = 3;
  break;
  }
  return param_t_1.n = 2, Object(dep_media_sniffer.e)(var_r.url, var_e);
  case 2:
  return var_n = param_t_1.v, param_t_1.a(2, var_n);
  case 3:
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
  processRequestIds: param_t => {
  if (param_t.url.match(/(master|video|playlist|hls|index|m3u8\/.+)\.m3u8/)) return obj_h[location.href] = param_t,
  !0;
  }
  };
  exportsObj.default = Object(dep_extractor_url_merger.a)(dep_token_hash_util.a,
  ["urls", "parse", "processRequestIds"])(obj_v);
  };
