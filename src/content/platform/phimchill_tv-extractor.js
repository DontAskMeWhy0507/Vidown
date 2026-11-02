// Module 307 - Savior Phimchill_tv Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_quality_helper = requireFn(9),
  dep_dom_utils = requireFn(0),
  dep_media_constants = requireFn(1),
  dep_module_44 = requireFn(44),
  dep_url_utils = requireFn(3),
  dep_extractor_url_merger = requireFn(23),
  dep_token_hash_util = requireFn(45),
  dep_stream_cipher_helper = requireFn(31);
  function var_f() {
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
  return var_d(var_c_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
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
  var var_l = [][var_n] ? var_e(var_e([][var_n]())) : (var_d(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_c.prototype = var_s.prototype = Object.create(var_l);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_c) :
  (param_t.__proto__ = var_c, var_d(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_u.prototype = var_c, var_d(var_h, "constructor", var_c), var_d(var_c,
  "constructor", var_u), var_u.displayName = "GeneratorFunction", var_d(var_c, var_i,
  "GeneratorFunction"), var_d(var_h), var_d(var_h, var_i, "Generator"), var_d(var_h,
  var_n, function () {
  return this;
  }
  ), var_d(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_f = function () {
  return {
  w: var_o,
  m: var_p
  };
  }
  )();
  }
  function var_d(param_t, param_e, param_r, param_n) {
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
  (var_d = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_d(param_t_1, param_e_2, function (param_t_2) {
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
  var fn_h = function (param_t, param_e, param_r, param_n) {
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
  obj_p = {
  }
  ,
  obj_v = {
  }
  ,
  obj_m = {
  getDomains: () => ["phimchill.tv", "phimmoichill.", "iphimchillzz.net", "phimmoiyyy."],
  parse: {
  sources: [...dep_stream_cipher_helper.a.parse.sources, ...dep_token_hash_util.a.parse.sources,
  {
  checkSource: param_t => {
  var var_e;
  return Boolean(null === (var_e = param_t.cacheUrl) || void 0 === var_e ?
  void 0 : var_e.match(/blob:https:\/\/(phimchill\.tv|phimmoichill.*\.|iphimchillzz\.net)/));
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_h(void 0, void 0, void 0, var_f().m(function var_t() {
  var var_n, var_i, var_a;
  return var_f().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (param_t_1.p = 0, !var_r.includes("<!DOCTYPE html>")) {
  param_t_1.n = 3;
  break;
  }
  return param_t_1.n = 1, fetch(String(var_e.url));
  case 1:
  return param_t_1.n = 2, param_t_1.v.json();
  case 2:
  var_n = param_t_1.v, param_t_1.n = 4;
  break;
  case 3:
  var_n = JSON.parse(var_r);
  case 4:
  return var_i = Object.keys(var_n), param_t_1.a(2, var_i.map(param_t_2 => {
  var var_r_1 = var_n[param_t_2].segments,
  var_i_1 = Object.assign({
  }
  , var_e),
  list_a = ["#EXTM3U"];
  list_a.push("#EXT-X-VERSION:3"), list_a.push("#EXT-X-TARGETDURATION:" + var_n.tgdr),
  list_a.push("#EXT-X-PLAYLIST-TYPE:VOD");
  for (var num_s = 0;
  num_s < var_r_1.length;
  num_s++) 0 == num_s && (var_i_1.url = var_r_1[num_s].link), list_a.push("#EXTINF:" + var_r_1[num_s].du),
  list_a.push(var_r_1[num_s].link);
  return list_a.push("#EXT-X-ENDLIST"), var_i_1.resolution = param_t_2, var_i_1.quality = dep_media_constants.r[var_i_1.resolution].label,
  var_i_1.play_list = list_a.join("\n"), var_i_1;
  }
  ));
  case 5:
  return param_t_1.p = 5, var_a = param_t_1.v, console.log(var_a), param_t_1.a(2,
  []);
  }
  }
  , var_t, null, [[0, 5]]);
  }
  ));
  }
  }
  , {
  checkSource: param_t => {
  var var_e;
  return Boolean(null === (var_e = param_t.url) || void 0 === var_e ?
  void 0 : var_e.match(/[a-z\-\d]+\.(vkuser\.net)|(mycdn\.me)\/.*&type=1/));
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_h(void 0, void 0, void 0, var_f().m(function var_t() {
  var var_s, var_u, var_c, var_l, var_d_1;
  return var_f().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (var_s = var_e, !Array.isArray(var_r)) {
  param_t_1.n = 1;
  break;
  }
  return param_t_1.a(2, var_r);
  case 1:
  if (param_t_1.p = 1, var_s._isDashMPD = !0, var_s.quality ||
  (var_s.quality = dep_quality_helper.b.DEFAULT_QUALITY_TYPE), "number" == typeof var_s.size &&
  (var_s.size = Object(dep_dom_utils.beautifyFileSize)(var_s.size)), var_r) {
  param_t_1.n = 4;
  break;
  }
  if ((var_u = new URL(var_s.url)).searchParams.set("ct", "6"), var_s.url = var_u.href,
  obj_p[var_u.href]) {
  param_t_1.n = 3;
  break;
  }
  return param_t_1.n = 2, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  method: "get",
  url: var_u.href
  }
  }
  );
  case 2:
  var_c = param_t_1.v, obj_p[var_u.href] = var_c.url || var_c;
  case 3:
  return Object(dep_module_44.parse)(obj_p[var_u.href], {
  attributeNamePrefix: "",
  attrNodeName: "@",
  textNodeName: "#text",
  ignoreAttributes: !1,
  cdataTagName: "__cdata"
  }
  ).MPD.Period.AdaptationSet.forEach(param_t_2 => {
  var var_e_1;
  null === (var_e_1 = param_t_2.Representation) || void 0 === var_e_1 ||
  var_e_1.forEach(param_e => {
  var var_r_1;
  (null === (var_r_1 = param_e["@"].mimeType) || void 0 === var_r_1 ?
  void 0 : var_r_1.includes("video")) && (var_l = param_t_2);
  }
  );
  }
  ), param_t_1.a(2, null == var_l ? void 0 : var_l.Representation.map(param_t_2 => {
  var var_e_1,
  var_r_1 = Object.assign({
  }
  , var_s);
  return var_r_1.resolution = param_t_2["@"].height + "p", var_r_1.quality = (null === (
  var_e_1 = dep_media_constants.r[var_r_1.resolution]) || void 0 === var_e_1 ?
  void 0 : var_e_1.label) || dep_quality_helper.b.DEFAULT_QUALITY_TYPE, var_r_1._dash_video_id = param_t_2["@"].id,
  var_s.play_list = obj_p[var_u.href], var_r_1;
  }
  ));
  case 4:
  return var_r.match(/:mpeg:DASH/i) && (var_s.play_list = var_r), param_t_1.a(2,
  [var_s]);
  case 5:
  return param_t_1.p = 5, var_d_1 = param_t_1.v, console.log(var_d_1), param_t_1.a(
  2, [var_s]);
  }
  }
  , var_t, null, [[1, 5]]);
  }
  ));
  }
  }
  ]
  }
  ,
  urls: [...dep_stream_cipher_helper.a.urls, {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/blob:https:\/\/(phimchill\.tv|phimmoichill.*\..+|iphimchillzz\.net)\//));
  }
  ,
  getUrl: param_t => {
  param_t.url;
  var var_e = param_t.node,
  var_r = param_t.ids;
  return fn_h(void 0, void 0, void 0, var_f().m(function var_t() {
  var var_n, var_i, var_o, var_a, var_u, var_c, var_l, var_d_1, var_h;
  return var_f().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (var_a = /iniPlayers\("(.*?)"/, !(var_u = [...document.querySelectorAll("script")].find(
  param_t_2 => param_t_2.innerText.match(var_a)))) {
  param_t_1.n = 1;
  break;
  }
  return var_c = null === (var_n = var_a.exec(var_u.innerText)) ||
  void 0 === var_n ? void 0 : var_n[1], param_t_1.a(2, "https://sotrim.topphimmoi.org/manifest/" + var_c);
  case 1:
  if (var_l = (null === (var_o = null === (var_i = var_e.closest(".VideoPlayer")) ||
  void 0 === var_i ? void 0 : var_i.parentElement) || void 0 === var_o ?
  void 0 : var_o.querySelector("ul>li>a")) || document.querySelector(".VideoPlayer ul>li.on>a")) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.a(2, var_r);
  case 2:
  if (var_d_1 = null == var_l ? void 0 : var_l.getAttribute("data-type"), !["mp4",
  "m3u8", "mpd"].includes(var_d_1)) {
  param_t_1.n = 3;
  break;
  }
  return (var_h = Object(dep_url_utils.f)(var_l.getAttribute("data-link"))).type = "video",
  var_h.ext = var_d_1 || "m3u8", var_h.type = "video", param_t_1.a(2, [var_h]);
  case 3:
  return param_t_1.a(2);
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => {
  var var_e,
  var_r = param_t.mediaObject,
  var_n = param_t.node;
  if (var_n.src.match(/blob:https:\/\/(phimchill\.tv|phimmoichill.*\..+|iphimchillzz\.net)/)) return var_r.ext = "m3u8",
  var_r.exts = ["m3u8"], var_r.cacheUrl = var_n.src, var_r.filename = (null === (
  var_e = document.querySelector('h1[itemprop="name"]')) || void 0 === var_e ?
  void 0 : var_e.textContent) || var_r.filename, "video";
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
  return fn_h(void 0, void 0, void 0, var_f().m(function var_t() {
  var var_r;
  return var_f().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (obj_v[var_e]) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 1:
  (var_r = param_t_1.v) && var_r.url && (obj_v[var_e] = var_r.url);
  case 2:
  return param_t_1.a(2, obj_v[var_e]);
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
  return /\/tvc\?id=/i.test(var_e);
  }
  ,
  getUrl: dep_token_hash_util.a.urls[0].getUrl
  }
  ],
  idsProcess: param_t => {
  var var_e = param_t.defaultIds,
  var_r = param_t.id,
  var_n = param_t.index;
  if (var_r.url.match(/[a-z\-\d]+\.(vkuser\.net)|(mycdn\.me)/)) {
  var var_i = new URL(var_r.url);
  "1" != var_i.searchParams.get("type") ? var_e.splice(var_n, 1) :
  (var_i.searchParams.set("ct", "6"), var_r.url = var_i.href);
  }
  }
  };
  exportsObj.default = Object(dep_extractor_url_merger.a)(dep_token_hash_util.a,
  ["urls", "processRequestIds"])(obj_m);
  };
