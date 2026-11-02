// Module 517 [utilities] - Credential and session token store
export default function (moduleObj, exportsObj, requireFn) {
  "use strict";
  var dep_encrypted_stream_decipherer = requireFn(140);
  var dep_helper_151 = requireFn(151);
  var dep_request_header_manager = requireFn(175);
  var dep_helper_115 = requireFn(115);
  var var_s = dep_encrypted_stream_decipherer("%Map%", true);
  var var_c = dep_helper_151("Map.prototype.get", true);
  var var_u = dep_helper_151("Map.prototype.set", true);
  var var_l = dep_helper_151("Map.prototype.has", true);
  var var_d = dep_helper_151("Map.prototype.delete", true);
  var var_p = dep_helper_151("Map.prototype.size", true);
  moduleObj.exports = !!var_s && function () {
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
  if (var_e) {
  var var_r = var_d(var_e, param_t);
  if (var_p(var_e) === 0) {
  var_e = undefined;
  }
  return var_r;
  }
  return false;
  }
  ,
  get: function (param_t) {
  if (var_e) {
  return var_c(var_e, param_t);
  }
  }
  ,
  has: function (param_t) {
  return !!var_e && var_l(var_e, param_t);
  }
  ,
  set: function (param_t, param_r) {
  var_e ||= new var_s();
  var_u(var_e, param_t, param_r);
  }
  };
  return obj_t;
  };
  };
