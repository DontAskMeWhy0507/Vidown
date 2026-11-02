// Module 147 - Savior Streamc_xyz Host
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_media_constants = requireFn(1),
  dep_dom_utils = requireFn(0);
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
  var_u,
  fn_c = function (param_t, param_e, param_r, param_n) {
  return new (param_r || (param_r = Promise))(function (param_i, param_o) {
  function var_a_1(param_t_1) {
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
  )).then(var_a_1, var_s_1);
  }
  var_u_1((param_n = param_n.apply(param_t, param_e || [])).next());
  }
  );
  }
  ,
  var_l = null === (var_s = document.getElementById("player")) ||
  void 0 === var_s ? void 0 : var_s.dataset.obf;
  exportsObj.default = {
  index: 26,
  getUrl(param_t, param_e, param_r, param_a, param_s, param_f) {
  var var_d, var_h, var_p, var_v;
  return fn_c(this, void 0, void 0, var_o().m(function var_t() {
  var var_e, var_r, var_s_1, var_c, var_f, var_m;
  return var_o().w(function (param_t_1) {
  for (;;
  ) switch (param_t_1.n) {
  case 0:
  if (!/\.streamc\.xyz\/embed\.php/.test(location.href)) {
  param_t_1.n = 4;
  break;
  }
  return Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.SCRIPTING.INJECT,
  file: "embed-streamc",
  frameUrl: location.href
  }
  ), param_t_1.n = 1, new Promise(param_t_2 => setTimeout(param_t_2, 1e3));
  case 1:
  if (var_u = null === (var_d = document.querySelector("video")) ||
  void 0 === var_d ? void 0 : var_d.getAttribute("savior-video-detail"), var_l) {
  param_t_1.n = 4;
  break;
  }
  return param_t_1.n = 2, fetch(location.href);
  case 2:
  if (!(var_e = param_t_1.v).ok) {
  param_t_1.n = 4;
  break;
  }
  return param_t_1.n = 3, var_e.text();
  case 3:
  var_r = param_t_1.v, var_s_1 = new DOMParser(), var_c = var_s_1.parseFromString(
  var_r, "text/html"), (var_f = null === (var_h = var_c.getElementById("player")) ||
  void 0 === var_h ? void 0 : var_h.dataset.obf) && (var_l = var_f);
  case 4:
  if (var_l || (var_l = null === (var_p = document.getElementById("player")) ||
  void 0 === var_p ? void 0 : var_p.dataset.obf), var_m = JSON.parse((null === (
  var_v = document.getElementById("stream-bootstrap")) || void 0 === var_v ?
  void 0 : var_v.textContent) || "null"), !(param_a && /\.streamc\.xyz\/embed\.php/.test(
  param_a) && (var_l || (null == var_m ? void 0 : var_m.video) ||
  var_u))) {
  param_t_1.n = 5;
  break;
  }
  return param_t_1.a(2, {
  return: !0,
  data: {
  obf: var_l,
  videoHash: var_u,
  bootstrap: var_m
  }
  }
  );
  case 5:
  return param_t_1.a(2);
  }
  }
  , var_t);
  }
  ));
  }
  };
  };
