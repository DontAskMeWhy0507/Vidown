// Module 347 - Savior Supjav_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_constants = requireFn(1),
  dep_quality_helper = requireFn(9),
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
  var var_s_1 = param_n && param_n.prototype instanceof var_c_1 ?
  param_n : var_c_1,
  var_l_2 = Object.create(var_s_1.prototype);
  return var_u(var_l_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_2,
  var_u_1,
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
  return var_o_1 = param_e, var_s_2 = 0, var_u_1 = var_t, obj_d_1.n = param_r_2,
  obj_a;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_s_2 = param_r_2, var_u_1 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_3.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_3[var_e],
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
  (param_r, param_i, param_o), !0), var_l_2;
  }
  var obj_a = {
  };
  function var_c_1() {
  }
  function var_l_1() {
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
  var_h = var_f.prototype = var_c_1.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_u(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l_1.prototype = var_f, var_u(var_h, "constructor", var_f), var_u(var_f,
  "constructor", var_l_1), var_l_1.displayName = "GeneratorFunction", var_u(var_f,
  var_i, "GeneratorFunction"), var_u(var_h), var_u(var_h, var_i, "Generator"), var_u(
  var_h, var_n, function () {
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
  function var_c(param_t, param_e) {
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
  (param_t, param_e) || function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_l(param_t_1, param_e_1);
  var var_r = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r && param_t_1.constructor && (var_r = param_t_1.constructor.name),
  "Map" === var_r || "Set" === var_r ? Array.from(param_t_1) :
  "Arguments" === var_r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r) ?
  var_l(param_t_1, param_e_1) : void 0;
  }
  }
  (param_t, param_e) || function () {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  ();
  }
  function var_l(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  var fn_f = function (param_t, param_e, param_r, param_n) {
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
  obj_d = {
  }
  ,
  obj_h = {
  }
  ,
  list_p = [],
  regex_v = /(sextb|javct|supjav)\./,
  regex_m = /(cloudflarestorage|\.ws\.cdn\.cloudflare|d-s\.io|\/d\/[^/?#]+\.mp4)/i,
  regex_y = /streamtape\..+\/get_video|tapecontent\..+\.mp4/i,
  regex_g = /(dsvplay|ds2play|d0000?d|doodstream|doodwatch|ryderjet|earnvids|luluvdo|lulustream|streamtape)\./i,
  obj_b = {
  getDomains: () => ["supjav.com", "javct.net", "sextb."],
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/streamtape\..+\/get_video/i));
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return var_e.filename = document.title.split("-")[0].trim(), var_e.altUrl &&
  (var_e.type = ""), [var_e];
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/streamtape\..+\/.+\.mp4/i));
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return var_e.filename = document.title.split("-")[0].trim(), var_e.type = "", [var_e];
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/tapecontent\..+\/.+\.mp4/i));
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return var_e.filename = document.title.split("-")[0].trim(), var_e.quality ||
  (var_e.quality = dep_quality_helper.b.DEFAULT_QUALITY_TYPE), "number" == typeof var_e.size &&
  (var_e.size = Object(dep_dom_utils.beautifyFileSize)(var_e.size)), [var_e];
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/\.litvp\.com\/stream\/.*\/master\.m3u8/));
  }
  ,
  parse: param_t => {
  var var_e,
  var_r = param_t.media,
  var_i = param_t.response;
  if (var_r.type = "video", var_r.filename = document.title.split("-")[0].trim(),
  !var_i.includes("#EXT")) {
  if (!obj_d[var_r.url]) return [var_r];
  var var_a = obj_d[var_r.url];
  var_i = var_a.realRes, var_r.referrer = var_a.referrer || var_r.referrer;
  }
  for (var list_s = [], var_u_1 = var_r.url.replace(/master\.m3u8$/, ""), var_l_1 = var_i.split(
  "#"), num_f = 1;
  num_f < var_l_1.length;
  num_f++) {
  var var_h = var_l_1[num_f];
  if (var_h.match(/^EXT-X-STREAM-INF/)) {
  var var_p = JSON.parse(JSON.stringify(var_r)),
  var_v = var_c(var_h.split("\n"), 2),
  var_m = var_v[0],
  var_y = var_v[1],
  var_g = parseInt(var_m.match(/RESOLUTION=\d+x(\d+)/)[1]);
  var_p.url = var_u_1 + var_y, var_p.resolution = Object(dep_dom_utils.getBestFitResolution)(
  var_g) + "p", var_p.quality = (null === (var_e = dep_media_constants.r[var_p.resolution]) ||
  void 0 === var_e ? void 0 : var_e.label) || dep_media_constants.r["480p"].label,
  list_s.push(var_p);
  }
  }
  return list_s;
  }
  }
  , {
  checkSource: () => "supjav.com" == location.host,
  parse: param_t => {
  var var_e = param_t.response,
  var_r = param_t.media;
  return fn_f(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_n;
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, Object(dep_media_sniffer.e)(var_e, var_r);
  case 1:
  return (var_n = param_t_1.v).map(param_t_2 => (param_t_2.removeOrigin = !0, param_t_2)),
  param_t_1.a(2, var_n);
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
  return Boolean(var_e.match(/\.mp4(\?|$)/i)) && regex_m.test(var_e) &&
  regex_v.test(location.href);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return var_e.type = "video", var_e.filename = document.title.split("-")[0].trim(
  ), var_e.quality || (var_e.quality = dep_quality_helper.b.DEFAULT_QUALITY_TYPE),
  [var_e];
  }
  }
  , {
  checkSource: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/(ryderjet|earnvids|luluvdo|lulustream)\..+\.m3u8/i)) &&
  regex_v.test(location.href);
  }
  ,
  parse: param_t => {
  var var_e = param_t.response,
  var_r = param_t.media;
  return fn_f(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_i, var_u_1, var_l_1, var_f, var_d, var_h, var_p, var_v, var_m, var_y, var_g,
  var_b, var_w, var_A;
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (var_r.type = "video", var_r.filename = document.title.split("-")[0].trim(),
  !var_e.includes("#EXT-X-STREAM-INF")) {
  param_t_1.n = 1;
  break;
  }
  for (var_l_1 = [], var_f = var_r.url.replace(/[^/]+\.m3u8$/, ""), var_d = var_e.split(
  "#"), var_h = 1;
  var_h < var_d.length;
  var_h++) (var_p = var_d[var_h]).match(/^EXT-X-STREAM-INF/) &&
  (var_v = JSON.parse(JSON.stringify(var_r)), var_m = var_p.split("\n"), var_y = var_c(
  var_m, 2), var_g = var_y[0], var_b = var_y[1], var_w = parseInt((null === (var_i = var_g.match(
  /RESOLUTION=\d+x(\d+)/)) || void 0 === var_i ? void 0 : var_i[1]) ||
  "0"), var_v.url = var_f + var_b.trim(), var_w && (var_v.resolution = Object(dep_dom_utils.getBestFitResolution)(
  var_w) + "p", var_v.quality = (null === (var_u_1 = dep_media_constants.r[var_v.resolution]) ||
  void 0 === var_u_1 ? void 0 : var_u_1.label) || dep_media_constants.r["480p"].label),
  var_l_1.push(var_v));
  if (!var_l_1.length) {
  param_t_1.n = 1;
  break;
  }
  return param_t_1.a(2, var_l_1);
  case 1:
  return param_t_1.n = 2, Object(dep_media_sniffer.e)(var_e, var_r);
  case 2:
  return var_A = param_t_1.v, param_t_1.a(2, var_A.length ? var_A :
  [var_r]);
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
  var var_e,
  var_r = param_t.url;
  if ((null === (var_e = param_t.filename) || void 0 === var_e ?
  void 0 : var_e.includes("master")) && "m3u8" === param_t.ext) return list_p.push(
  param_t), !0;
  if ("mp4" === param_t.ext && regex_m.test(var_r) && regex_v.test(location.href)) return list_p.push(
  param_t), !0;
  if (regex_y.test(var_r) && regex_v.test(location.href)) return list_p.push(param_t),
  !0;
  if ("m3u8" === param_t.ext && /(ryderjet|earnvids|luluvdo|lulustream)\./i.test(
  var_r) && regex_v.test(location.href)) return list_p.push(param_t), !0;
  if (/cdn[a-z0-9]*\.turboviplay\.com\//i.test(var_r) && "m3u8" == param_t.ext) {
  var var_n = var_r.match(/(cdn|cdn[0-9])\.turboviplay\.com\/.+\/([a-z0-9\-_]+)\/([a-z0-9\-_]+)\.m3u8/i);
  if ((null == var_n ? void 0 : var_n.length) && regex_v.test(location.href) &&
  list_p.push(param_t), var_n && var_n.length > 2) {
  var var_i = var_c(var_n, 3);
  var_i[1] == var_i[2] && list_p.push(param_t);
  }
  return !0;
  }
  return "m3u8" === param_t.ext;
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url;
  return /(stbturbo|turboplayers)\.xyz|turboplays\.|hglink\.to/.test(var_e);
  }
  ,
  getUrl: () => list_p.length ? list_p : []
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return regex_g.test(var_e);
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_f(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_r;
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (!list_p.length) {
  param_t_1.n = 1;
  break;
  }
  return param_t_1.a(2, list_p);
  case 1:
  if (!obj_h[var_e]) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.a(2, obj_h[var_e]);
  case 2:
  return param_t_1.n = 3, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 3:
  if (!(null == (var_r = param_t_1.v) ? void 0 : var_r.url)) {
  param_t_1.n = 4;
  break;
  }
  return obj_h[var_e] = var_r.url, obj_d[var_r.url] = var_r, param_t_1.a(2, var_r.url);
  case 4:
  return param_t_1.a(2, []);
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  if (obj_d[var_e.url]) {
  var var_r = obj_d[var_e.url];
  var_e.realRes = var_r.realRes, var_e.fixName = var_r.title, var_e.referrer = var_r.referrer;
  }
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return Boolean(var_e.match(/(.+\.supremejav\.com)|(emturbovid\.com)/));
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_f(void 0, void 0, void 0, var_s().m(function var_t() {
  var var_r;
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (!location.href.includes("supjav.") || !list_p.length) {
  param_t_1.n = 1;
  break;
  }
  return param_t_1.a(2, list_p);
  case 1:
  if (!obj_h[var_e]) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.a(2, obj_h[var_e]);
  case 2:
  return param_t_1.n = 3, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL
  }
  );
  case 3:
  if (!(var_r = param_t_1.v) || !var_r.url) {
  param_t_1.n = 4;
  break;
  }
  return obj_h[var_e] = var_r.url, obj_d[var_r.url] = var_r, param_t_1.a(2, var_r.url);
  case 4:
  return param_t_1.a(2, list_p);
  }
  }
  , var_t);
  }
  ));
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  if (obj_d[var_e.url]) {
  var var_r = obj_d[var_e.url];
  return var_e.realRes = var_r.realRes, var_e.fixName = var_r.title, void (var_e.referrer = var_r.referrer);
  }
  }
  }
  ],
  default: {
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = var_e.url;
  return var_e.filename = document.title.split("-")[0].trim(), var_r.match(/streamtape\..+\/get_video/i) ?
  "video" : var_r.match(/streamtape\..+\/.+\.mp4/i) ? void 0 :
  var_r.match(/tapecontent\..+\.mp4/i) || var_r.match(/videovard\..+\/.m3u8/i) ||
  var_r.match(/\.mp4(\?|$)/i) && regex_m.test(var_r) || var_r.match(/(ryderjet|earnvids|luluvdo|lulustream)\..+\.m3u8/i) ?
  "video" : void 0;
  }
  }
  };
  exportsObj.default = obj_b;
  };
