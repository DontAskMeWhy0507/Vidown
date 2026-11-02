// Module 721 [utilities] - Session cookie resolver and jar accessor
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_request_header_manager = requireFn(175);
  var dep_helper_115 = requireFn(115);
  function var_i(param_e, param_t, param_r) {
  for (var var_n, var_o = param_e;
  (var_n = var_o.next) != null;
  var_o = var_n) {
  if (var_n.key === param_t) {
  var_o.next = var_n.next;
  if (!param_r) {
  var_n.next = param_e.next;
  param_e.next = var_n;
  }
  return var_n;
  }
  }
  }
  moduleObj.exports = function () {
  var var_e;
  var obj_t = {
  assert: function (param_e) {
  if (!obj_t.has(param_e)) {
  throw new dep_helper_115("Side channel does not contain " + dep_request_header_manager(
  param_e));
  }
  }
  ,
  delete: function (param_t) {
  var var_r = function (param_e, param_t_1) {
  if (param_e) {
  return var_i(param_e, param_t_1, true);
  }
  }
  (var_e, param_t);
  if (var_r && var_e && !var_e.next) {
  var_e = undefined;
  }
  return !!var_r;
  }
  ,
  get: function (param_t) {
  return function (param_e, param_t_1) {
  if (param_e) {
  var var_r = var_i(param_e, param_t_1);
  return var_r && var_r.value;
  }
  }
  (var_e, param_t);
  }
  ,
  has: function (param_t) {
  return function (param_e, param_t_1) {
  return !!param_e && !!var_i(param_e, param_t_1);
  }
  (var_e, param_t);
  }
  ,
  set: function (param_t, param_r) {
  var_e ||= {
  next: undefined
  };
  (function (param_e, param_t_1, param_r_1) {
  var var_n = var_i(param_e, param_t_1);
  if (var_n) {
  var_n.value = param_r_1;
  }
  else {
  param_e.next = {
  key: param_t_1,
  next: param_e.next,
  value: param_r_1
  };
  }
  }
  )(var_e, param_t, param_r);
  }
  };
  return obj_t;
  };
  };
