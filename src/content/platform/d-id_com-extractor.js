// Module 224 - Savior D Id_com Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_url_filter = requireFn(81),
  dep_dom_utils = requireFn(0),
  dep_media_constants = requireFn(1),
  dep_url_utils = requireFn(3),
  dep_format_resolver = requireFn(14),
  dep_media_sniffer = requireFn(6),
  dep_quality_helper = requireFn(9);
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
  list_h = [],
  obj_p = {
  };
  function var_v(param_t) {
  return fn_d(this, void 0, void 0, var_l().m(function var_e() {
  var var_r, var_f_1, var_d, var_h, var_p, var_v_1;
  return var_l().w(function (param_e) {
  for (;;
  ) switch (param_e.p = param_e.n) {
  case 0:
  if (var_r = Object(dep_url_filter.a)(param_t)) {
  param_e.n = 1;
  break;
  }
  return param_e.a(2, []);
  case 1:
  if (!Array.isArray(var_r)) {
  param_e.n = 2;
  break;
  }
  return param_e.a(2, var_r.map(param_e_1 => (param_e_1.filename = param_t.config.video.title ||
  param_e_1.filename, param_e_1)));
  case 2:
  return param_e.n = 3, fetch(var_r).then(param_t_1 => param_t_1.text());
  case 3:
  if (var_f_1 = param_e.v, (var_d = Object(dep_url_utils.f)(var_r)).filename = param_t.config.video.title ||
  var_d.filename, var_d.fixName = var_d.filename, (var_h = var_d.url) &&
  var_h.includes("videoplayback") && var_h.includes("mp4") &&
  (var_d.ext = "mp4", var_d.skipReferrer = !0), "mpd" != var_d.ext) {
  param_e.n = 7;
  break;
  }
  if (var_p = var_d.fixName || var_d.filename || document.title, param_e.p = 4, !var_f_1) {
  param_e.n = 5;
  break;
  }
  return param_e.a(2, Object(dep_format_resolver.b)(var_f_1, var_p, var_d.host, var_h));
  case 5:
  param_e.n = 7;
  break;
  case 6:
  param_e.p = 6, var_v_1 = param_e.v, Object(dep_dom_utils.devLog)(var_v_1);
  case 7:
  if (!Object(dep_media_constants.B)(var_d.ext) && !Object(dep_dom_utils.isSpecialUrls)(
  var_d.url)) {
  param_e.n = 8;
  break;
  }
  if (!var_f_1) {
  param_e.n = 8;
  break;
  }
  return param_e.a(2, Object(dep_media_sniffer.e)(var_f_1, var_d));
  case 8:
  return var_d.quality || (var_d.quality = dep_quality_helper.b.DEFAULT_QUALITY_TYPE),
  param_e.a(2, [var_d]);
  }
  }
  , var_e, null, [[4, 6]]);
  }
  ));
  }
  var obj_m = {
  getDomains: () => ["d-id.com"],
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return /player\.vimeo\.com/i.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media;
  return fn_d(void 0, void 0, void 0, var_l().m(function var_t() {
  var var_r, var_n, var_a;
  return var_l().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  if (param_t_1.p = 0, var_r = var_e.url, !list_h.includes(var_r) ||
  !obj_p[var_r]) {
  param_t_1.n = 1;
  break;
  }
  return param_t_1.a(2, var_v(obj_p[var_r]));
  case 1:
  return param_t_1.n = 2, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  frameUrl: var_r
  }
  }
  );
  case 2:
  if ((var_n = param_t_1.v) && var_n.config) {
  param_t_1.n = 3;
  break;
  }
  return param_t_1.a(2, []);
  case 3:
  return list_h.push(var_r), obj_p[var_r] = var_n, param_t_1.a(2, var_v(var_n));
  case 4:
  return param_t_1.p = 4, var_a = param_t_1.v, console.error(var_a), param_t_1.a(
  2, []);
  }
  }
  , var_t, null, [[0, 4]]);
  }
  ));
  }
  }
  ]
  }
  ,
  urls: [{
  checkUrl: param_t => {
  var var_e = param_t.url,
  var_r = param_t.node;
  return var_e.includes("vimeo.com") && "IFRAME" === var_r.tagName;
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.url;
  return fn_d(void 0, void 0, void 0, var_l().m(function var_t() {
  return var_l().w(function (param_t_1) {
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
  mediaObjectChange: param_t => (param_t.mediaObject.ext = "m3u8", "video")
  }
  ]
  };
  exportsObj.default = obj_m;
  };
