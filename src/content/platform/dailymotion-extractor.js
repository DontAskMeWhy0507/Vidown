// Module 127 - Savior Dailymotion Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0),
  dep_url_utils = requireFn(3),
  dep_media_constants = requireFn(1),
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
  a: var_h_2,
  f: var_h_2.bind(var_t, 4),
  d: function (param_e, param_r_2) {
  return var_o_1 = param_e, var_s_2 = 0, var_u_1 = var_t, obj_d_1.n = param_r_2,
  obj_a;
  }
  };
  function var_h_2(param_r_2, param_n_2) {
  for (var_s_2 = param_r_2, var_u_1 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_3.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_3[var_e],
  var_h_3 = obj_d_1.p,
  var_p_2 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_2 === param_n_2) && (var_u_1 = var_o_2[(var_s_2 = var_o_2[4]) ?
  5 : (var_s_2 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_3 &&
  ((var_i_1 = param_r_2 < 2 && var_h_3 < var_o_2[1]) ? (var_s_2 = 0, obj_d_1.v = param_n_2,
  obj_d_1.n = var_o_2[1]) : var_h_3 < var_p_2 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_2) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d_1.n = var_p_2, var_s_2 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_a;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_2(param_l, param_p), var_s_2 = param_l, var_u_1 = param_p;
  (var_e = var_s_2 < 2 ? var_t : var_u_1) || !flag_f;
  ) {
  var_o_1 || (var_s_2 ? var_s_2 < 3 ? (var_s_2 > 1 && (obj_d_1.n = -1), var_h_2(
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
  function var_c() {
  }
  function var_l_1() {
  }
  function var_f_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_u(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h_1 = var_f_1.prototype = var_c.prototype = Object.create(var_d);
  function var_p_1(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f_1) :
  (param_t.__proto__ = var_f_1, var_u(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h_1), param_t;
  }
  return var_l_1.prototype = var_f_1, var_u(var_h_1, "constructor", var_f_1), var_u(
  var_f_1, "constructor", var_l_1), var_l_1.displayName = "GeneratorFunction", var_u(
  var_f_1, var_i, "GeneratorFunction"), var_u(var_h_1), var_u(var_h_1, var_i, "Generator"),
  var_u(var_h_1, var_n, function () {
  return this;
  }
  ), var_u(var_h_1, "toString", function () {
  return "[object Generator]";
  }
  ), (var_s = function () {
  return {
  w: var_o,
  m: var_p_1
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
  };
  function var_l(param_t) {
  return new Promise(param_e => {
  fetch(param_t).then(param_t_1 => param_t_1.text()).then(param_t_1 => Object(dep_media_sniffer.e)(
  param_t_1)).then(param_t_1 => {
  Promise.allSettled(param_t_1.map(param_t_2 => "subtitles" == param_t_2.type ?
  fetch(param_t_2.url).then(param_t_3 => param_t_3.text()).then(param_e_1 => {
  var var_r = param_e_1.split("\n").find(param_t_3 => !param_t_3.startsWith("#"));
  if (var_r) {
  param_t_2.url = var_r;
  try {
  var var_n = Object(dep_url_utils.f)(var_r);
  param_t_2.ext = var_n.ext, param_t_2.exts = var_n.exts, param_t_2._hls = !1, param_t_2._isDashMPD = !1;
  }
  catch (var_t) {
  }
  }
  return param_t_2;
  }
  ) : param_t_2)).then(() => {
  param_e(param_t_1);
  }
  );
  }
  ).catch(param_t_1 => {
  console.warn(param_t_1), param_e([]);
  }
  );
  }
  );
  }
  function var_f(param_t) {
  return fn_c(this, void 0, void 0, var_s().m(function var_e() {
  var var_r, var_a, var_u_1, var_c, var_f_1, var_d, var_h_1, var_p_1, var_v_1, var_m_1,
  var_y_1;
  return var_s().w(function (param_e) {
  for (;;
  ) switch (param_e.p = param_e.n) {
  case 0:
  return param_e.p = 0, var_r = JSON.parse(param_t), param_e.n = 1, var_l(var_r.qualities.auto[0].url);
  case 1:
  return var_a = param_e.v, param_e.a(2, var_a.map(param_t_1 => (param_t_1.title = var_r.title,
  param_t_1)));
  case 2:
  if (param_e.p = 2, var_y_1 = param_e.v, console.warn(var_y_1), var_u_1 = [], var_c = {
  }
  , var_f_1 = {
  Mobile: /("qualities":(.*)"144":(.*?)mp4","url":")(http.*?)"/i,
  Small: /("qualities":(.*)"240":(.*?)mp4","url":")(http.*?)"/i,
  Medium: /("qualities":(.*)"380":(.*?)mp4","url":")(http.*?)"/i,
  Standard: /("qualities":(.*)"480":(.*?)mp4","url":")(http.*?)"/i,
  HD: /("qualities":(.*)"720":(.*?)mp4","url":")(http.*?)"/i,
  "Full HD": /("qualities":(.*)"1080":(.*?)mp4","url":")(http.*?)"/i
  }
  , var_d = {
  Mobile: /("qualities":(.*)"144":(.*?)URL","url":")(http.*?)"/i,
  Small: /("qualities":(.*)"240":(.*?)URL","url":")(http.*?)"/i,
  Medium: /("qualities":(.*)"380":(.*?)URL","url":")(http.*?)"/i,
  Standard: /("qualities":(.*)"480":(.*?)URL","url":")(http.*?)"/i,
  HD: /("qualities":(.*)"720":(.*?)URL","url":")(http.*?)"/i,
  "Full HD": /("qualities":(.*)"1080":(.*?)URL","url":")(http.*?)"/i
  }
  , Object.keys(var_f_1).forEach(function (param_e_1) {
  var var_r_1 = param_e_1;
  (var_h_1 = param_t.match(var_f_1[var_r_1])) && (var_c[var_r_1] = var_h_1[4]);
  }
  ), 0 !== Object.keys(var_c).length) {
  param_e.n = 3;
  break;
  }
  return var_p_1 = [], Object.keys(var_d).forEach(function (param_e_1) {
  var var_r_1 = param_e_1;
  (var_h_1 = param_t.match(var_d[var_r_1])) && var_p_1.push(var_l(var_h_1[4]));
  }
  ), param_e.a(2, Promise.allSettled(var_p_1).then(param_t_1 => param_t_1.reduce(
  (param_t_2, param_e_1) => ((null == param_t_2 ? void 0 : param_t_2.value) &&
  var_u_1.push(param_t_2.value), (null == param_e_1 ? void 0 :
  param_e_1.value) && var_u_1.push(param_e_1.value), {
  }
  ), {
  }
  )));
  case 3:
  return var_v_1 = param_t.match(/"title":"(.*?)(",")/i), var_m_1 = void 0, var_v_1 &&
  (var_m_1 = var_v_1[1]), Object.keys(var_c).forEach(function (param_t_1) {
  var var_e_1 = var_c[param_t_1];
  if (var_e_1) {
  var var_r_1 = Object(dep_url_utils.f)(var_e_1);
  for (var var_a_1 in dep_media_constants.r) {
  var var_s_1 = dep_media_constants.r[var_a_1];
  if (var_s_1.label === param_t_1) {
  var_r_1.quality = Object(dep_dom_utils.i18n)(var_s_1.i18n_label), var_r_1.resolution = var_a_1;
  break;
  }
  }
  var_r_1.ext = "mp4", var_r_1.type = "video", var_r_1.filename = var_m_1, var_m_1 &&
  (var_r_1.title = var_m_1), var_u_1.push(var_r_1);
  }
  }
  ), param_e.a(2, var_u_1);
  }
  }
  , var_e, null, [[0, 2]]);
  }
  ));
  }
  var obj_d = {
  parse: {
  default: param_t => {
  var var_e = param_t.response,
  var_r = param_t.media;
  return fn_c(void 0, void 0, void 0, var_s().m(function var_t() {
  return var_s().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (!var_e.includes("#EXTM3U")) {
  param_t_1.n = 1;
  break;
  }
  return param_t_1.a(2, Object(dep_media_sniffer.e)(var_e, var_r));
  case 1:
  return param_t_1.n = 2, var_f(var_e);
  case 2:
  return param_t_1.a(2, param_t_1.v);
  }
  }
  , var_t);
  }
  ));
  }
  }
  };
  function var_h() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_u_2 = param_n && param_n.prototype instanceof var_s_1 ?
  param_n : var_s_1,
  var_c_1 = Object.create(var_u_2.prototype);
  return var_p(var_c_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_s_2,
  var_u_3,
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
  return var_o_1 = param_e, var_s_2 = 0, var_u_3 = var_t, obj_d_1.n = param_r_2,
  obj_a;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_s_2 = param_r_2, var_u_3 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
  var_h_2 = obj_d_1.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_u_3 = var_o_2[(var_s_2 = var_o_2[4]) ?
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
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_s_2 = param_l, var_u_3 = param_p;
  (var_e = var_s_2 < 2 ? var_t : var_u_3) || !flag_f;
  ) {
  var_o_1 || (var_s_2 ? var_s_2 < 3 ? (var_s_2 > 1 && (obj_d_1.n = -1), var_h_1(
  var_s_2, var_u_3)) : obj_d_1.n = var_u_3 : obj_d_1.v = var_u_3);
  try {
  if (num_c = 2, var_o_1) {
  if (var_s_2 || (param_i_2 = "next"), var_e = var_o_1[param_i_2]) {
  if (!(var_e = var_e.call(var_o_1, var_u_3))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_u_3 = var_e.value, var_s_2 < 2 && (var_s_2 = 0);
  }
  else 1 === var_s_2 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_s_2 < 2 &&
  (var_u_3 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_s_2 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d_1.n < 0) ? var_u_3 : param_r_1.call(param_n_1,
  obj_d_1)) !== obj_a) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_s_2 = 1, var_u_3 = var_e_1;
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
  function var_s_1() {
  }
  function var_u_1() {
  }
  function var_c() {
  }
  var_e = Object.getPrototypeOf;
  var var_l_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_p(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_f_1 = var_c.prototype = var_s_1.prototype = Object.create(var_l_1);
  function var_d(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_c) :
  (param_t.__proto__ = var_c, var_p(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_f_1), param_t;
  }
  return var_u_1.prototype = var_c, var_p(var_f_1, "constructor", var_c), var_p(
  var_c, "constructor", var_u_1), var_u_1.displayName = "GeneratorFunction", var_p(
  var_c, var_i, "GeneratorFunction"), var_p(var_f_1), var_p(var_f_1, var_i, "Generator"),
  var_p(var_f_1, var_n, function () {
  return this;
  }
  ), var_p(var_f_1, "toString", function () {
  return "[object Generator]";
  }
  ), (var_h = function () {
  return {
  w: var_o,
  m: var_d
  };
  }
  )();
  }
  function var_p(param_t, param_e, param_r, param_n) {
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
  (var_p = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_p(param_t_1, param_e_2, function (param_t_2) {
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
  var var_v,
  var_m,
  var_y,
  fn_g = function (param_t, param_e, param_r, param_n) {
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
  regex_b = /#video=([a-z0-9]+)/i,
  regex_w = /video\/([a-z0-9]+)/i,
  var_A = null === (var_v = document.querySelector("h1")) ||
  void 0 === var_v ? void 0 : var_v.textContent,
  var__ = location.href,
  var_E = null === (var_m = document.querySelector('div[class*="VideoOverlay__overlay"]')) ||
  void 0 === var_m ? void 0 : var_m.getBoundingClientRect().top,
  obj_S = {
  getDomains: () => ["dailymotion.com"],
  isValidVideoNode: param_t => !Array.from(param_t.classList).some(param_t_1 => param_t_1.toLowerCase(
  ).includes("videopreview")),
  forceUpdate: () => {
  var var_t, var_e;
  location.href !== var__ && (EE.emit("widget.forceUpdate"), var__ = location.href,
  var_y = void 0);
  var var_r = document.querySelector('div[class*="VideoOverlay__overlay"]');
  var_r && var_E && var_E !== var_r.getBoundingClientRect().top &&
  (EE.emit("widget.forceUpdate"), var_E = var_r.getBoundingClientRect().top), var_A !== (
  null === (var_t = document.querySelector("h1")) || void 0 === var_t ?
  void 0 : var_t.textContent) && (var_A = null === (var_e = document.querySelector(
  "h1")) || void 0 === var_e ? void 0 : var_e.textContent, EE.emit("widget.forceUpdate"));
  }
  ,
  beforeGetUrl: () => {
  var var_t = document.querySelector('div[class*="VideoOverlay__overlay"]');
  var_t && (var_E = var_t.getBoundingClientRect().top, var_t.style.zIndex = "auto");
  }
  ,
  parse: {
  sources: [],
  default: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_g(void 0, void 0, void 0, var_h().m(function var_t() {
  var var_n, var_i, var_o;
  return var_h().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  return param_t_1.n = 1, null === (var_i = null === (var_n = obj_d.parse) ||
  void 0 === var_n ? void 0 : var_n.default) || void 0 === var_i ?
  void 0 : var_i.call(var_n, {
  media: var_e,
  response: var_r
  }
  );
  case 1:
  if (var_o = param_t_1.v) {
  param_t_1.n = 2;
  break;
  }
  var_o = [];
  case 2:
  return param_t_1.a(2, var_o);
  }
  }
  , var_t);
  }
  ));
  }
  }
  ,
  urls: [{
  checkUrl: () => Boolean(location.href.match(regex_w)),
  getUrl: () => var_y ? [var_y] : []
  }
  , {
  checkUrl: () => Boolean(location.href.includes("playlist")),
  getUrl: () => var_y ? [var_y] : []
  }
  ],
  default: {
  getUrl: () => {
  var var_t;
  var_E = null === (var_t = document.querySelector('div[class*="VideoOverlay__overlay"]')) ||
  void 0 === var_t ? void 0 : var_t.getBoundingClientRect().top;
  var var_e = [...document.querySelectorAll('div[class*="VideoCard__videoImageWrapper"], div[class*="HomeVideoPreview__videoPreviewHorizontal"], div[class*="HomeVideoPreview__videoPreviewVertical"]')].find(
  param_t => param_t.getBoundingClientRect().top === var_E);
  if (!var_e) return [];
  var var_r = var_e.querySelector("a").href,
  var_n = var_r.match(regex_b) || var_r.match(regex_w);
  return "http://www.dailymotion.com/player/metadata/video/" + (var_n &&
  var_n[1]);
  }
  ,
  mediaObjectChange: param_t => {
  var var_e = param_t.mediaObject;
  return var_e.ext = "m3u8", var_e.exts = ["m3u8"], "video";
  }
  }
  ,
  toggleLight: {
  turnOff: {
  parentUpdate: param_t => {
  param_t.classList.add("--savior-overlay-z-index-top");
  var var_e = getComputedStyle(param_t),
  var_r = var_e.overflowX,
  var_n = var_e.overflowY;
  "hidden" === var_r && param_t.classList.add("--savior-overlay-overflow-x-visible"),
  "hidden" === var_n && param_t.classList.add("--savior-overlay-overflow-y-visible");
  }
  }
  }
  ,
  processRequestIds: param_t => {
  var var_e, var_r, var_n, var_i, var_o;
  try {
  var var_a = decodeURIComponent(null === (var_e = document.head.querySelector("link[rel=alternate]")) ||
  void 0 === var_e ? void 0 : var_e.href),
  var_s_1 = null === (var_r = new URL(var_a).searchParams.get("url")) ||
  void 0 === var_r ? void 0 : var_r.split("/");
  if (!var_s_1) throw new Error("Invalid URL");
  var_o = var_s_1.pop() || var_s_1.pop();
  }
  catch (var_t) {
  var_o = null === (var_n = location.href.match(regex_w)) ||
  void 0 === var_n ? void 0 : var_n[1];
  }
  return !(var_y || !var_o || !(null === (var_i = param_t.filename) ||
  void 0 === var_i ? void 0 : var_i.includes(var_o)) || !param_t.url.includes("sec=")) &&
  (var_y = param_t, !0);
  }
  };
  exportsObj.default = obj_S;
  };
