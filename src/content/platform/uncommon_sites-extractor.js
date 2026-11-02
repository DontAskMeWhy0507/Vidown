// Module 364 - Savior Uncommon_sites Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_sniffer = requireFn(6),
  dep_extractor_url_merger = requireFn(23),
  dep_stream_cipher_helper = requireFn(31),
  dep_url_utils = requireFn(3),
  dep_media_constants = requireFn(1);
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
  a: var_h_2,
  f: var_h_2.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_1 = 0, var_u_2 = var_t, obj_d_1.n = param_r_2,
  obj_a;
  }
  };
  function var_h_2(param_r_2, param_n_2) {
  for (var_s_1 = param_r_2, var_u_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
  var_h_3 = obj_d_1.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_u_2 = var_o_2[(var_s_1 = var_o_2[4]) ?
  5 : (var_s_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_3 &&
  ((var_i_1 = param_r_2 < 2 && var_h_3 < var_o_2[1]) ? (var_s_1 = 0, obj_d_1.v = param_n_2,
  obj_d_1.n = var_o_2[1]) : var_h_3 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d_1.n = var_p_1, var_s_1 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_2(param_l, param_p), var_s_1 = param_l, var_u_2 = param_p;
  (var_e = var_s_1 < 2 ? var_t : var_u_2) || !flag_f;
  ) {
  var_o_1 || (var_s_1 ? var_s_1 < 3 ? (var_s_1 > 1 && (obj_d_1.n = -1), var_h_2(
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
  var_h_1 = var_f.prototype = var_s.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_c(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h_1), param_t;
  }
  return var_l.prototype = var_f, var_c(var_h_1, "constructor", var_f), var_c(var_f,
  "constructor", var_l), var_l.displayName = "GeneratorFunction", var_c(var_f, var_i,
  "GeneratorFunction"), var_c(var_h_1), var_c(var_h_1, var_i, "Generator"), var_c(
  var_h_1, var_n, function () {
  return this;
  }
  ), var_c(var_h_1, "toString", function () {
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
  obj_f = {
  }
  ,
  obj_d = {
  };
  function var_h(param_t) {
  return fn_l(this, void 0, void 0, var_u().m(function var_e() {
  return var_u().w(function (param_e) {
  for (;;
  ) switch (param_e.n) {
  case 0:
  if (obj_f[param_t]) {
  param_e.n = 2;
  break;
  }
  return param_e.n = 1, fetch(param_t).then(param_t_1 => param_t_1.text());
  case 1:
  obj_f[param_t] = param_e.v;
  case 2:
  return param_e.a(2, obj_f[param_t]);
  }
  }
  , var_e);
  }
  ));
  }
  var list_p = [],
  obj_v = {
  getDomains: () => ["radiotruyen.info", "asian-xnxx.com", "xemphimhdc.", "eporner.com",
  "prokerala.com", "pixabay.com", "medi-cine.online", "news.qq.com", "tv360.vn",
  "corporatefinanceinstitute.com", "you-porn.com", "truyen.audio", "gitiho.com"],
  getCustomParent: param_t => location.host.includes("you-porn.com") ?
  param_t.closest("#videoContainer, #videoWrapper, .playWrapper") :
  "gitiho.com" == location.host ? param_t.closest(".study-content .container") :
  null,
  shouldWidgetAttachToParentNode: param_t => "gitiho.com" == location.host,
  toggleLight: {
  turnOff: {
  updated: "gitiho.com" == location.host ? (param_t, param_e) => {
  var var_r,
  var_n = null === (var_r = param_e.parent.$node) || void 0 === var_r ?
  void 0 : var_r.closest("#page-content-wrapper>div");
  var_n && var_n.classList.remove("--savior-overlay-z-index-reset");
  }
  : void 0
  }
  }
  ,
  isMiniPlayerNode: param_t => location.host.match(/(www\.)?prokerala\.com/i) ?
  param_t.matches(".dummy1px, #dummyV5, #dummyV6") : !!location.host.match(/(www\.)?pixabay\.com/i) &&
  param_t.matches('[class*="verticalMasonry"] a[class*="link"] video'),
  beforeGetUrl() {
  return fn_l(this, void 0, void 0, var_u().m(function var_t() {
  var var_e, var_r, var_n, var_i;
  return var_u().w(function (param_t) {
  for (;;
  ) switch (param_t.p = param_t.n) {
  case 0:
  if (!location.hostname.endsWith("medi-cine.online")) {
  param_t.n = 4;
  break;
  }
  if (!obj_d[location.href]) {
  param_t.n = 1;
  break;
  }
  return param_t.a(2);
  case 1:
  return param_t.p = 1, param_t.n = 2, fetch(location.href).then(param_t_1 => param_t_1.text(
  ));
  case 2:
  var_e = param_t.v, var_r = new DOMParser(), var_n = var_r.parseFromString(var_e,
  "text/html"), obj_d[location.href] = var_n, var_i = Array.from(var_n.querySelectorAll(
  'video[data-target="video.player"]')), Array.from(document.querySelectorAll('video[data-target="video.player"]')).forEach(
  (param_t_1, param_e) => {
  var var_r_1;
  param_t_1.setAttribute("savior-src", null === (var_r_1 = var_i[param_e]) ||
  void 0 === var_r_1 ? void 0 : var_r_1.src);
  }
  ), param_t.n = 4;
  break;
  case 3:
  return param_t.p = 3, param_t.v, param_t.a(2);
  case 4:
  return param_t.a(2);
  }
  }
  , var_t, null, [[1, 3]]);
  }
  ));
  }
  ,
  urls: [{
  checkUrl: () => /radiotruyen\.([a-z0-9]+)/i.test(location.href),
  mediaObjectChange(param_t) {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_i = null === (var_r = null === (var_e = param_t.node.closest(".audio-tag, #new-player")) ||
  void 0 === var_e ? void 0 : var_e.querySelector(".jp-title")) ||
  void 0 === var_r ? void 0 : var_r.innerText;
  return var_i && (var_n.filename = var_i), var_n.type;
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /truyen\.audio/i.test(location.href) && var_e.startsWith("data:");
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_r, var_n;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, fetch(var_e).then(param_t_2 => param_t_2.blob());
  case 1:
  return var_r = param_t_1.v, var_n = URL.createObjectURL(var_r), param_t_1.a(2,
  var_n);
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange(param_t) {
  var var_e,
  var_r,
  var_n,
  var_i,
  var_o = param_t.mediaObject,
  var_a = null === (var_r = null === (var_e = document.querySelector('h2 [itemprop="name"]')) ||
  void 0 === var_e ? void 0 : var_e.innerText) || void 0 === var_r ?
  void 0 : var_r.trim(),
  var_s = null === (var_i = null === (var_n = document.querySelector('button[name]:has([data-testid="FastForwardIcon"])')) ||
  void 0 === var_n ? void 0 : var_n.innerText) || void 0 === var_i ?
  void 0 : var_i.trim(),
  var_u_1 = document.title;
  return var_a && (var_u_1 = var_a), var_s && (var_u_1 = var_u_1 + " - " + var_s),
  var_o.filename = var_u_1, var_o.ext = "mp3", var_o.exts = ["mp3"], "audio";
  }
  }
  , {
  checkUrl: () => /asian-xnxx\.com/i.test(location.href),
  mediaObjectChange(param_t) {
  var var_e = param_t.mediaObject;
  return var_e.useTrueRelativeUrl = !0, var_e.referrer = "https://upornia.com", var_e.type;
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /^(www\.)?prokerala\.com/i.test(location.host) && var_e.startsWith("blob:");
  }
  ,
  getUrl: param_t => {
  var var_e,
  var_r,
  var_n = param_t.node;
  if (var_n.hasAttribute("savior-found-url")) return var_n.getAttribute("savior-found-url");
  var var_i = null === (var_e = var_n.closest(".slikeplayer")) ||
  void 0 === var_e ? void 0 : var_e.parentElement;
  if (!var_i) return [];
  var var_o = null === (var_r = var_i.style.backgroundImage.match(/url\(["'"](.+)["'"]\)/i)) ||
  void 0 === var_r ? void 0 : var_r[1];
  if (!var_o) return [];
  var var_a = ("https:" + var_o).split("/").slice(0, -1).join("/") + "/hls/master.m3u8";
  return var_n.setAttribute("savior-found-url", var_a), var_a;
  }
  ,
  mediaObjectChange: param_t => (param_t.mediaObject.type = "video", "video")
  }
  , {
  checkUrl: () => /([a-z0-9]+\.)?medi-cine\.online/i.test(location.href),
  getUrl: param_t => {
  var var_e = param_t.node,
  var_r = param_t.ids,
  var_n = var_e.getAttribute("savior-src");
  return var_n || var_r;
  }
  ,
  mediaObjectChange(param_t) {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_i = null === (var_r = null === (var_e = param_t.node.closest('[data-editor="section"]')) ||
  void 0 === var_e ? void 0 : var_e.querySelector("h1")) || void 0 === var_r ?
  void 0 : var_r.innerText.trim();
  var_i && (var_n.filename = var_i, var_n.fixName = var_i);
  }
  }
  , {
  checkUrl: () => "tv360.vn" == location.host,
  getUrl: () => {
  if (!location.href.includes("/movie/")) {
  var var_t = new URLSearchParams(location.search);
  return var_t.has("pid") || var_t.has("v") ? void 0 : [];
  }
  }
  ,
  mediaObjectChange(param_t) {
  var var_e,
  var_r = param_t.mediaObject,
  var_n = new URLSearchParams(location.search).get("pid"),
  var_i = null === (var_e = document.querySelector(`#program-${var_n}[title]`)) || void 0 === var_e ? void 0 : var_e.innerText;
  return var_r.filename = var_i, var_r.fixName = var_i, var_r.type;
  }
  }
  , {
  checkUrl: () => "gitiho.com" == location.host,
  getUrl: param_t => {
  var var_e = param_t.ids,
  regex_r = /sources: ?["']([^'"]+)["']/i,
  var_n = Array.from(document.querySelectorAll('script[type="text/javascript"]:not([src])')).map(
  param_t_1 => {
  var var_e_1;
  return null === (var_e_1 = param_t_1.textContent) || void 0 === var_e_1 ?
  void 0 : var_e_1.match(regex_r);
  }
  ).find(param_t_1 => null == param_t_1 ? void 0 : param_t_1[1]);
  return var_n ? var_n[1] : var_e;
  }
  ,
  mediaObjectChange(param_t) {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_i = document.querySelector("[data-eq].active"),
  var_o = null === (var_r = null === (var_e = (null == var_i ?
  void 0 : var_i.querySelector(".content-title")) || var_i) ||
  void 0 === var_e ? void 0 : var_e.innerText) || void 0 === var_r ?
  void 0 : var_r.trim();
  return var_o && (var_n.filename = var_o, var_n.fixName = var_o), var_n.type;
  }
  }
  , {
  checkUrl: () => location.host.includes("corporatefinanceinstitute.com"),
  getUrl: param_t => {
  var var_e,
  var_r,
  var_n = param_t.ids,
  var_i = null === (var_e = param_t.node.closest("#player, .jwplayer")) ||
  void 0 === var_e ? void 0 : var_e.querySelector(".jw-preview");
  if (var_i) {
  var var_o = null === (var_r = getComputedStyle(var_i).backgroundImage.match(/media\/([a-z0-9\_\-]+)\/[a-z0-9\_\-]+\.jpg/i)) ||
  void 0 === var_r ? void 0 : var_r[1];
  if (var_o) return [...list_p, ...var_n].filter(param_t_1 => param_t_1.url.includes(
  var_o) && param_t_1.url.includes("manifests"));
  }
  return [];
  }
  }
  ],
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return /master\.txt/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_i, var_o;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (var_r.match(/^#extm3u/i)) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.n = 1, var_h(var_e.url);
  case 1:
  var_r = param_t_1.v;
  case 2:
  return param_t_1.p = 2, param_t_1.n = 3, Object(dep_media_sniffer.e)(var_r, var_e);
  case 3:
  return var_i = param_t_1.v.map(param_t_2 => fn_l(void 0, void 0, void 0, var_u(
  ).m(function var_e_1() {
  var var_r_1;
  return var_u().w(function (param_e) {
  for (;;
  ) switch (param_e.n) {
  case 0:
  return param_e.n = 1, var_h(param_t_2.url);
  case 1:
  return (var_r_1 = param_e.v) && (param_t_2.play_list = var_r_1), param_e.a(2, param_t_2);
  }
  }
  , var_e_1);
  }
  ))), param_t_1.n = 4, Promise.allSettled(var_i);
  case 4:
  return var_o = param_t_1.v, param_t_1.a(2, var_o.map(param_t_2 => param_t_2.value));
  case 5:
  return param_t_1.p = 5, param_t_1.v, param_t_1.a(2, [var_e]);
  }
  }
  , var_t, null, [[2, 5]]);
  }
  ));
  }
  }
  , {
  checkSource: () => /eporner\.com/i.test(location.host),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_l(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_i, var_o, var_c_1, var_f, var_d, var_h_1;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (!/eporner\.com\/xhr\/video\/.+\?hash\=.+/i.test(var_e.url)) {
  param_t_1.n = 1;
  break;
  }
  if (var_c_1 = (null === (var_o = null === (var_i = JSON.parse(var_r)) ||
  void 0 === var_i ? void 0 : var_i.sources) || void 0 === var_o ?
  void 0 : var_o.mp4) || {
  }
  , !Object.keys(var_c_1).length) {
  param_t_1.n = 1;
  break;
  }
  return var_f = [], Object.values(var_c_1).forEach(param_t_2 => {
  var var_e_1 = Object(dep_url_utils.f)(param_t_2.src);
  var_e_1.type = "video", var_e_1.filename = document.title, var_e_1.resolution = param_t_2.labelShort,
  var_e_1.quality = dep_media_constants.r[var_e_1.resolution].label, var_f.push(
  var_e_1);
  }
  ), param_t_1.a(2, var_f);
  case 1:
  return param_t_1.n = 2, Object(dep_media_sniffer.e)(var_r, var_e);
  case 2:
  return var_d = param_t_1.v.map(param_t_2 => fn_l(void 0, void 0, void 0, var_u(
  ).m(function var_r_1() {
  var var_n;
  return var_u().w(function (param_r) {
  for (;;
  ) switch (param_r.n) {
  case 0:
  if (param_t_2.url != var_e.url) {
  param_r.n = 1;
  break;
  }
  return param_r.a(2, param_t_2);
  case 1:
  return param_r.n = 2, fetch(param_t_2.url).then(param_t_3 => param_t_3.text());
  case 2:
  return (var_n = param_r.v) && (param_t_2.play_list = var_n), param_r.a(2, param_t_2);
  }
  }
  , var_r_1);
  }
  ))), param_t_1.n = 3, Promise.allSettled(var_d);
  case 3:
  return var_h_1 = param_t_1.v, param_t_1.a(2, var_h_1.map(param_t_2 => param_t_2.value));
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
  return /[a-z0-9\-_]+\.l\.qq\.com\/proxyhttp/i.test(var_e);
  }
  ,
  parse: param_t => {
  param_t.media;
  var var_e,
  var_r,
  var_n,
  var_i = param_t.response;
  try {
  var var_o = JSON.parse(var_i),
  var_u_1 = JSON.parse(var_o.vinfo),
  var_c_1 = null === (var_r = null === (var_e = var_u_1.vl) ||
  void 0 === var_e ? void 0 : var_e.vi) || void 0 === var_r ?
  void 0 : var_r[0],
  var_l = null == var_c_1 ? void 0 : var_c_1.ti,
  var_f = (null === (var_n = var_u_1.fl) || void 0 === var_n ?
  void 0 : var_n.fi) || [];
  return var_c_1.ul.ui.map((param_t_1, param_e) => {
  var var_r_1,
  var_n_1 = Object(dep_url_utils.f)(param_t_1.url);
  if (var_n_1.ext = "m3u8", var_n_1.exts = ["m3u8"], var_n_1._hls = !0, var_n_1.filename = var_l,
  var_n_1.type = "video", null == var_f ? void 0 : var_f.length) {
  var var_i_1 = var_f[param_e % var_f.length];
  var_n_1.resolution = var_i_1.resolution, var_n_1.quality = (null === (var_r_1 = dep_media_constants.r[var_n_1.resolution]) ||
  void 0 === var_r_1 ? void 0 : var_r_1.label) || var_i_1.cname ||
  var_n_1.resolution;
  }
  return var_n_1;
  }
  );
  }
  catch (var_t) {
  return [];
  }
  }
  }
  ]
  }
  ,
  idsProcess(param_t) {
  var var_e = param_t.id;
  var_e.url.match(/upornia.*\.com/i) && "m3u8" == var_e.ext &&
  (var_e.referrer = "https://upornia.com/", var_e.useTrueRelativeUrl = !0);
  }
  ,
  processRequestIds: location.host.includes("corporatefinanceinstitute.com") ?
  param_t => (list_p.push(param_t), !0) : void 0,
  addNode: () => "asian-xnxx.com" == location.host ? ['iframe[id^="mov-desc"]'] :
  "truyen.audio" == location.host ? ["audio"] : []
  };
  exportsObj.default = Object(dep_extractor_url_merger.a)(dep_stream_cipher_helper.a,
  ["parse", "urls"])(obj_v);
  };
