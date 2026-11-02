// Module 313 - Savior Phimmoichillee_pro Extractor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  requireFn.r(exportsObj);
  var dep_dom_utils = requireFn(0),
  dep_media_constants = requireFn(1),
  dep_url_utils = requireFn(3);
  function var_a() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var var_t,
  var_e,
  var_r = "function" == typeof Symbol ? Symbol : {
  }
  ,
  var_n = var_r.iterator || "@@iterator",
  var_i = var_r.toStringTag || "@@toStringTag";
  function var_o(param_r, param_n, param_i, param_o) {
  var var_a_1 = param_n && param_n.prototype instanceof var_c ?
  param_n : var_c,
  var_l_1 = Object.create(var_a_1.prototype);
  return var_s(var_l_1, "_invoke", function (param_r_1, param_n_1, param_i_1) {
  var var_o_1,
  var_a_2,
  var_s_1,
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
  return var_o_1 = param_e, var_a_2 = 0, var_s_1 = var_t, obj_d.n = param_r_2, obj_u;
  }
  };
  function var_h_1(param_r_2, param_n_2) {
  for (var_a_2 = param_r_2, var_s_1 = param_n_2, var_e = 0;
  !flag_f && num_c && !var_i_1 && var_e < var_l_2.length;
  var_e++) {
  var var_i_1,
  var_o_2 = var_l_2[var_e],
  var_h_2 = obj_d.p,
  var_p_1 = var_o_2[2];
  param_r_2 > 3 ? (var_i_1 = var_p_1 === param_n_2) && (var_s_1 = var_o_2[(var_a_2 = var_o_2[4]) ?
  5 : (var_a_2 = 3, 3)], var_o_2[4] = var_o_2[5] = var_t) : var_o_2[0] <= var_h_2 &&
  ((var_i_1 = param_r_2 < 2 && var_h_2 < var_o_2[1]) ? (var_a_2 = 0, obj_d.v = param_n_2,
  obj_d.n = var_o_2[1]) : var_h_2 < var_p_1 && (var_i_1 = param_r_2 < 3 ||
  var_o_2[0] > param_n_2 || param_n_2 > var_p_1) && (var_o_2[4] = param_r_2, var_o_2[5] = param_n_2,
  obj_d.n = var_p_1, var_a_2 = 0));
  }
  if (var_i_1 || param_r_2 > 1) return obj_u;
  throw flag_f = !0, param_n_2;
  }
  return function (param_i_2, param_l, param_p) {
  if (num_c > 1) throw TypeError("Generator is already running");
  for (flag_f && 1 === param_l && var_h_1(param_l, param_p), var_a_2 = param_l, var_s_1 = param_p;
  (var_e = var_a_2 < 2 ? var_t : var_s_1) || !flag_f;
  ) {
  var_o_1 || (var_a_2 ? var_a_2 < 3 ? (var_a_2 > 1 && (obj_d.n = -1), var_h_1(var_a_2,
  var_s_1)) : obj_d.n = var_s_1 : obj_d.v = var_s_1);
  try {
  if (num_c = 2, var_o_1) {
  if (var_a_2 || (param_i_2 = "next"), var_e = var_o_1[param_i_2]) {
  if (!(var_e = var_e.call(var_o_1, var_s_1))) throw TypeError("iterator result is not an object");
  if (!var_e.done) return var_e;
  var_s_1 = var_e.value, var_a_2 < 2 && (var_a_2 = 0);
  }
  else 1 === var_a_2 && (var_e = var_o_1.return) && var_e.call(var_o_1), var_a_2 < 2 &&
  (var_s_1 = TypeError("The iterator does not provide a '" + param_i_2 + "' method"),
  var_a_2 = 1);
  var_o_1 = var_t;
  }
  else if ((var_e = (flag_f = obj_d.n < 0) ? var_s_1 : param_r_1.call(param_n_1,
  obj_d)) !== obj_u) break;
  }
  catch (var_e_1) {
  var_o_1 = var_t, var_a_2 = 1, var_s_1 = var_e_1;
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
  (param_r, param_i, param_o), !0), var_l_1;
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
  var var_d = [][var_n] ? var_e(var_e([][var_n]())) : (var_s(var_e = {
  }
  , var_n, function () {
  return this;
  }
  ), var_e),
  var_h = var_f.prototype = var_c.prototype = Object.create(var_d);
  function var_p(param_t) {
  return Object.setPrototypeOf ? Object.setPrototypeOf(param_t, var_f) :
  (param_t.__proto__ = var_f, var_s(param_t, var_i, "GeneratorFunction")), param_t.prototype = Object.create(
  var_h), param_t;
  }
  return var_l.prototype = var_f, var_s(var_h, "constructor", var_f), var_s(var_f,
  "constructor", var_l), var_l.displayName = "GeneratorFunction", var_s(var_f, var_i,
  "GeneratorFunction"), var_s(var_h), var_s(var_h, var_i, "Generator"), var_s(var_h,
  var_n, function () {
  return this;
  }
  ), var_s(var_h, "toString", function () {
  return "[object Generator]";
  }
  ), (var_a = function () {
  return {
  w: var_o,
  m: var_p
  };
  }
  )();
  }
  function var_s(param_t, param_e, param_r, param_n) {
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
  (var_s = function (param_t_1, param_e_1, param_r_1, param_n_1) {
  function var_o(param_e_2, param_r_2) {
  var_s(param_t_1, param_e_2, function (param_t_2) {
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
  var fn_u = function (param_t, param_e, param_r, param_n) {
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
  obj_l = {
  getDomains: () => ["phimmoichillei."],
  parse: {
  default: param_t => [param_t.media]
  }
  ,
  urls: [{
  checkUrl: () => list_c.some(param_t => /m3u8\-play\-\d+\.playstreamz\.site\/m3u8\/.+/.test(
  param_t.url)),
  getUrl: () => fn_u(void 0, void 0, void 0, var_a().m(function var_t() {
  var var_e, var_r, var_s_1, var_u, var_l, var_f, var_d, var_h;
  return var_a().w(function (param_t) {
  for (;;
  ) switch (param_t.n) {
  case 0:
  if (!list_c.length) {
  param_t.n = 2;
  break;
  }
  return var_r = list_c[0].url, var_s_1 = Object(dep_url_utils.f)(var_r), var_u = document.title ||
  (null === (var_e = document.querySelector("h1")) || void 0 === var_e ?
  void 0 : var_e.innerHTML), param_t.n = 1, Object(dep_dom_utils.sendMessage)({
  type: dep_media_constants.b.GET_URL,
  params: {
  url: var_r
  }
  }
  );
  case 1:
  if (!(null == (var_l = param_t.v) ? void 0 : var_l.url)) {
  param_t.n = 2;
  break;
  }
  return var_f = var_l.url.split("\n"), var_d = var_f.map(param_t_1 => {
  var var_e_1;
  if (param_t_1.includes("clencv1")) {
  var var_r_1 = null === (var_e_1 = param_t_1.split("clencv1/")) ||
  void 0 === var_e_1 ? void 0 : var_e_1[1];
  return Object(dep_dom_utils.parseLinkPhimmoiChillee)(var_r_1);
  }
  return param_t_1;
  }
  ), var_h = var_d.join("\n"), var_s_1.play_list = var_h, var_s_1.filename = var_u,
  var_s_1.type = "video", param_t.a(2, [var_s_1]);
  case 2:
  return param_t.a(2);
  }
  }
  , var_t);
  }
  ))
  }
  ],
  processRequestIds: param_t => !(list_c.length || !/m3u8\-play\-\d+\.playstreamz\.site\/m3u8\/.+/.test(
  param_t.url)) && (list_c.push(param_t), !0)
  };
  exportsObj.default = obj_l;
  };
