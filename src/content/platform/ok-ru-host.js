// Module 680 - Savior Ok Ru Host
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_network_monitor = requireFn(20);
  function var_i() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_a = var_r.toStringTag || "@@toStringTag";
  function var_s(param_r, param_n, param_i, param_a) {
  var var_s_1 = param_n && param_n.prototype instanceof var_c ?
  param_n : var_c,
  var_l_1 = Object.create(var_s_1.prototype);
  return var_o(var_l_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_a_1,
  var_s_2,
  num_c = 0,
  var_l_2 = param_i_1 || [],
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
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
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
  (param_r, param_i, param_a), !0), var_l_1;
  }
  var obj_u = {
  };
  function var_c() {
  }
  function var_l() {
  }
  function var_f() {
  }
  var_e = Object.getPrototypeOf;
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_o(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f.prototype = var_c.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_o(param_t, var_a, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l.prototype = var_f, var_o(var_h, "constructor", var_f), var_o(var_f,
  "constructor", var_l), var_l.displayName = "GeneratorFunction", var_o(var_f, var_a,
  "GeneratorFunction"), var_o(var_h), var_o(var_h, var_a, "Generator"), var_o(var_h,
  var_n, function () {
  return this;
  }
  ), var_o(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_i = function () {
  return {
  w: var_s,
  m: var_p
  };
  }
  )();
  }
  function var_o(param_t, param_e, param_r, param_n) {
  var var_i_1 = Object.defineProperty;
  try {
  var_i_1({
  }
  , "", {
  }
  );
  }
  catch (var_t) {
  var_i_1 = 0;
  }
  (var_o = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_a(param_e_2, param_r_2) {
  var_o(param_t_1, param_e_2, function (param_t_2) {
  return this._invoke(param_e_2, param_r_2, param_t_2);
  }
  );
  }
  param_e_1 ? var_i_1 ? var_i_1(param_t_1, param_e_1, {
  value: param_r_1,
  enumerable: !param_n_1,
  configurable: !param_n_1,
  writable: !param_n_1
  }
  ) : param_t_1[param_e_1] = param_r_1 : (var_a("next", 0), var_a("throw", 1), var_a(
  "return", 2));
  }
  )(param_t, param_e, param_r, param_n);
  }
  var fn_a = function (param_t, param_e, param_r, param_n) {
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
  };
  exportsObj.default = {
  index: 90,
  getUrl(param_t, param_e, param_r, param_o, param_s) {
  return fn_a(this, void 0, void 0, var_i().m(function var_e() {
  var var_r, var_a, var_u, var_c, var_l;
  return var_i().w(function (param_e_1) {
  for (;;
  ) switch (param_e_1.n) {
  case 0:
  if (!param_t.includes("ok.ru") || !document.querySelectorAll("div[data-options]")) {
  param_e_1.n = 7;
  break;
  }
  if (!param_o || !param_o.match(/.+vd[0-9]{1,3}\.mycdn\.me\/video.m3u8/)) {
  param_e_1.n = 2;
  break;
  }
  return param_e_1.n = 1, fetch(param_o, param_s).then(param_t_1 => param_t_1.text(
  ));
  case 1:
  return var_r = param_e_1.v, param_e_1.a(2, {
  return: !0,
  data: var_r
  }
  );
  case 2:
  if (!param_o || !param_o.includes(".mpd")) {
  param_e_1.n = 4;
  break;
  }
  return param_e_1.n = 3, fetch(param_o, param_s).then(param_t_1 => param_t_1.text(
  ));
  case 3:
  return var_a = param_e_1.v, param_e_1.a(2, {
  return: !0,
  data: var_a
  }
  );
  case 4:
  if (!(null == (var_u = Object(dep_network_monitor.b)()) ? void 0 :
  var_u.hlsUrl)) {
  param_e_1.n = 6;
  break;
  }
  return var_c = var_u.hlsUrl, param_e_1.n = 5, fetch(var_c).then(param_t_1 => param_t_1.text(
  ));
  case 5:
  if (!(var_l = param_e_1.v)) {
  param_e_1.n = 6;
  break;
  }
  return param_e_1.a(2, {
  return: !0,
  data: {
  url: var_u,
  response: var_l,
  referrer: location.href
  }
  }
  );
  case 6:
  if (!var_u) {
  param_e_1.n = 7;
  break;
  }
  return param_e_1.a(2, {
  return: !0,
  data: {
  url: var_u,
  referrer: location.href
  }
  }
  );
  case 7:
  return param_e_1.a(2);
  }
  }
  , var_e);
  }
  ));
  }
  };
  };
