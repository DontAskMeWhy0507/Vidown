// Module 214 - Savior Bilibili_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_constants = requireFn(1),
  dep_url_utils = requireFn(3);
  function var_o() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_s_1(param_r, param_n, param_i, param_o) {
  var var_s_2 = param_n && param_n.prototype instanceof var_c ?
  param_n : var_c,
  var_l_2 = Object.create(var_s_2.prototype);
  return var_a(var_l_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_a_1,
  var_s_3,
  num_c = 0,
  var_l_3 = param_i_1 || [],
  flag_f = !1,
  obj_d = {
  p: 0,
  n: 0,
  v: var_t,
  a: var_h_1,
  f: var_h_1.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_a_1 = 0, var_s_3 = var_t, obj_d.n = param_r_2, obj_u;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_a_1 = param_r_2, var_s_3 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_3.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_3[var_e],
  var_h_2 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_s_3 = var_o_2[(var_a_1 = var_o_2[4]) ?
  5 : (var_a_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_a_1 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_a_1 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_u;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_a_1 = param_l, var_s_3 = param_p;
  (var_e = var_a_1 < 2 ? var_t : var_s_3) || !flag_f;
  ) {
  var_o_1 || (var_a_1 ? var_a_1 < 3 ? (var_a_1 > 1 && (obj_d.n = -1), var_h_1(var_a_1,
  var_s_3)) : obj_d.n = var_s_3 : obj_d.v = var_s_3);
  try {
  if (num_c = 2, var_o_1) {
  if (var_a_1 || (param_i_2 = "next"), var_e = var_o_1[param_i_2]) {
  if (!(var_e = var_e.call(var_o_1, var_s_3))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_s_3 = var_e.value, var_a_1 < 2 && (var_a_1 = 0);
  }
  else 1 === var_a_1 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_a_1 < 2 &&
  (var_s_3 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_a_1 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d.n < 0) ? var_s_3 : param_r_1.call(param_n_1,
  obj_d)) !== obj_u) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_a_1 = 1, var_s_3 = var_e_1;
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
  function var_f() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_a(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f.prototype = var_c.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_a(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l_1.prototype = var_f, var_a(var_h, "constructor", var_f), var_a(var_f,
  "constructor", var_l_1), var_l_1.displayName = "GeneratorFunction", var_a(var_f,
  var_i, "GeneratorFunction"), var_a(var_h), var_a(var_h, var_i, "Generator"), var_a(
  var_h, var_n, function () {
  return this;
  }
  ), var_a(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_o = function () {
  return {
  w: var_s_1,
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
  var var_s,
  fn_u = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a_1(param_t_1) {
  try {
  var_u(param_n.next(param_t_1));
  }
  catch (var_t) {
  param_o(var_t);
  }
  }
  function var_s_1(param_t_1) {
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
  )).then(var_a_1, var_s_1);
  }
  var_u((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  }
  ,
  list_c = [],
  var_l = window.location.href;
  !function (param_t) {
  param_t.getPlayDataFromDocument = function (param_t_1) {
  var var_e = Array.from(param_t_1.querySelectorAll("script")).map(param_t_2 => {
  var var_e_1;
  return null === (var_e_1 = param_t_2.innerText.match(/__playinfo_+=(\{.+\})/i)) ||
  void 0 === var_e_1 ? void 0 : var_e_1[1];
  }
  ).filter(param_t_2 => null == param_t_2 ? void 0 : param_t_2.length);
  if (var_e[0]) {
  var var_r = JSON.parse(var_e[0]),
  var_n = null == var_r ? void 0 : var_r.data;
  if (!var_n) throw new Error("");
  return var_n;
  }
  throw new Error("");
  };
  }
  (var_s || (var_s = {
  }
  ));
  var obj_f = {
  getDomains: () => ["bilibili."],
  processRequestIds: param_t => {
  if (!list_c.includes(param_t) && "string" == typeof param_t.url &&
  !param_t.url.includes("flv")) return list_c.push(param_t), !0;
  }
  ,
  parse: {
  sources: [{
  checkSource: param_t => param_t.url == location.href && location.host.includes(
  "bilibili.com"),
  parse: param_t => {
  var var_e,
  var_r = param_t.media,
  var_o_1 = param_t.response;
  var_r.ext = "mp4", var_r.exts = ["mp4"];
  var var_a_1 = var_r.playData;
  if ("string" == typeof var_o_1) try {
  var var_u = new DOMParser().parseFromString(var_o_1, "text/html");
  var_a_1 = var_s.getPlayDataFromDocument(var_u);
  }
  catch (var_t) {
  var_a_1 = var_r.playData;
  }
  try {
  var_r.fixName != document.title && (var_r.fixName = document.title), var_r.fixName ||
  (var_r.fixName = var_r.filename);
  var var_c = var_a_1.dash;
  if (!var_c) {
  var var_l_1 = Object.assign(Object.assign({
  }
  , Object(dep_url_utils.f)(var_a_1.durl[0].url)), {
  filename: var_r.fixName,
  type: "video",
  ext: "mp4",
  exts: ["mp4"]
  }
  ),
  list_f = [];
  return list_f[0] = var_l_1, list_f;
  }
  return var_c.video ? var_c.video.filter(param_t_1 => param_t_1.baseUrl).map(param_t_1 => {
  var var_e_1,
  var_o_2,
  var_s_1 = Object.assign(Object.assign({
  }
  , Object(dep_url_utils.f)(param_t_1.baseUrl)), {
  filename: var_r.fixName,
  type: "video",
  ext: "mp4",
  exts: ["mp4"],
  resolution: param_t_1.height + "p"
  }
  );
  var_s_1.quality = (null === (var_e_1 = dep_media_constants.r[var_s_1.resolution]) ||
  void 0 === var_e_1 ? void 0 : var_e_1.label) || (null === (var_o_2 = var_a_1.support_formats.find(
  param_e => param_e.quality == param_t_1.id)) || void 0 === var_o_2 ?
  void 0 : var_o_2.display_desc) || var_s_1.resolution;
  var var_u_1 = (var_c.audio && var_c.audio[0]) ? var_c.audio[0].baseUrl : null;
  return var_s_1.url = var_u_1 ? {
  audioUrl: var_u_1,
  videoUrl: param_t_1.baseUrl
  } : param_t_1.baseUrl
  , var_s_1;
  }
  ) : (null === (var_e = var_c.audio) || void 0 === var_e ? void 0 :
  var_e.map(param_t_1 => Object.assign(Object.assign({
  }
  , Object(dep_url_utils.f)(param_t_1.baseUrl)), {
  filename: var_r.fixName,
  type: "audio"
  }
  ))) || [];
  }
  catch (var_t) {
  return [];
  }
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return "string" == typeof var_e && var_e.includes("/web/playurl");
  }
  ,
  parse: param_t => {
  var var_e,
  var_r = param_t.media,
  var_o_1 = param_t.response;
  try {
  var var_a_1 = JSON.parse(var_o_1).data.playurl;
  return var_a_1.video ? var_a_1.video.filter(param_t_1 => param_t_1.video_resource.url).map(
  param_t_1 => {
  var var_e_1,
  var_o_2,
  var_s_1 = Object.assign(Object.assign({
  }
  , Object(dep_url_utils.f)(param_t_1.video_resource.url)), {
  filename: var_r.filename,
  type: "video",
  ext: "mp4",
  exts: ["mp4"],
  resolution: param_t_1.video_resource.height + "p"
  }
  );
  var_s_1.quality = (null === (var_e_1 = dep_media_constants.r[var_s_1.resolution]) ||
  void 0 === var_e_1 ? void 0 : var_e_1.label) || param_t_1.stream_info.desc_words;
  var var_u = null === (var_o_2 = var_a_1.audio_resource) ||
  void 0 === var_o_2 ? void 0 : var_o_2.find(param_e => param_e.quality == param_t_1.audio_quality);
  return var_s_1.url = (var_u && var_u.url) ? {
  audioUrl: var_u.url,
  videoUrl: param_t_1.video_resource.url
  } : param_t_1.video_resource.url
  , var_s_1;
  }
  ) : (null === (var_e = var_a_1.audio_resource) || void 0 === var_e ?
  void 0 : var_e.map(param_t_1 => Object.assign(Object.assign({
  }
  , Object(dep_url_utils.f)(param_t_1.url)), {
  filename: var_r.filename,
  type: "audio",
  resolution: param_t_1.quality
  }
  ))) || [];
  }
  catch (var_t) {
  return [];
  }
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return "string" == typeof var_e && var_e.includes("wbi/playurl");
  }
  ,
  parse: param_t => {
  var var_e,
  var_r = param_t.media,
  var_o_1 = param_t.response;
  try {
  var var_a_1 = JSON.parse(var_o_1).data.dash;
  return var_a_1.video ? var_a_1.video.filter(param_t_1 => param_t_1.base_url ||
  param_t_1.baseUrl).map((param_t_1, param_e) => {
  var var_o_2,
  var_s_1,
  var_u,
  var_c,
  var_l_1 = Object.assign(Object.assign({
  }
  , Object(dep_url_utils.f)(param_t_1.base_url || param_t_1.baseUrl)), {
  filename: var_r.filename,
  type: "video",
  ext: "mp4",
  exts: ["mp4"],
  resolution: param_t_1.height + "p"
  }
  );
  var_l_1.quality = (null === (var_o_2 = dep_media_constants.r[var_l_1.resolution]) ||
  void 0 === var_o_2 ? void 0 : var_o_2.label) || (null === (var_s_1 = param_t_1.codecs) ||
  void 0 === var_s_1 ? void 0 : var_s_1.slice(0, 12));
  var var_f = (null === (var_u = var_a_1.audio) || void 0 === var_u ?
  void 0 : var_u[param_e]) || (null === (var_c = var_a_1.audio) ||
  void 0 === var_c ? void 0 : var_c[0]);
  var var_f_url = var_f ? (var_f.base_url || var_f.baseUrl) : null;
  return var_l_1.url = var_f_url ? {
  audioUrl: var_f_url,
  videoUrl: var_l_1.url
  } : var_l_1.url
  , var_l_1;
  }
  ) : (null === (var_e = var_a_1.audio) || void 0 === var_e ?
  void 0 : var_e.map(param_t_1 => Object.assign(Object.assign({
  }
  , Object(dep_url_utils.f)(param_t_1.base_url || param_t_1.baseUrl)), {
  filename: var_r.filename,
  type: "audio",
  resolution: param_t_1.bandwidth
  }
  ))) || [];
  }
  catch (var_t) {
  return [];
  }
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: () => /bilibili\.tv(\/.+)?\/(video|play)\/(\d+)(\/(\d+))?/i.test(location.href),
  getUrl: param_t => {
  var var_e,
  var_r,
  var_n = param_t.node,
  regex_i = /\/(video|play)\/(\d+)(\/(\d+))?/i,
  var_o_1 = location.href.match(regex_i),
  var_a_1 = var_o_1 && var_o_1[2],
  var_s_1 = var_o_1 && var_o_1[4];
  if (var_a_1) {
  var var_u = "https://api.bilibili.tv/intl/gateway/web/playurl?s_locale=en_US&platform=web&aid=" + var_a_1;
  if (/\/play\/(\d+)/i.test(location.href)) {
  if (!var_s_1) {
  var var_c = null === (var_e = (var_n.closest("section.video-play") ||
  document).querySelector(".ep-item--active")) || void 0 === var_e ?
  void 0 : var_e.href;
  if (!var_c) return var_u;
  var_s_1 = (null === (var_r = var_c.match(regex_i)) || void 0 === var_r ?
  void 0 : var_r[4]) || null;
  }
  var_s_1 && (var_u = "https://api.bilibili.tv/intl/gateway/web/playurl?s_locale=en_US&platform=web&ep_id=" + var_s_1);
  }
  return var_u;
  }
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "m3u8", var_e.exts = ["m3u8"], var_e.filename = document.title,
  "video";
  }
  }
  , {
  checkUrl: () => /bilibili\.com(\/.+)?\/(video|play)\/([a-z0-9]+)/i.test(location.href) &&
  Array.from(document.querySelectorAll("script")).map(param_t => {
  var var_e;
  return null === (var_e = param_t.innerText.match(/(playurlSSRData|__playinfo__)\s*=\s*(\{.+\})/i)) ||
  void 0 === var_e ? void 0 : var_e[2];
  }
  ).filter(param_t => null == param_t ? void 0 : param_t.length).length > 0,
  getUrl: () => location.href,
  mediaObjectChange: param_t => {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_i = param_t.node;
  var_n.fixName = document.title, var_n.skipRedirect = !0;
  var var_o_1 = null === (var_e = var_i.closest('[class*="video-container"]')) ||
  void 0 === var_e ? void 0 : var_e.querySelector(".video-title, h1");
  var_o_1 && (var_n.fixName = var_o_1.innerText.trim());
  var var_a_1 = Array.from(document.querySelectorAll("script")).map(param_t_1 => {
  var var_e_1;
  return null === (var_e_1 = param_t_1.innerText.match(/(playurlSSRData|__playinfo__)\s*=\s*(\{.+\})/i)) ||
  void 0 === var_e_1 ? void 0 : var_e_1[2];
  }
  ).filter(param_t_1 => null == param_t_1 ? void 0 : param_t_1.length);
  if (var_a_1[0]) try {
  var var_s_1 = JSON.parse(var_a_1[0]),
  var_u = (null === (var_r = null == var_s_1 ? void 0 : var_s_1.result) ||
  void 0 === var_r ? void 0 : var_r.video_info) || (null == var_s_1 ?
  void 0 : var_s_1.data);
  if (!var_u) throw new Error("");
  return var_n.ext = "m3u8", var_n.exts = ["m3u8"], var_n.playData = var_u, "video";
  }
  catch (var_t) {
  return console.warn(var_t), "null";
  }
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/blob:https:\/\/(www\.)*bilibili\./));
  }
  ,
  getUrl: param_t => {
  var var_e,
  var_r,
  var_n,
  var_i,
  var_o_1,
  var_a_1 = param_t.node,
  var_s_1 = null === (var_e = location.href.match(/bilibili\.com(\/.+)?\/(video|play)\/([a-z0-9]+)/i)) ||
  void 0 === var_e ? void 0 : var_e[3];
  if (list_c.length > 0) {
  var list_u = [...list_c];
  list_u.reverse();
  var var_l_1 = list_u.findIndex(param_t_1 => {
  var var_e_1, var_r_1;
  return (null === (var_e_1 = param_t_1.url) || void 0 === var_e_1 ?
  void 0 : var_e_1.includes("wbi/playurl")) && (!var_s_1 || (null === (var_r_1 = param_t_1.search) ||
  void 0 === var_r_1 ? void 0 : var_r_1.includes(var_s_1)));
  }
  ),
  var_f = list_u[var_l_1];
  if (var_f) {
  var var_d = var_a_1.closest('.video-player-box, [class*="video-container"]');
  if (var_d) {
  var var_h = null === (var_o_1 = (null === (var_r = var_d.querySelector(".bpx-player-top-left-title, video-info-title [data-title]")) ||
  void 0 === var_r ? void 0 : var_r.innerText) || (null === (var_i = null === (var_n = var_d.parentElement) ||
  void 0 === var_n ? void 0 : var_n.querySelector(".video-toobar_title")) ||
  void 0 === var_i ? void 0 : var_i.innerText)) || void 0 === var_o_1 ?
  void 0 : var_o_1.trim();
  var_h && (var_f.filename = var_h);
  }
  return var_f.identifier = Date.now().toString(), [var_f];
  }
  var var_p = list_c[list_c.length - 1].url,
  var_v = var_p.split("/"),
  var_m = var_v[var_v.length - 2],
  list_y = [];
  list_y.push(list_c[0]), list_y[0].url = {
  videoUrl: var_p,
  audioUrl: var_p
  };
  for (var obj_g = {
  }
  , num_b = 1;
  num_b < list_c.length;
  num_b++) {
  var var_w = list_c[num_b].url;
  if ("string" == typeof list_c[num_b].url && var_w.includes(var_m)) {
  var var_A = new URL(var_w).searchParams.get("upsig");
  var_A && (!obj_g[var_A] || obj_g[var_A].size < list_c[num_b].size) &&
  (obj_g[var_A] = list_c[num_b]);
  }
  }
  var var__ = Object.values(obj_g);
  if (!var__.length || !var__[0]) return list_y[0] ? list_y[0].url : null;
  var var_E = var__[0], var_S = var__[0];
  for (var num_O = 1; num_O < var__.length; num_O++) {
  var__[num_O].size > var_E.size && (var_E = var__[num_O]);
  var__[num_O].size < var_S.size && (var_S = var__[num_O]);
  }
  if (!list_y[0]) return null;
  if (typeof list_y[0].url !== "object" || !list_y[0].url) list_y[0].url = {};
  list_y[0].url.videoUrl = var_E.url;
  list_y[0].url.audioUrl = var_S.url;
  return list_y[0].url;
  }
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  if ("object" == typeof var_e.url && var_e.url.videoUrl) return var_e.ext = "mp4",
  var_e.exts = ["mp4"], var_e.filename = document.title, var_e.referrer = location.href,
  var_e.extraData = [{
  name: "simple_request",
  value: "true"
  }
  ], "video";
  }
  }
  ],
  beforeGetUrl: () => fn_u(void 0, void 0, void 0, var_o().m(function var_t() {
  return var_o().w(function (param_t) {
  for (;;
  ) switch (param_t.n) {
  case 0:
  window.location.href !== var_l && (var_l = window.location.href, list_c.length = 0);
  case 1:
  return param_t.a(2);
  }
  }
  , var_t);
  }
  ))
  };
  exportsObj.default = obj_f;
  };
