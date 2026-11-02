// Module 387 - Savior Vtv Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0),
  dep_media_sniffer = requireFn(6),
  dep_url_utils = requireFn(3),
  dep_quality_helper = requireFn(9),
  dep_format_resolver = requireFn(14),
  dep_content_type_analyzer = requireFn(162),
  dep_key_derivation_tool = requireFn(163),
  dep_dom_helper = requireFn(12);
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
  var_h_1 = var_c.prototype = var_s.prototype = Object.create(var_l);
  function var_p_1(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_c) :
  (param_t.__proto__ = var_c, var_d(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h_1), param_t;
  }
  return var_u.prototype = var_c, var_d(var_h_1, "constructor", var_c), var_d(var_c,
  "constructor", var_u), var_u.displayName = "GeneratorFunction", var_d(var_c, var_i,
  "GeneratorFunction"), var_d(var_h_1), var_d(var_h_1, var_i, "Generator"), var_d(
  var_h_1, var_n, function () {
  return this;
  }
  ), var_d(var_h_1, "toString", function () {
  return "[object Generator]";
  }
  ), (var_f = function () {
  return {
  w: var_o,
  m: var_p_1
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
  function var_h(param_t, param_e) {
  var var_r = "undefined" != typeof Symbol && param_t[Symbol.iterator] ||
  param_t["@@iterator"];
  if (!var_r) {
  if (Array.isArray(param_t) || (var_r = function (param_t_1, param_e_1) {
  if (param_t_1) {
  if ("string" == typeof param_t_1) return var_p(param_t_1, param_e_1);
  var var_r_1 = {
  }
  .toString.call(param_t_1).slice(8, -1);
  return "Object" === var_r_1 && param_t_1.constructor && (var_r_1 = param_t_1.constructor.name),
  "Map" === var_r_1 || "Set" === var_r_1 ? Array.from(param_t_1) :
  "Arguments" === var_r_1 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(var_r_1) ?
  var_p(param_t_1, param_e_1) : void 0;
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
  function var_p(param_t, param_e) {
  (null == param_e || param_e > param_t.length) && (param_e = param_t.length);
  for (var num_r = 0, var_n = Array(param_e);
  num_r < param_e;
  num_r++) var_n[num_r] = param_t[num_r];
  return var_n;
  }
  var var_v,
  var_m,
  var_y,
  fn_g = function (param_t, param_e, param_r, param_n) {
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
  list_b = [],
  flag_w = !1,
  obj_A = {
  }
  ,
  str__ = "div.inithd > div",
  regex_E = /vtv\/\S+\.mp4/,
  var_S = location.href,
  var_O = void 0,
  regex_x = /_([0-9]{3,4})p/;
  function var_k(param_t) {
  var var_e = param_t.match(regex_x);
  return var_e && var_e.length ? parseInt(var_e[1]) : null;
  }
  function var_M(param_t) {
  return param_t = (param_t = param_t.split("/").pop() || "").replace(regex_x, "");
  }
  function var_T(param_t) {
  return param_t.html5 && param_t.html5.length ? param_t.html5 :
  param_t.mp4 ? Array.isArray(param_t.mp4) ? param_t.mp4 : [param_t.mp4] :
  [];
  }
  exportsObj.default = {
  getDomains: () => ["vtv"],
  getCustomParent(param_t) {
  var var_e = Object(dep_dom_helper.d)(param_t);
  return param_t.closest(".app-media-player") || var_e;
  }
  ,
  isValidVideoNode: param_t => null == param_t.closest('[data-animate="open"], [data-marked-zoneid="vtv_home_video_thtt"]') &&
  Object(dep_dom_helper.m)(param_t),
  parse: {
  sources: [],
  default: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_g(void 0, void 0, void 0, var_f().m(function var_t() {
  var var_n, var_l, var_d_1, var_p_1, var_g, var_b, var__, var_E, var_S_1, var_O_1,
  var_x, var_I, var_j;
  return var_f().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if ("audio" != var_e.type && "mp4" != var_e.ext) {
  param_t_1.n = 1;
  break;
  }
  return param_t_1.a(2, [var_e]);
  case 1:
  if (!Array.isArray(var_r)) {
  param_t_1.n = 2;
  break;
  }
  return param_t_1.a(2, var_r);
  case 2:
  return var_l = [], param_t_1.p = 3, var_d_1 = JSON.parse(var_r), var_T(var_d_1).forEach(
  function (param_t_2) {
  var var_e_1 = Object(dep_url_utils.f)(param_t_2),
  var_r_1 = var_k(param_t_2),
  var_n_1 = var_M(param_t_2);
  var_e_1.quality = var_r_1 ? dep_quality_helper.b.getQualityBySize(var_r_1) :
  dep_quality_helper.b.DEFAULT_QUALITY_TYPE, var_e_1.filename = var_n_1, var_e_1.title = var_n_1,
  var_e_1.type = "video", var_e_1.referrer = location.href, var_r_1 &&
  Number.isInteger(var_r_1) && (var_e_1.resolution = var_r_1 + "p"), var_l.push(
  var_e_1);
  }
  ), param_t_1.a(2, var_l);
  case 4:
  if (param_t_1.p = 4, param_t_1.v, var_e.referrer = location.href, "string" != typeof var_r) {
  param_t_1.n = 6;
  break;
  }
  return param_t_1.n = 5, Object(dep_media_sniffer.e)(var_r, var_e);
  case 5:
  if (!(null == (var_p_1 = param_t_1.v) ? void 0 : var_p_1.length)) {
  param_t_1.n = 6;
  break;
  }
  return param_t_1.a(2, var_p_1);
  case 6:
  if (!var_v && !flag_w) {
  param_t_1.n = 16;
  break;
  }
  return param_t_1.n = 7, fetch(var_l[0].url).then(param_t_2 => param_t_2.text());
  case 7:
  if (var_g = param_t_1.v, !(var_b = null === (var_n = /URI="([^"]*)"/.exec(var_g)) ||
  void 0 === var_n ? void 0 : var_n[1])) {
  param_t_1.n = 14;
  break;
  }
  return var__ = /[?&]([^=#]+)=([^&#]*)/g.exec(var_b) ? "&" :
  "?", var_m && (var_E = var_m), var_S_1 = var_b + var__ + "h=" + encodeURIComponent(
  var_E || "") + "&alg=1", var_O_1 = {
  method: "POST",
  headers: {
  "Content-type": "application/x-www-form-urlencoded"
  }
  }
  , obj_A[var_S_1] && (var_O_1.body = "content_id=" + obj_A[var_S_1]), param_t_1.p = 8,
  param_t_1.n = 9, fetch(var_S_1).then(param_t_2 => param_t_2.arrayBuffer());
  case 9:
  if (var_x = param_t_1.v, !var_v) {
  param_t_1.n = 10;
  break;
  }
  return param_t_1.a(2, Object(dep_content_type_analyzer.aes128)().then(param_t_2 => {
  var var_e_1, var_r_1;
  try {
  var_r_1 = Object(dep_format_resolver.a)(new Uint8Array(var_x), "base64");
  }
  catch (var_t_1) {
  console.log(var_t_1);
  }
  var var_n_1 = (null == var_r_1 ? void 0 : var_r_1.substr(0, 16)) ||
  "";
  var_n_1 = Object(dep_format_resolver.k)(var_n_1, "utf8"), var_r_1 = (null == var_r_1 ?
  void 0 : var_r_1.substr(16)) || "", var_r_1 = Object(dep_format_resolver.k)(var_r_1),
  param_t_2.init(new Uint8Array(var_n_1));
  var var_i,
  var_o = param_t_2.decrypt(new Uint8Array(var_r_1));
  var_o = Object(dep_format_resolver.l)(var_o);
  try {
  var_i = Object(dep_format_resolver.a)(new Uint8Array(var_o)) ||
  "";
  }
  catch (var_t_1) {
  console.log(var_t_1);
  }
  var_i || (var_i = var_r_1);
  try {
  null === (var_e_1 = var_S_1.match(/.*?\.key/)) || void 0 === var_e_1 ||
  var_e_1[0];
  }
  catch (var_t_1) {
  console.log(var_t_1);
  }
  var var_a = new Uint8Array(Object(dep_format_resolver.k)(var_i));
  if (var_S_1.match(/kms.sohatv.vn|localhost|10.5/)) {
  var var_u = Object(dep_format_resolver.a)(new Uint8Array(var_a)),
  var_f_1 = Object(dep_format_resolver.j)(var_u);
  var_f_1 = var_f_1.substring(parseInt(var_y) || 25), var_a = new Uint8Array(Object(
  dep_format_resolver.k)(var_f_1));
  }
  var var_d_2 = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
  return Object(dep_key_derivation_tool.key128)().then(param_t_3 => {
  var_a = param_t_3.init(var_a, var_d_2);
  var var_e_2,
  var_r_2 = btoa(String.fromCharCode.apply(null, var_a)),
  var_n_2 = var_h(var_l);
  try {
  for (var_n_2.s();
  !(var_e_2 = var_n_2.n()).done;
  ) {
  var var_i_1 = var_e_2.value;
  var_i_1.dashVideoId = var_r_2, var_i_1.hlsKeyMem = var_r_2, var_i_1.title = document.title,
  var_i_1.filename = document.title;
  }
  }
  catch (var_t_1) {
  var_n_2.e(var_t_1);
  }
  finally {
  var_n_2.f();
  }
  return var_l;
  }
  );
  }
  ));
  case 10:
  var_I = var_h(var_l);
  try {
  for (var_I.s();
  !(var_j = var_I.n()).done;
  ) var_j.value.dashVideoId = btoa(String.fromCharCode.apply(null, new Uint8Array(
  var_g)));
  }
  catch (var_t_1) {
  var_I.e(var_t_1);
  }
  finally {
  var_I.f();
  }
  return param_t_1.a(2, var_l);
  case 11:
  param_t_1.n = 13;
  break;
  case 12:
  return param_t_1.p = 12, param_t_1.v, param_t_1.a(2, var_l);
  case 13:
  param_t_1.n = 15;
  break;
  case 14:
  return param_t_1.a(2, var_l);
  case 15:
  param_t_1.n = 17;
  break;
  case 16:
  return param_t_1.a(2, var_l);
  case 17:
  return param_t_1.a(2);
  }
  }
  , var_t, null, [[8, 12], [3, 4]]);
  }
  ));
  }
  }
  ,
  forceUpdate: () => {
  location.hostname.includes("vtvgo.vn") ? list_b.length = 0 :
  location.hostname.includes("vtvgiaitri.vn") && (var_S !== location.href &&
  (var_S = location.href, list_b.length = 0), flag_w = !1, var_v = "");
  }
  ,
  beforeGetUrl: () => fn_g(void 0, void 0, void 0, var_f().m(function var_t() {
  var var_e, var_r, var_i, var_o, var_a, var_s, var_u, var_c, var_l, var_d_1, var_p_1,
  var_S_1, var_O_1, var_x, var_k_1, var_M_1, var_T_1, var_I, var_j, var_C, var_B;
  return var_f().w(function (param_t) {
  for (;;
  ) switch (param_t.p = param_t.n) {
  case 0:
  if (param_t.p = 0, list_b && list_b.length && (var_i = Array.from(document.querySelectorAll(
  str__)), list_b.forEach(param_t_1 => {
  var var_e_1,
  var_r_1 = param_t_1.url.match(regex_E);
  if (var_r_1) {
  var var_o_1 = var_i.find(param_t_2 => {
  var var_e_2, var_n;
  return null === (var_n = null === (var_e_2 = param_t_2.parentElement) ||
  void 0 === var_e_2 ? void 0 : var_e_2.dataset.vid) || void 0 === var_n ?
  void 0 : var_n.includes(var_r_1[0]);
  }
  );
  if (var_o_1) {
  var var_a_1 = (null === (var_e_1 = Object(dep_dom_utils.nearestParent)(var_o_1,
  "div.VCSortableInPreviewMode")) || void 0 === var_e_1 ? void 0 :
  var_e_1.getAttribute("data-contentid")) || "";
  obj_A[param_t_1.url] = var_a_1;
  }
  }
  }
  )), !location.hostname.includes("vtvgiaitri") || var_v || flag_w) {
  param_t.n = 8;
  break;
  }
  var_o = [...document.querySelectorAll("script[src]")].filter(param_t_1 => param_t_1.src.includes(
  "app")), var_a = var_h(var_o), param_t.p = 1, var_a.s();
  case 2:
  if ((var_s = var_a.n()).done) {
  param_t.n = 4;
  break;
  }
  return var_u = var_s.value, param_t.n = 3, fetch(var_u.src).then(param_t_1 => param_t_1.text(
  )).then(param_t_1 => fn_g(void 0, void 0, void 0, var_f().m(function var_e_1() {
  var var_r_1, var_n, var_i_1;
  return var_f().w(function (param_e) {
  for (;;
  ) switch (param_e.n) {
  case 0:
  if (flag_w = !0, !param_t_1.includes("vdrm")) {
  param_e.n = 2;
  break;
  }
  if (var_r_1 = /endpoint\s*:\s*("|')([^"']*)("|'),corsUrl/, var_n = /secretKey\s*:\s*("|')([^"']*)("|')/.exec(
  param_t_1), var_i_1 = var_r_1.exec(param_t_1), !var_n || !var_i_1) {
  param_e.n = 2;
  break;
  }
  return param_e.n = 1, fetch(var_i_1[2], {
  method: "POST",
  headers: {
  "Content-Type": "application/json"
  }
  ,
  body: JSON.stringify({
  username: "guest",
  platform: "website",
  secret_key: var_n[2],
  video_path: location.pathname
  }
  )
  }
  ).then(param_t_2 => param_t_2.json()).then(param_t_2 => {
  200 === param_t_2.code && (var_v = param_t_2.token);
  }
  );
  case 1:
  case 2:
  return param_e.a(2);
  }
  }
  , var_e_1);
  }
  )));
  case 3:
  param_t.n = 2;
  break;
  case 4:
  param_t.n = 6;
  break;
  case 5:
  param_t.p = 5, var_j = param_t.v, var_a.e(var_j);
  case 6:
  return param_t.p = 6, var_a.f(), param_t.f(6);
  case 7:
  param_t.n = 16;
  break;
  case 8:
  if (var_v || flag_w) {
  param_t.n = 16;
  break;
  }
  var_c = /VTVNewsPlayer\/core\/[^?]*.js/, var_l = [...document.querySelectorAll(
  "script[src]")].filter(param_t_1 => var_c.test(param_t_1.src)), var_d_1 = var_h(
  var_l), param_t.p = 9, var_d_1.s();
  case 10:
  if ((var_p_1 = var_d_1.n()).done) {
  param_t.n = 13;
  break;
  }
  return var_S_1 = var_p_1.value, flag_w = !0, param_t.n = 11, Object(dep_dom_utils.send)(
  "GET", var_S_1.src);
  case 11:
  var_O_1 = param_t.v, var_x = var_O_1.responseText, var_M_1 = /hash\s*=\s*"([^"]*)"/,
  var_T_1 = /ccc\s*=\s*(\d+)/, (var_k_1 = /drmkey\s*=\s*"([^"]*)"/).test(var_x) &&
  (var_v = (null === (var_e = var_k_1.exec(var_x)) || void 0 === var_e ?
  void 0 : var_e[1]) || ""), var_T_1.test(var_x) && (var_y = (null === (var_r = var_T_1.exec(
  var_x)) || void 0 === var_r ? void 0 : var_r[1]) || ""), (var_I = var_M_1.exec(
  var_x)) && (var_m = var_I[1]);
  case 12:
  param_t.n = 10;
  break;
  case 13:
  param_t.n = 15;
  break;
  case 14:
  param_t.p = 14, var_C = param_t.v, var_d_1.e(var_C);
  case 15:
  return param_t.p = 15, var_d_1.f(), param_t.f(15);
  case 16:
  param_t.n = 18;
  break;
  case 17:
  param_t.p = 17, var_B = param_t.v, console.log("Caught", var_B);
  case 18:
  return param_t.a(2);
  }
  }
  , var_t, null, [[9, 14, 15, 16], [1, 5, 6, 7], [0, 17]]);
  }
  )),
  processRequestIds: param_t => (param_t.url.match(/vtvgo.*\/manifest\/.+\/master-pre\.m3u8/) &&
  (var_O = param_t), !list_b.some(param_e => param_e.url.includes(param_t.url)) &&
  (list_b.push(param_t), !0)),
  urls: [{
  checkUrl: () => location.hostname.includes("vtvgiaitri"),
  getUrl: () => {
  var var_t,
  var_e = null === (var_t = list_b.filter(param_t => !param_t.url.includes("trackingID"))[0]) ||
  void 0 === var_t ? void 0 : var_t.url;
  return var_e && (var_e = var_e.replace(/([\s\S]*hlsToken=)([\s\S]*)/, "$1" + var_v)),
  var_e;
  }
  ,
  mediaObjectChange: param_t => {
  if ("m3u8" == param_t.mediaObject.ext) return "video";
  }
  }
  , {
  checkUrl: param_t => {
  var var_e = param_t.node;
  return location.hostname.includes("vtv.vn") && var_e.closest("div[src]");
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.node.closest("div[src]");
  return null == var_e ? void 0 : var_e.getAttribute("src");
  }
  ,
  mediaObjectChange(param_t) {
  var var_e,
  var_r,
  var_n = param_t.mediaObject,
  var_i = null === (var_r = null === (var_e = param_t.node.closest("figure")) ||
  void 0 === var_e ? void 0 : var_e.querySelector("figcaption")) ||
  void 0 === var_r ? void 0 : var_r.innerText.trim();
  var_i && (var_n.filename = var_i, var_n.fixName = var_i);
  }
  }
  , {
  checkUrl: () => location.hostname.includes("vtv.vn"),
  getUrl: param_t => {
  var var_e,
  var_r,
  var_n,
  var_i,
  var_o,
  var_a,
  var_s,
  var_u,
  var_c,
  var_l,
  var_f_1,
  var_d_1 = param_t.node,
  var_h_1 = param_t.url;
  if ("AUDIO" == var_d_1.nodeName) {
  if (var_h_1 && !var_h_1.startsWith("blob:")) return var_h_1;
  var var_p_1 = var_d_1.closest(".audioplayer, [data-file][data-id]"),
  var_v_1 = null == var_p_1 ? void 0 : var_p_1.getAttribute("data-id");
  if (var_v_1) return list_b.filter(param_t_1 => param_t_1.url.includes(var_v_1));
  }
  var var_m_1 = null === (var_n = null === (var_r = null === (var_e = var_d_1.closest(
  "[data-file]")) || void 0 === var_e ? void 0 : var_e.getAttribute("data-file")) ||
  void 0 === var_r ? void 0 : var_r.match(/mp4\/([\w-]+).mp4/)) ||
  void 0 === var_n ? void 0 : var_n[1],
  var_y_1 = var_m_1 && list_b.find(param_t_1 => param_t_1.url.includes("master.m3u8") &&
  param_t_1.url.includes(var_m_1));
  if (var_y_1) return var_y_1.filename = document.title, [var_y_1];
  var var_g = var_d_1.closest('[type="VideoStream"]'),
  var_w = null == var_g ? void 0 : var_g.getAttribute("data-vid");
  if (var_w) {
  var_w = var_w.substring(var_w.indexOf("/"));
  var var_A = list_b.filter(param_t_1 => param_t_1.url.includes(var_w) &&
  "master" === param_t_1.filename),
  var__ = null === (var_u = null === (var_s = var_g.querySelector(".VideoCMS_Caption") ||
  (null === (var_i = null == var_g ? void 0 : var_g.parentElement) ||
  void 0 === var_i ? void 0 : var_i.querySelector(".kbvi-title")) ||
  (null === (var_o = var_d_1.closest(".vPlayer")) || void 0 === var_o ?
  void 0 : var_o.querySelector(".item-title")) || (null === (var_a = null == var_g ?
  void 0 : var_g.closest(".swiper-slide")) || void 0 === var_a ?
  void 0 : var_a.querySelector("h2"))) || void 0 === var_s ?
  void 0 : var_s.innerText) || void 0 === var_u ? void 0 : var_u.trim();
  if (var__ && var_A.forEach(param_t_1 => param_t_1.fixName = var__), "https://vtv.vn/" === location.href &&
  !var__) {
  var var_E = null === (var_f_1 = null === (var_l = null === (var_c = var_d_1.closest(
  ".noibat1")) || void 0 === var_c ? void 0 : var_c.querySelector("h2")) ||
  void 0 === var_l ? void 0 : var_l.textContent) || void 0 === var_f_1 ?
  void 0 : var_f_1.trim();
  var_A.forEach(param_t_1 => param_t_1.fixName = var_E);
  }
  return var_A;
  }
  }
  }
  , {
  checkUrl: () => location.hostname.includes("vtvgo.vn"),
  getUrl: param_t => {
  var var_e,
  var_r,
  var_n,
  var_i,
  var_o,
  var_a,
  var_s,
  var_u,
  var_c,
  var_l = param_t.node;
  if (var_l.closest("#live_player") && !(null === (var_e = var_l.closest("#live_player")) ||
  void 0 === var_e ? void 0 : var_e.querySelector(".vjs-live-control.vjs-hidden")) ||
  (null === (var_i = null === (var_n = null === (var_r = var_l.closest(".player-frame")) ||
  void 0 === var_r ? void 0 : var_r.nextSibling) || void 0 === var_n ?
  void 0 : var_n.textContent) || void 0 === var_i ? void 0 :
  var_i.match(/live/i))) return [];
  if (location.pathname.startsWith("/channel")) {
  if (var_O) {
  var var_f_1 = null === (var_c = null === (var_u = null === (var_s = null === (
  var_a = null === (var_o = var_l.closest(".player-container")) ||
  void 0 === var_o ? void 0 : var_o.parentElement) || void 0 === var_a ?
  void 0 : var_a.parentElement) || void 0 === var_s ? void 0 :
  var_s.querySelector('button[aria-current="true"]')) || void 0 === var_u ?
  void 0 : var_u.textContent) || void 0 === var_c ? void 0 :
  var_c.replace(/^\d\d:\d\d/, "").trim();
  return var_O.filename = var_f_1, var_O.fixName = var_f_1, [var_O];
  }
  return [];
  }
  return list_b;
  }
  }
  ],
  toggleLight: {
  turnOff: {
  parentUpdate: location.href.includes("vtv.vn/video") ? (param_t, param_e) => {
  var var_r = param_e.$backdrop;
  var_r.remove();
  var var_n = document.querySelector(".swiper-wrapper"),
  var_i = null == var_n ? void 0 : var_n.parentElement;
  if (var_i) {
  var_i.classList.add("--savior-overlay-z-index-top"), var_n.classList.add("--savior-overlay-position-relative",
  "--savior-overlay-z-index-top");
  var list_o = ["0px", "0px"];
  var_r.style.top = list_o[0], var_r.style.left = list_o[1], var_i.prepend(var_r);
  }
  }
  : void 0,
  updated: location.host.includes("vtvgo.vn") ? (param_t, param_e) => {
  console.log("ctx", param_e);
  var list_r = ["0px", "$0px"];
  param_e.$backdrop.style.top = list_r[0], param_e.$backdrop.style.left = list_r[1];
  }
  : void 0
  }
  }
  };
  };
