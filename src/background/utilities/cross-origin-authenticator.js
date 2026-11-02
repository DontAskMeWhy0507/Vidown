// Module 722 [utilities] - Cross-origin authentication credential manager
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_encrypted_stream_decipherer = requireFn(140);
  var dep_helper_151 = requireFn(151);
  var dep_request_header_manager = requireFn(175);
  var dep_credential_store = requireFn(517);
  var dep_helper_115 = requireFn(115);
  var var_c = dep_encrypted_stream_decipherer("%WeakMap%", true);
  var var_u = dep_helper_151("WeakMap.prototype.get", true);
  var var_l = dep_helper_151("WeakMap.prototype.set", true);
  var var_d = dep_helper_151("WeakMap.prototype.has", true);
  var var_p = dep_helper_151("WeakMap.prototype.delete", true);
  moduleObj.exports = var_c ? function () {
  var var_e;
  var var_t;
  var obj_r = {
  assert: function (param_e) {
  if (!obj_r.has(param_e)) {
  throw new dep_helper_115("Side channel does not contain " + dep_request_header_manager(
  param_e));
  }
  }
  ,
  delete: function (param_r) {
  if (var_c && param_r && (typeof param_r == "object" || typeof param_r == "function")) {
  if (var_e) {
  return var_p(var_e, param_r);
  }
  }
  else if (dep_credential_store && var_t) {
  return var_t.delete(param_r);
  }
  return false;
  }
  ,
  get: function (param_r) {
  if (var_c && param_r && (typeof param_r == "object" || typeof param_r == "function") &&
  var_e) {
  return var_u(var_e, param_r);
  }
  else {
  return var_t && var_t.get(param_r);
  }
  }
  ,
  has: function (param_r) {
  if (var_c && param_r && (typeof param_r == "object" || typeof param_r == "function") &&
  var_e) {
  return var_d(var_e, param_r);
  }
  else {
  return !!var_t && var_t.has(param_r);
  }
  }
  ,
  set: function (param_r, param_n) {
  if (var_c && param_r && (typeof param_r == "object" || typeof param_r == "function")) {
  var_e ||= new var_c();
  var_l(var_e, param_r, param_n);
  }
  else if (dep_credential_store) {
  var_t ||= dep_credential_store();
  var_t.set(param_r, param_n);
  }
  }
  };
  return obj_r;
  }
  : dep_credential_store;
  };
