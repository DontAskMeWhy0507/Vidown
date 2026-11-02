// Module 217 - Savior Blvietsub_vip Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_module_44 = requireFn(44),
  dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0),
  dep_media_sniffer = requireFn(6),
  dep_network_monitor = requireFn(20);
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
  var_l_2 = Object.create(var_u_1.prototype);
  return var_c(var_l_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_1,
  var_u_2,
  num_c = 0,
  var_l_3 = param_i_1 || [],
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
  !flag_f && num_c && !var_i_1 && var_e < var_l_3.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_3[var_e],
  var_h_3 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_u_2 = var_o_2[(var_s_1 = var_o_2[4]) ?
  5 : (var_s_1 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_3 &&
  ((var_i_1 = param_r_2 < 2 && var_h_3 < var_o_2[1]) ? (var_s_1 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_3 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_s_1 = 0));
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
  (param_r, param_i, param_o), !0), var_l_2;
  }
  var obj_a = {
  };
  function var_s() {
  }
  function var_l_1() {
  }
  function var_f_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_d_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_c(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h_1 = var_f_1.prototype = var_s.prototype = Object.create(var_d_1);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f_1) :
  (param_t.__proto__ = var_f_1, var_c(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h_1), param_t;
  }
  return var_l_1.prototype = var_f_1, var_c(var_h_1, "constructor", var_f_1), var_c(
  var_f_1, "constructor", var_l_1), var_l_1.displayName = "GeneratorFunction", var_c(
  var_f_1, var_i, "GeneratorFunction"), var_c(var_h_1), var_c(var_h_1, var_i, "Generator"),
  var_c(var_h_1, var_n, function () {
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
  function var_l(param_t, param_e) {
  var var_r = "undefined" != typeof Symbol && param_t[Symbol.iterator] ||
  param_t["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_t) || (var_r = function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_f(param_t_1, param_e_1);
  var var_r_1 = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r_1 && param_t_1.constructor && (var_r_1 = param_t_1.constructor.name),
  "Map" === var_r_1 || "Set" === var_r_1 ? Array.from(param_t_1) :
  "Arguments" === var_r_1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r_1) ?
  var_f(param_t_1, param_e_1) : void 0;
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
  function var_f(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  var var_d,
  var_h,
  fn_p = function (param_t, param_e, param_r, param_n) {
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
  var_v = new Map(),
  regex_m = /ssplay\.net/i,
  regex_y = /abyssplayer\.com/i,
  regex_g = /ssplay\.net\/[a-z0-9]{2,4}\//i,
  str_b = "";
  function var_w() {
  var var_t,
  var_e,
  var_r,
  var_n = null === (var_t = document.querySelector("#pembed iframe, #embed_holder iframe")) ||
  void 0 === var_t ? void 0 : var_t.src;
  if (var_n) return var_n;
  var var_i = null === (var_e = document.querySelector(".DagPlayOpt.on")) ||
  void 0 === var_e ? void 0 : var_e.getAttribute("data-embed");
  if (var_i) return var_i;
  var var_o = null === (var_r = document.querySelector("#SS .DagPlayOpt")) ||
  void 0 === var_r ? void 0 : var_r.getAttribute("data-embed");
  return var_o || "";
  }
  function var_A() {
  var var_t,
  var_e,
  var_r,
  var_n,
  var_i = var_w(),
  str_o = "";
  if (var_i) {
  var var_a,
  var_s = var_l(document.querySelectorAll(".DagPlayOpt"));
  try {
  for (var_s.s();
  !(var_a = var_s.n()).done;
  ) {
  var var_u_1 = var_a.value;
  if (var_u_1.getAttribute("data-embed") === var_i) {
  str_o = (null === (var_e = null === (var_t = var_u_1.querySelector("span")) ||
  void 0 === var_t ? void 0 : var_t.textContent) || void 0 === var_e ?
  void 0 : var_e.trim()) || "";
  break;
  }
  }
  }
  catch (var_t_1) {
  var_s.e(var_t_1);
  }
  finally {
  var_s.f();
  }
  }
  var var_c_1 = (null === (var_n = null === (var_r = document.querySelector("h1")) ||
  void 0 === var_r ? void 0 : var_r.textContent) || void 0 === var_n ?
  void 0 : var_n.trim()) || document.title;
  return str_o ? `${var_c_1}- Tập ${str_o}` : var_c_1;
  }
  var obj__ = {
  getDomains: () => ["blvietsub."],
  forceUpdate() {
  var var_t = var_w();
  var_t !== str_b && (str_b = var_t, var_h = void 0);
  }
  ,
  processRequestIds(param_t) {
  var var_e = param_t.url;
  return /ssplay\.net/i.test(var_e) && function (param_t_1) {
  return /\.m3u8/i.test(param_t_1) || regex_g.test(param_t_1) ||
  /\/tube\//i.test(param_t_1);
  }
  (var_e) ? (param_t.filename = var_A(), param_t.referrer = "https://ssplay.net/",
  param_t.type = "video", var_h = param_t, var_v.set(location.href, param_t.url),
  !0) : !(!/abyss-cdn\.ink/i.test(var_e) || !/\.m3u8/i.test(var_e)) &&
  (param_t.filename = var_A(), param_t.type = "video", var_h = param_t, var_v.set(
  location.href, param_t.url), !0);
  }
  ,
  parse: {
  sources: [...((null === (var_d = dep_network_monitor.a.parse) ||
  void 0 === var_d ? void 0 : var_d.sources) || []), {
  checkSource: param_t => param_t.url.includes("ssplay"),
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_p(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_n, var_s;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (var_r) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: var_e.url
  }
  }
  );
  case 1:
  var_n = param_t_1.v, var_r = null == var_n ? void 0 : var_n.url;
  case 2:
  return param_t_1.n = 3, Object(dep_media_sniffer.e)(var_r, var_e);
  case 3:
  return (var_s = param_t_1.v).forEach(param_t_2 => {
  param_t_2.referrer = "https://ssplay.net/", param_t_2.filename = param_t_2.filename ||
  var_A();
  }
  ), param_t_1.a(2, var_s);
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
  return /^(?=.*(okcdn\.ru|vkuser\.net))(?!.*bytes=).*/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_p(void 0, void 0, void 0, var_u().m(function var_t() {
  var var_a, var_s, var_c_1, var_l_1, var_f_1, var_d_1, var_h_1, var_p, var_v_1,
  var_m, var_y, var_g, var_b;
  return var_u().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (param_t_1.p = 0, var_r) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.CORS_FETCH,
  data: {
  url: var_e.url,
  responseType: "text"
  }
  }
  );
  case 1:
  var_r = param_t_1.v.data;
  case 2:
  return var_v_1 = Object(dep_module_44.parse)(var_r, {
  attributeNamePrefix: "",
  attrNodeName: "@",
  textNodeName: "#text",
  ignoreAttributes: !1,
  cdataTagName: "__cdata"
  }
  ), var_m = (null === (var_l_1 = null === (var_c_1 = null === (var_s = null === (
  var_a = null == var_v_1 ? void 0 : var_v_1.MPD) || void 0 === var_a ?
  void 0 : var_a.Period) || void 0 === var_s ? void 0 : var_s.AdaptationSet) ||
  void 0 === var_c_1 ? void 0 : var_c_1[0]) || void 0 === var_l_1 ?
  void 0 : var_l_1.Representation) || [], var_y = (null === (var_p = null === (var_h_1 = null === (
  var_d_1 = null === (var_f_1 = null == var_v_1 ? void 0 : var_v_1.MPD) ||
  void 0 === var_f_1 ? void 0 : var_f_1.Period) || void 0 === var_d_1 ?
  void 0 : var_d_1.AdaptationSet) || void 0 === var_h_1 ? void 0 :
  var_h_1[1]) || void 0 === var_p ? void 0 : var_p.Representation) ||
  [], var_g = var_m.map(param_t_2 => {
  var var_r_1,
  var_n,
  var_a_1,
  var_s_1,
  var_u_1,
  var_c_2,
  var_l_2 = param_t_2["@"],
  var_f_2 = var_l_2.height + "p",
  var_d_2 = dep_media_constants.r[var_f_2].label;
  try {
  var_c_2 = var_e.i18n_quality || Object(dep_dom_utils.i18n)(null === (var_r_1 = dep_media_constants.r[var_f_2]) ||
  void 0 === var_r_1 ? void 0 : var_r_1.i18n_label) || var_d_2;
  }
  catch (var_t_1) {
  var_c_2 = var_d_2;
  }
  var var_h_2 = `${var_e.protocol}//${var_e.host}${var_e.pathname}${param_t_2.BaseURL.replaceAll("&amp;", "&")}`,
  var_p_1 = (() => {
  var var_t_1,
  var_r_2,
  var_n_1 = null === (var_t_1 = var_h_2.match(/sig=(\w+)&/)) ||
  void 0 === var_t_1 ? void 0 : var_t_1[1],
  var_i = var_y.find(param_t_3 => {
  var var_e_1;
  return null === (var_e_1 = null == param_t_3 ? void 0 : param_t_3.BaseURL) ||
  void 0 === var_e_1 ? void 0 : var_e_1.includes(var_n_1);
  }
  ) || (null === (var_r_2 = var_y.slice(-1)) || void 0 === var_r_2 ?
  void 0 : var_r_2[0]);
  if (var_i) return `${var_e.protocol}//${var_e.host}${var_e.pathname}${var_i.BaseURL.replaceAll("&amp;", "&")}`;
  }
  )(),
  var_v_2 = var_p_1 ? {
  videoUrl: var_h_2,
  audioUrl: var_p_1
  }
  : var_p_1;
  return {
  type: (null === (var_a_1 = null === (var_n = null == var_l_2 ?
  void 0 : var_l_2.mimeType) || void 0 === var_n ? void 0 : var_n.split("/")) ||
  void 0 === var_a_1 ? void 0 : var_a_1[0]) || "video",
  ext: (null === (var_u_1 = null === (var_s_1 = null == var_l_2 ?
  void 0 : var_l_2.mimeType) || void 0 === var_s_1 ? void 0 :
  var_s_1.split("/")) || void 0 === var_u_1 ? void 0 : var_u_1[1]) ||
  "mp4",
  filename: var_A(),
  title: var_A(),
  quality: var_d_2,
  i18n_quality: var_c_2,
  resolution: var_f_2,
  url: var_v_2
  };
  }
  ), param_t_1.a(2, var_g);
  case 3:
  return param_t_1.p = 3, var_b = param_t_1.v, console.error(var_b), param_t_1.a(
  2, []);
  }
  }
  , var_t, null, [[0, 3]]);
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
  return regex_m.test(var_e);
  }
  ,
  getUrl(param_t) {
  var var_e = param_t.url;
  return var_h ? [var_h] : var_v.get(location.href) ? var_v.get(location.href) :
  var_e;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = param_t.node;
  return var_e.filename = var_A(), var_e.ext = "m3u8", var_e.exts = ["m3u8"], var_e.referrer = "https://ssplay.net/",
  var_e.cacheUrl = null == var_r ? void 0 : var_r.src, "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.url;
  return regex_y.test(var_e);
  }
  ,
  getUrl(param_t) {
  var var_e = param_t.url;
  return var_h ? [var_h] : var_v.get(location.href) ? var_v.get(location.href) :
  var_e;
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject,
  var_r = param_t.node;
  return var_e.filename = var_A(), var_e.ext = "m3u8", var_e.exts = ["m3u8"], var_e.cacheUrl = null == var_r ?
  void 0 : var_r.src, "video";
  }
  }
  , ...(dep_network_monitor.a.urls || [])],
  default: {
  getUrl: param_t => {
  var var_e = param_t.url,
  var_r = param_t.ids;
  if (var_v.get(var_e)) return var_v.get(var_e);
  if (var_h) return var_h.url;
  var var_n,
  var_i = var_l(var_r);
  try {
  var var_o,
  fn_a = function () {
  var var_t = var_n.value;
  return Array.from(var_v.values()).some(param_e => param_e === var_t.url) ?
  0 : /^(?=.*(okcdn\.ru|vkuser\.net))(?!.*bytes=).*/i.test(var_t.url) ||
  var_t.ext.includes("m3u8") ? (var_v.set(var_e, var_t.url), {
  v: var_t.url
  }
  ) : void 0;
  };
  for (var_i.s();
  !(var_n = var_i.n()).done;
  ) if (0 !== (var_o = fn_a()) && var_o) return var_o.v;
  }
  catch (var_t) {
  var_i.e(var_t);
  }
  finally {
  var_i.f();
  }
  return var_e;
  }
  }
  };
  exportsObj.default = obj__;
  };
