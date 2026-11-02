// Module 38 [utilities] - Stream / runtime utility component (regenerator-runtime)
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  function var_r() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */
  var var_e;
  var var_t;
  var var_n = typeof Symbol == "function" ? Symbol : {
  };
  var var_i_1 = var_n.iterator || "@@iterator";
  var var_a_1 = var_n.toStringTag || "@@toStringTag";
  function var_s(param_n, param_r, param_i, param_a) {
  var var_s_1 = param_r && param_r.prototype instanceof var_l ?
  param_r : var_l;
  var var_u_1 = Object.create(var_s_1.prototype);
  var_o(var_u_1, "_invoke", function (param_n_1, param_r_1, param_o) {
  var var_i_2;
  var var_a_2;
  var var_s_2;
  var num_l = 0;
  var var_u_2 = param_o || [];
  var flag_d = false;
  var obj_f = {
  p: 0,
  n: 0,
  v: var_e,
  a: var_p_1,
  f: var_p_1.bind(var_e, 4),
  d: function (param_t, param_n_2) {
  var_i_2 = param_t;
  var_a_2 = 0;
  var_s_2 = var_e;
  obj_f.n = param_n_2;
  return obj_c;
  }
  };
  function var_p_1(param_n_2, param_r_2) {
  var_a_2 = param_n_2;
  var_s_2 = param_r_2;
  var_t = 0;
  for (;
  !flag_d && num_l && !var_o_1 && var_t < var_u_2.length;
  var_t++) {
  var var_o_1;
  var var_i_3 = var_u_2[var_t];
  var var_p_2 = obj_f.p;
  var var_h_1 = var_i_3[2];
  if (param_n_2 > 3) {
  if (var_o_1 = var_h_1 === param_r_2) {
  var_s_2 = var_i_3[(var_a_2 = var_i_3[4]) ? 5 : (var_a_2 = 3, 3)];
  var_i_3[4] = var_i_3[5] = var_e;
  }
  }
  else if (var_i_3[0] <= var_p_2) {
  if (var_o_1 = param_n_2 < 2 && var_p_2 < var_i_3[1]) {
  var_a_2 = 0;
  obj_f.v = param_r_2;
  obj_f.n = var_i_3[1];
  }
  else if (var_p_2 < var_h_1 && (var_o_1 = param_n_2 < 3 || var_i_3[0] > param_r_2 ||
  param_r_2 > var_h_1)) {
  var_i_3[4] = param_n_2;
  var_i_3[5] = param_r_2;
  obj_f.n = var_h_1;
  var_a_2 = 0;
  }
  }
  }
  if (var_o_1 || param_n_2 > 1) {
  return obj_c;
  }
  flag_d = true;
  throw param_r_2;
  }
  return function (param_o_1, param_u, param_h) {
  if (num_l > 1) {
  throw TypeError("Generator is already running");
  }
  if (flag_d && param_u === 1) {
  var_p_1(param_u, param_h);
  }
  var_a_2 = param_u;
  var_s_2 = param_h;
  while ((var_t = var_a_2 < 2 ? var_e : var_s_2) || !flag_d) {
  if (!var_i_2) {
  if (var_a_2) {
  if (var_a_2 < 3) {
  if (var_a_2 > 1) {
  obj_f.n = -1;
  }
  var_p_1(var_a_2, var_s_2);
  }
  else {
  obj_f.n = var_s_2;
  }
  }
  else {
  obj_f.v = var_s_2;
  }
  }
  try {
  num_l = 2;
  if (var_i_2) {
  if (!var_a_2) {
  param_o_1 = "next";
  }
  if (var_t = var_i_2[param_o_1]) {
  if (!(var_t = var_t.call(var_i_2, var_s_2))) {
  throw TypeError("iterator result is not an object");
  }
  if (!var_t.done) {
  return var_t;
  }
  var_s_2 = var_t.value;
  if (var_a_2 < 2) {
  var_a_2 = 0;
  }
  }
  else {
  if (var_a_2 === 1 && (var_t = var_i_2.return)) {
  var_t.call(var_i_2);
  }
  if (var_a_2 < 2) {
  var_s_2 = TypeError("The iterator does not provide a '" + param_o_1 + "' method");
  var_a_2 = 1;
  }
  }
  var_i_2 = var_e;
  }
  else if ((var_t = (flag_d = obj_f.n < 0) ? var_s_2 : param_n_1.call(param_r_1,
  obj_f)) !== obj_c) {
  break;
  }
  }
  catch (var_t_1) {
  var_i_2 = var_e;
  var_a_2 = 1;
  var_s_2 = var_t_1;
  }
  finally {
  num_l = 1;
  }
  }
  return {
  value: var_t,
  done: flag_d
  };
  };
  }
  (param_n, param_i, param_a), true);
  return var_u_1;
  }
  var obj_c = {
  };
  function var_l() {
  }
  function var_u() {
  }
  function var_d() {
  }
  var_t = Object.getPrototypeOf;
  var var_f = [][var_i_1] ? var_t(var_t([][var_i_1]())) : (var_o(var_t = {
  }
  , var_i_1, function () {
  return this;
  }
  ), var_t);
  var var_p = var_d.prototype = var_l.prototype = Object.create(var_f);
  function var_h(param_e) {
  if (Object.setPrototypeOf) {
  Object.setPrototypeOf(param_e, var_d);
  }
  else {
  param_e.__proto__ = var_d;
  var_o(param_e, var_a_1, "GeneratorFunction");
  }
  param_e.prototype = Object.create(var_p);
  return param_e;
  }
  var_u.prototype = var_d;
  var_o(var_p, "constructor", var_d);
  var_o(var_d, "constructor", var_u);
  var_u.displayName = "GeneratorFunction";
  var_o(var_d, var_a_1, "GeneratorFunction");
  var_o(var_p);
  var_o(var_p, var_a_1, "Generator");
  var_o(var_p, var_i_1, function () {
  return this;
  }
  );
  var_o(var_p, "toString", function () {
  return "[object Generator]";
  }
  );
  return (var_r = function () {
  return {
  w: var_s,
  m: var_h
  };
  }
  )();
  }
  function var_o(param_e, param_t, param_n, param_r) {
  var var_i_1 = Object.defineProperty;
  try {
  var_i_1({
  }
  , "", {
  }
  );
  }
  catch (var_e) {
  var_i_1 = 0;
  }
  (var_o = function (param_e_1, param_t_1, param_n_1, param_r_1) {
  function var_a_1(param_t_2, param_n_2) {
  var_o(param_e_1, param_t_2, function (param_e_2) {
  return this._invoke(param_t_2, param_n_2, param_e_2);
  }
  );
  }
  if (param_t_1) {
  if (var_i_1) {
  var_i_1(param_e_1, param_t_1, {
  value: param_n_1,
  enumerable: !param_r_1,
  configurable: !param_r_1,
  writable: !param_r_1
  }
  );
  }
  else {
  param_e_1[param_t_1] = param_n_1;
  }
  }
  else {
  var_a_1("next", 0);
  var_a_1("throw", 1);
  var_a_1("return", 2);
  }
  }
  )(param_e, param_t, param_n, param_r);
  }
  requireFn.d(exportsObj, "a", function () {
  return var_a;
  }
  );
  function var_i(param_e, param_t, param_n, param_r) {
  return new (param_n ||= Promise)(function (param_o, param_i) {
  function var_a_1(param_e_1) {
  try {
  var_c(param_r.next(param_e_1));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_s(param_e_1) {
  try {
  var_c(param_r.throw(param_e_1));
  }
  catch (var_e) {
  param_i(var_e);
  }
  }
  function var_c(param_e_1) {
  var var_t;
  if (param_e_1.done) {
  param_o(param_e_1.value);
  }
  else {
  (var_t = param_e_1.value, var_t instanceof param_n ? var_t :
  new param_n(function (param_e_2) {
  param_e_2(var_t);
  }
  )).then(var_a_1, var_s);
  }
  }
  var_c((param_r = param_r.apply(param_e, param_t || [])).next());
  }
  );
  }
  function var_a(param_e) {
  return var_i(this, undefined, undefined, var_r().m(function var_t() {
  var var_n;
  return var_r().w(function (param_t) {
  while (true) {
  switch (param_t.p = param_t.n) {
  case 0:
  param_t.p = 0;
  param_t.n = 1;
  return chrome.runtime.sendMessage(param_e);
  case 1:
  param_t.n = 3;
  break;
  case 2:
  param_t.p = 2;
  var_n = param_t.v;
  console.log("Caught", var_n);
  case 3:
  return param_t.a(2);
  }
  }
  }
  , var_t, null, [[0, 2]]);
  }
  ));
  }
  };
