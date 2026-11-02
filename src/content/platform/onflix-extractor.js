// Module 298 - Savior Onflix Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_constants = requireFn(1),
  dep_quality_helper = requireFn(9);
  function var_o() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_s(param_r, param_n, param_i, param_o) {
  var var_s_1 = param_n && param_n.prototype instanceof var_c_1 ?
  param_n : var_c_1,
  var_l_2 = Object.create(var_s_1.prototype);
  return var_a(var_l_2, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_a_1,
  var_s_2,
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
  return var_o_1 = param_e, var_a_1 = 0, var_s_2 = var_t, obj_d.n = param_r_2, obj_u;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_a_1 = param_r_2, var_s_2 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_3.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_3[var_e],
  var_h_2 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_s_2 = var_o_2[(var_a_1 = var_o_2[4]) ?
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
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_a_1 = param_l, var_s_2 = param_p;
  (var_e = var_a_1 < 2 ? var_t : var_s_2) || !flag_f;
  ) {
  var_o_1 || (var_a_1 ? var_a_1 < 3 ? (var_a_1 > 1 && (obj_d.n = -1), var_h_1(var_a_1,
  var_s_2)) : obj_d.n = var_s_2 : obj_d.v = var_s_2);
  try {
  if (num_c = 2, var_o_1) {
  if (var_a_1 || (param_i_2 = "next"), var_e = var_o_1[param_i_2]) {
  if (!(var_e = var_e.call(var_o_1, var_s_2))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_s_2 = var_e.value, var_a_1 < 2 && (var_a_1 = 0);
  }
  else 1 === var_a_1 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_a_1 < 2 &&
  (var_s_2 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_a_1 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d.n < 0) ? var_s_2 : param_r_1.call(param_n_1,
  obj_d)) !== obj_u) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_a_1 = 1, var_s_2 = var_e_1;
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
  function var_c_1() {
  }
  function var_l_1() {
  }
  function var_f_1() {
  }
  var_e = Object.getPrototypeOf;
  var var_d_1 = [][var_n] ? var_e(var_e([][var_n]())) : (var_a(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f_1.prototype = var_c_1.prototype = Object.create(var_d_1);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f_1) :
  (param_t.__proto__ = var_f_1, var_a(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l_1.prototype = var_f_1, var_a(var_h, "constructor", var_f_1), var_a(
  var_f_1, "constructor", var_l_1), var_l_1.displayName = "GeneratorFunction", var_a(
  var_f_1, var_i, "GeneratorFunction"), var_a(var_h), var_a(var_h, var_i, "Generator"),
  var_a(var_h, var_n, function () {
  return this;
  }
  ), var_a(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_o = function () {
  return {
  w: var_s,
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
  var fn_s = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a_1(param_t_1) {
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
  )).then(var_a_1, var_s);
  }
  var_u((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  }
  ,
  regex_u = /data-vod-node\.onflixcdn\.com/i,
  var_c = location.href;
  function var_l() {
  return document.title.replace(/\s*-\s*ONFLIX.*$/i, "").trim();
  }
  function var_f(param_t, param_e) {
  var var_r,
  var_o_1 = JSON.parse(JSON.stringify(param_t)),
  var_a_1 = param_e.quality;
  return var_o_1.type = "video", var_o_1.ext = "m3u8", var_o_1.exts = ["m3u8"], var_o_1.play_list = param_e.play_vid,
  var_o_1.referrer = "https://playembed.vip/", var_o_1.filename = var_l(), var_o_1.url = "https://www.google.com",
  var_a_1 ? (var_o_1.resolution = var_a_1, var_o_1.quality = (null === (var_r = dep_media_constants.r[var_a_1]) ||
  void 0 === var_r ? void 0 : var_r.label) || dep_quality_helper.b.DEFAULT_QUALITY_TYPE) :
  var_o_1.quality = param_e.quality || dep_quality_helper.b.DEFAULT_QUALITY_TYPE,
  var_o_1;
  }
  function var_d(param_t, param_e) {
  return fn_s(this, void 0, void 0, var_o().m(function var_r() {
  var var_n, var_i, var_a_1;
  return var_o().w(function (param_r) {
  for (;;
  ) switch (param_r.p = param_r.n) {
  case 0:
  param_r.p = 0, var_n = "string" == typeof param_e ? JSON.parse(param_e) :
  param_e, param_r.n = 3;
  break;
  case 1:
  return param_r.p = 1, param_r.v, param_r.n = 2, fetch(param_t.url).then(param_t_1 => param_t_1.json(
  ));
  case 2:
  var_n = param_r.v;
  case 3:
  if ("master" !== (null == var_n ? void 0 : var_n.type) || !Array.isArray(var_n.qualities) ||
  !var_n.qualities.length) {
  param_r.n = 5;
  break;
  }
  return var_i = param_t.url, param_r.n = 4, Promise.allSettled(var_n.qualities.map(
  param_e_1 => fn_s(this, void 0, void 0, var_o().m(function var_r_1() {
  var var_n_1, var_a_2;
  return var_o().w(function (param_r_1) {
  for (;;
  ) switch (param_r_1.n) {
  case 0:
  return (var_n_1 = new URL(var_i)).searchParams.set("q", String(param_e_1.qid)),
  param_r_1.n = 1, fetch(var_n_1.href).then(param_t_1 => param_t_1.json());
  case 1:
  if (null == (var_a_2 = param_r_1.v) ? void 0 : var_a_2.play_vid) {
  param_r_1.n = 2;
  break;
  }
  throw new Error("Missing play_vid for qid=" + param_e_1.qid);
  case 2:
  return param_r_1.a(2, var_f(param_t, var_a_2));
  }
  }
  , var_r_1);
  }
  ))));
  case 4:
  return var_a_1 = param_r.v, param_r.a(2, var_a_1.filter(param_t_1 => "fulfilled" === param_t_1.status).map(
  param_t_1 => param_t_1.value));
  case 5:
  return param_r.a(2, []);
  }
  }
  , var_r, this, [[0, 1]]);
  }
  ));
  }
  var obj_h = {
  getDomains: () => ["onflix.", "playembed."],
  parse: {
  sources: [{
  checkSource: param_t => {
  var var_e = param_t.url;
  return regex_u.test(var_e);
  }
  ,
  parse: param_t => {
  var var_e = param_t.media,
  var_r = param_t.response;
  return fn_s(void 0, void 0, void 0, var_o().m(function var_t() {
  var var_n;
  return var_o().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.p = param_t_1.n) {
  case 0:
  return param_t_1.p = 0, param_t_1.n = 1, var_d(var_e, var_r);
  case 1:
  return param_t_1.a(2, param_t_1.v);
  case 2:
  return param_t_1.p = 2, var_n = param_t_1.v, console.warn("[onflix] failed to parse VOD response",
  var_n), param_t_1.a(2, []);
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
  return /playembed\./i.test(var_e);
  }
  ,
  getUrl: param_t => {
  var var_e = param_t.ids.filter(param_t_1 => {
  var var_e_1;
  return regex_u.test(param_t_1.url) && !(null === (var_e_1 = param_t_1.search) ||
  void 0 === var_e_1 ? void 0 : var_e_1.includes("q="));
  }
  );
  return var_e.forEach(param_t_1 => {
  param_t_1.filename = var_l(), param_t_1.type = "video", param_t_1.ext = "m3u8",
  param_t_1.exts = ["m3u8"], param_t_1.referrer = "https://playembed.vip/";
  }
  ), var_e;
  }
  }
  ],
  forceUpdate() {
  location.href !== var_c && (EE.emit("widget.forceUpdate"), var_c = location.href);
  }
  };
  exportsObj.default = obj_h;
  };
